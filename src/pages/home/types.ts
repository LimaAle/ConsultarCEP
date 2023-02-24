export interface HomeViewModel{
    cep:string;
    setCep:React.Dispatch<React.SetStateAction<string>>;
    isLoading:boolean;
    onSubmit:()=>void;
}