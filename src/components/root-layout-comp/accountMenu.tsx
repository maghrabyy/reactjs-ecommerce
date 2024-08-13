import { useState } from 'react';
import { User } from 'lucide-react';
import { FaRegHeart } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const AccountMenu = () => {
  const [isHovered, setIsHovered] = useState(false);
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
        <li className="cursor-pointer hover:bg-gray-300 px-6">Account</li>
        <li className="cursor-pointer hover:bg-gray-300 px-6">
          <Link to="/orders" className="flex gap-2 items-center">
            <FiShoppingBag />
            Orders
          </Link>
        </li>
        <li className="cursor-pointer hover:bg-gray-300 px-6 ">
          <Link to="/wishlist" className="flex gap-2 items-center">
            <FaRegHeart />
            Wishlist
          </Link>
        </li>
        <li className="cursor-pointer hover:bg-gray-300 px-6 flex gap-2 items-center">
          <FiLogOut />
          Logout
        </li>
      </ul>
    </div>
  );
};
