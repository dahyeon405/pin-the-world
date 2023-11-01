import { gql } from 'graphql-request'
import { pRequest } from './request'
import { type ImageResponse } from '../types/imageResponse'

export interface GetImagesParams {
  city?: string
  travel?: string
  tag?: string
}

const DEFAULT_TAKE = 10

export const getImages = async (
  params: GetImagesParams,
  take: number = DEFAULT_TAKE,
  page: number = 1
): Promise<ImageResponse> => {
  const paramsToString = Object.keys(params)
    .map((key) => `${key}: "${params[key as keyof GetImagesParams]}"`)
    .join(', ')

  const skip = (page - 1) * take

  console.log('skip', skip)

  const result: any = await pRequest(gql`
  {
    images(${paramsToString} first: ${take}, skip: ${skip}) {
      totalCount
      edges {
        node {
          name
          title
          location
          locationUrl
          description
          type
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }`)

  return result.images
}
