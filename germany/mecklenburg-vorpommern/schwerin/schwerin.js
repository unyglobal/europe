// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"schwerin","repository":"europe","path":"germany/mecklenburg-vorpommern/schwerin","depth":3,"parent":"germany/mecklenburg-vorpommern","children":["altstadt","feldstadt","paulsstadt","schelfstadt"]});
export const childModules = Object.freeze({"altstadt":"./altstadt/altstadt.js","feldstadt":"./feldstadt/feldstadt.js","paulsstadt":"./paulsstadt/paulsstadt.js","schelfstadt":"./schelfstadt/schelfstadt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
