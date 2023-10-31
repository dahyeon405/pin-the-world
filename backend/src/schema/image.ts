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
    type: t.exposeString('type')
  })
})

builder.mutationField('createImage', (t) =>
  t.prismaField({
    type: 'Image',
    args: {
      url: t.arg.string(),
      title: t.arg.string(),
      name: t.arg.string(),
      city: t.arg.string(),
      country: t.arg.string(),
      location: t.arg.string(),
      locationUrl: t.arg.string(),
      description: t.arg.string(),
      type: t.arg.string({ required: true })
    },
    resolve: async (query, _parent, args, _context) => {
      return await prisma.image.create({
        ...query,
        data: {
          url: args.url,
          name: args.name,
          title: args.title,
          city: args.city,
          country: args.country,
          location: args.location,
          locationUrl: args.locationUrl,
          description: args.description,
          type: args.type
        }
      })
    }
  })
)

builder.queryFields((t) => ({
  imagesByCity: t.prismaField({
    type: ['Image'],
    args: {
      city: t.arg.string()
    },
    resolve: async (query, parent, args) => {
      return await prisma.image.findMany({
        ...query,
        where: {
          city: args.city ?? ''
        }
      })
    }
  }),
  imagesByTag: t.prismaField({
    type: ['Image'],
    args: {
      tag: t.arg.string()
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
}))
