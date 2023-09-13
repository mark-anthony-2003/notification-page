import React from 'react'
import Notification from '../components/Notification'
import Button from '../components/Button'
import Lists from '../components/Lists'

const Main = () => {
  return (
    <div className="w-[45rem] bg-white rounded-xl px-8 shadow-xl">
      <div className="flex justify-between items-center py-6">
        <Notification />
        <Button />
      </div>
      <Lists />
    </div>
  )
}

export default Main