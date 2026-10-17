// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"diber-county","repository":"europe","path":"albania/diber-county","depth":2,"parent":"albania","children":["bulqize"]});
export const childModules = Object.freeze({"bulqize":"./bulqize/bulqize.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
