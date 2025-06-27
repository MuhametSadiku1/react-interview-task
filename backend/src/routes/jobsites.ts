import express, { Request, Response } from 'express';
import { JobsiteModel } from '../models/jobsiteModel';
import { validate, jobsiteSchema } from '../middleware/validationMiddleware';
import { Jobsite } from '../types/Jobsite';

const router = express.Router();

router.get('/', async (_req: Request, res: Response) => {
    try {
        const jobsites = await JobsiteModel.getAll();
        res.json(jobsites);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const jobsite = await JobsiteModel.getById(req.params.id);
        if (jobsite) {
            res.json(jobsite);
        } else {
            res.status(404).send('Jobsite not found');
        }
    } catch (error) {
        res.status(500).send('Error retrieving jobsite');
    }
});

router.post('/', validate(jobsiteSchema), async (req: Request, res: Response) => {
    try {
        const newJobsite = await JobsiteModel.create(req.body);
        res.status(201).json(newJobsite);
    } catch (error) {
        res.status(500).send('Error creating jobsite');
    }
});

router.put('/:id', validate(jobsiteSchema), async (req: Request, res: Response) => {
    try {
        const updatedJobsite = await JobsiteModel.update(req.params.id, req.body);
        if (updatedJobsite) {
            res.json(updatedJobsite);
        } else {
            res.status(404).send('Jobsite not found');
        }
    } catch (error) {
        res.status(500).send('Error updating jobsite');
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const success = await JobsiteModel.delete(req.params.id);
        if (success) {
            res.status(204).send();
        } else {
            res.status(404).send('Jobsite not found');
        }
    } catch (error) {
        res.status(500).send('Error deleting jobsite');
    }
});

export default router; 