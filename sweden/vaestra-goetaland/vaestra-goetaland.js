// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vaestra-goetaland","repository":"europe","path":"sweden/vaestra-goetaland","depth":2,"parent":"sweden","children":["alingsas","bjorlanda","boras","falkoping","gothenburg","kinna","kungalv","lerum","lidkoping","majorna","mariestad","molndal","molnlycke","partille","skovde","trollhattan","uddevalla","vanersborg","vastra-frolunda"]});
export const childModules = Object.freeze({"alingsas":"./alingsas/alingsas.js","bjorlanda":"./bjorlanda/bjorlanda.js","boras":"./boras/boras.js","falkoping":"./falkoping/falkoping.js","gothenburg":"./gothenburg/gothenburg.js","kinna":"./kinna/kinna.js","kungalv":"./kungalv/kungalv.js","lerum":"./lerum/lerum.js","lidkoping":"./lidkoping/lidkoping.js","majorna":"./majorna/majorna.js","mariestad":"./mariestad/mariestad.js","molndal":"./molndal/molndal.js","molnlycke":"./molnlycke/molnlycke.js","partille":"./partille/partille.js","skovde":"./skovde/skovde.js","trollhattan":"./trollhattan/trollhattan.js","uddevalla":"./uddevalla/uddevalla.js","vanersborg":"./vanersborg/vanersborg.js","vastra-frolunda":"./vastra-frolunda/vastra-frolunda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
