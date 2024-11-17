import { getReviewsForAHotel } from "@/database/quries";
import { Reviews } from "@/models/review-model";
import Link from "next/link";
import React from "react";

const Review = async ({ id }) => {
  const reviews = await getReviewsForAHotel(id);
  return (
    <>
      {reviews.length === 0 ? (
        <Link href="#" className="underline">
          Be the first one to review
        </Link>
      ) : (
        <Link href={`/hotel/${id}/reviews`}>Reviews</Link>
      )}
    </>
  );
};

export default Review;
