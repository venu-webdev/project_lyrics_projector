import React from 'react'

const EditIcon = ({fillColor, fillOpacity,id}) => {
  return (
    <button onClick={(e)=>{
      console.log("inside edit icon: ",e.target.id)
    }}>
        <svg id={id} xmlns="http://www.w3.org/2000/svg" fill={fillColor} fillOpacity={fillOpacity} height="24" viewBox="0 -960 960 960" width="24"><path d="M200-200h43.923l427.923-427.923-43.923-43.923L200-243.923V-200Zm-40 40v-100.769l527.231-527.77q6.146-5.481 13.573-8.471 7.427-2.99 15.486-2.99 8.06 0 15.616 2.538 7.556 2.539 13.94 9.154l42.693 42.923q6.615 6.385 9.038 14.008Q800-723.754 800-716.131q0 8.131-2.741 15.558-2.74 7.427-8.72 13.573l-527.77 527H160Zm600.769-556.308-44.461-44.461 44.461 44.461Zm-111.27 66.809-21.576-22.347 43.923 43.923-22.347-21.576Z"/></svg>
    </button>
  )
}

export default EditIcon