import { db, Products } from 'astro:db';
import data from "../src/data.json";

// https://astro.build/db/seed
export default async function seed() {
	await data.map( (product) => 
		db.insert(Products).values([
			{name: product.name, description: product.description, icon: product.icon}
		])
	)
}
