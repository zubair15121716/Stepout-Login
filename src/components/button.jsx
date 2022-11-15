import "../index.css";



export const Button = ({variant ,children}) => {
    return(
        <button className={variant=== "outlined" ? "reg" : "log"}>{children}</button>
    );
}

