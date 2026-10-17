// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"targovishte","repository":"europe","path":"bulgaria/targovishte","depth":2,"parent":"bulgaria","children":["popovo"]});
export const childModules = Object.freeze({"popovo":"./popovo/popovo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
