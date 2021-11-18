import moment from 'moment'

const currentTime = moment().toString();
const formattedCurrentTime = moment().format('MMMM Do YYYY, h:mm:ss a').toString();

const commentsList = [{
        id: 1,
        name: 'User',
        email: 'user@gmail.com',
        time: currentTime,
        formattedTime: formattedCurrentTime,
        content: "WOW!"
    },
    {
        id: 2,
        name: 'Userka',
        email: 'userka@gmail.com',
        time: currentTime,
        formattedTime: formattedCurrentTime,
        content: "AWESOME!"
    },
]

export default commentsList;