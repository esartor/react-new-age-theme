"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/react-new-age-theme/index.html","986df908a8e1e5b14bec64bcebe332ff"],["/react-new-age-theme/static/css/main.a9fef7f1.css","53f5ee957a0b884f6d68944f4f79c5b3"],["/react-new-age-theme/static/js/main.0cd11b4a.js","51f7853bf020dde7bb337518265fda2e"],["/react-new-age-theme/static/media/Simple-Line-Icons.0cb0b9c5.woff2","0cb0b9c589c0624c9c78dd3d83e946f6"],["/react-new-age-theme/static/media/Simple-Line-Icons.2fe2efe6.svg","2fe2efe63441d830b1acd106c1fe8734"],["/react-new-age-theme/static/media/Simple-Line-Icons.78f07e2c.woff","78f07e2c2a535c26ef21d95e41bd7175"],["/react-new-age-theme/static/media/Simple-Line-Icons.d2285965.ttf","d2285965fe34b05465047401b8595dd0"],["/react-new-age-theme/static/media/Simple-Line-Icons.f33df365.eot","f33df365d6d0255b586f2920355e94d7"],["/react-new-age-theme/static/media/app-store-badge.d0558d91.svg","d0558d91063038236b60e3ef71fdc1fd"],["/react-new-age-theme/static/media/bg-cta.36ddbb2d.jpg","36ddbb2de498313fdacd1b2a64eb8363"],["/react-new-age-theme/static/media/catamaran-latin-100.3570195a.woff2","3570195a7b5f619dd9b2419d8fa3f089"],["/react-new-age-theme/static/media/catamaran-latin-100.e82908f5.woff","e82908f57f6d2f23eb9876b2d6868195"],["/react-new-age-theme/static/media/catamaran-latin-200.987ea210.woff2","987ea210308405ac77ba2f36430a70c9"],["/react-new-age-theme/static/media/catamaran-latin-200.bb5993d2.woff","bb5993d2f001b739bb9ab7c3ed9725c3"],["/react-new-age-theme/static/media/catamaran-latin-300.2b8a4bd1.woff2","2b8a4bd13e9d5ba755f010f8732b0bb6"],["/react-new-age-theme/static/media/catamaran-latin-300.c2696c65.woff","c2696c65c33dcf37871b72bad51ee1ce"],["/react-new-age-theme/static/media/catamaran-latin-400.640947b7.woff2","640947b787a38ec35d097129637d9130"],["/react-new-age-theme/static/media/catamaran-latin-400.97e5bc80.woff","97e5bc807a3e915e3fbf40ce5fcb1128"],["/react-new-age-theme/static/media/catamaran-latin-500.412cf386.woff","412cf386e31213e3601cb2132b9c4c2d"],["/react-new-age-theme/static/media/catamaran-latin-500.884483dd.woff2","884483dd213f37ae3b5c98f73dd190a5"],["/react-new-age-theme/static/media/catamaran-latin-600.215c58c6.woff","215c58c6114e0556cb1c332c0fda463a"],["/react-new-age-theme/static/media/catamaran-latin-600.eb6ebda2.woff2","eb6ebda25331e50d3f42c45a41f613bb"],["/react-new-age-theme/static/media/catamaran-latin-700.05f6e51c.woff","05f6e51c518dd3b521b258e5c05d0e72"],["/react-new-age-theme/static/media/catamaran-latin-700.3196f498.woff2","3196f49881b324fa5a5f937875cc380f"],["/react-new-age-theme/static/media/catamaran-latin-800.3b1675e4.woff","3b1675e4ede7e86ec79fa84c1203908e"],["/react-new-age-theme/static/media/catamaran-latin-800.601b1d0f.woff2","601b1d0f1b78fd65c3205b2c004bbe60"],["/react-new-age-theme/static/media/catamaran-latin-900.6bb5f966.woff2","6bb5f96614acb7754020b922e1a63d24"],["/react-new-age-theme/static/media/catamaran-latin-900.79292dba.woff","79292dba48851cc3a212863c860d8f09"],["/react-new-age-theme/static/media/demo-screen-1.82bcf3c8.jpg","82bcf3c843c811de878424e8d8307250"],["/react-new-age-theme/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/react-new-age-theme/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/react-new-age-theme/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/react-new-age-theme/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/react-new-age-theme/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/react-new-age-theme/static/media/google-play-badge.cfea2442.svg","cfea2442b66fe18c84e0f51c29486192"],["/react-new-age-theme/static/media/landscape_black.0949abb9.png","0949abb943e326c1773d259e17015b67"],["/react-new-age-theme/static/media/landscape_black.41a8349b.png","41a8349b61e6f77821b4b1a63f6b0071"],["/react-new-age-theme/static/media/landscape_black.45ad7504.png","45ad75047d76a5237551d17f609e31fb"],["/react-new-age-theme/static/media/landscape_black.46ce328b.png","46ce328b2ee3a816f01222d14b454fcc"],["/react-new-age-theme/static/media/landscape_black.48ce3a87.png","48ce3a87ea715b81eedca6a59bd41464"],["/react-new-age-theme/static/media/landscape_black.5f27ed42.png","5f27ed42da22b304e7b630c21957a73f"],["/react-new-age-theme/static/media/landscape_black.635a1530.png","635a1530ea9dbd560f3ca663f4613880"],["/react-new-age-theme/static/media/landscape_black.7a6400c7.png","7a6400c79c662047bf86b06eb502e49c"],["/react-new-age-theme/static/media/landscape_black.83985117.png","839851178189fb4c8fe07fb0a3059429"],["/react-new-age-theme/static/media/landscape_black.a1c4f06e.png","a1c4f06eadd69a9a12a19c5f363f9f46"],["/react-new-age-theme/static/media/landscape_black.a671a314.png","a671a314ca69f2f5aab45ccee795b169"],["/react-new-age-theme/static/media/landscape_black.b6f5dcd4.png","b6f5dcd4697cb15139e22079d1b393cc"],["/react-new-age-theme/static/media/landscape_black.e3a03082.png","e3a03082518e3e473ce72ae179f05e53"],["/react-new-age-theme/static/media/landscape_gold.4faf446b.png","4faf446b07ccdeb990c0ec75c4f4f3f1"],["/react-new-age-theme/static/media/landscape_gold.673156d2.png","673156d2cbe4c21bd0ae9189b8609838"],["/react-new-age-theme/static/media/landscape_gold.761ea0fe.png","761ea0fe8cf40ea9fe9dcadc3c44caf3"],["/react-new-age-theme/static/media/landscape_gold.86826029.png","868260297b3c41d66af067e2697e1f3d"],["/react-new-age-theme/static/media/landscape_gold.985e4bae.png","985e4baede1c4941d122c7ba73316761"],["/react-new-age-theme/static/media/landscape_gold.c937052c.png","c937052c953350199f8df252b2fad48a"],["/react-new-age-theme/static/media/landscape_gold.e18fa262.png","e18fa262293d0aa91f1429638d6379e1"],["/react-new-age-theme/static/media/landscape_gold.fd031e70.png","fd031e70c935a3286bb1973c0d2e9dd5"],["/react-new-age-theme/static/media/landscape_pink.31d14364.png","31d143640570a7309b3ee09752e18c59"],["/react-new-age-theme/static/media/landscape_pink.8910ac86.png","8910ac86e735a1eeaa71e5112a3eb1e1"],["/react-new-age-theme/static/media/landscape_red.0d08bb8d.png","0d08bb8d7e376c7b8453b55a16f1b07e"],["/react-new-age-theme/static/media/landscape_white.13c9ca2e.png","13c9ca2e62cb3722035c204e49c8c420"],["/react-new-age-theme/static/media/landscape_white.17ae84a2.png","17ae84a2ed5efd577c377fa4504a2b82"],["/react-new-age-theme/static/media/landscape_white.29be8283.png","29be828314ff7acdf1d5018c37470573"],["/react-new-age-theme/static/media/landscape_white.3474b3a3.png","3474b3a3a246211438492f3cba85ad2d"],["/react-new-age-theme/static/media/landscape_white.5a44f79f.png","5a44f79f9886aa401451d2cb1c9271f9"],["/react-new-age-theme/static/media/landscape_white.91d0e1f3.png","91d0e1f3bf7f87a9a9d8cb54fb2ad03b"],["/react-new-age-theme/static/media/landscape_white.a9035d08.png","a9035d0831072fd6fe1471710b07efcd"],["/react-new-age-theme/static/media/landscape_white.b4df8a7a.png","b4df8a7a228f59296f4b86e97314f5f8"],["/react-new-age-theme/static/media/landscape_white.b90b4871.png","b90b487116a43b5681de74e7f091783f"],["/react-new-age-theme/static/media/landscape_white.d4a18b4e.png","d4a18b4eae8b7db9c9a8e4eaf786feb1"],["/react-new-age-theme/static/media/landscape_white.e7dd7a0f.png","e7dd7a0f3e0efc27a270abce4f748ca7"],["/react-new-age-theme/static/media/portrait_black.03f3672f.png","03f3672f7a52a3d0b1a767983808c1bd"],["/react-new-age-theme/static/media/portrait_black.17918d5a.png","17918d5af5b89a836309565772a39327"],["/react-new-age-theme/static/media/portrait_black.4357d54d.png","4357d54d57f53d6fa1e9e4962d5935c9"],["/react-new-age-theme/static/media/portrait_black.538fb2ee.png","538fb2ee035e394b4797d9bc423510f8"],["/react-new-age-theme/static/media/portrait_black.6fbbe354.png","6fbbe354c8f4ac35a6fadc1df195af93"],["/react-new-age-theme/static/media/portrait_black.75f27788.png","75f27788d5d9587025d97de2694e8fa6"],["/react-new-age-theme/static/media/portrait_black.81750ebf.png","81750ebff2148b5c149031d44649dd25"],["/react-new-age-theme/static/media/portrait_black.8a2b0557.png","8a2b0557068a07f2d89844d53a97f123"],["/react-new-age-theme/static/media/portrait_black.98ef85e6.png","98ef85e6e4baa921363528353e3a1355"],["/react-new-age-theme/static/media/portrait_black.9b874916.png","9b87491613522f51389bc635cbfa1dbe"],["/react-new-age-theme/static/media/portrait_black.a8f8b6d1.png","a8f8b6d1e8aac15e6f0937a39432924d"],["/react-new-age-theme/static/media/portrait_black.a976829d.png","a976829dfba4a16ff4e87ad9f3d9be9c"],["/react-new-age-theme/static/media/portrait_black.af24af23.png","af24af23b985ade764d847be7d0a5f37"],["/react-new-age-theme/static/media/portrait_black.b0964ae5.png","b0964ae5c99d11248541c090a51221b1"],["/react-new-age-theme/static/media/portrait_black.bb3fb287.png","bb3fb287de3a63126054280947aa69c2"],["/react-new-age-theme/static/media/portrait_black.bc7fb081.png","bc7fb081052ff9c4912498e613d07589"],["/react-new-age-theme/static/media/portrait_black.be109559.png","be1095597a5115e0d75a0edf5a7ec4dd"],["/react-new-age-theme/static/media/portrait_black.bfb24b3f.png","bfb24b3f76e57805ae9867829424c2f6"],["/react-new-age-theme/static/media/portrait_black.cf031184.png","cf031184db0f78cb92aa1654ca944ea9"],["/react-new-age-theme/static/media/portrait_black.d0729e36.png","d0729e36087a7cae4ee57da02c0a47e5"],["/react-new-age-theme/static/media/portrait_black.de9b0038.png","de9b00384125d328709901ef1c1a9fbb"],["/react-new-age-theme/static/media/portrait_black.e8c7e8c2.png","e8c7e8c25cda1698910726b99ba7e42b"],["/react-new-age-theme/static/media/portrait_black.ed9c43a9.png","ed9c43a96bf0a45f718861687b5595e9"],["/react-new-age-theme/static/media/portrait_black.f3dc2571.png","f3dc25716904dd2a9c10a7e5a69cde98"],["/react-new-age-theme/static/media/portrait_black.ff10a6d8.png","ff10a6d8f48c4de315bc7e7ab7432561"],["/react-new-age-theme/static/media/portrait_gold.066a9c79.png","066a9c796475dd318bf431b596c089b9"],["/react-new-age-theme/static/media/portrait_gold.0cd92d66.png","0cd92d66e383eb3122edee69a7851dbb"],["/react-new-age-theme/static/media/portrait_gold.2f57257f.png","2f57257fcf1b43a9538313f4edf3db5d"],["/react-new-age-theme/static/media/portrait_gold.51981aae.png","51981aaeb63a6d6e50a2f6135f93514a"],["/react-new-age-theme/static/media/portrait_gold.7be25339.png","7be25339cf7f1b0e439885af84c79567"],["/react-new-age-theme/static/media/portrait_gold.875d4f86.png","875d4f862cc96ca7d25d2fc9c97d0978"],["/react-new-age-theme/static/media/portrait_gold.9a3fc5ed.png","9a3fc5ed5f68fed74d0b9e3e1507919e"],["/react-new-age-theme/static/media/portrait_gold.c72ce9c0.png","c72ce9c0897bdd4bfba0cc27f6666a8a"],["/react-new-age-theme/static/media/portrait_gold.ce99cb68.png","ce99cb68dc138505c7e64773da2e8a31"],["/react-new-age-theme/static/media/portrait_gold.f267b265.png","f267b2654a35b173f7c23af0be0ac35f"],["/react-new-age-theme/static/media/portrait_pink.03eb8814.png","03eb8814faf7acc4b1e664862ff1effd"],["/react-new-age-theme/static/media/portrait_pink.d5b44e82.png","d5b44e8294e2da6e4ab59a2bc0706fa2"],["/react-new-age-theme/static/media/portrait_red.7e49c5a3.png","7e49c5a382e9ec72780f26c67a25330d"],["/react-new-age-theme/static/media/portrait_white.281feed0.png","281feed09f9c0e07406b4aa9591d1656"],["/react-new-age-theme/static/media/portrait_white.2ef3b1c6.png","2ef3b1c601042a025920c076bb141059"],["/react-new-age-theme/static/media/portrait_white.37f8df72.png","37f8df723e021a3496e8018b2b8b906c"],["/react-new-age-theme/static/media/portrait_white.49061a15.png","49061a15d4e07dd6359efc71824b99e2"],["/react-new-age-theme/static/media/portrait_white.52305a42.png","52305a427831821d5bf709dd43e63b9e"],["/react-new-age-theme/static/media/portrait_white.56c06e71.png","56c06e71ce6d2eb7fda537930079f168"],["/react-new-age-theme/static/media/portrait_white.5ba90b53.png","5ba90b533d0f3b7be1303939af541732"],["/react-new-age-theme/static/media/portrait_white.60e3de48.png","60e3de48ff333a07c3fbe10b69874464"],["/react-new-age-theme/static/media/portrait_white.71c59843.png","71c59843aba5de4c872dcec639ea3e22"],["/react-new-age-theme/static/media/portrait_white.7e1fe862.png","7e1fe862f16c8d97091e48b48a4f5c57"],["/react-new-age-theme/static/media/portrait_white.9ee46d37.png","9ee46d37a3875131c793404b1e3520d0"],["/react-new-age-theme/static/media/portrait_white.c8eb0ffe.png","c8eb0ffe20a38ae337f007582db4085d"],["/react-new-age-theme/static/media/portrait_white.ca2c718f.png","ca2c718f0630e7c9fb21c5ba1d2aebca"],["/react-new-age-theme/static/media/portrait_white.ebc91a60.png","ebc91a6038392464d034fa5d8dc79ef5"],["/react-new-age-theme/static/media/portrait_white.f578c718.png","f578c71890d7de79eaf7ebd6aaebb768"],["/react-new-age-theme/static/media/portrait_white.f7b169ae.png","f7b169ae25904ce965b49707a4328d48"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/react-new-age-theme/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});