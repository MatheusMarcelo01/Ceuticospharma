import Document, { Head, Html, Main, NextScript } from 'next/document';


class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="icon" href="/favicon-32x32.png"></link>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        </Head>

        <body>
          <script defer src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>

          <Main />
          <NextScript />

        </body>
      </Html>
    );
  }
}

export default MyDocument;
