import styles from './WithLove.module.scss';
import React from 'react';
import cx from 'classnames';

import './WithLove.module.scss';
import Text from '../Text/Text';

const WithLove = ({
  className,
  ...restProps
  }) => {
  return (
    <div className={styles.root}>
      <Text small>Crafted with</Text>
      <div className={styles.withLove}>
        <input type="checkbox" className={styles.checkbox} id="withLoveCheckbox" />
        <label htmlFor="withLoveCheckbox" className={styles.label}>

          <svg className={styles.svg} id="heart-svg" viewBox="467 392 58 57" xmlns="http://www.w3.org/2000/svg">
            <g id="Group" fill="none" fillRule="evenodd" transform="translate(467 392)">
              <path id="heart" className={styles.heart} fill="#AAB8C2" d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z"/>
              <circle id="main-circ" className={styles.mainCircle} fill="#E2264D" opacity="0" cx="29.5" cy="29.5" r="1.5"/>

              <g id="grp7" className={styles.grp7} opacity="0" transform="translate(7 6)">
                <circle id="oval1" className={styles.oval1} fill="#9CD8C3" cx="2" cy="6" r="2"/>
                <circle id="oval2" className={styles.oval2} fill="#8CE8C3" cx="5" cy="2" r="2"/>
              </g>

              <g id="grp6" className={styles.grp6} opacity="0" transform="translate(0 28)">
                <circle id="oval1" className={styles.oval1} fill="#CC8EF5" cx="2" cy="7" r="2"/>
                <circle id="oval2" className={styles.oval2} fill="#91D2FA" cx="3" cy="2" r="2"/>
              </g>

              <g id="grp3" className={styles.grp3} opacity="0" transform="translate(52 28)">
                <circle id="oval2" className={styles.oval2} fill="#9CD8C3" cx="2" cy="7" r="2"/>
                <circle id="oval1" className={styles.oval1} fill="#8CE8C3" cx="4" cy="2" r="2"/>
              </g>

              <g id="grp2" className={styles.grp2} opacity="0" transform="translate(44 6)">
                <circle id="oval2" className={styles.oval2} fill="#CC8EF5" cx="5" cy="6" r="2"/>
                <circle id="oval1" className={styles.oval1} fill="#CC8EF5" cx="2" cy="2" r="2"/>
              </g>

              <g id="grp5" className={styles.grp5} opacity="0" transform="translate(14 50)">
                <circle id="oval1" className={styles.oval1} fill="#91D2FA" cx="6" cy="5" r="2"/>
                <circle id="oval2" className={styles.oval2} fill="#91D2FA" cx="2" cy="2" r="2"/>
              </g>

              <g id="grp4" className={styles.grp4} opacity="0" transform="translate(35 50)">
                <circle id="oval1" className={styles.oval1} fill="#F48EA7" cx="6" cy="5" r="2"/>
                <circle id="oval2" className={styles.oval2} fill="#F48EA7" cx="2" cy="2" r="2"/>
              </g>

              <g id="grp1" className={styles.grp1} opacity="0" transform="translate(24)">
                <circle id="oval1" className={styles.oval1} fill="#9FC7FA" cx="2.5" cy="3" r="2"/>
                <circle id="oval2" className={styles.oval2} fill="#9FC7FA" cx="7.5" cy="2" r="2"/>
              </g>
            </g>
          </svg>

        </label>
      </div>
      <Text small>by <strong className={styles.strong}>Meridian.id</strong></Text>
    </div>
  )
}

export default WithLove
