import axios from 'axios';
import { NextPageContext } from 'next';

export default function withAuth(cb: null | ((auth: Auth | null, context: NextPageContext) => {}), protectedRoute: boolean) {

    return async (context: any) => {

        try {

            const loginRequest = await axios.get(`http://localhost:3700/api/users/session`, {
                withCredentials: true, headers: {
                    Authorization: `Bearer ${context.req.cookies["token"]}`
                }
            });


            if (cb) return cb(loginRequest.data, context);


            return {
                props: {
                    auth: loginRequest.data
                }
            };
        }


        catch (err) {

            if (protectedRoute) {
                return {
                    redirect: {
                        destination: "/login",
                        permanent: false
                    }
                }
            };

            if (cb) return cb(null, context);

            return { props: { auth: null } };



        };


    };


};


