import React, {useState} from 'react'
import {v4 as uuid} from 'uuid'
// import GroceryList from './groceryList';
import './App.css';

function App() {
  const [List, setList] = useState([])
  const [Name, setName] = useState('')
  const [Editing, setEditing] = useState(false)
  const [EditID, setEditID] = useState(null)
  const handleSubmit = (e) =>{
      e.preventDefault();
      if(Editing==true)
      {
        // THE CORRECT </CODE>
        setList(List.map((item)=>{
          if(EditID===item.id)
              return {...item, title:Name}
            
          return item
        }))

        // MY WRONG LOGIC
        // List.map((item)=>{
        //   if(item.id === EditID)
        //    return setList(...item, {title:Name})
        //    return setList(item)
        //   // console.log(List);
        // })
      }
      else
      console.log(List);
      setList([...List,{title:Name, id: uuid()}])
      setName('')
  }

  const handleDelete = (id) => {
      setList(List.filter((item)=> item.id !== id))
  }

  const editItem = (id) => {
    const specificItem = List.find((item) => item.id === id);
    // setIsEditing(true);
    setEditID(id);
    setEditing(true);
    setName(specificItem.title);
  };

  return (
    <div className="App">
      <div className="container">
        <form>
          <input type="text"
          placeholder='eg:egg'
          value={Name} 
          onChange={(e)=>setName(e.target.value)}
          />
          <button onClick={(e)=> handleSubmit(e)}>Submit</button>
        </form>
      </div>
      <section>
        {List.map((item)=>{
          const {id,title}=item;
          return(
            <div>
            <h1>{title}</h1>
            <div className="btn">
              <button onClick={()=> handleDelete(id)}>
                Delete
              </button>
              <button onClick={()=> editItem(id)}>
                Edit
              </button>
            </div>
            </div>
          )
        })}
      </section>
    </div>
  );
}

export default App;
