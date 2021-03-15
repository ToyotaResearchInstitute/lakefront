import { Meta, Story } from '@storybook/react/types-6-0';

import Button from 'src/Button/Button';
import { ButtonComponentProps, COLORS } from 'src/Button/buttonUtil';

export default {
    title: 'Lakefront/Button',
    component: Button,
    argTypes: {
        onClick: {
            action: 'clicked',
            table: {
                disable: true
            }
        },
        as: {
            control: {
                type: 'select',
                options: ['a', 'button', 'div', 'span']
            }
        },
        children: {
            name: 'text (children)',
            description: 'Usually text, but can accept other elements. If an icon is needed, use the icon prop.'
        },
        color: {
            control: {
                type: 'select',
                options: [COLORS.PRIMARY, COLORS.SECONDARY, COLORS.DESTRUCTIVE],
            },
        },
        disabled: {
            control: 'boolean',
            table: {
                defaultValue: { summary: false },
                type: { summary: 'boolean' }
            },
            description: 'HTML button element disabled prop.'
        }
    }
} as Meta;

const Template: Story<ButtonComponentProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Button',
    color: COLORS.PRIMARY
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Button',
    color: COLORS.SECONDARY
};

export const Destructive = Template.bind({});
Destructive.args = {
    children: 'Button',
    color: COLORS.DESTRUCTIVE
};
