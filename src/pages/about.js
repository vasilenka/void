import React from "react";
import Text from "../components/Text/Text";

const AboutPage = ({ children, className, ...restProps }) => {
  return (
    <div {...restProps}>
      <Text heading1 as="about">
        About
      </Text>
    </div>
  );
};

export default AboutPage;
