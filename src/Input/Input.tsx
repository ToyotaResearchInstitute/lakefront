import React, { ComponentPropsWithoutRef, FC } from 'react';
import { StyledInput, StyledLabel } from './inputStyles';

export interface InputProps {
    /**
     * This shows a label above the input when provided.
     */
    label?: string;
    /**
     * If not empty, the input component will be displayed in an error state with the provided error message.
     */
    error?: string;

}

/**
 * Input Component
 *
 * The Input component takes in native input props as well as its own InputProps. The state is not managed
 * in this component and should be handled in the consuming app.
 *
 */
const Input: FC<InputProps & ComponentPropsWithoutRef<'input'>> = ({ label, error = '', ...props }) => {
    return (
        <>
        {
                <StyledLabel error={error}>
                    {label && <span>{label}</span>}
                    <StyledInput error={error} {...props} />
                    <span>{error}</span>
                </StyledLabel>
        }
        </>
    );
};

export default Input;
