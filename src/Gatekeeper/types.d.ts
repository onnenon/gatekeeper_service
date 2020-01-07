declare namespace Gatekeeper {
  enum BoardStatusEnum {
    OUT = 0,
    IN = 1,
    ERROR = 2,
    OFF = 3,
  }

  interface BoardUpdate {
    position: number;
    status: BoardStatusEnum;
  }

  interface BoardUpdateRequest {
    updates: BoardUpdate[];
  }

  interface GatekeeperService {
    updateBoard(data: BoardUpdateRequest): any;
  }
}
