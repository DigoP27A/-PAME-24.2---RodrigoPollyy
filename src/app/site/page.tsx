import Image from "next/image";
import Link from 'next/link';
import Botao from "@/components/Botao";
export default function Home(){
    return(
        <div>
            <header className="h-[15vh] bg-red-300 flex items-center justify-center rounded-b-2xl gap-10 p-10">
                <div>
                
                </div>
                <div>
                <Link href="/" className="text-white underline">Fazer login</Link>
                </div>
            </header>
            <div className="flex">
                <div className="border-2 border-green-600 bg-gray-400 rounded-2xl w-[20vw] h-[100vh]" >
                </div>
                <span className="inline-grid grid-cols-4 grid-rows-1 border-2 border-blue-600 w-[80vw] h[100vh] p-20 gap-4">
                    <div className="border-2 border-yellow-400 flex flex-col rounded-3xl" >
                        <div className="border-2 border-black w-[100%] h-[90%] flex flex-col rounded-2xl">

                            <div className="border-2 border-green-600">
                                IMAGEM
                            </div>

                        </div>
                        <div className="border-2 border-black w-[100%] h-[10%] flex items-center justify-center rounded-2xl ">
                            <button className="border-2 border-gray-500 rounded-md w-[60%] p-4"></button>
                        </div>
                    </div>                    
                </span>
            </div>       
        </div>
    );
}