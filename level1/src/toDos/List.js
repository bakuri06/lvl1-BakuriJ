import Button from '@material-ui/core/Button';
import './todo.css'
import EditableList from 'react-list-editable';
import 'react-list-editable/lib/react-list-editable.css';
const List = ({data,setData}) => {
    let edit=false;
    const makeEditable = () => {
        edit=true;
    };
    
    const deleteToDo = (index) => {
        let temp = [...data];
        temp.splice(index,1)
        setData([...temp]);
    }

    const toggleStatus = (index) => {
        let temp = [...data];
        temp[index].checked=!temp[index].checked;
        setData(temp);
    }



    if(edit){
        return (
            <ul className='forStyle'>
                {data.map((elem,index) => {
                    return(
                        <li key={index} className='li'>
                            <input type='text' checked={elem.checked} onChange={(e) => toggleStatus(index)}/>
                                {elem.title}

                                <div className='li_div'>
                                    <Button size="small" onClick={() => {
                                        deleteToDo(index)
                                        }}variant="contained" color="secondary">Delete
                                    </Button>
  
                                    <Button size="small" onClick={makeEditable}variant="contained" >
                                        Edit
                                    </Button>
                                </div>
                        </li>
                    )
                })}
            </ul>
    )
    }

    return (
        <ul className='forStyle'>
            {data.map((elem,index) => {
                return(
                    <li key={index} className='li'>
                        <input type='checkbox' checked={elem.checked} onChange={(e) => toggleStatus(index)}/>
                            {elem.title}

                            <div className='li_div'>
                                <Button size="small" onClick={() => {
                                    deleteToDo(index)
                                    }}variant="contained" color="secondary">Delete
                                </Button>

                                <Button size="small" onClick={makeEditable}variant="contained" >
                                    Edit
                                </Button>
                            </div>
                    </li>
                )
            })}
        </ul>
)


}

export default List;