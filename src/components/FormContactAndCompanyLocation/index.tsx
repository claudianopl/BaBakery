import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiUser, FiSmartphone, FiMail, FiAlignLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { InputBlock, ContainerFormContact } from './styles';

import Input from '../Input';
import Textarea from '../Textarea';
import InputMask from '../InputMask';
import getValidationErrors from '../../utils/getValidationErrors';

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const FormContact: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  /**
   * Validate form
   */
  const handleSubmit = useCallback(async (data: ContactForm) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório!'),
        phone: Yup.string().required('Número de celular obrigatório!'),
        email: Yup.string()
          .required('E-mail obrigatório!')
          .email('E-mail não é válido!'),
        message: Yup.string().required('Mensagem obrigatória!'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  return (
    <ContainerFormContact>
      <h2>
        Se interessou pelos nossos serviços? Manda uma mensagem pra gente. :)
      </h2>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <InputBlock>
          <label htmlFor="name">Nome</label>
          <Input
            icon={FiUser}
            name="name"
            id="name"
            placeholder="Ex.: Renata Lopes"
          />
        </InputBlock>
        <InputBlock>
          <label htmlFor="phone">Telefone</label>
          <InputMask
            mask="(99) 9 9999-9999"
            icon={FiSmartphone}
            name="phone"
            id="phone"
            placeholder="(xx) x xxxx.xxxx"
          />
        </InputBlock>
        <InputBlock>
          <label htmlFor="email">Email</label>
          <Input
            icon={FiMail}
            name="email"
            id="email"
            placeholder="exemplo@exemplo.com.br"
          />
        </InputBlock>
        <InputBlock className="textArea">
          <label htmlFor="message">Mensagem</label>
          <Textarea
            icon={FiAlignLeft}
            name="message"
            id="message"
            placeholder="Digite aqui a sua mensagem"
          />
        </InputBlock>

        <button type="submit">Enviar</button>
      </Form>
    </ContainerFormContact>
  );
};

export default FormContact;
