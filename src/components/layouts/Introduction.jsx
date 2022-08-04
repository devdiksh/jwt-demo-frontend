/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { useHistory } from "react-router-dom";
import { ROUTE_PATHS } from "../../routes/routePath";
import { CustomLink } from "../ui/CustomLink";
import NavButton from "../ui/NavButton";

const Introduction = () => {
  const rfcLink = "https://datatracker.ietf.org/doc/html/rfc7519";
  const hmacLink = "https://en.wikipedia.org/wiki/HMAC";

  const history = useHistory()

  return (
    <div>
      <h3 className="Heading">Introduction</h3>
      <p className="Para">
        {`JSON Web Token (JWT) is an open standard `}
        <CustomLink link={rfcLink}>(RFC 7519)</CustomLink>
        {` that defines a
        compact and self-contained way for securely transmitting information
        between parties as a JSON object. This information can be verified and
        trusted because it is digitally signed. JWTs can be signed using a
        secret (with the `}
        <CustomLink link={hmacLink}>HMAC</CustomLink>
        {` algorithm) or a public/private key pair using RSA
        or ECDSA.`}
      </p>
      <p className="Para">
        {`Although JWTs can be encrypted to also provide secrecy between parties,
        we will focus on signed tokens. Signed tokens can verify the integrity
        of the claims contained within it, while encrypted tokens hide those
        claims from other parties. When tokens are signed using public/private
        key pairs, the signature also certifies that only the party holding the
        private key is the one that signed it.`}
      </p>
      <NavButton handleClick={() => {history.push(ROUTE_PATHS.WORKING)}}>{`Working ->`}</NavButton>
    </div>
  );
};

export default Introduction;
