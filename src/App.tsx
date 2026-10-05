import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Depoiments } from './components/Depoiments';

export function App() {
  return (
    <Layout>
      <Hero />
      <Navbar />
      <About />
      <Depoiments />
    </Layout>
  );
}
