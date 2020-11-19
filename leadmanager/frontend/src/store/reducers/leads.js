import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from '../actions/types';

const initState = {
  leads: [],
};

export default function (state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_LEADS:
      return {
        ...state,
        leads: payload,
      };
    case ADD_LEAD:
      return {
        ...state,
        leads: [...state.leads, payload],
      };
    case DELETE_LEAD:
      return {
        ...state,
        leads: state.leads.filter((lead) => lead.id !== payload),
      };
    default:
      return state;
  }
}
