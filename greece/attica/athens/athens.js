// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"athens","repository":"europe","path":"greece/attica/athens","depth":3,"parent":"greece/attica","children":["agios-konstantinos","agios-pavlos","akadimia","exarcheia","ioulianou","kerameikos","koumoundourou","metaxourgio","monastiraki","mouseio","omonoia","politistiko-emporiko-kentro","psyrri","vathi"]});
export const childModules = Object.freeze({"agios-konstantinos":"./agios-konstantinos/agios-konstantinos.js","agios-pavlos":"./agios-pavlos/agios-pavlos.js","akadimia":"./akadimia/akadimia.js","exarcheia":"./exarcheia/exarcheia.js","ioulianou":"./ioulianou/ioulianou.js","kerameikos":"./kerameikos/kerameikos.js","koumoundourou":"./koumoundourou/koumoundourou.js","metaxourgio":"./metaxourgio/metaxourgio.js","monastiraki":"./monastiraki/monastiraki.js","mouseio":"./mouseio/mouseio.js","omonoia":"./omonoia/omonoia.js","politistiko-emporiko-kentro":"./politistiko-emporiko-kentro/politistiko-emporiko-kentro.js","psyrri":"./psyrri/psyrri.js","vathi":"./vathi/vathi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
