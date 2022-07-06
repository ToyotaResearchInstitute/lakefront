import { ChangeEvent, FC } from 'react';
import Select from 'src/Select/Select';
import { SelectOption } from 'src/types/global';
import { LegendRow, ModeSelectorContainer } from './modeSelectorStyles';
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';

interface LegendRow {
    label: string;
    color: string;
}

interface ModeSelectorProps {
    /**
     * The title of the mode selector.
     */
    title?: string;
    /**
     * The classes to pass to the mode selector.
     */
    className?: string;
    /**
     * The classes to pass to the select drop-down.
     */
    selectClassName?: string;
    /**
     * The list of modes to include in the drop-down.
     */
    modes: SelectOption<string>[];
    /**
     * The selected mode to display on the drop-down.
     */
    selectedMode: string;
    /**
     * The legend symbol colors and labels.
     */
    legend: LegendRow[];
    /**
     * The action to take on the selected mode value.
     */
    onModeSelect: (mode: string) => void;
}

/**
 *
 * ModeSelector Component
 *
 * The ModeSelector component is intended to be used as a quick mode/context selection
 * panel. The state is not managed inside this component (i.e. to be received by the parent).
 * For this reason, `selectedMode`, `modes`, `legend`, and `onModeSelect` must be provided.
 */
const ModeSelector: FC<ModeSelectorProps> = ({
                                                 title = '',
                                                 selectClassName,
                                                 modes,
                                                 selectedMode,
                                                 legend,
                                                 className,
                                                 onModeSelect
                                             }) => {
    const options = modes.map(({ label, value }) => ({ label, value }));

    const handleModeSelect = (event: ChangeEvent<HTMLInputElement>) => {
        onModeSelect(event.target.value);
    };

    return (
        <ThemeProvider theme={theme}>
            <ModeSelectorContainer className={className}>
                <h3>{title}</h3>

                <Select
                    data-testid='route-selector'
                    className={selectClassName}
                    options={options}
                    value={selectedMode}
                    onChange={handleModeSelect}
                />

                <div className='mode-selector-legend'>
                    {legend.map(({ label, color }, idx) => (
                        <LegendRow className={`legend-row-${idx}`} color={color} key={label}>
                            <div className='row-key' />
                            <div className='row-label'>{label}</div>
                        </LegendRow>
                    ))}
                </div>
            </ModeSelectorContainer>
        </ThemeProvider>
    );
};

export default ModeSelector;
