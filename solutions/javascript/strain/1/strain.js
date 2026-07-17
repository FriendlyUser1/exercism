export const keep = (c, filter) => c.filter(filter);
export const discard = (c, filter) => c.filter((vs) => !filter(vs));
