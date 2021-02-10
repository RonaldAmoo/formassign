import React from "react";
class Form extends React.Component {
  constructor() {
    super();
    //Email and Password state is defined
    this.state = {
      email: "",
      password: "",
    };
  }
  //Method called when onChange is triggered for email input
  handleChange = (event) => {
    //change the current state to whatever is in the email input
    this.setState({
      email: event.target.value,
    });
  };
  //Method called when onChange is triggered for password input
  handlePasswordChange = (e) => {
    //change the current state to whatever is in the password input
    this.setState({
      password: e.target.value,
    });
  };
  //Method called when form is submitted
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <form
        onSubmit={(e) => {
          this.handleSubmit(e);
        }}
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => this.handleChange(e)}
            value={this.state.email}
          />
          <div id="emailHelp" className="form-text">
            We keep your email confidential
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={this.state.password}
            onChange={(e) => this.handlePasswordChange(e)}
          />
        </div>
        <button type="submit" className="btn btn-warning">
          Submit
        </button>
      </form>
    );
  }
}
export default Form;
