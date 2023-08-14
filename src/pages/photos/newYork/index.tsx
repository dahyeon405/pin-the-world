import { Block } from "../../../components/Block";
import { Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getNewYorkPhotos } from "@/requests/data-fetch/getNewYorkPhotos.ts";

export default function NewYorkPage() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    getNewYorkPhotos().then((data) => {
      if (data) setData(data);
    });
  }, []);

  return (
    <>
      <Box px="6" py="16">
        <Heading as="h1" fontWeight="400" size="3xl">
          2022, <br />
          New York
        </Heading>
      </Box>
      <>
        {data.map((item: any, index: number) => {
          return <Block item={item} key={index} />;
        })}
      </>
    </>
  );
}
