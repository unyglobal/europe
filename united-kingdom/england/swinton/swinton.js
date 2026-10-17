// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"swinton","repository":"europe","path":"united-kingdom/england/swinton","depth":3,"parent":"united-kingdom/england","children":["broadoak-park","dales-brow","hazelhurst","moorside"]});
export const childModules = Object.freeze({"broadoak-park":"./broadoak-park/broadoak-park.js","dales-brow":"./dales-brow/dales-brow.js","hazelhurst":"./hazelhurst/hazelhurst.js","moorside":"./moorside/moorside.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
