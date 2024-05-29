import React from "react";

export default function Sidebar() {
  return (
    <React.Fragment>
<div className="leftside-menu leftside-menu-detached">
  <div className="leftbar-user">
    {/* <a href="javascript: void(0);">
  <img src="assets/images/users/avatar-1.jpg" alt="user-image" height="42" class="rounded-circle shadow-sm">
  <span class="leftbar-user-name">Dominic Keller</span>
    </a> */}
    {/* <div class="img-container">
  <img src="/assets/images/Pawa-logo-removebg.png" alt="">
    </div> */}
  </div>
  {/*- Sidemenu */}
  <ul className="side-nav">
    <li className="side-nav-title side-nav-item">Navigation</li>
    <li className="side-nav-item">
      <a data-bs-toggle="collapse" href="./pages/page2.html" aria-expanded="false" aria-controls="sidebarDashboards" className="side-nav-link">
        <i className="-home-alt" />
        <span className="badge bg-info rounded-pill float-end">4</span>
        <span> Dashboards </span>
      </a>
      <div className="collapse" id="sidebarDashboards">
        <ul className="side-nav-second-level">
          <li>
            <a href>Analytics</a>
          </li>
          <li>
            <a href="./pages/page2.html">Ecommerce</a>
          </li>
          <li>
            <a href="dashboard-projects.html">Projects</a>
          </li>
          <li>
            <a href="dashboard-wallet.html">E-Wallet <span className="badge rounded bg-danger font-10 float-end">New</span></a>
          </li>
        </ul>
      </div>
    </li>
    <li className="side-nav-title side-nav-item">Apps</li>
    <li className="side-nav-item">
      <a href="apps-calendar.html" className="side-nav-link">
        <i className="-calender" />
        <span> Calendar </span>
      </a>
    </li>
    <li className="side-nav-item">
      <a href="apps-chat.html" className="side-nav-link">
        <i className="-comments-alt" />
        <span> Chat </span>
      </a>
    </li>
    <li className="side-nav-item">
      <a data-bs-toggle="collapse" href="#sidebarCrm" aria-expanded="false" aria-controls="sidebarCrm" className="side-nav-link">
        <i className=" -tachometer-fast" />
        <span className="badge bg-danger text-white float-end">New</span>
        <span> CRM </span>
      </a>
      <div className="collapse" id="sidebarCrm">
        <ul className="side-nav-second-level">
          <li>
            <a href="crm-dashboard.html">Dashboard</a>
          </li>
          <li>
            <a href="crm-projects.html">Project</a>
          </li>
          <li>
            <a href="crm-orders-list.html">Orders List</a>
          </li>
          <li>
            <a href="crm-clients.html">Clients</a>
          </li>
          <li>
            <a href="crm-management.html">Management</a>
          </li>
        </ul>
      </div>
    </li>
    <li className="side-nav-item">
      <a data-bs-toggle="collapse" href="#sidebarEcommerce" aria-expanded="false" aria-controls="sidebarEcommerce" className="side-nav-link">
        <i className="-store" />
        <span> Ecommerce </span>
        <span className="menu-arrow" />
      </a>
      <div className="collapse" id="sidebarEcommerce">
        <ul className="side-nav-second-level">
          <li>
            <a href="apps-ecommerce-products.html">Products</a>
          </li>
          <li>
            <a href="apps-ecommerce-products-details.html">Products Details</a>
          </li>
          <li>
            <a href="apps-ecommerce-orders.html">Orders</a>
          </li>
          <li>
            <a href="apps-ecommerce-orders-details.html">Order Details</a>
          </li>
          <li>
            <a href="apps-ecommerce-customers.html">Customers</a>
          </li>
          <li>
            <a href="apps-ecommerce-shopping-cart.html">Shopping Cart</a>
          </li>
          <li>
            <a href="apps-ecommerce-checkout.html">Checkout</a>
          </li>
          <li>
            <a href="apps-ecommerce-sellers.html">Sellers</a>
          </li>
        </ul>
      </div>
    </li>
    <li className="side-nav-item">
      <a data-bs-toggle="collapse" href="#sidebarEmail" aria-expanded="false" aria-controls="sidebarEmail" className="side-nav-link">
        <i className="-envelope" />
        <span> Email </span>
        <span className="menu-arrow" />
      </a>
      <div className="collapse" id="sidebarEmail">
        <ul className="side-nav-second-level">
          <li>
            <a href="apps-email-inbox.html">Inbox</a>
          </li>
          <li>
            <a href="apps-email-read.html">Read Email</a>
          </li>
        </ul>
      </div>
    </li>
    <li className="side-nav-item">
      <a data-bs-toggle="collapse" href="#sidebarProjects" aria-expanded="false" aria-controls="sidebarProjects" className="side-nav-link">
        <i className="-briefcase" />
        <span> Projects </span>
        <span className="menu-arrow" />
      </a>
      <div className="collapse" id="sidebarProjects">
        <ul className="side-nav-second-level">
          <li>
            <a href="apps-projects-list.html">List</a>
          </li>
          <li>
            <a href="apps-projects-details.html">Details</a>
          </li>
          <li>
            <a href="apps-projects-gantt.html">Gantt <span className="badge rounded-pill bg-light text-dark font-10 float-end">New</span></a>
          </li>
          <li>
            <a href="apps-projects-add.html">Create Project</a>
          </li>
        </ul>
      </div>
    </li>
    <li className="side-nav-item">
      <a href="apps-social-feed.html" className="side-nav-link">
        <i className="-rss" />
        <span> Social Feed </span>
      </a>
    </li>
    <li className="side-nav-item">
      <a data-bs-toggle="collapse" href="#sidebarTasks" aria-expanded="false" aria-controls="sidebarTasks" className="side-nav-link">
        <i className="-clipboard-alt" />
        <span> Tasks </span>
        <span className="menu-arrow" />
      </a>
      <div className="collapse" id="sidebarTasks">
        <ul className="side-nav-second-level">
          <li>
            <a href="apps-tasks.html">List</a>
          </li>
          <li>
            <a href="apps-tasks-details.html">Details</a>
          </li>
          <li>
            <a href="apps-kanban.html">Kanban Board</a>
          </li>
        </ul>
      </div>
    </li>
    <li className="side-nav-item">
      <a href="apps-file-manager.html" className="side-nav-link">
        <i className="-folder-plus" />
        <span> File Manager </span>
      </a>
    </li>
    <li className="side-nav-item">
      <a data-bs-toggle="collapse" href="#sidebarForms" aria-expanded="false" aria-controls="sidebarForms" className="side-nav-link">
        <i className="-document-layout-center" />
        <span> Forms </span>
        <span className="menu-arrow" />
      </a>
      <div className="collapse" id="sidebarForms">
        <ul className="side-nav-second-level">
          <li>
            <a href="form-elements.html">Basic Elements</a>
          </li>
          <li>
            <a href="form-advanced.html">Form Advanced</a>
          </li>
          <li>
            <a href="form-validation.html">Validation</a>
          </li>
          <li>
            <a href="form-wizard.html">Wizard</a>
          </li>
          <li>
            <a href="form-fileuploads.html">File Uploads</a>
          </li>
          <li>
            <a href="form-editors.html">Editors</a>
          </li>
        </ul>
      </div>
    </li>
    <li className="side-nav-item">
      <a data-bs-toggle="collapse" href="#sidebarCharts" aria-expanded="false" aria-controls="sidebarCharts" className="side-nav-link">
        <i className="-chart" />
        <span> Charts </span>
        <span className="menu-arrow" />
      </a>
      <div className="collapse" id="sidebarCharts">
        <ul className="side-nav-second-level">
          <li className="side-nav-item">
            <a data-bs-toggle="collapse" href="#sidebarApexCharts" aria-expanded="false" aria-controls="sidebarApexCharts">
              <span> Apex Charts </span>
              <span className="menu-arrow" />
            </a>
            <div className="collapse" id="sidebarApexCharts">
              <ul className="side-nav-third-level">
                <li>
                  <a href="charts-apex-area.html">Area</a>
                </li>
                <li>
                  <a href="charts-apex-bar.html">Bar</a>
                </li>
                <li>
                  <a href="charts-apex-bubble.html">Bubble</a>
                </li>
                <li>
                  <a href="charts-apex-candlestick.html">Candlestick</a>
                </li>
                <li>
                  <a href="charts-apex-column.html">Column</a>
                </li>
                <li>
                  <a href="charts-apex-heatmap.html">Heatmap</a>
                </li>
                <li>
                  <a href="charts-apex-line.html">Line</a>
                </li>
                <li>
                  <a href="charts-apex-mixed.html">Mixed</a>
                </li>
                <li>
                  <a href="charts-apex-pie.html">Pie</a>
                </li>
                <li>
                  <a href="charts-apex-radar.html">Radar</a>
                </li>
                <li>
                  <a href="charts-apex-radialbar.html">RadialBar</a>
                </li>
                <li>
                  <a href="charts-apex-scatter.html">Scatter</a>
                </li>
                <li>
                  <a href="charts-apex-sparklines.html">Sparklines</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="charts-brite.html">Britecharts</a>
          </li>
          <li>
            <a href="charts-chartjs.html">Chartjs</a>
          </li>
          <li>
            <a href="charts-sparkline.html">Sparklines</a>
          </li>
        </ul>
      </div>
    </li>
    <li className="side-nav-item">
      <a data-bs-toggle="collapse" href="#sidebarTables" aria-expanded="false" aria-controls="sidebarTables" className="side-nav-link">
        <i className="-table" />
        <span> Tables </span>
        <span className="menu-arrow" />
      </a>
      <div className="collapse" id="sidebarTables">
        <ul className="side-nav-second-level">
          <li>
            <a href="tables-basic.html">Basic Tables</a>
          </li>
          <li>
            <a href="tables-datatable.html">Data Tables</a>
          </li>
        </ul>
      </div>
    </li>
    <li className="side-nav-item">
      <a data-bs-toggle="collapse" href="#sidebarMaps" aria-expanded="false" aria-controls="sidebarMaps" className="side-nav-link">
        <i className="-location-point" />
        <span> Maps </span>
        <span className="menu-arrow" />
      </a>
      <div className="collapse" id="sidebarMaps">
        <ul className="side-nav-second-level">
          <li>
            <a href="maps-google.html">Google Maps</a>
          </li>
          <li>
            <a href="maps-vector.html">Vector Maps</a>
          </li>
        </ul>
      </div>
    </li>
    <li className="side-nav-item">
      <a data-bs-toggle="collapse" href="#sidebarMultiLevel" aria-expanded="false" aria-controls="sidebarMultiLevel" className="side-nav-link">
        <i className="-folder-plus" />
        <span> Multi Level </span>
        <span className="menu-arrow" />
      </a>
      <div className="collapse" id="sidebarMultiLevel">
        <ul className="side-nav-second-level">
          <li className="side-nav-item">
            <a data-bs-toggle="collapse" href="#sidebarSecondLevel" aria-expanded="false" aria-controls="sidebarSecondLevel">
              <span> Second Level </span>
              <span className="menu-arrow" />
            </a>
            <div className="collapse" id="sidebarSecondLevel">
              <ul className="side-nav-third-level">
                <li>
                  <a href="javascript: void(0);">Item 1</a>
                </li>
                <li>
                  <a href="javascript: void(0);">Item 2</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="side-nav-item">
            <a data-bs-toggle="collapse" href="#sidebarThirdLevel" aria-expanded="false" aria-controls="sidebarThirdLevel">
              <span> Third Level </span>
              <span className="menu-arrow" />
            </a>
            <div className="collapse" id="sidebarThirdLevel">
              <ul className="side-nav-third-level">
                <li>
                  <a href="javascript: void(0);">Item 1</a>
                </li>
                <li className="side-nav-item">
                  <a data-bs-toggle="collapse" href="#sidebarFourthLevel" aria-expanded="false" aria-controls="sidebarFourthLevel">
                    <span> Item 2 </span>
                    <span className="menu-arrow" />
                  </a>
                  <div className="collapse" id="sidebarFourthLevel">
                    <ul className="side-nav-forth-level">
                      <li>
                        <a href="javascript: void(0);">Item 2.1</a>
                      </li>
                      <li>
                        <a href="javascript: void(0);">Item 2.2</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </li>
  </ul>
  {/* End Sidebar */}
  <div className="clearfix" />
  {/* Sidebar -left */}
</div>

    </React.Fragment>
  )
}
