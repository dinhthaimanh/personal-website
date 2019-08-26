// @flow
import React from 'react';

type Props = {
    text?: string,
}

const Header = ({ text }:Props) => (
  <div>
    This just header text :
    {text}
  </div>
);

Header.defaultProps = {
  text: 'Hi ~!',
};

export default Header;
