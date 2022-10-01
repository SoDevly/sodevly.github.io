/** @jsx jsx */
import { jsx, Box as TUIBox, Button } from 'theme-ui'
import { FaAnchor } from 'react-icons/fa'
import { toClipboard } from 'copee'
import { useState } from 'react'
import { getColourFromString } from '../utils/getColourFromString'
import {
  Underline,
  Box,
  Circle,
  StrikeThrough,
  CrossedOff,
} from '../components/Rough'
import Highlight, { defaultProps } from "prism-react-renderer";
import dracula from 'prism-react-renderer/themes/dracula';
import rangeParser from 'parse-numeric-range';

const heading = (Tag) => (props) => {
  if (!props.id) return <Tag {...props} />

  return (
    <Tag
      {...props}
      sx={{
        '&:hover .slug': {
          opacity: 0.6,
        },
      }}
    >
      {props.children}
      <a
        className="slug"
        href={`#${props.id}`}
        sx={{
          fontSize: 3,
          textDecoration: 'none',
          display: 'inline-block',
          color: 'text',
          opacity: 0.2,
          transition: 'all 200ms ease-in-out ',
          '&:hover,&:focus': {
            opacity: 1,
            color: 'primary',
          },
          width: 25,
          height: 25,
          borderRadius: '50%',
          ml: 2,
          textAlign: 'center',
          variant: 'utils.focusVisibleOutset',
        }}
      >
        <FaAnchor size="0.7em" fill="currentColor" title="" />
      </a>
    </Tag>
  )
}

const ResponsiveTable = ({ children }) => {
  return (
    <TUIBox
      sx={{
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        table: {
          width: '100%',
          maxWidth: '100%',
        },
      }}
    >
      <table>{children}</table>
    </TUIBox>
  )
}

const CopyCode = ({ code }) => {
  const [notificationActive, setNotificationActive] = useState(false)

  const handleCopy = () => {
    toClipboard(code)
    setNotificationActive(true)

    setTimeout(() => {
      setNotificationActive(false)
    }, 3000)
  }

  return (
    <Button onClick={() => handleCopy()} variant="copyCode">
      {notificationActive ? 'Copied' : 'Copy'}
    </Button>
  )
}

const CodeLabel = ({ label, language }) => {
  let text = label;
  if (label == undefined || label == null || label == "") {
      if (language == undefined || language == null || language == "" || language == "undefined") {
          return null
      }
      else {
          text = language;
      }
  }

  return (
    <TUIBox
      sx={{
        position: 'absolute',
        top: 0,
        left: 3,
        fontFamily: 'mono',
        fontSize: 0,
        bg: getColourFromString(text), //'contentBg',
        textTransform: 'uppercase',
        px: 2,
        py: 1,
        lineHeight: 1,
        borderRadius: '0 0 0.2rem 0.2rem',
        userSelect: 'none',
        height: 'auto',
      }}
    >
      {text}
    </TUIBox>
  )
}

const CodeFile = ({ filename }) => {
    if (filename == undefined || filename == null || filename == "") {
        return null
    }

    return (
        <TUIBox
            sx={{
                position: 'absolute',
                minWidth: '100px',
                top: 0,
                left: '50%',
                transform: 'translate(-50%, 0%)',
                fontFamily: 'mono',
                fontSize: 0,
                color: 'codeFileText',
                px: 2,
                py: 1,
                lineHeight: 1,
                userSelect: 'none',
                height: 'auto',
            }}
        >
            {filename}
        </TUIBox>
    )
}

const ExtraString = ({ textColor, text }) => {
    return (
        <span sx={{
            pr: '5px',
            color: textColor,
            userSelect: 'none',
        }}>
            {text}
        </span>
    )
}

const CodeBlock = ({ code, className, label, filename, addLine, removeLine, highlightLine, isWrap }) => {
    let language = '';
    if (className.includes('language')) {
        const classArray = className.split(' ')
        const langIndex = classArray.findIndex((item) => {
            return item.includes('language')
        })
        language = classArray[langIndex].replace('language-', '')
    }

    const isAddLine = calculateLinesToHighlight(addLine);
    const isRemoveLine = calculateLinesToHighlight(removeLine);
    const isHighlightLine = calculateLinesToHighlight(highlightLine);
    const hasExtraString = (addLine || removeLine) ? true : false

    const addStyle = {
        whiteSpace: isWrap? 'pre-wrap' : 'pre',
    }

    return (
        <TUIBox sx={{ position: 'relative', my: 4 }}>
            <Highlight {...defaultProps} code={code} language={language} theme={dracula}>
                {({className, style, tokens, getLineProps, getTokenProps}) => (
                    <pre className={className} style={{...style, ...addStyle, padding: '15px 0px 10px 15px', borderRadius:'0.5rem', overflow: 'auto'}}>
                        <TUIBox sx={{display: 'block', textAlign: 'center', height: 26}}>
                            <CodeLabel label={label} language={language}/>
                            <CodeFile filename={filename} />
                            <CopyCode code={code} />
                        </TUIBox>
                        {tokens.map((line, index, tokens) => {
                            const LineBgColor = isAddLine(index) ? 'codeblockAddLine' : isRemoveLine(index) ? 'codeblockRemoveLine' : isHighlightLine(index) ? 'codeblockHighlightLine' : ''
                            const PrefixTextColor = isAddLine(index) ? 'codeblockAddLineText' : isRemoveLine(index) ? 'codeblockRemoveLineText' : ''
                            const PrefixText = isAddLine(index) ? '+' : isRemoveLine(index) ? '-' : ' '

                            return (
                              <TUIBox key={index}
                                {...getLineProps({ line, key: index })}
                                sx={tokens.length-1==index? {display: 'none'} : {}}
                              >
                                  {hasExtraString &&
                                      <ExtraString textColor={PrefixTextColor} text={PrefixText}/>
                                  }
                                  {line.map((token, key) => (
                                      <span key={key} sx={{bg:LineBgColor}} {...getTokenProps({ token, key })} />
                                  ))}
                              </TUIBox>
                          )
                        })}
                    </pre>
                )}
            </Highlight>
        </TUIBox>
    )
}

const calculateLinesToHighlight = (meta) => {
    const RE = /{([\d,-]+)}/
    if (RE.test(meta)) {
        const strlineNumbers = RE.exec(meta)[1]
        const lineNumbers = rangeParser(strlineNumbers)
        return (index) => (lineNumbers.includes(index + 1))
    } else {
        return () => false
    }
}

const components = {
  h1: heading('h1'),
  h2: heading('h2'),
  h3: heading('h3'),
  h4: heading('h4'),
  h5: heading('h5'),
  h6: heading('h6'),
  pre: (props) => props.children,
  code: (props) => (
    <CodeBlock code={props.children} className={props.className} label={props.label} filename={props.filename} addLine={props.addLine} removeLine={props.removeLine} highlightLine={props.highlightLine} isWrap={props.isWrap}>
    </CodeBlock>
  ),
  table: (props) => <ResponsiveTable>{props.children}</ResponsiveTable>,
  Underline,
  Box,
  Circle,
  StrikeThrough,
  CrossedOff,
}

export default components
