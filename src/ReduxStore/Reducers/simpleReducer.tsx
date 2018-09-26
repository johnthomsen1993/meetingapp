import { MeetingActions } from '../Actions/simpleAction';
import * as constants from '../Constants/constants';
import { IMetingStoreState } from '../types/meeting';

export function reducer(state: IMetingStoreState, action: MeetingActions): IMetingStoreState {
  switch (action.type) {
    case constants.CHANGE_TOPIC:
      return { ...state, topic: state.topic};
    case constants.CHANGE_DATE:
      return { ...state, date: state.date};
  }
  return state;
}