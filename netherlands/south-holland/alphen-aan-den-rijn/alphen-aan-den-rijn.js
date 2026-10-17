// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"alphen-aan-den-rijn","repository":"europe","path":"netherlands/south-holland/alphen-aan-den-rijn","depth":3,"parent":"netherlands/south-holland","children":["oudshoorn"]});
export const childModules = Object.freeze({"oudshoorn":"./oudshoorn/oudshoorn.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
