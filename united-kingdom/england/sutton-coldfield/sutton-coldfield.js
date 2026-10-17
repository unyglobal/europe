// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sutton-coldfield","repository":"europe","path":"united-kingdom/england/sutton-coldfield","depth":3,"parent":"united-kingdom/england","children":["doe-bank","four-oaks-park","maney"]});
export const childModules = Object.freeze({"doe-bank":"./doe-bank/doe-bank.js","four-oaks-park":"./four-oaks-park/four-oaks-park.js","maney":"./maney/maney.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
