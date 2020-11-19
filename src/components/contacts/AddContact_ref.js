import React, { Component } from "react";

export default class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  submit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
    };
    console.log(contact);
  };
  static defaultProps = {
    name: "Mahmoud",
    email: "mahmouasd@asdasd.com",
    phone: 1232131,
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.submit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id=""
                className="form-control"
                placeholder="Enter Your Name"
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                name="email"
                id=""
                className="form-control "
                placeholder="Enter Your Email"
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                id=""
                className="form-control"
                placeholder="Enter Your phone"
                defaultValue={phone}
                ref={this.phoneInput}
              />
            </div>
            <input
              id=""
              className="btn btn-light btn-block"
              type="submit"
              value="Add Contact"
            />
          </form>
        </div>
      </div>
    );
  }
}
