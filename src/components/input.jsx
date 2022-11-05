import '../index.css';

export default function Input({type,placeholder,name,id}){
    return(
        <input
        className='input'
        name={name}
        type={type}
        placeholder={placeholder}
        id={id}
        >
        </input>
    );
}