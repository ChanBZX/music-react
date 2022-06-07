
import RoutesFunc from './router';
import { BrowserRouter } from 'react-router-dom';

import Header from './views/layout/header';
import Footer from './views/layout/footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      {RoutesFunc()}
      <Footer />
    </BrowserRouter>
  );
}

export default App;