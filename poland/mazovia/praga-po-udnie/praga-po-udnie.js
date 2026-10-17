// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"praga-po-udnie","repository":"europe","path":"poland/mazovia/praga-po-udnie","depth":3,"parent":"poland/mazovia","children":["grochow"]});
export const childModules = Object.freeze({"grochow":"./grochow/grochow.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
