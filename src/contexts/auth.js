import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();

    useEffect(() => {

        const userToken = localStorage.getItem("user_token");
        const users = [
            {email: "byanka", password: 1234}
        ];  

        if (userToken && users) {
            const hasUser = users[0].email;

            if (hasUser) setUser(hasUser[0]);
        }
    }, []);

    const signin = (email, password) => {

        const users = [
            {email: "byanka", password: "1234"}
        ];    

        const hasUser = users;

        for (let i = 0; i < users.length; i++){
            if (email === hasUser[i].email || password === hasUser[i].password) {
                if (hasUser[0].email === email && hasUser[0].password === password) {
                    const token = Math.random().toString(36).substring(2);
                    localStorage.setItem("user_token", JSON.stringify({ email, token }));
                    setUser({ email, password });
    
                    console.log(token)
    
                    return;
                } else {
                    return "E-mail ou senha incorretos";
                }
            } else {
                return "Usuário não cadastrado";
            };

        };
    };

    const signout = () => {
        setUser(null);
        localStorage.removeItem("user_token");
    };

    return (
        <AuthContext.Provider
            value={{ user, signed: !!user, signin, signout }}
        >
            {children}
        </AuthContext.Provider>
    );
};