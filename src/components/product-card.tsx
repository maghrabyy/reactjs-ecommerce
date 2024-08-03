import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '@/store/slices/shoppingCartSlice';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { ShoppingCart } from 'lucide-react';
import { ProdType } from '@/types/product-type';
import { ShoppingCartType } from '@/types/shopping-cart-type';
import { useToast } from './ui/use-toast';
import { useShoppingCartItems } from '@/store/slices/shoppingCartSlice';
import {
  addToWishlist,
  removeFromWishList,
} from '@/store/slices/wishlistSlice';
import { Link } from 'react-router-dom';
import { useIsOnWishlist } from '@/lib/useIsOnWishlist';

type ProductCardType = {
  prod: ProdType;
  twoColumnsStyle?: boolean;
};
export const ProductCard = ({
  prod,
  twoColumnsStyle = false,
}: ProductCardType) => {
  const isOnWishlist = useIsOnWishlist(prod.prodId);
  const { toast } = useToast();
  const shoppingCartItems = useShoppingCartItems();
  const totalStarNum = 5;
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    const shoppingCartItem: ShoppingCartType = {
      itemId: 'item' + crypto.randomUUID(),
      item: prod,
      itemQuantity: 1,
      totalPrice: function () {
        const prodDiscount = this.item.prodPrice * this.item.offer!;
        const prodPrice = this.item.offer
          ? this.item.prodPrice - prodDiscount
          : this.item.prodPrice;
        return prodPrice * this.itemQuantity;
      },
    };
    if (
      !shoppingCartItems
        .map((cartItem) => cartItem.item.prodId)
        .includes(shoppingCartItem.item.prodId)
    ) {
      dispatch(addItemToCart(shoppingCartItem));
      toast({
        title: 'Added to shopping cart.',
        description: `${prod.prodBrand.brandTitle} ${prod.prodTitle} has been added to shopping cart.`,
      });
    } else {
      toast({
        title: 'Added to shopping cart.',
        description: `${prod.prodBrand.brandTitle} ${prod.prodTitle} is already added to the shopping cart.`,
      });
    }
  };

  const addToWishlistHandler = () => {
    if (!isOnWishlist) {
      dispatch(addToWishlist(prod));
    } else {
      dispatch(removeFromWishList(prod));
    }
  };
  return (
    <Card className="relative flex flex-col justify-between">
      <Badge
        variant={prod.availability ? 'success' : 'destructive'}
        className="absolute top-2 left-2"
      >
        {prod.availability ? 'In stock' : 'Out stock'}
      </Badge>
      <div
        onClick={addToWishlistHandler}
        className={`add-to-wishlist absolute top-2 right-2 cursor-pointer hover:text-red-600 ${isOnWishlist ? 'text-red-600' : 'text-black'}`}
      >
        {isOnWishlist ? <FaHeart /> : <FaRegHeart />}
      </div>
      <CardHeader>
        <Link
          to={`/products/${prod.prodId}`}
          className="card-img flex justify-center py-2 h-[240px] relative"
        >
          <img
            src={prod.prodImg}
            className="object-contain hover:scale-105 duration-300 ease-in"
            alt={prod.prodDesc}
          />
          {prod.offer && (
            <Badge variant="destructive" className="absolute bottom-0 right-2">
              {prod.offer * 100}%
            </Badge>
          )}
        </Link>
        <CardTitle
          className={`hover:text-slate-700 select-none  ${twoColumnsStyle ? 'md:text-2xl sm:text-xl text-base truncate' : 'text-2xl'}`}
        >
          <Link to={`/products/${prod.prodId}`}>
            {prod.prodBrand.brandTitle} {prod.prodTitle}
          </Link>
        </CardTitle>
        <CardDescription className=" truncate">{prod.prodDesc}</CardDescription>
        <CardDescription className="flex items-center gap-2">
          {Array.from({ length: prod.prodStars }, (_, index) => (
            <FaStar key={index} />
          ))}
          {Array.from({ length: totalStarNum - prod.prodStars }, (_, index) => (
            <FaRegStar key={index} />
          ))}
          ({prod.prodRate.toLocaleString()})
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col xl:flex-row xl:gap-0 gap-2 xl:items-center justify-between">
        <Button
          onClick={addToCartHandler}
          className="order-last xl:order-first"
        >
          <ShoppingCart className="me-2" /> Add to cart
        </Button>
        {prod.offer ? (
          <div className="offer-price flex flex-col gap-1">
            <Badge
              variant="secondary"
              className="old-offer-price font-bold flex justify-center text-center"
            >
              <del className="old-price">
                {prod.prodPrice.toLocaleString()} EGP
              </del>
            </Badge>
            <Badge
              variant="secondary"
              className="new-offer-price font-bold flex justify-center text-center"
            >
              {(prod.prodPrice - prod.prodPrice * prod.offer).toLocaleString(
                'en',
                {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                },
              )}{' '}
              EGP
            </Badge>
          </div>
        ) : (
          <Badge
            variant="secondary"
            className="no-offer-price font-bold flex justify-center text-center"
          >
            {prod.prodPrice.toLocaleString()} EGP
          </Badge>
        )}
      </CardContent>
    </Card>
  );
};

