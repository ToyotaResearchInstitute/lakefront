import {
    DoubleMultiSelectFilterOptions,
    DoubleMultiSelectFilterProps,
    DoubleMultiSelectValues,
    FilterModule
} from 'src/Filter/types';
import DoubleMultiSelect from './DoubleMultiSelect';
import { FilterSectionHeader } from 'src/Filter/components';
import FilterValueChips from 'src/Filter/components/FilterSectionHeader/FilterValueChips';
import { FilterBadge } from 'src/Filter/components/FilterSectionHeader/filterSectionHeaderStyles';
import styled from '@emotion/styled';

const FilterCount = styled.div(({ theme }) => ({
    alignItems: 'center',
    display: 'flex',
    span: {
        color: theme?.colors?.dolphin
    }
}));

const FilterSection = styled.div({
    margin: '16px 0'
});

export const getValuesFromKey = (key: string): DoubleMultiSelectValues | undefined => {
    const [first, second] = key.split('~');

    if (first || second) {
        return {
            firstSelect: first?.split(',').filter(s => s),
            secondSelect: second?.split(',').filter(s => s)
        };
    }

    return undefined;
};

const DoubleMultiSelectFilter = (
    { label, description, selectOptions }: DoubleMultiSelectFilterProps,
    doubleMultiSelectOptions: DoubleMultiSelectFilterOptions = {}
): FilterModule<DoubleMultiSelectValues> => ({
    getApiQueryUrl: (key, value) => {
        const { firstSelect, secondSelect } = selectOptions;
        let urlString = '';

        if (value?.firstSelect) {
            value.firstSelect.forEach((include) => {
                urlString += `&${firstSelect.apiField}=${include}`;
            });
        }
        if (value?.secondSelect) {
            value.secondSelect.forEach((exclude) => {
                urlString += `&${secondSelect.apiField}=${exclude}`;
            });
        }
        return urlString;
    },
    getApiPostBody: (key, value) => {
        if (value) {
            const { firstSelect, secondSelect } = selectOptions;
            const postBody: {[key: string]: string[]} = {
                [firstSelect.apiField]: [],
                [secondSelect.apiField]: []
            };

            if (value.firstSelect) {
                postBody[firstSelect.apiField] = value.firstSelect;
            }
            if (value.secondSelect) {
                postBody[secondSelect.apiField] = value.secondSelect;
            }

            return postBody;
        }

        return undefined;
    },
    getBrowserQueryUrlValue: value => {
        return value &&
        (value?.firstSelect?.length > 0 ||
            value?.secondSelect?.length > 0) ?
            `${value.firstSelect ?? ''}~${value.secondSelect ?? ''}` :
            '';
    },
    getDefaultFilterValue: () => null,
    isDefaultFilterValue: value => value === null,
    getFilterBarLabel: value => {
        if (value && (value?.firstSelect?.length > 0 || value?.secondSelect?.length > 0)) {
            const firstStr = value?.firstSelect ? `${value.firstSelect}` : '';
            const secondStr = value?.secondSelect ? `${value.secondSelect}` : '';
            return `${selectOptions.firstSelect.barLabel}: ${firstStr} ${selectOptions.secondSelect.barLabel}: ${secondStr}`;
        }
        return '';
    },
    getFilterSectionLabel: value => {
        if (value && (value?.firstSelect?.length > 0 || value?.secondSelect?.length > 0)) {
            const firstStr = value?.firstSelect ? `${value.firstSelect}` : '';
            const secondStr = value?.secondSelect ? `${value.secondSelect}` : '';
            const firstSelectStr = firstStr ? `${selectOptions.firstSelect.barLabel}: ${firstStr}` : '';
            const secondSelectStr = secondStr ? `${selectOptions.secondSelect.barLabel}: ${secondStr}` : '';

            return [firstSelectStr, secondSelectStr];
        }
        return '';
    },
    parseInitialFilterValue: (browserQueryUrlValue: string) => {
        return browserQueryUrlValue ? getValuesFromKey(browserQueryUrlValue) : null;
    },
    renderComponent: ({ value, update }) => (
        <DoubleMultiSelect
            value={value}
            onChange={update}
            options={selectOptions}
        />
    ),
    renderSectionHeader: (sectionHeaderParams) => {
        const { badgeThreshold, value } = sectionHeaderParams;
        const {
            firstSelect: { label: firstLabel },
            secondSelect: { label: secondLabel }
        } = selectOptions;

        const firstLength = value?.firstSelect?.length;
        const secondLength = value?.secondSelect?.length;
        const firstVisible = firstLength > 0;
        const secondVisible = secondLength > 0;
        const firstBadge = firstLength >= badgeThreshold && (
            <FilterBadge>
                <div>{firstLength}</div>
            </FilterBadge>
        );
        const secondBadge = secondLength >= badgeThreshold && (
            <FilterBadge>
                <div>{secondLength}</div>
            </FilterBadge>
        );

        return (
            <FilterSectionHeader {...sectionHeaderParams}>
                {
                    firstVisible && (
                        <FilterSection>
                            <FilterCount>
                                <span>{firstLabel}</span>&nbsp;
                                { firstBadge }
                            </FilterCount>
                            <FilterValueChips
                                visible={firstVisible && firstLength < badgeThreshold}
                                value={value?.firstSelect}
                            />
                        </FilterSection>
                    )
                }
                {
                    secondVisible && (
                        <FilterSection>
                            <FilterCount>
                                <span>{secondLabel}</span>&nbsp;
                                { secondBadge }
                            </FilterCount>
                            <FilterValueChips
                                visible={secondVisible && secondLength < badgeThreshold}
                                value={value?.secondSelect}
                            />
                        </FilterSection>
                    )
                }
            </FilterSectionHeader>
        );
    },
    ...doubleMultiSelectOptions,
    label,
    description
});

export default DoubleMultiSelectFilter;