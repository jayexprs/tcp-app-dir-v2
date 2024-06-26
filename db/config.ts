import { defineDb, defineTable, column } from 'astro:db';

const Products = defineTable({
  columns: {
    name: column.text({primaryKey: true}),
    description: column.text(),
    icon: column.text()

  }
});

const Apps = defineTable({
  columns: {
    id: column.number( {primaryKey: true} ),
    name: column.text(),
    description: column.text(),
    productId: column.text( {references: () => Products.columns.name}),
    isAdmin: column.boolean(),
    isFavorite: column.boolean()
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: { Products, Apps }
});
