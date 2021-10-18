import React,{useState} from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function CreateNote(props){
    const [expand, setExpand] = useState(false);
    const expentIt = () =>{
        setExpand(true);
    }
    const backToNormal = () =>{
        setExpand(false)
    }
    const[note, setNote] = useState({
        title:"",
        content:"",
    }) 
const InputEvent = (event) =>{
    const{name, value} = event.target;
    setNote((prevdata)=>{
        return {
            ...prevdata,
            [name]:value
        }
    })
}
const addEvent = () =>{
    props.passNote(note);
    setNote({
        title:"",
        content:"",
    });
    
    
}
    return(
        <>
        <div className="createNote" onDoubleClick={backToNormal}>
        <form>
            {expand?<input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title"></input>:null}
            <textarea type="text" name="content" value={note.content} onChange={InputEvent} placeholder="Take a note..." onClick={expentIt}></textarea>
            {expand?<Button className="createButton" onClick={addEvent}><AddIcon/></Button>:null}
        </form>
        
        </div>
        </>
    );
}

export default CreateNote;