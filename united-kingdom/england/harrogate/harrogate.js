// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"harrogate","repository":"europe","path":"united-kingdom/england/harrogate","depth":3,"parent":"united-kingdom/england","children":["high-harrogate","low-harrogate","west-park"]});
export const childModules = Object.freeze({"high-harrogate":"./high-harrogate/high-harrogate.js","low-harrogate":"./low-harrogate/low-harrogate.js","west-park":"./west-park/west-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
