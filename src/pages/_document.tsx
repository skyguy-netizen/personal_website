import { Head, Html, Main, NextScript } from 'next/document';

// Prefix for subpath mirror builds (e.g. Purdue homes). Empty for root builds.
const basePath = process.env.PAGES_BASE_PATH || '';

export default function Document() {
  return (
    <Html lang='en' suppressHydrationWarning>
      <Head>
        <script
          async
          defer
          src='https://analytics.skyguy8108.com/script.js'
          data-website-id='5a78190a-bdad-48a4-901a-c7400be41ca6'
        ></script>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href={`${basePath}/favicon/apple-touch-icon.png`}
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href={`${basePath}/favicon/favicon-32x32.png`}
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href={`${basePath}/favicon/favicon-16x16.png`}
        />
        <link rel='manifest' href={`${basePath}/favicon/site.webmanifest`} />
        <meta name='theme-color' content='#121212' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
