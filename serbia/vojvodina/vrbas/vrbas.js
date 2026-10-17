// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vrbas","repository":"europe","path":"serbia/vojvodina/vrbas","depth":3,"parent":"serbia/vojvodina","children":["novi-vrbas"]});
export const childModules = Object.freeze({"novi-vrbas":"./novi-vrbas/novi-vrbas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
