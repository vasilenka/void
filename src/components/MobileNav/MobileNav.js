import styles from './MobileNav.module.scss'
import React from 'react'
import cx from 'classnames'

import Text from '../Text/Text'

import Palette from '-!svg-react-loader!../../assets/svg/palette.inline.svg'
import Heart from '-!svg-react-loader!../../assets/svg/heart.inline.svg'
// import Account from '../../assets/svg/account.inline.svg'
import Face from '-!svg-react-loader!../../assets/svg/face.inline.svg'
import Mail from '-!svg-react-loader!../../assets/svg/mail.inline.svg'
import Edit from '-!svg-react-loader!../../assets/svg/edit.inline.svg'

const MenuItem = props => {
    return (
        <div className={styles.item}>
            {props.icon}
            <Text small as="li" className={styles.navItem}>
                {props.label}
            </Text>
        </div>
    )
}

const Navigation = props => {
    return (
        <ul className={styles.nav}>
            <MenuItem label="Home" icon={<Heart className={styles.icon} />} />
            <MenuItem label="About" icon={<Face className={styles.icon} />} />
            <MenuItem label="Blog" icon={<Edit className={styles.icon} />} />
            <MenuItem label="Showcase" icon={<Palette className={styles.icon} />} />
            <MenuItem label="Contact" icon={<Mail className={styles.icon} />} />
        </ul>
    )
}

const MobileNav = ({ children, className, ...restProps }) => {
    return (
        <nav className={cx(styles.root)} {...restProps}>
            <Navigation />
        </nav>
    )
}

export default MobileNav
