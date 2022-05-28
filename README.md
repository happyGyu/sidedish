# sidedish
그라운드 룰, 회의록, 문서 공유 등은 팀 [노션](https://meenzino.notion.site/dc3d4f9f56a648e79f3615fdf1b745ad)을 활용한다.

## 🎯 소개 및 목적
***
- React와 Styled-components를 이용하여 반찬가게 웹 페이지 개발

<br />

## 🔎 Points
***
<details>
<summary>Pagination 방식</summary>
<div markdown="1">

- 슬라이드를 구현할 때 처음 의도는 현재 화면에 노출될 데이터 + 슬라이드 이동에 필요한 데이터만 server에 요청을 보내고자 했습니다.
    - 사용자가 모든 슬라이드를 전부 클릭할 가능성은 높지 않다고 판단하였기 때문에, 노출되지 않을 데이터를 미리 받아오는 것은 비효율적이라는 판단이었습니다.
- 그런데 본 페이지 슬라이드는 만약 남은 데이터가 슬라이드 전체 슬롯보다 적다면, 남은 수 만큼만 슬라이드가 움직입니다.
    - 즉, 슬라이드 데이터는 페이지가 고정되어있지 않고 상황에 따라 페이지가 가변적입니다.
    - 따라서 현재 상황에서 필요한 데이터를 요청하기 위해서는 Cursor-based pagination이 되어 있어야합니다.
- 하지만 백엔드 팀과 API 협의 당시 Offset-based pagination 방식으로 결정했기 때문에 빠른 수정이 어려웠습니다.
- 결국 최소한의 데이터만 fetch 받아온다는 기존의 계획을 엎고 모든 데이터를 미리 받아와 슬라이드 슬롯에 넣어두는 방식으로 구현했습니다.
- 이는 본 미션의 슬라이드에 들어가는 데이터 수가 많지 않기 때문에 데이터를 좀 더 받아온다고 해서 크게 부담되는 양은 아니라는 점과 로직을 수정하기 위해 필요한 BE의 공수가 FE가 로직을 바꾸는 것보다 더 크다고 판단하였기 때문입니다.
- 하지만, 만약 슬라이드의 데이터 수가 굉장히 많은(이 기준을 어떻게 결정?) 경우였다면, Pagination 방식을 바꾸는 결정을 내렸을 것입니다. 
- 교훈은 처음에 최대한 잘 분석하자, 그럼에도 예상치 못한 상황이 발생하면 Trade-off를 고려하여 최선의 솔루션을 선택하자.  

</div>
</details>

<details>
<summary>Cypress 사용 시도</summary>
<div markdown="1">

- 예상보다 프론트엔드 기능 구현이 빠르게 완료되어 남은 시간동안 Cypress를 이용하여 e2e 테스트를 진행하고자 했습니다....
- ...만 이번 미션에서는 제대로 수행하지는 못했습니다.
- React는 state 중심으로 화면이 그려지기 때문에 DOM을 직접 조작할 일이 거의 없었는데, cypress를 이용하여 테스트할 때는 컴포넌트에 data attribute를 부여하여 `cy.get([data-cy='~~~'])`로 컴포넌트를 잡는 것이 어색했습니다. 
- cypress-react-selector라는 라이브러리를 이용하면 좀 더 편하고 리액트스럽게 컴포넌트를 select할 수 있을 것 같았으나, 해당 라이브러리 documentation을 따라도 잘 동작하지 않았습니다.
- 또한 어느 단계까지 테스트해야하는지 정하는 것이 어려웠습니다.
- 컴포넌트가 제대로 렌더되었는지 체크하려면 픽셀단위로 원하는 곳에 찍혔는지 테스트해야할지, 컴포넌트에 데이터가 제대로 전달되었으면 잘 렌더가 될 것이라고 여길지 등...
- 테스트라는 것이 생각보다 어렵고 생각할 것이 많다고 느꼈습니다.
</div>
</details>

<br />

## 📝 Record
***
[두 번째 팀프로젝트 1주차 회고](https://velog.io/@happygyu/%EB%91%90-%EB%B2%88%EC%A7%B8-%ED%8C%80%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-1%EC%A3%BC%EC%B0%A8-%ED%9A%8C%EA%B3%A0)

<br />

## 👬 팀원
***
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/happyGyu">
        <img src="https://avatars.githubusercontent.com/u/95538993?s=400&u=142c62a8238fbfd3a3e46976651dbc991cafc088&v=4" width="100px;" alt="Alan"/><br />
        <sub><b>Alan (FE)</b><br></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/devInu33">
        <img src="https://avatars.githubusercontent.com/u/84079237?v=4" width="100px;" alt="Inu"/><br />
        <sub><b>Inu (FE)</b><br></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Minzino">
        <img src="https://avatars.githubusercontent.com/u/86910955?v=4" width="100px" alt="Meenzino"/><br />
        <sub><b>Meenzino (BE)</b><br></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/astraum">
        <img src="https://avatars.githubusercontent.com/u/94687862?v=4" width="100px;" alt="Sammy"/><br />
        <sub><b>Sammy (BE)</b><br></sub>
      </a>
    </td>
  </tr>
</table>

## 🎞 데모
***

```
cd frontend
npm install
npm run
```

[데모링크](http://52.78.14.127/)
<details>
<summary>영상</summary>
<div markdown="1">

https://user-images.githubusercontent.com/95538993/170841431-4fc4745e-cd26-4c59-8fba-069c03b15a71.mp4

</div>
</details>