import { Block } from '@/components/Block'
import { Box } from '@chakra-ui/react'
import { useGetImages } from '@/requests/use/useGetImages'
import { useMemo } from 'react'
import { type Image } from '@/requests/types/imageResponse'
import { Pagination } from '@/components/Pagination'
import { useSearchParams } from 'react-router-dom'
import { PageTitle } from './parts/PageTitle'

interface PaginatedPhotoParams {
  city?: string
  travel?: string
  tag?: string
}

const DEFAULT_TAKE = 3

export function PaginatedPhoto({
  params,
  title,
}: {
  params: PaginatedPhotoParams
  title: string
}) {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = Number(searchParams.get('page')) || 1

  const { data } = useGetImages(params, DEFAULT_TAKE, page)

  const photos: Image[] = useMemo(() => {
    if (!data) return []

    return data.edges.map((value) => value.node)
  }, [data])

  const pageCount = Math.ceil((data?.totalCount ?? 0) / DEFAULT_TAKE)

  const isFirstPage = page === 1
  const isMultiplePage = pageCount !== undefined && pageCount > 1

  const onClickPage = (page: number) => {
    setSearchParams({
      page: String(page),
    })
    window.scrollTo(0, 0)
  }

  return (
    <>
      <Box px="6" py="16">
        {isFirstPage && <PageTitle title={title} />}
      </Box>
      {photos?.map((item: any, index: number) => {
        return <Block item={item} key={index} />
      })}
      <Box mt="4" mb="24">
        {isMultiplePage && (
          <Pagination
            pageCount={pageCount}
            onClickPage={onClickPage}
            currentPage={page}
          />
        )}
      </Box>
    </>
  )
}
