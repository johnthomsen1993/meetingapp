import axios from 'axios';
import * as React from "react";
import auth0Client from '../../auth0/auth';
import { Meeting } from '../../Models/meeting';

class EditAndCreateMeetings extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    
        this.state = {
            date:'',
            disabled:false,
            topic: '',        
        };
      }
      public updateDescription(value: Event) {
        this.setState({
          description: value,
        });
      }
    
      public updateTopic(value : Event) {
        this.setState({
            topic: value,
        });
      }
    public async submit() {
        this.setState({
          disabled: true,
        });
        const meeting : Meeting = {
            date:this.state.date,
            participants: [],
            topic:this.state.topic,
            
        }
        // tslint:disable-next-line:no-debugger
        debugger
        await axios.post('http://localhost:8081', 
        meeting
        , {
          headers: { 'Authorization': `Bearer ${auth0Client.getAccessToken()}` }
        });
    }
        public render() {
            return (
                <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card border-primary">
              <div className="card-header">New meeting</div>
              <div className="card-body text-left">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Topic:</label>
                  <input
                    disabled={this.state.disabled}
                    type="text"
                    className="form-control"
                    placeholder="Give your question a title."
                    // tslint:disable-next-line:jsx-no-bind
                    onChange={this.updateTopic.bind(this)}
                  />
                </div>

                <button
                  disabled={this.state.disabled}
                  className="btn btn-primary"
                  onClick={this.submit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
            );
          }

}

export default EditAndCreateMeetings;