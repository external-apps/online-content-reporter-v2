import React from 'react'
import '../scss/style.scss'

const ContentForm = () => (
  <div>
  <div class="content">
   <div class="title-div background-dark-blue">
     <h1 class='title'>REPORT CONTENT WEB ADDRESS</h2>
   </div>
   <div class="progress">
      <div class="determinate" style="width: 66%"></div>
   </div>
   <div class="message">
     <h4 class="rosie">WEBSITE DETAILS</h4>
     <p>
       If you have any information you think may help us such as a description of where the content you are reporting is located on a large website or username and password needed to gain access, please include it in the description box.

       If you have multiple webpages (URLs) to report, please include these in the description box.
     </p>
   </div>
   <div class="form-container">
     <h4 class="rosie">WEB ADDRESS</h4>
     <form action="#">
       <div class="input-field col s6">
         <i class="material-icons prefix">mode_edit</i>
         <textarea id="url" class="materialize-textarea"></textarea>
         <label for="url">URL</label>
       </div>
       <div class="input-field-2 input-field col s6 ">
         <i class="material-icons prefix">mode_edit</i>
         <textarea id="description" class="materialize-textarea"></textarea>
         <label for="description">Description</label>
       </div>
       <a class="waves-effect waves-light btn report-submit" id="submit-url" >Submit Report</a>
     </form>
   </div>

   <!-- mod pop-up on submission -->
   <div class="mod-overlay closed" id="mod-overlay"></div>
   <div class="mod closed" id="mod">
     <button class="mod__close-button" id="close-button">X</button>
     <div class="mod__content">
       <h1>Thank you. The online content has been reported for removal</h1>
       <p>
         If you would like IWF to update you by email, please enter your email address below.
       </p>
       <input placeholder="email address"></input>
       <a class="waves-effect waves-light btn" href='/index.html'>Submit</a>
     </div>
   </div>

 </div>

  </div>
)

export default ContentForm
