import styled from 'styled-components';
import {Colors} from '../../config/Colors';

export const ContainerButton = styled.View`
  margin-bottom: 24px;
`;

export const AreaButton = styled.TouchableOpacity`
  width: 156px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${Colors.green};
`;

export const TextButton = styled.Text`
  font-family: Lato-Bold;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: ${Colors.white};
`;
