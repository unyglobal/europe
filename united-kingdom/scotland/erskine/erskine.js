// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"erskine","repository":"europe","path":"united-kingdom/scotland/erskine","depth":3,"parent":"united-kingdom/scotland","children":["bourne-court","east-craigend","east-freeland","garnieland","north-barr","park-mains","rashielee","town-centre","west-freeland"]});
export const childModules = Object.freeze({"bourne-court":"./bourne-court/bourne-court.js","east-craigend":"./east-craigend/east-craigend.js","east-freeland":"./east-freeland/east-freeland.js","garnieland":"./garnieland/garnieland.js","north-barr":"./north-barr/north-barr.js","park-mains":"./park-mains/park-mains.js","rashielee":"./rashielee/rashielee.js","town-centre":"./town-centre/town-centre.js","west-freeland":"./west-freeland/west-freeland.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
