import { API } from "./API.model";
import { BuildNumberTimestampBundle } from "./BuildNumberTimestampBundle.model";
import { SyncStatusEnum } from './SyncStatusEnum.model';
export interface Suite {
    suiteName: string;
    lab: string;
    uniqueBuildKeys: BuildNumberTimestampBundle[],
    apis: API[],
    syncStatus: SyncStatusEnum
}