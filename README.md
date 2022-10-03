# 🎉 클래스팅 기업 과제
<img src="https://user-images.githubusercontent.com/97458345/193476019-b9ff5fae-f9dc-4067-91f8-071106d75b0e.jpg">
🍀 클래스팅 퀴즈 WebApp

- **Github Repository URL** <br/> https://github.com/doheek2/classting-quiz
- **배포 URL** <br/> https://classting-quiztime.netlify.app/

<br/>

# 실행 방법
>1. git clone https://github.com/doheek2/classting-quiz.git
>2. cd classting-quiz
>3. yarn install
>4. yarn start

<br/>

# 🗂 프로젝트 소개
- **개발 기간** 22.09.27 - 22.10.03
- **프로젝트 개요** <br/>
본 프로젝트는 클래스팅 과제로, API를 활용해 퀴즈 WebApp을 구현한 프로젝트입니다.


<br/>

# 📁 폴더 구조
<details>
    <summary>펼치기</summary>
├─ src
<br/>│  ├─ global.d.ts<br/>
│  ├─ index.tsx<br/>
│  ├─ logo.svg<br/>
│  ├─ reportWebVitals.ts<br/>
│  ├─ routes<br/>
│  │  ├─ Main<br/>
│  │  │  ├─ index.tsx<br/>
│  │  │  └─ main.module.scss<br/>
│  │  ├─ Routes.module.scss<br/>
│  │  ├─ SolveQuiz<br/>
│  │  │  ├─ index.tsx<br/>
│  │  │  └─ solveQuiz.module.scss<br/>
│  │  ├─ index.tsx<br/>
│  │  ├─ ConfirmQuiz<br/>
│  │  │  ├─ index.tsx<br/>
│  │  │  └─ confirmQuiz.module.scss<br/>
│  │  ├─ ResultQuiz<br/>
│  │  │  ├─ index.tsx<br/>
│  │  │  └─ resultQuiz.module.scss<br/>
│  │  └─ WrongAnswerNote<br/>
│  │     ├─ index.tsx<br/>
│  │     └─ wrongAnswerNote.module.scss<br/>
│  ├─ setupTests.ts<br/>
│  ├─ styles<br/>
│  │  ├─ base<br/>
│  │  │  ├─ _fonts.scss<br/>
│  │  │  ├─ _more.scss<br/>
│  │  │  ├─ _reset.scss<br/>
│  │  │  └─ https<br/>
│  │  │     └─ spoqa.github.io<br/>
│  │  │        └─ spoqa-han-sans<br/>
│  │  │           └─ css<br/>
│  │  │              └─ SpoqaHanSansNeo.c<br/>ss
│  │  ├─ constants<br/>
│  │  │  └─ _colors.scss<br/>
│  │  ├─ index.js<br/>
│  │  └─ index.scss<br/>
│  ├─ types<br/>
│  │  └─ quiz.d.ts<br/>
│  ├─ utils<br/>
│  │  └─ api.ts<br/>
│  ├─ components<br/>
│  │  ├─ Box<br/>
│  │  │  ├─ index.tsx<br/>
│  │  │  └─ box.module.scss<br/>
│  │  ├─ LoaderIcon<br/>
│  │  │  ├─ index.tsx<br/>
│  │  │  └─ loaderIcon.module.scss<br/>
│  │  ├─ Timer<br/>
│  │  │  ├─ index.tsx<br/>
│  │  │  └─ timer.module.scss<br/>
│  │  ├─ RadioBtn<br/>
│  │  │  ├─ index.tsx<br/>
│  │  │  └─ radioBtn.module.scss<br/>
│  │  ├─ Label<br/>
│  │  │  ├─ index.tsx<br/>
│  │  │  └─ label.module.scss<br/>
│  │  ├─ Modal<br/>
│  │  │  ├─ index.tsx<br/>
│  │  │  └─ modal.module.scss<br/>
│  │  ├─ NoQuiz<br/>
│  │  │  ├─ index.tsx<br/>
│  │  │  └─ noQuiz.module.scss<br/>
│  │  ├─ DeleteBtnModal<br/>
│  │  │  ├─ index.tsx<br/>
│  │  │  └─ deleteBtnModal.module.scss<br/>
│  │  └─ GoBackBtn<br/>
│  │     ├─ index.tsx<br/>
│  │     └─ goBackBtn.module.scss<br/>
│  ├─ store<br/>
│  │  └─ atom.ts<br/>
│  └─ test<br/>
│     ├─ Main.test.tsx<br/>
│     └─ api.test.tsx<br/>
├─ tsconfig.json<br/>
├─ yarn.lock<br/>
└─ README.md<br/>
</details>

