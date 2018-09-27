import * as React from "react";
import axios from "axios";
import { Meeting } from "../../Models/meeting";
import auth0Client from "../../auth0/auth";
import MeetingList from "../Lists/meetingList";
import { MeetingStoreState } from "../../ReduxStore/types/meeting";
import { Dispatch } from "redux";
import * as actions from "../../ReduxStore/Actions/simpleAction";
import { connect } from "react-redux";


type MeetingsProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export function mapStateToProps({ meetings }: MeetingStoreState) {
  return {
    meetings
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.MeetingActions>) {
  return {
    listMeetings: (meeting: Meeting[]) =>
      dispatch(actions.ListMeetings(meeting))
  };
}

class Meetings extends React.Component<MeetingsProps> {
  constructor(props: MeetingsProps) {
    super(props);
  }

  public async componentDidMount() {
    await axios
      .get<Meeting[]>("http://localhost:53775/api/meeting", {
        headers: { Authorization: `Bearer ${auth0Client.getAccessToken()}` }
      })
      .then(reponse => {
        if (this.props.listMeetings !== undefined) {
          this.props.listMeetings(reponse.data);
        }
      });
  }

  public render() {
    return (
      <div>
        <MeetingList entries={this.props.meetings} />
      </div>
    );
  }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  ) (Meetings);
