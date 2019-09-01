import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { boolean, select } from '@storybook/addon-knobs'

import './../../assets/fonts/fonts'
import './../../base.scss'

import Text, { TextNoModifier as TextComponent } from './Text'
import { SizePropTypes } from '../__private/withTextProps'
import { modifiers } from '../__private/withTextModifierProps'
import StoryPreview from '../../utils/StoryPreview'
import { TableComponent } from '../../labs/TableComponent/TableComponent'

storiesOf('Text', module)
  .addDecorator(
    withInfo({
      inline: true,
      propTables: [TextComponent],
      TableComponent: TableComponent,
      propTablesExclude: [Text, StoryPreview],
    })
  )
  .add('All props', () => (
    <StoryPreview dark>
      <Text
        as={'h2'}
        align={select('align', ['left', 'right', 'center', 'justify'], 'left')}
        size={select('size', SizePropTypes, 'heading1')}
        truncate={boolean('truncate', false)}
        breakWord={boolean('breakWord', false)}
        light={boolean('light', false)}
        strong={boolean('strong', false)}
        modifier={select('modifier', modifiers, false)}>
        The reward for work well done is the opportunity to do more.
      </Text>
    </StoryPreview>
  ))
