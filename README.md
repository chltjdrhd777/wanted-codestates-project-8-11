## 📑 프로젝트 소개

WANTED & CODESTATES 프리온보딩 코스 

TEAM 8 팀기업과제 1 입니다.

<br>

### < Gravy Lab >

PROJECT PERIOD: 2022.02.22 ~ 2022.02.23

<br>

[배포링크](https://wanted-8-11-i7.netlify.app/)

<br>

## ✨ 주요 기능

- 사용자가 입력한 설문조사 결과값을 그래프로 보여줍니다.

- 검색결과에 따라 해당 기업이 존재할 시 해당기업과의 비교 그래프를 띄워줍니다.

- 탭 선택에 따른 바 그래프의 변화가 보여집니다.

- 사용자 데이터는 보라색으로 표시, 기업데이터는 노란색으로 표시됩니다.

- 펜타곤 그래프의 영역 표시는 반투명입니다.

<br>

### 🧔 메인 

![스크린샷 2022-02-23 오후 9 38 50](https://user-images.githubusercontent.com/85816029/155321028-b81dc054-b3ef-4ead-b2bb-eee43c21e66c.png)

<br>

### 구현한 기능 목록 및 어려웠던 점

1. HEADER & SEARCH BAR

[ 최우철 ] 

- 구현 내용 & 방법
   - 상단 search bar의 input 입력시 app에 전역상태 저장 및 삭제로직과 조건부 모달을 구현하였습니다.
   - 펜타곤 차트 중앙의 이미지를 삽입하였습니다.
- 구현하면서 어려운점
   - vue 자체의 상태관리나 구조가 생소하여 데이터를 전달하는 구조를 파악하는 일에 어려움이 있었습니다.
   - vue-chartjs의 내부 옵션이 버전에 따라 서로 호환이 되지 않아 커스터마이징을 하기가 어려웠고, 강제적으로 chart 위에 wrapper 컴포넌트를 씌워 디자인하는 방법으로 대신할 수밖에 없었습니다.

[ 김혜영 ] 

- 구현 내용 & 방법
   - 상단 Header 및 Search Bar 기본 디자인 및 전체적인 기본 디자인을 구현하였습니다.
   - Search Bar 기능 구현을 함께하였습니다.
- 구현하면서 어려운점
   - 벡터 이미지로 아이콘을 만드는 부분에서 세밀한 조정 부분에서 어려움을 겪었습니다.
   - vue의 기본 문법을 처음 접해보아 간단한 기능을 구현하는 데에도 시간이 걸렸습니다.

<br>

2. PENTAGON CHART

[ 김진기 ] 

- 구현 내용 & 방법
    - 펜타곤 차트의 각 꼭짓점의 색깔 있는 원 구현
    - 펜타곤 차트의 각 카테고리를 나타내는 라벨의 스타일링
    - 펜타곤 차트의 R축(Linear Radial Axis)의 스타일링
- 구현하면서 어려운점
    - chart.js의 기능적 한계로 인해 원하는 디자인을 구현하기가 어려웠음
    - chart.js의 공식문서가 원하는 내용을 찾기가 어려웠음
    - Vue 자체가 처음이라 익숙하지 않았음

[ 박성현 ] 

- 구현 내용 & 방법
    - Bar 차트를 vue-chart를 사용하여 구현하였다.
- 구현하면서 어려운점
    - 문서를보며 프로퍼티를 찾는점이 어려웠다.
    - 기존 차트를 커스텀 하는점이 어려웠다.

<br>

3. TAB

[ 이승우 ] 

- 구현 내용 & 방법
    - 탭을 디자인하였습니다.
    - 탭 클릭시 데이터를 변경하여 레이더 차트와 바 차트를 동적으로 변경하였습니다.
- 구현하면서 어려운점
    - vue를 처음 사용하면서 문법을 몰랐기에 시행착오를 겪었습니다.
    - 객체 타입의 상태 변경시 상태 변경을 자동으로 감지하지 않아 감지 설정하는 데 어려움을 겪었습니다.

<br>

4. BAR CHART

[ 김희진 ] 

- 구현 내용 & 방법
   - 하단의 `Bar Chart`의 레이아웃을 구성하였습니다.
   - chart와 chart값들을 한번에 보여주어야 하기 때문에 `table tag`를 이용해 주어진 디자인과 최대한 비슷해 보이게 구성하였습니다. 들어오는 데이터를 통해 특정 값(5) 보다 크면 강조를 위해 font-color를 바꾸었습니다.
- 구현하면서 어려운점
    - vue 사용이 익숙하지 않아 data를 `prop`으로 받아오는 것에서 시간이 많이 걸렸습니다.
    - `v-for`  나 `v-if`등의  프로퍼티를 사용하는데에 익숙치 않아 코드의 가독성이 많이 떨어졌지만, v-for와 v-if의 사용으로 가독성과 재사용성을 높였습니다.


[ 변건오 ] 

- 구현 내용 & 방법
    - 하단 bar Chart 데이터 전달
    - 펜타곤 그래프 레이아웃 구성
    - chart 병합
- 구현하면서 어려운점
    - vue를 처음 접하면서 chart 데이터를 어떻게 전달할지 제일 어려웠음
    - chart의큰 틀만 잡고 세세한 option 부분을 적용하기 어려웠음

<br>

## 🗂 프로젝트 구조

```
public
 ┣ favicon.ico
 ┗ index.html
src
 ┣ assets
 ┃ ┣ cat.png
 ┃ ┗ logo.png
 ┣ components
 ┃ ┣ BarChart.vue
 ┃ ┃ BarchartWrapper.vue
 ┃ ┃ HelloWorld.vue
 ┃ ┃ ModalView.vue
 ┃ ┃ Radarchart.vue
 ┃ ┃ SearchBar.vue
 ┃ ┃ TabGroup.vue
 ┃ ┗ TopHeader.vue
 ┣ data
 ┃ ┗ index.js
 ┣ App.vue
 ┗ main.js
```

<br>

## 🛠 사용 기술

front-end

![js](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black) 
![css](https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=CSS3&logoColor=black) 
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=black)
![vue](https://img.shields.io/badge/-vue-brightgreen)
![vueChart](https://img.shields.io/badge/-vueChart-green)


dev-ops

![netlify](https://img.shields.io/badge/-netlify-lightgrey)

community

![discord](https://img.shields.io/badge/discord-5865F2?style=flat-square&logo=Discord&logoColor=black) 
![git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=Git&logoColor=black) 
![github](https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white) 
![apple](https://img.shields.io/badge/MacOS-000000?style=flat-square&logo=Apple&logoColor=white) 
![ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=flat-square&logo=Ubuntu&logoColor=black)


## 팀원소개
|이름|포지션|깃헙|
|:---:|:---:|:---:|
|최우철(팀장)|Front|[![github](https://img.shields.io/badge/최우철-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/chltjdrhd777/)|
|김진기(팀원)|Front|[![github](https://img.shields.io/badge/김진기-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/hatoba29)|
|변건오(팀원)|Front|[![github](https://img.shields.io/badge/변건오-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/guno517)|
|박성현(팀원)|Front|[![github](https://img.shields.io/badge/박성현-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/psh9408p)|
|이승우(팀원)|Front|[![github](https://img.shields.io/badge/이승우-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/starhn87)|
|김혜영(팀원)|Front|[![github](https://img.shields.io/badge/김혜영-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/hit-that-drum)|
|김희진(팀원)|Front|[![github](https://img.shields.io/badge/김희진-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/chloe41297)|
