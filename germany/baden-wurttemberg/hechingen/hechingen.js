// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hechingen","repository":"europe","path":"germany/baden-wurttemberg/hechingen","depth":3,"parent":"germany/baden-wurttemberg","children":["stutenhof"]});
export const childModules = Object.freeze({"stutenhof":"./stutenhof/stutenhof.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
