import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <link
          href="https://fonts.googleapis.com/css2?family=Francois+One&display=swap"
          rel="stylesheet"
        />
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
