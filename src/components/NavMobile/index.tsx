import React from 'react';
import { motion, useCycle } from 'framer-motion';
import { NavMobile } from './styles';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    display: 'block',
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
    transitionEnd: {
      display: 'none',
    },
  },
};

const variantsUl = {
  open: {
    display: 'block',
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
    transitionEnd: {
      display: 'none',
    },
  },
};

const variantsLi = {
  open: {
    y: 0,
    opacity: 1,
    display: 'block',
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
    transitionEnd: {
      display: 'none',
    },
  },
};

const NavegationMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useCycle(false, true);
  return (
    <NavMobile initial={false} animate={isOpen ? 'open' : 'closed'}>
      <motion.div variants={sidebar} />
      <motion.ul variants={variantsUl}>
        <motion.li
          variants={variantsLi}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Quem Somos
        </motion.li>
        <motion.li
          variants={variantsLi}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          EQUIPE
        </motion.li>
        <motion.li
          variants={variantsLi}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          CONTATO
        </motion.li>
      </motion.ul>
      <button type="button" onClick={() => setIsOpen()}>
        <svg width="23" height="23" viewBox="0 0 23 23">
          <motion.path
            fill="transparent"
            strokeWidth="3"
            stroke="#d6613e"
            strokeLinecap="round"
            variants={{
              closed: { d: 'M 2 2.5 L 20 2.5' },
              open: { d: 'M 3 16.5 L 17 2.5' },
            }}
          />
          <motion.path
            fill="transparent"
            strokeWidth="3"
            stroke="#d6613e"
            strokeLinecap="round"
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <motion.path
            fill="transparent"
            strokeWidth="3"
            stroke="#d6613e"
            strokeLinecap="round"
            variants={{
              closed: { d: 'M 2 16.346 L 20 16.346' },
              open: { d: 'M 3 2.5 L 17 16.346' },
            }}
          />
        </svg>
      </button>
    </NavMobile>
  );
};

export default NavegationMobile;
