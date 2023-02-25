export interface HomeViewModel{
    cep:string;
    setCep:React.Dispatch<React.SetStateAction<string>>;
    isLoading:boolean;
    onSubmit:()=>void;
    hasError:boolean;
    errorMessage:string;
    clearText:()=>void;
    noInternetMessage:string;
    hasInternet:boolean;
}