import { useEffect } from 'react'

// eslint-disable-next-line @typescript-eslint/ban-types
export const useThrottle = (callback: Function, interval = 0) => {
  let isPassedInterval = true
  let timerId: ReturnType<typeof setTimeout> | number = 0

  const execute = (...args: any) => {
    if (isPassedInterval) {
      callback(args)
      isPassedInterval = false
      timerId = setTimeout(() => {
        isPassedInterval = true
      }, interval)
    }
  }

  useEffect(() => {
    return () => {
      clearTimeout(timerId)
    }
  }, [])

  return execute
}
