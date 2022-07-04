import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StarRatings from "react-star-ratings";
import { selectAccessToken } from "../redux/auth/selector";
import { createReviewForProduct } from "../redux/product/action";
import { selectSingleProduct } from "../redux/product/selector";

const WriteReview = ({flag, setFlag}) => {
  const [rating, setRating] = useState(0);
  const accessToken = useSelector(selectAccessToken);
  const dispatch = useDispatch();
  const changeRating = (newRating) => {
    setRating(newRating);
  };
  const product = useSelector(selectSingleProduct);
  const productId = product.id;
  const [text, setText] = useState("");
  const handlePostReview = async (e) => {
      e.preventDefault()
    const review = {
        content: text,
        rating: rating, 
        productId: productId
    };
    await createReviewForProduct(accessToken, productId, review, dispatch);
    setFlag(!flag)
  };
  return (
    <div className="w-[1151px] h-[249px] bg-[#FFFFFF] mx-auto relative">
      <div className="absolute top-[23px] left-[50px]">
        <p className="w-[174px] h-[32px] font-sans font-bold text-[28px] leading-[32.2px] mb-[9px]">
          Write Review
        </p>
        <StarRatings
          rating={rating}
          changeRating={changeRating}
          starHoverColor="#FFD333"
          starRatedColor="#FFD333"
          starDimension="20px"
          starSpacing="0"
        />
        <form >
          <input
            onChange={(e) => setText(e.target.value)}
            className="w-[1051px] h-[83px] rounded-[5px] mt-[13px] border border-solid border-[#6A6A6A] bg-[#E6E6E6]
                        font-sans font-normal text-[16px] text-[#5A5A5A] leading-[18.4px] pl-[15px] 
                    "
            placeholder="Write your review..."
            type="text"
          />
          <button
          type="button"
            onClick={handlePostReview}
            className="w-[248px] h-[40px] rounded-[5px] mt-[13px] bg-[#FFD333] font-sans font-bold text-[16px] text-center "
          >
            Post Your Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default WriteReview;
