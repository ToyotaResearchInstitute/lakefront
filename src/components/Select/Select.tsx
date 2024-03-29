import { FC } from 'react';
import { SelectStyles, SelectStyledComponent } from './selectStyles';
import SelectOverlay from './SelectOverlay';
import { GetStyles, GroupBase } from 'react-select/dist/declarations/src/types';

export interface SelectOption {
    value: string | number | undefined;
    label: string;
}

export interface SelectProps {
    /**
     * This is to set the options of the dropdown.
     */
    options: SelectOption[];
    /**
     * This is called when an dropdown change event.
     */
    onChange(event: any): void;
    /**
     * This is called on dropdown blur event.
     */
    onBlur?(event: any): void;
    /**
     * This is to set the autofocus of the dropdown.
     */
    autoFocus?: boolean;
    /**
     * This is to set the dropdown class.
     */
    className?: string;
    /**
     * This is to set the id of the dropdown.
     */
    id?: string;
    /**
     * This is to enable/disable the dropdown by default.
     */
    disabled?: boolean;
    /**
     * This is to set the searchable property of the dropdown.
     * If set to true, the user can type the value to search from the available options.
     */
    isSearchable?: boolean;
    /**
     * This is to specify if multiple options can be selected.
     */
    isMulti?: boolean;
    /**
     * This is to leave the select menu open upon selection.
     */
    closeMenuOnSelect?: boolean;
    /**
     * This is to overwrite defaulted styles
     */
    styles?: Partial<GetStyles<SelectOption, true, GroupBase<SelectOption>>>;
    /**
     * This is the default text before an option is selected.
     */
    placeholder?: string;
    value: any[] | string | number;
}


/**
 *  The select component is used to render a dropdown with options. The user can set a selected option by default.
 *  The isSearchable property allows user to find the value from the options available.
 */
const Select: FC<SelectProps> = ({ options, className, isMulti, ...rest }) => {


    return (
        <SelectStyles>
            <SelectStyledComponent className={className} multiple={isMulti} {...rest}>
                {options.map((option) => (
                    <option key={`${option.label}${option.value ?? ''}`} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </SelectStyledComponent>
            <SelectOverlay {...rest} options={options} isMulti={isMulti}/>
        </SelectStyles>
    );
};

export default Select;
