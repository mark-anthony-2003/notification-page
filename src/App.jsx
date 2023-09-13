import React from 'react'
import NotificationProvider from './context/NotificationProvider'
import Main from './layouts/Main'

const App = () => {
  return (
    <NotificationProvider>
      <div className="flex justify-center items-center min-h-screen bg-[#f7fafd] py-14">
        <Main />
      </div>
    </NotificationProvider>
  )
}

export default App
