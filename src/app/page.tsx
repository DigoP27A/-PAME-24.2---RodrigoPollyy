import Botao from "@/components/Botao";
import FormInput from "@/components/FormInput";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="border-2 border-red-600 w-[100vw] h-[100vh] flex items-center justify-center">
      <Image
        src="/fundo3.jpg" // Caminho da imagem dentro de public/
        alt="Fundo"
        layout="fill" // Faz a imagem cobrir toda a tela
        objectFit="cover" // Mantém o aspecto
        className="absolute -z-10" // Coloca a imagem atrás do conteúdo
      />
      <div className= "w-[30%] h-[60%] backdrop-blur-md rounded-2xl flex items-center justify-center">
        <div className= "w-[80%] h-[80%] flex flex-col ">
          <form className= "h-[100%] flex flex-col gap-5 p-4">
            <FormInput label="Usuário" placeHolder="Email"/>
            <FormInput label="Senha" placeHolder="Senha"/>
            <Botao titulo="Login" cor="bg-red-700"/>
          </form>
        </div>
      </div>
    </div>
  );
}
