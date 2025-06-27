import { promises as fs } from 'fs';
import path from 'path';
import { Jobsite } from '../types/Jobsite';

const dataPath = path.join(process.cwd(), 'data', 'jobsites.json');

const getJobsites = async (): Promise<Jobsite[]> => {
    const data = await fs.readFile(dataPath, 'utf-8');
    return JSON.parse(data);
};

const saveJobsites = async (jobsites: Jobsite[]): Promise<void> => {
    await fs.writeFile(dataPath, JSON.stringify(jobsites, null, 2));
};

export const JobsiteModel = {
    getAll: async (): Promise<Jobsite[]> => {
        return getJobsites();
    },

    getById: async (id: string): Promise<Jobsite | undefined> => {
        const jobsites = await getJobsites();
        return jobsites.find(j => j.id === id);
    },

    create: async (jobsiteData: Omit<Jobsite, 'id'>): Promise<Jobsite> => {
        const jobsites = await getJobsites();
        const newJobsite: Jobsite = {
            id: String(Date.now()),
            ...jobsiteData
        };
        jobsites.push(newJobsite);
        await saveJobsites(jobsites);
        return newJobsite;
    },

    update: async (id: string, jobsiteData: Partial<Omit<Jobsite, 'id'>>): Promise<Jobsite | null> => {
        const jobsites = await getJobsites();
        const index = jobsites.findIndex(j => j.id === id);
        if (index !== -1) {
            const updatedJobsite = { ...jobsites[index], ...jobsiteData };
            jobsites[index] = updatedJobsite;
            await saveJobsites(jobsites);
            return updatedJobsite;
        }
        return null;
    },

    delete: async (id: string): Promise<boolean> => {
        let jobsites = await getJobsites();
        const initialLength = jobsites.length;
        jobsites = jobsites.filter(j => j.id !== id);
        if (jobsites.length < initialLength) {
            await saveJobsites(jobsites);
            return true;
        }
        return false;
    }
}; 