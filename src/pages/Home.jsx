import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <h1 className="appLoader mySpinner">WELCOME</h1>
      <h3>
        Before getting to the home page, decisions should be made on a token to
        be return after login is successful. And also how to store this token at
        the frontend for usage. Token can be an object encrypting user info like
        BANKID, email.... More importantly token expiry time on the frontend to
        automatically logout user after expiration.
      </h3>
    </React.Fragment>
  );
}
