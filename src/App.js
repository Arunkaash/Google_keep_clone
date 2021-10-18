import react,{useState} from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import CreateNote from './components/CreateNote';
import Note from './components/Note';

function App() {
  const[addItem, setAddItem] = useState([]);

  const addNote = (note) =>{
    // alert("cliked")
    setAddItem((prevdata)=>{
      return[...prevdata,note];
    });
  }
  const onDelete = (id) =>{
    setAddItem((olddata)=>
      olddata.filter((currdata, index)=>{
        return index !== id; 
      })
    );

  };
  return (
    <div className="App" >
      <Header/>
      <CreateNote passNote={addNote}/>
       <div className="noteDiv" >
      {
        addItem.map((val,index)=>{
          return (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
            />
          )
        })
      }
      </div>
      <Footer/>
    </div>
  );
}

export default App;
