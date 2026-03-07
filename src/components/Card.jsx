import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  onClick,
  ...props 
}) => {
  const baseClasses = 'clay-card';
  const hoverClasses = hover ? 'hover:shadow-clay-xl' : '';
  const cardClasses = `${baseClasses} ${hoverClasses} ${className}`;

  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      className={cardClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
