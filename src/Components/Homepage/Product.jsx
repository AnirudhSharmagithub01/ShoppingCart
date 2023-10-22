const Product = ({post}) => {
  // console.log('Product', post)
  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <img src={post.image}  alt="img"/>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div><p>{post.price}</p></div>
    </div>
  );
};

export default Product;
