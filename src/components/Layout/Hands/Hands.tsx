import React from 'react';
import { Image } from 'react-bootstrap';
import handsPict from '../../../assets/img/IMG-20210525-WA0027.jpg';

const Hands = () => {
  return (
    <div id="hands">
      <Image src={handsPict} alt="Ruce" className="img-fluid" />
    </div>
  );
};

export default Hands;
