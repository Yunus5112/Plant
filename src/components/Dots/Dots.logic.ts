export type DotsProps = {
  total: number;
  activeIndex: number;
};

export const getDotStyles = (index: number, activeIndex: number) => ({
  isActive: index === activeIndex,
});


