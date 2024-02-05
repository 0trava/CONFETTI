import React, { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import style from './Forma.module.css';

const Forma = () => {
  const [submitted, setSubmitted] = useState(false);
  // eslint-disable-next-line
  const [errorMessage, setErrorMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values) => {
      console.log('Submitting:', values);
      // Можете виконати необхідні дії при успішному відправленні форми тут
      setSubmitted(true);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit} className={style.formContainer}>
      <Form.Item label="Imię*" className={style.formItem} validateStatus={formik.errors.name ? 'error' : ''}>
        <Input {...formik.getFieldProps('name')} className={style.formInput_input} />
        {formik.touched.name && formik.errors.name && <Alert message={formik.errors.name} type="error" />}
      </Form.Item>

      <Form.Item label="Email" className={style.formItem} validateStatus={formik.errors.email ? 'error' : ''}>
        <Input {...formik.getFieldProps('email')} className={style.formInput} />
        {formik.touched.email && formik.errors.email && <Alert message={formik.errors.email} type="error" />}
      </Form.Item>

      <Form.Item label="Message" className={style.formItem} validateStatus={formik.errors.message ? 'error' : ''}>
        <Input.TextArea {...formik.getFieldProps('message')} className={style.formTextarea} />
        {formik.touched.message && formik.errors.message && <Alert message={formik.errors.message} type="error" />}
      </Form.Item>

      {errorMessage && <Alert message={errorMessage} type="error" />}

      <Form.Item>
        <Button type="primary" htmlType="submit" className={style.formButton}>
          Wyślij
        </Button>
      </Form.Item>

      {submitted && <Alert message="Form submitted successfully" type="success" />}
    </Form>
  );
};

export default Forma;
