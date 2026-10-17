// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"laukaa","repository":"europe","path":"finland/central-finland/laukaa","depth":3,"parent":"finland/central-finland","children":["akkasuo","mikkolanniemi","pellosniemi","vuojarvi"]});
export const childModules = Object.freeze({"akkasuo":"./akkasuo/akkasuo.js","mikkolanniemi":"./mikkolanniemi/mikkolanniemi.js","pellosniemi":"./pellosniemi/pellosniemi.js","vuojarvi":"./vuojarvi/vuojarvi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
