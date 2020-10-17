import { SyncStatusEnum } from './SyncStatusEnum.model';

export interface Sync {
  lab: string;
  lastSyncEnd: number;
  lastSyncStart: number;
  suiteName: string;
  syncing: boolean;
  status: SyncStatusEnum;
  url: string;
}
