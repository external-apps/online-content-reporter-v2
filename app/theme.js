import getMuiTheme from 'material-ui/styles/getMuiTheme'

import ColorManipulator from 'material-ui/utils/colorManipulator'
import Spacing from 'material-ui/styles/spacing'
import zIndex from 'material-ui/styles/zIndex'

const muiTheme = getMuiTheme({
  palette: {
    spacing: Spacing,
    zIndex: zIndex,
    fontFamily: 'Roboto, sans-serif',
    primary1Color: '#632c7a', /*backgroundColor*/
    primary2Color: '#632c7a',
    primary3Color: '#632c7a',
    accent1Color: '#632c7a',
    accent2Color: '#632c7a',
    accent3Color: '#632c7a',
    textColor: '#fff',
    alternateTextColor: '#fff', /*button text color*/
    canvasColor: '#632c7a',
    borderColor: '#632c7a',
    disabledColor:'#632c7a',
    pickerHeaderColor: '#632c7a',
  }
})

module.exports =muiTheme
