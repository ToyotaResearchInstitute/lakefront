import styled from '@emotion/styled';
import { lightenDarkenColor } from 'src/styles/stylesUtil';
import { ButtonComponentProps, ComponentStyles } from './buttonUtil';
import { css, Theme } from '@emotion/react';
import { getIconStyles } from './iconButtonVariants';

const DARKEN_MOST = -40;
const DARKEN = -25;
const DARKEN_LEAST = -10;

interface ButtonConfigProps {
    theme?: Theme;
    isIconOnly?: boolean;
}

type StyledButtonComponentProps = ButtonComponentProps & ButtonConfigProps;

export const getColor = (theme: Theme | undefined) => {
    return {
        primary: {
            alternate: theme?.colors?.storm,
            default: theme?.colors?.white,
            disabled: lightenDarkenColor(theme?.colors?.white, DARKEN_MOST),
            disabledAlternate: lightenDarkenColor(theme?.colors?.storm, DARKEN_MOST),
            icon: lightenDarkenColor(theme?.colors?.white, DARKEN_MOST)
        },
        secondary: {
            alternate: theme?.colors?.white,
            default: theme?.colors?.storm,
            disabled: lightenDarkenColor(theme?.colors?.storm, DARKEN),
            disabledAlternate: lightenDarkenColor(theme?.colors?.storm, DARKEN_MOST),
            disabledIcon: lightenDarkenColor(theme?.colors?.storm, DARKEN),
            disabledIconAlternate: lightenDarkenColor(theme?.colors?.white, DARKEN)
        },
        destructive: {
            alternate: theme?.colors?.white,
            default: theme?.colors?.saturatedRed,
            disabled: lightenDarkenColor(theme?.colors?.white, DARKEN_MOST),
            disabledAlternate: lightenDarkenColor(theme?.colors?.storm, DARKEN_MOST)
        }
    };
};

export const getBackgroundColor = (theme?: Theme) => {
    return {
        primary: {
            alternate: theme?.colors?.white,
            default: theme?.colors?.storm,
            disabled: theme?.colors?.storm,
            disabledAlternate: lightenDarkenColor(theme?.colors?.white, DARKEN_MOST)
        },
        secondary: {
            default: lightenDarkenColor(theme?.colors?.white, DARKEN_LEAST)
        },
        destructive: {
            alternate: theme?.colors?.saturatedRed,
            default: 'transparent',
            disabled: theme?.colors?.storm,
            disabledAlternate: theme?.colors?.saturatedRed
        }
    };
};

// Return an object that contains the CSS for each button's disabled styles
const getDisabledStyles = ({ alternate = false, isIconOnly, theme }: StyledButtonComponentProps): ComponentStyles => {
    const primaryBackground = alternate ?
        getBackgroundColor(theme).primary.disabledAlternate :
        getBackgroundColor(theme).primary.disabled;
    const secondaryIconColor = alternate ?
        getColor(theme).secondary.disabledIconAlternate :
        getColor(theme).secondary.disabledIcon;

    const destructiveColor = alternate ?
        getColor(theme).destructive.disabledAlternate :
        getColor(theme).destructive.disabled;

    return {
        primary: css({
            ':disabled': {
                backgroundColor: primaryBackground,
                color: alternate ? getColor(theme).primary.disabledAlternate : getColor(theme).primary.disabled,
                cursor: 'not-allowed',
                opacity: 0.4,
                span: {
                    color: alternate ? getColor(theme).primary.disabledAlternate : getColor(theme).primary.disabled
                },
                svg: {
                    fill: alternate ? getColor(theme).primary.disabledAlternate : getColor(theme).primary.disabled
                }
            }
        }),
        secondary: css({
            ':disabled': {
                backgroundColor: isIconOnly ? 'transparent' : getBackgroundColor(theme).secondary.default,
                color: getColor(theme).secondary.disabled,
                cursor: 'not-allowed',
                opacity: alternate ? 0.5 : 0.25,
                span: {
                    color: isIconOnly ? secondaryIconColor : getColor(theme).secondary.disabled
                },
                svg: {
                    fill: isIconOnly ? secondaryIconColor : getColor(theme).secondary.disabled
                }
            }
        }),
        destructive: css({
            ':disabled': {
                backgroundColor: alternate ?
                    getBackgroundColor(theme).destructive.disabledAlternate :
                    getBackgroundColor(theme).destructive.disabled,
                border: 'transparent',
                color: destructiveColor,
                cursor: 'not-allowed',
                opacity: 0.4,
                span: {
                    color: destructiveColor
                },
                svg: {
                    fill: destructiveColor
                }
            }
        })
    };
};

interface hoverProps {
    alternate?: boolean;
    theme: Theme | undefined;
}

