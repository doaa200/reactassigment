import React from 'react'
import { useHistory } from "react-router-dom";

export default function contact(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory();
    const redirectToAbout = () => {
      history.push("/about"); 
    };
  
  return (
    <>
    <div>contact</div>
    <button className="btn btn-primary" onClick={() => redirectToAbout()}>
        Go To About
      </button>
      </>
  )
}
