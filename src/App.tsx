import './index.css';
import Layout from './components/layout';

function App() {
  return (
    <Layout
      leftSection={<div>Left Section</div>}
      rightSection={<div>Right Section</div>}
    />
  );
}

export default App;
