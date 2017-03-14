import React from 'react'
import { List, ListItem } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'
import PageTitle from '../components/PageTitle'
import SectionTitle from '../components/SectionTitle'
import ProgressBar from '../components/ProgressBar'
import Footer from './Footer'
import Header from './Header'
import '../scss/style.scss'

// <PageTitle heading='DESCRIBE THE ONLINE CONTENT' backgroundColor='purple' />
const ImgCriteriaForm = (props) => {
    return (
      <div>
        <Header />
        <ProgressBar form='1' />
        <SectionTitle heading='TELL US ABOUT THE IMAGE OR VIDEO' subheading='Does the image or video contain:' span='Please select from boxes below that tell us what you are concerned about the content.'/>
        <div className='form-container'>
          <form action='#'>
            <List>
              <ListItem
                style={{backgroundColor: 'white', margin: '0.25rem 0'}}
                primaryText='Someone posing in a sexual way'
                onChange={() => {
                  props.toggleCriteria('Someone posing in a sexual way')
                }}
                leftCheckbox={<Checkbox />}
              />
              <ListItem
                style={{backgroundColor: 'white', margin: '0.25rem 0'}}
                primaryText='Someone touching themselves in a sexual way'
                onChange={() => {
                  props.toggleCriteria('Someone touching themselves in a sexual way')
                }}
                leftCheckbox={<Checkbox />}
              />
              <ListItem
                style={{backgroundColor: 'white', margin: '0.25rem 0'}}
                primaryText='Any sexual activity involving a child, adult or both'
                onChange={() => {
                  props.toggleCriteria('Any sexual activity involving a child, adult or both')
                }}
                leftCheckbox={<Checkbox />}
              />
              <ListItem
                style={{backgroundColor: 'white', margin: '0.25rem 0'}}
                primaryText='Someone hurting someone else'
                onChange={() => {
                  props.toggleCriteria('Someone hurting someone else')
                }}
                leftCheckbox={<Checkbox />}
              />
              <ListItem
                style={{backgroundColor: 'white', margin: '0.25rem 0'}}
                primaryText='Sexual activity that includes animals'
                onChange={() => {
                  props.toggleCriteria('Sexual activity that includes animals')
                }}
                leftCheckbox={<Checkbox />}
              />
            </List>
            <RaisedButton label='NEXT' primary={true} onClick={() => props.changeForm()} />
          </form>
        </div>

        <div className='other-options'>
          <i className='large material-icons'>info_outline</i>
          <span>
            If the picture or video does not include any of the above,
             we may not be able to remove it. But there are other ways to get support -
              get advice on the <a href="https://www.childline.org.uk">Childline website</a> or talk to a
            <a href='https://www.childline.org.uk/get-support/1-2-1-counsellor-chat/'> Childline counsellor</a>.
          </span>
        </div>
        <Footer/>
      </div>
    )
}

export default ImgCriteriaForm
