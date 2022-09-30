import styled from '@emotion/styled';
import Button from 'src/Button/Button';
import colors from 'src/styles/lakefrontColors';

export const CardContentContainer = styled.div(() => ({
    display: 'inline-grid',
    gridTemplateColumns: '1fr auto',
    gridTemplateRows: '55px auto auto',
    width: 250,
    height: 'auto',
    border: `1px solid ${colors.alto}`,
    borderRadius: 3,
    padding: 10
}));

export const StyledH1Title = styled.h1(() => ({
    fontSize: 18,
    height: 'min-content'
}));

export const StyledDescription = styled.p(() => ({
    gridArea: '2',
    marginTop: 'unset',
    fontSize: 14
}));

export const StyledContentContainer = styled.div(() => ({
    gridArea: '3/1'
}));

export const StyledMoreDetailsButton = styled(Button)(() => ({
    gridArea: '1/2'
}));
