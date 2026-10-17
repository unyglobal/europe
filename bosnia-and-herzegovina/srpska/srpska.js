// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"srpska","repository":"europe","path":"bosnia-and-herzegovina/srpska","depth":2,"parent":"bosnia-and-herzegovina","children":["banja-luka","bijeljina","doboj","prijedor","trebinje"]});
export const childModules = Object.freeze({"banja-luka":"./banja-luka/banja-luka.js","bijeljina":"./bijeljina/bijeljina.js","doboj":"./doboj/doboj.js","prijedor":"./prijedor/prijedor.js","trebinje":"./trebinje/trebinje.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
