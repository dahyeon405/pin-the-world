import SchemaBuilder from '@pothos/core'
import PrismaPlugin from '@pothos/plugin-prisma'
import RelayPlugin from '@pothos/plugin-relay'
import type PrismaTypes from '@pothos/plugin-prisma/generated'
import { DateTimeResolver } from 'graphql-scalars'
import { prisma } from './db'

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes
  // eslint-disable-next-line @typescript-eslint/ban-types
  Context: {}
  Scalars: {
    DateTime: {
      Input: Date
      Output: Date
    }
  }
}>({
  plugins: [PrismaPlugin, RelayPlugin],
  prisma: {
    client: prisma
  },
  relayOptions: {
    cursorType: 'ID'
  }
})

builder.queryType({})
builder.mutationType({})

builder.addScalarType('DateTime', DateTimeResolver, {})
