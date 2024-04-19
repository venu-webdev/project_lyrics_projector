import React from 'react'

const SwitchIcon = ({fillColor, fillOpacity}) => {
  return (
    <button>
        <svg xmlns="http://www.w3.org/2000/svg" fill={fillColor} fillOpacity={fillOpacity} height="24" viewBox="0 -960 960 960" width="24"><path d="M184.615-200q-26.846 0-45.731-18.884Q120-237.769 120-264.615v-430.77q0-26.846 18.884-45.731Q157.769-760 184.615-760h590.77q26.846 0 45.731 18.884Q840-722.231 840-695.385v430.77q0 26.846-18.884 45.731Q802.231-200 775.385-200h-590.77ZM360-240h415.385q10.769 0 17.692-6.923T800-264.615v-430.77q0-10.769-6.923-17.692T775.385-720H360v480Zm-40 0v-480H184.615q-10.769 0-17.692 6.923T160-695.385v430.77q0 10.769 6.923 17.692T184.615-240H320Zm-160 0v-480 480Zm160 0h40-40Zm0-480h40-40Z"/></svg>
    </button>
  )
}

export default SwitchIcon