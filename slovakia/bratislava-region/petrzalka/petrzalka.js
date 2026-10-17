// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"petrzalka","repository":"europe","path":"slovakia/bratislava-region/petrzalka","depth":3,"parent":"slovakia/bratislava-region","children":["ovsiste"]});
export const childModules = Object.freeze({"ovsiste":"./ovsiste/ovsiste.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
