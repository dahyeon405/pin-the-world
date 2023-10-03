import { Header } from '@/components/Header'
import { Menu } from '@/components/Menu'
import { useDisclosure } from '@chakra-ui/react'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export default function MenuLayout() {
  const {
    isOpen: isMenuOpen,
    onOpen: onMenuOpen,
    onClose: onMenuClose,
  } = useDisclosure()

  const location = useLocation()

  useEffect(() => {
    onMenuClose()
  }, [location])

  return (
    <>
      <Header onMenuClick={onMenuOpen} />
      <Menu isOpen={isMenuOpen} onClose={onMenuClose} />
      <Outlet />
    </>
  )
}
