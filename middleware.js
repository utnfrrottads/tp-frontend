import { NextResponse } from 'next/server'

// import { verify } from "jsonwebtoken";

export async function middleware(request){

  const jwt = await request.cookies.get("userToken");

  if (!jwt) return NextResponse.redirect(new URL("/login", request.url)); 
// Faltaria validar si la Cookie es correcta
// Pero se necesita otra libreria, debido a que jwt no corre en edge
  return NextResponse.next();
  

}


export const config = {
    matcher: ["/chat", '/'],
  };

