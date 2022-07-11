
import './App.css';
import Form from './Form'
import React, {useState , useEffect} from 'react';

function App() {
      const [todos, setTodos] = useState([])
      

      useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
      }, [todos]);


      useEffect(()=>{
      const todos = JSON.parse(localStorage.getItem("todos"));
      if (todos){
        setTodos(todos);
      }
     
}, []);
  
const toggleComplete = (i)=> setTodos(todos.map((todo, k) => k === i ? { ...todo, complete : !todo.complete} :todo ));

// const clearTodos = (i) => setTodos(todos.map((todo, k) => k===i ? "": todo));

  return (
    
    <div className="App">
      <h1 className="header">Works to be done</h1>
     <Form onSubmit={text=>{ setTodos([{text, complete : false}, ...todos])}} />
     <div>
      
      <ol className='olist'>
      {
        todos.map(({ text, complete }, i)=>
          <div>
              <li key={i} className='listiteam' onClick={()=> toggleComplete(i)} style={{textDecoration: complete? "line-through": ""}}>
                  {text} 
              </li>
              {/* <button className='btn' onClick={()=> clearTodos(i)}>clear</button> */}
          </div>
          )}
      </ol>
      
     </div> 
    
     <button className="plus" onClick={()=> setTodos([])}>Clear All</button>
    </div>
  );
}

export default App;


