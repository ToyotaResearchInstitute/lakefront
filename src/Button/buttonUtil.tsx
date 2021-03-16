import React, { ComponentPropsWithoutRef, ElementType, ReactElement } from 'react';
import { SerializedStyles } from '@emotion/react';
import { ReactComponent as Add } from './assets/add.svg';
import { ReactComponent as Delete } from './assets/delete.svg';

export interface ComponentStyles {
    [key: string]: SerializedStyles
}

export const COLORS = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    DESTRUCTIVE: 'destructive'
};

export const ICON_BUTTON_COLOR: { [key: string]: 'secondary' | 'destructive' } = {
    primary: 'secondary',
    secondary: 'secondary',
    destructive: 'destructive'
};

export const ICON_SVGS = {
    primary: <Add />,
    secondary: <Add />,
    destructive: <Delete />
};

export class InvalidButtonColorError extends Error {
    color: string | undefined;

    constructor(color: string | undefined) {
        super(`Invalid color '${color}' was provided. Valid colors are: ${Object.values(COLORS).join(', ')}.`);
    }
}

export interface ButtonProps {
    /**
     * Determines the style of the button: primary, secondary, or destructive.
     */
    color?: 'primary' | 'secondary' | 'destructive';
    /**
     * Provides an alternate color theme for use on darker backgrounds.
     */
    alternate?: boolean;
    /**
     * An emotion prop that allow for changing the type of element. It can be a simple string
     * with an HTML element such as "a", or even a complex component such as a react router Link.
     */
    as?: ElementType | keyof JSX.IntrinsicElements;
}

export type Icon = ReactElement<SVGElement> | boolean | string | undefined;

export interface IconComponentProps {
    /**
     * When strictly true, the default icon for a color type will be inserted at the iconPosition prop's location.
     * Primary and Secondary colors have a plus/add icon, and destructive has a garbage can/delete icon.
     * When a svg, the svg will used as the icon.
     * (Future) When a string, an icon lookup/conversion will be attempted.
     */
    icon?: Icon;
    /**
     * When icon is defined, the position can be specified via the iconPosition prop.
     */
    iconPosition?: 'left' | 'right';
}

export type ButtonComponentProps = ButtonProps & IconComponentProps & ComponentPropsWithoutRef<'button'>;

export const shouldUseMappedIcon = (icon: Icon): boolean => {
    return icon === true;
};
