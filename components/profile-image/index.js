const ImageCircle = (props) => (
  <div>
    <div className="image"></div>
    <style jsx>{`
        .image{
            width:190px;
            height:190px;
            background-image: url('${props.image}');
            background-size: cover;
            background-position: center center;
            border-radius:50%;
            margin: 0px auto;
            margin-bottom:20px;
        }

      `}</style>
  </div>
)

export default ImageCircle
