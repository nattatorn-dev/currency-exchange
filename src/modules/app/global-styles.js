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

  ${/* override css */ '' }
  .number-input-theme-white::placeholder {
    color: rgb(68, 68, 68);
  }

  .number-input-theme-night::placeholder {
    color: #CCC;
  }

  .Select-control {
    border: 0px !important;
  }
`
