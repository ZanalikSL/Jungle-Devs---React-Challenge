import * as React from 'react'

function SvgPlayButton(props) {
  return (
    <svg
      width={48}
      height={48}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24z"
        fill="#00A870"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.41 23.05L19.585 14.3c-.258-.15-.368-.3-.663-.3-.406 0-.922.35-.922 1v18c0 .65.516 1 .922 1 .295 0 .405-.15.663-.3l13.825-8.75c.295-.2.59-.4.59-.95 0-.55-.295-.75-.59-.95z"
        fill="#fff"
      />
    </svg>
  )
}

export default SvgPlayButton
