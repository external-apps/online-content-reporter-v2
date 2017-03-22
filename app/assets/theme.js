import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Spacing from 'material-ui/styles/spacing'
import zIndex from 'material-ui/styles/zIndex'

const muiTheme = getMuiTheme({
  palette: {
    spacing: Spacing,
    zIndex: zIndex,
    fontSize: '1.8rem',
    textTransform: 'none',
    fontFamily: 'childline-bold, sans-serif',
    primary1Color: '#0c3d52',   /* backgroundColor */
    primary2Color: '#0c3d52', /* no effect */
    primary3Color: '#0c3d52', /* no effect */
    accent1Color: '#0c3d52',
    accent2Color: '#0c3d52',
    accent3Color: '#0c3d52',
    textColor: '#0c3d52',       /* general text color e.g.: in list items */
    alternateTextColor: '#fff', /* button text color */
    canvasColor: '#0c3d52',
    borderColor: '#00A0CF', /* TextField initial  bottom border */
    disabledColor: '#9ea89e', /* TextField initial label and placeholder */
    pickerHeaderColor: '#00A0CF' /* no effect */
  }
})

module.exports = muiTheme
