import React, {useState, useEffect, useRef, useCallback} from 'react';
import { Layout } from '../components/Layout'
import {Heading, Box, Text, Button, Input} from 'theme-ui'

const Timer = ({ pageContext, location }) => {
  const [inputHour, setInputHour] = useState(0);
  const [inputMinute, setInputMinute] = useState(0);
  const [inputSecond, setInputSecond] = useState(0);

  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const interval = useRef(null);
  const remainTime = useRef(0);

  const [isSetting, setSetting] = useState(false);
  const [isStart, setStart] = useState(false);

  useEffect(() => {
    interval.current = setInterval(tick, 1000);
    return () => clearInterval(interval.current);
  }, [isStart, isSetting]);

  useEffect(() => {
    if (remainTime.current <= 0) {
      clearInterval(interval.current);
    }
  }, [second]);

  const tick = useCallback(() => {
    if (!isStart) return;

    remainTime.current -= 1;

    const remainHour = parseInt(remainTime.current / 60 / 60);
    const remainMinute = parseInt((remainTime.current % 3600) / 60);
    const remainSecond = remainTime.current % 60;
    setHour(remainHour);
    setMinute(remainMinute);
    setSecond(remainSecond);
  }, [isStart, isSetting])

  const handleSetting = () => {
    setSetting(true);
    setStart(false);
  }

  const handleConfirm= () => {
    setSetting(false);
    setHour(inputHour);
    setMinute(inputMinute);
    setSecond(inputSecond);
    remainTime.current = inputHour * 60 * 60 + inputMinute * 60 + inputSecond;
    setStart(false);
  }

  const handleStart = () => {
    if (isSetting) return;
    setStart(true);
  }

  const handleStop = () => {
    if (isSetting) return;
    setStart(false);
  }

  const handleReset = () => {
    if (isSetting) return;
    setHour(inputHour);
    setMinute(inputMinute);
    setSecond(inputSecond);
    remainTime.current = inputHour * 60 * 60 + inputMinute * 60 + inputSecond;
    setStart(false);
  }

  return (
      <Layout
          path={location.pathname}
          basePath={pageContext.basePath}
          hasUntagged={pageContext.hasUntagged}
          tags={pageContext.tags}
          title={'Timer'}
      >
        <Box as="header" sx={{ mb: 4 }}>
          <Heading as="h1" variant="noteTitle">
            Timer
          </Heading>
        </Box>

        <Box sx={styles.timerContainer}>
          <Input
              sx={isSetting? styles.settingInput : styles.notSettingInput}
              value={isSetting? inputHour : hour}
              maxLength={2}
              onChange={(event) => {
                const value = event.target.value? event.target.value : 0;
                setInputHour(parseInt(value));
              }}
              placeholder="Hour"
              disabled={!isSetting}
          />
          <Text sx={styles.timerDividerText}> : </Text>
          <Input
              sx={isSetting? styles.settingInput : styles.notSettingInput}
              value={isSetting? inputMinute : minute}
              maxLength={2}
              onChange={(event) => {
                const value = event.target.value? event.target.value : 0;
                setInputMinute(parseInt(value));
              }}
              placeholder="Minute"
              disabled={!isSetting}
          />
          <Text sx={styles.timerDividerText}> : </Text>
          <Input
              sx={isSetting? styles.settingInput : styles.notSettingInput}
              value={isSetting? inputSecond : second}
              maxLength={2}
              onChange={(event) => {
                const value = event.target.value? event.target.value : 0;
                setInputSecond(parseInt(value));
              }}
              placeholder="Second"
              disabled={!isSetting}
          />
        </Box>

        <Box sx={styles.buttonContainer}>
          <Box sx={styles.leftButtonContainer}>
            {isSetting?
                <Button
                    sx={styles.enableButton}
                    onClick={() => handleConfirm()}>
                  Confirm
                </Button>
                :
                <Button
                    sx={styles.enableButton}
                    onClick={() => handleSetting()}>
                  Time Setting
                </Button>
            }
          </Box>
          <Box sx={styles.rightButtonContainer}>
            {isStart?
                <Button
                    sx={isSetting? styles.disableButton : styles.enableButton}
                    onClick={() => handleStop()}
                    disabled={isSetting}>
                  Stop
                </Button>
                :
                <Button
                    sx={isSetting? styles.disableButton : styles.enableButton}
                    onClick={() => handleStart()}
                    disabled={isSetting}>
                  Start
                </Button>
            }
            <Button
                sx={isSetting? styles.disableButton : styles.enableButton}
                onClick={() => handleReset()}
                disabled={isSetting}>
              Reset
            </Button>
          </Box>
        </Box>
      </Layout>
  )
}

const styles = {
  timerContainer: {
    flexDirection : 'row',
    display: 'flex',
    ml: 2,
    mr: 2,
    mt: '100px',
    mb: '200px',
    p: 0
  },
  buttonContainer: {
    flexDirection : 'row',
    display: 'flex',
    justifyContent: 'space-between'
  },
  leftButtonContainer: {
    flexDirection : 'row',
    display: 'flex',
    justifyContent: 'flex-start'
  },
  rightButtonContainer: {
    flexDirection : 'row',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  timerDividerText: {
    textAlign: 'center',
    fontSize: 120,
    fontWeight: 'bold',
    width: 240,
    ml: 2,
    mr: 2,
    p: 0,
  },
  notSettingInput: {
    textAlign : 'center',
    color: 'text',
    fontSize: 120,
    fontWeight: 'bold',
    borderWidth: 0,
    ml: 2,
    mr: 2,
    p: 0,
  },
  settingInput: {
    textAlign : 'center',
    color: 'text',
    fontSize: 120,
    fontWeight: 'bold',
    border: 'solid 4px',
    borderColor: 'text',
    borderRadius: 10,
    ml: 2,
    mr: 2,
    p: 0,
  },
  enableButton: {
    ml: 2,
    mr: 2,
  },
  disableButton: {
    ml: 2,
    mr: 2,
    backgroundColor: '#718096',
  }
}

export default Timer
