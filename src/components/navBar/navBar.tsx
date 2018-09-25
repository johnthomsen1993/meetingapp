import * as React from 'react';
import styled from 'styled-components';
import auth0Client from '../../auth0/auth';


const SideBar = styled.div`
height: 100%; 
width: 160px; 
position: fixed;
z-index: 1;
top: 0; 
left: 0;
background-color: #111; 
overflow-x: hidden;
padding-top: 20px;
`;

const Linky = styled.a`
padding: 6px 8px 6px 16px;
text-decoration: none;
font-size: 20px;
color: #818181;
display: block;
`;

class NavBar extends React.Component {

    public render() {
        return (
          <SideBar >
            <Linky href="/"  >Menu</Linky>
            <Linky href="/createmeeting"> Create meeting</Linky>
            {
        !auth0Client.isAuthenticated() &&
        <button  onClick={auth0Client.login}>Sign In</button>
      }
      {
        auth0Client.isAuthenticated() &&
        <div>
          <button  onClick={auth0Client.logout}>Sign Out</button>
        </div>
      }
          </SideBar>
        );
      }
}

export default NavBar;

