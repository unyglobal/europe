// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"seinajoki","repository":"europe","path":"finland/south-ostrobothnia/seinajoki","depth":3,"parent":"finland/south-ostrobothnia","children":["itikka","marttila"]});
export const childModules = Object.freeze({"itikka":"./itikka/itikka.js","marttila":"./marttila/marttila.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
