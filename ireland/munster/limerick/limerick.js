// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"limerick","repository":"europe","path":"ireland/munster/limerick","depth":3,"parent":"ireland/munster","children":["thomondgate"]});
export const childModules = Object.freeze({"thomondgate":"./thomondgate/thomondgate.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
