import {BackgroundProps} from "@/types/props";
import './Background.scss';

function Background({children, color, ...props}: BackgroundProps) {
    return <div {...props} className={`bg ${color}`}>{children}</div>
}

export default Background;