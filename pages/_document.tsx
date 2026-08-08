import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Favicon */}
        <link rel="icon" href="/images/Ayurvana.webp" />
        {/* Theme color */}
        <meta name="theme-color" content="#2D5016" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
