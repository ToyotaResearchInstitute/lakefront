export interface StepFunction {
    StartAt: string;
    States: Record<string, State>;
}

interface BaseState {
    Type: string;
    Next: string;
    Catch: any[];
    Retry: any[];
    End: boolean;
}

interface TaskState extends BaseState {
    Type: 'Task';
    Resource: string;
}

interface FailState extends BaseState {
    Type: 'Fail';
    Cause?: string;
    Error?: string;
}

interface SucceedState extends BaseState {
    Type: 'Succeed';
}

interface MapState extends BaseState {
    Type: 'Map';
    Iterator: StepFunction;
}

interface ChoiceState extends BaseState {
    Type: 'Choice';
    Choices?: ChoiceOperator[];
    Default: string;
}

export interface Operator {
    Variable?: string;
    Next?: string;
    And?: Operator[];
    Or?: Operator[];
    Not?: Operator;
    BooleanEquals?: boolean;
    NumericEquals?: number;
    NumericGreaterThan?: number;
    NumericGreaterThanEquals?: number;
    NumericLessThan?: number;
    NumericLessThanEquals?: number;
    StringEquals?: string;
    StringGreaterThan?: string;
    StringGreaterThanEquals?: string;
    StringLessThan?: string;
    StringLessThanEquals?: string;
    TimestampEquals?: string;
    TimestampGreaterThan?: string;
    TimestampGreaterThanEquals?: string;
    TimestampLessThan?: string;
    TimestampLessThanEquals?: string;
}

export interface ChoiceOperator extends Operator {
    Next: string;
}

interface ParallelState extends BaseState {
    Type: 'Parallel';
    Branches: StepFunction[];
}

export type State = TaskState | FailState | SucceedState | MapState | ChoiceState | ParallelState;

export interface StepFunctionRendererProps {
    /**
     * Handle a right-click on any drawn node. This will send data stored with each node from the parsing step on click inside of any drawn node.
     * Use this to configure a context menu.
     */
    handleContextClickNode?(key: string, node: any, e: PointerEvent, graphContainer: SVGElement | null): void;
    /**
     * Action to run when a node context menu is closed.
     */
    handleCloseContextMenu?(): void;
    /**
     * Handle a left-click on any drawn node. This will send data stored with each node from the parsing step on click inside of any drawn node.
     */
    handleSelectedNode?(key: string, node: any | null): void;
    /**
     * Returns the graph object.
     */
    onGraphCreate?(graph: any, states: any): void;
    /**
     * This is AWS Step Function JSON contained in an object. See the Storybook Canvas for detailed examples of what
     * should be provided.
     */
    stepFunctionJSON: StepFunction;
    /**
     * The classes to pass to the step function renderer container.
     */
    className?: string;
}
