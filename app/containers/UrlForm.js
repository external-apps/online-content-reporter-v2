
import React from 'react'
import TextField from 'material-ui/TextField'
import { Link } from 'react-router'
import '../scss/style.scss'
import injectTapEventPlugin from 'react-tap-event-plugin'
import RaisedButton from 'material-ui/RaisedButton'
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Checkbox from 'material-ui/Checkbox'
import Toggle from 'material-ui/Toggle'
import Modal from 'react-modal'
import PageTitle from '../components/PageTitle'
import ProgressBar from '../components/ProgressBar'

injectTapEventPlugin()

const customStyles = {

    overlay : {
      position          : 'fixed',
      top               : 0,
      left              : 0,
      right             : 0,
      bottom            : 0,
      backgroundColor   : 'rgba(255, 255, 255, 0.75)'
    },
    content : {
      position                   : 'absolute',
      top                        : '50%',
      left                       :'50%',
      bottom                     :'50%',
      right                      : '50%',
      transform                  :'translate (-50%, -50%)',
      border                     : '1px solid #ccc',
      background                 : '#fff',
      overflow                   : 'hidden',
      WebkitOverflowScrolling    : 'touch',
      borderRadius               : '0.25rem',
      outline                    : 'none',
      padding                    : '1rem',
      width                      : '420px',
      height                     : '60%',
      width                      :'375px',
      zIndex                     :'100'
    }
};


class UrlForm extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      modalIsOpen : false,
      firstForm: true,
      imageCriteria: []
    }
  }


openModal() {
  this.setState({modalIsOpen: true});
}

closeModal() {
  this.setState({modalIsOpen: false});
}
nextForm() {
  this.setState({firstForm: false});
}

render () {
  console.log('i am here'+this.state.imageCriteria);
 return (
   <div>
       {this.state.firstForm &&
         <div className="content">

           <PageTitle heading='DESCRIBE THE ONLINE CONTENT' backgroundColor='bg-plum' />

             <ProgressBar percentage='66' />

           <div className='content-describe form-container'>
             <p>
               The content must fit a certain criteria for us to legally remove it. Please select the boxes below that apply.
             </p>
           </div>

           <div className="form-container">
             <form action="#">
             <List>
               <Subheader>Describe image content</Subheader>
               <ListItem primaryText="Someone posing in a sexual way"  onChange={()=>{this.setState({imageCriteria:[...this.state.imageCriteria,"Someone posing in a sexual way"]});}}leftCheckbox={<Checkbox />} />
               <ListItem primaryText="Someone touching themselves in a sexual way" onChange={()=>{this.setState({imageCriteria:[...this.state.imageCriteria,"Someone touching themselves in a sexual way"]});}}  leftCheckbox={<Checkbox />} />
               <ListItem primaryText="Any sexual activity involving a child, adult or both" onChange={()=>{this.setState({imageCriteria:[...this.state.imageCriteria,"Any sexual activity involving a child, adult or both"]});}} leftCheckbox={<Checkbox />} />
               <ListItem primaryText="Someone hurting someone else" onChange={()=>{this.setState({imageCriteria:[...this.state.imageCriteria,"Someone hurting someone else"]});}} leftCheckbox={<Checkbox />} />
               <ListItem primaryText="Sexual activity that includes animals."  onChange={()=>{this.setState({imageCriteria:[...this.state.imageCriteria,"Sexual activity that includes animals."]});;}}leftCheckbox={<Checkbox />} />
             </List>
              <RaisedButton label="Confirm"  href='/url-form.html' />

             </form>
           </div>

           <div className="other-options">
               <p><i className="large material-icons">info_outline</i>
                 If the picture or video doesnt include any of the activities above,
                  we may not be able to remove it. Talk to a
                   <span><a href="https://www.childline.org.uk/get-support/1-2-1-counsellor-chat/"> Childline counsellor</a></span>
                    for more advice.
                 </p>
           </div>
        /*   <Link to='/form2'>
             <p>FORM2</p>
           </Link>*/
           <button onClick={()=>this.nextForm()}>Go To Next Form</button>
         </div>
       }


       {!this.state.firstForm &&
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
        <button onClick={()=>this.openModal()}>Open Modal</button>



     <Modal
       isOpen={this.state.modalIsOpen}
       onRequestClose={()=>this.closeModal()}
       style={customStyles}
       contentLabel="Reassuring message"
     >


         <div className="">
           <h1>Thank you. The online content has been reported for removal</h1>
           <p>
             If you would like IWF to update you by email, please enter your email address below.
           </p>
           <input placeholder="email address"></input>
           <a className="waves-effect waves-light btn" href='/index.html'>Submit</a>
         </div>


       <button onClick={()=>this.closeModal()}>close</button>
     </Modal>
    </div>
   }
   </div>
 );
}

}

UrlForm.propTypes = {
  imageCriteria: React.PropTypes.array
};
export default UrlForm
