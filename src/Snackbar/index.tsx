import { ThemeProvider } from '@emotion/react';
import { FC, ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import theme from 'src/styles/theme';
import { generateAnchorOrigin, MESSAGE_TYPES, SnackbarCloseReason, SnackbarOrigin } from './Snackbar.util';
import SnackbarContent from './SnackbarContent';
import { SnackbarWrapper, TRANSITION_CLOSE_TIME } from './snackbarStyles';

export interface SnackbarProps {
    /**
     * The action to display. It renders after the message, at the end of the snackbar.
     */
    action?: ReactNode | ReactNode[];
    /**
     * The anchor of the `Snackbar`.
     */
    anchorOrigin?: SnackbarOrigin;
    /**
     * The number of milliseconds to wait before automatically calling the
     * `onClose` function. `onClose` should then set the state of the `open`
     * prop to hide the Snackbar. This behavior is disabled by default with
     * the `null` value. If left undefined will auto hide after 4000ms.
     */
    autoHideDuration?: number | null;
    /**
     * The message to display.
     */
    message?: string;
    /**
     * Callback fired when the component requests to be closed.
     * Typically `onClose` is used to set state in the parent component,
     * which is used to control the `Snackbar` `open` prop.
     * The `reason` parameter can optionally be used to control the response to `onClose`,
     * for example ignoring `clickaway`.
     *
     * @param {string} reason Can be: `"timeout"` (`autoHideDuration` expired), `"clickaway"`.
     */
    onClose?: (reason: SnackbarCloseReason) => void;
    /**
     * If `true`, `Snackbar` is open.
     */
    open?: boolean;
    /**
     * Message types used to determine icon color and icon to render.
     */
    type: MESSAGE_TYPES;
    /**
     * When true, the component will mount a div to the body and render the popover through it.
     * This is useful when the popover would be inside a scrollable container or one with "overflow: hidden"
     * so it doesn't get cut off. Uses IntersectionObserver and needs a polyfill if IE compatibility is needed.
     */
    renderInPortal?: boolean;
}

 const Snackbar: FC<SnackbarProps> = ({
        anchorOrigin = { vertical: 'bottom', horizontal: 'left' },
        open,
        autoHideDuration,
        onClose,
        action,
        message,
        type,
        renderInPortal = false
    }) => {
 
        const snackbarContentRef = useRef<HTMLDivElement | null>(null);
        const toggleSnackbarOpen = (callback?: () => void) => {
            if (snackbarContentRef.current) {
                const isOpen = snackbarContentRef.current.classList.contains('snackbarOpen');
                const newClass = !isOpen ? 'snackbarOpen' : 'snackbarClosed';

                if (newClass === 'snackbarOpen') {
                    snackbarContentRef.current.classList.remove('snackbarClosed');
                }

                if (newClass === 'snackbarClosed') {
                    snackbarContentRef.current.classList.remove('snackbarOpen');
                }
    
                snackbarContentRef.current.className = `${snackbarContentRef.current.className} ${newClass}`;
                if (callback) {
                    setTimeout(() => {
                        callback();
                    }, TRANSITION_CLOSE_TIME);
                }
            }
        };

        useEffect(() => {
            toggleSnackbarOpen();
            let hideDuration = autoHideDuration;
            // allow user to disable autoHideDuration
            if (hideDuration === null) {
               return;
            }
            // allow user to default autoHideDuration to 4000ms
            if (hideDuration === undefined) {
                hideDuration = 4000;
            }
            const timer = setTimeout(() => {
                toggleSnackbarOpen(() => {
                    if (onClose) {
                    onClose('timeout');
                    }
                });
               
            }, hideDuration);
            return () => {
                clearTimeout(timer);
            };
        }, [open, autoHideDuration]);


        const [portal, setPortal] = useState<HTMLElement | null>(null);
        const [snackbarWrapperElement, setSnackbarWrapperElement] = useState<HTMLElement | null>(null);
        const [update, setUpdate] = useState<number>(0);

        useEffect(() => {
            const bodyElementHTMLCollection = document.getElementsByTagName('body');
            const bodyElement = bodyElementHTMLCollection.length > 0 ? bodyElementHTMLCollection.item(0) : null;
            let observer: IntersectionObserver;
            let portalElement: HTMLElement;
    
                if (renderInPortal && bodyElement) {
                portalElement = document.createElement('div');

                if (!portal) {
                    bodyElement.appendChild(portalElement);
                }
    
                if (!portal && snackbarWrapperElement) {
                    observer = new IntersectionObserver(
                        () => {
                            setUpdate(new Date().getTime());
                        }
                    );
                    observer.observe(snackbarWrapperElement);
                    setPortal(portalElement);
                }
            }
    
            return () => {
                if (snackbarWrapperElement && observer) {
                    observer.unobserve(snackbarWrapperElement);
                }
    
                if (portalElement && bodyElement && bodyElement.contains(portalElement)) {
                    bodyElement.removeChild(portalElement);
                }
            };
        }, [snackbarWrapperElement, renderInPortal]);

        useEffect(() => {
            if (snackbarWrapperElement && portal) {
                generateAnchorOrigin(anchorOrigin, portal);
                portal.className = snackbarWrapperElement.className;

                portal.style.display = 'flex';
                portal.style.width = '100%';
                portal.style.height = 'fit-content';
                portal.style.zIndex = `${theme.zIndex?.modal}`;
                portal.style.position = 'fixed';
            }
        }, [update]);

   

        const popoverNodeMounted = (node: HTMLDivElement) => {
            setSnackbarWrapperElement(node);
        };

        const popover = useMemo(
            () => {
                return (
                    <>
                        {open && (
                            <div className='content-snackbar-wrapper'>
                                <SnackbarContent
                                id='snackbar-content'
                                ref={snackbarContentRef}
                                action={action}
                                message={message}
                                type={type}
                                />
                            </div>
                        )}
                    </>
                );
            },
            [open]
        );


    return (
        <ThemeProvider theme={theme}>
            <SnackbarWrapper className='snackbarWrapper' ref={popoverNodeMounted}>
                 {   portal ? (
                        createPortal(popover, portal)
                    ) : (
                        popover
                    )}
            </SnackbarWrapper>
        </ThemeProvider>
    );
};

export default Snackbar;
