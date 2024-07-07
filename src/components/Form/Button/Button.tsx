import {ButtonProps} from "@/types/props";
import './Button.scss';

function Button({children, color="primary", disabled=false, onClick, type="button", ...props}: ButtonProps) {
    return (
        <button
            type={type}
            className={`btn ${color}`}
            disabled={disabled}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;