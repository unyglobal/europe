// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"balearic-islands","repository":"europe","path":"spain/balearic-islands","depth":2,"parent":"spain","children":["alcudia","calvia","ciutadella","felanitx","inca","llucmajor","manacor","mao","marratxi","palma","pollenca","sant-agusti","sant-antoni-de-portmany","santa-eularia-des-riu","son-rapinya"]});
export const childModules = Object.freeze({"alcudia":"./alcudia/alcudia.js","calvia":"./calvia/calvia.js","ciutadella":"./ciutadella/ciutadella.js","felanitx":"./felanitx/felanitx.js","inca":"./inca/inca.js","llucmajor":"./llucmajor/llucmajor.js","manacor":"./manacor/manacor.js","mao":"./mao/mao.js","marratxi":"./marratxi/marratxi.js","palma":"./palma/palma.js","pollenca":"./pollenca/pollenca.js","sant-agusti":"./sant-agusti/sant-agusti.js","sant-antoni-de-portmany":"./sant-antoni-de-portmany/sant-antoni-de-portmany.js","santa-eularia-des-riu":"./santa-eularia-des-riu/santa-eularia-des-riu.js","son-rapinya":"./son-rapinya/son-rapinya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
