import RadioGroup from '../../../RadioGroup/RadioGroup';
import { FilterModule, RadioFilterProps, RadioFilterOptions } from 'src/Filter/types';

/**
 * RadioFilter Component
 *
 * The RadioFilter component is a filter by use of radio group. While the default
 * behaviour should suffice, any valid `FilterModule` property (excluding label) can
 * be supplied via the `radioFilterOptions` parameter to change how the filter looks and acts. RadioFilter
 * arguments include:
 *
 * `radioFilterProps` - The props required to be supplied as the first argument of
 * the RadioFilter component.
 * 
 * `radioFilterOptions` - Any valid `FilterModule` property (excluding description and label)
 * meant to override default text filter behaviour.
 */
const RadioFilter = (
    { initialValue, defaultValue, options, label, description }: RadioFilterProps,
    radioFilterOptions: RadioFilterOptions = {}
): FilterModule<string> => ({
    getApiQueryUrl: (key, value) => {
        return value !== defaultValue ? `&${key}=${value}` : '';
    },
    getApiPostBody: (key, value) => (value ? { [key]: value } : undefined),
    getBrowserQueryUrlValue: (value) => value,
    getDefaultFilterValue: () => defaultValue,
    isDefaultFilterValue: (value) => value === defaultValue,
    getFilterBarLabel: (value) => {
        const itemLabel = options.find((i) => i.value === value);
        return itemLabel ? itemLabel.label : '';
    },
    parseInitialFilterValue: (browserQueryUrlValue: string) => browserQueryUrlValue || initialValue,
    renderComponent: ({ name, value, update }) => (
        <RadioGroup
            key={name}
            name={name}
            value={value}
            onChange={(event) => update(event.target.value)}
            options={options}
        />
    ),
    ...radioFilterOptions,
    description,
    label,
});

export default RadioFilter;
