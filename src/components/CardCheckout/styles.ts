import styled from 'styled-components';
import {Colors} from '../../config/Colors';

export const ViewCarCheckout = styled.View`
  flex-direction: row;
  height: 130px;
  width: 100%;
  margin-bottom: 16px;
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
  font-family: Neo-Sans-Std-Regular;
  color: ${Colors.gray1};
`;

export const RemoveProduct = styled.TouchableOpacity``;

export const ViewDescriptionCheckoutProduct = styled.View`
  flex-direction: row;
  padding-vertical: 8px;
`;

export const DescriptionCheckoutProduct = styled.Text`
  font-size: 14px;
  color: ${Colors.gray1};
`;

export const ViewAreaPrice = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ViewPrice = styled.View``;

export const PriceNoMember = styled.Text`
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
  font-weight: 700;
  font-size: 15px;
  line-height: 24px;
  color: ${Colors.blue3};
`;

export const PriceMember = styled.Text`
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  color: ${Colors.blue3};
`;

export const ViewQuantity = styled.View`
  flex-direction: row;
`;

export const AddOrRemoveProduct = styled.TouchableOpacity``;

export const Quantity = styled.Text`
  margin-horizontal: 16px;
  font-size: 24px;
`;
