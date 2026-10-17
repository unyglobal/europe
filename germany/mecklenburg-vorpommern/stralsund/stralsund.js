// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"stralsund","repository":"europe","path":"germany/mecklenburg-vorpommern/stralsund","depth":3,"parent":"germany/mecklenburg-vorpommern","children":["tribseer-vorstadt"]});
export const childModules = Object.freeze({"tribseer-vorstadt":"./tribseer-vorstadt/tribseer-vorstadt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
