import React from "react";
import { accessAndRefreshEx } from "../../assets";
import { CustomLink } from "../ui/CustomLink";

const Strategy = () => {
  return (
    <div>
      <h3 className="Heading">Access Token & Refresh Token</h3>
      <p className="Para">
        <span className="Para Para-green Para-bigger"> Access Token </span>
        <span className="Para">
          contains all the information the server needs to know if the user /
          device can access the resource you are requesting or not. They are
          usually expired tokens with a short validity period.
        </span>
      </p>

      <p className="Para">
        <span className="Para Para-blue Para-bigger"> Refresh token </span>
        <span className="Para">
          is used to generate a new access token. Typically, if the access token
          has an expiration date, once it expires, the user would have to
          authenticate again to obtain an access token. With refresh token, this
          step can be skipped and with a request to the API get a new access
          token that allows the user to continue accessing the application
          resources.
        </span>
      </p>

      <img
        style={{
          width: "60vw",
          height: "auto",
        }}
        src={accessAndRefreshEx}
        alt="Access and Refresh"
      ></img>
    </div>
  );
};

export default Strategy;
