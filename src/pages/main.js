import React from 'react'
import Helmet from 'react-helmet'

import TimerSection from '../components/TimerSection/TimerSection'
import TodoList from '../components/TodoList/TodoList'
import Circles from '../components/SVG/Circle'

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>Void</title>
      </Helmet>
      <TimerSection />
      <TodoList />
      <Circles />
    </>
  )
}

export default MainPage
