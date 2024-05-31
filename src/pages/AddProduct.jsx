import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PageTitle from "../components/PageTitle";
import AddProductForm from "../components/products/AddProductsForm";
import Footer from "../components/Footer";

export default function AddProduct() {
  return (
    <React.Fragment>
      <Navbar />
      <div class="container-fluid sidebarBody">
        <div class="wrapper">
          <Sidebar />
          <div class="content-page">
            <div class="content">
              <PageTitle title={"Add Product"} />
              <AddProductForm />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
