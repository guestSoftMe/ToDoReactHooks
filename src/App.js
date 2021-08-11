import './App.css';
import React, {useEffect, useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Todo from "./todo";
import {Context} from "./context";

let App = () => {
    const [state, setState] = useState([])
    const [title, setTitle] = useState('');

    useEffect(()=>{
        let local = localStorage.getItem('todo')
        setState(JSON.parse(local))
    },[])

    useEffect(()=>{
        localStorage.setItem('todo',JSON.stringify(state))
    },[state])

    let btnadd = () => {
        if (title === '') {
          return false
        }else{
            setState([
                ...state,
                {
                    id: Date.now(),
                    todo: title,
                    done: true
                }
            ])
            setTitle('')
        }
    }
    const delet = id =>{
        setState(state.filter(i=>{
            return i.id !== id
        }))
    }

    return (
        <Context.Provider value={{delet}}>
        <div className='App'>
            <div>
                <div><TextField
                    id="standard-full-width"
                    label="TODO"
                    style={{margin: 8, width: '500px'}}
                    placeholder="Todo name"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                /></div>
                <Button variant="contained" color="primary" onClick={btnadd}>
                    Добавить
                </Button>
                <Todo todos={state}/>
            </div>
        </div>
    </Context.Provider>
    )
}

export default App;
