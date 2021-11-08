import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import axios from "axios";
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

function AddPortfolio(props) {
  const [category, setCategory] = useState("");
  const [client, setClient] = useState("");
  const [date, setDate] = useState(new Date());
  const [url, setUrl] = useState("");
  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState("");

  // handle submit
  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/projects", {
        category,
        client,
        date,
        url,
        tittle,
        description,
        files,
      })
      .then(function (response) {
        console.log(category, client, date, url, tittle, description, files);
      });
    // .catch(function (err) {
    //   console.log(error);
    // });
  }
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="container-fluid row justify-content-md-center">
        <h3>Project Information</h3>
        <form onSubmit={handleSubmit} className="form-group">
          <div className="form-group">
            {/* category */}
            <label>Category</label>
            <br />
            <select
              className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="website">Website</option>
              <option value="app">Mobile App</option>
              <option value="websiteAndApp">Website and Mobile App</option>
            </select>
          </div>
          <br />

          {/* client */}
          <div className="form-group">
            <label>Client</label>
            <br />
            <input
              className="form-control"
              name="client"
              type="text"
              required
              value={client}
              onChange={(e) => setClient(e.target.value)}
            />
          </div>
          <br />

          {/* completion date */}
          <div className="form-group">
            <label>Date</label>
            <br />
            <DatePicker
              value={date}
              onChange={setDate}
              autoOk
              inputVariant="outlined"
              variant="inline"
              emptyLabel="Select Date"
              openTo="year"
              format="MMM dd yyyy"
              disablePast
            />
          </div>
          <br />

          {/* <div
          id="date-picker-example"
          className="md-form md-outline input-with-post-icon datepicker"
        >
          <input
            placeholder="Select date"
            type="text"
            id="example"
            className="form-control"
          />
          <label for="example">Select Dates</label>
          <i className="fas fa-calendar input-prefix" tabindex="0"></i>
        </div> */}
          <br />

          {/* project title */}
          <div className="form-group">
            <label>Tittle</label>
            <br />
            <input
              className="form-control"
              name="tittle"
              type="text"
              value={tittle}
              onChange={(e) => setTittle(e.target.value)}
            />
          </div>
          <br />

          {/* description */}
          <div className="form-group">
            <label>Description</label>
            <br />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-control z-depth-1"
              id="exampleFormControlTextarea6"
              rows="3"
              placeholder="Add project details"
            />
          </div>
          <br />

          {/* images */}
          <div className="form-group">
            <label className="form-label">Add Files</label>
            <br />
            <input
              className="form-control"
              name="files"
              type="file"
              id="formFileMultiple"
              multiple
              value={files}
              onChange={(e) => setFiles(e.target.value)}
            />
          </div>
          <br />

          {/* project URL */}
          <div className="form-group">
            <label className="form-label">URL</label>
            <br />
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              className="submitButton"
              variant="raised"
              color="primary"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default AddPortfolio;
