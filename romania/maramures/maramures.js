// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"maramures","repository":"europe","path":"romania/maramures","depth":2,"parent":"romania","children":["baia-mare","baia-sprie","borsa","sighetu-marmatiei","viseu-de-sus"]});
export const childModules = Object.freeze({"baia-mare":"./baia-mare/baia-mare.js","baia-sprie":"./baia-sprie/baia-sprie.js","borsa":"./borsa/borsa.js","sighetu-marmatiei":"./sighetu-marmatiei/sighetu-marmatiei.js","viseu-de-sus":"./viseu-de-sus/viseu-de-sus.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
