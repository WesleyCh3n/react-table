import type { NextPage } from 'next'

import { MyTable } from '../components/table/Table'

const Home: NextPage = () => {
  return (
    <div>
      Hello
      <MyTable/>
    </div>
  )
}

export default Home
