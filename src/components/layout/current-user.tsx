import { Button, Popover } from 'antd'
import React from 'react'

const CurrentUser = () => {
  return (
    <>
        <Popover
            placement='bottomRight' 
            trigger="click" 
            overlayInnerStyle={{padding: 0}} 
            overlayStyle={{zIndex: 9999}}>
            TEST
        </Popover>
    </>
  )
}

export default CurrentUser