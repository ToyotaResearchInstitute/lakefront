import { FC, FocusEventHandler, useMemo } from 'react';
import Select from 'react-select';
import { SELECT_OVERLAY_STYLES } from './selectStyles';
import theme from 'src/styles/theme';

/**
 * `SelectOption` is the structure of a selectable option.
 */
export interface SelectOption {
    value: string;
    label: string;
}

/**
 * Structure of the SelectOverlay onChange argument.
 */
export interface SelectOverlayChangeEvent {
    target: { value?: string };
    currentTarget: { value?: string };
}

/**
 * `SelectProps` are the props to be provided to the Select
 * component which consists of a (hidden) standard select
 * element and a react-select based SelectOverlay component.
 */
export interface SelectProps {
    options: SelectOption[];
    onChange(event: SelectOverlayChangeEvent): void;
    value: string | number;
    onBlur?: FocusEventHandler;
    autoFocus?: boolean;
    className?: string;
    id?: string;
    disabled?: boolean;
    isSearchable?: boolean;
}

const SelectOverlay: FC<SelectProps> = ({ isSearchable = false, disabled, id, options, onChange, value, ...rest }) => {
    const { currentValue, defaultValue, selectId } = useMemo(
        () => ({
            currentValue: options.find((option) => option.value === value),
            defaultValue: options[0],
            selectId: id ? `select-overlay-${id}` : undefined
        }),
        [options, value]
    );

    const handleChange = (option: SelectOption | null) => {
        const newValue = option?.value;
        onChange({
            target: { value: newValue },
            currentTarget: { value: newValue }
        });
    };

    return (
        <Select
            isDisabled={disabled}
            id={selectId}
            defaultValue={defaultValue}
            value={currentValue}
            options={options}
            onChange={handleChange}
            styles={SELECT_OVERLAY_STYLES}
            theme={(defaultTheme) => ({
                ...defaultTheme,
                colors: {
                    ...theme.colors,
                    primary: theme.colors.white,
                    primary25: disabled ? theme.colors.white : theme.colors.mercury
                }
            })}
            isSearchable={isSearchable}
            {...rest}
        />
    );
};

export default SelectOverlay;
