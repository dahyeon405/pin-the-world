import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
} from '@chakra-ui/react'
import { MenuAccordionPanelItem } from './MenuAccordionPanelItem.tsx'
import { Link } from 'react-router-dom'

export function Menu({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton top="3" />
        <DrawerBody mt="16">
          <Link to={'/photos/sanfran2025'}>
            <MenuAccordionPanelItem>2025 San Francisco</MenuAccordionPanelItem>
          </Link>
          <Link to={'/photos/paris2024'}>
            <MenuAccordionPanelItem>
              2024 Paris & Copenhagen
            </MenuAccordionPanelItem>
          </Link>
          <Link to={'/photos/europe'}>
            <MenuAccordionPanelItem>2019 Exchange</MenuAccordionPanelItem>
          </Link>
          <Link to={'/photos/new-york'}>
            <MenuAccordionPanelItem>2022 NY & SF</MenuAccordionPanelItem>
          </Link>
          <Link to={'/photos?tag=film&title=film%0Aphotos'}>
            <MenuAccordionPanelItem>film photos</MenuAccordionPanelItem>
          </Link>
          <Link to={'/photos?tag=daily&title=daily%20life'}>
            <MenuAccordionPanelItem>daily life</MenuAccordionPanelItem>
          </Link>
          <Link to={'/photos/pins'}>
            <MenuAccordionPanelItem>More Pins 📍</MenuAccordionPanelItem>
          </Link>
          {/* <Link to={'/about'}>
            <MenuItem>about</MenuItem>
          </Link> */}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
