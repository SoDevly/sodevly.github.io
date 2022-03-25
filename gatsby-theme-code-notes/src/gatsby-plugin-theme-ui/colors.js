export const baseColors = {
  grayDark: '#2d3748',
  white: '#fff',
  light: '#FBFDFE',
  dark: '#1a202c',
}

const lightTheme = {
  text: '#4a5568',
  textStrong: baseColors.dark,
  background: 'hsl(210, 38%, 95%)',
  scrollbar: 'hsl(210, 20%, 85%)',
  backgroundTransparent: 'hsla(210, 38%, 95%, 0.72)',
  contentBg: baseColors.light,
  primary: 'hsl(334, 86%, 48%)',
  primarySemiTransparent: 'hsla(334, 86%, 48%, 0.3)',
  secondary: '#718096',
  muted: '#e2e8f0',
  success: '#9ae6b4',
  info: '#63b3ed',
  warning: '#faf089',
  danger: '#feb2b2',
  navHover: '#cbd5e0',
  inlineCodeBackground: 'hsl(0, 0%, 80%)',
  codeBackground: 'hsl(210,38%,95%)',
  codeHighlight: 'hsl(210,38%,90%)',
  codeHighlightBorder: 'hsl(210,38%,85%)',
  codeblockHighlightLine: 'hsl(200, 18%, 28%)',
  codeblockAddLine: 'hsl(112, 20%, 20%)',
  codeblockAddLineText: 'hsl(112, 25%, 38%)',
  codeblockRemoveLine: 'hsl(10, 25%, 23%)',
  codeblockRemoveLineText: 'hsl(10, 30%, 38%)',
  codeFileText: '#718096',
  copyCodeText: '#4a5568',
  copyCodeBg: 'hsl(210, 25%, 97%)',
  copyCodeBgHover: 'hsl(210, 25%, 89%)',
  badgeBg: 'hsl(210, 25%, 97%)',
  badgeBgHover: 'hsl(210, 25%, 89%)',
  badgeBorder: 'hsl(207, 24%, 83%)',
  input: '#92A2B9',
  code1: '#d03592',
  code2: '#fc9867',
  code3: '#f66a0a',
  code4: '#0366d6',
  code5: '#6f42c1',
  code6: '#0366d6',
  code7: '#999988',
  highlight: '#fff176',
  around: '#1aa6e9',
  crossed: '#e9522c',
}

export const colors = {
  ...baseColors,
  ...lightTheme,
  modes: {
    dark: {
      text: 'hsl(210, 17%, 85%)',
      textStrong: 'hsl(210, 38%, 98%)',
      background: 'hsl(285, 5%, 17%)',
      scrollbar: 'hsl(285, 5%, 12%)',
      backgroundTransparent: 'hsla(285, 5%, 17%, 0.72)',
      contentBg: '#383539',
      primary: 'hsl(345, 100%, 69%)',
      primarySemiTransparent: 'hsl(345, 100%, 79%, 0.3)',
      secondary: '#718096',
      muted: 'hsl(210, 5%, 40%)',
      success: '#9ae6b4',
      info: '#63b3ed',
      warning: '#faf089',
      danger: '#feb2b2',
      navHover: 'hsl(285, 5%, 13%)',
      inlineCodeBackground: 'hsl(0, 0%, 47%)',
      codeBackground: 'hsl(285,5%,17%)',
      codeHighlight: 'hsl(285,5%,25%)',
      codeHighlightBorder: 'hsl(285,5%,20%)',
      codeblockHighlightLine: 'hsl(200, 18%, 28%)',
      codeblockAddLine: 'hsl(112, 20%, 20%)',
      codeblockAddLineText: 'hsl(112, 25%, 38%)',
      codeblockRemoveLine: 'hsl(10, 25%, 23%)',
      codeblockRemoveLineText: 'hsl(10, 30%, 38%)',
      codeFileText: '#718096',
      copyCodeText: '#4a5568',
      copyCodeBg: 'hsl(210, 25%, 97%)',
      copyCodeBgHover: 'hsl(210, 25%, 89%)',
      badgeBg: 'hsl(285, 5%, 17%)',
      badgeBgHover: 'hsl(285, 5%, 14%)',
      badgeBorder: 'hsl(285, 5%, 12%)',
      input: 'hsl(215, 5%, 65%)',
      code1: 'hsl(345, 100%, 69%)',
      code2: '#fc9867',
      code3: '#ffd866',
      code4: '#a9dc76',
      code5: '#78dce8',
      code6: '#ab9df2',
      code7: '#999988',
      highlight: 'hsl(50, 80%, 35%)',
      around: '#1aa6e9',
      crossed: '#e9522c',
    },
    light: lightTheme,
  },
}
