import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import perfil from "../../assets/imagens/perfilNew.png";
import emailIcon from "../../assets/imagens/ic_outline-email.png";
import passw from "../../assets/imagens/material-symbols_lock-outline.png";

const users = [
  { useriD: "Byanka", password: "123456", rode: "admin" },
  { useriD: "Joao", password: "123456", rode: "admin" }
]

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <C.Container>
      <C.Content>
        

        <C.img src={perfil} />

        <C.ContentW>
          <C.Label>WELCOME</C.Label>
        </C.ContentW>

        <C.email>
          <C.labelOne>E-mail</C.labelOne>
          <img src={emailIcon} className="iconImageEmail" />
          <C.Input
            type="email"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
        </C.email>

        <C.password>
          <C.labelOne>Password</C.labelOne>
          <img src={passw} className="iconImagePass" />
          <C.Input
            type="password"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
          />
        </C.password>

        <C.labelError>{error}</C.labelError>
        <C.Button Text="LOGIN" onClick={handleLogin}>LOGIN</C.Button>
      </C.Content>
    </C.Container>
  );
};

export default Signin;