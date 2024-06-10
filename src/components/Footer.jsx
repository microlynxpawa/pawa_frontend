import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      <footer class="footer footerZ">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
              <script>{new Date().getFullYear()}</script>© Hyper -
              Coderthemes.com
            </div>
            <div class="col-md-6">
              <div class="text-md-end footer-links d-none d-md-block">
                <a href="javascript: void(0);">About</a>
                <a href="javascript: void(0);">Support</a>
                <a href="javascript: void(0);">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
