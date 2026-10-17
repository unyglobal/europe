// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ylojarvi","repository":"europe","path":"finland/pirkanmaa/ylojarvi","depth":3,"parent":"finland/pirkanmaa","children":["kirkonseutu","pappilanniemi","urkonmaki"]});
export const childModules = Object.freeze({"kirkonseutu":"./kirkonseutu/kirkonseutu.js","pappilanniemi":"./pappilanniemi/pappilanniemi.js","urkonmaki":"./urkonmaki/urkonmaki.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
