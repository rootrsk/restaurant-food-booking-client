import React from 'react'
import { Provider } from 'react-redux'
import store from '../src/redux/store'
import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";
import { SnackbarProvider } from 'notistack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
function MyApp({ Component, pageProps }) {
  const [themeMode, setThemeMode] = React.useState('light')
  const toggleTheme = () =>{
    setThemeMode(themeMode==='light'?'dark':'light') 
  }
  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  const theme = createTheme({
    palette: {
      mode:themeMode,
      ...(themeMode === 'light'
      ?
        {
          background: {
            default: '#fff',
            paper: '#fff',
            body: '#F1F5F7'
          },
        }:
        {
          background: {
            default: '#252B3B',
            paper: '#252B3B',
            body: '#1D222E'
          },
          // #252B3B
        }

      )
    },
  });
  return(
    <>
    <NextNProgress />
      <Provider store={store}>
        <ThemeProvider theme={theme} >
          <SnackbarProvider maxSnack={5} >
            <Layout>
              <Component toggleTheme={toggleTheme} themeMode={themeMode} {...pageProps} />
            </Layout>
          </SnackbarProvider>
        </ThemeProvider>
      </Provider>
    </>
  ) 
}

export default MyApp
