import type { PolaroidItem } from "@/components/Polaroid/PolaroidContainer";
import { Cities } from "./cityCoordinates";

const copenhagenPolaroid = [
  {
    imageName: "IMG_0040.JPG",
    description: `
    교환학생으로 머물렀던 도시이자,\n가장 다시 가고 싶은 도시
    `,
  },
  {
    imageName: "IMG_4367.JPG",
    description: `
    도시 전체에 여유와 편안함이 흐르던 곳.`,
  },
  {
    imageName: "IMG_7484.JPG",
    description: `
    야외 정원을 품은 미술관도 있고,`,
  },
  {
    imageName: "IMG_6172.JPG",
    description: `
    발길 닿는 곳마다 내 집으로 삼고 싶은 곳들이 잔뜩
    `,
  },
  {
    imageName: "IMG_7702.png",
    description: `
    덴마크 그립다.
    `,
  },
];

const icelandPolaroid = [
  {
    imageName: "IMG_2127.JPG",
    description: `
    오로라의 낭만을 품고 떠났던 아이슬란드!
    오로라는 못봤지만 인생 최고의 풍경을 만났다
    `,
  },
  {
    imageName: "IMG_2224.JPG",
    description: `
    내가 찍은 사진 중 베스트 3 안에 드는 사진.`,
  },
  {
    imageName: "IMG_6261.JPG",
    description: `
    주머니는 얇지만 행복했던 청춘 여행`,
  },
  {
    imageName: "IMG_6243.png",
    description: `
    우연히 만난 무지개도 예뻤던 기억 ✨
    `,
  },
];

const newYorkPolaroid = [
  {
    imageName: "C0488T01.JPG",
    description: `
    뉴욕🗽
    큰 기대 없이 갔는데 너무 좋았다.
    `,
  },
  {
    imageName: "C0669T01.JPG",
    description: `
    베이글이 맛있으면 얼마나 맛있어? 했는데
    진짜 맛있었고`,
  },
  {
    imageName: "C0814T01.JPG",
    description: `
    뉴욕 미술관 산책도 좋았고`,
  },
  {
    imageName: "C0657T01.JPG",
    description: `
    타이포그래피를 발견하는 재미도 있었다
    `,
  },
  {
    imageName: "C0616T01.JPG",
    description: `
    도심 곳곳에 있는 공원들이 뉴욕을 더 아름답게 해주는 듯
    `,
  },
];

const seoulPolaroid = [
  {
    imageName: "IMG_4649.JPG",
    description: `
    서울 종로 쪽. 내가 서울에서 가장 좋아하는 지역
    `,
  },
  {
    imageName: "IMG_4662.JPG",
    description: `
    특히 봄 ~ 가을까지의 서울 풍경은
    그 어느 도시에 견주어도 손색없이 아름답다`,
  },
  {
    imageName: "IMG_4679.JPG",
    description: `
    모두 필름카메라로 찍은 사진들`,
  },
  {
    imageName: "000071560029.JPG",
    description: `
    가을의 창경궁
    `,
  },
  {
    imageName: "000071560027.JPG",
    description: `
    가을의 창경궁 2
    `,
  },
];

export const polaroidsMap: Record<Cities, PolaroidItem[]> = {
  Copenhagen: copenhagenPolaroid,
  Iceland: icelandPolaroid,
  "New York": newYorkPolaroid,
  Seoul: seoulPolaroid,
};
