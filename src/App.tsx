import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';

import { RootLayout } from './layouts/root-layout';
import { CollectionLayout } from './layouts/collection-layout';
import { ProductsLayout } from './layouts/products-layout';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { CategoriesPage } from './pages/categoriesPage';
import { SubCategoryPage } from './pages/subCategoryPage';
import { HomePage } from './pages/homePage';
import { ShoppingCartPage } from './pages/shoppingCartPage';
import { OrdersPage } from './pages/ordersPage';
import { WishlistPage } from './pages/wishlistPage';
import { ShippingDetails } from './components/shopping-cart-comp/shipping-details';
import { PaymentMethod } from './components/shopping-cart-comp/payment-method';
import { DealsPage } from './pages/dealsPage';
import { ContactUsPage } from './pages/contact-usPage';
import { AboutPage } from './pages/aboutPage';
import { NotFound404Page } from './pages/notFoundPage';
import { Toaster } from '@/components/ui/toaster';
import categories from '@/data/categories.json';
import brands from '@/data/brands.json';
import { BrandsPage } from './pages/brandsPage';

function App() {
  const categoriesRoutes = categories.map((category) => {
    const categoryTitle = category.categoryTitle.replace(' ', '-');
    return (
      <Route
        key={category.categoryId}
        path={`/collections/${categoryTitle}`}
        element={<CategoriesPage category={category} />}
      >
        {category.subCategories?.map((subCategory) => {
          const subCategoryTitle = subCategory.categoryTitle.replace(' ', '-');
          return (
            <Route
              key={subCategory.categoryId}
              path={`/collections/${categoryTitle}/${subCategoryTitle}`}
              element={<SubCategoryPage subCategory={subCategory} />}
            />
          );
        })}
      </Route>
    );
  });
  const brandsRoutes = brands.map((brand) => {
    const brandTitle = brand.brandTitle.replace(' ', '-');
    return (
      <Route
        key={brand.brandId}
        path={`/collections/${brandTitle}`}
        element={<BrandsPage brand={brand} />}
      />
    );
  });
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/shopping-cart" element={<ShoppingCartPage />}>
          <Route path="shipping-details" element={<ShippingDetails />} />
          <Route path="payment-methods" element={<PaymentMethod />} />
        </Route>
        <Route path="/deals" element={<DealsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/collections" element={<CollectionLayout />}>
          {categoriesRoutes}
          {brandsRoutes}
        </Route>
        <Route path="/products" element={<ProductsLayout />}>
          <Route path=":prodId" element={<ProductDetailsPage />} />
        </Route>
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="*" element={<NotFound404Page />} />
      </Route>,
    ),
  );
  return (
    <div>
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
