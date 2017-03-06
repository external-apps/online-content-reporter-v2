import React from 'react'
import { Link } from 'react-router'
import '../scss/style.scss'
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Checkbox from 'material-ui/Checkbox'
import Toggle from 'material-ui/Toggle'
import RaisedButton from 'material-ui/RaisedButton'


const ContentForm = () => (
  <div className="content">
    <div className="content-title">
      <h1 className='page-title'>DESCRIBE THE ONLINE CONTENT</h1>
    </div>

    <div className="progress">
       <div className="determinate2"></div>
    </div>

    <div className='content-describe form-container'>
      <p>
        The content must fit a certain criteria for us to legally remove it. Please select the boxes below that apply.
      </p>
    </div>

    <div className="form-container">
      <form action="#">
      <List>
        <Subheader>Describe image content</Subheader>
        <ListItem primaryText="Someone posing in a sexual way" leftCheckbox={<Checkbox />} />
        <ListItem primaryText="Someone touching themselves in a sexual way" leftCheckbox={<Checkbox />} />
        <ListItem primaryText="Any sexual activity involving a child, adult or both" leftCheckbox={<Checkbox />} />
        <ListItem primaryText="Someone hurting someone else" leftCheckbox={<Checkbox />} />
        <ListItem primaryText="Sexual activity that includes animals." leftCheckbox={<Checkbox />} />
      </List>
        <a className="confirm waves-effect waves-light btn" href='/url-form.html'>Confirm</a>
        <RaisedButton label="Verify age"  href='/url-form.html'/>

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
    <Link to='/form2'>
      <p>FORM2</p>
    </Link>
  </div>
)

export default ContentForm
