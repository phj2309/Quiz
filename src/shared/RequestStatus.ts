enum RequestStatus {
  READY = 'READY',
  IN_PROGRESS = 'IN_PROGRESS',
  FAIL = 'FAIL',
  SUCCESS = 'SUCCESS',
  NODATA = 'NODATA',
}

export const defaultState = {
  response: {
    output: 999,
    result: 'init',
  },
  status: RequestStatus.READY,
};

export default RequestStatus;
