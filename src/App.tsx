import Header from './components/Header';
import PrimeNumber from './components/PrimeNumber';
import PrimeFactorization from './components/PrimeFactorization';
import PerfectNumber from './components/PerfectNumber';
import Gcd from './components/Gcd';
import Footer from './components/Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>THE NUMBER</title>
          <meta
            name="description"
            content="数字に関する色々なことができるサービスです"
          />
          <meta
            name="keywords"
            content="数字, 素数, 素因数分解, 完全数, 最大公約数"
          />
        </Helmet>
        <div className='bg-number-pattern bg-cover bg-repeat-y md:bg-inherit md:bg-repeat-x absolute top-0 w-full'>
          <div className='flex flex-col gap-8 md:gap-16 my-8 md:my-16'>
            <Header />

            <main className="main flex flex-col items-center justify-center gap-y-8 px-4 w-9/10 md:w-3/4 mt-8 md:mt-16 my-auto md:mx-auto">
              <PrimeNumber />

              <PrimeFactorization />

              <PerfectNumber />

              <Gcd />
            </main>

            <Footer />
          </div>
        </div>
      </HelmetProvider>
    </>
  );
}

export default App;
