'use client';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';

const variants = cva(
  'shadow-grid rounded-3xl bg-white dark:bg-neutral-900 flex flex-col justify-center @container',
  {
    variants: {
      size: {
        '1x2': 'md:col-span-1 col-span-2 row-span-2 md:p-8 p-4',
        '2x1': 'md:col-span-2 col-span-full row-span-1 py-4 md:px-8 px-4',
        '2x2': 'md:col-span-2 col-span-full row-span-2 md:p-8 p-4',
        '2x4':
          'md:col-span-2 col-span-full row-span-4 relative overflow-hidden',
        '4x4': 'md:col-span-4 col-span-full row-span-4',
      },
    },
    defaultVariants: {
      size: '1x2',
    },
  }
);

const GridItem = ({ size, children, className }) => {
  return (
    <motion.div
      initial={{
        scale: 0.2,
        y: 120,
        opacity: 0,
      }}
      className={cn(
        variants({
          size,
          className:
            'hover:dark:bg-neutral-800 hover:bg-neutral-50 duration-75 transition-colors ease-in-out border border-neutral-200 dark:border-neutral-700',
        })
      )}
    >
      {children}
    </motion.div>
  );
};

export default GridItem;
