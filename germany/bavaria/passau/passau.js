// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"passau","repository":"europe","path":"germany/bavaria/passau","depth":3,"parent":"germany/bavaria","children":["haidenhof"]});
export const childModules = Object.freeze({"haidenhof":"./haidenhof/haidenhof.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
