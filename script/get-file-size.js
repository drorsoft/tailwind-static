import { promises as fs } from 'fs';

export const getCssFileSize = async (filePath) => {
    try {
        const stats = await fs.stat(filePath);
       return stats.size;
    } catch (error) {
        console.error(`Error reading file: ${error.message}`);
    }
};
