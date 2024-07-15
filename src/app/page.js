import Header from '../components/Header';

export default function Home({ Component, pageProps }) {
  return (
    <>
      {pageProps && Object.keys(pageProps).map(key => (
        <div key={key}>{pageProps[key]}</div>
      ))}
    </>
  );
}