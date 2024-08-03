import products from '@/data/products.json';
import { ProdType } from '@/types/product-type';
import { SimilarProducts } from './similarProducts';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { ShoppingCart } from 'lucide-react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { FaShoppingBasket } from 'react-icons/fa';
import { useIsOnWishlist } from '@/lib/useIsOnWishlist';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItemToCart } from '@/store/slices/shoppingCartSlice';
import { useShoppingCartItems } from '@/store/slices/shoppingCartSlice';
import { useToast } from '@/components/ui/use-toast';
import {
  addToWishlist,
  removeFromWishList,
} from '@/store/slices/wishlistSlice';
import { useState } from 'react';

type ProductDetailProps = {
  product: ProdType;
};
export const ProductDetails = ({ product }: ProductDetailProps) => {
  const [itemQty, setItemQty] = useState(1);
  const isOnWishlist = useIsOnWishlist(product.prodId);
  const shoppingCartItems = useShoppingCartItems();
  const { toast } = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const discountedPrice =
    product.prodPrice - product.prodPrice * product.offer!;
  const totalStarNum = 5;
  const productTitle = `${product?.prodBrand.brandTitle} ${product?.prodTitle}`;
  const addToWishlistHandler = () => {
    if (!isOnWishlist) {
      dispatch(addToWishlist(product));
      toast({
        title: 'Added to wishlist.',
        description: `${product.prodBrand.brandTitle} ${product.prodTitle} has been added to wishlist.`,
      });
    } else {
      dispatch(removeFromWishList(product));
      toast({
        title: 'Removed from wishlist.',
        description: `${product.prodBrand.brandTitle} ${product.prodTitle} has been removed from wishlist.`,
      });
    }
  };
  const decrementItemHandler = () => {
    if (itemQty > 1) {
      setItemQty((qty) => (qty = qty - 1));
    }
  };
  const incrementItemHandler = () => {
    setItemQty((qty) => (qty = qty + 1));
  };

  const shoppingCartItem = {
    item: product,
    itemId: product.prodId,
    itemQuantity: itemQty,
    totalPrice: function () {
      return (product.offer ? discountedPrice : product.prodPrice) * itemQty;
    },
  };

  const isAlreadyOnCart = shoppingCartItems
    .map((cartItem) => cartItem.item.prodId)
    .includes(shoppingCartItem.item.prodId);

  const addToCartHandler = () => {
    if (!isAlreadyOnCart) {
      dispatch(addItemToCart(shoppingCartItem));
      toast({
        title: 'Added to shopping cart.',
        description: `${product.prodBrand.brandTitle} ${product.prodTitle} has been added to shopping cart.`,
      });
    } else {
      toast({
        title: 'Added to shopping cart.',
        description: `${product.prodBrand.brandTitle} ${product.prodTitle} is already added to the shopping cart.`,
      });
    }
  };
  const buyNowHandler = () => {
    if (!isAlreadyOnCart) {
      navigate('/shopping-cart/shipping-details');
      dispatch(addItemToCart(shoppingCartItem));
      toast({
        title: 'Added to shopping cart.',
        description: `${product.prodBrand.brandTitle} ${product.prodTitle} has been added to shopping cart.`,
      });
    } else {
      navigate('/shopping-cart/shipping-details');
    }
  };
  const similarProducts = product.prodCategory.subCategory
    ? products.filter(
        (prod) =>
          prod.prodCategory.subCategory?.categoryId ===
            product.prodCategory.subCategory?.categoryId &&
          prod.prodId !== product.prodId,
      )
    : products.filter(
        (prod) =>
          prod.prodCategory.categoryId === product.prodCategory.categoryId &&
          prod.prodId !== product.prodId,
      );
  return (
    <div className="product-details grid gap-6 md:grid-cols-5 grid-cols-1">
      <div className="prod-img md:col-span-2 place-self-center md:self-auto">
        <img
          src={product.prodImg}
          className="max-h-[500px]"
          alt={product.prodDesc}
        />
      </div>
      <div className="prod-info pt-6 flex flex-col gap-2 md:col-span-3">
        <div
          onClick={addToWishlistHandler}
          className={`add-to-wishlist self-end text-2xl cursor-pointer hidden lg:block hover:text-red-600 ${isOnWishlist ? 'text-red-600' : 'text-black'}`}
        >
          {isOnWishlist ? <FaHeart /> : <FaRegHeart />}
        </div>
        {product.offer ? (
          <div className="discounted-price flex justify-center md:justify-start gap-2">
            <h1 className="font-bold text-4xl">
              {discountedPrice.toLocaleString('en', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}{' '}
              EGP
            </h1>
            <del className="text-2xl">
              {' '}
              {product.prodPrice.toLocaleString()} EGP
            </del>
          </div>
        ) : (
          <h1 className="font-bold text-4xl text-center md:text-start">
            {product.prodPrice.toLocaleString()} EGP
          </h1>
        )}
        <div className="prod-title flex md:flex-row flex-col justify-between">
          <h1 className="font-bold text-2xl text-center md:text-start">
            {productTitle} {product.prodColor && `- ${product.prodColor}`}
          </h1>
          <div className="availability flex gap-2 items-center self-center">
            <div
              className={`size-3 rounded-full ${product.availability ? 'bg-green-500' : 'bg-red-500'}`}
            ></div>
            <h3>{product.availability ? 'On Stock' : 'Out Stock'}</h3>
          </div>
        </div>

        <div className="ratting-stars flex items-center gap-1 ms-2">
          {Array.from({ length: product.prodStars }, (_, index) => (
            <FaStar key={index} />
          ))}
          {Array.from(
            { length: totalStarNum - product.prodStars },
            (_, index) => (
              <FaRegStar key={index} />
            ),
          )}
          ({product.prodRate.toLocaleString()})
        </div>
        <p className="prod-desc ms-2">
          {product.prodDesc} Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Dolore iure maiores dignissimos facere alias cupiditate quia
          magni eveniet doloremque expedita?
        </p>
        <div className="action flex items-center gap-4">
          <div className="item-quantity flex gap-2 items-center">
            <div
              onClick={() => decrementItemHandler()}
              className="dec shadow-sm rounded-md bg-slate-100 text-slate-800 text-xs p-3 cursor-pointer hover:bg-slate-200"
            >
              <FaMinus />
            </div>
            <div className="qty select-none">{itemQty}</div>
            <div
              onClick={() => incrementItemHandler()}
              className="inc shadow-sm rounded-md bg-slate-100 text-slate-800 text-xs p-3 cursor-pointer hover:bg-slate-200"
            >
              <FaPlus />
            </div>
          </div>
          <button
            onClick={addToCartHandler}
            className="btn-outline flex-grow flex gap-2 item"
          >
            <ShoppingCart /> Add to carts
          </button>
          <button
            onClick={buyNowHandler}
            className="btn-main hidden lg:flex flex-grow  gap-2"
          >
            <FaShoppingBasket />
            Buy Now
          </button>
        </div>
        <button
          onClick={buyNowHandler}
          className="btn-main lg:hidden flex-grow flex gap-2"
        >
          <FaShoppingBasket />
          Buy Now
        </button>
        <button
          className="btn-outline flex gap-2 lg:hidden"
          onClick={addToWishlistHandler}
        >
          {isOnWishlist ? <FaHeart /> : <FaRegHeart />} Add to wishlist
        </button>
        <SimilarProducts similarProds={similarProducts} />
      </div>
    </div>
  );
};
