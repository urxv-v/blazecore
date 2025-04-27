import { NewExperimentItem,ExperimentItem, TaskStatus } from "../interfaces/experiments";
import { postCall } from "./utils";
import { Url } from "./url";

export async function createExperimentItemCall(name: string) {
    const experimentItem: NewExperimentItem = {
        name: name,
        status: TaskStatus.PENDING
    };
    return postCall<NewExperimentItem, ExperimentItem>(
        new Url().create, experimentItem, 201
    );
}
