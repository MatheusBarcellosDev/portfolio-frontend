import React, { useEffect, useState } from "react";

import api from "../api/Api";

export const AuthContext = React.createContext({});


export const AuthProvider = (props) => {
    const [coments, setComents] = useState([]);

    useEffect(() => {
        const getTestimonials = async () => {
            const response = await api.get(process.env.REACT_APP_URL_GET_TESTIMONIALS);
            const comentsFilter = response.data.comentarios.filter(coment => coment.status === true);
            setComents(comentsFilter);

        }
        getTestimonials();
    }, []);

    return (
        <AuthContext.Provider value={{ coments }}>{props.children}</AuthContext.Provider>
    );
};
