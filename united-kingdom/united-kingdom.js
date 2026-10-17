// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"united-kingdom","repository":"europe","path":"united-kingdom","depth":1,"parent":"","children":["ashford","ashford-a","bangor","bangor-a","england","hale","hale-a","hayes","hayes-a","neston","neston-a","newport","newport-a","northern-ireland","scotland","wales"]});
export const childModules = Object.freeze({"ashford":"./ashford/ashford.js","ashford-a":"./ashford-a/ashford-a.js","bangor":"./bangor/bangor.js","bangor-a":"./bangor-a/bangor-a.js","england":"./england/england.js","hale":"./hale/hale.js","hale-a":"./hale-a/hale-a.js","hayes":"./hayes/hayes.js","hayes-a":"./hayes-a/hayes-a.js","neston":"./neston/neston.js","neston-a":"./neston-a/neston-a.js","newport":"./newport/newport.js","newport-a":"./newport-a/newport-a.js","northern-ireland":"./northern-ireland/northern-ireland.js","scotland":"./scotland/scotland.js","wales":"./wales/wales.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
