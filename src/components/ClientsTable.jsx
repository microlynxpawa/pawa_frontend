import React, { useState } from 'react';
import Modal from './Modal';
import User1 from "../assets/images/avatar-1.jpg";


export default function ClientsTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsToDisplay, setItemsToDisplay] = useState(5); // Default number of items to display

  const products = [
    {
      id: 1,
      name: 'Cardan Armchair',
      category: 'Plastic Armchair',
      date: '08/02/2018',
      price: '$59.69',
      quantity: 26,
      status: 'Active',
      img: User1,
    },
    {
      id: 2,
      name: 'Bootecos Plastic Armchair',
      category: 'Wing Chairs',
      date: '07/15/2018',
      price: '$148.66',
      quantity: 485,
      status: 'Deactive',
      img: User1,
    },
    {
      id: 3,
      name: 'Adirondack Chair',
      category: 'Aeron Chairs',
      date: '07/07/2018',
      price: '$65.94',
      quantity: 652,
      status: 'Active',
      img: User1,
    },
    {
      id: 4,
      name: 'Bean Bag Chair',
      category: 'Wooden Chairs',
      date: '06/30/2018',
      price: '$99',
      quantity: 1021,
      status: 'Deactive',
      img: User1,
    },
    {
      id: 1,
      name: 'Cardan Armchair',
      category: 'Plastic Armchair',
      date: '08/02/2018',
      price: '$59.69',
      quantity: 26,
      status: 'Active',
      img: User1,
    },
    {
      id: 2,
      name: 'Bootecos Plastic Armchair',
      category: 'Wing Chairs',
      date: '07/15/2018',
      price: '$148.66',
      quantity: 485,
      status: 'Deactive',
      img: User1,
    },
    {
      id: 3,
      name: 'Adirondack Chair',
      category: 'Aeron Chairs',
      date: '07/07/2018',
      price: '$65.94',
      quantity: 652,
      status: 'Active',
      img: User1,
    },
    {
      id: 4,
      name: 'Bean Bag Chair',
      category: 'Wooden Chairs',
      date: '06/30/2018',
      price: '$99',
      quantity: 1021,
      status: 'Deactive',
      img: User1,
    },
  ];

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleItemsToDisplayChange = (event) => {
    setItemsToDisplay(parseInt(event.target.value));
  };

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm)
    )
    .slice(0, itemsToDisplay);

  return (
    <React.Fragment>
      <div className="content-page">
        <div className="content">
          {/* start page title */}
          <div className="row">
            <div className="col-12">
              <div className="page-title-box">
                <h4 className="page-title">Products</h4>
              </div>
            </div>
          </div>
          {/* end page title */}
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="row mb-2">
                    <div className="col-sm-5">
                      <a href="/login" className="btn btn-primary mb-2"> Add Client</a>
                    </div>
                    <div className="col-sm-7">
                      <div className="text-sm-end">
                        <button type="button" className="btn btn-light mb-2 me-1">Add Business Client</button>
                      </div>
                    </div>
                    {/* end col*/}
                  </div>

                  <div className="row mb-2">
                    <div className="col-sm-5">
                      <a href="javascript:void(0);" className="mb-2">Display
                        <select id="inputState" className="ps-2 m-1 rounded" onChange={handleItemsToDisplayChange}>
                          <option value="1">1</option>
                          <option value="5">5</option>
                          <option value="10">10</option>
                          <option value="15">15</option>
                        </select>
                        Products</a>
                    </div>
                    <div className="col-sm-7">
                      <div className="text-sm-end">
                        <input
                          type="text"
                          className="mb-2 me-1"
                          placeholder="Search"
                          value={searchTerm}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    {/* end col*/}
                  </div>

                  <div className="table-responsive">
                    <table className="table table-centered w-100 dt-responsive nowrap" id="products-datatable">
                      <thead className="table-light">
                        <tr>
                          <th className="all" style={{ width: 20 }}>
                            <div className="form-check">
                              <input type="checkbox" className="form-check-input" id="customCheck1" />
                              <label className="form-check-label" htmlFor="customCheck1">&nbsp;</label>
                            </div>
                          </th>
                          <th className="all">Clients</th>
                          <th>Category</th>
                          <th>Added Date</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Status</th>
                          <th style={{ width: 85 }}>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredProducts.map((product) => (
                          <tr key={product.id}>
                            <td>
                              <div className="form-check">
                                <input type="checkbox" className="form-check-input" id={`customCheck${product.id}`} />
                                <label className="form-check-label" htmlFor={`customCheck${product.id}`}>&nbsp;</label>
                              </div>
                            </td>
                            <td>
                              <img src={product.img} alt="contact-img" title="contact-img" className="rounded me-3" height={48} />
                              <p className="m-0 d-inline-block align-middle font-16">
                                <a href="apps-ecommerce-products-details.html" className="text-body">{product.name}</a>
                                <br />
                              </p>
                            </td>
                            <td>{product.category}</td>
                            <td>{product.date}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>
                              <span className={`badge ${product.status === 'Active' ? 'bg-success' : 'bg-danger'}`}>
                                {product.status}
                              </span>
                            </td>
                            <td className="table-action">
                              <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-eye" /></a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div> {/* end card-body*/}
              </div> {/* end card*/}
            </div> {/* end col */}
          </div>
          {/* end row */}
        </div> {/* End Content */}
      </div> {/* content-page */}
    </React.Fragment>
  );
}
