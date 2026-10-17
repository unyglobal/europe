// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"veliko-tarnovo","repository":"europe","path":"bulgaria/veliko-tarnovo","depth":2,"parent":"bulgaria","children":["gorna-oryahovitsa","svishtov","veliko-turnovo"]});
export const childModules = Object.freeze({"gorna-oryahovitsa":"./gorna-oryahovitsa/gorna-oryahovitsa.js","svishtov":"./svishtov/svishtov.js","veliko-turnovo":"./veliko-turnovo/veliko-turnovo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
