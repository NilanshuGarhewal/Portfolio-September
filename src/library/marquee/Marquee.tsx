import React from 'react'

type MarqueeProps = {
  children: React.ReactNode;
};

const Marquee: React.FC<MarqueeProps> = ({ children }) => {
  return (
    <div className="marquee-wrapper">
      <div className="item item1">{children}</div>
      {/* <div className="item item2">{children}</div>
      <div className="item item3">{children}</div> */}
    </div>
  )
}

export default Marquee