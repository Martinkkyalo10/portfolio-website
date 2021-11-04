import React, { useState } from "react";
import axios from "axios";

function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [description, setDescription] = useState("");
  const [info, setInfo] = useState([]);

  // handle change
  function handleChange(e) {
    console.log(e.target.value);
    setName(e.target.value);
    setEmail(e.target.value);
    setProject(e.target.value);
    setBudget(e.target.value);
    setTimeline(e.target.value);
    setDescription(e.target.value);
  }

  // handle submit
  function handleSubmit(e) {
    e.preventDefault();
    setInfo(info);
    info = {
      name: name,
      email: email,
      project: project,
      budget: budget,
      timeline: timeline,
      description: description,
    };
    axios.post("http://localhost:5000/api/contacts", { info });
    console.log(info);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label>Name</label>
        <br />
        <input
          name="name"
          type="text"
          placeholder="Enter your full name"
          value={name}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          name="email"
          type="email"
          required
          value={email}
          //   onChange={handleChange}
        />
        <br />
        <label>Project</label>
        <br />
        <select value={project}>
          <option value="website">Website</option>
          <option value="app">Mobile App</option>
          <option value="websiteAndApp">Website and Mobile App</option>
          <option selected value="website">
            Website
          </option>
        </select>
        <br />
        <label>Description</label>
        <br />
        <textarea value={description}></textarea>
        <br />
        <label>&#36;Budget</label>
        <br />
        <input
          name="budget"
          type="number"
          value={budget}
          //   onChange={handleChange}
        />
        <br />
        <br />
        <label>Timeline</label>
        <br />
        <input
          name="timeline"
          type="text"
          required
          value={timeline}
          //   onChange={handleChange}
        />
        <br />
        <input className="submitButton" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Contact;
