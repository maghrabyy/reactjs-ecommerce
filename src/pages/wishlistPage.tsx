import { useWishlist } from '@/store/slices/wishlistSlice';
import { WishlistItem } from '@/components/wishlist-comp/wishlist-item';
import { EmptyWishlist } from '@/components/wishlist-comp/emptyWishlist';

export const WishlistPage = () => {
  const wishlist = useWishlist();

  return (
    <div className="wishlist-page section">
      <h1 className="text-2xl py-2">My Wishlist</h1>
      <div className="wishlist-items flex flex-col gap-2">
        {wishlist.length === 0 ? (
          <EmptyWishlist />
        ) : (
          wishlist.map((prod) => {
            return <WishlistItem key={prod.prodId} prod={prod} />;
          })
        )}
      </div>
    </div>
  );
};
