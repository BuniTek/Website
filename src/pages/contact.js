import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../components/Form/Input';
import Textarea from '../components/Form/Textarea';
import Button from '../components/Button';
import Layout from '../layouts/layout';
import SEO from '../components/seo';
import { setLogoUrl } from '../redux/actions';

import '../assets/styles/pages/contact.scss';
import contactTopLeft from '../assets/images/contact_top-left.svg';
import contactMiddleRight from '../assets/images/contact_middle-right.svg';
import logo from '../assets/images/africai.png';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState({
    status: 'ERROR',
  });

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // eslint-disable-next-line no-unused-vars
  const onSubmit = (ev) => {
    //  if we decide to use ajax and not thirdparty recapture.
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setState({ status: 'SUCCESS', ...state });
      } else {
        setState({ status: 'ERROR', ...state });
      }
    };
    xhr.send(data);
  };

  const onMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.remove('home');

    dispatch(
      setLogoUrl({
        logo,
      }),
    );
  }, []);

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
            Contact us by sending us an email here
          </h1>
          <p className="contact__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Itaque, fuga!
          </p>
          <form
          // onSubmit={onSubmit}
            method="POST"
            action="https://formspree.io/mpzyqpnp"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              label="Email"
              value={email}
              onChange={onEmailChange}
              name="_replyto"
              style={{
                height: 40,
                width: '100%'
              }}
            />
            <Textarea
              value={message}
              onChange={onMessageChange}
              placeholder="Tell us what you think"
              label="Message"
              name="message"
            />
            <Button htmlType="submit" style={{marginTop: 10, width: '100%'}}>Send</Button>
          </form>
        </div>
      </div>

    </Layout>

  );
};

export default Contact;
