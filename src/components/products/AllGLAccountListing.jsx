import React, { Component } from "react";
import { listBankGLAccount } from "../../services/api.calls/glaccount.service";
import Moment from "react-moment";

export default class AllGLAccountListing extends Component {
  state = {
    searchQuery: "",
    selectedValue: "10",
    glaccount: [],
  };
  async componentDidMount() {
    const bankId = "B001"; //SHOULD BE RETRIEVED FROM THE LOGGED IN USER
    const { data: glaccount } = await listBankGLAccount({ bankId });
    this.setState({ glaccount });
  }

  handleInputChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  getFilteredGLAccounts() {
    const { searchQuery, glaccount } = this.state;
    return glaccount.filter((gl) =>
      gl.AccountName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  handleSelectChange = (event) => {
    this.setState({ selectedValue: event.target.value }, () => {
      console.log(this.state.selectedValue);
    });
  };

  render() {
    const filteredGLAccounts = this.getFilteredGLAccounts();
    const { selectedValue } = this.state;
    let displayedGLAccounts;
    if (selectedValue === "all") {
      displayedGLAccounts = filteredGLAccounts;
    } else {
      displayedGLAccounts = filteredGLAccounts.slice(
        0,
        parseInt(selectedValue, 10)
      );
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
                          placeholder="Search account name..."
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
                            {"   "} accounts
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-xl-6">
                    <div className="text-xl-end mt-xl-0 mt-2">
                      <button
                        onClick={() => (window.location = "/add-gl-account")}
                        type="button"
                        className="btn btn-danger mb-2 me-2"
                      >
                        <i class="mdi mdi-library-plus"></i> Add New GL Account
                      </button>
                      <button type="button" className="btn btn-light mb-2">
                        Export
                      </button>
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
                        <th>Branch </th>

                        <th>Account ID </th>
                        <th>Account Name</th>
                        <th>Currency</th>
                        <th> Creation Date</th>
                        <th style={{ width: "125px" }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {displayedGLAccounts.map(
                        ({
                          OurBranchId,
                          AccountId,
                          AccountName,
                          Currency,
                          CreatedOn,
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
                                {OurBranchId}
                              </a>{" "}
                            </td>
                            <td>
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <div className="flex-grow-1 ms-2">
                                    <h5 className="my-0">{AccountId}</h5>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>{AccountName}</td>
                            <td>{Currency}</td>

                            <td>
                              <Moment format="YYYY-MM-DD">{CreatedOn}</Moment>
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
