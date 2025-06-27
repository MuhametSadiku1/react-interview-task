import { promises as fs } from 'fs';
import path from 'path';
import { Item } from '../types/Item';

const dataPath = path.join(process.cwd(), 'data', 'items.json');

const getItems = async (): Promise<Item[]> => {
    const data = await fs.readFile(dataPath, 'utf-8');
    return JSON.parse(data);
};

const saveItems = async (items: Item[]): Promise<void> => {
    await fs.writeFile(dataPath, JSON.stringify(items, null, 2));
};

export const ItemModel = {
    getAll: async (jobsiteId: string | null = null): Promise<Item[]> => {
        let items = await getItems();
        if (jobsiteId) {
            items = items.filter(i => i.jobsiteId === jobsiteId);
        }
        return items;
    },

    getById: async (id: string): Promise<Item | undefined> => {
        const items = await getItems();
        return items.find(i => i.id === id);
    },

    create: async (itemData: Omit<Item, 'id'>): Promise<Item> => {
        const items = await getItems();
        const newItem: Item = {
            id: String(Date.now()),
            ...itemData
        };
        items.push(newItem);
        await saveItems(items);
        return newItem;
    },

    update: async (id: string, itemData: Partial<Omit<Item, 'id'>>): Promise<Item | null> => {
        const items = await getItems();
        const index = items.findIndex(i => i.id === id);
        if (index !== -1) {
            const updatedItem = { ...items[index], ...itemData };
            items[index] = updatedItem;
            await saveItems(items);
            return updatedItem;
        }
        return null;
    },

    delete: async (id: string): Promise<boolean> => {
        let items = await getItems();
        const initialLength = items.length;
        items = items.filter(i => i.id !== id);
        if (items.length < initialLength) {
            await saveItems(items);
            return true;
        }
        return false;
    }
}; 