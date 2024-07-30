import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import { FaSort } from 'react-icons/fa';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ProdType } from '@/types/product-type';
import { ProductCard } from '@/components/product-card';
import emptyList from '../../assets/Empty-list.svg';

enum SortOrder {
  asc = 'Alphabetically - A to Z',
  desc = 'Alphabetically - Z to A',
  priceHigh = 'Price - High to Low',
  priceLow = 'Price - Low to High',
  dateNew = 'Date - Newest First',
  dateOld = 'Date - Oldest First',
  bestSelling = 'Best Selling',
}

enum FilterBy {
  all = 'All',
  onStock = 'On Stock',
  discounted = 'Offers',
}
type ProductsListProps = {
  prodList: ProdType[];
};

export const ProductsList = ({ prodList }: ProductsListProps) => {
  const [productsList, setProductsList] = useState<ProdType[]>(prodList);
  const [sortOrder, setSortOrder] = useState<
    keyof typeof SortOrder | undefined
  >();
  const [filterBy, setFilterBy] = useState<keyof typeof FilterBy | undefined>();

  const filterChangeHandler = (value: keyof typeof FilterBy) => {
    setFilterBy(value);
    if (value === 'discounted') {
      setProductsList(prodList.filter((product) => product.offer));
    }
    if (value === 'onStock') {
      setProductsList(prodList.filter((product) => product.availability));
    }
    if (value === 'all') {
      setProductsList(prodList);
    }
  };

  const sortChangeHandler = (value: keyof typeof SortOrder) => {
    setSortOrder(value);
    if (value === 'bestSelling') {
      setProductsList((prodList) =>
        prodList.sort((a, b) => b.prodRate - a.prodRate),
      );
    }
    if (value === 'asc') {
      setProductsList((prodList) =>
        prodList.sort((a, b) => a.prodTitle.localeCompare(b.prodTitle)),
      );
    }
    if (value === 'desc') {
      setProductsList((prodList) =>
        prodList.sort((a, b) => b.prodTitle.localeCompare(a.prodTitle)),
      );
    }
    if (value === 'dateNew') {
      setProductsList((prodList) =>
        prodList.sort((a, b) => b.prodDate.localeCompare(a.prodDate)),
      );
    }
    if (value === 'dateOld') {
      setProductsList((prodList) =>
        prodList.sort((a, b) => a.prodDate.localeCompare(b.prodDate)),
      );
    }
    if (value === 'priceHigh') {
      setProductsList((prodList) =>
        prodList.sort((a, b) => b.prodPrice - a.prodPrice),
      );
    }
    if (value === 'priceLow') {
      setProductsList((prodList) =>
        prodList.sort((a, b) => a.prodPrice - b.prodPrice),
      );
    }
  };
  return (
    <div className="products-list">
      <div className="filter-sort flex gap-2 py-2 justify-between">
        <Select value={filterBy} onValueChange={filterChangeHandler}>
          <SelectTrigger className="max-w-[250px]">
            <FaFilter /> <SelectValue placeholder="Filter By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="onStock">On Stock</SelectItem>
            <SelectItem value="discounted">Offers</SelectItem>
          </SelectContent>
        </Select>
        <Select value={sortOrder} onValueChange={sortChangeHandler}>
          <SelectTrigger className="max-w-[250px]">
            <FaSort /> <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bestSelling">Best Selling</SelectItem>
            <SelectItem value="priceHigh">Price - High to Low</SelectItem>
            <SelectItem value="priceLow">Price - Low to High</SelectItem>
            <SelectItem value="asc">Alphabetically - A to Z</SelectItem>
            <SelectItem value="desc">Alphabetically - Z to A</SelectItem>
            <SelectItem value="dateNew">Date - Newest First</SelectItem>
            <SelectItem value="dateOld">Date - Oldest First</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {productsList.length === 0 ? (
        <div className="empty-list grid md:grid-cols-2 items-center py-10">
          <p className="xl:text-3xl text-xl  md:text-start text-center text-gray-600">
            No products found here.
          </p>
          <img src={emptyList} alt="page not found" />
        </div>
      ) : (
        <div className="products-list grid grid-cols-2 md:grid-cols-4 gap-2">
          {productsList.map((prod) => (
            <ProductCard key={prod.prodId} prod={prod} />
          ))}
        </div>
      )}
    </div>
  );
};
