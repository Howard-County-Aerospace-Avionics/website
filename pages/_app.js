import { GlobalStyle, Theme } from '../src/styles'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
