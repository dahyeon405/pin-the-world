import { Box, Flex } from '@chakra-ui/react'

export function Pagination({
  currentPage,
  pageCount,
  onClickPage,
}: {
  currentPage: number
  pageCount: number
  onClickPage: (page: number) => void
}) {
  // todo: 로직이랑 뷰 분리
  const hasRightEllipsis = pageCount > 5 && currentPage < pageCount - 2
  const hasLeftEllipsis = pageCount > 5 && currentPage > 3

  let startPage = 1
  if (hasLeftEllipsis && currentPage > pageCount - 3) {
    startPage = pageCount - 4
  } else if (hasLeftEllipsis) {
    startPage = currentPage - 2
  }

  let endPage = pageCount
  if (hasRightEllipsis && currentPage < 4) {
    endPage = 5
  } else if (hasRightEllipsis) {
    endPage = currentPage + 2
  }

  const pageNumberToRender = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  )

  return (
    <Flex
      mx="auto"
      gap="3"
      justify="center"
      align="center"
      fontFamily="Clash Display"
    >
      {hasLeftEllipsis && (
        <Box
          onClick={() => {
            onClickPage(1)
          }}
          fontFamily="inherit"
          cursor="pointer"
        >
          {'<<'}
        </Box>
      )}
      {pageNumberToRender.map((page) => {
        return (
          <Box
            key={page}
            onClick={() => {
              onClickPage(page)
            }}
            fontFamily="inherit"
            fontWeight={page === currentPage ? '500' : '400'}
            fontSize={page === currentPage ? '18px' : '14px'}
            cursor="pointer"
          >
            {page}
          </Box>
        )
      })}
      {hasRightEllipsis && (
        <Box
          onClick={() => {
            onClickPage(pageCount)
          }}
          fontFamily="inherit"
          cursor="pointer"
        >
          {'>>'}
        </Box>
      )}
    </Flex>
  )
}
