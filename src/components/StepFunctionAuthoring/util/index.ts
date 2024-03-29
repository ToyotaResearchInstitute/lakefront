import { WorkFlowType } from 'src/components/StepFunctionGraph/StepFunctionUtil';
import { StepFunctionAuthoringFormState } from '../types';
import { StepFunctionJSON } from 'src/components/StepFunctionGraph/util/JSONBuilder.util';

export const TYPE_OPTIONS = [
    { label: WorkFlowType.TASK, value: WorkFlowType.TASK },
    { label: WorkFlowType.CHOICE, value: WorkFlowType.CHOICE },
    { label: WorkFlowType.SUCCEED, value: WorkFlowType.SUCCEED },
    { label: WorkFlowType.MAP, value: WorkFlowType.MAP },
    { label: WorkFlowType.PARALLEL, value: WorkFlowType.PARALLEL }
];

export const FORM_KEYS = {
    NAME: 'name',
    NEXT: 'next',
    NODE_TYPE: 'nodeType'
};

export const RESET_MODAL = {
    TITLE: 'Are you sure you want to reset the current Step Function Authoring state?',
    RESET: 'Reset',
    CANCEL: 'Cancel'
};

export const DEFAULT_FORM_STATE: StepFunctionAuthoringFormState = { name: '', next: '', nodeType: '' };

export const DEFAULT_GRAPH_STATE: StepFunctionJSON = { StartAt: '', States: {} };

/**
 * Generates a unique node name.
 */
export const generateNodeName = () => `node_${new Date().getTime().toString()}`;

const COMPLEX_NODES = [WorkFlowType.PARALLEL, WorkFlowType.MAP, WorkFlowType.CHOICE];

/**
 * Returns `true` if the type of the node is known to have unique
 * fields, generally requiring special handling.
 */
export const isComplexNode = (nodeType: WorkFlowType | '') => {
    if (!nodeType) {
        return false;
    }

    return COMPLEX_NODES.includes(nodeType);
};
