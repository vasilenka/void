import styles from './CheckboxPage.module.scss'
import React, { useState } from 'react'
import cx from 'classnames'
import { Checkbox, Checkmark, Checklabel } from '../../components/Checkbox/Checkbox'
import Container from '../../layouts/Container/Container'

import CheckboxAlt from '../CheckboxAlt/CheckboxAlt'
import ChecklabelAlt from './../CheckLabel/CheckLabel'
import CheckmarkAlt from './../CheckMark/CheckMark'
import Box from '../../layouts/Box/Box'
import Text from '../../components/Text/Text'

const teams = [
  {
    value: 'Ongki Herlambang',
    id: 'kmxway87aa',
  },
  {
    value: 'Khairani Ummah',
    id: 'adsdqdqdwdw',
  },
  {
    value: 'Husni Munaya',
    id: 'ashdqwuwyueyyuusd',
  },
  {
    value: 'Hanifan Mohammad',
    id: 'ashwuqwwwwyueyyuusd',
  },
]

const CheckboxPage = ({ children, className, ...restProps }) => {
  const [selected, setSelected] = useState([])

  React.useEffect(() => {
    console.log('Selected: ', selected)
  }, [selected])

  return (
    <div className={cx(styles.root)} {...restProps}>
      <Container>
        <Box role="group" column>
          {teams &&
            teams.map(people => (
              <Checkbox
                key={people.id}
                id={people.id}
                onChange={e =>
                  selected.find(item => item === e.target.value)
                    ? setSelected(selected.filter(item => item !== e.target.value))
                    : setSelected(selected.concat(e.target.value))
                }
                inline
                isDisabled={people.id === 'ashdqwuwyueyyuusd'}
                justifyBetween
                style={{ marginBottom: 24 }}
                value={people.value}>
                <Checkmark style={{ marginRight: 12 }} />
                <Checklabel>{people.value}</Checklabel>
              </Checkbox>
            ))}
        </Box>
        {selected && (
          <Box>
            You select:{' '}
            {selected.map(people => (
              <Text as="li" heading5 key={people}>
                {people}
              </Text>
            ))}
          </Box>
        )}
      </Container>
      <br />
      <hr />
      <br />
      <Container>
        <CheckboxAlt id="shdjshdjshdj">
          <CheckmarkAlt />
          <ChecklabelAlt label="This is a good usage of label" />
        </CheckboxAlt>
      </Container>
    </div>
  )
}

export default CheckboxPage
