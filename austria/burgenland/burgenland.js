// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"burgenland","repository":"europe","path":"austria/burgenland","depth":2,"parent":"austria","children":["eisenzicken"]});
export const childModules = Object.freeze({"eisenzicken":"./eisenzicken/eisenzicken.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
