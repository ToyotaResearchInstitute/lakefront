import { FC } from 'react';
import {
    DoubleMultiSelectFilterOptions,
    DoubleMultiSelectFilterProps
} from 'src/Filter/types';
import { createFilterSourceCode } from 'src/stories/Filter/filterStoriesUtil';

export interface DoubleMultiSelectFilterArgs {
    /**
     * The props required to be supplied as the first argument of
     * the MultiSelectFilter component.
     */
     doubleMultiSelectFilterProps: DoubleMultiSelectFilterProps;
    /**
     * Any valid `FilterModule` property (excluding description and label)
     * which will override default multi select filter behaviour.
     */
    doubleMultiSelectFilterOptions?: DoubleMultiSelectFilterOptions;
}

/**
 * Example of multi select filter source code.
 */
 export const MULTI_SELECT_FILTER_SOURCE_CODE = createFilterSourceCode(`{
    doubleMultiSelectFilter: DoubleMultiSelectFilterArgs(
        {
            label: 'Multi Select Filter',
            creatable: true,
            initialValue = ['colors'],
            options: [
                { label: 'Colors', value: 'colors' },
                ...additionalSelectOptions
            ],
            description: 'MultiSelectFilter is a select dropdown control meant to multi select a value.'
        },
        {
            getDefaultFilterValue: () => ['colors']
            ...additionalMultiSelectFilterOptions
        }
    )
}`);

/**
 * DoubleMultiSelectFilter Component
 *
 * The DoubleMultiSelectFilter component is a multi select dropdown filter. While the default
 * behaviour should suffice, any valid `FilterModule` property (excluding description and label) can
 * be supplied via the `multiSelectFilterOptions` parameter to change how the filter looks and acts.
 * DoubleMultiSelectFilter arguments include:
 *
 * `multiSelectFilterProps` - The props required to be supplied as the first argument of
 * the MultiSelectFilter component.
 *
 * `multiSelectFilterOptions` - Any valid `FilterModule` property (excluding description and label)
 * meant to override default text filter behaviour.
 */
const DoubleMultiSelectFilterDocs: FC<DoubleMultiSelectFilterArgs> = () => null;

export default DoubleMultiSelectFilterDocs;
