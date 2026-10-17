// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bologna","repository":"europe","path":"italy/emilia-romagna/bologna","depth":3,"parent":"italy/emilia-romagna","children":["ghetto-ebraico"]});
export const childModules = Object.freeze({"ghetto-ebraico":"./ghetto-ebraico/ghetto-ebraico.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
