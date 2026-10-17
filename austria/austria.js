// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"austria","repository":"europe","path":"austria","depth":1,"parent":"","children":["burgenland","carinthia","lower-austria","salzburg","sankt-peter","sankt-peter-a","styria","tyrol","upper-austria","vienna","vorarlberg"]});
export const childModules = Object.freeze({"burgenland":"./burgenland/burgenland.js","carinthia":"./carinthia/carinthia.js","lower-austria":"./lower-austria/lower-austria.js","salzburg":"./salzburg/salzburg.js","sankt-peter":"./sankt-peter/sankt-peter.js","sankt-peter-a":"./sankt-peter-a/sankt-peter-a.js","styria":"./styria/styria.js","tyrol":"./tyrol/tyrol.js","upper-austria":"./upper-austria/upper-austria.js","vienna":"./vienna/vienna.js","vorarlberg":"./vorarlberg/vorarlberg.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
