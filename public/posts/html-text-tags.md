
### b 태그

```html
<b></b> 
```
<b>This Text is bold</b>
- 굵은 글씨체 
- 딱히 의미를 지니진 않은, 시멘틱 요소가 없는 태그.
- 그냥 보이는 글씨를 굵게 보이게 해주는 것 뿐!
- <code>strong</code>태그와 보이는 것은 같지만 태그의 의미는 훨씬 약하다고 할 수 있어요.
- <code>b</code>태그보다 더 적합한 태그가 있는지 고려 해 보고 사용하는 것이 좋아요.
- <code>b</code>태그에 의미를 넣기 위해 클래스를 사용하는 것도 좋은 방법입니다!

### strong 태그

```html
<strong></strong> 
```
<strong>This text is strong</strong></strong> 
- 높은 중요의미를 지닌 굵은 텍스트 
- 객관적인 중요성을 의미
- 겉으로 보기에는 <code>b</code>태그와 같아요.
- 중첩하면 할수록 중요 의미가 커집니다. 

### i 태그

```html
<i></i>
```
<i>This text is italic</i>
- 기울어진 텍스트 
- <code>b</code>태그와 비슷하게 시멘틱적 요소가 없다.
- 그런데 최근엔 조금 다른 어조임을 나타내기도 한다고해요.(책이나 영화의 이름,외국 단어, 혹은 단어가 의미론적 뜻 대신에 단어의 정의를 나타낼떄처럼)
- <code>i</code>보다 더 적합한 태그가 있는지 고려 해 보고 사용하는 것이 좋아요.
- <code>i</code>에 의미를 넣기 위해 클래스를 사용하는 것도 좋은 방법입니다!

### em 태그

```html
<em></em> 
```
This text is <em>emphasized</em>

- 강조의미를 지닌 기울어진 텍스트 
- <code>strong</code>태그와 비슷하게 중요하다는 의미이지만 주관적으로 강조를 하고싶은 곳에 사용.
- 중첩하면 할수록 중요 의미가 커집니다. 

### mark 태그

```html
<mark></mark>
```
HTML <mark>Marked</mark> Formatting 

- 강조 마킹된 텍스트(형광펜느낌) 
- 강조를 하지만 중요하다는 의미는 아니예요. strong과 의미와 다릅니다.
- 주로 특정 문맥에 관련된 참조 목적으로 하이라이트 표시가 됩니다!
- 특정 단어로 검색을 했을 때 그 검색으로 검색된 키워드를 mark표시하기도 합니다.
- 딱 저 의미가 아니면 <code>mark</code>태그가 아닌 <code>span</code>태그를 사용 하세요!

### small 태그

```html
<small></small>
```
HTML <small>small</small> Formatting

- 좀 더 작은 텍스트 
- 전형적으로 책임 한계에 대한 고지, 경고, 법적 제한 또는 저작권등을 나타냅니다. 또한 법적인 귀속이나 저작권 요구사항을 만족시키기 위해 사용되기도 합니다.
- 주로 짧은 텍스트에 사용됩니다!

### del 태그

```html
<del></del> 
```
My favorite color is <del>blue</del> red.

- 삭제됐다는 의미를 지닌 중간 라인 텍스트
- 삭제 표시를 하고 그 이유와 삭제된 시점에 관련된 정보를 입력 할 수 있습니다.
- <속성> cite: del요소의 변화에 대해 설명이 되어 있는 곳의 위치를 명시합니다.
- datetime: 변경이 일어난 시간과 날짜를 명시합니다.