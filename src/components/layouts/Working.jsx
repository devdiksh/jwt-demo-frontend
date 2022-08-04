/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { verificationImage } from "../../assets";
import { CustomLink } from "../ui/CustomLink";

const Working = () => {
  const rfcLink = "https://datatracker.ietf.org/doc/html/rfc7519";
  const hmacLink = "https://en.wikipedia.org/wiki/HMAC";

  return (
    <div>
      <h3 className="Heading">Structure of JWT</h3>
      <p className="Para">
        In its compact form, JSON Web Tokens consist of three parts separated by
        dots (.), which are:
      </p>
      <span style={{ fontSize: "5vmin", margin: "0" }} className="Jwt-text-red">
        header
      </span>
      <span style={{ fontSize: "5vmin", margin: "0" }} className="Jwt-text-white">
        .
      </span>
      <span style={{ fontSize: "5vmin", margin: "0" }} className="Jwt-text-violet">
        payload
      </span>
      <span style={{ fontSize: "5vmin", margin: "0" }} className="Jwt-text-white">
        .
      </span>
      <span style={{ fontSize: "5vmin", margin: "0" }} className="Jwt-text-blue">
        signature
      </span>
    </div>
  );
};

export default Working;
