import {getCssFileSize} from './summary.js';
import {removeMozPrefix} from './remove-moz-prefix.js';


const postBuildTailwind = async () => {
   await removeMozPrefix('output/tailwind-utils.css');
    await getCssFileSize('output/tailwind-utils.css');

}
postBuildTailwind().then(  );
