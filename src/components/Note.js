import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function Note(props){
    const deleteNote = () =>{
        props.deleteItem(props.id);
    };
    return(
        <>
       
            <div className="note">
                <h2>{props.title}</h2>
                <br/>
                <p>{props.content}</p>
                <button onClick={deleteNote}><DeleteOutlineIcon/></button>
        </div>
        </>
    );
}

export default Note;