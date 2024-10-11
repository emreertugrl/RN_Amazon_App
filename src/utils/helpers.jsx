import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

//
export const getRating = rating => {
  const ratingStart = [];
  const fullStar = <FontAwesome name="star" color="#FFA41C" size={10} />;
  const halfStar = (
    <FontAwesome name="star-half-empty" color="#FFA41C" size={10} />
  );
  const emptyStar = <FontAwesome name="star-o" color="#FFA41C" size={10} />;
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      ratingStart.push(fullStar);
    } else {
      ratingStart.push(emptyStar);
    }
  }
  if (rating % 1 !== 0) {
    ratingStart[Math.floor(rating)] = halfStar;
  }

  return ratingStart;
};