<br/>

# 🔨 기술 스택
<div align="center">
 <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>
 <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>
 <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"/>
 <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
 <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
 <img src="https://img.shields.io/badge/Recoil-764ABC?style=flat-square&logo=Recoil&logoColor=white"/>

 <br/>

|라이브러리|내용|버전|
|:---:|:---:|:---:|
| axios | 비동기 통신 | 0.27.2 |
| classnames | styles 관련 | 2.3.1 |
| dayjs | 날짜 관련 | 1.11.5 |
| react-icons | 아이콘 편의 | 4.4.0 |
| react-router-dom | route 편의 | 6 |
| storejs | localStorage 편의 | 2.0.1 |
| victory | 차트 라이브러리 | 36.6.8 |


<br/>

</div>

# 🏞 기능 설명

### '메인' 화면

<img src="https://user-images.githubusercontent.com/97458345/193476019-b9ff5fae-f9dc-4067-91f8-071106d75b0e.jpg">

<br/>

### '퀴즈 풀기' 화면

<img src="https://user-images.githubusercontent.com/97458345/193476526-d0bb29ad-69b2-4a7a-b14a-256571df4819.jpg">

<br/>

### API 호출

<details>
    <summary>구현 방법</summary>

1. axios를 통해 API를 호출하고 결과값을 리턴합니다.
```ts
const BASE_URL = 'https://opentdb.com/api.php?amount=10&type=multiple'

export const getQuizList = async () => {
  const result = await axios.get(BASE_URL)
  return result.data.results
}
```
2. '퀴즈 풀기' 화면에 접속하면 useEffect()를 통해 API를 호출하고 quizList에 저장합니다.
```ts
useEffect(() => {
  const getQuizHandler = async () => {
    const quiz = await getQuizList()
    setQuizList(quiz)
  }
  getQuizHandler()
}, [setQuizList])
```
3. quizList나 quizNum의 값이 바뀔 때마다 퀴즈 보기를 랜덤하게 나열합니다.
```ts
useEffect(() => {
  if (quizList.length !== 0) {
    const currentQuiz = quizList[quizNum]
    const arr = [...currentQuiz.incorrect_answers, currentQuiz.correct_answer]
    const tmpArr = arr.sort(() => Math.random() - 0.5)
    setAnswerList(tmpArr)
  }
}, [quizList, quizNum])
```

</details>

### Timer

<details>
    <summary>구현 방법</summary>

1. Recoil로 전역 상태 관리 데이터를 설정하여 타이머를 설정하였습니다.
```ts
export const timeState = atom({
  key: 'timeState',
  default: ['00', '00'],
})
```
2. 1초씩 증가할 때마다 timeState에 저장합니다. isTimerStop이 true가 되면 setTimeout()을 중지시킵니다. 
```ts
const [time, setTime] = useRecoilState(timeState)

useEffect(() => {
  const timer = (type: string, num: string) => {
    const temp = Number(num) + 1
    const tmpArr = [...time]
    if (temp < 10) {
      switch (type) {
        case 'min':
          tmpArr[0] = `0${temp}`
          break
        case 'sec':
          tmpArr[1] = `0${temp}`
          break
      }
    } else {
      switch (type) {
        case 'min':
          tmpArr[0] = String(temp)
          break
        case 'sec':
          tmpArr[1] = String(temp)
          break
      }
    }
    setTime(tmpArr)
  }

  const timeout = setTimeout(() => {
    if (time[1] === '59') {
      timer('min', time[0])
      const arr = [...time]
      arr[1] = '00'
      setTime(arr)
    } else {
      timer('sec', time[1])
    }
  }, 1000)

  if (isTimerStop) clearTimeout(timeout)
}, [isTimerStop, setTime, time])
```

