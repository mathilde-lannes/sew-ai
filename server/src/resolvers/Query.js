async function feed(parent, args, context, info) {
    const where = args.filter
        ? {
            OR: [
                { description: { contains: args.filter } },
                { url: { contains: args.filter } },
            ],
        }
        : {}

    const links = await context.prisma.link.findMany({
        where,
        skip: args.skip,
        take: args.take,
        orderBy: args.orderBy,
    })

    const count = await context.prisma.link.count({ where })

    return {
        id: 'main-feed',
        links,
        count,
    }
}

function info() {
    return `This is the API of sew.ai`
}
module.exports = {
    feed,
    info,
}