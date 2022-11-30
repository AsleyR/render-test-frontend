import { useEffect, useState } from 'react'
import Axios from 'axios'

// Backend url
const backendUrl = process.env.REACT_APP_BACKEND_URL

interface IState {
    Message: {
        msg: String
    }
}

const Message = () => {
  const [message, setMessage] = useState<IState['Message']>({msg: ""})
  const [connectionError, setConnectionError] = useState() // Variable to store any connection errors.

  // Connect to backend
  useEffect(() => {
    const getMessageData = () => {
        Axios.get(`${backendUrl}/api`).then(res => {
            if (res.status === 200) setMessage(res.data)
        }).catch(error => {
            setConnectionError(error)
            setMessage({msg: "Error connecting to server."}) // Display message to user in case of error.
            // console.log(error)
        })
    }

    // Run function to get backend data
    getMessageData()
  }, [])

  return (
    <div>
      <h2>Simple Message Retrieving System</h2>
      <p>{message.msg}</p>
    </div>
  )
}

export default Message
