import React, { useEffect, useState } from "react";

import api from "../api/Api";

export const AuthContext = React.createContext({});

const { URL_LOGIN, URL_GET_TESTIMONIALS, PASSWORD, USERNAME } = process.env;

export const AuthProvider = (props) => {
    const [user, setUser] = useState([]);
    const [tokenApi, setIsToken] = useState(null);

    useEffect(() => {
        async function login() {
            const  token = await api.post(URL_LOGIN, {
                username: USERNAME,
                password: PASSWORD,
            });
            await setIsToken(token.data.token);
            if(tokenApi !== null) {
                const user = await api.get(URL_GET_TESTIMONIALS, {
                    headers: {
                        authorization: `${tokenApi}`,
                    },
                });

                console.log(user);
                await setUser(user.data);
            }
        }
        login();
    }, [tokenApi]);

    return (
        <AuthContext.Provider value={{ user, tokenApi }}>{props.children}</AuthContext.Provider>
    );
};
