export default [
  {
    en: 'IPARTNERS',
    kor: '아이파트너즈' ,
    team: 'UX',
    job: '웹퍼블리셔',
    period: {start: [2017, 3], end: []},
    descriptions: [
      '웹 에이전시',
      '대기업 웹 사이트 위주',
    ],
    works: [
      '사이트 유지보수',
      '사이트 리뉴얼',
      '사이트 구축',
      '웹표준',
      '웹접근성',
      'SEO',
    ],
    projects: [
      {
        title: '현대닷컴',
        links: [
          {title: '현대닷컴', url: 'https://www.hyundai.com/kr/ko/e'}
        ],
        period: {start: [2020, 4], end: []},
        members: 3,
        type: '운영',
        descriptions: [
          '웹 접근성 인증 갱신 작업',
          '[개선] 다국어 차량 상세 페이지 node.js 환경 적용',
          {
            title: '[개선] <a href="https://www.hyundai.com/kr/ko/e/vehicles/grandeur/intro" title="새창" tartget="_blank">차량 상세 페이지</a> 디자인 개편 작업',
            desc: [
              'PC는 Full page Carousel, Mobile에서는 스크롤로 변환',
              '여러 컴포넌트들과 편리한 상태 공유를 위해 Vuex store 이용'
            ],
          },
          {
            title: '[개선] 차량 상세 페이지',
            desc: [
              '반복되는 단순 작업 자동화 제안 후 작업',
              'pc 소스 기준으로 mobile 소스 자동 삽입'
            ]
          },
          {
            title: '[개선] 내 차 만들기/차량 상세 페이지',
            desc: [
              '선택한 차량 및 옵션 바탕으로 전시차량 조회 기능 추가'
            ]
          },
          {
            title: '[개선] <a href="https://www.hyundai.com/kr/ko/e/vehicles/comparison" title="새창" tartget="_blank">모델비교</a>/<a href="https://www.hyundai.com/kr/ko/e/vehicles/comparison/popup/my_comparison?carCodes=DN08,DN09&purposeCodes=J,J" title="새창" tartget="_blank">트림비교</a> 페이지 모바일 UI/UX 개선',
            desc: [
              '모바일 스와이프, 차량 순서 이동 기능 추가',
              '반복되는 기존 소스 컴포넌트로 리팩토링하여 코드 용량 및 유지 보수성 개선'
            ]
          }
        ],
        keywords: [
          'Vue.js',
          'Vuex',
          'Nuxt.js',
          'javascript',
          'SCSS',
          'Git',
          'Git lab',
          'Jenkins',
          'SVN',
          'AEM',
          'HTML/CSS',
        ]
      },
      {
        title: '현대 월드와이드',
        links: [
          {title: '현대 월드와이드', url: 'https://www.hyundai.com/worldwide/en'},
          {title: '현대 WWN 3.0(28개 해외 사이트)', url: 'https://org3-www.hyundai.com/template_ar/ar'},
        ],
        period: {start: [2019, 4], end: [2020, 3]},
        members: 1,
        type: '운영',
        descriptions: [
          'AEM 컴포넌트 관리 및 업데이트',
          '월드와이드 기준으로 WWN 3.0 확산 적용',
          '컨텐츠 페이지 정기 업데이트',
          '인도 개발자와 협업',
          {
            title: '[개선] 디자인 개편에 따른 신규 컴포넌트 생성',
            desc: [
              '독일 디자인 업체와 협업'
            ]
          },
          '[개선] 현대 월드와이드 타 업체 개편 이후 WWN 3.0 사이트 확산 작업',
        ],
        keywords: [
          'javascript',
          'jQuery',
          'Zeplin',
          // 'Jira',
          'AEM',
          'HTML/CSS',
        ]
      },
      {
        title: '기아 브랜드 사이트',
        links: [
          {title: '기아닷컴', url: 'https://www.kia.com/kr/main.html'},
          {title: '기아 월드와이드', url: 'http://www.kia.com/worldwide/main.do'},
          {title: '플레이 기아', url: 'https://play.kia.com/main.do'},
          {title: '기아 CSR', url: 'https://csr.kia.com:444/usr/ma/ma100Det.kcsr'},
          {title: '기아 PR', url: 'https://pr.kia.com/ko/main.do'},
          {title: '기아 군수', url: 'https://military.kia.com/kr/main.do'},
        ],
        period:{start: [2019, 3], end: [2020, 3]},
        members: 2,
        type: '운영',
        descriptions: [
          '보안 문제로 개발에서만 배포 진행 가능하여 소스 내 주석과 함께 작업 내용 문서화 하여 개발에 전달',
          '웹 접근성 인증 갱신 작업',
          '[개선] 플레이 기아 이벤트 페이지 웹표준 개선',
          '[개선] 기아 CSR 컨텐츠 페이지 웹표준 개선',
        ],
        keywords: [
          'javascript',
          'jQuery',
          'HTML/CSS',
        ]
      },
      {
        title: '삼성자산운용·삼성코덱스',
        links: [
          {title: '삼성 자산 운용', url: 'http://www.samsungfund.com/main.action'},
          {title: 'mobile', url: 'http://m.samsungfund.com/main.action'},
          {title: 'EN', url: 'http://www.eng.samsungfund.com/main.do'},
          {title: 'EN mobile', url: 'http://m.eng.samsungfund.com/main.do'},
          {title: '코덱스', url: 'http://www.kodex.com/main.do'},
          {title: 'mobile', url: 'http://m.kodex.com/main.do'},
          {title: 'EN', url: 'http://www.eng.kodex.com/main.do'},
          {title: 'EN mobile', url: 'http://m.eng.kodex.com/main.do'},
        ],
        period: {start: [2020, 1], end: [2020, 4]},
        members: 3,
        type: '접근성',
        descriptions: [
          '웹 접근성 인증 취득 작업',
          '국문/영문, PC/MOBILE 총 8개 사이트 작업',
          'Highcharts, bx slider, date picker 등 플러그인 접근성이 주요 이슈',
        ],
        keywords: [
          'jQuery',
          'WAI-ARIA',
          'HTML/CSS',
        ]
      },
      {
        title: '현대 N brand',
        links: [
          {title: '현대 N brand', url: 'https://www.hyundai-n.com/'},
        ],
        period: {start: [2019, 7], end: [2020, 4]},
        members: 1,
        type: 'Google Tag Manager',
        descriptions: [
          'Google Tag Manager 신규 적용 및 운영',
          'Youtube 관련 커스텀 태그 작업이 주요 이슈',
        ],
        keywords: [
          'javascript',
          'HTML/CSS',
          'Google Tag Manager',
          'Google Analytics',
        ]
      },
      {
        title: '소니 G Master',
        links: [
          {title: '소니 G Master', url: 'https://www.sony.co.kr/alpha/handler/alphaCommon-Start?PageName=jsp/alpha/gmaster/index.jsp'},
        ],
        period: {start: [2019, 2], end: [2019, 3]},
        members: 1,
        type: '리뉴얼 구축',
        descriptions: [
          '소니 본사에 약 1달간 파견',
          '플러그인 없이 기능 구현',
          'parallax, animation 등 스크롤 이벤트에 따른 효과 제안하여 작업 진행',
          '갤러리 페이지 내 사진 자세히 보기 팝업(PC) 세로형 디자인 > 가로형으로 제안하여 작업 진행',
        ],
        keywords: [
          'jQuery',
          'HTML/CSS',
        ]
      },
      {
        title: '아모레 퍼시픽 브랜드 사이트',
        links: [
          {title: '설화수', url: 'https://www.sulwhasoo.com/kr/ko/index.html'},
          {title: '아모레 퍼시픽', url: 'https://www.amorepacific.com/kr/ko/index.html'},
          {title: '아이오페', url: 'https://www.iope.com/kr/ko/index.html'},
          {title: '헤라', url: 'https://www.hera.com/kr/ko/index.html'},
          {title: '마몽드', url: 'https://www.mamonde.com/kr/ko/index.html'},
          {title: '한율', url: 'https://www.hanyul.com/kr/ko/index.html'},
          {title: '미쟝센', url: 'http://www.miseenscene.com/main.do'},
          {title: '려', url: 'https://www.ryo.com/kr/ko/index.html'},
          {title: '바이탈뷰티', url: 'https://www.vitalbeautie.com/kr/ko/index.html'},
          {title: '프리메라', url: 'https://www.primerabeauty.com/kr/ko/index.html'},
          {title: '해피바스', url: 'https://www.happybath.com/kr/ko/index.html'},
        ],
        period: {start: [2017, 3], end: [2019, 2]},
        members: 2,
        type: '운영',
        descriptions: [
          '정기 상품 상세 업데이트, 이벤트 페이지 작업',
          'AEM 컴포넌트 관리 및 업데이트',
          '웹 접근성 인증 갱신 작업',
          '[개선] 설화수 스파 예약 시스템 개선',
          '[개선] 한율 메인 페이지 디자인 개선',
          '[개선] 미쟝센 신규 이벤트 템플릿 작업',
          '[개선] 마몽드 상품 상세페이지 개선'
        ],
        keywords: [
          'jQuery',
          'AEM',
          'Eclipse',
          'HTML/CSS',
        ]
      },

    ]
  },
  {
    en: 'RZA',
    kor: 'RZA',
    team: '',
    job: '웹디자이너',
    period: {start: [2016, 7], end: [2017, 3]},
    descriptions: [
      '웹 에이전시',
      '소규모 웹 사이트 위주',
      '메일, 블로그 컨텐츠 제작'
    ],
    works: [
      '사이트 유지보수',
      '사이트 구축',
      '웹표준',
      '웹디자인',
    ],
    projects: [
      {
        title: 'DUVIVIER',
        links: [
          {title: 'DUVIVIER', url: 'http://duvivier.co.kr/'}
        ],
        period: {start: [2017, 1], end: [2017, 2]},
        members: '1',
        type: '구축',
        descriptions: [
          '프랑스 침대 브랜드 DUVIVIER의 브랜드 사이트 구축',
          'one page scroll',
        ],
        keywords: [
          'jQuery',
          'HTML/CSS',
        ]
      },
      {
        title: '목일가',
        links: [
          {title: '목일가', url: 'http://wdshop.co.kr/'}
        ],
        period: {start: [2016, 12], end: [2017, 1]},
        members: '1',
        type: '구축',
        descriptions: [
          '가구 브랜드 목일가 브랜드 사이트 구축',
          'one page scroll',
        ],
        keywords: [
          'jQuery',
          'HTML/CSS',
        ]
      },
      {
        title: '청년희망재단 동남본부 모바일',
        links: [
          {title: '청년희망재단 동남본부 모바일', url: 'https://www.yhf.kr/m/dongnam/index.do'}
        ],
        period: {start: [2016, 7], end: [2017, 3]},
        members: '1',
        type: '운영',
        descriptions: [
          '정기 메일 컨텐츠 디자인, 퍼블리싱',
          '블로그 컨텐츠 작업',
        ],
        keywords: [
          'jQuery',
          'HTML/CSS',
        ]
      },
      {
        title: '성형외과·쇼핑몰',
        links: [
          {title: '성형외과', url: 'http://www.1004sky.co.kr/new2018/index.php'},
          {title: '쇼핑몰', url: 'http://dualforms.co.kr/'}
        ],
        period: {start: [2016, 7], end: [2017, 3]},
        members: '2',
        type: '운영',
        descriptions: [
          '유지보수 및 소규모 개선',
        ],
        keywords: [
          'jQuery',
          'HTML/CSS',
        ]
      },
    ]
  },
  {
    en: 'LAWKET',
    kor: '로켓',
    team: '시스템개발팀',
    job: '웹디자이너',
    period: {start: [2015, 10], end: [2016, 6]},
    descriptions: [
      '법률 o2o 플랫폼 스타트업',
      '자회사 플랫폼 유지보수 및 버전업',
      '운영 종료',
    ],
    works: [
      '사이트 유지보수',
      '사이트 구축',
      '웹표준',
      '웹디자인',
    ],
    projects: [
      {
        title: '로켓닷컴',
        period: {start: [2015, 10], end: [2016, 6]},
        members: '2',
        type: '운영/리뉴얼',
        descriptions: [
          '법률 o2o 플랫폼',
          '상시 사이트 테스트 진행, 버그 및 개선 사항 작업',
          '1ver > 1.5ver 버전업 작업',
        ],
        keywords: [
          'jQuery',
          'HTML/CSS',
        ]
      },
      {
        title: 'LAWKET 기업 사이트',
        period: {start: [2015, 10], end: [2015, 12]},
        members: '1',
        type: '구축',
        descriptions: [
          '첫 회사 첫 프로젝트',
          '기획부터 사이트에 사용 될 직원들 사진 촬영, 디자인, 퍼블리싱까지 모두 재미있게 진행했던 1인 프로젝트',
        ],
        keywords: [
          'jQuery',
          'HTML/CSS',
        ]
      },
    ]
  }
]