// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"redruth","repository":"europe","path":"united-kingdom/england/redruth","depth":3,"parent":"united-kingdom/england","children":["plain-an-gwarry"]});
export const childModules = Object.freeze({"plain-an-gwarry":"./plain-an-gwarry/plain-an-gwarry.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
