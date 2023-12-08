const GifList = (props) => {
  //create array of item components
  const items = props.gifs.map((itemData) => {
    return <Item url={itemData.images.fixed_height.url} />;
  });
  return <div className="gif-container">{items}</div>;
};
const Item = (props) => {
  return (
    <div className="gif-item">
      <img src={props.url} />
    </div>
  );
};
export default GifList;
