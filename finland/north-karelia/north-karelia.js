// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-karelia","repository":"europe","path":"finland/north-karelia","depth":2,"parent":"finland","children":["joensuu","kontiolahti"]});
export const childModules = Object.freeze({"joensuu":"./joensuu/joensuu.js","kontiolahti":"./kontiolahti/kontiolahti.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
