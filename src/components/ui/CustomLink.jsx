/* eslint-disable react/jsx-no-target-blank */
import React from "react";

export const CustomLink = ({ link, children }) => {
  return (
    <a href={link} target="_blank" className="Link">
      {children}
    </a>
  );
};
