// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"brandys-nad-labem","repository":"europe","path":"czechia/central-bohemia/brandys-nad-labem-stara-boleslav/brandys-nad-labem","depth":4,"parent":"czechia/central-bohemia/brandys-nad-labem-stara-boleslav","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
