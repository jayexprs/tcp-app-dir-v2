import { db, Products, Apps } from 'astro:db';
import data from "../src/data.json";

const productApps = data.map( (product) =>  {
	const productName = product.name;
	const apps = product.apps.map( (app) =>  
	({name: app.name, description: app.description , productId: product.name , isAdmin: app.isAdmin ? true : false, isFavorite: false }));
	return apps;
}).flat();

// https://astro.build/db/seed
export default async function seed() {

	await db.insert( Products ).values([
		...data.map( ( product ) => ( {name: product.name, description: product.description, icon: product.icon}) )	
		
		]);
	
		await db.insert( Apps ).values([
			...productApps.map( (productApp) => productApp )
		]);
}
