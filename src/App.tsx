import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { About } from './components/About';

export function App() {
  return (
    <Layout>
      <Hero />
      <Navbar />
      <About />
    </Layout>
  );
}
