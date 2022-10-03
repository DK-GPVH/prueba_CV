import React, { useState } from 'react';

function SubMenu({
  children,
  activecondition,
}) {

  const [open, setOpen] = useState(activecondition);

  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <div className={`rounded-lg last:mb-0`}>
      {children(handleClick, open)}
    </div>
  );
}

export default SubMenu;