import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import AuthCheck from "../component/AuthCheck";
import MainContainer from "../component/MainContainer";
import { store } from "../store";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthCheck>
        <MainContainer>
          <Component {...pageProps} />
        </MainContainer>
      </AuthCheck>
    </Provider>
  );
}

export default MyApp;
