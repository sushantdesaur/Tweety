import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {Provider} from "../context";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
