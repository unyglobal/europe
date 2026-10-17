// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"treptow","repository":"europe","path":"germany/state-of-berlin/treptow","depth":3,"parent":"germany/state-of-berlin","children":["gorlitzer-park"]});
export const childModules = Object.freeze({"gorlitzer-park":"./gorlitzer-park/gorlitzer-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
