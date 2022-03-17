import React from 'react';

import {ContainerButton, AreaButton, TextButton} from './styles';

import {ActivityIndicator} from 'react-native';
import {Colors} from '../../config/Colors';

const Button = ({data, setItem, loading}: any) => {
  // storageSetItem(String(data.id), body)
  return (
    <ContainerButton>
      <AreaButton onPress={() => setItem(data)}>
        {loading ? (
          <ActivityIndicator key={data.id} color={Colors.white} />
        ) : (
          <TextButton>Adicionar</TextButton>
        )}
      </AreaButton>
    </ContainerButton>
  );
};

export default Button;
