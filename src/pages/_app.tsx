import "../styles/global.css";

import { CountdownProProvider } from "../contexts/CountdownContext";

function MyApp({ Component, pageProps }) {
  return (
    <CountdownProProvider>
      <Component {...pageProps} />;
    </CountdownProProvider>
  );
}

export default MyApp;
