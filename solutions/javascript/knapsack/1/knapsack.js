/**
 * @typedef {{weight: number, value: number}} Item
 * @param {number} maximumWeight Backpack capacity
 * @param {Item[]} items List of possible items
 */
export const knapsack = (maximumWeight, items, n = items.length) => {
  /* End recursion */
  if (maximumWeight === 0 || n === 0) return 0;

  let last = items[n - 1];

  /*  Skip if too heavy  */
  if (last.weight > maximumWeight) return knapsack(maximumWeight, items, n - 1);

  /*  Returns maximum of including last item or not  */
  return Math.max(
    last.value + knapsack(maximumWeight - last.weight, items, n - 1),
    knapsack(maximumWeight, items, n - 1)
  );
};
