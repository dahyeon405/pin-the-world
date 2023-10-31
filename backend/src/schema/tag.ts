import { builder } from '../builder'

builder.prismaObject('Tag', {
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    imageId: t.relation('image')
  })
})
