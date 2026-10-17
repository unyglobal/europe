// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"glasgow","repository":"europe","path":"united-kingdom/scotland/glasgow","depth":3,"parent":"united-kingdom/scotland","children":["anderston","blythswood-new-town","broomielaw","cowcaddens","garnethill","merchant-city","port-dundas"]});
export const childModules = Object.freeze({"anderston":"./anderston/anderston.js","blythswood-new-town":"./blythswood-new-town/blythswood-new-town.js","broomielaw":"./broomielaw/broomielaw.js","cowcaddens":"./cowcaddens/cowcaddens.js","garnethill":"./garnethill/garnethill.js","merchant-city":"./merchant-city/merchant-city.js","port-dundas":"./port-dundas/port-dundas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
