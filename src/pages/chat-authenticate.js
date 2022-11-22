import * as React from "react"

import Layout from "../components/layout"

const ChatAuth = () => {
        window.FrontChat('init', {
            chatId: 'ad4fcaa5d3fa397eb368c43e1cc5f09d', 
            useDefaultLauncher: true,
        });
  return (
  <Layout>
      <h1>
       Chat with user hash
      </h1>
  </Layout>
)}

export default ChatAuth