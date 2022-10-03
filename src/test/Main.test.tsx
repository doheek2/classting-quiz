import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from 'routes/Main'

test('Main Page Test - 메인 화면에 문구, [퀴즈 풀기] 버튼, [이전 퀴즈 보러 가기] 버튼이 보이는지?', () => {
  render(
    <Router>
      <Main />
    </Router>
  )

  const titleText = screen.getByText('quiztime')
  expect(titleText).toBeInTheDocument()

  const explanationText = screen.getByText('퀴즈 10문제를 풀어보세요!')
  expect(explanationText).toBeInTheDocument()

  const solveQuizBtn = screen.getByText(/퀴즈 풀기/i)
  expect(solveQuizBtn).toBeInTheDocument()

  const confirmQuizBtn = screen.getByText(/이전 퀴즈 보러 가기/i)
  expect(confirmQuizBtn).toBeInTheDocument()
})
