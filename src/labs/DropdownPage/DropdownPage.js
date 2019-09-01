import styles from './DropdownPage.module.scss'
import React from 'react'
import cx from 'classnames'
import Section from '../../layouts/Section/Section'
import Container from '../../layouts/Container/Container'
import Dropdown from '../Dropdown/Dropdown'

const animals = [
  {
    val: 'one',
    label: 'Kucing 🐱',
  },
  {
    val: 'two',
    label: 'Anjing 🐶',
  },
  {
    val: 'three',
    label: 'Burung 🐦',
  },
  {
    val: 'four',
    label: 'Bebek 🦆',
  },
  {
    val: 'five',
    label: 'Ikan 🐠',
  },
  {
    val: 'six',
    label: 'Koala 🐨',
  },
]

const DropdownPage = ({ children, className, ...restProps }) => {
  return (
    <Section>
      <Container>
        <fieldset style={{ maxWidth: 200 }}>
          <Dropdown value="four">
            {animals.map(animal => (
              <option className={styles.option} value={animal.val} key={animal.val}>
                {animal.label}
              </option>
            ))}
          </Dropdown>
        </fieldset>
      </Container>
    </Section>
  )
}

export default DropdownPage
