import styled from '@emotion/styled';
import { getSeverityColor } from './stackBannerUtil';

export const StackBannerListDiv = styled.div({
  'div.stackBannerRow': {
    marginBottom: 10,
  },
});

interface StackBannerRowDiv {
  severity?: string;
}

export const StackBannerRowDiv = styled.div<StackBannerRowDiv>(
  ({ theme, severity }) => {

    return {
      display: 'flex',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'flex-start',
      fontSize: 16,
      color: theme?.colors?.storm,
      backgroundColor: getSeverityColor(severity, theme),
      border:
        severity === 'normal' ? `2px solid ${theme?.colors?.green}` : undefined,
      svg: {
        color: theme?.colors?.storm,
        margin: '0 10px 0 5px',
      },
    };
  }
);