type MiniProductCard = {
  prod: ProdType;
};
export const MiniProductCard = ({ prod }: ProductCardType) => {
  const isOnWishlist = useIsOnWishlist(prod.prodId);
  const { toast } = useToast();
  const shoppingCartItems = useShoppingCartItems();
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    const shoppingCartItem: ShoppingCartType = {
      itemId: 'item' + crypto.randomUUID(),
      item: prod,
      itemQuantity: 1,
      totalPrice: function () {
        const prodDiscount = this.item.prodPrice * this.item.offer!;
        const prodPrice = this.item.offer
          ? this.item.prodPrice - prodDiscount
          : this.item.prodPrice;
        return prodPrice * this.itemQuantity;
      },
    };
    if (
      !shoppingCartItems
        .map((cartItem) => cartItem.item.prodId)
        .includes(shoppingCartItem.item.prodId)
    ) {
      dispatch(addItemToCart(shoppingCartItem));
      toast({
        title: 'Added to shopping cart.',
        description: `${prod.prodBrand.brandTitle} ${prod.prodTitle} has been added to shopping cart.`,
      });
    } else {
      toast({
        title: 'Added to shopping cart.',
        description: `${prod.prodBrand.brandTitle} ${prod.prodTitle} is already added to the shopping cart.`,
      });
    }
  };

  const addToWishlistHandler = () => {
    if (!isOnWishlist) {
      dispatch(addToWishlist(prod));
    } else {
      dispatch(removeFromWishList(prod));
    }
  };
  return (
    <Card className="relative flex flex-col justify-between h-full">
      <div
        className={`absolute top-2 left-2 size-3 rounded-full sm:hidden ${prod.availability ? 'bg-green-500' : 'bg-red-500'}`}
      ></div>
      <Badge
        variant={prod.availability ? 'success' : 'destructive'}
        className="absolute top-2 left-2 hidden sm:block"
      >
        {prod.availability ? 'In stock' : 'Out stock'}
      </Badge>
      <div
        onClick={addToWishlistHandler}
        className={`add-to-wishlist absolute top-2 right-2 cursor-pointer hover:text-red-600 ${isOnWishlist ? 'text-red-600' : 'text-black'}`}
      >
        {isOnWishlist ? <FaHeart /> : <FaRegHeart />}
      </div>
      <CardHeader>
        <Link
          to={`/products/${prod.prodId}`}
          className="card-img flex justify-center py-2 h-[150px] relative"
        >
          <img
            src={prod.prodImg}
            className="object-contain hover:scale-105 duration-300 ease-in"
            alt={prod.prodDesc}
          />
          {prod.offer && (
            <Badge variant="destructive" className="absolute bottom-0 right-2">
              {prod.offer * 100}%
            </Badge>
          )}
        </Link>
        <CardTitle
          className={`hover:text-slate-700 select-none text-sm md:text-lg truncate`}
        >
          <Link to={`/products/${prod.prodId}`}>
            {prod.prodBrand.brandTitle} {prod.prodTitle}
          </Link>
        </CardTitle>
      </CardHeader>
      <div className="action absolute top-1 right-6">
        <ShoppingCart
          className="me-2 cursor-pointer hover:text-green-500"
          onClick={addToCartHandler}
        />
      </div>
      <CardContent>
        {prod.offer ? (
          <div className="offer-price flex flex-col gap-1">
            <Badge
              variant="secondary"
              className="old-offer-price font-bold flex gap-2 justify-center text-center"
            >
              {(prod.prodPrice - prod.prodPrice * prod.offer).toLocaleString(
                'en',
                {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                },
              )}{' '}
              EGP
              <del className="old-price hidden sm:block">
                {prod.prodPrice.toLocaleString()} EGP
              </del>
            </Badge>
          </div>
        ) : (
          <Badge
            variant="secondary"
            className="no-offer-price font-bold flex justify-center text-center"
          >
            {prod.prodPrice.toLocaleString()} EGP
          </Badge>
        )}
      </CardContent>
    </Card>
  );
};
