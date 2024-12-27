import {getCssFileSize} from './get-file-size.js';
import {removeMozPrefix} from './remove-moz-prefix.js';


const postBuildTailwind = async () => {
    const filePath = 'output/tailwind-utils.css';
    await removeMozPrefix(filePath);
    const size = await  getCssFileSize(filePath);
    console.log('\x1b[32m%s\x1b[0m', 'Successfully processed the file at:'
       );
    console.log('\x1b[32m%s\x1b[0m', filePath )
    console.log('\x1b[33m%s\x1b[0m', `File size: ${size} bytes`);
};
postBuildTailwind().then();
