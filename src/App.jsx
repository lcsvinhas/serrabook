import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter.jsx';
import Header from './components/Header/index.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  )
}
