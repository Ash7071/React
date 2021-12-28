import React, { Component } from 'react'
import Header from './components/Header';

 class App extends Component {
  render() {
    return (
      <div>
         <center><h1>IM IN React Class </h1></center> 
            
         <Header count ="100" register ="90"> All The Students Must be Register to the React </Header>  
        
      </div>
    )
  }
}
export default App;
