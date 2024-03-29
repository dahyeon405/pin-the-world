import { CityPolaroidView } from '@/components/Polaroid/CityPolaroidView'
import { type Cities } from '@/constants'
import {
  CloseButton,
  Modal,
  ModalOverlay,
  ModalContent,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Polaroid({
  city,
  onClickCloseButton: onClick,
}: {
  city: Cities | null
  onClickCloseButton: () => void
}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!city) setIsVisible(false)
    else {
      setTimeout(() => {
        setIsVisible(true)
      }, 1500)
    }
  }, [city])

  const onClickCloseButton = () => {
    setIsVisible(false)
    onClick()
  }

  const navigate = useNavigate()

  const onClickTitle = () => {
    navigate(`/photos?city=${city}&title=${city}`)
  }

  return (
    <Modal isOpen={isVisible} onClose={onClickCloseButton}>
      <ModalOverlay />
      <ModalContent pos="relative" bg="none" shadow="none" width="324px">
        <CloseButton
          background="white"
          borderRadius="999px"
          variant="solid"
          onClick={onClickCloseButton}
          size="sm"
          pos="absolute"
          right="0px"
        />
        <CityPolaroidView
          cityName={city as Cities}
          onClickTitle={onClickTitle}
        />
      </ModalContent>
    </Modal>
  )
}
