import { useWishlist } from '@/store/slices/wishlistSlice';

export const useIsOnWishlist = (prodId: string) => {
  const wishlist = useWishlist();
  return wishlist.map((wishlistProd) => wishlistProd.prodId).includes(prodId);
};
