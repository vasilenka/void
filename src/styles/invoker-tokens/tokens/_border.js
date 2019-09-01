import { brand, dark } from './_colors'

/*
  Border tokens
*/
export const style = {
  solid1: `1px solid`,
  solid2: `2px solid`,
  solid3: `3px solid`,
  dashed1: `1px dashed`,
  dashed2: `2px dashed`,
  dashed3: `3px dashed`,
}

export const color = {
  base: dark.alpha20,
  primary: brand.primary200,
  secondary: brand.secondary100,
}

export const border = {
  solidBase1: `${style.solid1} ${color.base}`,
  solidBase2: `${style.solid2} ${color.base}`,
  solidBase3: `${style.solid3} ${color.base}`,
  solidPrimary1: `${style.solid1} ${color.primary}`,
  solidPrimary2: `${style.solid2} ${color.primary}`,
  solidPrimary3: `${style.solid3} ${color.primary}`,
  solidSecondary1: `${style.solid1} ${color.secondary}`,
  solidSecondary2: `${style.solid2} ${color.secondary}`,
  solidSecondary3: `${style.solid3} ${color.secondary}`,
  dashedBase1: `${style.dashed1} ${color.base}`,
  dashedBase2: `${style.dashed2} ${color.base}`,
  dashedBase3: `${style.dashed3} ${color.base}`,
  dashedPrimary1: `${style.dashed1} ${color.primary}`,
  dashedPrimary2: `${style.dashed2} ${color.primary}`,
  dashedPrimary3: `${style.dashed3} ${color.primary}`,
  dashedSecondary1: `${style.dashed1} ${color.secondary}`,
  dashedSecondary2: `${style.dashed2} ${color.secondary}`,
  dashedSecondary3: `${style.dashed3} ${color.secondary}`,
}
