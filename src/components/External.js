import React from "react";
export default function External({ href, children, ...props }) {
  return (
    <a href={href} {...props}>
      {children}
      <span aria-hidden="true"> ↗</span>
    </a>
  );
}
