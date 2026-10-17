// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"warmia-masuria","repository":"europe","path":"poland/warmia-masuria","depth":2,"parent":"poland","children":["bartoszyce","braniewo","dzia-dowo","e-k","elblag","gier-oz","gizycko","i-awa","ketrzyn","lidzbark-warminski","mragowo","olecko","olsztyn","ostroda","pisz","szczytno"]});
export const childModules = Object.freeze({"bartoszyce":"./bartoszyce/bartoszyce.js","braniewo":"./braniewo/braniewo.js","dzia-dowo":"./dzia-dowo/dzia-dowo.js","e-k":"./e-k/e-k.js","elblag":"./elblag/elblag.js","gier-oz":"./gier-oz/gier-oz.js","gizycko":"./gizycko/gizycko.js","i-awa":"./i-awa/i-awa.js","ketrzyn":"./ketrzyn/ketrzyn.js","lidzbark-warminski":"./lidzbark-warminski/lidzbark-warminski.js","mragowo":"./mragowo/mragowo.js","olecko":"./olecko/olecko.js","olsztyn":"./olsztyn/olsztyn.js","ostroda":"./ostroda/ostroda.js","pisz":"./pisz/pisz.js","szczytno":"./szczytno/szczytno.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
