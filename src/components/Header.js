import React from 'react';
//import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <img src="/images/acsg_COLOR.png" alt="" style={styleheaderimage}/>
            <h1>Meeting Room</h1>
            <hr  style={{
    color: '#a83232',
    backgroundColor: '#a83232',
    height: .50,
    borderColor : '#a832320'
}}/>
<h1>Welcome:</h1>

        </header>
    )
}

const headerStyle = {
   // background: '#cad2d9',
    //color: '#fff',
    textAlign: 'center',
    padding: '5px'
}

const styleheaderimage = {
    width: '35%'
  }

export default Header;