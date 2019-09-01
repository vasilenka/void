import React from 'react'
import { storiesOf, setAddon } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { boolean, select } from '@storybook/addon-knobs'

import '../../assets/fonts/fonts'
import './../../base.scss'

import Container from './Container'
import StoryPreview from '../../utils/StoryPreview'
import { TableComponent } from '../../labs/TableComponent/TableComponent'

storiesOf('Container', module)
  .addDecorator(
    withInfo({
      inline: true,
      TableComponent: TableComponent,
      propTables: [Container],
      propTablesExclude: [StoryPreview],
    })
  )
  .add('default', () => (
    <StoryPreview>
      <Container
        narrow={boolean('narrow', false)}
        bleed={boolean('bleed', false)}
        post={boolean('post', false)}
        style={{ backgroundColor: '#37A4A0' }}>
        <p style={{ backgroundColor: 'snow' }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis doloribus omnis eos.
          Consectetur architecto obcaecati voluptas, facilis libero distinctio saepe quia aut repudiandae
          nam fugit pariatur eos maiores, deleniti consequatur?
        </p>
        <p style={{ backgroundColor: 'snow' }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis doloribus omnis eos.
          Consectetur architecto obcaecati voluptas, facilis libero distinctio saepe quia aut repudiandae
          nam fugit pariatur eos maiores, deleniti consequatur?
        </p>
      </Container>
    </StoryPreview>
  ))
