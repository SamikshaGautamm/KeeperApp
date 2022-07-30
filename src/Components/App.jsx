import React, { useState } from "react"
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){
    const[notes, setNotes] = useState([]);
    
    function addNote(newNote){
 
        setNotes((prevValue) => {
            return [...prevValue, newNote];
        });
    }

    function deleteNote(id){
        setNotes((prevItems) => {
            return prevItems.filter((item, index) => {
              return index !== id;
            });
          });
    }
    return (
        <div>
        <Header />
        <CreateArea onAdd = {addNote} />
       { notes.map((anote, index) => {return <Note title= {anote.title} content= {anote.content} key= {index} id={index} onDelete = {deleteNote} />})}
        <Footer />
      
    </div>);
}

export default App;