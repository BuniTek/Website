/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react"

import "./index.scss"
import plus from "../../assets/images/plus-solid-1.png"
import minus from "../../assets/images/minus-solid.svg"

function Reaveler({ heading, content }) {
  const initialState = true
  const [state, setState] = useState(initialState)

  const toggleParagraph = () => {
    setState(!state)
  }

  const hideParagraph = () => {
    if (state) return "revealer__content--unhide"
    else return "revealer__content--hide"
  }

  return (
    <div className="revealer">
      <div className="revealer__header">
        <div
          className="revealer__header__icon"
          style={{
            backgroundImage: `url(${state == true ? minus : plus})`,
          }}
        />
        <div className="revealer__header__heading" onClick={toggleParagraph}>
          <span>{heading}</span>
        </div>
      </div>
      <div className={`revealer__content ${hideParagraph()}`}>{content}</div>
    </div>
  )
}

export default Reaveler
