type CollectionItemProps = {
  img: string;
  title: string;
  path: string;
};
import { Link } from 'react-router-dom';
export const CollectionItem = ({ img, title, path }: CollectionItemProps) => {
  return (
    <Link to={path}>
      <div className="relative p-3 panel overflow-hidden flex justify-center">
        <img
          src={img}
          className="h-[250px] object-contain hover:scale-105 duration-300"
          alt={title}
        />
        <h2 className="absolute bottom-0 left-0 font-bold text-2xl text-center text-white bg-black w-full bg-opacity-55 py-2 select-none">
          {title}
        </h2>
      </div>
    </Link>
  );
};
