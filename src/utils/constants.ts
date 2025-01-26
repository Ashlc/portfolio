export const CARD_WIDTH = 260;

export const ANIMATION_VARIANTS = {
  incoming: {
    opacity: 0,
  },
  active: { x: 0, scale: 1, opacity: 1 },
  exit: {
    opacity: 0.2,
  },
};

export const TRANSITION = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};
