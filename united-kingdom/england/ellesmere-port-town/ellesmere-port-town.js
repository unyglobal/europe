// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ellesmere-port-town","repository":"europe","path":"united-kingdom/england/ellesmere-port-town","depth":3,"parent":"united-kingdom/england","children":["whitby","wolverham"]});
export const childModules = Object.freeze({"whitby":"./whitby/whitby.js","wolverham":"./wolverham/wolverham.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
