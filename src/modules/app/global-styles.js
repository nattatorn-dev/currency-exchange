import { injectGlobal } from 'styled-components'
import 'react-filters/components/Slider/Slider.scss'
import 'react-select/dist/react-select.css'

injectGlobal`
  body {
    margin: 0;
    padding: 0;
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
    color: rgb(204, 204, 204);
  }

  .Select-control {
    border: 0px !important;
  }
`
