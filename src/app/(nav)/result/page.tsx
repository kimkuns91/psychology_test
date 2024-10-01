import ResultPage from '@/components/pages/ResultPage'
import { useFetchTest } from '@/utils/fetch/test'

export default async function Page() {
  const data = await useFetchTest()

  if (data === null) {
    return <h1>데이터가 없습니다.</h1>
  }

  return <ResultPage data={data} />
}
