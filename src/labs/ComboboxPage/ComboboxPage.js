import styles from './ComboboxPage.module.scss'
import React from 'react'
import cx from 'classnames'
import { useInView } from 'react-intersection-observer'
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
  ComboboxPopover,
} from '@reach/combobox'
import '@reach/combobox/styles.css'

import Section from '../../layouts/Section/Section'
import Container from '../../layouts/Container/Container'
import Box from '../../layouts/Box/Box'
import Text from '../../components/Text/Text'

const ComboboxPage = ({ children, className, ...restProps }) => {
  let [ref, inView, origin] = useInView({
    threshold: 0,
    triggerOnce: false,
  })
  return (
    <Section>
      <Container>
        {inView && (
          <Text
            id="demo"
            heading4
            as="h3"
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}>
            Combobox by @reach-ui
          </Text>
        )}
        <Box column ref={ref}>
          <Combobox className={styles.wrapper}>
            <ComboboxInput aria-labelledby="demo" className={styles.field} />
            <ComboboxPopover className={styles.popover}>
              <ComboboxList aria-labelledby="demo" className={styles.list}>
                <ComboboxOption className={styles.option} value="Apple" />
                <ComboboxOption className={styles.option} value="Banana" />
                <ComboboxOption className={styles.option} value="Orange" />
                <ComboboxOption className={styles.option} value="Pineapple" />
                <ComboboxOption className={styles.option} value="Kiwi" />
              </ComboboxList>
            </ComboboxPopover>
          </Combobox>
        </Box>
      </Container>
    </Section>
  )
}

export default ComboboxPage
