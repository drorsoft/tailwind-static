import {getCssFileSize} from './get-file-size.js';
import {removeMozPrefix} from './remove-moz-prefix.js';
import {getFullPath} from './get-full-file-path.js';


const postBuildTailwind = async () => {
    const filePath = 'output/tailwind-utils.css';
    const fileFullPath =
        getFullPath(filePath);
    await removeMozPrefix(filePath);
    const size = await  getCssFileSize(filePath);
    console.log('\x1b[32m%s\x1b[0m', 'Successfully processed the file at:'
       );
    console.log('\x1b[32m%s\x1b[0m', fileFullPath )
    console.log('\x1b[33m%s\x1b[0m', `File size: ${size} bytes`);
};
postBuildTailwind().then();
