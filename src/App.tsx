import * as React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import callback from './components/callback/callback';
import DefaultGrid from './components/default-grid/default-grid';
import EditAndCreateMeetings from './components/edit-and-create-meetings/edit-and-create-meetings';
import NavBar from './components/navBar/navBar';




class App extends React.Component {
  public render() {
    return (
      <div >
        <NavBar/>
        <div className="App">
        <Switch> 
            <Route exact={true} path="/" component={DefaultGrid} />
            <Route exact={true} path="/createmeeting" component={EditAndCreateMeetings} />
            <Route exact={true} path="/callback" component={callback} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
