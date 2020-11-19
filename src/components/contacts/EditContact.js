import React, { Component } from "react";
import { Consumer } from "../../Context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";
export default class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    error: {},
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
    const contact = res.data;
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    });
  }

  onSubmit = async (dispatch, e) => {
    const { name, email, phone } = this.state;

    e.preventDefault();
    if (name === "") {
      return this.setState({ error: { name: "Name is Required" } });
    }
    if (email === "") {
      return this.setState({ error: { email: "Email is Required" } });
    }
    if (phone === "") {
      return this.setState({ error: { phone: "Phone is Required" } });
    }

    const updatedContact = {
      name,
      email,
      phone,
    };
    const { id } = this.props.match.params;

    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updatedContact
    );

    dispatch({
      type: "UPDATE_CONTACT",
      payload: res.data,
    });

    this.setState({
      name: "",
      email: "",
      phone: "",
      error: {},
    });
    this.props.history.push("/");
  };
  render() {
    const { name, email, phone, error } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form
                  onSubmit={e => {
                    this.onSubmit(dispatch, e);
                  }}
                >
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter your Name..."
                    value={name}
                    onChange={this.handleChange}
                    error={error.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    placeholder="Enter your Email..."
                    value={email}
                    onChange={this.handleChange}
                    error={error.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter your Phone..."
                    value={phone}
                    onChange={this.handleChange}
                    error={error.phone}
                  />

                  <input
                    id=""
                    className="btn btn-light btn-block"
                    type="submit"
                    value="Edit Contact"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
