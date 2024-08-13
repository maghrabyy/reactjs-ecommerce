import emptyList from '@/assets/Empty-list.svg';
import { ArrowLeftSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const EmptyWishlist = () => {
  const navigate = useNavigate();

  return (
    <div className="empty-cart section grid md:grid-cols-2  items-center justify-center">
      <div className="empty-cart-msg flex flex-col md:items-start items-stretch  gap-4 md:order-first order-last">
        <h2 className="text-2xl font-semibold text-slate-700 text-center">
          Your wishlist is empty.
        </h2>
        <Button onClick={() => navigate('/')} className="flex gap-2">
          <ArrowLeftSquare /> Continue shopping
        </Button>
      </div>
      <img src={emptyList} alt="empty shopping cart" />
    </div>
  );
};
