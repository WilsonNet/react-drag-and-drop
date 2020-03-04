import React from 'react';
const Card = ({ children, id, className, draggable }) => {
  console.log('uiuiui')
  const dragStart = e => {
    const target = e.target;
    e.dataTransfer.setData('card_id', target.id);

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
    >
      {children}
    </div>
  );
};

export default Card;
