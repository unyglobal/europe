// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"l-hospitalet-de-llobregat","repository":"europe","path":"spain/catalonia/l-hospitalet-de-llobregat","depth":3,"parent":"spain/catalonia","children":["barri-del-centre"]});
export const childModules = Object.freeze({"barri-del-centre":"./barri-del-centre/barri-del-centre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
