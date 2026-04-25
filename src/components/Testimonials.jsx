import { useEffect, useMemo, useState } from "react";
import "./Testimonials.css";

const reviews = [
  {
    id: 1,
    name: "Aijaz Khan",
    role: "Software Engineer",
    rating: 5,
    text: "Fast response and very professional service from booking to completion.",
  },
  {
    id: 2,
    name: "Raju",
    role: "Doctor",
    rating: 5,
    text: "They reached in under two hours and fixed the issue on the first visit.",
  },
  {
    id: 3,
    name: "Sangeeta",
    role: "Chartered Accountant",
    rating: 4,
    text: "Clean work, fair pricing, and clear communication throughout the process.",
  },
  {
    id: 4,
    name: "Naveen Reddy",
    role: "Facility Manager",
    rating: 5,
    text: "Reliable team for AMC support, always punctual and prepared.",
  },
  {
    id: 5,
    name: "Farah Ali",
    role: "Boutique Owner",
    rating: 4,
    text: "Professional technicians and smooth installation with zero downtime.",
  },
  {
    id: 6,
    name: "Pradeep Kumar",
    role: "Operations Lead",
    rating: 5,
    text: "Great maintenance quality and quick follow-up whenever support is needed.",
  },
];

const starsFor = (rating) => `${"★".repeat(rating)}${"☆".repeat(5 - rating)}`;

function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);

  useEffect(() => {
    const getCardsPerView = () => {
      if (window.innerWidth < 720) {
        return 1;
      }

      if (window.innerWidth < 1100) {
        return 2;
      }

      return 3;
    };

    const handleResize = () => {
      const nextCardsPerView = getCardsPerView();
      setCardsPerView(nextCardsPerView);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const maxStart = Math.max(0, reviews.length - cardsPerView);
    setStartIndex((current) => Math.min(current, maxStart));
  }, [cardsPerView]);

  const maxStartIndex = Math.max(0, reviews.length - cardsPerView);

  const clonedCardCount = Math.min(cardsPerView, reviews.length);

  const trackReviews = useMemo(
    () => [...reviews, ...reviews.slice(0, clonedCardCount)],
    [clonedCardCount]
  );

  const averageRating = useMemo(() => {
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (total / reviews.length).toFixed(1);
  }, []);

  const totalReviewsLabel = "5000+";

  const handlePrevious = () => {
    if (maxStartIndex === 0) {
      return;
    }

    setStartIndex((current) => (current === 0 ? maxStartIndex : current - 1));
  };

  const handleNext = () => {
    if (maxStartIndex === 0) {
      return;
    }

    setStartIndex((current) => (current >= maxStartIndex ? 0 : current + 1));
  };

  useEffect(() => {
    if (maxStartIndex === 0) {
      return undefined;
    }

    const autoSlideInterval = window.setInterval(() => {
      setStartIndex((current) => current + 1);
    }, 2800);

    return () => window.clearInterval(autoSlideInterval);
  }, [maxStartIndex]);

  const handleTrackTransitionEnd = () => {
    if (startIndex <= maxStartIndex) {
      return;
    }

    setIsTransitionEnabled(false);
    setStartIndex(0);
  };

  useEffect(() => {
    if (isTransitionEnabled) {
      return;
    }

    const frameId = window.requestAnimationFrame(() => {
      setIsTransitionEnabled(true);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [isTransitionEnabled]);

  return (
    <section className="trust-reviews-section">
      <header className="trust-reviews-top">
        <h2>
          Read reviews, <strong>ride with confidence.</strong>
        </h2>
        <p className="trust-reviews-subtext">
          Trusted AC support for homes and businesses backed by consistently positive customer feedback.
        </p>
        <p className="trust-reviews-rating-line" aria-label="Average rating and total review count">
          <span className="trust-reviews-stars" aria-hidden="true">★★★★★</span>
          <span>{averageRating}/5</span>
          <span className="trust-reviews-divider" aria-hidden="true">•</span>
          <span>{totalReviewsLabel} reviews</span>
        </p>
      </header>

      <div className="trust-reviews-layout">
        <div className="trust-reviews-cards-area">
          <div
            className="trust-reviews-slider"
            style={{
              "--cards-per-view": cardsPerView,
              "--slider-index": startIndex,
              "--slider-transition": isTransitionEnabled
                ? "transform 560ms cubic-bezier(0.22, 1, 0.36, 1)"
                : "none",
            }}
            aria-live="polite"
          >
            <div className="trust-reviews-track" onTransitionEnd={handleTrackTransitionEnd}>
              {trackReviews.map((review, index) => (
                <article className="trust-review-card" key={`${review.id}-${index}`}>
                  <p className="trust-review-text">"{review.text}"</p>
                  <p className="trust-review-stars" aria-label={`${review.rating} out of 5 stars`}>
                    {starsFor(review.rating)}
                  </p>
                  <h3 className="trust-review-name">{review.name}</h3>
                  <p className="trust-review-role">{review.role}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="trust-reviews-nav" aria-label="Testimonial navigation">
            <button type="button" onClick={handlePrevious} aria-label="Previous testimonials">
              ←
            </button>
            <button type="button" onClick={handleNext} aria-label="Next testimonials">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;