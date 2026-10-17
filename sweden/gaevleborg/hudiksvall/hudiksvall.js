// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hudiksvall","repository":"europe","path":"sweden/gaevleborg/hudiksvall","depth":3,"parent":"sweden/gaevleborg","children":["avik"]});
export const childModules = Object.freeze({"avik":"./avik/avik.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
