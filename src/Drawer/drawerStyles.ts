import styled from '@emotion/styled';

interface DrawerContainerProps {
    width: string | number;
    open: boolean;
}

export const DrawerContainer = styled.div<DrawerContainerProps>(({ theme, width, open }) => ({
    backgroundColor: theme?.colors?.storm,
    height: 'auto',
    transition: 'all .3s ease-in-out',
    overflow: 'auto',
    width,
    marginRight: open ? 0 : `-${width}`,
    'div.innerDrawerContainer': {
        padding: '20px 18px 0 16px',
        position: 'relative',
        height: 'calc(100% - 32px)'
    }
}));
