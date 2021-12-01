
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import TabComponent, { TabProps } from 'src/Tabs';
import DocBlock from '.storybook/DocBlock';

export default {
    title: 'Lakefront/Tabs',
    component: TabComponent,
    parameters: {
        docs: {
            page: DocBlock
        }
    }
} as Meta;

const Template: Story<TabProps & ComponentPropsWithoutRef<'div'>> = (args) => {
    const [keyValue, setKeyValue] = useState('Key1');

    const handleChange = (value: string) => {
        setKeyValue(value);
    }
    return (

        <TabComponent
            options={args.options}
            value={keyValue}
            onChange={handleChange}>
        </TabComponent>
    );
};

export const Tabs = Template.bind({});
Tabs.args = {
    options: [{ key: 'Key1', caption: 'Caption1' }, { key: 'Key2', caption: 'Caption2' }]
};
