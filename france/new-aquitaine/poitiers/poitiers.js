// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"poitiers","repository":"europe","path":"france/new-aquitaine/poitiers","depth":3,"parent":"france/new-aquitaine","children":["roman-catholic-diocese-of-poitiers"]});
export const childModules = Object.freeze({"roman-catholic-diocese-of-poitiers":"./roman-catholic-diocese-of-poitiers/roman-catholic-diocese-of-poitiers.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
