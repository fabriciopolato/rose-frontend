import React from 'react';

interface IProps {
  id: string;
}

const FeelingCheckbox: React.FC<IProps> = ({ children, id }) => {
  return (
    <label htmlFor={id}>
      <input type="checkbox" id={id} />
      {children}
    </label>
  );
};

export default FeelingCheckbox;
