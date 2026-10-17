// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wawer","repository":"europe","path":"poland/mazovia/wawer","depth":3,"parent":"poland/mazovia","children":["miedzylesie","radosc"]});
export const childModules = Object.freeze({"miedzylesie":"./miedzylesie/miedzylesie.js","radosc":"./radosc/radosc.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
