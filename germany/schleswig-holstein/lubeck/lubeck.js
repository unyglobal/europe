// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lubeck","repository":"europe","path":"germany/schleswig-holstein/lubeck","depth":3,"parent":"germany/schleswig-holstein","children":["burgtor","innenstadt"]});
export const childModules = Object.freeze({"burgtor":"./burgtor/burgtor.js","innenstadt":"./innenstadt/innenstadt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
