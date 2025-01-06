import { useEffect, useState } from 'react'
import { TodoProvider, useTodo } from './contexts'
import { TodoForm, TodoItem, ToggleButton } from './components';


function App() {



  // const{{todos,addTodo,updateTodo,deleteTodo,toggleComplete}} = useTodo();
  const[todos,setTodos] = useState([]);

  // const{addTodo,updateTodo,deleteTodo,toggleComplete} = useTodo();

  const addTodo =(todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }

  const updateTodo = (id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>
    prevTodo.id === id ? todo : prevTodo 
    ))
  }

  const deleteTodo = (id) =>{
    setTodos((prev)=>prev.filter((prevTodo)=> prevTodo.id !== id))
  }


  const toggleComplete = (id) =>{
    setTodos((prev)=> prev.map((prevTodo)=>
      prevTodo.id === id ? {...prevTodo,completed:!prevTodo.completed} : prevTodo
    ))
  }
  

  // now talking about localstorage 

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length > 0)
        setTodos(todos)
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  const[themeMode,setThemeMode] = useState(()=>{
    return localStorage.getItem("myTheme") || "light"
  });
  
  const darkMode = ()=>{
    setThemeMode("dark")
  }
  const lightMode = ()=>{
    setThemeMode("light")
  }

  useEffect(()=>{
    const body = document.querySelector("body");
    body.classList.remove("dark","light")
    body.classList.add(themeMode)
  },[themeMode])

  useEffect(()=>{
    localStorage.setItem("myTheme",themeMode)
  },[themeMode])

  console.log(themeMode)

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete,themeMode,darkMode,lightMode}}>
<div className="dark:bg-[#172842] bg-white transition-all duration-700 ease-in-out min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 dark:text-white text-zinc-900">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <ToggleButton/>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {
                          todos.map((todo)=>(
                            <div key={todo.id} className='w-full'>
                              <TodoItem todo={todo}/>
                            </div>
                          ))
                        }
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
