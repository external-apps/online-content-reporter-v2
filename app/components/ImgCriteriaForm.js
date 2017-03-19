import React from 'react'
import { List, ListItem } from 'material-ui/List'
import { browserHistory } from 'react-router'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'
import SectionTitle from '../components/SectionTitle'
import ProgressBar from '../components/ProgressBar'
import Footer from './Footer'
import Header from './Header'
import '../scss/style.scss'

class ImgCriteriaForm extends React.Component {
  renderRequiredMessage () {
    if (this.props.forms.criteriaRequiredMessage) {
      return (
        <h2 className='required'>You can't proceed without ticking at least one option</h2>
      )
    }
  }

  componentDidMount () {
    if (!this.props.yoti.isAgeVerified && !this.props.yoti.isMobile) {
      browserHistory.push('/')
    }
  }

  render () {
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
                  this.props.checkOption1()
                }}
                leftCheckbox={<Checkbox checked={this.props.forms.option1} />}
              />
              <ListItem
                style={{backgroundColor: 'white', margin: '0.25rem 0'}}
                primaryText='Someone touching themselves in a sexual way'
                onChange={() => {
                  this.props.toggleCriteria('Someone touching themselves in a sexual way')
                  this.props.checkOption2()
                }}
                leftCheckbox={<Checkbox checked={this.props.forms.option2} />}
              />
              <ListItem
                style={{backgroundColor: 'white', margin: '0.25rem 0'}}
                primaryText='Any sexual activity involving a child, adult or both'
                onChange={() => {
                  this.props.toggleCriteria('Any sexual activity involving a child, adult or both')
                  this.props.checkOption3()
                }}
                leftCheckbox={<Checkbox checked={this.props.forms.option3} />}
              />
              <ListItem
                style={{backgroundColor: 'white', margin: '0.25rem 0'}}
                primaryText='Someone hurting someone else'
                onChange={() => {
                  this.props.toggleCriteria('Someone hurting someone else')
                  this.props.checkOption4()
                }}
                leftCheckbox={<Checkbox checked={this.props.forms.option4} />}
              />
              <ListItem
                style={{backgroundColor: 'white', margin: '0.25rem 0'}}
                primaryText='Sexual activity that includes animals'
                onChange={() => {
                  this.props.toggleCriteria('Sexual activity that includes animals')
                  this.props.checkOption5()
                }}
                leftCheckbox={<Checkbox checked={this.props.forms.option5} />}
              />
            </List>
            {this.renderRequiredMessage()}
            <RaisedButton
              label='Next'
              primary={true}
              onClick={() => {
                (this.props.forms.imageCriteria.length !== 0)
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
