import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavMenu from './components/NavMenu';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import AllProductsPage from './pages/AllProductsPage';
import SalePage from './pages/SalePage';
import SingleCategoryPage from './pages/SingleCategoryPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer';
import SingleProductPage from './pages/SingleProductPage';

function App() {
  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='categories' element={<CategoriesPage />} />
        <Route path='all_products' element={<AllProductsPage />} />
        <Route path='/product/:productId' element={<SingleProductPage />} />
        <Route path='sales' element={<SalePage />} />
        <Route path='/category/:categoryId' element={<SingleCategoryPage />} />
        <Route path='cart' element={<CartPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
