import styled from '@emotion/styled';
import { lightenDarkenColor } from 'src/styles/stylesUtil';

const DARKEN_MOST = -40;

export const StyledSelectPopoverWrapper = styled.div({
    display: 'inline',
    position: 'relative'
});

export const StyledSelectPopover = styled.div(({ theme }) => ({
    backgroundColor: theme?.colors?.white,
    border: `1px solid ${theme?.colors?.cinder}`,
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-55%)',
    zIndex: 2
}));

interface SelectPopoverItemProps {
    disabled?: boolean;
}

export const SelectPopoverItem = styled.div<SelectPopoverItemProps>(({ theme, disabled }) => ({
    alignItems: 'center',
    backgroundColor: theme?.colors?.white,
    color: disabled ? lightenDarkenColor(theme?.colors?.white, DARKEN_MOST): theme?.colors?.storm,
    cursor: 'pointer',
    display: 'flex',
    fontSize: 16,
    height: 40,
    minWidth: 160,
    padding: '0 12px',
    userSelect: 'none',
    zIndex: 2,
    ':hover': {
        backgroundColor: disabled ? theme?.colors?.white : theme?.colors?.mercury,
        cursor: disabled ? 'not-allowed' : undefined
    }
}));
