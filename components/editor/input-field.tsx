'use client'

import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface InputFieldProps {
  attribute: string;
  label: string;
  currentValue: string;
  handleAttributeChange: (attribute: string, value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  attribute,
  label,
  currentValue,
  handleAttributeChange
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    handleAttributeChange(attribute, value);
  };

  return (
    <>
      <div className="w-1/2 px-4 mb-4">
        <Label htmlFor={attribute}>{label}</Label>
        <Input
          type="text"
          placeholder='text'
          value={currentValue}
          onChange={handleInputChange}
          className='w-full mt-1'
        />
      </div>
    </>
  );
};

export default InputField;