</details>

<br/>

### '퀴즈 결과' 화면

<img src="https://user-images.githubusercontent.com/97458345/193477389-376a1fcf-9307-4cca-a27a-c8bf803b2eda.jpg">

<br/>

### Chart

<details>
    <summary>구현 방법</summary>

1. startAngle, endAngle을 0으로 초기화하여 state에 저장합니다.
```ts
const [startAngle, setStartAngle] = useState(0)
const [endAngle, setEndAngle] = useState(0)
```
2. 화면에 접속하면 useEffect()를 통해 state 값을 변경해줍니다.
```ts
useEffect(() => {
  setStartAngle(90)
  setEndAngle(450)
}, [])
```
3. 차트 startAngle, endAngle 속성에 state를 추가하고 animate 속성을 통해 차트 애니메이션이 작동합니다.
```ts
 <VictoryPie
  animate={{
    duration: 2000,
  }}
  startAngle={startAngle}
  endAngle={endAngle}
  data={data}
  colorScale={['#b7bbea', '#e4e9fe']}
  height={400}
  padAngle={1}
  innerRadius={120}
  cornerRadius={5}
  labels={() => ''}
/>
```
</details>

<br/>

### '이전 퀴즈 결과' 화면

<img src="https://user-images.githubusercontent.com/97458345/193477683-4cbba2b5-40a8-4d52-ba11-f910a7848296.jpg">
<img src="https://user-images.githubusercontent.com/97458345/193477535-095dc529-f85e-4a8d-a228-486ff8abaf31.jpg">

<br/>

### localStorage에서 데이터 가져와 출력
<details>
    <summary>구현 방법</summary>

1. localStorage에 있는 데이터를 가져옵니다.
```ts
const storage: IQuizResultList = store.get('quizList')
```
2. localStorage에 key가 'quizList'인 데이터가 없으면 undefined이므로 데이터가 없을 땐 퀴즈 기록이 없다는 화면을, 데이터가 있을 땐 퀴즈 기록 리스트를 출력합니다.
```ts
{storage === undefined && <NoQuiz />}
{storage !== undefined && ({/*...생략*/})}
```
3. storage 길이만큼 list 출력하고 data 배열을 통해 차트에 필요한 데이터 생성하여 출력합니다.
```ts
{storage.map((v, i) => {
  const key = `quizList${i}`
  const correct = v.data.filter((x) => x.isCorrect === true).length
  const data = [
    { x: '정답 수', y: correct },
    { x: '총 퀴즈 개수', y: 10 },
  ]
  return (
    <li key={key} className={styles.listContainer}>
      <p className={styles.quiz}>quiz{v.id + 1}</p>
      <header className={styles.inforContainer}>
        <div>
          <HiCalendar />
          <span>{v.date}</span>
        </div>
        <div>
          <HiClock />
          <span>{v.time}</span>
        </div>
        <div>
          <HiCheckCircle />
          <span>{correct}/10</span>
        </div>
      </header>
      <main className={styles.chartContainer}>
        <VictoryPie
          startAngle={90}
          endAngle={450}
          data={data}
          colorScale={['#6878e1', '#dbdde6']}
          width={270}
          height={270}
          padAngle={1}
          innerRadius={115}
          cornerRadius={8}
          labels={() => ''}
        />
      </main>
      {/* ... 생략 */}
    </li>
  )
})}
```
</details>

<br/>

### '오답 노트' 화면

<img src="https://user-images.githubusercontent.com/97458345/193477612-a8cc2f02-6447-4ac3-855d-bac43367afea.jpg">

<br/>

# 📌 Unit Testing
Unit Testing은 JEST를 이용하였습니다.
### 실행 방법
```
yarn test
```

<br/>

### 부가 설명
- `Main.test.tsx`: 첫 화면 SnapShot 확인
- `api.test.tsx`: API 호출 여부 확인 (불러오는 퀴즈 length로 확인)