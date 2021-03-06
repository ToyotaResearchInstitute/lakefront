import { FC } from 'react';
import { HiddenSelectControl } from './selectStyles';
import SelectOverlay, { SelectOption, SelectProps } from './SelectOverlay';

const Select: FC<SelectProps> = ({ options, className, onChange, ...rest }) => {
    return (
        <div>
            <HiddenSelectControl {...rest}>
                {options.map((option: SelectOption) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </HiddenSelectControl>
            <SelectOverlay {...rest} onChange={onChange} options={options} />
        </div>
    );
};

export default Select;
