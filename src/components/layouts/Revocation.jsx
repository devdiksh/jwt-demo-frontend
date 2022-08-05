import React from "react";
import { revokeEx } from "../../assets";

const Revocation = () => {
  return (
    <div>
      <h3 className="Heading">Hidden Vulnerabilities of JWT</h3>
      <div className="Para">
        <h4 className="Para Para-orange Para-bigger"> Token Revocation </h4>
        <span className="Para">
          One of the most common questions is how to revoke them. The problem is
          that once they are issued, no further communication is needed with the
          identity server.
        </span>

        <p className="Para">
          The fact that JWTs are only stored client-side leads to a fundamental
          disadvantage with JWTs. And that is: how do you revoke a user’s
          access?
        </p>

        <p className="Para">
          Sure, JWTs have an expiry time and this can be as short-lived as you
          like. As soon as the access token expires however, the JWT is invalid
          and the client must re-authenticate with your server. This, of course,
          has a negative effect on the user experience.
        </p>

        <p className="Para">
          But suppose the user intentionally logs out of your system? Or you
          want to kick them out because you fear that security has been
          compromised? You cant: if they still have an unexpired token, they
          still have access.
        </p>

        <div style={{ marginTop: "10vh" }} className="Para">
          <span className="Para Para-blue">JWT blacklist/deny </span>
          is a list of tokens that should no longer grant access to your system.
          Where you maintain this list is up to you.
        </div>

        <p className="Para">
          You could use a traditional database, but a much better approach is to
          use an in-memory data cache, like Redis. An in-memory data cache
          provides much faster and more predictable seek times than data stored
          on disk.
        </p>
        <img
          style={{
            width: "60vw",
            height: "auto",
          }}
          src={revokeEx}
          alt="Token Blacklist"
        ></img>
      </div>

      <div style={{ marginTop: "30vh" }} className="Para">
        <h4 className="Para Para-orange Para-bigger"> Weak Secret for signing </h4>
        <span className="Para">
          This ensures data integrity and robust user authentication. Whenever
          developers use HMAC signatures, they need to provide a secret key,
          which is used for both signing and verifying tokens. If this secret is
          not strong enough, the whole signature can be compromised.
        </span>

        <div style={{ marginTop: "10vh" }} className="Para Para-yellow">
          <span className="Para Para-green">
            {"`{]k_FuJv%6&nR7sdg92SvJj2"}{" "}
          </span>
          is a<span className="Para Para-green">{" strong "} </span>
          secret
        </div>
        <div className="Para Para-yellow">
          <span className="Para Para-red">{"secretkey"} </span>
          is a<span className="Para Para-red">{" weak "} </span>
          secret
        </div>
      </div>
    </div>
  );
};

export default Revocation;
