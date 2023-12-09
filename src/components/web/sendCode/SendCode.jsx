import React from 'react';
import Input from '../../pages/Input';
import { useFormik } from 'formik';
import { sendCodeSchema } from '../validation/validation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SendCode() {

   const navigate =useNavigate();
  const onSubmit = async (users) => {
    try {
      const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/auth/sendcode`, users);
      console.log(data);
    } catch (error) {
      console.error('Error sending code:', error);
    }

    navigate('/forgetpassword')
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit,
    validationSchema: sendCodeSchema,
  });

  const inputs = [
    {
      id: 'email',
      type: 'email',
      name: 'email',
      title: 'user email',
      value: formik.values.email,
    },
  ];

  const renderInputs = inputs.map((input, index) => (
    <Input
      type={input.type}
      id={input.id}
      name={input.name}
      title={input.title}
      value={input.value}
      key={index}
      errors={formik.errors}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      touched={formik.touched}
    />
  ))

  return (
    <div className="container">
      <h2>Send Code</h2>
      <form onSubmit={formik.handleSubmit}>
        {renderInputs}
        <button type="submit">send code</button>
      </form>
    </div>
  );
}
