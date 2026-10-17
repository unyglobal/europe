// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jozsefvaros","repository":"europe","path":"hungary/budapest/jozsefvaros","depth":3,"parent":"hungary/budapest","children":["corvinnegyed"]});
export const childModules = Object.freeze({"corvinnegyed":"./corvinnegyed/corvinnegyed.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
