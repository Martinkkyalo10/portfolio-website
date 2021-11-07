import React, { useState } from "react";
import axios from "axios";

function OrderScreen(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [description, setDescription] = useState("");

  // handle submit
  function handleSubmit(e) {
    const orderDetails = {
      // name: name,
      // email: email,
      // project: project,
      // budget: budget,
      // timeline: timeline,
      // description: description,
    };
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/orders", {
        name,
        email,
        project,
        budget,
        timeline,
        description,
      })
      .then(function (response) {
        console.log(name, email, project, budget, timeline, description);
      });
    // .catch(function (err) {
    //   console.log(error);
    // });
  }

  return (
    <div className="container-fluid row justify-content-md-center">
      <form onSubmit={handleSubmit} className="form-group">
        <div className="form-group">
          <label>Name</label>
          <br />
          <input
            className="form-control"
            name="name"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Email</label>
          <br />
          <input
            className="form-control"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Project</label>
          <br />
          <select
            className="form-control"
            value={project}
            onChange={(e) => setProject(e.target.value)}
          >
            <option value="website">Website</option>
            <option value="app">Mobile App</option>
            <option value="websiteAndApp">Website and Mobile App</option>
          </select>
        </div>
        <br />
        <div className="form-group">
          <label>Description</label>
          <br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control z-depth-1"
            id="exampleFormControlTextarea6"
            rows="3"
            placeholder="Tell us more about your project"
          ></textarea>
        </div>
        <br />
        <div className="form-group">
          <label>&#36;Budget</label>
          <br />
          <input
            className="form-control"
            type="Number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Timeline</label>
          <br />
          <input
            className="form-control"
            type="text"
            required
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
          />
        </div>
        <br />
        <div className="form-group">
          <input className="submitButton" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default OrderScreen;
