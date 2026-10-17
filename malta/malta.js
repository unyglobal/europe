// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"malta","repository":"europe","path":"malta","depth":1,"parent":"","children":["birkirkara","haz-zabbar","il-mosta","qormi","saint-paul-s-bay","tas-sliema"]});
export const childModules = Object.freeze({"birkirkara":"./birkirkara/birkirkara.js","haz-zabbar":"./haz-zabbar/haz-zabbar.js","il-mosta":"./il-mosta/il-mosta.js","qormi":"./qormi/qormi.js","saint-paul-s-bay":"./saint-paul-s-bay/saint-paul-s-bay.js","tas-sliema":"./tas-sliema/tas-sliema.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
