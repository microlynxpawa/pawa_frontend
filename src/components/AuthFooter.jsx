import React from "react";

export default function AuthFooter() {
  return (
    <React.Fragment>
      <footer class="footer footer-alt">
        {new Date().getFullYear()} © PAWA Limited - pawaonline.co
      </footer>
    </React.Fragment>
  );
}
