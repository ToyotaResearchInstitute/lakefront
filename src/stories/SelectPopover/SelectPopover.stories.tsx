import { Meta, Story } from '@storybook/react/types-6-0';

import SelectPopover, { SelectPopoverProps } from 'src/SelectPopover/SelectPopover';
import DocBlock from '.storybook/DocBlock';
import { Button } from "../../index";
import { blue } from 'src/styles/cloudColors';

export default {
    title: 'Lakefront/SelectPopover',
    component: SelectPopover,
    argTypes: {
        handleClick: {
            action: 'clicked'
        },
        children: {
            table: {
                disable: true
            }
        }
    },
    parameters: {
        docs: {
            page: DocBlock
        }
    }
} as Meta;

const Template: Story<SelectPopoverProps> = (args) => (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 200 }}>
        <SelectPopover {...args}>
            <Button icon={true} />
        </SelectPopover>
    </div>
);

export const Popover = Template.bind({});
const options = [
    { name: 'Test 1', value: '1' },
    { name: 'Test 2', value: 2 },
    { name: 'Test 3', value: { value: 3 }},
    { name: 'Test 4 (Disabled)', value: 4, disabled: true },
    { name: <div style={{ backgroundColor: blue, padding: 5 }}>React Element</div>, value: 5 },
];

Popover.args = {
    options,
    visible: true
};

export const PopoverPortal = Template.bind({});

PopoverPortal.args = {
    options,
    visible: true,
    renderInPortal: true
};
