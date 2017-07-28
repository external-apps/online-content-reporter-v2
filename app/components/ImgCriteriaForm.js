import React from 'react'
import { List, ListItem } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'

import SectionTitle from '../components/SectionTitle.js'
import ProgressBar from '../components/ProgressBar.js'
import Footer from './Footer.js'
import Header from './Header.js'
import { trackEvent, trackClick, logPageView } from '../tracking.js'

class ImgCriteriaForm extends React.Component {
  constructor (props) {
    super(props)
    logPageView('/form (Image criteria)')
  }

  renderRequiredMessage () {
    if (this.props.forms.criteriaRequiredMessage) {
      return (
        <h2 className='required'>You can't proceed without ticking at least one option</h2>
      )
    }
  }

  render () {
    return (
      <div>
        <Header />
        <ProgressBar form='1' />
        <SectionTitle
          heading='PLEASE TELL US MORE ABOUT THE IMAGE OR VIDEO'
          subheading='The content must fit a certain criteria for us to legally remove it.'
          span='Does the image or video of you contain one or more of the following:'
        />
        <div className='form-container'>
          <List>
            <ListItem
              style={{backgroundColor: 'white', margin: '0.25rem 0'}}
              primaryText='Nude or semi-nude sexual poses'
              onChange={() => {
                this.props.toggleCriteria('Nude or semi-nude sexual poses')
                this.props.checkOption1()
                trackEvent('image criteria', 'click', 'Nude or semi-nude sexual poses')
              }}
              leftCheckbox={<Checkbox checked={this.props.forms.option1} />}
            />
            <ListItem
              style={{backgroundColor: 'white', margin: '0.25rem 0'}}
              primaryText='Someone nude or semi-nude touching themselves in a sexual way'
              onChange={() => {
                this.props.toggleCriteria('Someone nude or semi-nude touching themselves in a sexual way')
                this.props.checkOption2()
                trackEvent('image criteria', 'click', 'Someone nude or semi-nude touching themselves in a sexual way')
              }}
              leftCheckbox={<Checkbox checked={this.props.forms.option2} />}
            />
            <ListItem
              style={{backgroundColor: 'white', margin: '0.25rem 0'}}
              primaryText='Any sexual activity involving an adult, child or both'
              onChange={() => {
                this.props.toggleCriteria('Any sexual activity involving an adult, child or both')
                this.props.checkOption3()
                trackEvent('image criteria', 'click', 'Any sexual activity involving an adult, child or both')
              }}
              leftCheckbox={<Checkbox checked={this.props.forms.option3} />}
            />
            <ListItem
              style={{backgroundColor: 'white', margin: '0.25rem 0'}}
              primaryText='Someone hurting someone else sexually'
              onChange={() => {
                this.props.toggleCriteria('Someone hurting someone else sexually')
                this.props.checkOption4()
                trackEvent('image criteria', 'click', 'Someone hurting someone else sexually')
              }}
              leftCheckbox={<Checkbox checked={this.props.forms.option4} />}
            />
            <ListItem
              style={{backgroundColor: 'white', margin: '0.25rem 0'}}
              primaryText='Sexual activity that includes animals'
              onChange={() => {
                this.props.toggleCriteria('Sexual activity that includes animals')
                this.props.checkOption5()
                trackEvent('image criteria', 'click', 'Sexual activity that includes animals')
              }}
              leftCheckbox={<Checkbox checked={this.props.forms.option5} />}
            />
          </List>
          {this.renderRequiredMessage()}
          <RaisedButton
            label='Next'
            primary
            onClick={() => {
              (this.props.forms.imageCriteria.length !== 0)
                ? this.props.changeForm()
                  : this.props.showCriteriaRequiredMessage()
              trackClick('Navigation', 'to url & decription form')
            }}
          />
        </div>
        <div className='other-options'>
          <div style={{ width: '4em', height: '4em', marginRight: '1em' }}>
            <img src='assets/icons/info_outline.svg' style={{
              height: '4em',
              width: '4em'
            }} />
          </div>
          <span>
          If the picture or video doesn't include any of the above, we may not be able to remove it. But there are other ways to get support - get advice on the <a href='https://www.childline.org.uk'> Childline website</a> or talk to a <a href='https://www.childline.org.uk/get-support/1-2-1-counsellor-chat/'> Childline counsellor</a>.
          </span>
        </div>
        <Footer />
      </div>
    )
  }
}

export default ImgCriteriaForm
