// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"netherlands","repository":"europe","path":"netherlands","depth":1,"parent":"","children":["drenthe","flevoland","friesland","gelderland","groningen","limburg","north-brabant","north-holland","overijssel","south-holland","utrecht","zeeland"]});
export const childModules = Object.freeze({"drenthe":"./drenthe/drenthe.js","flevoland":"./flevoland/flevoland.js","friesland":"./friesland/friesland.js","gelderland":"./gelderland/gelderland.js","groningen":"./groningen/groningen.js","limburg":"./limburg/limburg.js","north-brabant":"./north-brabant/north-brabant.js","north-holland":"./north-holland/north-holland.js","overijssel":"./overijssel/overijssel.js","south-holland":"./south-holland/south-holland.js","utrecht":"./utrecht/utrecht.js","zeeland":"./zeeland/zeeland.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
