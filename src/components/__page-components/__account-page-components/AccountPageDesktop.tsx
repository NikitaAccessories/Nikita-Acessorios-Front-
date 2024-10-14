import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../GlobalStylesForComponents.css";
import logoPNG from "../../../assets/elements-Account/logo.png";
import appleIcon from "../../../assets/elements-Account/icons/apple-icon.png";
import googleIcon from "../../../assets/elements-Account/icons/google-icon.png";
import facebookIcon from "../../../assets/elements-Account/icons/facebook-icon.png";
import visiblePassowrd from "../../../assets/elements-Account/icons/password-visible.png";
import notVisiblePassword from "../../../assets/elements-Account/icons/password-not-visible.png";
import ReceivedCode from "./ReceiveCodeDesktop";
import arrowLeft from "../../../assets/elements-Account/icons/arrow-left-icon.png";

const AccountPageDesktop: React.FC = () => {
  // Estado para controlar a visualização da senha
  const [showPassword, setShowPassword] = useState(false);

  // Função para alternar a visualização da senha
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <header className="relative top-0 w-full h-20 bg-primary-beige100 shadow-xl flex items-center px-14">
        <Link to={"/"}>
          <img
            src={logoPNG}
            className="w-30 h-16"
            alt="Logo Nikita Acessórios"
          />
        </Link>
      </header>
      <main className="flex flex-col items-center justify-center mt-8">
        <section className="flex items-center w-[42rem] h-[19rem] bg-primary-rose px-6 shadow-xl border border-gray-300 mb-4">
          <div className="flex flex-col space-y-4 w-1/2">
            <h1 className="flex flex-col text-center font-playfairDisplay">
              Não possui uma conta?
              <span className="cursor-pointer">Cadastre-se.</span>
            </h1>
            <button className="flex items-center justify-start bg-white w-[18rem] py-3 rounded-lg shadow-md border border-gray-300 font-libreBaskerville">
              <img
                src={googleIcon}
                className="w-6 h-6 ml-3"
                alt="Google Icon"
              />
              <span className="ml-4 text-sm">ENTRE COM O GOOGLE</span>
            </button>
            <button className="flex items-center justify-start bg-white w-[18rem] py-3 rounded-lg shadow-md border border-gray-300 font-libreBaskerville">
              <img
                src={facebookIcon}
                className="w-6 h-6 ml-3"
                alt="Facebook Icon"
              />
              <span className="ml-4 text-sm">ENTRE COM O FACEBOOK</span>
            </button>
            <button className="flex items-center justify-start bg-white w-[18rem] py-3 rounded-lg shadow-md border border-gray-300 font-libreBaskerville">
              <img src={appleIcon} className="w-6 h-6 ml-3" alt="Apple Icon" />
              <span className="ml-4 text-sm">ENTRE COM A APPLE</span>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center w-1/2 font-playfairDisplay">
            <h1 className="flex flex-col text-center font-libreBaskerville">
              ENTRAR COM MEU E-MAIL E <span>SENHA</span>
            </h1>

            <span className="self-start ml-[1.3rem] mb-2">Email:</span>
            <input
              className="w-[18rem] text-center focus:outline-none h-[2rem] rounded-2xl shadow-xl mb-4"
              type="email"
              id="email"
            />

            <span className="self-start ml-[1.3rem] mb-2">Senha:</span>
            <div className="relative w-[18rem]">
              <input
                className="w-full text-center focus:outline-none h-[2rem] rounded-2xl shadow-xl pr-10" // Espaço para o ícone
                type={showPassword ? "text" : "password"} // Alterna entre password e text
                id="password"
              />
              <button
                type="button"
                className="absolute w-6 h-6 inset-y-1 right-3 flex items-center text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <img src={visiblePassowrd} />
                ) : (
                  <img src={notVisiblePassword} />
                )}{" "}
                {/* Alterna o ícone */}
              </button>
            </div>

            <div className="flex items-center justify-center text-white space-x-4 mt-4">
              <button className="flex items-center justify-center bg-primary-graphite w-36 h-8 rounded-2xl text-lg">
                <Link to={"/"}>
                  <span className="flex items-center justify-center gap-2 mr-4">
                    <img
                      className="h-4 w-4"
                      src={arrowLeft}
                      alt="Icone de Voltar"
                    />
                    Voltar
                  </span>
                </Link>
              </button>
              <button
                className="flex items-center justify-center bg-primary-graphite w-32 h-8 rounded-2xl text-lg"
                type="submit"
              >
                <Link to={"/ReceiveCode"}>
                  <span>Entrar</span>
                </Link>
              </button>
            </div>
            <Link to={"/ReceiveCode"}>
              <span className="flex items-center justify-center mt-2 cursor-pointer">
                esqueceu a senha?
              </span>
            </Link>
          </div>
        </section>
        <section className="flex items-center justify-center w-[50rem] h-[22rem] bg-primary-rose px-6 shadow-xl border border-gray-300 mb-4">
          <div className="flex flex-col font-playfairDisplay px-10">
            <h1 className="flex flex-col items-center justify-center mb-6 text-2xl">
              SEU LOGIN NÃO ESTÁ <span>FUNCIONANDO?</span>
            </h1>
            <h2 className="text-xl mb-4">
              VOCÊ VAI PRECISAR CADASTRAR UMA NOVA SENHA DE ACESSO
            </h2>
            <span>1. Clique no link "esqueci minha senha".</span>
            <span>
              2. A seguir, na área de "receber código de acesso por e-mail",
              insira o seu e-mail.
            </span>
            <span>
              3. Verifique sua caixa de entrada e coloque o código recebido.
            </span>
            <span>
              4. Preencha os campos de senha e confirmação de senha, e pronto.
            </span>
            <span className="mt-6">
              Desculpe-nos pelo transtorno. Mudamos o site para propocionar uma
              melhor experiência Nikita. Mais rápida, mais segura e com a melhor
              seleção de joias para você.
            </span>
          </div>
        </section>
      </main>
    </>
  );
};

export default AccountPageDesktop;
