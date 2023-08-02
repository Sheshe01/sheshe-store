import React, { createContext, useState, useContext } from 'react'

type PropsMenuContext = {
  isSubmenuVisible: boolean
  setIsSubmenuVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const defaultValue = {
  isSubmenuVisible: false,
  setIsSubmenuVisible: () => {}
}
const MenuContext = createContext<PropsMenuContext>(defaultValue)

const MenuContextProvider: React.FC = ({ children }) => {
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false)

  return (
    <MenuContext.Provider
      value={{
        isSubmenuVisible,
        setIsSubmenuVisible
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}

function useMenuContext(): PropsMenuContext {
  const context = useContext(MenuContext)

  if (!context)
    throw new Error(
      'useMenuContextProvider must be used within an MenuContextProvider.'
    )

  return context
}

export { MenuContextProvider, useMenuContext }
