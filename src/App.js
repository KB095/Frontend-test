import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      value0: '',
      value1: '',
      value2: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


handleSubmit(event) {
  alert('A name was submitted: ' + this.state.value + this.state.value0 + this.state.value1 + this.state.value2);
  axios({
    method: 'put',
    url: 'http://192.168.1.101:3001/price-tag/modifyProduct2/',
   // headers: {Authorization: 'Bearer' + token },
    data: {
      "ID": "123",
      "barcode": "123",
      "number": "123",
     "placeHolder28": this.state.value2,	
     "placeHolder29": "Start Time:",	
     "placeHolder30":   "Participants:",		
     "placeHolder32": this.state.value1,	
      "placeHolder35": this.state.value0,
      "placeHolder36": this.state.value,
     "placeHolder37": "Welcome:",
     "placeHolder38": "Meeting Room",
     "storeUuid": "65"
    } 
})
.then(response => {
  //  res.statusCode = 200
    console.log(response)
  axios({
    
    method: 'put',
    url: 'http://192.168.1.101:3001/price-tag/updateSingle/',
   // headers: {Authorization: 'Bearer' + token },
    data: {
      "label1": "123",
     "storeUuid": "65"
    } 
})
.then(response => {
  //  res.statusCode = 200
  console.log("futok")
    console.log(response)
 //   res.setHeader('Content-Type', 'application/json')
   // res.send(JSON.stringify(response.data, null,3))
})
    
 //   res.setHeader('Content-Type', 'application/json')
   // res.send(JSON.stringify(response.data, null,3))
}

)
.catch( error => {
console.error(error)
})







.catch( error => {
console.error(error)
})

  event.preventDefault();

}

render() {
  return (
    

    <div className="App">
      <Header />
      
      <form  onSubmit = {this.handleSubmit}>
  
      <input id="1"  placeholder = 'Guest' onChange={ e => this.setState({value: e.target.value})}  />
      <div >
      <div style = {{textAlign: "left"}} >
     <b style = {{fontSize: "30px"}}> Participants: </b>  <b style = {{paddingLeft: "30%", fontSize: "30px"}}> Time: </b>
     <p>
     <input id="2"  placeholder = 'Participant 1' onChange={ e => this.setState({value0: e.target.value})}  /> <object style = {{paddingRight: "-30%"}}><input id="4"   placeholder = 'Time' onChange={ e => this.setState({value2: e.target.value})}  /> </object>
     </p>
     <p>
     <input  id="3" placeholder = 'Participant 2' onChange={ e => this.setState({value1: e.target.value})}  />
     </p>
     </div>
     

     </div>
     <input type="submit" value="Refresh" />
      </form>
      
    </div>
  );
}
}
export default App;

   // <img src={template} /><img src="/images/Template4.2.png" alt="" style= {styleBackground}/>

   /*
     <form  onSubmit = {this.handleSubmit}>
  
      <input id="1"  placeholder = 'Guest' onChange={ e => this.setState({value: e.target.value})}  />
      <div >
      <div style = {{textAlign: "left"}} >
     <b style = {{fontSize: "30px"}}> Participants: </b>  <b style = {{paddingLeft: "30%", fontSize: "30px"}}> Time: </b>
     <p>
     <input id="2"  placeholder = 'Participant 1' onChange={ e => this.setState({value0: e.target.value})}  /> <object style = {{paddingRight: "-30%"}}><input id="4"   placeholder = 'Time' onChange={ e => this.setState({value2: e.target.value})}  /> </object>
     </p>
     <p>
     <input  id="3" placeholder = 'Participant 2' onChange={ e => this.setState({value1: e.target.value})}  />
     </p>
     </div>
     

     </div>
     <input type="submit" value="Refresh" />
      </form>
      */