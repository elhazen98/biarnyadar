"use client";

import { useState, useEffect } from "react";
import RatingStar from "./ratingStar";


export default function FeedbackModal({ isOpen, onClose, onSubmit, initialRating = 0 }) {
  const [rating, setRating] = useState(initialRating);
  const [comment, setComment] = useState("");
  const [likeScore, setLikeScore] = useState(50);
  const [isSubmitting, setIsSubmitting] = useState(false);


  useEffect(() => {
    setRating(initialRating);
  }, [initialRating]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (rating === 0) {
      alert("Please select a rating");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await onSubmit(rating, comment, likeScore);
     
      setComment("");
      setLikeScore(50);
    } catch (error) {
      console.error("Error submitting feedback:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-white">Rate your experience</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Rating</label>
            <div className="flex justify-center">
              <RatingStar 
                totalStars={5} 
                initialRating={rating} 
                readonly={false} 
                onChange={setRating} 
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">How much did you like it? ({likeScore}%)</label>
            <input
              type="range"
              min="1"
              max="100"
              value={likeScore}
              onChange={(e) => setLikeScore(e.target.value)}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Comments (optional)</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              placeholder="Share your thoughts..."
            ></textarea>
          </div>
          
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-md"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}