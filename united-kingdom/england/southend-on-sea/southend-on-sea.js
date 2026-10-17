// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"southend-on-sea","repository":"europe","path":"united-kingdom/england/southend-on-sea","depth":3,"parent":"united-kingdom/england","children":["clifftown","porters-town"]});
export const childModules = Object.freeze({"clifftown":"./clifftown/clifftown.js","porters-town":"./porters-town/porters-town.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
