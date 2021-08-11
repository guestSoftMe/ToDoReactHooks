import React, {useContext, useState} from 'react'
import './App.css'
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import classNames from "classnames";
import {Context} from "./context";

let Todolist = ({todo,id}) =>{
    const [checked, setChecked] = useState();
    let {delet} = useContext(Context)
    console.log(delet)

    return (
        <li className={classNames('todoli',checked && 'checked')}>
            <div>
                <FormControlLabel
                    control={<Checkbox name="checkedA" />}
                    label={todo}
                    checked={checked}
                    onChange={()=>setChecked(!checked)}
                />
            </div>
            <div>
                <IconButton onClick={()=>delet(id)} aria-label="delete">
                    <DeleteIcon color="secondary" />
                </IconButton>

            </div>

        </li>
    )
}
export default Todolist
