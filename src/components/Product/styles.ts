import styled from 'styled-components';
import {Colors} from '../../config/Colors';

export const ContainerProduct = styled.View`
  flex: 1;
  align-items: center;
`;

export const CardProduct = styled.View`
  background-color: ${Colors.white};
  margin-bottom: 8px;
  border-radius: 4px;
  width: 156px;
  height: 348px;
  padding-horizontal: 6px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  align-items: center;
`;

export const ViewAreaImage = styled.View`
  flex-direction: row;
`;

export const ShowViewProduct = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
`;

export const BlackWine = styled.Image`
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: 0;
`;

export const ImageProduct = styled.Image`
  height: 181px;
  width: 123px;
  margin-top: 16px;
  margin-left: 12px;
`;

export const ViewAreaProduct = styled.View`
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

export const NameProduct = styled.Text`
  margin-top: 11px;
  margin-bottom: 12px;
  color: ${Colors.gray1};
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
  text-align: center;
`;

export const ViewAreaPrice = styled.View`
  flex-direction: row;
`;

export const ViewPrice = styled.View`
  margin: 2px;
  justify-content: center;
  align-items: center;
`;

export const TextPrice = styled.Text`
  font-size: 12px;
  font-weight: 400;
  text-align: right;
  line-height: 12px;
  text-decoration-line: line-through;
  text-transform: uppercase;
  color: ${Colors.gray8};
`;

export const ViewDescount = styled.View`
  background-color: ${Colors.orangeDiscount};
  width: 65px;
  height: 16px;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
`;

export const TextDiscount = styled.Text`
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  color: ${Colors.white};
`;

export const ViewMember = styled.View`
  margin: 2px;
  width: 32px;
  height: 20px;
  justify-content: center;
  align-items: center;
`;

export const TextMember = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  text-align: right;
  text-transform: uppercase;
  color: ${Colors.gray5};
`;

export const ViewMemberPrice = styled.View`
  margin: 2px;
  justify-content: center;
  align-items: center;
`;

export const TextMemberPrice = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${Colors.pink};
`;

export const ViewNoMember = styled.View`
  justify-content: center;
  align-items: baseline;
  margin-bottom: 6px;
`;

export const TextNoMember = styled.Text`
  font-weight: 400;
  font-size: 12px;
  line-height: 28px;
  color: ${Colors.gray8};
`;
