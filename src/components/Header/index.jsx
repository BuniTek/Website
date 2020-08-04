import React, { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "gatsby"
import styled from "styled-components"
import { MenuOutlined } from "@ant-design/icons"
import "./index.scss"
import Sidebar from "./Sidebar"

const Logo = styled.img`
  width: 5rem;
  height: auto;
`

const Header = () => {
  const [open, setOpen] = useState(false)
  const logoUrl = useSelector(state => state.ui.logoUrl)

  return (
    <header>
      <nav>
        <div className="nav-wrapper">
          <div className="nav-wrapper__container">
            <Link to="/" className="brand-logo">
              <Logo
                src={logoUrl}
                alt="Africa I"
                className="nav-wrapper__logo"
              />
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/" activeClassName="nav__active">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  activeClassName="nav__active"
                  partiallyActive
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/about" activeClassName="nav__active">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" activeClassName="nav__active" partiallyActive>
                  Posts
                </Link>
              </li>
              <li>
                <Link to="/contact" activeClassName="nav__active">
                  Contact Us
                </Link>
              </li>
            </ul>
            <button
              className="toggle"
              onClick={() => setOpen(!open)}
              type="button"
            >
              <MenuOutlined
                style={{
                  padding: 8,
                  fontSize: 18,
                }}
              />
            </button>
          </div>
        </div>
      </nav>
      <Sidebar open={open} setOpen={setOpen} />
    </header>
  )
}

export default Header
