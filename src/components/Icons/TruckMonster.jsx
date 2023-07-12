import * as React from 'react'

const TruckMonster = ({ fill, ...restProps }) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512' {...restProps}>
    <path
      d='M288 64v64h128l-48-64h-80zm131.2-38.4L496 128h80c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32c-29.2-38.9-75.7-64-128-64s-98.8 25.1-128 64h-64c-29.2-38.9-75.7-64-128-64s-98.8 25.1-128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32v-64c0-17.7 14.3-32 32-32h160V48c0-26.5 21.5-48 48-48h96c20.1 0 39.1 9.5 51.2 25.6zM152 256h16c12.1 0 22.1 8.9 23.8 20.6 7.6 2.2 14.9 5.3 21.7 9 9.4-7 22.8-6.3 31.3 2.3l11.3 11.3c8.6 8.6 9.3 21.9 2.3 31.3 3.7 6.8 6.8 14.1 9 21.7C279 353.9 288 363.9 288 376v16c0 12.1-8.9 22.1-20.6 23.8-2.2 7.6-5.3 14.9-9 21.7 7 9.4 6.3 22.8-2.3 31.3l-11.3 11.3c-8.6 8.6-21.9 9.3-31.3 2.2-6.8 3.7-14.1 6.8-21.7 9-1.7 11.8-11.7 20.7-23.8 20.7h-16c-12.1 0-22.1-8.9-23.8-20.6-7.6-2.2-14.9-5.3-21.7-9-9.4 7.1-22.8 6.3-31.3-2.2l-11.4-11.3c-8.6-8.6-9.3-21.9-2.3-31.3-3.7-6.9-6.8-14.1-9-21.8C40.9 414.1 32 404.1 32 392v-16c0-12.1 8.9-22.1 20.6-23.8 2.2-7.6 5.3-14.9 9-21.8-7-9.4-6.3-22.8 2.3-31.3l11.3-11.3c8.6-8.6 21.9-9.3 31.3-2.3 6.8-3.7 14.1-6.8 21.7-9 1.7-11.6 11.7-20.6 23.8-20.6zm8 176a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm288.2-155.4C449.9 265 459.9 256 472 256h16c12.1 0 22.1 8.9 23.8 20.6 7.6 2.2 14.9 5.3 21.8 9 9.4-7 22.8-6.3 31.3 2.3l11.3 11.3c8.6 8.6 9.3 21.9 2.2 31.3 3.7 6.8 6.8 14.1 9 21.7C599 353.9 608 363.9 608 376v16c0 12.1-8.9 22.1-20.6 23.8-2.2 7.6-5.3 14.9-9 21.7 7 9.4 6.3 22.8-2.2 31.3l-11.3 11.3c-8.6 8.6-21.9 9.3-31.3 2.2-6.9 3.7-14.1 6.8-21.8 9-1.7 11.8-11.7 20.7-23.8 20.7h-16c-12.1 0-22.1-8.9-23.8-20.6-7.6-2.2-14.9-5.3-21.7-9-9.4 7.1-22.8 6.3-31.3-2.2l-11.3-11.3c-8.6-8.6-9.3-21.9-2.2-31.3-3.7-6.9-6.8-14.1-9-21.8-11.8-1.7-20.7-11.7-20.7-23.8v-16c0-12.1 8.9-22.1 20.6-23.8 2.2-7.6 5.3-14.9 9-21.8-7-9.4-6.3-22.8 2.2-31.3l11.3-11.3c8.6-8.6 21.9-9.3 31.3-2.3 6.8-3.7 14.1-6.8 21.7-9zM528 384a48 48 0 1 0-96 0 48 48 0 1 0 96 0z'
      fill={fill}
    />
  </svg>
)
export default TruckMonster