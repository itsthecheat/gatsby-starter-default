import * as React from "react"

import Layout from "../components/layout"


const Form = () => {


  return (
  <Layout>
      <h1>
       Contact Us
      </h1>
<div>
    
<form
  method="POST"
  name="fa-form-1"
  action="https://webhook.frontapp.com/forms/cloud_consulting/RUlV8OoS91ArmxjnAPt6Ru2OQmDNgnXKf_zIP4x6rvFzZX3B89JxRPiLLpa8SmPSDhlnSPqjf8NrrEfpAEWBvV8fIue4ylef6sDrXPm5pooX5IbAVtWO"
  enctype="multipart/form-data"
  accept-charset="utf-8"
>
  <div>
    <label for="name">Name</label>
    <input type="text" name="name"/>
  </div>

  <div>
    <label for="email">Email</label>
    <input type="email" name="email"/>
  </div>

  <div>
    <textarea name="body"></textarea>
  </div>

  <div>
    <input type="file" name="attachment"/>
  </div>

   <div id="html_element"></div>
  <div>
    <input type="submit" value="Send"/>
  </div>
</form> 

</div>



  </Layout>
)}
export default Form
