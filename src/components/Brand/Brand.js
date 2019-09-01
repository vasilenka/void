import styles from './Brand.module.scss'
import React from 'react'
import cx from 'classnames'

// import LogoStarter from './logo/starter.inline.svg'
// import LogoStarterAlt from './logo/starter--alt.inline.svg'
// import LogoStarterFull from './logo/starter--full.inline.svg'
// import LogoStarterFullAlt from './logo/starter--full--alt.inline.svg'

// import LogoWordmarkShort from './logo/wordmark.inline.svg'
// import LogoWordmark from './logo/wordmark--full.inline.svg'

const BrandWrapper = ({ children, className, ...restProps }) => {
    return (
        <div
            className={cx({
                [styles.root]: true,
                [className]: className
            })}
            {...restProps}
        >
            <div className={styles.brandContainer}>
                {children}
            </div>
        </div>
    )
}

const NavbarBrand = ({ type, children, className, ...restProps }) => {
    return (
        <BrandWrapper className={styles.className}>
            {children}
        </BrandWrapper>
    )
}

export const Starter = ({ className, ...restProps }) => {
    return (
        <BrandWrapper>
            {/* <LogoStarter className={cx(styles.brand, className)} /> */}
        </BrandWrapper>
    )
}

export const StarterAlt = ({ className, ...restProps }) => {
    return (
        <BrandWrapper>
            {/* <LogoStarterAlt className={cx(styles.brand, className)} /> */}
        </BrandWrapper>
    )
}

export const StarterFull = ({ className, ...restProps }) => {
    return (
        <BrandWrapper>
            {/* <LogoStarterFull className={cx(styles.brand, className)} /> */}
        </BrandWrapper>
    )
}

export const StarterFullAlt = ({ className, ...restProps }) => {
    return (
        <BrandWrapper>
            {/* <LogoStarterFullAlt className={cx(styles.brand, className)} /> */}
        </BrandWrapper>
    )
}

export const WordmarkShort = ({ className, ...restProps }) => {
    return (
        <BrandWrapper>
            {/* <LogoWordmarkShort className={cx(styles.brand, className)} /> */}
        </BrandWrapper>
    )
}

export const Wordmark = ({ className, ...restProps }) => {
    return (
        <BrandWrapper>
            {/* <LogoWordmark className={cx(styles.brand, className)} /> */}
        </BrandWrapper>
    )
}

export default NavbarBrand
