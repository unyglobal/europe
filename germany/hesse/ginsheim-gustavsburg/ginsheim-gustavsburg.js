// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ginsheim-gustavsburg","repository":"europe","path":"germany/hesse/ginsheim-gustavsburg","depth":3,"parent":"germany/hesse","children":["ginsheim"]});
export const childModules = Object.freeze({"ginsheim":"./ginsheim/ginsheim.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
