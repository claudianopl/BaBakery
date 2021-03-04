import { useField } from '@unform/core';
import React, {
  TextareaHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Error } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Textarea: React.FC<TextAreaProps> = ({ name, icon: Icon, ...rest }) => {
  /**
   * Criando a lógica de registro
   */
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  /**
   * Stylization of focus and onfocus
   */
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleTextareaFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleTextareaBlur = useCallback(() => {
    setIsFocused(false);

    textareaRef.current?.value ? setIsFilled(true) : setIsFilled(false);
  }, []);

  /**
   * Application layout
   */
  return (
    <Container isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
      {Icon && <Icon size={20} />}
      <textarea
        onFocus={handleTextareaFocus}
        onBlur={handleTextareaBlur}
        defaultValue={defaultValue}
        ref={textareaRef}
        {...rest}
      />

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Textarea;
