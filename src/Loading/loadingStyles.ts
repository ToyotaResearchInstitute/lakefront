import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { LoadingProps } from './Loading';

const spinAnimation = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const StyledLoadingContainer = styled.div<LoadingProps>(
    ({ theme, animated, logo, spinDirection }) => ({
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        'svg': {
            ...(animated && { animation: `${spinAnimation} 2s linear infinite` }),
            ...(spinDirection === 'LEFT' && { animationDirection: 'reverse' }),
            marginLeft: 5,
            marginRight: 10,
            path: {
                ...(logo && { fill: theme?.colors?.$akoya })
            }
        },
        div: {
            color: theme?.colors?.$akoya,
            paddingTop: 8,
        }
    })
);
