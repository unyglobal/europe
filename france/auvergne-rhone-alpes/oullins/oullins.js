// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oullins","repository":"europe","path":"france/auvergne-rhone-alpes/oullins","depth":3,"parent":"france/auvergne-rhone-alpes","children":["centre-ville","la-malletiere"]});
export const childModules = Object.freeze({"centre-ville":"./centre-ville/centre-ville.js","la-malletiere":"./la-malletiere/la-malletiere.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
