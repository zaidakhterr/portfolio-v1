import { useEffect, useState } from "react"

const getWindowDimensions = () => {
  if (window !== undefined) {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height,
    }
  }

  return {
    width: undefined,
    height: undefined,
  }
}

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }
    if (window !== undefined) {
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  return windowDimensions
}
