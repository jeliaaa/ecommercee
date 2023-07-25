import React, { useState } from 'react';
import './DropdownDescription.scss';

const DropdownDescription = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-description">
      <button className="toggle-button" onClick={handleToggle}>
        {title}
      </button>
      {isOpen && <p className="description">{description}</p>}
    </div>
  );
};

export default DropdownDescription;
