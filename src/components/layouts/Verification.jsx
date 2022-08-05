import React from "react";
import { hmacEx } from "../../assets";

const Verification = () => {
  return (
    <div>
      <h3 className="Heading">JWT Signing and Verification</h3>
      <div className="Para">
        <h4 className="Para Para-green Para-bigger">Signing Algorithms</h4>
        <span className="Para">
          Most JWTs in the wild are just signed. The most common algorithms are:
        </span>

        <div style={{ marginBottom: "10vh" }}>
          <p className="Para Para-blue">HMAC + SHA256</p>
          <p className="Para Para-blue">RSASSA-PKCS1-v1_5 + SHA256</p>
          <p className="Para Para-blue">ECDSA + P-256 + SHA256</p>
        </div>

        <h5 className="Para Para-purple Para-medium">HMAC algorithm</h5>

        <p className="Para">
          This is probably the most common algorithm for signed JWTs.
        </p>
        <p className="Para">
          Hash-Based Message Authentication Codes (HMACs) are a group of
          algorithms that provide a way of signing messages by means of a shared
          key. In the case of HMACs, a cryptographic hash function is used (for
          instance SHA256). The strength (i.e. how hard it is to forge an HMAC)
          depends on the hashing algorithm being used.
        </p>

        <img
          style={{
            width: "60vw",
            height: "auto",
          }}
          src={hmacEx}
          alt="hmac"
        ></img>
      </div>

      <div style={{ marginTop: "10vh" }} className="Para">
        <h4 className="Para Para-green Para-bigger">Verification</h4>
        <div className="Para">
          In Order to verify the JWT, we must
          <span className="Para Para-blue">
            {" recalculate the signature with our private signing key "}{" "}
          </span>
          and compare the signature part of the JWT by ourself.
        </div>

        <p className="Para">
          If the Signature matches in recieved and calulated JWT, the JWT is
          verified successfully. Otherwise we can assume that someone has
          tampered with the signature of the JWT and invalidate that Token.
        </p>
      </div>
    </div>
  );
};

export default Verification;
