import { Observable } from 'rxjs';

export enum BoardStatusEnum {
  OUT = 0,
  IN = 1,
  ERROR = 2,
  OFF = 3,
}

export interface BoardUpdate {
  position: number;
  status: BoardStatusEnum;
}

export interface BoardUpdateRequest {
  updates: BoardUpdate[];
}

export interface BoardUpdateResponse {
  requestStatus: boolean;
}

export interface WhiteboardService {
  updateBoard(data: BoardUpdateRequest): Observable<BoardUpdateResponse>;
}
