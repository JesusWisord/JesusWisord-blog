import React from 'react'

interface props {
  typeClass?: string
  title: string
  content: string
  img: string
}

const Card = (props: props) => {
  const { typeClass, title, content, img } = props;
  if (typeClass === null) {
    return (
      <div className="Card">
        <div className="right">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
        <div className="left">
          <img src={img} />
        </div>
      </div>
    )
  }
  else
    return (
      <div className={typeClass + " Card"}>
        <div className="right">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
        <div className="left">
          <img src={img} />
        </div>
      </div>
    )
}

export default Card;