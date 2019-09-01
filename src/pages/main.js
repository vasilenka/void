import React from 'react'
import Helmet from 'react-helmet'

import { ReactComponent as Hello } from './../assets/svg/account.inline.svg'

import Text from '../components/Text/Text'
import Box from '../layouts/Box/Box'

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>TMMIN Dashboard</title>
      </Helmet>

      <Box alignCenter justifyCenter style={{ padding: 128 }}>
        <Hello style={{ width: 24, marginRight: 12 }} />
        <Text medium as="h1">
          It works!
        </Text>
      </Box>
    </>
  )
}

export default MainPage
