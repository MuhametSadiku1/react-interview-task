import express, { Request, Response } from 'express';
import { ItemModel } from '../models/itemModel';
import { validate, itemSchema } from '../middleware/validationMiddleware';
import { Item } from '../types/Item';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const items = await ItemModel.getAll(req.query.jobsiteId as string | null);
        res.json(items);
    } catch (error) {
        res.status(500).send('Error retrieving items');
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const item = await ItemModel.getById(req.params.id);
        if (item) {
            res.json(item);
        } else {
            res.status(404).send('Item not found');
        }
    } catch (error) {
        res.status(500).send('Error retrieving item');
    }
});

router.post('/', validate(itemSchema), async (req: Request, res: Response) => {
    try {
        const newItem = await ItemModel.create(req.body);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put('/:id', validate(itemSchema), async (req: Request, res: Response) => {
    try {
        const updatedItem = await ItemModel.update(req.params.id, req.body);
        if (updatedItem) {
            res.json(updatedItem);
        } else {
            res.status(404).send('Item not found');
        }
    } catch (error) {
        res.status(500).send('Error updating item');
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const success = await ItemModel.delete(req.params.id);
        if (success) {
            res.status(204).send();
        } else {
            res.status(404).send('Item not found');
        }
    } catch (error) {
        res.status(500).send('Error deleting item');
    }
});

export default router; 