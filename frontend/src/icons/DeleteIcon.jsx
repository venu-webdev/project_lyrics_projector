import React from 'react'

const DeleteIcon = ({fillColor, fillOpacity,id}) => {
  return (
    <button onClick={(e)=>{
      console.log("inside del icon")
    }}>
        <svg id={id} xmlns="http://www.w3.org/2000/svg" fill={fillColor} fillOpacity={fillOpacity} height="24" viewBox="0 -960 960 960" width="24"><path d="M304.615-160q-26.846 0-45.731-18.884Q240-197.769 240-224.615V-720h-40v-40h160v-30.77h240V-760h160v40h-40v495.385Q720-197 701.5-178.5 683-160 655.385-160h-350.77ZM680-720H280v495.385q0 10.769 6.923 17.692T304.615-200h350.77q9.23 0 16.923-7.692Q680-215.385 680-224.615V-720ZM392.307-280h40.001v-360h-40.001v360Zm135.385 0h40.001v-360h-40.001v360ZM280-720v520-520Z"/></svg>
    </button>
  )
}

export default DeleteIcon