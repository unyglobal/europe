// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gavle","repository":"europe","path":"sweden/gaevleborg/gavle","depth":3,"parent":"sweden/gaevleborg","children":["sorby"]});
export const childModules = Object.freeze({"sorby":"./sorby/sorby.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
