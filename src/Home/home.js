import React from 'react'
import { useSelector ,useDispatch } from "react-redux";
import {changeLanguage} from '../store/Action/language'

export default function home() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const language= useSelector((state)=>state.language.lang) 
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch= useDispatch()

  const handleChange=()=>{

    dispatch(changeLanguage(language=="ar"?"en":"ar"))
  
  }

  return (
    <div dir={language=="en"?`ltr`:"rtl"}>
    <h1>the language is :{language}</h1>
    <button className="btn btn-primary" onClick={() => handleChange()}>
        change language
      </button>  
      </div>
  )
}
