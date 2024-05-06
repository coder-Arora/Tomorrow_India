import "../styles/globals.css";
import { ThemeProvider } from "@mui/system";
import theme from "../styles/theme";


export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
  )
 
}
