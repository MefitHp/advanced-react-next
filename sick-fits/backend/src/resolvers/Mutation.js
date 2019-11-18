const mutations = {
  async createItem(parent, args, ctx, info) {
    const item = await ctx.db.mutation.createItem({ data: { ...args } }, info);
    return item;
  },
  async updateItem(parent, args, ctx, info) {
    const valuesToUpdate = { ...args };
    delete valuesToUpdate.id;

    return ctx.db.mutation.updateItem({
      data: valuesToUpdate,
      where: { id: args.id }
    });
  }
};

module.exports = mutations;
