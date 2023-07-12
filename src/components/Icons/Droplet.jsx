import * as React from 'react'

const Droplet = ({ fill, ...restProps }) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512' {...restProps}>
    <path
      d='M192 512C86 512 0 426 0 320 0 228.8 130.2 57.7 166.6 11.7c6-7.5 14.9-11.7 24.5-11.7h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112 8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z'
      fill={fill}
    />
  </svg>
)
export default Droplet
