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
                fontFamily: 'mono',
                fontSize: 0,
                color: 'copyCodeText',
                px: 2,
                py: 1,
                lineHeight: 1,
                borderRadius: '0 0 0.2rem 0.2rem',
                userSelect: 'none',
                height: 'auto',
            }}
        >
            {filename}
        </TUIBox>
    )
}

const CodeBlock = ({ code, className, filename, metastring }) => {
    let language = '';
    if (className.includes('language')) {
        const classArray = className.split(' ')
        const langIndex = classArray.findIndex((item) => {
            return item.includes('language')
        })
        language = classArray[langIndex].replace('language-', '')
    }

    const shouldHighlightLine = calculateLinesToHighlight(metastring);

    return (
        <TUIBox sx={{ position: 'relative', my: 4 }}>
            <Highlight {...defaultProps} code={code} language={language} theme={dracula}>
                {({className, style, tokens, getLineProps, getTokenProps}) => (
                    <pre className={className} style={{...style, padding: '0px 20px 20px 20px', borderRadius:12, overflow: 'auto'}}>
                        <div style={{ display: 'flex', justifyContent: 'center', height: 30}}>
                            <CodeLabel language={language} />
                            <CodeFile filename={filename} />
                            <CopyCode code={code} />
                        </div>
                        {tokens.map((line, index) => {
                          return (
                              <div key={index}
                                {...getLineProps({ line, key: index })}
                                sx={shouldHighlightLine(index)? { bg: 'codeblockHighlight', display: 'block', px: 1, ml: -1, mr: -1, borderLeft: '12 solid codeblockHighlightBorder'} : {} }
                              >
                                  {line.map((token, key) => (
                                      <span key={key}{...getTokenProps({ token, key })} />
                                  ))}
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
    <CodeBlock code={props.children} className={props.className} filename={props.filename} metastring={props.metastring}>
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
