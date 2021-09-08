import * as React from 'react'

function SvgFacebook(props) {
  return (
    <svg
      width={47}
      height={47}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M23.5 46C35.926 46 46 35.926 46 23.5S35.926 1 23.5 1 1 11.074 1 23.5 11.074 46 23.5 46z"
        stroke="#DFDFDF"
      />
      <path
        opacity={0.7}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.258 18.047a5.463 5.463 0 00-1.476-.224c-.6 0-1.89.381-1.89 1.122v1.772h3.066v2.985h-3.066v8.235h-3.09v-8.235h-1.52v-2.985h1.52v-1.503c0-2.266 1.061-4.151 3.62-4.151.876 0 2.444.044 3.297.336l-.461 2.648z"
        fill="#3D3D3D"
      />
    </svg>
  )
}

export default SvgFacebook
