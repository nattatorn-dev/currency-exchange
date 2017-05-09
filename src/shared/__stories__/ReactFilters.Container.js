import React, { PropTypes, Component } from 'react'

export default class Container extends Component {
  constructor ( props ) {
    super( props )
    this.state = {
      value: props.value,
    }
  }

  handleChange = data => {
    this.setState( {
      value: data.value,
    } )
  }

  render () {
    const children = React.Children.map( this.props.children, child =>
      React.cloneElement( child, {
        value: this.state.value,
        onChange: this.handleChange,
      } )
    )

    return (
      <div className={this.props.className}>
        {children}
      </div>
    )
  }
}

Container.propTypes = {
  action: PropTypes.func,
  value: PropTypes.oneOfType( [
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
  ] ),
  children: PropTypes.element,
  className: PropTypes.string,
}
