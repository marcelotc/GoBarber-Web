import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest, updateProfileSuccess } from '~/store/modules/user/actions';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo"></Input>
        <Input name="email" type="email" placeholder="Seu endereço de email"></Input>
        <hr />

        <Input type="password" name="oldPassword" placeholder="Sua senha atual"></Input>
        <Input type="password" name="password" placeholder="Nova senha"></Input>
        <Input type="password" name="confirmPassword" placeholder="Confirmação de senha"></Input>

        <button type="submit">Atualizar perfil</button>
      </Form>

      <button type="button">Sair do GoBarber</button>
    </Container>
  );
}
