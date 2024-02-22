import { useState } from "react";
import { useHistory } from "react-router";
import "./contact.scss";
import "./cross.scss";

export const Contact = ({ device }) => {
  const [form, setForm] = useState({});
  const [pic, setPic] = useState("");
  const [error, setError] = useState({});

  const history = useHistory();

  const handleChange = (e) => {
    setPic("-typing");
    setError({});
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const postMessage = async () => {
    let err = {};
    const regEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!form.name) {
      err = {
        ...err,
        name: "Please enter your name",
      };
    }
    if (!regEmail.test(String(form.email).toLowerCase())) {
      err = {
        ...err,
        email: "Please enter valid email",
      };
    }
    if (!regPhone.test(String(form.phone).toLowerCase())) {
      err = {
        ...err,
        phone: "Please enter valid phone number",
      };
    }
    if (!form.message) {
      err = {
        ...err,
        message: "Please enter a message",
      };
    }
    setError(err);
    Object.keys(err)?.length > 0 ? setPic("-err") : setPic("-yes");
    if (!Object.keys(err)?.length > 0) {
      await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_ju8r1uc",
          template_id: "template_0vzrcxi",
          user_id: "user_wjh2kZnmiZKq6a2dD7nUP",
          template_params: { ...form, message: form.message + "\n" + device },
        }),
      })
        .then((rep) => {
          setForm({});
          setTimeout(() => history.push("/"), 1000);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const onCancel = () => {
    setPic("-no");
    setTimeout(() => history.push("/"), 10);
  };

  return (
    <div className="contact">
      <div
        onMouseEnter={() => setPic("-no")}
        onMouseLeave={() => setPic("")}
        onClick={onCancel}
        className="cross"
      >
        <span />
        <span />
      </div>
      <img src="assets/logo.png" className="con-logo" />
      <img
        width={0}
        height={0}
        src={`assets/images/contact/contact.png`}
        alt="Raghuveer Portfolio Contact"
      />
      <img
        width={0}
        height={0}
        src={`assets/images/contact/contact-yes.png`}
        alt="Raghuveer Portfolio Success"
      />
      <img
        width={0}
        height={0}
        src={`assets/images/contact/contact-no.png`}
        alt="Raghuveer Portfolio Don't Close"
      />
      <img
        width={0}
        height={0}
        src={`assets/images/contact/contact-err.png`}
        alt="Raghuveer Portfolio Error"
      />
      <img
        width={0}
        height={0}
        src={`assets/images/contact/contact-typing.png`}
        alt="Raghuveer Portfolio Error"
      />
      <h1>
        Thanks for taking the time to reach out. How can I help you today?
      </h1>
      <div className="frame">
        <img
          src={`assets/images/contact/contact${pic}.png`}
          alt="Raghuveer Portfolio Contact"
        />
      </div>

      <div className="form">
        <div className="full">
          <label htmlFor="name">Name</label>
          <input
            placeholder="James Bond"
            name="name"
            onChange={handleChange}
            value={form.name}
            type="text"
          />
          <span>{error.name}</span>
        </div>
        <div className="half">
          <label htmlFor="email">Email</label>
          <input
            placeholder="james@gmail.com"
            name="email"
            onChange={handleChange}
            value={form.email}
            type="email"
          />
          <span>{error.email}</span>
        </div>
        <div className="half">
          <label htmlFor="phone">Phone Number</label>
          <input
            placeholder="9876543210"
            name="phone"
            onChange={handleChange}
            value={form.phone}
            type="tel"
          />
          <span>{error.phone}</span>
        </div>
        <div className="full">
          <label htmlFor="message">Message</label>
          <textarea
            placeholder="Type your message..."
            name="message"
            onChange={handleChange}
            value={form.message}
            type="text"
          />
          <span>{error.message}</span>
        </div>
        <div className="full">
          <button onClick={postMessage}>Submit</button>
        </div>
      </div>
    </div>
  );
};
