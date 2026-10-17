// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"grays","repository":"europe","path":"united-kingdom/england/grays","depth":3,"parent":"united-kingdom/england","children":["little-thurrock"]});
export const childModules = Object.freeze({"little-thurrock":"./little-thurrock/little-thurrock.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
