// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"archway","repository":"europe","path":"united-kingdom/england/archway","depth":3,"parent":"united-kingdom/england","children":["upper-holloway"]});
export const childModules = Object.freeze({"upper-holloway":"./upper-holloway/upper-holloway.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
