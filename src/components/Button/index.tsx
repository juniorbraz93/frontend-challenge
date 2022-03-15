import React from 'react';

import {ContainerButton, AreaButton, TextButton} from './styles';

import {storageSetItem} from '../../utils/AsyncStorage';

const Button = ({data}: any) => {
  return (
    <ContainerButton>
      <AreaButton onPress={() => storageSetItem(String(data.id), data)}>
        <TextButton>Adicionar</TextButton>
      </AreaButton>
    </ContainerButton>
  );
};

export default Button;
