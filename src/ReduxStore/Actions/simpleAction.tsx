import * as constants from '../Constants/constants'
import { Meeting } from '../../Models/meeting';
import auth0Client from '../../auth0/auth';
import axios from "axios";


export interface ChangeMeetingDate {
    type: constants.CHANGE_DATE;
    date:Date
}

export interface ListMeetings{
    type: constants.LIST_MEETINGS;
    meetings:Meeting[]
}

export interface CreateNewMeeting {
    type: constants.CREATE_NEW_MEETING;
    meeting:Meeting
}

export type MeetingActions = ChangeMeetingDate | CreateNewMeeting | ListMeetings;

export function changeMeetingDate(inputEvent:React.FormEvent<HTMLInputElement>): ChangeMeetingDate {
    return {
        type: constants.CHANGE_DATE,
        date:new Date(inputEvent.currentTarget.value)
    }
}

export function CreateNewMeeting(inputMeeting:Meeting): CreateNewMeeting {
    axios.post("http://localhost:53775/api/meeting", inputMeeting, {
        headers: { Authorization: `Bearer ${auth0Client.getAccessToken()}` }
      });
    return {type: constants.CREATE_NEW_MEETING,meeting:inputMeeting}
}

export function ListMeetings(inputMeetings:Meeting[]): ListMeetings {
      axios
      .get<Meeting[]>("http://localhost:53775/api/meeting", {
        headers: { Authorization: `Bearer ${auth0Client.getAccessToken()}` }
      })
    return {
        type: constants.LIST_MEETINGS,
        meetings: inputMeetings
    }
}
