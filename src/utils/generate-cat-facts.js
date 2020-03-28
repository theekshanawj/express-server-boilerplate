/**
 * Utility method that generate cat fact array.
 * Refer https://alexwohlbruck.github.io/cat-facts/docs/endpoints/facts.html.
 */

const generateCatFacts = (result) => {
    const catFacts = [];
    if(!result) return catFacts;
    if (Array.isArray(result)) {
        result.forEach((fact) => {
            catFacts.push(fact.text);
        });
    } else if (typeof result === 'object') {
        catFacts.push(result.text);
    }
    return catFacts;
};

export default generateCatFacts;