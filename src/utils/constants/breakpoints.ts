/* istanbul ignore file */
type IMedia = 'mobile' | 'tablet' | 'laptop' | 'desktop';
type IBreakPoint = { [key in IMedia]: number };

export const BREAKPOINTS: IBreakPoint = {
  // 0 - 480px mobile
  mobile: 480,
  // 480px - 768px tablet
  tablet: 768,
  // 768px - 1024px laptop
  laptop: 1024,
  // 1024px - 1200px desktop
  desktop: 1200,
};
