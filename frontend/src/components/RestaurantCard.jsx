const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <div className="res-card-img">
        <img src={resData.info.image.url}></img>
      </div>
      <div className="res-card-body">
        <div className="res-card-body-heading">
          <h3>{resData.info.name}</h3>
          <p>{resData.info.locality.name}</p>
        </div>
        <div className="res-card-line3">
          <div>{resData.info.rating.aggregate_rating}</div>
          <div>.</div>
          <div>{resData.order.deliveryTime}</div>
          <div>.</div>
          <div>price</div>
        </div>
        <div className="res-card-body-offer">offers</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
