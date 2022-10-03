import { getQuizList } from 'utils/api'

test('API Test - API 통해 퀴즈 데이터 가져오기', () => {
  getQuizList().then((data) => expect(data.length).toBe(10))
})
