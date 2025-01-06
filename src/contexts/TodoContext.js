import { useContext,createContext } from "react";

export const TodoContext = createContext(
    {
        todos:[{
            id:1,
            todo:"Todo Msg",
            completed:false,
        }],
        addTodo:(todo)=>{},
        updateTodo:(id,todo)=>{},
        deleteTodo:(id)=>{},
        toggleComplete:(id)=>{}
        // from here we start theme context 

        ,
        themeMode:"light",
        darkMode:()=>{},
        lightMode:()=>{}
    }
);

export const TodoProvider = TodoContext.Provider;

export function useTodo() {
    return useContext(TodoContext);
}