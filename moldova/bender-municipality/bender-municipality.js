// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bender-municipality","repository":"europe","path":"moldova/bender-municipality","depth":2,"parent":"moldova","children":["bender"]});
export const childModules = Object.freeze({"bender":"./bender/bender.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
