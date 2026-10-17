// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"primrose-place","repository":"europe","path":"united-kingdom/england/primrose-place","depth":3,"parent":"united-kingdom/england","children":["bassenhally-field"]});
export const childModules = Object.freeze({"bassenhally-field":"./bassenhally-field/bassenhally-field.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
