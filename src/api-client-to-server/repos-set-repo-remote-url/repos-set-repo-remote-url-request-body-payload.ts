import * as api from '../../_index';

export interface ReposSetRepoRemoteUrlRequestBodyPayload {
  project_id: string;
  repo_id: string;
  remote_url: string;
  server_ts: number;
}
