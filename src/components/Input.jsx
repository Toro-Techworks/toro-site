import { forwardRef } from 'react';

const Input = forwardRef(({ 
  className = '', 
  error = false,
  ...props 
}, ref) => {
  const baseClasses = 'clay-input';
  const errorClasses = error ? 'border-red-500 focus:ring-red-500' : '';
  const inputClasses = `${baseClasses} ${errorClasses} ${className}`;

  return (
    <input
      ref={ref}
      className={inputClasses}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export default Input;
