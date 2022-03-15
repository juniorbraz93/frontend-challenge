import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from '../../config/Colors';

import {
  Container,
  ViewTitleCupon,
  TextTitle,
  CloseCupon,
  ViewCupon,
  CuponInput,
  ViewButton,
  AreaButton,
  TextButton,
  ViewText,
  ViewClose,
} from './styles';

const Cupon = (props: any) => {
  return (
    <Container>
      <ViewTitleCupon>
        <ViewText>
          <TextTitle>Apilcar cupom</TextTitle>
        </ViewText>
        <ViewClose>
          <CloseCupon onPress={props.back}>
            <Feather name="x" size={30} color={Colors.grayD8} />
          </CloseCupon>
        </ViewClose>
      </ViewTitleCupon>
      <ViewCupon>
        <CuponInput placeholder="Insira o código aqui" />
      </ViewCupon>
      <ViewButton>
        <AreaButton>
          <TextButton>Aplicar</TextButton>
        </AreaButton>
      </ViewButton>
    </Container>
  );
};

export default Cupon;
