import React,{useState} from 'react'
import Button from '@material-ui/core/Button';

const TitleInput = ({onSubmit}) => {
    const [title,setTitle] = useState('');
    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(title);
        setTitle("");


    }

    return(
        <form onSubmit={handleSubmit} className="formm">
            <input type="text" name='title' placeholder='Enter Title' value={title} onChange={handleChange}/>
            <Button size="small" type='submit' variant="contained" color="primary">
                Add
            </Button>
        </form>
    )
}

export default TitleInput;