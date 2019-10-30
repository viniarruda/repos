import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../components/theme';

export const Spinner = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const List = styled.FlatList`
  min-height: 200px;
  width: 100%;
  flex: 1;
`;

export const SearchContainer = styled.View`
  width: 100%;
  height: 50px;
  margin: 10px 0 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #f1f1f1;
  border-radius: 5px;
`;

export const SeachIcon = styled(Icon)`
  padding: 10px;
`;

export const SeachInput = styled.TextInput`
  flex: 1;
  padding: 10px 10px 10px 0;
  color: ${theme.colors.secondary};
`;

export const ItemAvatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const Item = styled.View`
  flex-direction: row;
  padding: 10px;
  width: 100%;
`;

export const ItemDescription = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  padding-left: 10px;
`;

export const ItemDescriptionContent = styled.View`
  justify-content: center;
  flex: 1;
`;

export const ArrowIcon = styled(Icon)`
  align-self: center;
  justify-content: flex-end;
`;
