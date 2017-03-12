import React from 'react'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'
import PageTitle from '../components/PageTitle'
import ProgressBar from '../components/ProgressBar'
import '../scss/style.scss'

const ImgCriteriaForm = (props) => {
    return (
      <div>
        <PageTitle heading='DESCRIBE THE ONLINE CONTENT' backgroundColor='purple' />
        <ProgressBar percentage='66' />

        <div className='content-describe form-container'>
          <p>
            The content must fit a certain criteria for us to legally remove it. Please select the boxes below that apply.
          </p>
        </div>
        <div className='form-container'>
          <form action='#'>
            <List>
              <Subheader>Describe image content</Subheader>
              <ListItem
                primaryText='Someone posing in a sexual way'
                onChange={() => {
                  props.toggleCriteria('Someone posing in a sexual way')
                }}
                leftCheckbox={<Checkbox />}
              />
              <ListItem
                primaryText='Someone touching themselves in a sexual way'
                onChange={() => {
                  props.toggleCriteria('Someone touching themselves in a sexual way')
                }}
                leftCheckbox={<Checkbox />}
              />
              <ListItem
                primaryText='Any sexual activity involving a child, adult or both'
                onChange={() => {
                  props.toggleCriteria('Any sexual activity involving a child, adult or both')
                }}
                leftCheckbox={<Checkbox />}
              />
              <ListItem
                primaryText='Someone hurting someone else'
                onChange={() => {
                  props.toggleCriteria('Someone hurting someone else')
                }}
                leftCheckbox={<Checkbox />}
              />
              <ListItem
                primaryText='Sexual activity that includes animals'
                onChange={() => {
                  props.toggleCriteria('Sexual activity that includes animals')
                }}
                leftCheckbox={<Checkbox />}
              />
            </List>
            <RaisedButton label='Confirm' primary={true} onClick={() => props.nextForm()} />
          </form>
        </div>

        <div className='other-options'>
          <p>
            <i className='large material-icons'>info_outline</i>
            If the picture or video doesnt include any of the activities above,
            we may not be able to remove it. Talk to a
            <span>
              <a href='https://www.childline.org.uk/get-support/1-2-1-counsellor-chat/'>
                Childline counsellor
              </a>
            </span>
            for more advice.
          </p>
        </div>

      </div>
    )
}

export default ImgCriteriaForm
