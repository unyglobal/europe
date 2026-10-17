// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vaud","repository":"europe","path":"switzerland/vaud","depth":2,"parent":"switzerland","children":["lausanne","montreux","morges","nyon","pully","renens","vevey","yverdon-les-bains"]});
export const childModules = Object.freeze({"lausanne":"./lausanne/lausanne.js","montreux":"./montreux/montreux.js","morges":"./morges/morges.js","nyon":"./nyon/nyon.js","pully":"./pully/pully.js","renens":"./renens/renens.js","vevey":"./vevey/vevey.js","yverdon-les-bains":"./yverdon-les-bains/yverdon-les-bains.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
