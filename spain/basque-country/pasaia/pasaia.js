// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pasaia","repository":"europe","path":"spain/basque-country/pasaia","depth":3,"parent":"spain/basque-country","children":["gomiztegi","zamatete"]});
export const childModules = Object.freeze({"gomiztegi":"./gomiztegi/gomiztegi.js","zamatete":"./zamatete/zamatete.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
