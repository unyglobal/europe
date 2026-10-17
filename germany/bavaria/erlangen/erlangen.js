// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"erlangen","repository":"europe","path":"germany/bavaria/erlangen","depth":3,"parent":"germany/bavaria","children":["neustadt"]});
export const childModules = Object.freeze({"neustadt":"./neustadt/neustadt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
