// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vaslui-county","repository":"europe","path":"romania/vaslui-county","depth":2,"parent":"romania","children":["barlad","husi","vaslui"]});
export const childModules = Object.freeze({"barlad":"./barlad/barlad.js","husi":"./husi/husi.js","vaslui":"./vaslui/vaslui.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
