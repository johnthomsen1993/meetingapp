import * as constants from '../Constants/constants'


export interface IChangeMeetingDate {
    type: constants.CHANGE_DATE;
}

export interface IChangeMeetingTopic {
    type: constants.CHANGE_TOPIC;
}

export type MeetingActions = IChangeMeetingDate | IChangeMeetingTopic;

export function changeMeetingDate(): IChangeMeetingDate {
    return {
        type: constants.CHANGE_DATE
    }
}

export function changeMeetingTopic(): IChangeMeetingTopic {
    return {
        type: constants.CHANGE_TOPIC
    }
}