// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"trento","repository":"europe","path":"italy/trentino-alto-adige/trento","depth":3,"parent":"italy/trentino-alto-adige","children":["trento-le-albere","trento-piedicastello"]});
export const childModules = Object.freeze({"trento-le-albere":"./trento-le-albere/trento-le-albere.js","trento-piedicastello":"./trento-piedicastello/trento-piedicastello.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
