import React from 'react'
import { List, ListItem } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'
import SectionTitle from '../components/SectionTitle'
import ProgressBar from '../components/ProgressBar'
import Footer from './Footer'
import Header from './Header'
import '../scss/style.scss'

// old span Please select from boxes below that tell us what you are concerned about the content.
class ImgCriteriaForm extends React.Component {
  renderRequiredMessage () {
    if (this.props.criteriaRequiredMessage) {
      return (
        <h2 className='required'>You can't proceed without ticking at least one option</h2>
      )
    }
  }

  render () {
    console.log('PROPS for criteria', this.props)
    return (
      <div>
        <Header />
        <ProgressBar form='1' />
        <SectionTitle heading='PLEASE TELL US MORE ABOUT THE IMAGE OR VIDEO' subheading='The content must fit a certain criteria for us to legally remove it.' span='Does the image contain one or more of the following:' />
        <div className='form-container'>
          <form action='#'>
            <List>
              <ListItem
                style={{backgroundColor: 'white', margin: '0.25rem 0'}}
                primaryText='Someone posing in a sexual way'
                onChange={() => {
                  this.props.toggleCriteria('Someone posing in a sexual way')
                }}
                leftCheckbox={<Checkbox />}
              />
              <ListItem
                style={{backgroundColor: 'white', margin: '0.25rem 0'}}
                primaryText='Someone touching themselves in a sexual way'
                onChange={() => {
                  this.props.toggleCriteria('Someone touching themselves in a sexual way')
                }}
                leftCheckbox={<Checkbox />}
              />
              <ListItem
                style={{backgroundColor: 'white', margin: '0.25rem 0'}}
                primaryText='Any sexual activity involving a child, adult or both'
                onChange={() => {
                  this.props.toggleCriteria('Any sexual activity involving a child, adult or both')
                }}
                leftCheckbox={<Checkbox />}
              />
              <ListItem
                style={{backgroundColor: 'white', margin: '0.25rem 0'}}
                primaryText='Someone hurting someone else'
                onChange={() => {
                  this.props.toggleCriteria('Someone hurting someone else')
                }}
                leftCheckbox={<Checkbox />}
              />
              <ListItem
                style={{backgroundColor: 'white', margin: '0.25rem 0'}}
                primaryText='Sexual activity that includes animals'
                onChange={() => {
                  this.props.toggleCriteria('Sexual activity that includes animals')
                }}
                leftCheckbox={<Checkbox />}
              />
            </List>
            {this.renderRequiredMessage()}
            <RaisedButton
              label='Next'
              primary={true}
              onClick={() => {
                (this.props.imageCriteria.length !== 0)
                  ? this.props.changeForm()
                    : this.props.showCriteriaRequiredMessage()
              }}
            />
          </form>
        </div>

        <div className='other-options'>
          <i className='large material-icons'>info_outline</i>
          <span>
            If the picture or video doesnt include any of the activities above,
            we may not be able to remove it. Talk to a
            <a href='https://www.childline.org.uk/get-support/1-2-1-counsellor-chat/'> Childline counsellor </a>
            for more advice.
          </span>
        </div>
        <Footer />
      </div>
    )
  }
}

export default ImgCriteriaForm
