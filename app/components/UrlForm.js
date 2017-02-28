import React from 'react'
import { Link } from 'react-router'
import '../scss/style.scss'

const UrlForm = () => (
  <div>
  <div className="content">
   <div className="title-div background-dark-blue">
     <h1 className='title'>REPORT CONTENT WEB ADDRESS</h1>
   </div>
   <div className="progress">
      <div className="determinate" style="width: 66%"></div>
   </div>
   <div className="message">
     <h4 className="rosie">WEBSITE DETAILS</h4>
     <p>
       If you have any information you think may help us such as a description of where the content you are reporting is located on a large website or username and password needed to gain access, please include it in the description box.

       If you have multiple webpages (URLs) to report, please include these in the description box.
     </p>
   </div>
   <div className="form-container">
     <h4 className="rosie">WEB ADDRESS</h4>
     <form action="#">
       <div className="input-field col s6">
         <i className="material-icons prefix">mode_edit</i>
         <textarea id="url" className="materialize-textarea"></textarea>
         <label for="url">URL</label>
       </div>
       <div className="input-field-2 input-field col s6 ">
         <i className="material-icons prefix">mode_edit</i>
         <textarea id="description" className="materialize-textarea"></textarea>
         <label for="description">Description</label>
       </div>
       <a className="waves-effect waves-light btn report-submit" id="submit-url" >Submit Report</a>
     </form>
   </div>
   //modal
   <div className="mod-overlay closed" id="mod-overlay"></div>
   <div className="mod closed" id="mod">
     <button className="mod__close-button" id="close-button">X</button>
     <div className="mod__content">
       <h1>Thank you. The online content has been reported for removal</h1>
       <p>
         If you would like IWF to update you by email, please enter your email address below.
       </p>
       <input placeholder="email address"></input>
       <a className="waves-effect waves-light btn" href='/index.html'>Submit</a>
     </div>
   </div>

 </div>

  </div>
)

export default UrlForm
