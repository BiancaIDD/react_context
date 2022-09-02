
import { useState, React, Context } from "react";

import DiaryForm from "../Diaryform/DiaryForm"
import DiaryContext from "./diary-context"

export default function Information(){
  const [tasks, setTasks] = useState([])
{
    return(
      <DiaryContext.Provider value={{tasks, setTasks}}>
      <ul>
        {tasks.map((task)=>(
          <li>{task}</li>
        ))}
      </ul>
        <DiaryForm/>
      </DiaryContext.Provider>
    )}}
    
