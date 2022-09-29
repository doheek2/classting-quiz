import { Routes, Route } from 'react-router-dom'

import Main from './Main'
import SolveQuiz from './SolveQuiz'
import ResultQuiz from './ResultQuiz'
import ConfirmQuiz from './ConfirmQuiz'

import styles from './Routes.module.scss'

const App = () => {
  return (
    <main className={styles.app}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='solveQuiz' element={<SolveQuiz />} />
        <Route path='resultQuiz' element={<ResultQuiz />} />
        <Route path='confirmQuiz' element={<ConfirmQuiz />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </main>
  )
}

export default App
