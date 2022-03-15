import styled from 'styled-components';
import {Colors} from '../../config/Colors';

// padding-horizontal: 16px;

export const Container = styled.View`
  background-color: ${Colors.white};
  padding-horizontal: 16px;
  padding-vertical: 16px;
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 200px;
`;

export const ViewTitleCupon = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ViewText = styled.View`
  align-items: center;
  width: 90%;
`;

export const TextTitle = styled.Text`
  color: ${Colors.gray5};
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`;

export const ViewClose = styled.View``;

export const CloseCupon = styled.TouchableOpacity``;

export const ViewCupon = styled.View`
  margin-top: 15px;
`;

export const CuponInput = styled.TextInput`
  font-size: 15px;
  height: 40px;
  width: 100%;
  color: ${Colors.gray5};
  background-color: ${Colors.grayD8};
  padding: 8px;
  border-radius: 4px;
`;

export const ViewButton = styled.View``;

export const AreaButton = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${Colors.pink};
  margin-top: 16px;
`;

export const TextButton = styled.Text`
  width: 70px;
  font-size: 14px;
  font-weight: bold;
  color: ${Colors.white};
`;
