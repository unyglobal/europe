// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wassenaar","repository":"europe","path":"netherlands/south-holland/wassenaar","depth":3,"parent":"netherlands/south-holland","children":["deijleroord","oostdorp"]});
export const childModules = Object.freeze({"deijleroord":"./deijleroord/deijleroord.js","oostdorp":"./oostdorp/oostdorp.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
