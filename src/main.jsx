import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { store } from './store'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from '../theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <RouterProvider router={router}/>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
