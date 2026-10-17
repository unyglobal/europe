// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"leposaviq","repository":"europe","path":"kosovo/mitrovica/leposaviq","depth":3,"parent":"kosovo/mitrovica","children":["lagje-terde","ulije","vaj"]});
export const childModules = Object.freeze({"lagje-terde":"./lagje-terde/lagje-terde.js","ulije":"./ulije/ulije.js","vaj":"./vaj/vaj.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
