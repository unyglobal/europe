// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"east-kilbride","repository":"europe","path":"united-kingdom/scotland/east-kilbride","depth":3,"parent":"united-kingdom/scotland","children":["birniehill","east-mains","west-mains"]});
export const childModules = Object.freeze({"birniehill":"./birniehill/birniehill.js","east-mains":"./east-mains/east-mains.js","west-mains":"./west-mains/west-mains.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
