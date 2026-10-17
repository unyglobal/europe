// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pontefract","repository":"europe","path":"united-kingdom/england/pontefract","depth":3,"parent":"united-kingdom/england","children":["marl-pits"]});
export const childModules = Object.freeze({"marl-pits":"./marl-pits/marl-pits.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
