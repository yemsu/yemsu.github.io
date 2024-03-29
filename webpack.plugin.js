const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')
const SitemapPlugin = require('sitemap-webpack-plugin').default
const postsInfo = require('./public/posts/index.json')

const posts = postsInfo.filter(post => !post.hidden)
const routes = posts.map(post => `/${post.name}`)
const paths = posts.map(post => {
  return {
    path: `/${post.name}/`,
    lastmod: post.lastmod || post.date,
    changefreq: 'yearly'
  }
})
module.exports = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, 'docs'),
    routes,
    postProcess(renderedRoute) {
      let { html, route } = renderedRoute;
      const { title, description, keywords } = posts.find(post => route.includes(post.name))
      const titleText = title ? title.replace(/<br>/ig, '') : process.env.VUE_APP_TITLE
      const descriptionText = description || '우당탕탕 프론트엔드 개발 일지 Github pages 블로그'
      const keywordsText = keywords || '개발, 프론트엔드, 블로그, github pages, Vue3'
      const url = `${process.env.VUE_APP_BASE_URL}${route}`
      const imgUrl = `${process.env.VUE_APP_BASE_URL}/images/og_image.jpg`
      
      const metaData = `
        <title>${titleText}</title>
        <meta name="title" content="${titleText}" />
        <meta name="description" content="${descriptionText}" />
        <meta name="keywords" content="${keywordsText}" />
        <meta property="og:url" content="${url}" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="${titleText}" />
        <meta property="og:description" content="${descriptionText}" />
        <meta property="og:image" content="${imgUrl}" />
        <meta property="twitter:card" content="${imgUrl}" />
        <meta property="twitter:url" content="${url}" />
        <meta property="twitter:title" content="${titleText}" />
        <meta property="twitter:description" content="${descriptionText}" />
        <meta property="twitter:image" content="${imgUrl}" />
      `;
      const start = html.indexOf('<head>') + '<head>'.length;
      html = html.slice(0, start) + metaData + html.slice(start);
      renderedRoute.html = html;
      return renderedRoute;
    },
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      renderAfterElementExists: '#app'
    }),
  }),
  new SitemapPlugin({
    base: process.env.VUE_APP_BASE_URL,
    paths
  })
]