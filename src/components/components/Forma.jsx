import React, { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import style from './Forma.module.css';

const Forma = () => {
  const [submitted, setSubmitted] = useState(false);
  // eslint-disable-next-line
  const [errorMessage, setErrorMessage] = useState('');
  const [inputs, setInputs] = useState({});

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[a-zA-Z\s]+$/, 'Nieprawidłowe Іmię')
        .required(''),
      email: Yup.string()
        .matches(/^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Nieprawidłowy email')
        .required(''),
      message: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log('Submitting:', values);
      alert('Форма успішно відправлена. Все гаразд!');
      setSubmitted(true);
    },
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    }

  const btnSumit = (event) => {
    event.preventDefault();
    alert('Форма успішно відправлена. Все гаразд!');
    setInputs({})
  }

  return (
    <Form onSubmit={formik.handleSubmit} className={style.formContainer}>
      <Form.Item label="Imię*" className={style.formItem} validateStatus={formik.errors.name ? 'error' : ''}>
        <Input {...formik.getFieldProps('name')} className={style.formInput} onChange={handleChange} value={inputs.name || ""} name="name" placeholder='Imię'/>
        {formik.touched.name && formik.errors.name && <Alert message={formik.errors.name} type="error" />}
      </Form.Item>

      <Form.Item label="Email" className={style.formItem} validateStatus={formik.errors.email ? 'error' : ''}>
        <Input {...formik.getFieldProps('email')} className={style.formInput} onChange={handleChange} value={inputs.email || ""} name="email" placeholder='mail@gmail.com'/>
        {formik.touched.email && formik.errors.email && <Alert message={formik.errors.email} type="error" />}
      </Form.Item>

      <Form.Item label="Message"  className={`${style.formItem} ${style.formItemTextarea}`} validateStatus={formik.errors.message ? 'error' : ''}>
        <Input.TextArea {...formik.getFieldProps('message')} className={style.formTextarea} onChange={handleChange}  value={inputs.message || ""} message="email" placeholder='Twoja wiadomość...'   rows={3}/>
        {formik.touched.message && formik.errors.message && <Alert message={formik.errors.message} type="error" />}
      </Form.Item>

      {errorMessage && <Alert message={errorMessage} type="error" />}

      <Form.Item>
        <Button type="primary" htmlType="submit" className={style.formButton} onClick={btnSumit}>
          Wyślij
        </Button>
      </Form.Item>

      {submitted && <Alert message="Form submitted successfully" type="success" />}
    </Form>
  );
};

export default Forma;
