// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"montenegro","repository":"europe","path":"montenegro","depth":1,"parent":"","children":["bar","bijelo-polje","budva","cetinje","herceg-novi","opstina-niksic","pljevlja","podgorica"]});
export const childModules = Object.freeze({"bar":"./bar/bar.js","bijelo-polje":"./bijelo-polje/bijelo-polje.js","budva":"./budva/budva.js","cetinje":"./cetinje/cetinje.js","herceg-novi":"./herceg-novi/herceg-novi.js","opstina-niksic":"./opstina-niksic/opstina-niksic.js","pljevlja":"./pljevlja/pljevlja.js","podgorica":"./podgorica/podgorica.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
