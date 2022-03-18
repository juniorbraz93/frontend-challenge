import styled from 'styled-components/native';
import {Colors} from '../../config/Colors';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const HeaderProduct = styled.View`
  height: 70px;
  flex-direction: row;
  justify-content: space-between;
`;

export const AreaBack = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  margin-left: 25px;
`;

export const ViewBack = styled.View`
  margin-top: 21px;
  width: 24px;
  height: 24px;
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
  font-family: Lato-Regular;
  font-weight: 400;
`;

export const ImgWineBox = styled.Image`
  margin-top: 21px;
  margin-right: 16px;
  width: 56px;
  height: 56px;
`;

export const ImageProduct = styled.Image`
  width: 218px;
  height: 333px;
  margin-left: 79px;
  margin-right: 78px;
  justify-content: center;
  align-items: center;
`;

export const NameProduct = styled.Text`
  width: 327px;
  height: 24px;
  margin-left: 25px;
  margin-right: 23px;
  margin-top: 8px;
  font-size: 18px;
  font-weight: 400;
  font-family: Neo-Sans-Std-Regular;
  text-align: center;
  color: ${Colors.gray3};
`;

export const ViewFlag = styled.View`
  flex-direction: row;
  margin-left: 47px;
  margin-right: 46px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;

export const TextFlag = styled.Text`
  font-size: 14px;
  font-family: Lato-Regular;
  font-weight: 400;
  color: ${Colors.gray3};
  margin-right: 8px;
`;

export const ViewTitleDescription = styled.View`
  width: 343px;
  height: 27px;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 32px;
`;

export const TitleDescription = styled.Text`
  font-size: 20px;
  font-family: Neo-Sans-Std-Bold;
  font-weight: 700;
  color: ${Colors.gray3};
`;

export const ViewDescription = styled.ScrollView`
  width: 343px;
  height: 168px;
  margin-left: 17px;
  margin-right: 15px;
  margin-top: 8px;
`;

export const Description = styled.Text`
  font-size: 16px;
  font-family: Lato-Regular;
  font-weight: 400;
  color: ${Colors.gray5};
`;

export const ViewAddCar = styled.View`
  height: 80px;
  flex-direction: row;
  background-color: ${Colors.white};
  justify-content: space-between;
  margin-top: 20px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const ViewPriceButton = styled.View`
  height: 154px;
  margin-left: 16px;
  margin-right: 9px;
`;

export const ViewDescount = styled.View`
  margin-left: 16px;
  background-color: ${Colors.orangeDiscount};
  width: 52px;
  height: 16px;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -8px;
`;

export const TextDiscount = styled.Text`
  font-size: 10px;
  font-family: Lato-Bold;
  font-weight: 700;
  text-align: center;
  color: ${Colors.white};
`;

export const ViewPrice = styled.View`
  margin-top: 10px;
  justify-content: center;
  align-items: flex-start;
`;

export const TextPrice = styled.Text`
  font-size: 12px;
  font-family: Lato-Bold;
  font-weight: 700;
  text-align: right;
  line-height: 12px;
  text-decoration-line: line-through;
  text-transform: uppercase;
  color: ${Colors.gray5};
`;

export const ViewMemberPrice = styled.View`
  margin: 1px;
  flex-direction: row;
  width: 130px;
  height: 28px;
`;

export const TextRSPrice = styled.Text`
  font-weight: 700;
  font-family: Lato-Bold;
  font-size: 10px;
  color: ${Colors.pink};
  position: absolute;
  bottom: 4px;
`;

export const TextMemberPrice = styled.Text`
  font-weight: 700;
  font-family: Lato-Bold;
  font-size: 20px;
  color: ${Colors.pink};
  margin-left: 17px;
`;

export const ViewNoMember = styled.View`
  margin: 1px;
  width: 154px;
  height: 16px;
`;

export const TextNoMember = styled.Text`
  font-weight: 700;
  font-family: Lato-Bold;
  font-size: 10px;
  text-transform: uppercase;
  color: ${Colors.gray5};
`;

export const AreaButton = styled.TouchableOpacity`
  width: 180px;
  height: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${Colors.green};
  margin-right: 16px;
  margin-top: 16px;
`;

export const TextButton = styled.Text`
  width: 70px;
  line-height: 24px;
  font-size: 16px;
  font-family: Lato-Bold;
  color: ${Colors.white};
`;
