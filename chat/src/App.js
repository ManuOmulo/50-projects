import React, { useState, useEffect } from "react"
import { io } from "socket.io-client"
import "./App.scss"

import Template from "./Template"

const socket = io("http://localhost:5000")

const App = () => {
  const [message, setMessage] = useState("")
  const [location, setLocation] = useState("")
  const [chats, setChats] = useState([])

  useEffect(() => {
    socket.on("message", (message) => {
      setMessage(message)
      setChats(message)
      console.log(message)
    })
  }, [])

  useEffect(() => {
    if (!navigator.geolocation) {
      return alert("Geolocation is not supported by your Browser")
    }

    navigator.geolocation.getCurrentPosition(position => {
      const { longitude, latitude} = position.coords
      const location = {
        longitude,
        latitude
      }
      setLocation(location)
    })
  }, [])


  const sendLocation = () => {
    socket.emit("sendLocation", location, () => {
      console.log("Location sent!!")
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const clientMessage = e.target.elements.message.value;
    socket.emit("sendMessage", clientMessage, (error) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent...");
    });
  }

  const handleChange = (e) => {
    setMessage({...message, [e.target.name]: e.target.value})
  }

  return (
    <>
      <Template
        message={message}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        sendLocation={sendLocation}
      />
      <div>{chats}</div>
    </>
  )
}

export default App