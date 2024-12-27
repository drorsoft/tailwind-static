import { promises as fs } from 'fs';

export const getCssFileSize = async (filePath) => {
    try {
        const stats = await fs.stat(filePath);
        console.log(`File size: ${stats.size} bytes`);
    } catch (error) {
        console.error(`Error reading file: ${error.message}`);
    }
};
