import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Avatar } from '../ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FaRegStar, FaStar, FaUser } from 'react-icons/fa';
import { useState } from 'react';

type ProductReviewProps = {
  prodRating: number;
  prodStars: number;
};
export const ProductReview = ({
  prodRating,
  prodStars,
}: ProductReviewProps) => {
  const [selectedRate, setSelectedRate] = useState(0);
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const rates = [1, 2, 3, 4, 5];
  const totalStarNum = 5;
  return (
    <div className="product-reviews space-y-2 mt-4 md:mt-10">
      <form className="space-y-2">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your review title."
        />
        <Textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Enter your review."
        />
        <div className="submit-review flex gap-2 items-center justify-between">
          <div className="rate flex gap-2">
            {Array.from({ length: selectedRate }, (_, index) => (
              <FaStar key={index} />
            ))}
            {rates.slice(selectedRate).map((rate) => (
              <FaRegStar
                key={rate}
                onClick={() => setSelectedRate(rate)}
                className="cursor-pointer hover:text-gray-700"
              />
            ))}
          </div>
          <Button>Submit Review</Button>
        </div>
      </form>
      <Card>
        <CardHeader>
          <CardTitle>Reviews</CardTitle>
          <CardDescription>
            <div className="ratting-stars flex items-center gap-1">
              {Array.from({ length: prodStars }, (_, index) => (
                <FaStar key={index} />
              ))}
              {Array.from({ length: totalStarNum - prodStars }, (_, index) => (
                <FaRegStar key={index} />
              ))}
              ({prodRating.toLocaleString()})
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {prodRating > 0 ? (
            Array.from({ length: prodRating })
              .slice(0, 5)
              .map((_, index) => {
                const randomRates = Math.floor(Math.random() * rates.length);
                const names = [
                  'Mahmoud Elmaghraby',
                  'Nigel Oconnell',
                  'Brody Garner',
                  'Tyrone Decker',
                  'Marc Huber',
                  'Michelle Harvey',
                  'Shelby Pruitt',
                  'Maxwell Mccall',
                  'Mikayla Giles',
                  'Eliana Wyatt',
                  'Delilah Dawson',
                  'Luca Mckenzie',
                  'Shea Buckley',
                ];
                const randomNames = Math.floor(Math.random() * names.length);
                return (
                  <CustomerReview
                    key={index}
                    cstName={names[randomNames]}
                    cstRate={randomRates}
                  />
                );
              })
          ) : (
            <p className="ms-2 text-xl">No reviews yet.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

type CustomerReviewProps = {
  cstName: string;
  cstRate: number;
  cstComment?: string;
};
const CustomerReview = ({
  cstName,
  cstRate,
  cstComment,
}: CustomerReviewProps) => {
  const totalStarNum = 5;
  return (
    <div className="cst-review space-y-3">
      <div className="cst flex gap-2">
        <Avatar className="bg-gray-400 flex items-center justify-center">
          <FaUser className="text-white text-xl" />
        </Avatar>
        <div className="cst-info">
          <h1>{cstName}</h1>
          <div className="cst-rate flex gap-1">
            {Array.from({ length: cstRate }, (_, index) => (
              <FaStar key={index} />
            ))}
            {Array.from({ length: totalStarNum - cstRate }, (_, index) => (
              <FaRegStar key={index} />
            ))}
          </div>
        </div>
      </div>
      <hr />
      <p>
        {cstComment ??
          `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
      quidem minus reiciendis facilis obcaecati adipisci quibusdam in
      voluptas, soluta aperiam.`}
      </p>
    </div>
  );
};
