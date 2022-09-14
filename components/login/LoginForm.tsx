import React from 'react'
import * as Yup from 'yup'
import { Field, Form, Formik } from 'formik'

import {
  Box,
  Button,
  CircularProgress,
  InputAdornment,
  TextField
} from '@mui/material'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import LockIcon from '@mui/icons-material/Lock'

import { useMutation } from '@tanstack/react-query'

import axios from 'axios'
import router from 'next/router'

const url = process.env.NEXT_PUBLIC_API_URL

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Ingrese un email válido').required('Requerido'),
  password: Yup.string().required('Requerido')
})

const initialValues: LoginPayload = {
  email: '',
  password: ''
}

interface LoginPayload {
  email: string
  password: string
}

const LoginForm = () => {
  const mutation = useMutation(['login'], async (values: LoginPayload) => {
    await axios.post(`${url}/users/login`, values, {
      withCredentials: true
    })
    router.push('/')
  })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => mutation.mutate(values)}
      validationSchema={loginSchema}
    >
      {({ values, touched, errors }) => (
        <Form>
          <Box
            sx={{ display: 'flex', flexDirection: 'column', rowGap: '20px' }}
          >
            <Box>
              <Field
                id="email"
                name="email"
                label="Email"
                as={TextField}
                fullWidth
                value={values.email}
                error={touched.email && errors.email}
                helperText={touched.email && errors.email}
                margin="dense"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <AlternateEmailIcon fontSize="small" />
                    </InputAdornment>
                  )
                }}
              />

              <Field
                id="password"
                name="password"
                label="Password"
                type="password"
                as={TextField}
                fullWidth
                value={values.password}
                error={touched.password && errors.password}
                helperText={touched.password && errors.password}
                margin="dense"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <LockIcon fontSize="small" />
                    </InputAdornment>
                  )
                }}
              />
            </Box>

            <Button
              color="secondary"
              variant="contained"
              type="submit"
              disabled={mutation.isLoading}
            >
              {mutation.isLoading ? (
                <CircularProgress size={22} />
              ) : (
                'Iniciar Sesión'
              )}
            </Button>

            {mutation.isError && (
              <span>{(mutation.error as Error).message}</span>
            )}
          </Box>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
