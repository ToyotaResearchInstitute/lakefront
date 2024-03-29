import styled from '@emotion/styled';

export const Wrapper = styled.div({
    display: 'flex',
    '& > div:first-of-type': {
        height: 700,
        width: '100%',
        maxWidth: 1000
    }
});

export const SpacedButtons = styled.div({
    'button:first-of-type': {
        marginRight: 8
    }
});

export const SubmitWrapper = styled(SpacedButtons)({
    display: 'flex',
    marginTop: 32
});

export const EditForm = styled.div(({ theme }) => ({
    backgroundColor: theme?.colors?.selago,
    borderLeft: theme?.borders?.primary,
    padding: 8
}));

export const TypeSpan = styled.span({
    display: 'block',
    marginBottom: 8
});

export const StyledTypeLabel = styled.label({
    label: {
        marginBottom: 8
    }
});

export const Menu = styled.ul(({ theme }) => ({
    backgroundColor: theme?.colors?.white,
    border: theme?.borders?.primary,
    padding: 0,
    position: 'absolute',
    transform: 'translateX(-30%)',
    li: {
        listStyle: 'none',
        padding: '4px 8px',
        ':hover': {
            backgroundColor: theme?.colors?.mercury,
            cursor: 'pointer'
        }
    }
}));

export const ActionWrapper = styled(SpacedButtons)({
    display: 'flex',
    marginTop: 32,
    justifyContent: 'flex-end'
});
