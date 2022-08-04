/* eslint-disable react/jsx-no-target-blank */
import React, { useRef, useState } from "react";
import { headerEx, payloadEx, signatureEx } from "../../assets";


const JwtDot = () => {
  return (
    <span style={{ fontSize: "5vmin", margin: "0" }} className="Jwt-text-white">
      .
    </span>
  );
};

const JwtPart = ({ part, setPart, selectedPart }) => {
  return (
    <span
      onClick={() => setPart(part)}
      style={{
        fontSize: selectedPart === part ? "6vmin" : "5vmin",
        opacity:
          selectedPart !== part && selectedPart !== null
            ? 0.2
            : selectedPart === null
            ? 0.7
            : 1,
        margin: "0",
      }}
      className={`${
        (part === "header" && "Jwt-text-red") ||
        (part === "payload" && "Jwt-text-violet") ||
        (part === "signature" && "Jwt-text-blue")
      } Jwt-part`}
    >
      {part}
    </span>
  );
};

const JwtExamplePart = ({ part, type, restrict = false }) => {
  return (
    <span
      style={{
        fontSize: "4vmin",
        opacity: 0.8,
        margin: "0",
        width: restrict ? "60vw" : "100%",
      }}
      className={`${
        (type === "header" && "Jwt-text-red") ||
        (type === "payload" && "Jwt-text-violet") ||
        (type === "signature" && "Jwt-text-blue")
      } Jwt-part`}
    >
      {part}
    </span>
  );
};

const JwtParts = ({ setPart, selectedPart }) => {
  return (
    <div style={{ margin: "5vh 0 10vh 0" }}>
      <JwtPart part={"header"} selectedPart={selectedPart} setPart={setPart} />
      <JwtDot />
      <JwtPart part={"payload"} selectedPart={selectedPart} setPart={setPart} />
      <JwtDot />
      <JwtPart
        part={"signature"}
        selectedPart={selectedPart}
        setPart={setPart}
      />
    </div>
  );
};

const JwtExample = ({ header, payload, signature }) => {
  return (
    <div>
      <p style={{ fontSize: "5vmin" }} className="Para">
        Example
      </p>
      <div
        style={{
          width: "50vw",
          margin: "auto",
        }}
      >
        <JwtExamplePart part={header} type="header" />
        <JwtDot />
        <JwtExamplePart part={payload} type="payload" />
        <JwtDot />
        <JwtExamplePart part={signature} type="signature" />
      </div>
    </div>
  );
};

const JwtExplain = ({
  selectedPart,
  reference,
  header,
  payload,
  signature,
}) => {
  return (
    <div ref={reference}>
      {selectedPart === "header" && (
        <div style={{ marginBottom: "10vh" }}>
          <JwtExamplePart restrict part={header} type="header" />
          <p className="Para Jwt-Example">
            The header typically consists of two parts: the type of the token,
            which is JWT, and the algorithm that is used, such as HMAC SHA256 or
            RSA SHA256. It is Base64Url encoded to form the first part of the
            JWT.
          </p>
          <img
            src={headerEx}
            style={{
              width: "60vw",
              height: "auto",
            }}
            alt="header-example"
          />
        </div>
      )}
      {selectedPart === "payload" && (
        <div style={{ marginBottom: "10vh" }}>
          <JwtExamplePart restrict part={payload} type="payload" />
          <p className="Para Jwt-Example">
            The payload contains the claims. There is a set of registered
            claims, for example: iss (issuer), exp (expiration time), sub
            (subject), and aud (audience). These claims are not mandatory but
            recommended to provide a set of useful, interoperable claims. The
            payload can also include extra attributes that define custom claims,
            such as employee role. The payload is Base64Url encoded to form the
            second part of the JWT.
          </p>
          <img
            src={payloadEx}
            style={{
              width: "60vw",
              height: "auto",
            }}
            alt="payload-example"
          />
        </div>
      )}
      {selectedPart === "signature" && (
        <div style={{ marginBottom: "10vh" }}>
          <JwtExamplePart restrict part={signature} type="signature" />
          <p className="Para Jwt-Example">
            To create the signature part, the encoded header and encoded payload
            are signed by using the signature algorithm from the header. The
            signature is used to verify that the issuer of the JWT is who it
            says it is and to ensure that the message wasn't changed along the
            way.
          </p>
          <img
            src={signatureEx}
            style={{
              width: "60vw",
              height: "auto",
            }}
            alt="signature-example"
          />
        </div>
      )}
    </div>
  );
};

const Structure = () => {
  const [selectedPart, setSelectedPart] = useState(null);
  const selectedPartRef = useRef(null);

  const header = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
  const payload =
    "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkRlZWtzaGFudCBNYWx2aSIsImlhdCI6MTUxNjIzOTAyMn0";
  const signature = "tsbrrT76FD2dc797ymcIDZbfbIMZldBDN0ele4VlqRA";

  const setPart = (part) => {
    if (selectedPart === part) {
      setSelectedPart(null);
    } else {
      selectedPartRef.current &&
        selectedPartRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });

      setSelectedPart(part);
    }
  };

  return (
    <div>
      <h3 className="Heading">Structure of JWT</h3>
      <p className="Para">
        In its compact form, JSON Web Tokens consist of three parts separated by
        dots (.), which are:
      </p>
      <JwtParts setPart={setPart} selectedPart={selectedPart} />
      {!selectedPart && (
        <JwtExample header={header} payload={payload} signature={signature} />
      )}

      <JwtExplain
        header={header}
        payload={payload}
        signature={signature}
        reference={selectedPartRef}
        selectedPart={selectedPart}
      />
    </div>
  );
};

export default Structure;
