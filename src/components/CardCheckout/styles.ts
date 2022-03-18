import styled from 'styled-components/native';
import {Colors} from '../../config/Colors';

export const ViewCarCheckout = styled.View`
  flex-direction: row;
  height: 130px;
  width: 100%;
  margin-bottom: ${({lastIndex}) => (lastIndex ? '32px' : '16px')};
  opacity: ${({loading}) => (loading ? 0.5 : 1)};
`;

export const ViewLoading = styled.View`
  height: 130px;
  position: absolute;
  width: 100%;
  top: 60px;
`;

export const ViewImageCardCheckout = styled.View`
  width: 80px;
`;

export const ImageCarCheckout = styled.Image`
  width: 85px;
  height: 135px;
`;

export const ViewPriceDescription = styled.View`
  flex: 1;
  padding-vertical: 8px;
  padding-horizontal: 16px;
`;

export const ViewNameCheckoutProduct = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const NameCheckoutProduct = styled.Text`
  flex: 0.8;
  font-size: 16px;
  line-height: 24px;
  font-family: Lato-Bold;
  color: ${Colors.gray1};
`;

export const RemoveProduct = styled.TouchableOpacity``;

export const ViewDescriptionCheckoutProduct = styled.View`
  flex-direction: row;
  padding-vertical: 8px;
`;

export const DescriptionCheckoutProduct = styled.Text`
  font-family: Lato-Regular;
  font-size: 14px;
  color: ${Colors.gray1};
`;

export const ViewAreaPrice = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 16px;
`;

export const ViewPrice = styled.View``;

export const PriceNoMember = styled.Text`
  font-family: Lato-Regular;
  padding-vertical: 6px;
  font-size: 12px;
  font-weight: 400;
  text-decoration-line: line-through;
  text-transform: uppercase;
  color: ${Colors.gray8};
`;

export const ViewMemberPrice = styled.View`
  flex-direction: row;
  align-items: baseline;
  width: 130px;
  height: 28px;
`;

export const TextRSPrice = styled.Text`
  font-family: OpenSans-Bold;
  font-weight: 700;
  font-size: 15px;
  line-height: 24px;
  color: ${Colors.black};
`;

export const PriceMember = styled.Text`
  font-family: OpenSans-Bold;
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  color: ${Colors.black};
`;

export const ViewQuantity = styled.View`
  flex-direction: row;
`;

export const AddOrRemoveProduct = styled.TouchableOpacity``;

export const Quantity = styled.Text`
  font-family: Lato-Regular;
  margin-horizontal: 16px;
  font-size: 24px;
`;
