import * as api from '../../_index';

export interface ProjectsSetProjectWeekStartRequestBodyPayload {
  project_id: string;
  week_start: api.ProjectWeekStartEnum;
  server_ts: number;
}
