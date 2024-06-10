import React, { Component } from "react";
import { listAllClients } from "../../services/api.calls/clients.service";

export default class AllClientListing extends Component {
  state = {
    searchQuery: "",
    selectedValue: "10",
    clients: [],
  };
  async componentDidMount() {
    const { data: clients } = await listAllClients();
    this.setState({ clients });
  }

  handleInputChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  getFilteredClients() {
    const { searchQuery, clients } = this.state;
    return clients.filter((client) =>
      client.ClientName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  handleSelectChange = (event) => {
    this.setState({ selectedValue: event.target.value }, () => {
      console.log(this.state.selectedValue);
    });
  };

  render() {
    const filteredClients = this.getFilteredClients();
    const { selectedValue } = this.state;
    let displayedClients;
    if (selectedValue === "all") {
      displayedClients = filteredClients;
    } else {
      displayedClients = filteredClients.slice(0, parseInt(selectedValue, 10));
    }
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row mb-2">
                  <div className="col-xl-6">
                    <form className="row gy-2 gx-2 align-items-center justify-content-xl-start justify-content-between">
                      <div className="col-auto">
                        <label
                          htmlFor="inputPassword2"
                          className="visually-hidden"
                        >
                          Search
                        </label>
                        <input
                          type="search"
                          className="form-control"
                          id="inputPassword2"
                          placeholder="Search clients..."
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div className="col-auto">
                        <div className="d-flex align-items-center">
                          <label htmlFor="status-select" className="me-2">
                            Display
                          </label>
                          <select
                            className="form-select"
                            id="status-select"
                            value={selectedValue}
                            onChange={this.handleSelectChange}
                          >
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="all">All</option>
                          </select>
                          <label
                            htmlFor="status-select"
                            style={{ marginLeft: "10px" }}
                            className="me-2"
                          >
                            {"   "} Clients
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-xl-6">
                    <div className="text-xl-end mt-xl-0 mt-2">
                      <button
                        onClick={() => (window.location = "/add-client")}
                        type="button"
                        className="btn btn-danger mb-2 me-2"
                      >
                        <i class="mdi mdi-account-plus"></i> Add New Client
                      </button>
                      <button
                        onClick={() =>
                          (window.location = "/add-business-client")
                        }
                        type="button"
                        className="btn btn-danger mb-2 me-2"
                      >
                        <i class="mdi mdi-account-multiple-plus"></i> Add
                        Corporate Client
                      </button>
                      {/* <button type="button" className="btn btn-light mb-2">
                        Export
                      </button> */}
                    </div>
                  </div>
                </div>

                <div className="table-responsive">
                  <table className="table table-centered table-nowrap mb-0">
                    <thead className="table-light">
                      <tr>
                        <th style={{ width: "20px" }}>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck1"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </th>
                        <th>Client ID</th>

                        <th>Client Name</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>Mobile Number</th>
                        <th>Transaction Status</th>
                        <th style={{ width: "125px" }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {displayedClients.map(
                        ({
                          ClientId,
                          ClientName,
                          Title,
                          Gender,
                          Nationality,
                          HomeAddress,
                          MobileNumber,
                        }) => (
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="customCheck2"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customCheck2"
                                >
                                  &nbsp;
                                </label>
                              </div>
                            </td>
                            <td>
                              <a
                                href="apps-ecommerce-orders-details.html"
                                className="text-body fw-bold"
                              >
                                {ClientId}
                              </a>{" "}
                            </td>
                            <td>
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <div className="flex-shrink-0">
                                    <img
                                      src={
                                        "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                                      }
                                      className="rounded-circle avatar-xs"
                                      alt="friend"
                                    />
                                  </div>
                                  <div className="flex-grow-1 ms-2">
                                    <h5 className="my-0">
                                      {Title} {ClientName}
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>{Gender}</td>
                            <td>
                              <h5 className="my-0">{Nationality}</h5>
                              <p className="mb-0 txt-muted">{HomeAddress}</p>
                            </td>
                            <td>{MobileNumber}</td>
                            <td>
                              <h5 className="my-0">
                                <span className="badge badge-info-lighten">
                                  In Progress
                                </span>
                              </h5>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="action-icon"
                                onClick={() => alert("Editing")}
                              >
                                {" "}
                                <i className="mdi mdi-square-edit-outline"></i>
                              </a>
                              <a
                                href="#"
                                className="action-icon"
                                onClick={() => alert("Deleting")}
                              >
                                {" "}
                                <i className="mdi mdi-delete"></i>
                              </a>
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
