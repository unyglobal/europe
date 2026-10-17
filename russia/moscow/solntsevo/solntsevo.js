// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"solntsevo","repository":"europe","path":"russia/moscow/solntsevo","depth":3,"parent":"russia/moscow","children":["orlovo"]});
export const childModules = Object.freeze({"orlovo":"./orlovo/orlovo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
