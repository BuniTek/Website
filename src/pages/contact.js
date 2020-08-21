import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { Collapse, Button as AntBtn } from "antd"
import {
  PlusOutlined,
  MinusOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from "@ant-design/icons"

import Input from "../components/Form/Input"
import Textarea from "../components/Form/Textarea"
import Button from "../components/Button"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import { setLogoUrl, setFooterVisible } from "../redux/actions"

import "../assets/styles/pages/contact.scss"
import contactTopLeft from "../assets/images/contact_top-left.svg"
import contactMiddleRight from "../assets/images/contact_middle-right.svg"
import logo from "../assets/images/milkish.png"

const { Panel } = Collapse

const text = `
  Contact us at info@buni.tech
`


const Contact = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState({
    status: "ERROR",
  })

  const onEmailChange = e => {
    setEmail(e.target.value)
  }

  // eslint-disable-next-line no-unused-vars
  const onSubmit = ev => {
    //  if we decide to use ajax and not thirdparty recapture.
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        setState({ status: "SUCCESS", ...state })
      } else {
        setState({ status: "ERROR", ...state })
      }
    }
    xhr.send(data)
  }

  const onMessageChange = e => {
    setMessage(e.target.value)
  }

  const dispatch = useDispatch()

  useEffect(() => {
    const body = document.querySelector("body")
    body.classList.remove("home")

    dispatch(
      setLogoUrl({
        logo,
      })
    )

    setFooterVisible({
      visible: true,
    })(dispatch)
  }, [])

  return (
    <Layout>
      <SEO title="Contact Us" />

      <div className="contact">
        <div className="contact__container">
          <div
            className="contact__overlay--1"
            style={{
              backgroundImage: `url(${contactTopLeft})`,
            }}
          />
          <div
            className="contact__overlay--2"
            style={{
              backgroundImage: `url(${contactMiddleRight})`,
            }}
          />
          <h1 className="contact__heading">
            Contact us here
          </h1>
          <p className="contact__description">
            You can reach us on various platforms, don't hesitate to contact us if
            you need any assistance
          </p>
          <div className="contact__social">

            <a href="https://m.me/buniteki/" target="_blank"><AntBtn className="contact__social--button"> {" "} <FacebookOutlined />  Facebook Messenger</AntBtn></a>
            <a href="https://www.instagram.com/buni_tek/" target="_blank"><AntBtn className="contact__social--button"> {" "} <InstagramOutlined /> Instagram</AntBtn></a>
            <a href="#FAQ" ><AntBtn className="contact__social--button">FAQ</AntBtn></a>
          </div>
          <form
            // onSubmit={onSubmit}
            method="POST"
            action="https://formspree.io/xzbjqbvj"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              label="Email"
              value={email}
              onChange={onEmailChange}
              name="_replyto"
              required={true}
              style={{
                height: 40,
                width: "100%",
              }}
            />
            <Textarea
              value={message}
              onChange={onMessageChange}
              placeholder="Tell us what you think"
              label="Message"
              name="message"
              required={true}
            />
            <Button htmlType="submit" style={{ marginTop: 10, width: "100%" }}>
              Send
            </Button>
          </form>
        </div>
      </div>
      <div className="faq" id="FAQ">
        <div className="faq__container">
          <h1 className="faq__heading">Questions? We've got answers</h1>
          <Collapse
            bordered={false}
            defaultActiveKey={["1"]}
            expandIcon={({ isActive }) => {
              return isActive ? <MinusOutlined /> : <PlusOutlined />
            }}
            className="site-collapse-custom-collapse"
            style={{
              backgroundColor: "#363333",
              color: "white",
            }}
          >
            <Panel
            bordered={false}
              header="How do I enroll in a course?"
              key="1"
              className="site-collapse-custom-panel"
              style={{
                color: "white",
              }}
            >
              <p
                style={{
                  color: "white",
                }}
              >
                Go to a page of the course you are interested in. At the bottom, there is a "Book This Course" button that will redirect you to the registration page.
              </p>
            </Panel>
            <Panel
              header="What are the requirements to start learning?"
              key="2"
              className="site-collapse-custom-panel"
            >
              <p>Most of our courses don't have pre-requisites. More Information can be found on a specific <a href="/courses">course's page</a></p>
            </Panel>
            <Panel
              header="Where should I find courses and how to start learning?"
              key="3"
              className="site-collapse-custom-panel"
            >
              <p>Register your interest in a particular course, then we will contact you informing you all information about how to get started with our courses</p>
            </Panel>
            <Panel
              header="How are courses delivered?"
              key="4"
              className="site-collapse-custom-panel"
            >
              <p>Due to the Pandemic restrictions, we are currently offering our courses remotely. But the experience is still first-rate as we are using various modern tools such as Google Classroom, Cloud solutions, live streaming services, and chats to make sure that our courses are delivered with high quality. We also allow our students to access all of the materials and get support even after the delivery</p>
            </Panel>
            <Panel
              header="Are the courses free of charge?"
              key="5"
              className="site-collapse-custom-panel"
            >
              <p>One of our core values is about democratising tech, which means one shouldn't be denied of our services based on their finance. We are only charging a small amount for commitment purposes. However, if that still poses a financial challenge for you, please don't hesitate to contact us at support@buni.tech </p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
