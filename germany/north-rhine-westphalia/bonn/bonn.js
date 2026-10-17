// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bonn","repository":"europe","path":"germany/north-rhine-westphalia/bonn","depth":3,"parent":"germany/north-rhine-westphalia","children":["bonn-zentrum","sudstadt","weststadt"]});
export const childModules = Object.freeze({"bonn-zentrum":"./bonn-zentrum/bonn-zentrum.js","sudstadt":"./sudstadt/sudstadt.js","weststadt":"./weststadt/weststadt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
