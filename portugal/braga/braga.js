// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"braga","repository":"europe","path":"portugal/braga","depth":2,"parent":"portugal","children":["bairro-novo","barcelos","cabeceiras-de-basto","esposende","fafe","guimaraes"]});
export const childModules = Object.freeze({"bairro-novo":"./bairro-novo/bairro-novo.js","barcelos":"./barcelos/barcelos.js","cabeceiras-de-basto":"./cabeceiras-de-basto/cabeceiras-de-basto.js","esposende":"./esposende/esposende.js","fafe":"./fafe/fafe.js","guimaraes":"./guimaraes/guimaraes.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
