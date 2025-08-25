import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';

export function App() {
  return (
    <Layout>
      <Hero />
      <Navbar />
    </Layout>
  );
}
