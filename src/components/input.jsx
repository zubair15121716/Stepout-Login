import '../index.css';

export default function Input({type,placeholder,name}){
    return(
        <input
        className='input'
        name={name}
        type={type}
        placeholder={placeholder}
        >
        </input>
    );
}