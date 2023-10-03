import { Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'

interface ResizeImageProps {
  imageName: string
  alt?: string
  motioned?: boolean

  [key: string]: any
}

export const ResizedImage = (props: ResizeImageProps) => {
  const { motioned = false, imageName, alt = '', ...rest } = props

  const bucketUrl = 'https://pin-the-world.s3.ap-northeast-2.amazonaws.com/'

  const ext = imageName
    .split('.')
    [imageName.split('.').length - 1].toLowerCase()
  const filename = imageName.slice(0, -(ext.length + 1))

  const imageOnex = bucketUrl + 'resized/' + filename + '%26400'
  const imageTwox = bucketUrl + 'resized/' + filename + '%26960'

  const srcSet = imageOnex + ' 1x,' + imageTwox + ' 2x'

  return (
    <Image
      as={motioned ? motion.img : undefined}
      srcSet={srcSet}
      src={imageTwox}
      {...rest}
      alt={alt}
    />
  )
}
