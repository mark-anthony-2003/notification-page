import React from 'react'
import { useNoficationContext } from '../context/NotificationProvider'

const Notification = () => {
  const { unreads } = useNoficationContext()

  return (
    <div className="flex items-center gap-2">
        <h2 className="text-2xl font-bold">Notification</h2>
        <div className="bg-[#0a317b] text-white rounded-lg px-3 font-bold">{unreads}</div>
    </div>
  )
}

export default Notification