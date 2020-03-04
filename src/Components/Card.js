import React from 'react';

const Card = ({ children, id, className, draggable }) => {
  const dragStart = e => {
    const target = e.target;
    e.dataDransfer.setDate('card_id', target.id);

    setTimeout(() => {
      target.style.display = 'none';
    }, 0);
  };

  const dragOver = e => {
    e.stopPropagation();
  };
  return (
    <div
      id={id}
      className={className}
      draggable={draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    ></div>
  );
};

export default Card;
