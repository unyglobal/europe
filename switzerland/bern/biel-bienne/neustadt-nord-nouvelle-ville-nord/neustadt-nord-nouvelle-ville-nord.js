// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"neustadt-nord-nouvelle-ville-nord","repository":"europe","path":"switzerland/bern/biel-bienne/neustadt-nord-nouvelle-ville-nord","depth":4,"parent":"switzerland/bern/biel-bienne","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
