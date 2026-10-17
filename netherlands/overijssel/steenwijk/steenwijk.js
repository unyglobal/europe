// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"steenwijk","repository":"europe","path":"netherlands/overijssel/steenwijk","depth":3,"parent":"netherlands/overijssel","children":["oostermeenthe"]});
export const childModules = Object.freeze({"oostermeenthe":"./oostermeenthe/oostermeenthe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
