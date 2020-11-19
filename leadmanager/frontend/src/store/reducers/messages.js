import { CREATE_MESSAGE } from '../actions/types';

const initState = {};

export default function (state = initState, action) {
  const { payload, type } = action;
  switch (type) {
    case CREATE_MESSAGE:
      return (state = payload);
    default:
      return state;
  }
}
