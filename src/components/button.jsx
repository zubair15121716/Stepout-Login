import "../index.css";



export const Button = ({variant ,children,type}) => {
    return(
        <button className={variant=== "outlined" ? "reg" : "log"} type={type}>{children}</button>
    );
}

