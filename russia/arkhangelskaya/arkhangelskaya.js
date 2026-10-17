// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"arkhangelskaya","repository":"europe","path":"russia/arkhangelskaya","depth":2,"parent":"russia","children":["arkhangel-sk","isakogorka","koryazhma","kotlas","mirnyy","novodvinsk","nyandoma","onega","severodvinsk","vel-sk","yagry"]});
export const childModules = Object.freeze({"arkhangel-sk":"./arkhangel-sk/arkhangel-sk.js","isakogorka":"./isakogorka/isakogorka.js","koryazhma":"./koryazhma/koryazhma.js","kotlas":"./kotlas/kotlas.js","mirnyy":"./mirnyy/mirnyy.js","novodvinsk":"./novodvinsk/novodvinsk.js","nyandoma":"./nyandoma/nyandoma.js","onega":"./onega/onega.js","severodvinsk":"./severodvinsk/severodvinsk.js","vel-sk":"./vel-sk/vel-sk.js","yagry":"./yagry/yagry.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
