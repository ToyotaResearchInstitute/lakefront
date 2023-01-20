import { FC, useEffect, useState } from 'react';
import queryString from 'query-string';
import { ContextSwitchMenuValue, FilterComponentProps, FilterMode, UrlParameters } from './types';
import {
    FILTER_MODE_OPTIONS,
    getCurrentBrowserQueryParams,
    getDefaultJsonViewValue,
    getFilterAppliedCount
} from './util';
import { ThemeProvider } from '@emotion/react';
import {
    FilterContainer,
    FilterSectionBody,
    FilterSectionDescription,
    FilterHeader,
    FiltersSection,
    SidePanel
} from './filterStyles';
import { ReactComponent as FilterIcon } from './assets/filterIcon.svg';
import theme from 'src/styles/theme';
import { FilterSectionHeader } from './components';
import FilterBar from '../../stories/Filter/components/FilterBar';
import FilterValueChips from './components/FilterSectionHeader/FilterValueChips';


/**
 * Filter Component
 *
 * The Filter component can be used to display the effects
 * the `useFilter` hook (or other filter state manager) has on
 * a given page. Various components can be provided to increase/limit
 * what changes are displayed.
 */
export const Filter: FC<FilterComponentProps> = ({
    ContextSwitchMenu,
    FilterBar,
    FilterJSONConfirmationModal,
    FilterJSONInput,
    additionalQueryParams,
    children,
    filterHooks,
    hideFilterBar = true,
    initialActiveSection = '',
    isCollapsed: isCollapsedProp,
    isJSONInputAllowed = false,
    location,
    onToggleCollapsed,
    updateHistory,
    badgeThreshold = 4,
    className
}) => {
    const urlParams = queryString.parse(location.search) as UrlParameters;
    const [isCollapsedState, setIsCollapsedState] = useState(false);
    const [activeSection, setActiveSection] = useState(initialActiveSection);
    const [jsonQueryParams, setJsonQueryParams] = useState(        
        isJSONInputAllowed ? { jsonView: getDefaultJsonViewValue(urlParams) } : {}
    );
    const [isJSONInputModified, setIsJSONInputModified] = useState(false);
    const [isJSONModifiedModalShowing, setIsJSONModifiedModalShowing] = useState(false);

    // use isCollapsed prop if provided to track state externally, otherwise track state internally
    const isCollapsed = isCollapsedProp === undefined ? isCollapsedState : isCollapsedProp;

    const { filters, filterValues, updateFilter, clearFilter, clearAllFilters } = filterHooks;

    // save the additional query parameters in the browser url
    useEffect(() => {
        const excludeKeys = [
            ...Object.keys(additionalQueryParams || {}),
            ...(isJSONInputAllowed ? Object.keys(jsonQueryParams) : [])
        ];
        const existingQueryParams = getCurrentBrowserQueryParams(location, excludeKeys);

        const newQueryParams = {
            ...existingQueryParams,
            ...additionalQueryParams,
            ...(isJSONInputAllowed ? jsonQueryParams : {})
        };
        updateHistory({ search: queryString.stringify(newQueryParams), hash: location.hash });
    }, [additionalQueryParams, jsonQueryParams]);

    const toggleCollapsed = () => {
        const collapsedState = !isCollapsed;
        setIsCollapsedState(collapsedState);
        if (onToggleCollapsed) {
            onToggleCollapsed(collapsedState);
        }
    };
    const setJsonViewParam = (jsonView: boolean) => {
        setJsonQueryParams((params) => ({ ...params, jsonView }));
    };
    const toggleJsonView = (mode: ContextSwitchMenuValue) => {
        const jsonView = mode === FilterMode.JSON;

        // if switching back to the filter UI but there is unapplied JSON, show confirmation modal before proceeding
        if (!jsonView && isJSONInputModified) {
            setIsJSONModifiedModalShowing(true);
        } else {
            setJsonViewParam(jsonView);
        }
    };
    const confirmSwitchToFilterUI = () => {
        setJsonViewParam(false);
        setIsJSONInputModified(false);
    };
    const toggleSection = (section: string) => {
        const newSection = activeSection === section ? '' : section;
        setActiveSection(newSection);
    };


        return (
        <ThemeProvider theme={theme}>
            <FilterContainer
                showJSONInput={Boolean(isJSONInputAllowed && jsonQueryParams.jsonView)}
                isCollapsed={isCollapsed}
                hideFilterBar={hideFilterBar}
                className={className}
            >
                <SidePanel className="sidePanel">
                    <FilterHeader className="filterHeader">
                        {!isCollapsed &&
                            ((ContextSwitchMenu && isJSONInputAllowed) ? (
                                <ContextSwitchMenu
                                    options={FILTER_MODE_OPTIONS}
                                    value={jsonQueryParams.jsonView ? FilterMode.JSON : FilterMode.FilterUI}
                                    onChange={toggleJsonView}
                                    triggerClassName="filterContextTriggerContent"
                                />
                            ) : (
                                'Filter Results'
                            ))}
                        <FilterIcon className="filterMenuIcon" onClick={toggleCollapsed} />
                    </FilterHeader>

                    {(!isJSONInputAllowed || !jsonQueryParams.jsonView) && (
                        <FiltersSection className='filters'>
                            {Object.entries(filters)
                                .filter(([, f]) => !f.inputHidden)
                                .map(([key, filter]) => {
                                    const itemFilterLabelValues = filters[key].getFilterSectionLabel(filterValues[key]);

                                    return (
                                            filterValues[key] && (
                                                <FilterValueChips
                                                    item={filters[key]}
                                                    clearFilter={(name, clearPartial) => clearFilter(name, clearPartial)}
                                                    key={key}
                                                    notDefaultValues={filters[key] ? !filters[key].isDefaultFilterValue(filterValues[key]) : false}
                                                    value={itemFilterLabelValues}
                                                    visible={true} />
                                            )

                                    );
                                })}
                        </FiltersSection>
                    )}

                    {(!isJSONInputAllowed || !jsonQueryParams.jsonView) && (
                        <FiltersSection className='filters'>
                            {Object.entries(filters)
                                .filter(([, f]) => !f.inputHidden)
                                .map(([key, filter]) => (
                                    <section key={key}>
                                        {filter.renderSectionHeader ? (
                                            filter.renderSectionHeader({
                                                activeSection,
                                                filter,
                                                name: key,
                                                onClick: () => toggleSection(key),
                                                clearFilter,
                                                value: filterValues[key],
                                                badgeThreshold
                                            })
                                        ) : (
                                            <FilterSectionHeader
                                                activeSection={activeSection}
                                                filter={filter}
                                                name={key}
                                                onClick={() => toggleSection(key)}
                                                clearFilter={clearFilter}
                                                value={filterValues[key]}
                                                badgeThreshold={badgeThreshold} />
                                        )}
                                        {activeSection === key && (
                                            <>
                                                <FilterSectionDescription>
                                                    {filter.description}
                                                </FilterSectionDescription>
                                                <FilterSectionBody>
                                                    {filter.renderComponent({
                                                        name: key,
                                                        value: filterValues[key],
                                                        update: (value) => updateFilter(key, value)
                                                    })}
                                                </FilterSectionBody>
                                            </>
                                        )}
                                    </section>
                                ))}
                        </FiltersSection>
                    )}

                    {isJSONInputAllowed && jsonQueryParams.jsonView && FilterJSONInput && (
                        <div className="jsonInputSection">
                            <FilterJSONInput filterHooks={filterHooks} onInputModifiedChange={setIsJSONInputModified} />
                        </div>
                    )}

                    {isJSONInputAllowed && FilterJSONConfirmationModal && (
                        <FilterJSONConfirmationModal
                            modalVisible={isJSONModifiedModalShowing}
                            handleModalClose={() => setIsJSONModifiedModalShowing(false)}
                            onConfirm={confirmSwitchToFilterUI}
                        />
                    )}
                </SidePanel>

                {!hideFilterBar && FilterBar && (
                    <FilterBar
                        filters={filters}
                        filterValues={filterValues}
                        clearFilter={clearFilter}
                        clearAllFilter={clearAllFilters}
                    />
                )}

                {children}
            </FilterContainer>
        </ThemeProvider>
    );
};

export default Filter;
