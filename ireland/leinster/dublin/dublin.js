// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dublin","repository":"europe","path":"ireland/leinster/dublin","depth":3,"parent":"ireland/leinster","children":["ballsbridge"]});
export const childModules = Object.freeze({"ballsbridge":"./ballsbridge/ballsbridge.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
