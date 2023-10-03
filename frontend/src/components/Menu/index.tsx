import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Accordion,
  AccordionPanel,
} from '@chakra-ui/react'
import { MenuAccordionItem } from './MenuAccordionItem.tsx'
import { MenuAccordionPanelItem } from './MenuAccordionPanelItem.tsx'
import { MenuItem } from './MenuItem.tsx'
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
          <Accordion allowToggle>
            <MenuAccordionItem text={'photos'}>
              <AccordionPanel pb={3}>
                <Link to={'/photos/europe'}>
                  <MenuAccordionPanelItem>2019 Europe</MenuAccordionPanelItem>
                </Link>
                <Link to={'/photos/new-york'}>
                  <MenuAccordionPanelItem>2022 New York</MenuAccordionPanelItem>
                </Link>
                <MenuAccordionPanelItem>Etc.</MenuAccordionPanelItem>
              </AccordionPanel>
            </MenuAccordionItem>
          </Accordion>
          <Link to={'/about'}>
            <MenuItem>about</MenuItem>
          </Link>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
