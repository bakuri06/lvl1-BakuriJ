import EditableList from 'react-list-editable';
import 'react-list-editable/lib/react-list-editable.css';
import React,{Component} from 'react'

export default class Example extends Component {
    constructor(props) {
      super(props);
      this.state = {
        list: ['🥳 Partying', '👩🏻‍🎨 Painting', '🛌🏻 Sleeping']
      };
    }
    
    onListChange(newList) {
      this.setState({
        list: newList
      });
    }
    
    render() {
      return (
        <div className='app-container'>
          <EditableList
            list={this.state.list}
            onListChange={this.onListChange.bind(this)}
            placeholder='Enter a value'
          />
        </div>
      );
    }
  }