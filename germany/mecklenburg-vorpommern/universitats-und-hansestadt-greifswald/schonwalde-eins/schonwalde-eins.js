// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"schonwalde-eins","repository":"europe","path":"germany/mecklenburg-vorpommern/universitats-und-hansestadt-greifswald/schonwalde-eins","depth":4,"parent":"germany/mecklenburg-vorpommern/universitats-und-hansestadt-greifswald","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
