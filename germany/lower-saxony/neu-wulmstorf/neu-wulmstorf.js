// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"neu-wulmstorf","repository":"europe","path":"germany/lower-saxony/neu-wulmstorf","depth":3,"parent":"germany/lower-saxony","children":["wulmstorfer-moor"]});
export const childModules = Object.freeze({"wulmstorfer-moor":"./wulmstorfer-moor/wulmstorfer-moor.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
