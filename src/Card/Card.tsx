import { FC, ReactNode } from 'react';
import { ThemeProvider } from '@emotion/react';
import theme from 'src/styles/theme';
import { CardContentContainer, StyledContentContainer, StyledDescription, StyledH1Title, StyledMoreDetailsButton } from './CardStyles';
import { ReactComponent as MoreDetails } from './assets/moreDetails.svg';

export interface CardProps {
    /**
    * This will set the cards h1 heading.
    */
    title: string;
    /**
    * This is the callback that is fired when the top-right arrow button is clicked.
    */
    onClick?: () => void;
    /**
    * Description of the card's intent.
    */
    description: string;
    /**
    * This takes in any ReactNode to be displayed in the main content area of the card.
    */
    content?: ReactNode;
    /**
    * If the button should or shouldn't be disabled.
    */
    disabled?: boolean;
    /**
    * This is to set the class of the Card component.
    */
    className?: string;
    /**
    * This takes in any ReactNode to be displayed in the top right content area of the card.
    */
    topRightComponent?: ReactNode;
}

/**
 *  The Card Component is used to render a single Card, or a collection of Cards.
 */
const Card: FC<CardProps> = ({ title, onClick, description, className, children, content = children, topRightComponent, disabled }) => {

    return (
        <ThemeProvider theme={theme}>
            <CardContentContainer className={className}>
                <StyledH1Title>{title}</StyledH1Title>
                <StyledDescription>{description}</StyledDescription>
                <StyledContentContainer>
                    {content || children}
                </StyledContentContainer>
                {topRightComponent ? topRightComponent : <StyledMoreDetailsButton
                    disabled={disabled}
                    onClick={
                        disabled
                            ? undefined
                            : onClick
                    }
                    type='button'
                    icon={<MoreDetails />}
                />
                }

            </CardContentContainer>
        </ThemeProvider>
    );
};

export default Card;
