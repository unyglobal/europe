// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"staveley","repository":"europe","path":"united-kingdom/england/staveley","depth":3,"parent":"united-kingdom/england","children":["lowgates","netherthorpe"]});
export const childModules = Object.freeze({"lowgates":"./lowgates/lowgates.js","netherthorpe":"./netherthorpe/netherthorpe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
