import * as React from 'react'

const HatWizard = ({ fill, ...restProps }) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' {...restProps}>
    <path
      d='m64 416 104.6-235.3c15.3-34.4 40.3-63.5 72-83.7L387.5 3c3-1.9 6.5-2.9 10-2.9C407.7 0 416 8.3 416 18.6v1.6c0 2.6-.5 5.1-1.4 7.5l-59.8 149.2c-1.9 4.7-2.8 9.7-2.8 14.7 0 5.5 1.2 11 3.4 16.1L448 416H240.9l11.8-35.4 40.4-13.5c6.5-2.2 10.9-8.3 10.9-15.2s-4.4-13-10.9-15.2l-40.4-13.5-13.5-40.4c-2.2-6.4-8.3-10.8-15.2-10.8s-13 4.4-15.2 10.9l-13.5 40.4-40.4 13.5c-6.5 2.2-10.9 8.3-10.9 15.2s4.4 13 10.9 15.2l40.4 13.5 11.8 35.3H64zm215.6-274.5c-1.1-3.3-4.1-5.5-7.6-5.5s-6.5 2.2-7.6 5.5l-6.7 20.2-20.2 6.7c-3.3 1.1-5.5 4.1-5.5 7.6s2.2 6.5 5.5 7.6l20.2 6.7 6.7 20.2c1.1 3.3 4.1 5.5 7.6 5.5s6.5-2.2 7.6-5.5l6.7-20.2 20.2-6.7c3.3-1.1 5.5-4.1 5.5-7.6s-2.2-6.5-5.5-7.6l-20.2-6.7-6.7-20.2zM32 448h448c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z'
      fill={fill}
    />
  </svg>
)
export default HatWizard