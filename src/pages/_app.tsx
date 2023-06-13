import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
          errorRetryCount: 3,
          errorRetryInterval: 1500,
          shouldRetryOnError: true,
          revalidateIfStale: true,
          revalidateOnReconnect: true,
          revalidateOnMount: true,
          refreshInterval: 2000,
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
