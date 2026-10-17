// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"poznan","repository":"europe","path":"poland/greater-poland/poznan","depth":3,"parent":"poland/greater-poland","children":["stare-miasto"]});
export const childModules = Object.freeze({"stare-miasto":"./stare-miasto/stare-miasto.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
