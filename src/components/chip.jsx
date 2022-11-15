import "../index.css";

export const Chip = ({name,label,id,value}) => {
    return(
        <div className="chip">
            <input type="checkbox" value={value} name={name} id={id}></input>
            <label htmlFor={id}>{label}</label>
        </div>
    );
}