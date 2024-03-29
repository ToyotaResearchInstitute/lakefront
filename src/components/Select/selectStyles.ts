import styled from '@emotion/styled';
import { lightenDarkenColor } from 'src/styles/stylesUtil';
import { Theme } from '@emotion/react';
import { SelectOption } from 'src/types/global';
import { ReactComponent as baselineExpandSvg } from './baseline-expand_more-24px.svg';
import theme from 'src/styles/theme';
import { GetStyles, GroupBase } from 'react-select/dist/declarations/src/types';

export const SelectStyles = styled.div({
    select: {
        display: 'none'
    }
});

interface SelectState {
    isSelected: boolean;
    isFocused: boolean;
    selectProps: {
        isDisabled?: boolean;
    };
    theme: Theme;
}

export type SelectOverlayStyles = Partial<GetStyles<SelectOption<any>, true, GroupBase<SelectOption<any>>>>;

export const SELECT_OVERLAY_STYLES: SelectOverlayStyles = {
    control: (defaultStyles: SelectState, state: SelectState) => ({
        ...defaultStyles,
        flexWrap: undefined,
        display: 'flex',
        color: state.theme.colors.storm,
        backgroundColor: state.selectProps.isDisabled ?
            lightenDarkenColor(state.theme.colors.white, theme?.DARKEN_MOST) :
            state.theme.colors.white,
        cursor: state.selectProps.isDisabled ? 'not-allowed' : 'pointer',
        alignItems: 'center',
        minWidth: 160,
        height: 36,
        padding: '0px 6px',
        borderRadius: 4,
        border: `1px solid ${state.theme.colors.mercury}`,
        fontWeight: 400,
        justifyContent: 'space-between',
        boxShadow: 'inset 0 1px 2px 0 rgb(0 0 0 / 20%), inset 0 0 0 1px rgb(0 0 0 / 20%)',
        ...(state.isFocused && {
            border: `1px solid ${state.theme.colors.storm}`,
            outline: 0
        }),
        ':hover': {
            backgroundColor: lightenDarkenColor(state.theme?.colors?.white, theme?.DARKEN_LEAST),
            border: `1px solid ${state.theme.colors.storm}`,
            outline: 0
        }
    }),
    valueContainer: (defaultStyles: SelectState) => ({
        ...defaultStyles,
        padding: '2px 4px'
    }),
    menu: (defaultStyles: SelectState, state: SelectState) => ({
        ...defaultStyles,
        backgroundColor: state.theme.colors.white,
        border: `1px solid ${state.theme?.colors?.cinder}`,
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'column',
        marginTop: 8,
        zIndex: 9999
    }),
    menuList: (defaultStyles: SelectState) => ({
        ...defaultStyles,
        overflowY: 'auto',
        overflowX: 'hidden',
        maxHeight: undefined
    }),
    option: (defaultStyles: SelectState, state: SelectState) => ({
        ...defaultStyles,
        alignItems: 'center',
        color: state.selectProps.isDisabled ?
            lightenDarkenColor(state.theme?.colors?.white, theme?.DARKEN_MOST) :
            state.theme?.colors?.storm,
        cursor: 'pointer',
        display: 'flex',
        fontSize: 16,
        height: 40,
        minWidth: 160,
        padding: '0 12px',
        userSelect: 'none',
        ...(state.isSelected && {
            backgroundColor: state.theme?.colors?.white,
            ':hover': {
                backgroundColor: state.selectProps.isDisabled ?
                    state.theme?.colors?.white :
                    state.theme?.colors?.mercury,
                cursor: state.selectProps.isDisabled ? 'not-allowed' : undefined
            }
        }),
        ...(state.isFocused && {
            backgroundColor: state.theme?.colors?.mercury
        })
    })
};

export const SelectStyledComponent = styled.select({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    WebkitAppearance: 'none',
    borderRadius: '2px',
    boxShadow: 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.2)',
    border: 'solid 1px #9393a2',
    backgroundColor: theme?.colors?.white,
    color: '#000000',
    fontSize: '16px',
    minWidth: '200px',
    padding: '12px 32px 12px 12px',
    backgroundImage: `url(${baselineExpandSvg})`,
    backgroundPosition: '97% center',
    backgroundRepeat: 'no-repeat'
});
