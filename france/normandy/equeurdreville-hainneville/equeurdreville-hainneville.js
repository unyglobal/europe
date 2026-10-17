// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"equeurdreville-hainneville","repository":"europe","path":"france/normandy/equeurdreville-hainneville","depth":3,"parent":"france/normandy","children":["cite-sellier","hameau-bourgeois"]});
export const childModules = Object.freeze({"cite-sellier":"./cite-sellier/cite-sellier.js","hameau-bourgeois":"./hameau-bourgeois/hameau-bourgeois.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
