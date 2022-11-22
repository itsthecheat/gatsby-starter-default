import * as React from "react"

import Layout from "../components/layout"
import * as styles from "../components/index.module.css"


const IndexPage = () => {
  window.FrontChat('init', {
    chatId: 'ad4fcaa5d3fa397eb368c43e1cc5f09d',
    // email: 'leslie.behum@frontapp.com',
    // userHash: 'a2e5cc317f3912dbf7b83eb6a356946a3e366031688a0bd2e7ec7eb17001e08e', 
    useDefaultLauncher: true});
  return (
  <Layout>
      <h1>
       Hello World!
      </h1>
  </Layout>
)}
export default IndexPage
 // email: 'llaurenb@gmail.com',
 // userHash: '8cef6e59c3708a994579738585c3b56bf2f4c12acc90c38988d5c15b310904c6', 