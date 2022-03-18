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
  ViewMarginSpace,
  ViewLoading,
} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../config/Colors';
import CardCheckout from '../../components/CardCheckout';
import Feather from 'react-native-vector-icons/Feather';
import {ActivityIndicator, FlatList, Modal, StyleSheet} from 'react-native';
import Cupon from '../../components/Cupon';
import {storageClear} from '../../utils/AsyncStorage';
import useCheckout from '../../hooks/useCheckout';

const Checkout: React.FC = () => {
  const navigation = useNavigation();
  const {getItems, totalValue, totalItems, listItens, setItem, loading} =
    useCheckout();

  const [visibleCupon, setVisibleCupon] = useState(false);

  function onPressAddItem(data: {quantity: number}, key: string | undefined) {
    if (data.quantity >= 1) {
      setItem(data, key);
      return listItens();
    }
  }

  if (loading && totalItems === 0) {
    return (
      <ViewLoading>
        <ActivityIndicator size={40} color={Colors.blackSearch} />
      </ViewLoading>
    );
  }

  return (
    <>
      <Container>
        <HeaderProduct>
          <AreaBack
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
          contentContainerStyle={styles.contentContainerStyle}
          style={styles.flatList}
          ItemSeparatorComponent={() => <ViewMarginSpace />}
          ListFooterComponentStyle={styles.ListFooterComponentStyle}
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
                    <Feather name="arrow-right" size={16} color={Colors.pink} />
                  </AreaButtonCupon>
                </ViewButtonCupon>
              </ViewCupon>
              <AreaSpace />
              <AreaOrderSummary>
                <TitleOrderSummary>Resumo do Pedido</TitleOrderSummary>
                <ViewOrderSummary>
                  <OrderSummary>
                    Produtos ({totalItems} {totalItems > 1 ? 'itens' : 'item'})
                  </OrderSummary>
                  <OrderSummary>
                    R${' '}
                    {totalValue.toLocaleString('pt-BR', {
                      //
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
          renderItem={({item, index}) => (
            <CardCheckout
              onPressAddItem={onPressAddItem}
              lastIndex={getItems.length - 1 === index}
              data={item}
              loading={loading}
            />
          )}
        />
        {/* Aqui vai um FlatList */}

        <Modal transparent={true} animationType="slide" visible={visibleCupon}>
          <Cupon back={() => setVisibleCupon(false)} />
        </Modal>
      </Container>
      <AreaOrderPrice>
        <AreaCheckout>
          <ViewPrice>
            <TitlePrice>Subtotal</TitlePrice>
            <ViewMemberPrice>
              <TextRSPrice>R$ </TextRSPrice>
              <Price>
                {totalValue.toLocaleString('pt-BR', {
                  //
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
    </>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  contentContainerStyle: {
    marginBottom: 20,
  },
  flatList: {
    backgroundColor: Colors.white,
    marginBottom: 100,
  },
  ListFooterComponentStyle: {
    backgroundColor: Colors.grayDE,
  },
});
