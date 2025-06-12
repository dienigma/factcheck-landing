import './index.css';
import Layout from './components/layout';
import Hero from './components/hero';
import SignupForm from './components/signup-form';

function App() {
  return (
    <Layout
      leftSection={<Hero />}
      rightSection={<SignupForm />}
    />
  );
}

export default App;
