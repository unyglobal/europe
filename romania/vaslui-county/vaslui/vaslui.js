// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vaslui","repository":"europe","path":"romania/vaslui-county/vaslui","depth":3,"parent":"romania/vaslui-county","children":["bustea","paiu","paiu-olarie"]});
export const childModules = Object.freeze({"bustea":"./bustea/bustea.js","paiu":"./paiu/paiu.js","paiu-olarie":"./paiu-olarie/paiu-olarie.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
