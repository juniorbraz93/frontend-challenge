import styled from 'styled-components/native';
import {Colors} from '../../config/Colors';

export const ViewLoading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.grayDE};
`;

export const ViewMarginSpace = styled.View`
  height: 1px;
  background-color: ${Colors.grayDE};
  margin: 16px;
`;

export const HeaderProduct = styled.View`
  height: 60px;
  flex-direction: row;
  align-items: center;
  background-color: ${Colors.white};
`;

export const HeaderTitle = styled.Text`
  font-family: Lato-Bold;
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

export const ViewWineBox = styled.View`
  flex: 1;
`;

export const AreaOrderPrice = styled.View`
  position: absolute;
  bottom: 0;
  height: 100px;
  flex: 1;
  width: 100%;
  background-color: ${Colors.white};
`;

export const ViewCupon = styled.View`
  background-color: ${Colors.white};
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  padding: 16px;
`;

export const AreaCupon = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ImgCupon = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 6px;
`;

export const TextCupon = styled.Text`
  font-family: Lato-Bold;
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
  font-family: Lato-Bold;
  margin: 5px;
  font-size: 16px;
  color: ${Colors.pink};
  line-height: 24px;
  font-weight: 400;
`;

export const AreaOrderSummary = styled.View`
  padding: 16px;
  background-color: ${Colors.white};
`;

export const TitleOrderSummary = styled.Text`
  font-family: Lato-Bold;
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
  font-family: Lato-Regular;
  color: ${Colors.gray5};
  line-height: 24px;
  font-weight: 400;
`;

export const ViewDelivery = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Delivery = styled.Text`
  font-family: Lato-Regular;
  color: ${Colors.gray5};
  line-height: 24px;
  font-weight: 400;
`;

export const AreaSpace = styled.View`
  height: 6px;
  background-color: ${Colors.grayDE};
`;

export const AreaCheckout = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 16px;
  height: 100%;
  align-items: center;
`;

export const ViewPrice = styled.View``;

export const ViewMemberPrice = styled.View`
  flex-direction: row;
  width: 130px;
`;

export const TextRSPrice = styled.Text`
  font-family: OpenSans-Bold;
  font-weight: 700;
  font-size: 15px;
  color: ${Colors.pink};
  bottom: -9px;
`;

export const TitlePrice = styled.Text`
  font-family: Lato-Bold;
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
`;

export const TextButton = styled.Text`
  width: 70px;
  font-size: 14px;
  font-weight: bold;
  height: 20px;
  color: ${Colors.white};
`;
