/*import React from 'react'
import ReactHTMLEmail from 'react-html-email'
// set up React to support a few HTML attributes useful for legacy clients
ReactHTMLEmail.injectReactEmailAttributes()
import { Box, Email, Image, Item, Span, A, renderEmail } from 'react-html-email'

const css = `
@media only screen and (max-device-width: 480px) {
  font-size: 20px !important;
}`.trim()

const email = renderEmail()(
  <Email title='Childline - Online Content Report' headCSS={css}>
    <Item>
      <Span fontSize={15}>Online Content Report</Span>
    </Item>
    <Item>
      <Box cellSpacing={20} width='100%' style={{ borderTop: '3px solid black' }}>
        <Item>
          <Span color='gray' lineHeight={20}>Report generated by <A href='https://github.com/childline-yoti/online-content-reporter'>Will & Nori's Reporting App</A></Span>
          <Image data-mc-bar='bar' data-mc-baz='baz' alt='react' src='imgs/childline-logo.jpg' width={100} height={100} />
        </Item>
      </Box>
    </Item>
  </Email>
)

export default email
*/
