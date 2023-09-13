import React from 'react'
import { Notifications } from '../data/Notifications'
import List from './List'

const Lists = () => {
  return (
    <>
      { Notifications.map((user, userIndex) => (
        <List key={userIndex} user={user} />
      ))}
    </>
  )
}

export default Lists