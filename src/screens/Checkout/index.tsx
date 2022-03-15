import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  HeaderTitle,
  HeaderProduct,
  AreaBack,
  ViewBack,
  AreaOrderPrice,
  ViewCupon,
  AreaCupon,
  ImgCupon,
  TextCupon,
  ViewButtonCupon,
  AreaButtonCupon,
  TextButtonCupon,
  AreaOrderSummary,
  TitleOrderSummary,
  ViewOrderSummary,
  OrderSummary,
  ViewDelivery,
  Delivery,
  AreaCheckout,
  ViewPrice,
  TitlePrice,
  Price,
  NoMemberPrice,
  ViewButton,
  AreaButton,
  TextButton,
  AreaSpace,
  ViewMemberPrice,
  TextRSPrice,
} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../config/Colors';
import CardCheckout from '../../components/CardCheckout';
import Feather from 'react-native-vector-icons/Feather';
import {Modal, StyleSheet} from 'react-native';
import Cupon from '../../components/Cupon';

const Checkout: React.FC = () => {
  const navigation = useNavigation();
  const [visibleCupon, setVisibleCupon] = useState(false);

  return (
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
        <HeaderTitle>Sua WineBox</HeaderTitle>
      </HeaderProduct>
      {/* Aqui vai um FlatList */}
      <CardCheckout />
      {/* Aqui vai um FlatList */}
      <AreaOrderPrice>
        <ViewCupon>
          <AreaCupon>
            <ImgCupon
              source={require('../../config/image/voucher-de-desconto.png')}
            />
            <TextCupon>Cupom de desconto</TextCupon>
          </AreaCupon>
          <ViewButtonCupon>
            <AreaButtonCupon onPress={() => setVisibleCupon(true)}>
              <TextButtonCupon>Adicionar</TextButtonCupon>
              <Feather
                name="arrow-right"
                size={16}
                color={Colors.pink}
                style={styles.arrow}
              />
            </AreaButtonCupon>
          </ViewButtonCupon>
        </ViewCupon>
        <AreaSpace />
        <AreaOrderSummary>
          <TitleOrderSummary>Resumo do Pedido</TitleOrderSummary>
          <ViewOrderSummary>
            <OrderSummary>Produtos(1 item)</OrderSummary>
            <OrderSummary>R$ 58,71</OrderSummary>
          </ViewOrderSummary>
          <ViewDelivery>
            <Delivery>Entrega</Delivery>
            <Delivery>A calcular</Delivery>
          </ViewDelivery>
        </AreaOrderSummary>
        <AreaSpace />
        <AreaCheckout>
          <ViewPrice>
            <TitlePrice>Subtotal</TitlePrice>
            <ViewMemberPrice>
              <TextRSPrice>R$ </TextRSPrice>
              <Price>58,71</Price>
            </ViewMemberPrice>

            <NoMemberPrice>Preço Não-Sócio</NoMemberPrice>
          </ViewPrice>
          <ViewButton>
            <AreaButton>
              <TextButton>Prosseguir</TextButton>
            </AreaButton>
          </ViewButton>
        </AreaCheckout>
      </AreaOrderPrice>
      <Modal transparent={true} animationType="slide" visible={visibleCupon}>
        <Cupon back={() => setVisibleCupon(false)} />
      </Modal>
    </Container>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  arrow: {
    margin: 5,
    bottom: 2,
    position: 'absolute',
    right: -20,
  },
});
