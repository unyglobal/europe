// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"marijampole-county","repository":"europe","path":"lithuania/marijampole-county","depth":2,"parent":"lithuania","children":["marijampole"]});
export const childModules = Object.freeze({"marijampole":"./marijampole/marijampole.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
