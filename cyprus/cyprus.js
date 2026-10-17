// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cyprus","repository":"europe","path":"cyprus","depth":1,"parent":"","children":["ammochostos","keryneia","larnaka","limassol","nicosia","pafos"]});
export const childModules = Object.freeze({"ammochostos":"./ammochostos/ammochostos.js","keryneia":"./keryneia/keryneia.js","larnaka":"./larnaka/larnaka.js","limassol":"./limassol/limassol.js","nicosia":"./nicosia/nicosia.js","pafos":"./pafos/pafos.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
