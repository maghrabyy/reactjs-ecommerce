import { ProdType } from '@/types/product-type';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Trash } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ShoppingCartType } from '@/types/shopping-cart-type';
import { useToast } from '@/components/ui/use-toast';
import { useShoppingCartItems } from '@/store/slices/shoppingCartSlice';
import { useDispatch } from 'react-redux';
import { removeFromWishList } from '@/store/slices/wishlistSlice';
import { addItemToCart } from '@/store/slices/shoppingCartSlice';

type WishlistItemProps = {
  prod: ProdType;
};
export const WishlistItem = ({ prod }: WishlistItemProps) => {
  const { toast } = useToast();
  const shoppingCartItems = useShoppingCartItems();
  const dispatch = useDispatch();

  const addToCartHandler = (prod: ProdType) => {
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

  const removeFromWishlistHandler = (prod: ProdType) => {
    dispatch(removeFromWishList(prod));
  };
  return (
    <div className="prod shadow-md py-2 px-4 border border-gray-300 rounded-md grid-cols-1 grid md:grid-cols-4 gap-2">
      <div className="img flex justify-center">
        <img
          className="h-[200px] object-contain"
          src={prod.prodImg}
          alt={prod.prodTitle}
        />
      </div>
      <div className="prod-info md:col-span-2 flex flex-col gap-2 justify-center">
        <Link to={`/products/${prod.prodId}`}>
          <h1 className="text-2xl font-semibold hover:text-slate-700">
            {prod.prodTitle}
          </h1>
        </Link>
        <p>{prod.prodDesc}</p>
        <div className="rating flex items-center gap-1">
          {Array.from({ length: prod.prodStars }, (_, index) => (
            <FaStar key={index} />
          ))}
          {Array.from({ length: 5 - prod.prodStars }, (_, index) => (
            <FaRegStar key={index} />
          ))}
          ({prod.prodRate.toLocaleString()})
        </div>
      </div>
      <div className="action flex flex-col gap-2 justify-center">
        <Button onClick={() => addToCartHandler(prod)} className="flex gap-2">
          <ShoppingCart /> Add to cart
        </Button>
        <Button
          onClick={() => removeFromWishlistHandler(prod)}
          variant="outline"
          className="flex gap-2"
        >
          <Trash /> Remove from wishlist
        </Button>
      </div>
    </div>
  );
};
