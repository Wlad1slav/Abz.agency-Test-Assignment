import {ButtonProps} from "@/types/props";
import './Button.scss';
import Link from "next/link";
import {UrlObject} from "url";

function Button({children, color="primary", disabled=false, onClick, type="button", href, ...props}: ButtonProps) {

    if (href) {
        // If a link was specified in the component, the Link component is used
        return (
            <Link className={`btn ${color}`} href={href as UrlObject}>
                {children}
            </Link>
        );
    } else {
        return (
            <button className={`btn ${color}`} type={type} disabled={disabled} onClick={onClick} {...props}>
                {children}
            </button>
        );
    }
}

export default Button;