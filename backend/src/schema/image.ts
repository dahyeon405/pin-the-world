import { builder } from '../builder'
import { prisma } from '../db'

builder.prismaObject('Image', {
  fields: (t) => ({
    id: t.exposeID('id'),
    url: t.exposeString('url', { nullable: true }),
    name: t.exposeString('name', { nullable: true }),
    title: t.exposeString('title', { nullable: true }),
    city: t.exposeString('city', { nullable: true }),
    country: t.exposeString('country', { nullable: true }),
    location: t.exposeString('location', { nullable: true }),
    locationUrl: t.exposeString('locationUrl', { nullable: true }),
    description: t.exposeString('description', { nullable: true }),
    createdAt: t.expose('createdAt', { type: 'DateTime' }),
    tags: t.relation('tags'),
    type: t.exposeString('type'),
    travel: t.exposeString('travel', { nullable: true })
  })
})

builder.mutationFields((t) => ({
  addImage: t.prismaField({
    type: 'Image',
    args: {
      type: t.arg.string({ required: true })
    },
    resolve: async (query, parent, args) => {
      return await prisma.image.create({
        ...query,
        data: {
          type: args.type
        }
      })
    }
  })
}))

builder.queryField('imagesByCity', (t) => {
  return t.prismaConnection({
    type: 'Image',
    cursor: 'id',
    args: {
      city: t.arg.string()
    },
    totalCount: async (parent, args) => {
      return await prisma.image.count({
        where: {
          city: args.city ?? ''
        }
      })
    },
    resolve: async (query, parent, args) => {
      return await prisma.image.findMany({
        ...query,
        where: {
          city: args.city ?? ''
        },
        orderBy: {
          createdAt: 'desc'
        }
      })
    }
  })
})

builder.queryField('imagesByTravel', (t) => {
  return t.prismaConnection({
    type: 'Image',
    cursor: 'id',
    totalCount: async (parent, args) => {
      return await prisma.image.count({
        where: {
          travel: args.travel ?? ''
        }
      })
    },
    args: {
      travel: t.arg.string()
    },
    resolve: async (query, parent, args) => {
      return await prisma.image.findMany({
        ...query,
        where: {
          travel: args.travel ?? ''
        },
        orderBy: {
          createdAt: 'desc'
        }
      })
    }
  })
})

builder.queryField('imagesByTag', (t) => {
  return t.prismaConnection({
    type: 'Image',
    cursor: 'id',
    args: {
      tag: t.arg.string()
    },
    totalCount: async (parent, args) => {
      return await prisma.image.count({
        where: {
          tags: {
            some: {
              name: args.tag ?? ''
            }
          }
        }
      })
    },
    resolve: async (query, parent, args) => {
      return await prisma.image.findMany({
        ...query,
        where: {
          tags: {
            some: {
              name: args.tag ?? ''
            }
          }
        }
      })
    }
  })
})