// Return an object that contains the CSS for each button's hover styles
const getHoverStyles = ({ alternate = false, theme }: hoverProps): ComponentStyles => {
    const primaryBackground = lightenDarkenColor(alternate ? theme?.colors?.white : theme?.colors?.storm, DARKEN_LEAST);
    const secondaryBackground = lightenDarkenColor(theme?.colors?.white, DARKEN_LEAST);
    const destructiveBackground = alternate ?
        lightenDarkenColor(theme?.colors?.saturatedRed, DARKEN_LEAST) :
        theme?.colors?.saturatedRed;

    return {
        primary: css({
            ':hover': {
                backgroundColor: primaryBackground
            }
        }),
        secondary: css({
            ':hover': {
                backgroundColor: secondaryBackground,
                ...(alternate && { color: theme?.colors?.storm }),
                span: {
                    ...(alternate && { color: theme?.colors?.storm })
                },
                svg: {
                    ...(alternate && { fill: theme?.colors?.storm })
                }
            }
        }),
        destructive: css({
            ':hover': {
                backgroundColor: destructiveBackground,
                ...(!alternate && { color: theme?.colors?.white }),
                span: {
                    ...(!alternate && { color: theme?.colors?.white })
                },
                svg: {
                    ...(!alternate && { fill: theme?.colors?.white })
                }
            }
        })
    };
};

const MainButton = styled.button<StyledButtonComponentProps>(({ disabled, theme }) => ({
    alignItems: 'center',
    border: 'none',
    borderRadius: 4,
    boxSizing: 'border-box',
    color: theme?.colors?.white,
    cursor: 'pointer',
    display: 'inline-flex',
    fontSize: 16,
    fontWeight: 400,
    height: 40,
    justifyContent: 'center',
    outline: 'none',
    minWidth: 80,
    position: 'relative',
    overflow: 'hidden',
    textDecoration: 'none',
    userSelect: 'none',
    svg: {
        fill: theme?.colors?.white
    },
    ...(!disabled && {
        ':after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            pointerEvents: 'none',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50%',
            transform: 'scale(10, 10)',
            opacity: 0,
            transition: 'transform .5s, opacity 1s'
        },
        ':active:after': {
            transform: 'scale(0, 0)',
            opacity: 0.3,
            transition: '0s'
        }
    })
}));

// color='primary'
const PrimaryButton = styled(MainButton)<StyledButtonComponentProps>(({ alternate, theme }) => ({
    backgroundColor: alternate ? theme?.colors?.white : theme?.colors?.storm,
    ...(alternate && {
        color: theme?.colors?.storm,
        svg: {
            fill: theme?.colors?.storm
        }
    }),
    ':after': {
        backgroundImage: `radial-gradient(circle, ${alternate ? theme?.colors?.storm : theme?.colors?.white} 12%, transparent 14%)`
    }
}),
(props) => !props.disabled && getHoverStyles(props).primary,
(props) => getDisabledStyles(props).primary,
(props) => (props.isIconOnly && getIconStyles(props).primary));

// color='secondary'
const SecondaryButton = styled(MainButton)<StyledButtonComponentProps>(({ alternate, theme }) => ({
    backgroundColor: 'transparent',
    border: `1px solid ${alternate ? theme?.colors?.white : theme?.colors?.storm}`,
    color: alternate ? theme?.colors?.white : theme?.colors?.storm,
    ':after': {
        backgroundImage: `radial-gradient(circle, ${theme?.colors?.storm} 12%, transparent 14%)`
    },
    span: {
        color: alternate ? theme?.colors?.white : theme?.colors?.storm
    },
    svg: {
        fill: alternate ? theme?.colors?.white : theme?.colors?.storm
    }
}),
(props) => !props.disabled && getHoverStyles(props).secondary,
(props) => getDisabledStyles(props).secondary,
(props) => (props.isIconOnly && getIconStyles(props).secondary));

// color='destructive'
const DestructiveButton = styled(MainButton)<StyledButtonComponentProps>(({ alternate, theme }) => ({
    backgroundColor: alternate ? theme?.colors?.saturatedRed : 'transparent',
    border: alternate ? 'transparent' : `1px solid ${theme?.colors?.saturatedRed}`,
    color: alternate ? theme?.colors?.white : theme?.colors?.saturatedRed,
    ':after': {
        backgroundImage: `radial-gradient(circle, ${theme?.colors?.white} 12%, transparent 14%)`
    },
    span: {
        color: alternate ? theme?.colors?.white : theme?.colors?.saturatedRed
    },
    svg: {
        fill: alternate ? theme?.colors?.white : theme?.colors?.saturatedRed
    }
}),
(props) => !props.disabled && getHoverStyles(props).destructive,
(props) => getDisabledStyles(props).destructive,
(props) => (props.isIconOnly && getIconStyles(props).destructive));

export default {
    primary: PrimaryButton,
    secondary: SecondaryButton,
    destructive: DestructiveButton
};
