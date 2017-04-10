import React         from 'react'
import { withTheme } from 'styled-components'

ArrowDropdown.propTypes = {
  children: React.PropTypes.node.isRequired,
  dropdownMenuStyleOpen: React.PropTypes.bool.isRequired,
  theme: React.PropTypes.object.isRequired,
}

function ArrowDropdown (
  {
    children,
    dropdownMenuStyleOpen,
    theme,
  },
) {
  const stlyeArrowDropdown = () => ( {
    backgroundClip: 'padding-box',
    backgroundColor: theme.themes[ theme.theme ].backgroundColorPrimary,
    border: '1px solid rgba(0,0,0,.07)',
    borderRadius: '1px',
    boxShadow: '0 6px 12px rgba(0,0,0,.175)',
    color: theme.themes[ theme.theme ].fontColorPrimary,
    display: dropdownMenuStyleOpen ? 'block' : 'none',
    float: 'left',
    fontSize: '14px',
    listStyle: 'none',
    margin: '2px 0 0',
    minWidth: '160px',
    padding: '0',
    position: 'absolute',
    right: '10px',
    top: '100%',
    zIndex: '100',
  } )

  const stlyeArrowPosition = () => ( {
    float: 'left',
    height: '10px',
    left: '135px',
    overflow: 'hidden',
    position: 'absolute',
    top: '-8px',
    width: '18px',
  } )

  const stlyeLeftLine = () => ( {
    borderBottom: '9px solid rgba(0,0,0,.1)',
    borderLeft: '9px solid transparent',
    borderRight: '9px solid transparent',
    display: 'inline-block',
    height: 'auto',
    left: '0',
    marginLeft: '-1px',
    position: 'absolute',
    top: '0',
    width: 'auto',
  } )

  const stlyeRightLine = () => ( {
    borderBottom: `9px solid ${ theme.themes[ theme.theme ].backgroundColorPrimary }`,
    borderLeft: '9px solid transparent',
    borderRight: '9px solid transparent',
    display: 'inline-block',
    marginTop: '-1px',
    position: 'absolute',
    top: '1px',
  } )

  return (
    <div style={stlyeArrowDropdown()}>
      <div style={stlyeArrowPosition()}>
        <span style={stlyeLeftLine()} />
        <span style={stlyeRightLine()} />
      </div>
      {children}
    </div>
  )
}

export default withTheme( ArrowDropdown )
