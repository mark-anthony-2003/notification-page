import React from 'react'
import { useNoficationContext } from '../context/NotificationProvider'

const List = (props) => {
    const { user } = props
    const { unreads } = useNoficationContext()

    return (
        <div className={`${ user.unread === false ? `${ unreads === 0 ? "" : "bg-[#f7fafd]" }` : "" } grid grid-cols-8 my-3 p-2 rounded-lg`}>
          <div className="col-span-1 flex justify-center items-start">
            <img src={user.avatar} alt={user.name} className="w-12" />
          </div>
          <div className="col-span-7 flex flex-col justify-center gap-1">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <p className="text-bases">
                        <span className="text-[#1c202b] font-bold hover:text-[#0a317b] cursor-pointer">{user.name}</span>{" "}
                        <span className="text-[#939dae]">{user.happened}</span>{" "}
                        <span  className={`${ user.where === "Chess Club" ? `${ unreads === 0 ? "text-[#5e6778]" : "text-[#0a317b]" }` : "text-[#5e6778]" } font-bold hover:text-[#0a317b] cursor-pointer`}>{user.where}</span>{" "}
                        { user.unread === false ? (
                            <div className={`
                                ${ unreads === 0 ? "" : "bg-[#f65351]" } w-2 h-2 rounded-full inline-block ml-0.5 mb-0.5
                            `}></div>
                        ) : null }
                    </p>
                    <p className="text-gray-400">{user.time}</p>
                </div>
                { user.img ? (
                    <img src={user.img} alt={user.name} className="w-12" />
                ) : null }
            </div>
            { user.message ? (
                <div className="border rounded p-4 cursor-pointer hover:bg-[#e5effa]">
                    <p className="text-[#5e6778]">{user.message}</p>
                </div>
            ) : null }
          </div>
        </div>
    )
}

export default List