import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { TodoProvider } from '../context/todo/';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TodoProvider>
      <Component {...pageProps} />
    </TodoProvider>
  );
}

export default MyApp;
