import emptyList from '@/assets/emptyOrders.svg';
import { ArrowLeftSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const EmptyOrdersList = () => {
  const navigate = useNavigate();

  return (
    <div className="empty-orders section grid md:grid-cols-2  items-center justify-center">
      <div className="empty-orders-msg flex flex-col md:items-start items-stretch  gap-4 md:order-first order-last">
        <h2 className="text-2xl font-semibold text-slate-700 text-center">
          You haven't order any item yet.
        </h2>
        <Button onClick={() => navigate('/')} className="flex gap-2">
          <ArrowLeftSquare /> Continue shopping
        </Button>
      </div>
      <img src={emptyList} alt="empty orders list" />
    </div>
  );
};
