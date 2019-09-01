import React, { useState } from 'react'
import { storiesOf, setAddon } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { boolean, select } from '@storybook/addon-knobs'

import '../../assets/fonts/fonts'
import './../../base.scss'

import Box from '../../layouts/Box/Box'
import { Checkbox, Checkmark, Checklabel } from './Checkbox'
import StoryPreview from '../../utils/StoryPreview'
import { TableComponent } from '../../labs/TableComponent/TableComponent'

const allProps = () => {
  const [selected, setSelected] = useState([])

  const items = [
    'Look at the stars!',
    'Look at their shine for you',
    'Everything you do',
    "It's all yellow",
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
      {items.map(item => (
        <Checkbox key={`sdsdsasds${item}`} id={item} value={item} onChange={handleChange}>
          <Checkmark />
          <Checklabel>{item}</Checklabel>
        </Checkbox>
      ))}
    </StoryPreview>
  )
}

storiesOf('Checkbox', module)
  .addDecorator(
    withInfo({
      inline: true,
      TableComponent: TableComponent,
      propTables: [Checkbox, Checkmark, Checklabel],
      propTablesExclude: [StoryPreview, Box],
    })
  )
  .add('default', allProps)
