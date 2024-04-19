import React from 'react'

const AddIcon = ({fillColor, fillOpacity}) => {
  return (
    <button>
        <svg fill={fillColor} fillOpacity={fillOpacity} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M460-460H240v-40h220v-220h40v220h220v40H500v220h-40v-220Z"/></svg>
    </button>
  )
}

export default AddIcon