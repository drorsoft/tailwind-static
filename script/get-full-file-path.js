import path from 'path';
import { fileURLToPath } from 'url';

export const getFullPath = (filePath) => {
    // Get the current file's directory
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    // Get the full path of a file
    return path.resolve(__dirname, '../', filePath);
}

