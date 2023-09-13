import avatar1 from '../assets/images/avatar-mark-webber.webp'
import avatar2 from '../assets/images/avatar-angela-gray.webp'
import avatar3 from '../assets/images/avatar-jacob-thompson.webp'
import avatar4 from '../assets/images/avatar-rizky-hasanuddin.webp'
import avatar5 from '../assets/images/avatar-kimberly-smith.webp'
import avatar6 from '../assets/images/avatar-nathan-peterson.webp'
import avatar7 from '../assets/images/avatar-anna-kim.webp'
import img_chess from '../assets/images/image-chess.webp'

export const Notifications = [
    {
        name: "Mark Webber",
        avatar: avatar1,
        happened: "reacted to your recent post",
        where: "My first tournament today!",
        time: "1m ago",
        message: null,
        img: null,
        unread: false,
    },
    {
        name: "Angela Gray",
        avatar: avatar2,
        happened: "followed you",
        where: null,
        time: "5m ago",
        message: null,
        img: null,
        unread: false,
    },
    {
        name: "Jacob Thompson",
        avatar: avatar3,
        happened: "has joined your group",
        where: "Chess Club",
        time: "1 day ago",
        message: null,
        img: null,
        unread: false,
    },
    {
        name: "Rizky Hasanuddin",
        avatar: avatar4,
        happened: "sent you a private message",
        where: null,
        time: "5 days ago",
        message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        img: null,
        unread: true,
    },
    {
        name: "Kimberly Smith",
        avatar: avatar5,
        happened: "commented on your picture",
        where: null,
        time: "1 week ago",
        message: null,
        img: img_chess,
        unread: true,
    },
    {
        name: "Nathan Peterson",
        avatar: avatar6,
        happened: "reacted to your recent post",
        where: "5 end-game strategies to increase your win rate",
        time: "2 weeks ago",
        message: null,
        img: null,
        unread: true,
    },
    {
        name: "Anna Kim",
        avatar: avatar7,
        happened: "left the group",
        where: "Chess Club",
        time: "2 weeks ago",
        message: null,
        img: null,
        unread: true,
    },
]