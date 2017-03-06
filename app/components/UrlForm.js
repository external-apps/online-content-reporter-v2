import React from 'react'
import TextField from 'material-ui/TextField'
import { Link } from 'react-router'
import '../scss/style.scss'
import injectTapEventPlugin from 'react-tap-event-plugin'
import RaisedButton from 'material-ui/RaisedButton'
var Modal = require('react-modal')
injectTapEventPlugin()

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


const UrlForm = React.createClass( {

  getInitialState: function() {
 return { modalIsOpen: false };
},

openModal: function() {
 this.setState({modalIsOpen: true});
},

afterOpenModal: function() {
 // references are now sync'd and can be accessed.
 this.refs.subtitle.style.color = '#f00';
},

closeModal: function() {
 this.setState({modalIsOpen: false});
},

render: function() {
 return (
   <div>

       <div className="content">
        <div className="title-div">
          <h1 className='page-title'>REPORT CONTENT WEB ADDRESS</h1>
        </div>
        <div className="progress">
           <div className="determinate3" ></div>
        </div>
        <div className="message">
          <h4 className="section-title">WEBSITE DETAILS</h4>
          <p>
            If you have any information you think may help us such as a description of where the content you are reporting is located on a large website or username and password needed to gain access, please include it in the description box.

            If you have multiple webpages (URLs) to report, please include these in the description box.
          </p>
        </div>
        <div className="form-container">
          <h4 className="section-title">WEB ADDRESS</h4>
          <form action="#">
            <div className="input-field col s6">
            <TextField
               hintText="http://"
               floatingLabelText="url"
             /><br />
            </div>
            <div className="input-field-2 input-field col s6 ">
            <TextField
           hintText="Message Field"
           floatingLabelText="Description"
           multiLine={true}
           rows={10}
         /><br />
            </div>
            <RaisedButton label="Verify age" labelColor= {"#632c7a"} id='submit-url' />
          </form>
        </div>
      </div>


     <button onClick={this.openModal}>Open Modal</button>
     <Modal
       isOpen={this.state.modalIsOpen}
       onAfterOpen={this.afterOpenModal}
       onRequestClose={this.closeModal}
       style={customStyles}
       contentLabel="Example Modal"
     >





         <div className="mod__content">
           <h1>Thank you. The online content has been reported for removal</h1>
           <p>
             If you would like IWF to update you by email, please enter your email address below.
           </p>
           <input placeholder="email address"></input>
           <a className="waves-effect waves-light btn" href='/index.html'>Submit</a>
         </div>


       <button onClick={this.closeModal}>close</button>
     </Modal>
   </div>
 );
}

})

export default UrlForm
