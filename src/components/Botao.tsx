interface props{
    titulo: string;
    cor: string
}
export default function Botao({titulo, cor}: props){
    return(
        <button className={`border-2 border-red-700 p-4 w[80%] bg-red rounded-2xl text-white ${cor}`}>{titulo}</button>
    );
}