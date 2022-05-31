import React, { useEffect, useState } from "react";

import api from "../api/Api";

export const AuthContext = React.createContext({});

const { REACT_APP_URL_LOGIN, REACT_APP_URL_GET_TESTIMONIALS, REACT_APP_PASSWORD, REACT_APP_USERNAME } = process.env;

export const AuthProvider = (props) => {
    const [user, setUser] = useState([]);
    const [tokenApi, setIsToken] = useState(null);

    useEffect(() => {
        async function login() {
            const  token = await api.post(REACT_APP_URL_LOGIN, {
                username: REACT_APP_USERNAME,
                password: REACT_APP_PASSWORD,
            });
            await setIsToken(token.data.token);
            if(tokenApi !== null) {
                const user = await api.get(REACT_APP_URL_GET_TESTIMONIALS, {
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
