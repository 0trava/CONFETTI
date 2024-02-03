import React, { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { useForm } from 'react-hook-form';
import style from './Forma.module.css';

const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };
  
  const validateMessage = (message) => {
    return message.length > 0;
  };
  
  const Forma = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
  
    const onSubmit = (data) => {
      if (!validateEmail(data.email)) {
        setErrorMessage('Invalid email format');
        return;
      }
  
      if (!validateMessage(data.message)) {
        setErrorMessage('Message cannot be empty');
        return;
      }
  
      setSubmitted(true);
    };
  
    return (
        <Form onSubmit={handleSubmit(onSubmit)} className={style.formContainer}>
        <Form.Item label="Name" className={style.formItem}>
          <Input {...register('name', { required: true })} className={style.formInput} />
          {errors.name && <Alert message="Name is required" type="error" />}
        </Form.Item>
        <Form.Item label="Email" className={style.formItem}>
          <Input {...register('email', { required: true })} className={style.formInput} />
          {errors.email && <Alert message="Email is required" type="error" />}
          {!validateEmail(register('email').value) && <Alert message="Invalid email format" type="error" />}
        </Form.Item>
        <Form.Item label="Message" className={style.formItem}>
          <Input.TextArea {...register('message', { required: true })} className={style.formTextarea} />
          {errors.message && <Alert message="Message is required" type="error" />}
        </Form.Item>
        {errorMessage && <Alert message={errorMessage} type="error" />}
        <Form.Item>
          <Button type="primary" htmlType="submit" className={style.formButton}>
            Submit
          </Button>
        </Form.Item>
        {submitted && <Alert message="Form submitted successfully" type="success" />}
      </Form>
    );
  };

export default Forma