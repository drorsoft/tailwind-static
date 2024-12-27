import { promises as fs } from 'fs';
export const  removeMozPrefix = async(filePath)=> {
    try {
        let cssContent = await fs.readFile(filePath, 'utf-8');
        let updatedContent = cssContent.split('\n').filter(line => !line.includes('-moz-')).join('\n');
        await fs.writeFile(filePath, updatedContent, 'utf-8');
        console.log('Successfully removed lines with -moz- prefix.');
    } catch (error) {
        console.error('Error processing the file:', error);
    }
}


