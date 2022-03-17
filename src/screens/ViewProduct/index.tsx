import React from 'react';
import {StyleSheet} from 'react-native';
import {SvgUri} from 'react-native-svg';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {useNavigation} from '@react-navigation/native';

import {
  Container,
  ImageProduct,
  NameProduct,
  ViewFlag,
  TextFlag,
  ViewTitleDescription,
  TitleDescription,
  ViewDescription,
  Description,
  ViewAddCar,
  ViewPriceButton,
  ViewDescount,
  TextDiscount,
  ViewPrice,
  TextPrice,
  ViewMemberPrice,
  TextRSPrice,
  TextMemberPrice,
  ViewNoMember,
  TextNoMember,
  AreaButton,
  TextButton,
  HeaderProduct,
  AreaBack,
  ViewBack,
  ViewWineBox,
  ImgWineBox,
  ViewNumberWineBox,
  TextNumberWineBox,
  Checkout,
} from './styles';

import useViewProduct from '../../hooks/useViewProduct';
import {Colors} from '../../config/Colors';
import useCheckout from '../../hooks/useCheckout';

const ViewProduct: React.FC = ({route}: any) => {
  const {products, addProducts} = useViewProduct(route.params);
  const {setItem, totalItems} = useCheckout();
  const navigation: string | any = useNavigation();

  return (
    <>
      <Container>
        <HeaderProduct>
          <AreaBack
            title="Back"
            onPress={() => {
              navigation.goBack();
            }}>
            <ViewBack>
              <Ionicons
                name="chevron-back"
                size={20}
                color={Colors.blackSearch}
              />
            </ViewBack>
          </AreaBack>
          <Checkout
            title="Checkout"
            onPress={() => navigation.navigate('Checkout')}>
            <ViewWineBox>
              <ImgWineBox source={require('../../config/image/winebox.png')} />
              <ViewNumberWineBox>
                <TextNumberWineBox>{totalItems}</TextNumberWineBox>
              </ViewNumberWineBox>
            </ViewWineBox>
          </Checkout>
        </HeaderProduct>
        <ImageProduct source={{uri: products.image}} />
        <NameProduct>{products.name}</NameProduct>
        <ViewFlag>
          <SvgUri style={style.flag} uri={products.flag} />
          <TextFlag>{products.country}</TextFlag>
          <TextFlag>{products.type}</TextFlag>
          <TextFlag>{products.classification}</TextFlag>
          <TextFlag>{products.size}</TextFlag>
        </ViewFlag>
        <ViewTitleDescription>
          <TitleDescription>Descrição</TitleDescription>
        </ViewTitleDescription>
        <ViewDescription showsVerticalScrollIndicator={false}>
          <Description>{products.sommelierComment}</Description>
        </ViewDescription>
      </Container>
      <ViewAddCar>
        <ViewDescount>
          <TextDiscount>{products.discount} % OFF</TextDiscount>
        </ViewDescount>
        <ViewPriceButton>
          <ViewPrice>
            <TextPrice>R$ {products.price}</TextPrice>
          </ViewPrice>
          <ViewMemberPrice>
            <TextRSPrice>R$ </TextRSPrice>
            <TextMemberPrice>{products.priceMember}</TextMemberPrice>
          </ViewMemberPrice>
          <ViewNoMember>
            <TextNoMember>
              preço não-sócio R$ {products.priceNonMember}
            </TextNoMember>
          </ViewNoMember>
        </ViewPriceButton>
        <AreaButton onPress={() => setItem(addProducts)}>
          <TextButton>Adicionar</TextButton>
        </AreaButton>
      </ViewAddCar>
    </>
  );
};

export default ViewProduct;

const style = StyleSheet.create({
  flag: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 9,
  },
});
