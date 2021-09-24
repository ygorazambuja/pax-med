import React from 'react'

export default function Row({ style = [], ...props }) {
  return <div className={['row', ...style]}>{props.children}</div>
}
