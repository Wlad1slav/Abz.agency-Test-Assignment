import { FieldProps } from "@/types/props";
import './Field.scss';
import Text from "@/components/General/Typography/Text/Text";

function Field({ children, error, helperText }: FieldProps) {
    // Checking for an error in the field
    const hasError = error ? error?.replace(/\s+/g, '')?.length > 0 : false;

    return (
        <div className={`field ${hasError ? 'has-error' : 'no-error'}`}>
            {children}
            <div className="additional-text">
                {
                    hasError ? <Text className="error" type="ellipsis">{error}</Text>
                        : <Text className="helper-text">{helperText}</Text>
                }
            </div>
        </div>
    );
}

export default Field;
