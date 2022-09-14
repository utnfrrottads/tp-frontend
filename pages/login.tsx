import React from 'react';
import { NextPage } from 'next';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Layout from '../components/Layout/Layout';
import axios from 'axios';
import { useRouter } from 'next/router';
import withAuth from '../utils/withAuth';

const url = process.env.NEXT_PUBLIC_API_URL

const Login: NextPage = ({ auth }: any) => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Ingrese el email'),
      password: Yup.string().required('Ingrese la contraseña'),
    }),
    onSubmit: async values => {
      try {
        let user: any = await axios.post(`${url}/users/login`, values, { withCredentials: true });
        user = user.data;
        router.push("/");

      }
      catch (err) {
        formik.errors.email = "Email o Contraseña incorrectos"
      };
    },
  });
  return (

    <Layout auth={auth}>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
};

export const getServerSideProps = withAuth(null, false);

export default Login;