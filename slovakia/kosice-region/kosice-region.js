// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kosice-region","repository":"europe","path":"slovakia/kosice-region","depth":2,"parent":"slovakia","children":["kosice","michalovce","roznava","spisska-nova-ves","trebisov"]});
export const childModules = Object.freeze({"kosice":"./kosice/kosice.js","michalovce":"./michalovce/michalovce.js","roznava":"./roznava/roznava.js","spisska-nova-ves":"./spisska-nova-ves/spisska-nova-ves.js","trebisov":"./trebisov/trebisov.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
