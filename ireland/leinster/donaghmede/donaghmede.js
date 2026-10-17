// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"donaghmede","repository":"europe","path":"ireland/leinster/donaghmede","depth":3,"parent":"ireland/leinster","children":["the-donaghies"]});
export const childModules = Object.freeze({"the-donaghies":"./the-donaghies/the-donaghies.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
