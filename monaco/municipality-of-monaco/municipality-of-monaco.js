// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"municipality-of-monaco","repository":"europe","path":"monaco/municipality-of-monaco","depth":2,"parent":"monaco","children":["monaco","monte-carlo"]});
export const childModules = Object.freeze({"monaco":"./monaco/monaco.js","monte-carlo":"./monte-carlo/monte-carlo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
