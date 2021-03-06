/**
 * A sample service to cater for cats controllers.
 * Defined required services as new files.
 * Note: Service file that caters for /cats controller is named as cats.js.
 * Follow this pattern if applicable.
 */
import { getCatFacts} from '../external-apis/cat-fact-service';

const getCatInformation = (size) => {
    return getCatFacts(size);
};

export default getCatInformation;