import { useState } from 'react';
import { User } from 'lucide-react';
import { FaRegHeart } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { FiShoppingBag } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export const AccountMenu = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const menuSelectedHandler = (path: string) => {
    navigate(path);
    setIsHovered(false);
  };
  return (
    <div
      className="account-menu relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <User className="cursor-pointer hover:text-slate-700" />
      <ul
        className={`menu-content ${isHovered ? 'block' : 'hidden'} absolute py-3 -right-[0.5rem] space-y-2 border bg-white rounded-md shadow.md`}
      >
        <li
          onClick={() => menuSelectedHandler('')}
          className="cursor-pointer select-none hover:bg-gray-300 px-6"
        >
          Account
        </li>
        <li
          onClick={() => menuSelectedHandler('/orders')}
          className="cursor-pointer select-none hover:bg-gray-300 px-6 flex gap-2 items-center"
        >
          <FiShoppingBag />
          Orders
        </li>
        <li
          onClick={() => menuSelectedHandler('/wishlist')}
          className="cursor-pointer select-none hover:bg-gray-300 px-6 flex gap-2 items-center"
        >
          <FaRegHeart />
          Wishlist
        </li>
        <li
          onClick={() => menuSelectedHandler('')}
          className="cursor-pointer select-none hover:bg-gray-300 px-6 flex gap-2 items-center"
        >
          <FiLogOut />
          Logout
        </li>
      </ul>
    </div>
  );
};
