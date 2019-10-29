import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const StyledContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 20px;
  padding-left: 12px;
  padding-right: 12px;
  background: ${theme.colors.primary};
`;

const Container = props => {
  const {children} = props;

  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
