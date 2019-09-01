// NEW Grid
const base = 30
const baseWidth = 1290
const columnCount = 12
const baseline = 16

/**
 * Column Gutter
 */
export const gutter = {
  base: base,
  phoneSmall: 24,
  phone: base,
  tablet: 50,
  desktop: 70,
  desktopWide: 96,
}

/**
 * Grid
 */
export const grid = {
  columnCount,
  baseline,
}

/**
 * Page Width
 */
export const page = {
  width: baseWidth,
  narrow: 1080,
  post: 728,
  limit: baseWidth + gutter.desktop * 2,
}
