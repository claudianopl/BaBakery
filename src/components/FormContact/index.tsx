import React, { useCallback, useEffect, useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiUser, FiSmartphone, FiMail, FiAlignLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { motion } from 'framer-motion';
import Aos from 'aos';
import { InputBlock, ContainerFormContact } from './styles';
import 'aos/dist/aos.css';

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
      <h2 data-aos="fade">
        Se interessou pelos nossos serviços? Manda uma mensagem pra gente. :)
      </h2>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <InputBlock data-aos="fade-right" data-aos-delay="100">
          <label htmlFor="name">Nome</label>
          <Input
            icon={FiUser}
            name="name"
            id="name"
            placeholder="Ex.: Renata Lopes"
          />
        </InputBlock>
        <InputBlock data-aos="fade-right" data-aos-delay="200">
          <label htmlFor="phone">Telefone</label>
          <InputMask
            mask="(99) 9 9999-9999"
            icon={FiSmartphone}
            name="phone"
            id="phone"
            placeholder="(xx) x xxxx.xxxx"
          />
        </InputBlock>
        <InputBlock data-aos="fade-right" data-aos-delay="300">
          <label htmlFor="email">Email</label>
          <Input
            icon={FiMail}
            name="email"
            id="email"
            placeholder="exemplo@exemplo.com.br"
          />
        </InputBlock>
        <InputBlock
          className="textArea"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <label htmlFor="message">Mensagem</label>
          <Textarea
            icon={FiAlignLeft}
            name="message"
            id="message"
            placeholder="Digite aqui a sua mensagem"
          />
        </InputBlock>

        <motion.button data-aos="fade-right" data-aos-delay="500" type="submit">
          Enviar
        </motion.button>
      </Form>
    </ContainerFormContact>
  );
};

export default FormContact;
