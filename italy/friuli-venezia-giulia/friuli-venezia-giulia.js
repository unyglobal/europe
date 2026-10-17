// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"friuli-venezia-giulia","repository":"europe","path":"italy/friuli-venezia-giulia","depth":2,"parent":"italy","children":["cordenons","gorizia","monfalcone","pordenone","sacile","trieste","udine"]});
export const childModules = Object.freeze({"cordenons":"./cordenons/cordenons.js","gorizia":"./gorizia/gorizia.js","monfalcone":"./monfalcone/monfalcone.js","pordenone":"./pordenone/pordenone.js","sacile":"./sacile/sacile.js","trieste":"./trieste/trieste.js","udine":"./udine/udine.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
