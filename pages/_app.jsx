import "../styles/globals.css";
import dynamic from "next/dynamic";
import theme from '../theme'
// import { ThemeProvider } from 'theme-ui'

const ThemeProvider = dynamic(() => import("theme-ui"), {
  loading: () => <h1>loading...</h1>,
  // ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
