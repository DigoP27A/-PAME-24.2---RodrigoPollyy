interface props{
    label: string;
    placeHolder: string;
}

export default function FormInput({label, placeHolder}: props){
    return(
        <div className="flex flex-col gap-4">
            <label>{label}</label>
            <input className="bg-red-100 w-[100%] rounded-2xl p-4" placeholder={placeHolder}></input> 
        </div>
    );
}