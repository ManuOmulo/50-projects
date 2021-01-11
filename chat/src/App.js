import React, { useState, useEffect } from "react"
import { io } from "socket.io-client"
import "./App.scss"

// import Template from "./Template"

const socket = io("http://localhost:5000")

const App = () => {
  const [message, setMessage] = useState([{createdAt: "", text: ""}])
  // const [chatMessage, setChatMessage] = useState("")

  useEffect(() => {
    socket.on("message", (newMessage) => {
      setMessage(newMessage)
    })
  })

  const handleChange = (e) => {
    setMessage([...message, {[e.target.name]: e.target.value}])
  }

  const handleSubmitMessage = (e) => {
    e.preventDefault()
    const clientMessage = e.target.value
    socket.emit("sendMessage", clientMessage, (error) => {
      if (error) {
        return console.log(error)
      }
      setMessage(clientMessage)
      console.log(clientMessage)
    })
  }

  return (
    <>
      <form onSubmit={handleSubmitMessage}>
          <input
            name="name"
            value={message.text}
            onChange={handleChange}
          />
          <button>Submit</button>
      </form>


      {/* {message.map((message, index) => (
        <div key={index}>
          <p>{message.createdAt} - {message.text}</p>
        </div>
      ))} */}
    </>
  )
}

export default App