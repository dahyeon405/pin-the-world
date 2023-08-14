import { Block } from "@/components/Block";
import { Box, Heading } from "@chakra-ui/react";
import { useGetNewYorkPhotos } from "@/requests/use/useGetNewYorkPhotos.ts";
import { useGetNewYorkPageCount } from "@/requests/use/useGetNewYorkPageCount.ts";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "@/components/Pagination";

export default function NewYorkPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const { data: pageCount } = useGetNewYorkPageCount();
  const { data: photos } = useGetNewYorkPhotos(page);

  const isFirstPage = page === 1;
  const isMultiplePage = pageCount !== undefined && pageCount > 1;

  const onClickPage = (page: number) => {
    setSearchParams({
      page: String(page),
    });
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Box px="6" py="16">
        {isFirstPage && (
          <Heading as="h1" fontWeight="400" size="3xl">
            2022, <br />
            New York
          </Heading>
        )}
      </Box>
      {photos &&
        photos.map((item: any, index: number) => {
          return <Block item={item} key={index} />;
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
  );
}
