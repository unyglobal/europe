// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"craiova","repository":"europe","path":"romania/dolj/craiova","depth":3,"parent":"romania/dolj","children":["canalu","cart-craiovita-noua","poenari"]});
export const childModules = Object.freeze({"canalu":"./canalu/canalu.js","cart-craiovita-noua":"./cart-craiovita-noua/cart-craiovita-noua.js","poenari":"./poenari/poenari.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
