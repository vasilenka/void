import styles from "./Text.module.scss";
import React from "react";
import { bool, node, object, string, oneOf, oneOfType } from "prop-types";
import cx from "classnames";
import { motion } from "framer-motion";

import withTextProps from "../__private/withTextProps";
import withTextModifierProps from "../__private/withTextModifierProps";

import stylesStrong from "./../Strong/Strong.module.scss";
import stylesRegular from "./../Regular/Regular.module.scss";
import stylesLight from "./../Light/Light.module.scss";

import { root as stylesSecondary } from "./../Secondary/Secondary.module.scss";
import { root as stylesPositive } from "./../Positive/Positive.module.scss";
import { root as stylesCritical } from "./../Critical/Critical.module.scss";
import { root as stylesHighlight } from "./../Highlight/Highlight.module.scss";
import { root as stylesInfo } from "./../Info/Info.module.scss";
import { root as stylesWhite } from "./../White/White.module.scss";
import { root as stylesWhiteSecondary } from "./../WhiteSecondary/WhiteSecondary.module.scss";

const textStyleModifier = {
  link: styles.link,
  secondary: stylesSecondary,
  positive: stylesPositive,
  critical: stylesCritical,
  highlight: stylesHighlight,
  info: stylesInfo,
  white: stylesWhite,
  whiteSecondary: stylesWhiteSecondary
};

export const TextNoModifier = React.forwardRef(
  (
    {
      as,
      children,
      className,
      size,
      modifier,
      align,
      strong,
      regular,
      light,
      truncate,
      breakWord,
      childStyle,
      childInitial,
      childAnimate,
      ...restProps
    },
    forwardedRef
  ) => {
    const Component = motion[as] || motion.span;

    return (
      <Component
        ref={forwardedRef}
        className={cx({
          [styles[size]]: size,
          [styles.truncate]: truncate,
          [styles.breakWord]: breakWord,
          [styles[align]]: align,
          [className]: className
        })}
        {...restProps}
      >
        <motion.span
          className={cx({
            [textStyleModifier[modifier]]: modifier,
            [stylesLight.root]: light,
            [stylesStrong.root]: strong,
            [stylesRegular.root]: regular
          })}
          style={childStyle}
          initial={childInitial}
          animate={childAnimate}
        >
          {children}
        </motion.span>
      </Component>
    );
  }
);

TextNoModifier.displayName = "Text";

TextNoModifier.defaultProps = {
  as: "span",
  size: "medium",
  align: "left",
  // modifier: false,
  truncate: false,
  breakWord: false,
  regular: false,
  light: false,
  strong: false
};

TextNoModifier.propTypes = {
  children: node.isRequired,
  /** Rendering the component as specific html tag */
  as: string,
  /**
   * Additional className for Text component
   */
  className: oneOfType([string, object]),
  /** Indicating whether the Text should truncate with ellipsis when overflow */
  truncate: bool,
  /** Indicating whether the Text should move to new line and break word when overflow */
  breakWord: bool,
  /**
   * Alignment of text
   * Use directly as a prop
   */
  align: oneOf(["left", "right", "center", "justify"]),
  /**
   * Size of text
   * Use directly as a prop
   */
  size: oneOf([
    "display1",
    "display2",
    "display3",

    "heading1",
    "heading2",
    "heading3",
    "heading4",
    "heading5",
    "heading6",

    "small",
    "medium",
    "large",

    "label",
    "labelSmall",

    "caption"
  ]),
  // size: oneOf([...modifiedSizes]),
  /**
   * Modifiers of text styles
   * Use directly as a prop
   */
  modifier: oneOf([
    "link",
    "positive",
    "critical",
    "secondary",
    "highlight",
    "info",
    "white",
    "whiteSecondary"
  ]),

  /**
   * Apply designated strong font-weight to text
   */
  strong: bool,
  /**
   * Apply designated regular font-weight to text
   */
  regular: bool,
  /**
   * Apply designated light font-weight to text
   */
  light: bool
};

const Text = withTextProps(withTextModifierProps(TextNoModifier));

export default Text;
