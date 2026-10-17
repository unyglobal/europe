// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"heidelberg","repository":"europe","path":"germany/baden-wurttemberg/heidelberg","depth":3,"parent":"germany/baden-wurttemberg","children":["neuenheim","weststadt"]});
export const childModules = Object.freeze({"neuenheim":"./neuenheim/neuenheim.js","weststadt":"./weststadt/weststadt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
