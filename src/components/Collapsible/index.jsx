/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react"

import "./index.scss"
import plus from "../../assets/images/plus-solid-1.png"
import minus from "../../assets/images/minus-solid.svg"

function Collapsible({ heading, content }) {
  const initialState = false
  const [state, setState] = useState(initialState)

  const toggleParagraph = () => {
    setState(!state)
  }

  const hideParagraph = () => {
    if (state) return "unhide"
    else return "hide"
  }

  return (
    <div className="collapsible">
      <div className="collapsible__header">
        <div
          className="collapsible__header__icon"
          style={{
            backgroundImage: `url(${state == true ? minus : plus})`,
            color: "#BFBFBF",
          }}
        />
        <div className="collapsible__header__heading" onClick={toggleParagraph}>
          <span>{heading}</span>
        </div>
      </div>
      <div
        className={`collapsible__content collapsible__content--hide ${hideParagraph()}`}
      >
        {content}
      </div>
    </div>
  )
}

export default Collapsible
