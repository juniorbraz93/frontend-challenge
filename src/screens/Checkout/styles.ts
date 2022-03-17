import styled from 'styled-components';
import {Colors} from '../../config/Colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.grayDE};
`;

export const HeaderProduct = styled.View`
  margin-top: 5px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const HeaderTitle = styled.Text`
  font-size: 20px;
  margin-left: 8px;
  font-weight: bold;
  color: ${Colors.gray5};
`;

export const ViewBack = styled.View`
  width: 24px;
  height: 24px;
  align-items: center;
`;

export const AreaBack = styled.TouchableOpacity``;

export const Back = styled.Text`
  font-size: 20px;
`;
export const ViewWineBox = styled.View`
  flex: 1;
`;

export const AreaOrderPrice = styled.View`
  position: absolute;
  bottom: 0;
  flex: 1;
  width: 100%;
  background-color: ${Colors.white};
`;

export const ViewCupon = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  margin-horizontal: 16px;
  margin-vertical: 16px;
`;

export const AreaCupon = styled.View`
  flex-direction: row;
`;

export const ImgCupon = styled.Image`
  width: 24px;
  height: 24px;
  margin: 5px;
`;

export const TextCupon = styled.Text`
  margin: 5px;
  font-size: 16px;
  color: ${Colors.black};
  line-height: 24px;
  font-weight: 400;
`;

export const ViewButtonCupon = styled.View`
  flex-direction: row;
`;

export const AreaButtonCupon = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
`;

export const TextButtonCupon = styled.Text`
  margin: 5px;
  font-size: 16px;
  color: ${Colors.pink};
  line-height: 24px;
  font-weight: 400;
`;

export const AreaOrderSummary = styled.View`
  padding-horizontal: 16px;
  padding-vertical: 8px;
`;

export const TitleOrderSummary = styled.Text`
  font-size: 16px;
  color: ${Colors.gray5};
  line-height: 24px;
  font-weight: 400;
`;

export const ViewOrderSummary = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const OrderSummary = styled.Text`
  color: ${Colors.gray5};
  line-height: 24px;
  font-weight: 400;
`;

export const ViewDelivery = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Delivery = styled.Text`
  color: ${Colors.gray5};
  line-height: 24px;
  font-weight: 400;
`;

export const AreaSpace = styled.View`
  height: 6px;
  background-color: ${Colors.grayDE};
`;

export const AreaCheckout = styled.View`
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  padding-horizontal: 16px;
`;

export const ViewPrice = styled.View``;

export const ViewMemberPrice = styled.View`
  margin: 1px;
  flex-direction: row;
  width: 130px;
  height: 28px;
`;

export const TextRSPrice = styled.Text`
  font-weight: 700;
  font-size: 15px;
  color: ${Colors.pink};
  bottom: -9px;
`;

export const TitlePrice = styled.Text`
  font-size: 16px;
  color: ${Colors.gray5};
  line-height: 24px;
  font-weight: 400;
`;

export const Price = styled.Text`
  font-weight: 700;
  font-size: 24px;
  color: ${Colors.pink};
`;

export const NoMemberPrice = styled.Text``;

export const ViewButton = styled.View``;

export const AreaButton = styled.TouchableOpacity`
  width: 180px;
  height: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${Colors.pink};
  margin-right: 16px;
  margin-top: 16px;
`;

export const TextButton = styled.Text`
  width: 70px;
  font-size: 14px;
  font-weight: bold;
  height: 20px;
  color: ${Colors.white};
`;
