import * as React from 'react'
const Virus = ({ fill, ...restProps }) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' {...restProps}>
    <path
      d='M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v11.5c0 49.9-60.3 74.9-95.6 39.6l-8.2-8.1C107.7 62.5 87.5 62.5 75 75s-12.5 32.8 0 45.3l8.2 8.2c35.2 35.2 10.2 95.5-39.7 95.5H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h11.5c49.9 0 74.9 60.3 39.6 95.6l-8.1 8.2c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l8.2-8.2c35.3-35.3 95.6-10.3 95.6 39.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32v-11.5c0-49.9 60.3-74.9 95.6-39.6l8.2 8.2c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-8.2-8.2c-35.3-35.3-10.3-95.6 39.6-95.6H480c17.7 0 32-14.3 32-32s-14.3-32-32-32h-11.5c-49.9 0-74.9-60.3-39.6-95.6l8.2-8.2c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-8.2 8.2C348.3 118.4 288 93.4 288 43.5V32zM176 224a48 48 0 1 1 96 0 48 48 0 1 1-96 0zm128 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z'
      fill={fill}
    />
  </svg>
)
export default Virus
