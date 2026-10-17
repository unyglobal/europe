// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jakobstad","repository":"europe","path":"finland/ostrobothnia/jakobstad","depth":3,"parent":"finland/ostrobothnia","children":["london","norrmalm","skata","sodermalm","vastermalm"]});
export const childModules = Object.freeze({"london":"./london/london.js","norrmalm":"./norrmalm/norrmalm.js","skata":"./skata/skata.js","sodermalm":"./sodermalm/sodermalm.js","vastermalm":"./vastermalm/vastermalm.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
