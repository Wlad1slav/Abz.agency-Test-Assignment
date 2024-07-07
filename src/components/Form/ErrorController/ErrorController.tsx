import {ErrorControllerProps} from "@/types/props";
import './ErrorController.scss';
import Text from "@/components/General/Typography/Text/Text";

function ErrorController({children, error}: ErrorControllerProps) {
    return (
        <div className={error ? 'has-error' : 'no-error'}>
            {children}

            {/* If there is an error, it is displayed */}
            <Text className="error">{error}</Text>
        </div>
    );
}

export default ErrorController;