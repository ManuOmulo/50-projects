import React from "react"

const Template = (props) => {
  return (
    <div>
      <h2>Chat App</h2>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="message"
          value={props.message.message || ""}
          placeholder="message"
          onChange={props.handleChange}
        />
        <button type="submit">Send</button>
      </form>

      <button
        id="send-location"
        onClick={props.sendLocation}>
          Send Location
      </button>
    </div>
  )
}

export default Template