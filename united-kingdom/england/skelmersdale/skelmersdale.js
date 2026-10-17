// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"skelmersdale","repository":"europe","path":"united-kingdom/england/skelmersdale","depth":3,"parent":"united-kingdom/england","children":["tanhouse","town-centre"]});
export const childModules = Object.freeze({"tanhouse":"./tanhouse/tanhouse.js","town-centre":"./town-centre/town-centre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
