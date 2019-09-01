import React from 'react'
import Helmet from 'react-helmet'

import TimerSection from '../components/TimerSection/TimerSection'

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>Void</title>
      </Helmet>

      <TimerSection />
    </>
  )
}

export default MainPage
