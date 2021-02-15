import React from 'react';
import PropTypes from 'prop-types';
import * as S from './button.styled';

const Button = ({isSmall, children}) => (
  <S.Button isSmall={isSmall}>{children}</S.Button>
);

Button.defaultProps = {
  isSmall: false,
};

Button.propTypes = {
  isSmall: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
