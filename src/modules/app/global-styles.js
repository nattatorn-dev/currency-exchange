import { injectGlobal } from 'styled-components'

injectGlobal`
  body {
    margin: 0;
    padding: 0
  }

  input {
    &:focus {
      outline: none;
    }
  }

  table {
    border-spacing: 0;
  }

  button {
    &:active {
      outline: none;
      border: none;
    }
  }

  .Select-control {
    border: 0px;
  }
`
