// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mizil","repository":"europe","path":"romania/prahova/mizil","depth":3,"parent":"romania/prahova","children":["fefelei"]});
export const childModules = Object.freeze({"fefelei":"./fefelei/fefelei.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
