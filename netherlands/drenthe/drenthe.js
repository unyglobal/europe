// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"drenthe","repository":"europe","path":"netherlands/drenthe","depth":2,"parent":"netherlands","children":["assen","emmen","hoogeveen","meppel"]});
export const childModules = Object.freeze({"assen":"./assen/assen.js","emmen":"./emmen/emmen.js","hoogeveen":"./hoogeveen/hoogeveen.js","meppel":"./meppel/meppel.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
