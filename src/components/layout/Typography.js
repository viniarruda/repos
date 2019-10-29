import styled from 'styled-components';
import theme from '../theme';

export const Title = styled.Text`
  color: ${theme.colors.secondary};
  font-size: ${theme.typography.title};
  font-weight: ${theme.fontWeight.bold};
`;

export const SubTitle = styled.Text`
  color: ${theme.colors.secondary};
  font-size: ${theme.typography.subTitle};
`;

export const SimpleText = styled.Text`
  color: ${theme.colors.secondary};
  font-size: ${theme.typography.text};
`;
