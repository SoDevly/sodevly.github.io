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

const CodeLabel = ({ language }) => {
  if (language == undefined || language == null || language == "") {
      return null
  }

  return (
    <TUIBox
      sx={{
        position: 'absolute',
        top: 0,
        left: 3,
        fontFamily: 'mono',
        fontSize: 0,
        bg: getColourFromString(language), //'contentBg',
        textTransform: 'uppercase',
        px: 2,
        py: 1,
        lineHeight: 1,
        borderRadius: '0 0 0.2rem 0.2rem',
        userSelect: 'none',
        height: 'auto',
      }}
    >
      {language}
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
            pl: '5px',
            color: textColor
        }}>
            {text}
        </span>
    )
}

const CodeBlock = ({ code, className, highlightLine, addLine, removeLine, filename }) => {
    let language = '';
    if (className.includes('language')) {
        const classArray = className.split(' ')
        const langIndex = classArray.findIndex((item) => {
            return item.includes('language')
        })
        language = classArray[langIndex].replace('language-', '')
    }

    const isHighlightLine = calculateLinesToHighlight(highlightLine);
    const isAddLine = calculateLinesToHighlight(addLine);
    const isRemoveLine = calculateLinesToHighlight(removeLine);

    return (
        <TUIBox sx={{ position: 'relative', my: 4 }}>
            <Highlight {...defaultProps} code={code} language={language} theme={dracula}>
                {({className, style, tokens, getLineProps, getTokenProps}) => (
                    <pre className={className} style={{...style, paddingBottom: '10px', borderRadius:'0.5rem', overflow: 'auto'}}>
                        <div sx={{display: 'block', textAlign: 'center', height: 40}}>
                            <CodeLabel language={language} />
                            <CodeFile filename={filename} />
                            <CopyCode code={code} />
                        </div>
                        {tokens.map((line, index, tokens) => {
                            const LineBgColor = isAddLine(index) ? 'codeblockAddLine' : isRemoveLine(index) ? 'codeblockRemoveLine' : isHighlightLine(index) ? 'codeblockHighlightLine' : ''
                            const PrefixTextColor = isAddLine(index) ? 'codeblockAddLineText' : isRemoveLine(index) ? 'codeblockRemoveLineText' : ''
                            const LinePrefix = isAddLine(index) ? '+' : isRemoveLine(index) ? '-' : ' '

                            return (
                              <div key={index}
                                {...getLineProps({ line, key: index })}
                                sx={tokens.length-1==index? {display: 'none'} : {}}
                              >
                                  <ExtraString textColor={PrefixTextColor} text={LinePrefix}/>
                                  {line.map((token, key) => (
                                      <span key={key} sx={{bg:LineBgColor}} {...getTokenProps({ token, key })} />
                                  ))}
                                  <ExtraString/>
                              </div>
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
    <CodeBlock code={props.children} className={props.className} highlightLine={props.highlightLine} addLine={props.addLine} removeLine={props.removeLine} filename={props.filename}>
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
