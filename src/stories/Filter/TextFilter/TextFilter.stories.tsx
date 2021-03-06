import { Meta, Story } from '@storybook/react/types-6-0';

import FilterPage from '../components/FilterPage';
import TextFilterDocs, { TextFilterArgs, TEXT_FILTER_SOURCE_CODE } from './TextFilterDocs';
import DocBlock from '.storybook/DocBlock';
import { TextFilter as TextFilterFunction } from 'src/Filter/modules';

export default {
    title: 'Lakefront/Filter/TextFilter',
    component: TextFilterDocs,
    argTypes: {
        label: {
            control: 'text',
            description: 'The label to display for the text filter component.'
        },
        description: {
            control: 'text',
            description: 'The description/help text to display above the text filter component.'
        },
        textFilterOptions: {
            control: false,
            description: 'Any valid `FilterModule` property (excluding description and label) which will override default text filter behaviour.'
        }
    },
    parameters: {
        docs: {
            page: DocBlock,
            source: {
                code: TEXT_FILTER_SOURCE_CODE
            }
        }
    }
} as Meta;

// Text Filter
const TextFilterTemplate: Story = (args: TextFilterArgs) => {
    const pageFilters = {
        textFilter: TextFilterFunction(args.label, args.description, {})
    };

    return <FilterPage pageFilters={pageFilters} />;
};

export const TextFilter = TextFilterTemplate.bind({});

TextFilter.args = {
    label: 'Text Filter',
    description: 'TextFilter is a text input control meant to be used as a keyword(s) search.'
};
