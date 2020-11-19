import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";
import { Consumer } from "../../Context";
export default class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
  };
  state = {
    showContactInfo: false,
  };
  onShowClick = e => {
    this.setState({
      showContactInfo: !this.state.showContactInfo,
    });
  };
  onDelete = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
      type: "DELETE_CONTACT",
      payload: id,
    });
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                  onClick={this.onShowClick}
                ></i>
                <i
                  className="fas fa-trash"
                  style={{ float: "right", cursor: "pointer", color: "red" }}
                  onClick={() => {
                    this.onDelete(id, dispatch);
                  }} // hena e7na han2asar 3ala el state el parent 3an tare2 method fa haneb3atlo fe onDelete
                  //method 3an taree2 tab3an el prop we hwa hayesta2belha fe function tanya beythandel el delete
                ></i>
                <Link to={`/contact/edit/${id}`}>
                  <i
                    style={{
                      float: "right",
                      marginRight: "1rem",
                      color: "blue",
                      cursor: "pointer",
                    }}
                    className="fas fa-edit"
                  ></i>
                </Link>
              </h4>
              {this.state.showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
