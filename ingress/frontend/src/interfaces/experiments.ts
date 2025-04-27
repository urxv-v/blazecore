export enum TaskStatus {
    PENDING = 'PENDING',
    DONE = 'DONE'
}

export interface Experiment {
    name: string;
    status: TaskStatus;
}

export interface Experiments {
    pending: Experiment[];
    done: Experiment[];
}

export interface NewExperimentItem {
    name: string;
    status: TaskStatus;
}
export interface ExperimentItem {
    id: number;
    name: string;
    status: TaskStatus;
}
