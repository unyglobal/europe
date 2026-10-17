// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"carlsbad-region","repository":"europe","path":"czechia/carlsbad-region","depth":2,"parent":"czechia","children":["cheb","karlovy-vary","ostrov","sokolov"]});
export const childModules = Object.freeze({"cheb":"./cheb/cheb.js","karlovy-vary":"./karlovy-vary/karlovy-vary.js","ostrov":"./ostrov/ostrov.js","sokolov":"./sokolov/sokolov.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
