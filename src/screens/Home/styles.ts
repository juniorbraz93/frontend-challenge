import styled from 'styled-components';
import {Colors} from '../../config/Colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.grayDE};
`;

export const ViewHeader = styled.View`
  background-color: ${Colors.white};
  height: 70px;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
`;

export const ImgLogo = styled.Image`
  margin-top: 29px;
  margin-left: 16px;
  width: 78px;
  height: 20px;
`;

export const Checkout = styled.TouchableOpacity``;

export const ViewWineBox = styled.View`
  flex-direction: row;
`;

export const ViewNumberWineBox = styled.View`
  width: 20px;
  height: 20px;
  background-color: ${Colors.white};
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -8px;
  right: 16px;
  border-radius: 10px;
`;

export const TextNumberWineBox = styled.Text`
  color: ${Colors.blue};
  font-size: 12px;
  font-weight: 400;
  font-family: Lato-Regular;
`;

export const ImgWineBox = styled.Image`
  margin-top: 21px;
  margin-right: 16px;
  width: 56px;
  height: 56px;
`;

export const ViewSearch = styled.View`
  flex-direction: row;
  margin-top: 15px;
  align-items: center;
  margin-horizontal: 16px;
  background-color: ${Colors.grayEA};
`;

export const Search = styled.TextInput`
  font-size: 14px;
  font-family: Lato-Regular;
  height: 40px;
  width: 100%;
  color: ${Colors.gray5};
  padding: 8px;
  border-radius: 4px;
`;

export const ViewTextProduct = styled.View`
  padding-horizontal: 16px;
  padding-vertical: 24px;
`;

export const TotalTextProduct = styled.Text`
  font-size: 16px;
  font-family: Neo-Sans-Std-Regular;
  color: ${Colors.gray5};
  line-height: 24px;
  font-weight: 400;
`;
