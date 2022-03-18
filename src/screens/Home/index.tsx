import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Product from '../../components/Product';
import useFetchProduct from '../../hooks/useFetchProduct';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ViewHeader,
  ImgLogo,
  ImgWineBox,
  ViewSearch,
  Search,
  ViewTextProduct,
  TotalTextProduct,
  Checkout,
  ViewWineBox,
  ViewNumberWineBox,
  TextNumberWineBox,
  ViewLoadingPage,
  ViewListFooterComponent,
} from './styles';
import {Colors} from '../../config/Colors';
import useCheckout from '../../hooks/useCheckout';

type Navigate = {navigate(): void};

const Home: React.FC = () => {
  const {products, numberProduct, loadProducts, loadingProducts} =
    useFetchProduct();
  const {totalItems, listItens, setItem, loading} = useCheckout();
  const navigation = useNavigation<NavigationProp<Navigate>>();
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    loadProducts('');
  }, []);

  async function onPressAddItem(data: any, key: string) {
    await setItem(data, key);
    await listItens();
  }

  async function getMoreProducts() {
    setLimit(limit + 10);

    await loadProducts('', 1, limit);
  }

  if (loadingProducts || products.length === 0) {
    return (
      <ViewLoadingPage>
        <ActivityIndicator size={40} color={Colors.blackSearch} />
      </ViewLoadingPage>
    );
  }

  return (
    <Container>
      <ViewHeader>
        <ImgLogo source={require('../../config/image/logo.png')} />
        <Checkout onPress={() => navigation.navigate('Checkout')}>
          <ViewWineBox>
            <ImgWineBox source={require('../../config/image/winebox.png')} />
            <ViewNumberWineBox>
              {loading ? (
                <ActivityIndicator size={12} color={Colors.blue} />
              ) : (
                <TextNumberWineBox>{totalItems}</TextNumberWineBox>
              )}
            </ViewNumberWineBox>
          </ViewWineBox>
        </Checkout>
      </ViewHeader>
      <ViewSearch>
        <MaterialIcons
          style={styles.icon}
          name="search"
          size={20}
          color={Colors.blackSearch}
        />
        <Search
          placeholder="O que você está procurando?"
          onChangeText={(value: any) => loadProducts(value)}
        />
      </ViewSearch>
      <ViewTextProduct>
        <TotalTextProduct>
          {numberProduct} produtos encontrados
        </TotalTextProduct>
      </ViewTextProduct>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        numColumns={2}
        onEndReached={getMoreProducts}
        onEndReachedThreshold={0.1}
        refreshing={loading && products.length === 0}
        onRefresh={() => loadProducts('')}
        ListFooterComponent={() =>
          loadingProducts && products.length > 0 ? (
            <ViewListFooterComponent>
              <ActivityIndicator size={24} color={Colors.blackSearch} />
            </ViewListFooterComponent>
          ) : null
        }
        contentContainerStyle={styles.flatList}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <Product
            productIndex={item.id}
            data={item}
            setItem={setItem}
            loading={loading}
            onPressAddItem={onPressAddItem}
          />
        )}
      />
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  flatList: {
    justifyContent: 'space-between',
  },
  icon: {padding: 10},
});
