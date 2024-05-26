/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "ec2de7edffe925b3e6d41d4eeb8ee0cd"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.f2093034.css",
    "revision": "b2c1b09766d3ea0b71cfa8c3afdcb2e9"
  },
  {
    "url": "assets/img/Schema.46a9e59a.png",
    "revision": "46a9e59a13feed862bdcbb267932cecb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.987eab03.js",
    "revision": "960769676b2efa8db56afbfd94c56b21"
  },
  {
    "url": "assets/js/11.2393aa83.js",
    "revision": "117e303ae0c43cbeccebbb2e3e8ade7d"
  },
  {
    "url": "assets/js/12.6beda826.js",
    "revision": "17f513ff64e37b0a320add8bc8a401b3"
  },
  {
    "url": "assets/js/13.6aa80afb.js",
    "revision": "f19235e0c942eb45d6fe2a9b9b1bd735"
  },
  {
    "url": "assets/js/14.36796f7d.js",
    "revision": "50df2bba4e7f9272ff6d717f924b6732"
  },
  {
    "url": "assets/js/15.be5fee15.js",
    "revision": "5e0eec27f980761549d0a9d065fb6c6b"
  },
  {
    "url": "assets/js/16.cf463377.js",
    "revision": "d28f494f87f81690d15b0c502f551e06"
  },
  {
    "url": "assets/js/17.5c9a414b.js",
    "revision": "b8d754100706f7e1142897e7076dc836"
  },
  {
    "url": "assets/js/18.ff2f1e37.js",
    "revision": "bb40adb68d4faf3babd1a1b5d0f252d1"
  },
  {
    "url": "assets/js/19.ffd1bae1.js",
    "revision": "1d9206805f1fa6959be5f925c0c8e462"
  },
  {
    "url": "assets/js/2.12950fed.js",
    "revision": "4b6fe114fa1393010a29fbdaa4cb7ee9"
  },
  {
    "url": "assets/js/20.99e426d5.js",
    "revision": "3c21c8bb38bfd774f1f6198656a6f0af"
  },
  {
    "url": "assets/js/21.a4acd300.js",
    "revision": "7b9d04a9d8decadf2f3b33e902cdf9e6"
  },
  {
    "url": "assets/js/22.b43d8668.js",
    "revision": "b1d782a930571bc0f3a3807db38b436b"
  },
  {
    "url": "assets/js/23.16d2075e.js",
    "revision": "1533811c1f1e9a9d074f2248f897da26"
  },
  {
    "url": "assets/js/24.3bbcbd7a.js",
    "revision": "3dfab7544fbebee840d39b736f4237c6"
  },
  {
    "url": "assets/js/26.cdcf961d.js",
    "revision": "f683ac99beb1badde3e5fb377b65dcde"
  },
  {
    "url": "assets/js/3.1a17d55a.js",
    "revision": "da12692cacd0e29dd4f83a42314ba884"
  },
  {
    "url": "assets/js/4.22be6e49.js",
    "revision": "a8bae6555c7974d40cc0a9dc56fcf745"
  },
  {
    "url": "assets/js/5.5884a570.js",
    "revision": "4ddb90ee53d96f9526c27c44b58f623c"
  },
  {
    "url": "assets/js/6.04503463.js",
    "revision": "9fc1e6f66a79ffd5ee26e937f91216b2"
  },
  {
    "url": "assets/js/7.17e35dd8.js",
    "revision": "0b6a3683bc0b50e2b14e27c5f63cba55"
  },
  {
    "url": "assets/js/8.7be0851e.js",
    "revision": "dd31e52a5cd3dab0e1aff0fed225c178"
  },
  {
    "url": "assets/js/9.30fcfcb7.js",
    "revision": "87f0ec0fd8b57284e02585d24e8d9f23"
  },
  {
    "url": "assets/js/app.9b1c32e6.js",
    "revision": "dfb7896c60a1ab7c6d9be34addf6004d"
  },
  {
    "url": "conclusion/index.html",
    "revision": "b36a6aae868b508d9ca0760b4be11998"
  },
  {
    "url": "design/index.html",
    "revision": "e9e8ad172d5548de0175857ad0cea953"
  },
  {
    "url": "index.html",
    "revision": "9667b034ff5e7f9a2ab1326375243b11"
  },
  {
    "url": "intro/index.html",
    "revision": "6d3d2cf756d18d25c5fada1cd93af977"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "c700da9698918978d651b6870795a1ab"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "c30a84f1836d4f798dcba779375b6168"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "218a2781b96ef7672bea7d74e82e39f2"
  },
  {
    "url": "software/index.html",
    "revision": "576feb58cf3fb3bd70e54a8e39160656"
  },
  {
    "url": "test/index.html",
    "revision": "996bd22410ef677e6e996a129c22e3f4"
  },
  {
    "url": "use cases/index.html",
    "revision": "1c02028ca01677f8042965f943e4e2c8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
