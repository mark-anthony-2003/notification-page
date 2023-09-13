import React from 'react'
import { useNoficationContext } from '../context/NotificationProvider'

const Button = () => {
  const { handleMarkAllAsRead } = useNoficationContext()

  return (
    <button
      onClick={handleMarkAllAsRead}
      className="text-gray-500 font-medium hover:text-[#0a317b]">
        Mark all as read
    </button>
  )
}

export default Button