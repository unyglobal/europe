// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ossett","repository":"europe","path":"united-kingdom/england/ossett","depth":3,"parent":"united-kingdom/england","children":["flushdyke","paleside","runtlings","town-end"]});
export const childModules = Object.freeze({"flushdyke":"./flushdyke/flushdyke.js","paleside":"./paleside/paleside.js","runtlings":"./runtlings/runtlings.js","town-end":"./town-end/town-end.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
