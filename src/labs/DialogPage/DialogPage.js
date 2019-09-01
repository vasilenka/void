import styles from './DialogPage.module.scss'
import React from 'react'
import cx from 'classnames'
import Section from '../../layouts/Section/Section'
import Container from '../../layouts/Container/Container'
import { DialogContent, DialogOverlay } from '@reach/dialog'
import Text from '../../components/Text/Text'
import Button from '../../components/Button/Button'

const DialogPage = ({ children, className, ...restProps }) => {
  let [show, setShow] = React.useState(false)
  return (
    <Section>
      <Container>
        <Button primary smallAlt onClick={() => setShow(true)}>
          Show Dialog
        </Button>
        {show && (
          <DialogOverlay className={styles.overlay} onDismiss={() => setShow(false)}>
            <DialogContent className={styles.content}>
              <Button primary smallAlt onClick={() => setShow(false)}>
                Bite Dialog
              </Button>
              <Text heading4 as="h2">
                Hi there I am ongki herlambang
              </Text>
              <Text heading4 as="h2">
                Hi there I am ongki herlambang
              </Text>
              <Text heading4 as="h2">
                Hi there I am ongki herlambang
              </Text>
              <Text heading4 as="h2">
                Hi there I am ongki herlambang
              </Text>
              <Text heading4 as="h2">
                Hi there I am ongki herlambang
              </Text>
              <Text heading4 as="h2">
                Hi there I am ongki herlambang
              </Text>
              <Text heading4 as="h2">
                Hi there I am ongki herlambang
              </Text>
              <Text heading4 as="h2">
                Hi there I am ongki herlambang
              </Text>
              <Text heading4 as="h2">
                Hi there I am ongki herlambang
              </Text>
              <Text heading4 as="h2">
                Hi there I am ongki herlambang
              </Text>
              <Text heading4 as="h2">
                Hi there I am ongki herlambang
              </Text>
              <Text heading4 as="h2">
                Hi there I am ongki herlambang
              </Text>
              <Text heading4 as="h2">
                Hi there I am ongki herlambang
              </Text>
              <Text heading4 as="h2">
                Hi there I am ongki herlambang
              </Text>
              <Text heading4 as="h2">
                Hi there I am ongki herlambang
              </Text>
              <Text heading4 as="h2">
                Hi there I am ongki herlambang
              </Text>
              <Text heading4 as="h2">
                Hi there I am ongki herlambang
              </Text>
              <Text heading4 as="h2">
                Hi there I am ongki herlambang
              </Text>
              <Text heading4 as="h2">
                Hi there I am ongki herlambang
              </Text>
              <Text heading4 as="h2">
                Hi there I am ongki herlambang
              </Text>
              <Text heading4 as="h2">
                Hi there I am ongki herlambang
              </Text>
              <Text heading4 as="h2">
                Hi there I am ongki herlambang
              </Text>
              <Text heading4 as="h2">
                Hi there I am ongki herlambang
              </Text>
              <Text heading4 as="h2">
                Hi there I am ongki herlambang
              </Text>
              <Button primary smallAlt onClick={() => setShow(false)}>
                Close Dialog
              </Button>
              <Button primary smallAlt onClick={() => setShow(false)}>
                Another Dialog
              </Button>
              <Button primary smallAlt onClick={() => setShow(false)}>
                One Dialog
              </Button>
            </DialogContent>
          </DialogOverlay>
        )}
      </Container>
    </Section>
  )
}

export default DialogPage
