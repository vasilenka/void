import React, { useState } from 'react'
import { storiesOf, setAddon } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { boolean, select } from '@storybook/addon-knobs'

import '../../assets/fonts/fonts'
import './../../base.scss'

import Box from '../../layouts/Box/Box'
import { RadioGroup, Radio, Radiolabel, Radiomark } from './Radio'
import StoryPreview from '../../utils/StoryPreview'
import { TableComponent } from '../../labs/TableComponent/TableComponent'

const allProps = () => {
  const [selected, setSelected] = useState([])

  const teams = [
    {
      value: 'Ongki Herlambang',
      id: 'asdhsjd',
    },
    {
      value: 'Khairani Ummah',
      id: 'qwew',
    },
    {
      value: 'Husni Munaya',
      id: 'jkji232dwdwd',
    },
    {
      value: 'Hanifan Mohammad',
      id: 'jbbuububu',
    },
  ]

  React.useEffect(() => {
    console.log(selected)
  }, [selected])

  const handleChange = e => {
    selected.find(item => item === e.target.value)
      ? setSelected(selected.filter(item => item !== e.target.value))
      : setSelected(selected.concat(e.target.value))
  }
  return (
    <StoryPreview>
      <RadioGroup name="person" column>
        {teams.map(person => (
          <Radio
            key={person.id}
            id={person.id}
            isDisabled={person.id === 'jbbuububu'}
            justifyBetween
            style={{ paddingTop: 12, paddingBottom: 12 }}>
            <Radiomark style={{ marginRight: 12 }} large />
            <Radiolabel>{person.value}</Radiolabel>
          </Radio>
        ))}
      </RadioGroup>
    </StoryPreview>
  )
}

storiesOf('Radio', module)
  .addDecorator(
    withInfo({
      inline: true,
      TableComponent: TableComponent,
      propTables: [RadioGroup, Radio, Radiomark, Radiolabel],
      propTablesExclude: [StoryPreview, Box],
    })
  )
  .add('default', allProps)
