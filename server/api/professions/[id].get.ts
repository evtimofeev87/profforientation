import { DB } from '~/prisma/modules'

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    return await DB.Profession.get({ id: id! })
})
