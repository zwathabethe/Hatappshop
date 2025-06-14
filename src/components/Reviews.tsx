import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
}

interface ReviewsProps {
  productId: string;
  reviews: Review[];
  onAddReview: (review: Omit<Review, 'id' | 'date' | 'helpful'>) => void;
}

export const Reviews: React.FC<ReviewsProps> = ({
  productId,
  reviews,
  onAddReview,
}) => {
  const [isWritingReview, setIsWritingReview] = useState(false);
  const [newReview, setNewReview] = useState({
    rating: 5,
    comment: '',
  });

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  const handleSubmitReview = () => {
    onAddReview({
      userId: 'current-user', // This would come from auth context
      userName: 'Current User', // This would come from auth context
      userAvatar: 'https://via.placeholder.com/40', // This would come from auth context
      rating: newReview.rating,
      comment: newReview.comment,
    });
    setIsWritingReview(false);
    setNewReview({ rating: 5, comment: '' });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Customer Reviews</h2>
          <div className="flex items-center mt-2">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-5 w-5 ${
                    star <= averageRating
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-gray-600">
              {averageRating.toFixed(1)} ({reviews.length} reviews)
            </span>
          </div>
        </div>
        <button
          onClick={() => setIsWritingReview(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Write a Review
        </button>
      </div>

      {isWritingReview && (
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-4">Write Your Review</h3>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rating
            </label>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setNewReview({ ...newReview, rating: star })}
                  className="focus:outline-none"
                >
                  <Star
                    className={`h-6 w-6 ${
                      star <= newReview.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Review
            </label>
            <textarea
              value={newReview.comment}
              onChange={(e) =>
                setNewReview({ ...newReview, comment: e.target.value })
              }
              className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Share your experience with this product..."
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => setIsWritingReview(false)}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmitReview}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Submit Review
            </button>
          </div>
        </div>
      )}

      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-6">
            <div className="flex items-start space-x-4">
              <img
                src={review.userAvatar}
                alt={review.userName}
                className="h-10 w-10 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{review.userName}</h4>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <div className="flex items-center mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${
                        star <= review.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-2 text-gray-600">{review.comment}</p>
                <div className="mt-2">
                  <button className="text-sm text-gray-500 hover:text-gray-700">
                    Helpful ({review.helpful})
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 