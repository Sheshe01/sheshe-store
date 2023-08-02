import { useState, useEffect, EffectCallback } from 'react'

interface WindowSize {
  width: number | undefined
  height: number | undefined
  isMobileDevice: boolean | undefined
}

const initialState = {
  width: undefined,
  height: undefined,
  isMobileDevice: undefined
}

export default function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>(initialState)

  useEffect((): ReturnType<EffectCallback> => {
    if (window) {
      const handleResize = () => {
        const width = window?.screen.width || window.innerWidth
        const height = window?.screen.height || window.innerHeight
        setWindowSize({
          width,
          height,
          isMobileDevice: width <= 768
        })
      }

      window.addEventListener('resize', handleResize)
      handleResize()
      return () => {
        if (window) {
          window.removeEventListener('resize', handleResize)
        }
      }
    }
    return undefined
  }, [])

  return windowSize
}
