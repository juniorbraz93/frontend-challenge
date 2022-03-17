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
import {FlatList, Modal, StyleSheet, View} from 'react-native';
import Cupon from '../../components/Cupon';
import {storageClear} from '../../utils/AsyncStorage';
import useCheckout from '../../hooks/useCheckout';

const Checkout: React.FC = () => {
  const navigation = useNavigation();
  const {getItems, totalValue, totalItems} = useCheckout();

  const [visibleCupon, setVisibleCupon] = useState(false);

  return (
    <Container>
      <View style={{backgroundColor: Colors.white, flex: 1}}>
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
        <FlatList
          data={getItems}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 120}}
          ItemSeparatorComponent={() => (
            <View
              style={{height: 1, backgroundColor: Colors.grayDE, margin: 16}}
            />
          )}
          ListFooterComponent={() => (
            <>
              <AreaSpace />
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
                  <OrderSummary>Produtos({totalItems} item)</OrderSummary>
                  <OrderSummary>
                    R${' '}
                    {totalValue.toLocaleString('pt-BR', {
                      // Ajustando casas decimais
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </OrderSummary>
                </ViewOrderSummary>
                <ViewDelivery>
                  <Delivery>Entrega</Delivery>
                  <Delivery>A calcular</Delivery>
                </ViewDelivery>
              </AreaOrderSummary>
            </>
          )}
          renderItem={({item}) => <CardCheckout data={item} />}
        />
        {/* Aqui vai um FlatList */}
      </View>
      <AreaOrderPrice>
        <AreaSpace />
        <AreaCheckout>
          <ViewPrice>
            <TitlePrice>Subtotal</TitlePrice>
            <ViewMemberPrice>
              <TextRSPrice>R$ </TextRSPrice>
              <Price>
                {totalValue.toLocaleString('pt-BR', {
                  // Ajustando casas decimais
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </Price>
            </ViewMemberPrice>

            <NoMemberPrice>Preço Não-Sócio</NoMemberPrice>
          </ViewPrice>
          <ViewButton>
            <AreaButton onPress={() => storageClear()}>
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
    // margin: 5,
    // bottom: 2,
    // position: 'absolute',
    // right: -20,
  },
});
