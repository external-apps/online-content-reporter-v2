import React from 'react'
import '../scss/style.scss'
import { List, ListItem } from 'material-ui/List'
import ActionGrade from 'material-ui/svg-icons/action/grade'

const SectionTitle = (props) => {
  let list
  if (props.list) {
    list = props.list.map( (item,i) => <ListItem  key={i} leftIcon={<ActionGrade />} primaryText={item} style={{backgroundColor: 'white', margin: '0.25rem 0'}} />)
  }
  return (
  <div className='section-title-container'>
    <h1 className='section-title-heading'>{props.heading}</h1>
    <div className='section-title-subheading'>
      {props.subheading}
      <span className='bold'> {props.span}</span>
      <List>
        {props.list &&  list}
      </List>
    </div>
  </div>
)
}

export default SectionTitle
