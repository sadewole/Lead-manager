import { GET_ERRORS } from '../actions/types';

const initState = {
  msg: {},
  status: null,
};

export default function (state = initState, action) {
  const { payload, type } = action;
  switch (type) {
    case GET_ERRORS:
      return {
        msg: payload.msg,
        status: payload.status,
      };
    default:
      return state;
  }
}
