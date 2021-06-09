import './App.css';
import React,{Component} from 'react'
import ToDo from './toDos/toDo'
import Example from './toDos/example';

class App extends Component {
  /*state={
    persons: [
      {id:"akhdhks",name:"Misho",age:22},
      {id:"fkajhk",name:"Bakuri",age:20},
      {id:"skfjdh",name:"Manu",age:19}
    ],
    otherState: 'some other value',
    showPersons: false

  };
    
   switchNameHandler = (event,id) => {
     const personIndex=this.state.persons.findIndex(p => {
       return p.id === id;
     })

     const person = {...this.state.persons[personIndex]};

     person.name=event.target.value;

     const persons = [...this.state.persons];

     persons[personIndex] = person;

    this.setState (
      {persons:persons}
    )
  };

  togglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersons = (index) => {
    const persons = [...this.state.persons]
    persons.splice(index,1);
    this.setState({persons:persons});
  }
  */
  render(){
    /*
    let persons=null;

    if(this.state.showPersons){
      persons=(
        <div>
          {this.state.persons.map((person,index) => {
            return(
              <Person
               name={person.name}
               age={person.age}
               click={() => this.deletePersons(index)}
               key={person.id}
               changed={(event) => {this.switchNameHandler(event,person.id)}} />
            )
          })}
          </div>  
      )
    }
    */

    return (
      /*<div className="App">
        <h1>Hi,I am a React app</h1>
        <h2>Misho</h2>
        <Button onClick={this.togglePersons} variant="contained" color="secondary">
            Toggle persons!
        </Button>
        {persons}
      </div>
      */
     <div className="main-container">
       <ToDo />
       <Example/>
     </div>
    )
  }
  }
  

export default App;
  
    //return React.createElement('div',{className:"App"},React.createElement('h1',null,"Misho"))  }


