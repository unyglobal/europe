// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"libiaz","repository":"europe","path":"poland/lesser-poland/libiaz","depth":3,"parent":"poland/lesser-poland","children":["libiaz-ma-y"]});
export const childModules = Object.freeze({"libiaz-ma-y":"./libiaz-ma-y/libiaz-ma-y.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
