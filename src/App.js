import React from 'react';
import logo from './logo.svg';
import './App.css'

class App  extends  React.Component {
constructor(props){
  super(props);
  this.state={
    newItem:"",
    list:[]
  }
}

addItem(todoValue){
   if(todoValue!==""){
     const newItem = {
       id : Date.now(),
       value:todoValue,
       isDone:false
     }
     const list = [...this.state.list];
     list.push(newItem);
     this.setState({
     list,
     newItem:""
   });
   }
   
}

deleteItem(id){
  const list  = [...this.state.list];
  const updatedlist = list.filter(item => item.id!==id);
  this.setState({
    list:updatedlist
  })
}

updateInput(value){
  this.setState({newItem:value});
}



  render (){
    return (
      <div>
        <img  src={logo} width="100" height="100" className="App-logo"/>
        <h1 className="app-title">Todo App</h1>
        <div className="container">
          
          Add Items....
          <br/>
          <input 
          className="input-text" 
          type="text" 
          placeholder="Type todo"
          required 
          value = { this.state.newItem}
          onChange = {e=>this.updateInput(e.target.value)}
 
          ></input>
          <button 
          className="btn"
          onClick = {()=>this.addItem(this.state.newItem)}
          disabled ={!this.state.newItem.length}
          >
              Add Todo
          </button>
          <div className="list">
               <ul>
                 {this.state.list.map(item=>{
                   return (
                     <li key={item.id}>
                       <input 
                       type="checkbox"
                       name="done"
                       checked={item.isDone}
                       onChange={()=>{}}
                       >
                       </input>
                        {item.value}
                        <button
                        className="btn"
                        onClick ={()=>this.deleteItem(item.id)}
                        >
                        Delete
                        </button>
                     </li>
                   );
                 })}
                 <li>
                   <input type="checkbox"/>
                     Record Youtube video 
                 </li>
               </ul>
          </div>
        </div>

      </div>
      
    );  
  }   
}

export default App;