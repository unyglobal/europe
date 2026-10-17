// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"leicester","repository":"europe","path":"united-kingdom/england/leicester","depth":3,"parent":"united-kingdom/england","children":["black-friars","frog-island"]});
export const childModules = Object.freeze({"black-friars":"./black-friars/black-friars.js","frog-island":"./frog-island/frog-island.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
