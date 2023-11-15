import styled from '@emotion/styled';
import colors from 'src/styles/lakefrontColors';
import Button from '../Button/Button';

export const Panel = styled.div({
    width: '100%',
    padding: '1rem',
    boxSizing: 'border-box',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'star',
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    overflowY: 'auto',
    height: 350,
    label: {
        marginBottom: '1rem'
    }
});

export const GridContainer = styled.div({
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
});

export const CheckBoxContainer = styled(Panel)({
    backgroundColor: colors.white,
    width: '100%'
});

export const ButtonColumnContainer = styled.div({
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    marginLeft: '1rem',
    marginRight: '1rem'
});

export const StyledButton = styled(Button)({
    marginBottom: 5
});

export const StyledH4 = styled.h4({
    marginLeft: 0,
    marginBottom: '1rem',
    fontFamily: '"Source Sans Pro", sans-serif'
});

export const PanelContainer = styled.div({
    display: 'flex',
    flexFlow: 'column',
    width: '30%',
    justifyContent: 'center'
});
