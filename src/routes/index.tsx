import { Routes, Route } from 'react-router-dom'
import styles from './Routes.module.scss'

import Main from './Main'
import SolveQuiz from './SolveQuiz'
import ConfirmQuiz from './ConfirmQuiz'

const App = () => {
  return (
    <main className={styles.app}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='solveQuiz' element={<SolveQuiz />} />
        <Route path='confirmQuiz' element={<ConfirmQuiz />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </main>
  )
}

export default App
