import { useState } from 'react'

export default function(){

    const [message, setMessage] = useState(['a', 'b'])

    function showUnreadMessage(){

        if (message.length === 0) return "You're all caught up!"
        else if (message.length === 1) return "You have 1 unread message"
        else return `You have ${message.length} unread messages`
    }

    return(
            <h3>{showUnreadMessage()}</h3>
    )
}