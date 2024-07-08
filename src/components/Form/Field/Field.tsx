import {FieldProps} from "@/types/props";
import './Field.scss';
import Text from "@/components/General/Typography/Text/Text";

function Field({children, error, helperText}: FieldProps) {
    return (
        <div className={error ? 'has-error' : 'no-error'}>
            {children}

            {
                error ? <Text className="error">{error}</Text>
                    : <Text className="helper-text">{helperText}</Text>
            }
        </div>
    );
}

export default Field;