// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"drachten","repository":"europe","path":"netherlands/friesland/drachten","depth":3,"parent":"netherlands/friesland","children":["de-wieken"]});
export const childModules = Object.freeze({"de-wieken":"./de-wieken/de-wieken.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
