import React, { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import style from './Forma.module.css';

// eslint-disable-next-line
const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Forma = () => {
  // eslint-disable-next-line
  const [submitted, setSubmitted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [inputs, setInputs] = useState({});

  const formik = useFormik({
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[a-zA-Z\s]+$/, 'Nieprawidłowe Іmię')
        .required('Nieprawidłowe Іmię'),
      email: Yup.string()
        .max(254)
        .matches(emailRegExp, 'Nieprawidłowy email')
        .required('Nieprawidłowy email'),
      message: Yup.string(),
    }),
    onSubmit: values => {
      alert('Form successfully submitted.!');
      setSubmitted(true);
      formik.resetForm(); // Очищення форми
    },
  });

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
    setFieldErrors(errors => ({ ...errors, [name]: '' }));
  };

  const btnSubmit = async e => {
    e.preventDefault();

    // Оновлення inputs перед валідацією
    setInputs(prevInputs => ({ ...prevInputs }));

    // Зачекати на оновлення inputs
    await new Promise(resolve => setTimeout(resolve, 0));

    formik.setValues(inputs);
    formik.submitForm(); // Використовуйте submitForm() замість handleSubmit()

    // Зачекати на завершення операції submitForm()
    await new Promise(resolve => setTimeout(resolve, 0));

    formik.validateForm().then(errors => {
      setFieldErrors(errors);
      if (Object.keys(errors).length === 0) {
        alert('Form successfully submitted');
        setSubmitted(true);
        setInputs({});
        formik.resetForm(); // Очищення форми
        setFieldErrors(errors);
      } 
    });
  };

  return (
    <Form className={style.formContainer}>
      <Form.Item
        label="Imię*"
        className={style.formItem}
        validateStatus={fieldErrors.name ? 'error' : ''}
        help={fieldErrors.name}
      >
        <Input
          {...formik.getFieldProps('name')}
          className={`${style.formInput} ${fieldErrors.name ? style.errorInput : ''}`}
          onChange={handleChange} // Додайте onChange
          value={inputs.name}
          placeholder="Imię"
        />
        {fieldErrors.name && (
          <Alert
            message={fieldErrors.name}
            className={style.alert}
            type="error"
          />
        )}
      </Form.Item>

      <Form.Item
        label="Email*"
        className={style.formItem}
        validateStatus={fieldErrors.email ? 'error' : ''}
        help={fieldErrors.email}
      >
        <Input
          {...formik.getFieldProps('email')}
          className={`${style.formInput} ${fieldErrors.email ? style.errorInput : ''}`}
          onChange={handleChange} // Додайте onChange
          placeholder="mail@gmail.com"
          value={inputs.email}
        />
        {fieldErrors.email && (
          <Alert message={fieldErrors.email} type="error" />
        )}
      </Form.Item>

      <Form.Item
        label="Wiadomość"
        className={`${style.formItem} ${style.formItemTextarea}`}
        validateStatus={fieldErrors.message ? 'error' : ''}
        help={fieldErrors.message}
      >
        <Input.TextArea
          {...formik.getFieldProps('message')}
          className={style.formTextarea}
          onChange={handleChange} // Додайте onChange
          placeholder="Twoja wiadomość..."
          rows={3}
          value={inputs.message}
        />
      </Form.Item>

      {/* Button */}
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className={style.formButton}
          onClick={btnSubmit}
        >
          Wyślij
        </Button>
      </Form.Item>

    </Form>
  );
};

export default Forma;
