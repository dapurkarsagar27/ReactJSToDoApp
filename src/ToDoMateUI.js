import react from "react";
import AddIcon from '@mui/icons-material/Add';

const ToDoMateUI = () =>{
    return(
        <>
            <div className="mainUI">
                <div className="todobox">
                    <h1>TO DO List</h1>
                    <input type="text" placeholder="Add to the list..."></input>
                    <button><AddIcon/></button>
                </div>    
            </div>
        </>
    )
}

export default ToDoMateUI;