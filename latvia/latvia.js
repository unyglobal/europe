// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"latvia","repository":"europe","path":"latvia","depth":1,"parent":"","children":["cesis-municipality","daugavpils","jekabpils-municipality","jelgava","jurmala","liepaja","marupe","ogre","rezekne","riga","salaspils-municipality","tukums-municipality","valmiera","ventspils"]});
export const childModules = Object.freeze({"cesis-municipality":"./cesis-municipality/cesis-municipality.js","daugavpils":"./daugavpils/daugavpils.js","jekabpils-municipality":"./jekabpils-municipality/jekabpils-municipality.js","jelgava":"./jelgava/jelgava.js","jurmala":"./jurmala/jurmala.js","liepaja":"./liepaja/liepaja.js","marupe":"./marupe/marupe.js","ogre":"./ogre/ogre.js","rezekne":"./rezekne/rezekne.js","riga":"./riga/riga.js","salaspils-municipality":"./salaspils-municipality/salaspils-municipality.js","tukums-municipality":"./tukums-municipality/tukums-municipality.js","valmiera":"./valmiera/valmiera.js","ventspils":"./ventspils/ventspils.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
