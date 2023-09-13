import { createContext, useState, useContext } from "react"
import { Notifications } from "../data/Notifications"

const NotificationContext = createContext()

const NotificationProvider = ({ children}) => {
    const [unreads, setUnreads] = useState(
        Notifications.filter(unreadNotifs => !unreadNotifs.unread).length
    )

    const handleMarkAllAsRead = () => {
        setUnreads(0)
    }

    return (
        <NotificationContext.Provider
            value={{ unreads, handleMarkAllAsRead }}
        >
            { children }
        </NotificationContext.Provider>
    )
}

export const useNoficationContext = () => useContext(NotificationContext)

export default NotificationProvider