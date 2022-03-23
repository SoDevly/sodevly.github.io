export const buttons = {
  copyCode: {
    position: 'absolute',
    top: 0,
    right: 3,
    px: 2,
    py: 1,
    fontSize: 0,
    bg: 'copyCodeBg',
    userSelect: 'none',
    color: 'copyCodeText',
    lineHeight: 1,
    borderRadius: '0 0 0.2rem 0.2rem',
    fontFamily: 'mono',
    textTransform: 'uppercase',
    cursor: 'pointer',
    '&:hover': {
      bg: 'copyCodeBgHover',
    },
    variant: 'utils.focusVisibleOutset',
  },

  icon: {
    cursor: 'pointer',
    borderRadius: '50%',
    variant: 'utils.focusVisibleOutset',
  },

  menu: {
    cursor: 'pointer',
    borderRadius: '50%',
    variant: 'utils.focusVisibleOutset',
  },

  sort: {
    cursor: 'pointer',
    variant: 'utils.focusVisibleOutset',
    display: 'inline-flex',
    alignItems: 'center',
    px: 2,
    py: 0,
    fontSize: 0,
    bg: 'badgeBg',
    userSelect: 'none',
    color: 'text',
    border: '1px solid',
    borderColor: 'badgeBorder',
    borderRadius: 0,
    fontFamily: 'inherit',
    textTransform: 'uppercase',
    '&:hover': {
      bg: 'badgeBgHover',
    },
    '&.active': {
      bg: 'badgeBgHover',
      color: 'textStrong',
    },
    svg: {
      ml: 1,
    },
    '&:first-child': {
      borderTopLeftRadius: '0.25rem',
      borderBottomLeftRadius: '0.25rem',
      borderRight: 0,
    },
    '&:last-child': {
      borderTopRightRadius: '0.25rem',
      borderBottomRightRadius: '0.25rem',
      borderRight: '1px solid',
      borderColor: 'badgeBorder',
    },
  },
}
