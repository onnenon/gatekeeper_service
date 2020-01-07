import { Observable } from 'rxjs';

export namespace Gatekeeper {
  enum StatusEnum {
    OUT = 0,
    IN = 1,
    ERROR = 2,
    OFF = 3,
  }

  interface BoardUpdate {
    position: number;
    status: StatusEnum;
  }

  interface BoardUpdateRequest {
    updates: BoardUpdate[];
  }

  interface GatekeeperService {
    updateBoard(data: BoardUpdateRequest): Observable<any>;
  }
}
