// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-ostrobothnia","repository":"europe","path":"finland/north-ostrobothnia","depth":2,"parent":"finland","children":["haukipudas","oulu","raahe","ylivieska"]});
export const childModules = Object.freeze({"haukipudas":"./haukipudas/haukipudas.js","oulu":"./oulu/oulu.js","raahe":"./raahe/raahe.js","ylivieska":"./ylivieska/ylivieska.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
