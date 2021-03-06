import * as React from "react"

const Cursor = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 36 36"
    style={{
      enableBackground: "new 0 0 36 36",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path
      d="M18 .5C27.7.5 35.5 8.3 35.5 18S27.7 35.5 18 35.5.5 27.7.5 18 8.3.5 18 .5z"
      style={{
        fill: "#fff",
      }}
    />
    <path
      d="M18 27.2c-.1 0-.2 0-.3-.1-.1 0-.2-.1-.3-.2l-2.5-2.5c-.3-.3-.3-.9 0-1.2.3-.3.9-.3 1.2 0l1.1 1.1v-5.5h-5.5l1.1 1.1c.3.3.3.9 0 1.2-.3.3-.9.3-1.2 0l-2.5-2.5c-.1-.1-.1-.2-.2-.3 0-.1-.1-.2-.1-.3 0-.1 0-.2.1-.3 0-.1.1-.2.2-.3l2.5-2.5c.3-.3.9-.3 1.2 0 .3.3.3.9 0 1.2l-1.1 1.1h5.5v-5.5l-1.1 1.1c-.3.3-.9.3-1.2 0-.3-.3-.3-.9 0-1.2l2.5-2.5.2-.2c.1 0 .2-.1.3-.1.1 0 .2 0 .3.1.1 0 .2.1.3.2l2.5 2.5c.3.3.3.9 0 1.2-.3.3-.9.3-1.2 0l-1.1-1.1v5.5h5.5l-1.1-1.1c-.3-.3-.3-.9 0-1.2.3-.3.9-.3 1.2 0l2.5 2.5c.1.1.1.2.2.3 0 .1.1.2.1.3 0 .1 0 .2-.1.3 0 .1-.1.2-.2.3l-2.5 2.5c-.3.3-.9.3-1.2 0-.3-.3-.3-.9 0-1.2l1.1-1.1h-5.5v5.5l1.1-1.1c.3-.3.9-.3 1.2 0 .3.3.3.9 0 1.2l-2.5 2.5c-.1.1-.2.1-.3.2 0 0-.1.1-.2.1z"
      style={{
        fill: "#1d2939",
      }}
    />
  </svg>
)

export default Cursor
