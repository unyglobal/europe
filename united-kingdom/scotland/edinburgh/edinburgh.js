// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"edinburgh","repository":"europe","path":"united-kingdom/scotland/edinburgh","depth":3,"parent":"united-kingdom/scotland","children":["grassmarket","greenside","new-town","old-town"]});
export const childModules = Object.freeze({"grassmarket":"./grassmarket/grassmarket.js","greenside":"./greenside/greenside.js","new-town":"./new-town/new-town.js","old-town":"./old-town/old-town.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
