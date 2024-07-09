import { FieldProps } from "@/types/props";
import './Field.scss';
import Text from "@/components/General/Typography/Text/Text";

function Field({ children, error, helperText }: FieldProps) {
    // Checking for an error in the field
    const hasError = error ? error?.replace(/\s+/g, '')?.length > 0 : false;

    return (
        <div className={hasError ? 'has-error' : 'no-error'}>
            {children}
            {
                hasError ? <Text className="error">{error}</Text>
                    : <Text className="helper-text">{helperText}</Text>
            }
        </div>
    );
}

export default Field;
