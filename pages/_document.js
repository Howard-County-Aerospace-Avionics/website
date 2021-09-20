import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

const APP_NAME = 'Hoco Aerospace'
const APP_DESCRIPTION = ''
const Theme_Color = '#36454F'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render () {
    return (
      <Html lang='en' dir='ltr'>
        <title>Howard County Aerospace</title>
        <Head>
          <meta name='application-name' content={APP_NAME} />
          <meta name='description' content={APP_DESCRIPTION} />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='no' />
          <meta name='theme-color' content={Theme_Color} />
          <link rel='icon' href='/images/hocoaerologowhite.svg' type='image/svg' />
          <link defer rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            defer
            href='https://fonts.googleapis.com/css2?family=DM+Sans&display=swap'
            rel='stylesheet'
          />
          <link
            defer
            rel='stylesheet'
            type='text/css'
            href='https://fonts.googleapis.com/css?family=Roboto&display=swap'
          />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Mina&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap'
            rel='stylesheet'
          />
          {/* <meta property="og:audio" content="https://example.com/bond/theme.mp3" /> */}
          <meta property='og:type' content='website' />
          <meta property='og:site_name' content='Hoco Aerospace' />
          <meta property='og:title' content='Hoco Aerospace' />
          <meta property='og:url' content={''}></meta>
          <meta property='og:description' content={APP_DESCRIPTION} />
          <meta property='og:determiner' content='the' />
          <meta property='og:locale' content='en_US' />
          {/* <meta property="og:locale:alternate" content="fr_FR" />
                    <meta property="og:locale:alternate" content="es_ES" /> */}
          <meta property='og:site_name' content={APP_NAME} />
          <meta property='og:image' content='' />
          <meta property='og:image:type' content='image/png' />
          <meta property='og:image:width' content='300' />
          <meta property='og:image:height' content='300' />
          <meta property='og:image:alt' content='.' />
          <link rel='apple-touch-icon' href='' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='' />
          <meta name='twitter:creator' content='' />
          <meta name='twitter:title' content='Hoco Aerospace' />
          <meta name='twitter:description' content={APP_DESCRIPTION} />
          {/* <link rel='manifest' href='manifest.json' /> */}
          <link rel='mask-icon' href='' color={Theme_Color} />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='default'
          />
          <meta name='apple-mobile-web-app-title' content={APP_NAME} />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          {/* <meta
            name='msapplication-config'
            content='/static/icons/browserconfig.xml'
          /> */}
          <meta name='msapplication-TileColor' content={Theme_Color} />
          <meta name='msapplication-tap-highlight' content='no' />
          {/* TIP: set viewport head meta tag in _app.js, otherwise it will show a warning */}
          {/* <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
