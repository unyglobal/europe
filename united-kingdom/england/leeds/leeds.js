// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"leeds","repository":"europe","path":"united-kingdom/england/leeds","depth":3,"parent":"united-kingdom/england","children":["camp-field","steander","the-leylands"]});
export const childModules = Object.freeze({"camp-field":"./camp-field/camp-field.js","steander":"./steander/steander.js","the-leylands":"./the-leylands/the-leylands.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
