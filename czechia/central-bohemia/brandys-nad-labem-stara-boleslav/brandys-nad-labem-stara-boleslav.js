// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"brandys-nad-labem-stara-boleslav","repository":"europe","path":"czechia/central-bohemia/brandys-nad-labem-stara-boleslav","depth":3,"parent":"czechia/central-bohemia","children":["brandys-nad-labem"]});
export const childModules = Object.freeze({"brandys-nad-labem":"./brandys-nad-labem/brandys-nad-labem.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
