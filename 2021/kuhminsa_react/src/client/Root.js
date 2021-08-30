import React from "react"
import { BrowserRouter } from "react-router-dom"
import App from "../shared/App"
import "/src/assets/scss/common.scss"
import "/src/assets/scss/style.scss"
// import "/src/assets/scss/mobile.scss"
import "/src/assets/scss/slick.scss"
import "/src/assets/scss/slick-theme.scss"

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

export default Root