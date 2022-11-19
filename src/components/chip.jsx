import "../index.css";

export const Chip = ({name,label,id,value,outline}) => {
    return(
        <>
            <div className={"chip"} >
                <input type="checkbox"  value={value} name={name} id={id}></input>
                <label htmlFor={id}>{label}</label>
            </div>
        </>
    );
}