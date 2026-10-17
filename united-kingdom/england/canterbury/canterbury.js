// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"canterbury","repository":"europe","path":"united-kingdom/england/canterbury","depth":3,"parent":"united-kingdom/england","children":["northgate","st-dunstan-s"]});
export const childModules = Object.freeze({"northgate":"./northgate/northgate.js","st-dunstan-s":"./st-dunstan-s/st-dunstan-s.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
