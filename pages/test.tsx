import React from 'react'
import type { NextPage } from 'next'
import Layout from '../components/Layout/Layout'
import withAuth from '../utils/withAuth';
import { NextPageContext } from 'next';

const Test: NextPage<{ auth: Auth }> = ({ auth }) => {

  console.log(auth);

  return (
    <Layout auth={auth}>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>35</h1>
    </Layout>
  )
};



//withAuth RECIBE 2 PARÁMETROS: 
//  -UN CALLBACK QUE PERMITE ACCEDER AL OBJETO DEL USUARIO LOGUEADO SI ES QUE LO ESTÁ Y EL CONTEXTO DE NEXT
//  -UN BOOLEANO QUE DETERMINA SI LA RUTA ESTÁ PROTEGIDA O NO(HACE FALTA ESTAR AUTENTICADO), SINO REDIRECCIONA AL LOGIN



//|-----------|
//| EJEMPLOS  |
//|-----------|



//export const getServerSideProps = withAuth(null, false);
//NO HACE FALTA ESTAR LOGUEADO, Y EL CALLBACK ES null, ENTONCES EL PAGE VA A RECIBIR SOLO LA PROP auth;


//|----------------------------------------------------|
//| ¿SI QUEREMOS ADEMÁS DEL auth OBTENER OTRAS props?  |
//|---------------------------------------------------|

export const getServerSideProps = withAuth(async (auth: Auth | null, context: NextPageContext) => {



  return { props: { auth } }

}, false);        //LA PAGE NO SOLO VA A RECIBIR auth, SINO TODAS LAS PROPS QUE SE RETORNEN EN EL CALLBACK



/*export const getServerSideProps = withAuth(null, true);*/
//FUNCIONA IGUAL QUE LOS EJEMPLOS ANTERIORES, CON LA PARTICULARIDAD QUE SI EL USUARIO NO ESTÁ LOGUEADO
//ESTE SERÁ REDIRIGIDO AL LOGIN

export default Test
