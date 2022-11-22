import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `flex-start`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
    <Link
      to="/chat-authenticate"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
        padding: `1em`,
      }}
    >
      Chat with Authentication
    </Link>
    <Link
      to="/form"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
        padding: `1em`,
      }}
    >
      Contact Form
    </Link>
   
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
