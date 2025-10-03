import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

// Roboto 불러오기
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // 원하는 굵기만 추가
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
