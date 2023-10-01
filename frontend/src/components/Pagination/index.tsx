import { Box, Flex } from "@chakra-ui/react";

export function Pagination({
  currentPage,
  pageCount,
  onClickPage,
}: {
  currentPage: number;
  pageCount: number;
  onClickPage: (page: number) => void;
}) {
  const pageNumberList = Array.from({ length: pageCount }, (_, i) => i + 1);

  // todo: add ellipsis
  return (
    <Flex mx="auto" gap="2" justify="center">
      {pageNumberList.map((page) => {
        return (
          <Box
            key={page}
            onClick={() => onClickPage(page)}
            fontFamily="Clash Display"
            fontWeight={page === currentPage ? "500" : "400"}
          >
            {page}
          </Box>
        );
      })}
    </Flex>
  );
}
