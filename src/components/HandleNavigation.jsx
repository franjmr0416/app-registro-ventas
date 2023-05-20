import React, { Children } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const HandleNavigation = (props) => {
  const { url, children } = props
  const location = useLocation()
  const navigate = useNavigate()

  const handleNavigation = (url) => {
    const currentPath = location.pathname
    if (currentPath !== url) {
      navigate(url)
    }
  }

  return <div onClick={() => handleNavigation(url)}>{children}</div>
}

export default HandleNavigation
