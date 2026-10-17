// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"szekszard","repository":"europe","path":"hungary/tolna-county/szekszard","depth":3,"parent":"hungary/tolna-county","children":["aranyto","bartina","csurgo","faluhely","gesztenyes","gubacorr","gulyasvolgy","gyuszuvolgy","hidaspetre","hosszuvolgy","ivanvolgy","jobbparaszta","kendergyar","kisbaranya","kispalank","nagybaranya","porkolabvolgy","rovidvolgy","szaszipuszta"]});
export const childModules = Object.freeze({"aranyto":"./aranyto/aranyto.js","bartina":"./bartina/bartina.js","csurgo":"./csurgo/csurgo.js","faluhely":"./faluhely/faluhely.js","gesztenyes":"./gesztenyes/gesztenyes.js","gubacorr":"./gubacorr/gubacorr.js","gulyasvolgy":"./gulyasvolgy/gulyasvolgy.js","gyuszuvolgy":"./gyuszuvolgy/gyuszuvolgy.js","hidaspetre":"./hidaspetre/hidaspetre.js","hosszuvolgy":"./hosszuvolgy/hosszuvolgy.js","ivanvolgy":"./ivanvolgy/ivanvolgy.js","jobbparaszta":"./jobbparaszta/jobbparaszta.js","kendergyar":"./kendergyar/kendergyar.js","kisbaranya":"./kisbaranya/kisbaranya.js","kispalank":"./kispalank/kispalank.js","nagybaranya":"./nagybaranya/nagybaranya.js","porkolabvolgy":"./porkolabvolgy/porkolabvolgy.js","rovidvolgy":"./rovidvolgy/rovidvolgy.js","szaszipuszta":"./szaszipuszta/szaszipuszta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
