// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"campina","repository":"europe","path":"romania/prahova/campina","depth":3,"parent":"romania/prahova","children":["pacuri","pitigaia"]});
export const childModules = Object.freeze({"pacuri":"./pacuri/pacuri.js","pitigaia":"./pitigaia/pitigaia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
