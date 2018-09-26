import axios from "axios";
import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import auth0Client from "../../auth0/auth";
import { Meeting } from "../../Models/meeting";
import * as actions from "../../ReduxStore/Actions/simpleAction"
import { IMetingStoreState } from "../../ReduxStore/types/meeting";

export interface IMeetingProps {
  date: Date;
  disabled: false;
  topic: string;
  onDateChanged?: (e: React.FormEvent<HTMLInputElement>) => void;
  onTopicChanged?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export function mapStateToProps({ topic, date }: IMetingStoreState) {
  return {
    date,
    topic,
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.MeetingActions>) {
  return {
    onDateChanged: () => dispatch(actions.changeMeetingDate()),
    onTopicChanged: () => dispatch(actions.changeMeetingTopic()),
  }
}


class EditAndCreateMeetings extends React.Component<IMeetingProps, any> {
  constructor(props: IMeetingProps) {
    super(props);
    this.update = this.update.bind(this)
    this.submit = this.submit.bind(this)
  }

  public update = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  };
  public submit() {
    const meeting: Meeting = {
      date: new Date(this.state.date),
      participants: [],
      topic: this.state.topic
    };
    axios.post("http://localhost:53775/api/meeting", meeting, {
      headers: { Authorization: `Bearer ${auth0Client.getAccessToken()}` }
    });
  }
  public render() {
    const topic = this.props.topic;
    return (
      <div>
        <div>New meeting</div>
        <div>
          <div>
            <label>Topic:</label>
            <div >
               Hello {topic}
            </div>
            <input
              disabled={this.state.disabled}
              type="text"
              name="topic"
              placeholder="Give your meeting a title."
              onChange={this.props.onTopicChanged}

            />
          </div>
          <div>
            <label>Date:</label>
            <input
              disabled={this.state.disabled}
              type="date"
              name="date"
              onChange={this.props.onDateChanged}
            />
          </div>
          <button
            disabled={this.state.disabled}
            className="btn btn-primary"
            onClick={this.submit}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (EditAndCreateMeetings);
