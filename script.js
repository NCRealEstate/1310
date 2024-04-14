(function(){
    var script = {
 "start": "this.playAudioList([this.audio_97B8ABA2_D9DD_9501_41D7_2EB760D81D21]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "paddingBottom": 0,
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.Image_B44E6FBD_BAA2_0E15_41E1_F18F1E555CBE",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "id": "rootPlayer",
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": "100%",
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "definitions": [{
 "hfovMax": 130,
 "label": "IMG_20240413_105720_00_merged",
 "id": "panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D7CDDAF8_D9A4_9701_41E6_CEF66AE7B19C",
  "this.overlay_D70A278A_D9A4_BD01_41C6_95ABBEE313C5",
  "this.overlay_D76A440F_D9A4_931F_41EA_A1CBAAEB1D4A"
 ],
 "adjacentPanoramas": [
  {
   "yaw": 20.94,
   "backwardYaw": -165.45,
   "panorama": "this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 167.76,
   "backwardYaw": 90.68,
   "panorama": "this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 91.86,
   "backwardYaw": 45.02,
   "panorama": "this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 91.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C848CE57_DD6F_F3BB_41D4_1E2486A1CDA2",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC",
   "camera": "this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF",
   "camera": "this.panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB",
   "camera": "this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "camera": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E",
   "camera": "this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761",
   "camera": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB",
   "camera": "this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000",
   "camera": "this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425",
   "camera": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A",
   "camera": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F",
   "camera": "this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99",
   "camera": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D277598A_D95F_EB25_41E5_0800136A96D4",
   "camera": "this.panorama_D277598A_D95F_EB25_41E5_0800136A96D4_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E",
   "camera": "this.panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D275C425_D95F_F96F_41DB_79786819224B",
   "camera": "this.panorama_D275C425_D95F_F96F_41DB_79786819224B_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC",
   "camera": "this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627",
   "camera": "this.panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0",
   "camera": "this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477",
   "camera": "this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2448E90_D95F_A925_41E8_B306937D2F35",
   "camera": "this.panorama_D2448E90_D95F_A925_41E8_B306937D2F35_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A",
   "camera": "this.panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5",
   "camera": "this.panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C",
   "camera": "this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC",
   "camera": "this.panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877",
   "camera": "this.panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2449E7A_D95E_69E5_41E7_97426A243776",
   "camera": "this.panorama_D2449E7A_D95E_69E5_41E7_97426A243776_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB",
   "camera": "this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B",
   "camera": "this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25",
   "camera": "this.panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E",
   "camera": "this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED",
   "camera": "this.panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C",
   "camera": "this.panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33",
   "camera": "this.panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED",
   "camera": "this.panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860",
   "camera": "this.panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3",
   "camera": "this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4",
   "camera": "this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2",
   "camera": "this.panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF",
   "camera": "this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84",
   "camera": "this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884",
   "camera": "this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 40, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_camera",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_105352_00_merged",
 "id": "panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D7F290E4_D9A7_B301_41D7_75FF0D79E89D"
 ],
 "adjacentPanoramas": [
  {
   "yaw": 143.5,
   "backwardYaw": -88.44,
   "panorama": "this.panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -57.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEF70A6A_DD6F_F395_41E4_F1E3DF88ED5A",
 "class": "PanoramaCamera"
},
{
 "displayPlaybackBar": true,
 "id": "MainViewerVideoPlayer",
 "viewerArea": "this.MainViewer",
 "class": "VideoPlayer"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -64.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C9D88B50_DD6F_F1B4_4178_AF92B1EE9CB8",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 85.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CB615C79_DD6F_F074_41D0_3244630899A6",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -151.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C9817B78_DD6F_F074_41AF_5630CA7ACCBC",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 27.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEC28A79_DD6F_F077_41CD_E70DA2CAB223",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_103450_00_merged",
 "id": "panorama_D277598A_D95F_EB25_41E5_0800136A96D4",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D657D805_D973_E92F_41C0_3A6BD0763878",
  "this.overlay_D6115758_D973_A725_41E2_2E3BC7716E7C",
  "this.overlay_D6D5F4E2_D973_9AE5_41E7_AEB5F99CA11E",
  "this.overlay_C94DC638_D972_9965_41E0_D698ABED5444",
  "this.overlay_FD829770_D9E7_BD01_41D2_654699B58F88",
  "this.overlay_CC423298_DCF9_C878_41E1_AEF103FB8825"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -62.67,
   "backwardYaw": 19.99,
   "panorama": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_D275C425_D95F_F96F_41DB_79786819224B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -37.98,
   "backwardYaw": -74.27,
   "panorama": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -69.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C9B2DB6B_DD6F_F194_41DA_EC07DE499E5E",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_104727_00_merged",
 "id": "panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D7E97B5C_D9AC_B501_41E4_21E2611AEEDE",
  "this.overlay_D7207717_D9AC_9D0F_41E7_577B241C7E02",
  "this.overlay_D71AA6F3_D9AC_7F07_41DB_BBC92204CDA4",
  "this.overlay_9359013A_DA64_9501_41E1_413334E81E17",
  "this.overlay_901AD77A_DA64_9D01_41D8_909D144D58C4"
 ],
 "adjacentPanoramas": [
  {
   "yaw": 115.47,
   "backwardYaw": 77.7,
   "panorama": "this.panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -158.37,
   "backwardYaw": 83.89,
   "panorama": "this.panorama_D2449E7A_D95E_69E5_41E7_97426A243776",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -53.91,
   "backwardYaw": 143.79,
   "panorama": "this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 75.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CED8BA97_DD6F_F0BB_41D6_605C70E0D29E",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_CCB0F197_DD08_C848_41CF_88F56BB718E1",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_CA2B29C4_DD6F_F09D_41D9_65F5E95E67CB, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_CA2B29C4_DD6F_F09D_41D9_65F5E95E67CB, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_CA2B29C4_DD6F_F09D_41D9_65F5E95E67CB",
 "class": "PlayList"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 170.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C830AE6E_DD6F_F06D_418A_C25D57B06E87",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2749949_D95F_AB27_41E5_D00915CF7477_camera",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_103151_00_merged",
 "id": "panorama_D2713441_D95F_B927_41E1_6B8B0A550425",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D643BF74_D94F_A7ED_419F_7869859FA013",
  "this.overlay_D63A9932_D94E_6B65_41E1_7DB32FC00B7E",
  "this.overlay_D6D50646_D94E_792D_41D9_28EC467B6D37",
  "this.overlay_D69A35D6_D94E_9B2D_41C6_0F131874907B",
  "this.overlay_C91B68D3_D94E_A92B_41E1_0DC9408B8294",
  "this.overlay_D781005E_D94E_99DD_41D0_D21E5C32CA59",
  "this.overlay_D7AA6808_D971_A925_41DF_BF8A37505E59",
  "this.overlay_C68680AE_D9DF_9301_41AC_3E2B30B5606D",
  "this.overlay_CE092FE4_DD08_57C8_41C7_8C3263621DD7",
  "this.overlay_CFFE1BF6_DD18_3FC8_41E9_94CC8785A6D7"
 ],
 "adjacentPanoramas": [
  {
   "yaw": 111.11,
   "backwardYaw": -150.81,
   "panorama": "this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 79.37,
   "backwardYaw": 59.5,
   "panorama": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -48.11,
   "backwardYaw": 162.77,
   "panorama": "this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 81.33,
   "backwardYaw": 167.19,
   "panorama": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -8.19,
   "backwardYaw": 163.56,
   "panorama": "this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 120.86,
   "backwardYaw": -1.86,
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 161.99,
   "backwardYaw": 46.36,
   "panorama": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -94.14,
   "backwardYaw": 90.09,
   "panorama": "this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 25.45,
   "backwardYaw": -152.09,
   "panorama": "this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 14.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEFD4A72_DD6F_F075_41DA_4F9D6B4E8A0A",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 14.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CE957D8A_DD6F_F095_41B0_F5DED8878DF9",
 "class": "PanoramaCamera"
},
{
 "label": "140379-774881529_small",
 "scaleMode": "fit_inside",
 "width": 960,
 "thumbnailUrl": "media/video_CCB0F197_DD08_C848_41CF_88F56BB718E1_t.jpg",
 "loop": false,
 "id": "video_CCB0F197_DD08_C848_41CF_88F56BB718E1",
 "height": 540,
 "class": "Video",
 "video": {
  "width": 960,
  "height": 540,
  "class": "VideoResource",
  "mp4Url": "media/video_CCB0F197_DD08_C848_41CF_88F56BB718E1.mp4"
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 171.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C9DECE1B_DD6F_F3AB_41D1_50C1B1344C1F",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 170.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C9FEDB42_DD6F_F194_41EB_A9BA136F8778",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -89.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CE9ACD92_DD6F_F0B5_41C4_B44BC84D5C18",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_102954_00_merged",
 "id": "panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D67A4AF4_D951_AEED_41E0_825659DD4E20",
  "this.overlay_D6070947_D951_AB2B_41E0_301ABE354E28",
  "this.overlay_D787763F_D94E_795C_41D1_F6347CE78809",
  "this.overlay_D6C826FA_D94E_A6E5_41EA_2D59EAF60750",
  "this.overlay_C005AB93_D9AF_B507_41D2_FEB12D8B104B",
  "this.overlay_91077E97_DA6C_AF0F_41B9_2616010A8C1A",
  "this.overlay_CCCBB3B6_DD08_4848_41E0_2A537118A343",
  "this.overlay_CE846789_DD6D_3094_41E7_5E4FA3E0917C"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 137.99,
   "backwardYaw": -107.88,
   "panorama": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -116.17,
   "backwardYaw": 79.47,
   "panorama": "this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -172.45,
   "backwardYaw": 74.01,
   "panorama": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -152.09,
   "backwardYaw": 25.45,
   "panorama": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_104630_00_merged",
 "id": "panorama_D2449E7A_D95E_69E5_41E7_97426A243776",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D7245DE8_D9AC_AD02_41C7_B85FB2A695B3",
  "this.overlay_D749B9E7_D9AC_950F_41CE_6FF45EC85C10"
 ],
 "adjacentPanoramas": [
  {
   "yaw": 83.89,
   "backwardYaw": -158.37,
   "panorama": "this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 111.63,
   "backwardYaw": -68.8,
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 123.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C96C7AEA_DD6F_F094_41CA_74AE0C6C2F4B",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_camera",
 "class": "PanoramaCamera"
},
{
 "showDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 6.93,
 "rotationY": 0,
 "id": "popup_CCCA8663_DD53_D394_41A5_A0246618F3C8",
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "showEasing": "cubic_in",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_CCCA8663_DD53_D394_41A5_A0246618F3C8_0_2.jpg",
    "width": 1024,
    "height": 478,
    "class": "ImageResourceLevel"
   }
  ]
 },
 "popupDistance": 100,
 "hideDuration": 500,
 "yaw": -122.24,
 "pitch": -0.49,
 "popupMaxHeight": "95%"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -83.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C8254BEC_DD6F_F06C_41E3_BF76B0770FEC",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 18.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEF4CD03_DD6F_F19B_41E8_5F01084071FE",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -89.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C8D9DC53_DD6F_F7B4_41E1_9E8EB8DB7132",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_104515_00_merged",
 "id": "panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D795B981_D9AC_F503_41E9_A8232F68E34E",
  "this.overlay_D72F4B83_D9AC_7506_41B6_B96ED2921098"
 ],
 "adjacentPanoramas": [
  {
   "yaw": 169.76,
   "backwardYaw": 114.88,
   "panorama": "this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -161.03,
   "backwardYaw": -9.35,
   "panorama": "this.panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -100.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C93F9B1D_DD6F_F1AC_41B1_7A4159CB22D4",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_103522_00_merged",
 "id": "panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D6513DF7_D972_EAEB_41B3_C4BDC4FC08BD"
 ],
 "adjacentPanoramas": [
  {
   "yaw": 77.1,
   "backwardYaw": -165.16,
   "panorama": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 87.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEB2FD5A_DD6F_F1B5_41EA_A89165EBC28A",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_102914_00_merged",
 "id": "panorama_D2441443_D95F_992B_41D8_3C1223342761",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D65B94FB_D952_9ADB_41EB_0205D9A243A6",
  "this.overlay_D663F4B7_D952_B96B_41E3_B6EED08594D2",
  "this.overlay_D6022F78_D952_A7E5_41E0_E5F6305AA0F2",
  "this.overlay_D6903940_D952_EB25_41C2_1F60FBF9EB10",
  "this.overlay_C9E6996C_D952_6BFD_41C9_9BCF5BB30E27",
  "this.overlay_D7A6891B_D951_AB5B_41E2_6BC17E48EE4A",
  "this.overlay_D69F1082_D951_9925_41C8_D143118029FD",
  "this.overlay_F94107B3_D9DC_9D07_4174_6CD9E2EEE2F4",
  "this.overlay_D3A81821_DCF8_3848_41E5_84D663271BA4",
  "this.overlay_CE12EBF8_DD0B_DFB8_41C2_69BD086094CF",
  "this.overlay_D2487640_DD55_3395_41E1_04862222CBA9"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 19.99,
   "backwardYaw": -62.67,
   "panorama": "this.panorama_D277598A_D95F_EB25_41E5_0800136A96D4",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_D275C425_D95F_F96F_41DB_79786819224B",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -155.22,
   "backwardYaw": 110.35,
   "panorama": "this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 74.48,
   "backwardYaw": 28.31,
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 121.26,
   "backwardYaw": 105.14,
   "panorama": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 71.95,
   "backwardYaw": -98.96,
   "panorama": "this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 0.97,
   "backwardYaw": 69.73,
   "panorama": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -107.88,
   "backwardYaw": 137.99,
   "panorama": "this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 167.19,
   "backwardYaw": 81.33,
   "panorama": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -154.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C9166B2C_DD6F_F1EC_41D3_51334E0C5DBA",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 27.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C8A44C5A_DD6F_F7B4_41DB_F663D095C594",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -36.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C9CC9B49_DD6F_F194_41A7_B1D60AD37059",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 21.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C969BDA1_DD6F_F097_41E6_1B84AC47EB9F",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 85.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEA04D42_DD6F_F195_41D6_CED6F0025F36",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_102735_00_merged",
 "id": "panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D7985B88_D956_6F25_41CF_7F0AA858E1AF",
  "this.overlay_D64A0F8B_D951_A73B_41DC_62A8B050A941",
  "this.overlay_D663B013_D951_992B_41E4_481907942BA0",
  "this.overlay_D6FABBAC_D951_EF7C_41C0_E94B5DE51B2B",
  "this.overlay_C91D87D1_D951_A727_41E8_54124820CB77",
  "this.overlay_CFA57A32_DD18_5848_41D1_6085ED5026E3",
  "this.overlay_CF8B6C61_DD54_D794_41A6_0356C0630851",
  "this.overlay_CE288898_DD57_30B5_41CF_8F6D5A71B226"
 ],
 "adjacentPanoramas": [
  {
   "yaw": 25.07,
   "backwardYaw": 75.04,
   "panorama": "this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 28.31,
   "backwardYaw": 74.48,
   "panorama": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 4,
   "backwardYaw": 135.14,
   "panorama": "this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 122.55,
   "backwardYaw": 15.43,
   "panorama": "this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -68.8,
   "backwardYaw": 111.63,
   "panorama": "this.panorama_D2449E7A_D95E_69E5_41E7_97426A243776",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -151.24,
   "backwardYaw": 28.42,
   "panorama": "this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -1.86,
   "backwardYaw": 120.86,
   "panorama": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -104.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CB4C9C8F_DD6F_F0AC_41EA_148A96DD8427",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -18.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C860BE40_DD6F_F395_41CD_B43C5785CD7F",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_104337_00_merged",
 "id": "panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D7F748D5_D9AF_9303_41D3_F96D0874DF84",
  "this.overlay_D7371697_D9AF_FF0F_41E6_360EF1287467"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -39.16,
   "backwardYaw": 154.31,
   "panorama": "this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 97.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEAD7D52_DD6F_F1B5_41C2_CB300B62C18A",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 119.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CB6E8C80_DD6F_F094_41EB_A67F6047A3AE",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 72.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C933BB16_DD6F_F1BC_41D2_2727B37038B0",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -134.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C9619D99_DD6F_F0B7_41E7_C1DDAB1A3A63",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -103.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C9226DCF_DD6F_F0AB_41EB_7FAB68C4844B",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 178.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C8FBBC43_DD6F_F794_41C2_6FCFF04068D9",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC",
   "camera": "this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF",
   "camera": "this.panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB",
   "camera": "this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "camera": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E",
   "camera": "this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761",
   "camera": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB",
   "camera": "this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000",
   "camera": "this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425",
   "camera": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A",
   "camera": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F",
   "camera": "this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99",
   "camera": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D277598A_D95F_EB25_41E5_0800136A96D4",
   "camera": "this.panorama_D277598A_D95F_EB25_41E5_0800136A96D4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E",
   "camera": "this.panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D275C425_D95F_F96F_41DB_79786819224B",
   "camera": "this.panorama_D275C425_D95F_F96F_41DB_79786819224B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC",
   "camera": "this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627",
   "camera": "this.panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0",
   "camera": "this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477",
   "camera": "this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2448E90_D95F_A925_41E8_B306937D2F35",
   "camera": "this.panorama_D2448E90_D95F_A925_41E8_B306937D2F35_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A",
   "camera": "this.panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5",
   "camera": "this.panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C",
   "camera": "this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC",
   "camera": "this.panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877",
   "camera": "this.panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2449E7A_D95E_69E5_41E7_97426A243776",
   "camera": "this.panorama_D2449E7A_D95E_69E5_41E7_97426A243776_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB",
   "camera": "this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B",
   "camera": "this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25",
   "camera": "this.panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E",
   "camera": "this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED",
   "camera": "this.panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C",
   "camera": "this.panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33",
   "camera": "this.panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED",
   "camera": "this.panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860",
   "camera": "this.panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3",
   "camera": "this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4",
   "camera": "this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2",
   "camera": "this.panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF",
   "camera": "this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84",
   "camera": "this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 39.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CE8F2D82_DD6F_F095_41E4_CBE8D2B13C82",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -96.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C9590B07_DD6F_F19C_41D8_CACAE3006AE5",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -102.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C94D6AFF_DD6F_F06C_41E9_04831E295B27",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 99.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C80C6E7D_DD6F_F06F_41E4_A4C206FEB2C0",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2448E90_D95F_A925_41E8_B306937D2F35_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 18.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C92F6DD6_DD6F_F0BD_41E9_9134D414B43A",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_105802_00_merged",
 "id": "panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D7DA0EB8_D9A4_6F01_418B_BE44CB9B7C08",
  "this.overlay_D71DEC6C_D9A5_9301_41AE_3CACB52C2BD8"
 ],
 "adjacentPanoramas": [
  {
   "yaw": 90.68,
   "backwardYaw": 167.76,
   "panorama": "this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -104.08,
   "backwardYaw": -125.51,
   "panorama": "this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_104440_00_merged",
 "id": "panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D7EBE7F6_D9AC_7D01_41D2_39F422A690F8",
  "this.overlay_D73A4E12_D9AC_AF01_41DD_38FAC2CD0AE2",
  "this.overlay_D70ADA04_D9AD_B701_41C5_73A874528543"
 ],
 "adjacentPanoramas": [
  {
   "yaw": 114.88,
   "backwardYaw": 169.76,
   "panorama": "this.panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 76.22,
   "backwardYaw": 114.29,
   "panorama": "this.panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -104.96,
   "backwardYaw": 148.22,
   "panorama": "this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -179.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CE983ADA_DD6F_F0B5_41D5_B262D69DC8E6",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -17.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEA5CAA6_DD6F_F09D_41D4_69D2D91DE9E1",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 142.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CB7F2C87_DD6F_F09C_41E1_73B57C3C5BE1",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_104305_00_merged",
 "id": "panorama_D2448E90_D95F_A925_41E8_B306937D2F35",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D7FD4D76_D9AC_AD01_41E3_2FE554E21798",
  "this.overlay_D73B79EE_D9AC_9501_41E0_6CBF92E2DC36",
  "this.overlay_F24ECCB8_D9E4_9301_41EA_94DA5388555B"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -14.08,
   "backwardYaw": -171.37,
   "panorama": "this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -10.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C9449DB8_DD6F_F0F5_41D6_7CA1FDD50F6F",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -100.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C943BAF8_DD6F_F074_41E4_0F651AA5B015",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -68.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CED12D2A_DD6F_F195_41E4_A93BA320B5E5",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 105.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C87AEE50_DD6F_F3B5_41DA_BCC7033F7D10",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -68.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CB0BCCAD_DD6F_F0EC_41D5_91975717B3CC",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_camera",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_103110_00_merged",
 "id": "panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D64FD51E_D94E_9B5D_41E1_F7C14C7B25F9",
  "this.overlay_D62E9350_D94E_9F25_41E5_2FDB4C31578C",
  "this.overlay_D6C593F1_D94E_7EE7_41E4_662283B1403D",
  "this.overlay_D6B54584_D94F_9B2D_41AA_E4C28002A036",
  "this.overlay_C9E9798A_D94F_EB25_41DC_DF812478C79A",
  "this.overlay_C34580D1_D9AB_F303_41E2_B8DCC210075C",
  "this.overlay_C5B58AFD_D9A4_B703_41E4_BB6AAE4BCEEB",
  "this.overlay_CFE79476_DD08_48C8_41E4_488F96CAC310"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 110.35,
   "backwardYaw": -155.22,
   "panorama": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 135.14,
   "backwardYaw": 4,
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 167.99,
   "backwardYaw": 53.38,
   "panorama": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 79.47,
   "backwardYaw": -116.17,
   "panorama": "this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 163.56,
   "backwardYaw": -8.19,
   "panorama": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D277598A_D95F_EB25_41E5_0800136A96D4_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -88.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CED37A90_DD6F_F0B5_41E4_8FDD012F9FCA",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_camera",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_104408_00_merged",
 "id": "panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D794B279_D9AF_B703_41DC_9EA09BCC4236"
 ],
 "adjacentPanoramas": [
  {
   "yaw": -92.57,
   "backwardYaw": 125.11,
   "panorama": "this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -44.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CB2B6C9E_DD6F_F0AC_41C4_0ADD3EA1C9BF",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_105556_00_merged",
 "id": "panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D7F51DEF_D9A7_AD1F_41E6_C8B6A932CB2F",
  "this.overlay_D71E7356_D9A4_7501_41CA_A2BA3B99B99F",
  "this.overlay_D7767F64_D9A4_6D01_41EB_2DB637C28DFB",
  "this.overlay_989C8B4B_D9EC_9506_41D8_67523E91CB46",
  "this.overlay_CCFF467C_DD53_D06C_41DF_120FFFF6F085",
  "this.popup_CCCA8663_DD53_D394_41A5_A0246618F3C8"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -171.37,
   "backwardYaw": 36.58,
   "panorama": "this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 93.92,
   "backwardYaw": 162.97,
   "panorama": "this.panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 162.77,
   "backwardYaw": -48.11,
   "panorama": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -54.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEBAAAC4_DD6F_F09D_41C3_E704DC7EEAFF",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -93.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C965FAE2_DD6F_F094_41C6_2141C7E0E1D0",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -44.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEC46D1B_DD6F_F1AB_41BD_F949DC991544",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 8.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C8902C71_DD6F_F074_41C7_536A3521F603",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_105157_00_merged",
 "id": "panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D7F330D8_D9A4_B301_41CB_C3481DDDA511"
 ],
 "adjacentPanoramas": [
  {
   "yaw": -32.86,
   "backwardYaw": -140.4,
   "panorama": "this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 29.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C8359BF9_DD6F_F077_41DA_AB7A96D735E3",
 "class": "PanoramaCamera"
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_acceleration",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "touchControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "id": "MainViewerPanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -176,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C9F67E04_DD6F_F39D_41E2_04E12C7DEFC2",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2713441_D95F_B927_41E1_6B8B0A550425_camera",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_102548_00_merged",
 "id": "panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D7E3FC3F_D956_A95B_41E6_E8D692A00205",
  "this.overlay_D641B5D1_D956_FB27_41EA_5D37729EF2B4"
 ],
 "adjacentPanoramas": [
  {
   "yaw": 62.35,
   "backwardYaw": -92.67,
   "panorama": "this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -161.91,
   "backwardYaw": -8.86,
   "panorama": "this.panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 81.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C99D2B9B_DD6F_F0B4_419F_743F6404D2DC",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2446447_D95F_992B_41CD_4D904B227F99_camera",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_103417_00_merged",
 "id": "panorama_D2446447_D95F_992B_41CD_4D904B227F99",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D7863C12_D972_A924_41E9_BDC17BCE853A",
  "this.overlay_D62E2B48_D972_AF25_41C5_8E694E16873E",
  "this.overlay_D6169AE1_D972_6EE7_41BC_4CEBCDF72019",
  "this.overlay_D6CB9842_D972_6924_41E4_C607C53C66B6",
  "this.overlay_D69F8569_D973_9BE7_41E9_43B356F8C6BF",
  "this.overlay_C9E6384D_D973_A93F_41D0_06FCD3415B1E",
  "this.overlay_9E37ABD3_D9A5_9507_41CB_9F91F7292BF1",
  "this.overlay_9180916E_D9A7_951E_41DA_ABA076E8E234",
  "this.overlay_931D1E55_DA5B_EF03_41BC_50B163E20E9E"
 ],
 "adjacentPanoramas": [
  {
   "yaw": 122.95,
   "backwardYaw": 138.48,
   "panorama": "this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -74.27,
   "backwardYaw": -37.98,
   "panorama": "this.panorama_D277598A_D95F_EB25_41E5_0800136A96D4",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 69.73,
   "backwardYaw": 0.97,
   "panorama": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -138.41,
   "backwardYaw": 86.45,
   "panorama": "this.panorama_D275C425_D95F_F96F_41DB_79786819224B",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 3.61,
   "backwardYaw": -56.86,
   "panorama": "this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -165.16,
   "backwardYaw": 77.1,
   "panorama": "this.panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 59.5,
   "backwardYaw": 79.37,
   "panorama": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -58.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C9B8BE2A_DD6F_F395_41C4_A72A8D37CE02",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 171.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEB98D62_DD6F_F195_41BA_82737D80321D",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -159.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEE6AA51_DD6F_F3B7_41D6_E1ADCF3A141B",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D275C425_D95F_F96F_41DB_79786819224B_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -97.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEB79ABD_DD6F_F0EF_41E4_0D40EFA0D75A",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -133.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C8C8BC4B_DD6F_F794_41E0_E30B40DC8528",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_camera",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_103230_00_merged",
 "id": "panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D67A10DF_D971_FADB_41E3_44C2E76529A2",
  "this.overlay_D605BDC1_D971_AB27_41E6_178B052D8899",
  "this.overlay_D6EE1B6D_D971_AFFF_41E3_C8C608512DC2",
  "this.overlay_D6AFDA0A_D972_6925_41C0_8F44E954973A",
  "this.overlay_C933F26D_D972_99FF_41E1_4DFC0390945E",
  "this.overlay_F9CF8A01_D9DB_9703_41EB_075F114A2316",
  "this.overlay_CFA52CB6_DD08_784B_41E9_B6D48FF4C09A"
 ],
 "adjacentPanoramas": [
  {
   "yaw": 135.01,
   "backwardYaw": 162.29,
   "panorama": "this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 105.14,
   "backwardYaw": 121.26,
   "panorama": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 53.38,
   "backwardYaw": 167.99,
   "panorama": "this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 74.01,
   "backwardYaw": -172.45,
   "panorama": "this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 46.36,
   "backwardYaw": 161.99,
   "panorama": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -42.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C878CBBA_DD6F_F0F4_41E6_68522CCD8F9C",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_105054_00_merged",
 "id": "panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D7EF886B_D9A4_F307_41C4_4C0F08E59D2F"
 ],
 "adjacentPanoramas": [
  {
   "yaw": -73.12,
   "backwardYaw": -165.84,
   "panorama": "this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -105.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C90A4B24_DD6F_F19C_41E5_0C5EA2AC0055",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_105836_00_merged",
 "id": "panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D7F37C3F_D9A5_B37F_41E9_FAC205C365C1",
  "this.overlay_D7026F2F_D9A5_ED1F_41EA_B864AE1A82DC",
  "this.overlay_9BFAC175_D9EC_9503_41D6_7B5EA288EF43"
 ],
 "adjacentPanoramas": [
  {
   "yaw": 82.71,
   "backwardYaw": -89.03,
   "panorama": "this.panorama_D275C425_D95F_F96F_41DB_79786819224B",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 45.02,
   "backwardYaw": 91.86,
   "panorama": "this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -125.51,
   "backwardYaw": -104.08,
   "panorama": "this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -12.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C81C0C2A_DD6F_F795_41D0_445C322348AF",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -74.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C98EDB89_DD6F_F094_41E4_252277552B47",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -160.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C86C0E48_DD6F_F395_41EB_179437DF6DB5",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_103314_00_merged",
 "id": "panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D645508F_D972_993B_41C5_F18245B8B18F",
  "this.overlay_D3B5C5A3_DCF8_C849_41D6_FC2B7D94C937"
 ],
 "adjacentPanoramas": [
  {
   "yaw": -152.87,
   "backwardYaw": 60.88,
   "panorama": "this.panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 138.48,
   "backwardYaw": 122.95,
   "panorama": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -126.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C9C40E0C_DD6F_F3AD_41DB_2E45FE45177C",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 54.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C883AC6A_DD6F_F794_41E4_4918F6903308",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 75.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C905FDE6_DD6F_F09D_41DE_0F90040D77E3",
 "class": "PanoramaCamera"
},
{
 "audio": {
  "mp3Url": "media/audio_97B8ABA2_D9DD_9501_41D7_2EB760D81D21.mp3",
  "oggUrl": "media/audio_97B8ABA2_D9DD_9501_41D7_2EB760D81D21.ogg",
  "class": "AudioResource"
 },
 "autoplay": true,
 "id": "audio_97B8ABA2_D9DD_9501_41D7_2EB760D81D21",
 "data": {
  "label": "today-is-the-day-mark-july-main-version-18477-02-21"
 },
 "class": "MediaAudio"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 41.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEAE2AB5_DD6F_F0FF_41E7_6FD71C4E1054",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_camera",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_104050_00_merged",
 "id": "panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D7E567C4_D9AC_FD01_41B3_3289B38546D0",
  "this.overlay_D7137BC5_D9AC_9503_41D7_07C03F2F4CF4",
  "this.overlay_D7702493_D9AC_B307_41E9_0F9EBE291DD9",
  "this.overlay_D68B67BC_D9AC_9D02_41EA_B56706116FD7"
 ],
 "adjacentPanoramas": [
  {
   "yaw": 28.42,
   "backwardYaw": -151.24,
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 148.22,
   "backwardYaw": -104.96,
   "panorama": "this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -37.98,
   "backwardYaw": -39.45,
   "panorama": "this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 79.17,
   "backwardYaw": -17.91,
   "panorama": "this.panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 131.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEAB4AAE_DD6F_F0ED_41D4_757DAFFE9328",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_102842_00_merged",
 "id": "panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D78A82F8_D952_FEE5_41D3_2B1112925EA4",
  "this.overlay_D6630607_D952_B92B_41BF_FFE8ACDD740B",
  "this.overlay_D6347564_D952_9BED_41E7_76B02ABBDD1A",
  "this.overlay_D6E8E5D5_D952_7B2F_41E5_AC21C7E9F5DF",
  "this.overlay_D7A0E7F9_D953_E6E7_41DA_DD85D3811992",
  "this.overlay_D79C1932_D953_AB65_41E9_A9827A2E69E4",
  "this.overlay_9EA667E6_D9AC_BD01_41C8_FDA6B207CFA1",
  "this.overlay_95CBF4E9_D9AB_9303_4155_131693CB42B5",
  "this.overlay_92EE501E_DA64_B301_41E3_208B5D73B92D",
  "this.overlay_96EA5B16_DA65_9501_41D4_9EB1A50C1865",
  "this.overlay_CEA315C1_DD19_CBC8_41DD_0FD38931A23C"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_D277598A_D95F_EB25_41E5_0800136A96D4",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -98.96,
   "backwardYaw": 71.95,
   "panorama": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_D275C425_D95F_F96F_41DB_79786819224B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 75.04,
   "backwardYaw": 25.07,
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 162.29,
   "backwardYaw": 135.01,
   "panorama": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -56.86,
   "backwardYaw": 3.61,
   "panorama": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -150.81,
   "backwardYaw": 111.11,
   "panorama": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_104547_00_merged",
 "id": "panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D7C8DB83_D9AD_F507_41E4_E82AFF50F7D4",
  "this.overlay_D735DB2F_D9AD_951F_419A_6A4E0F5375C5"
 ],
 "adjacentPanoramas": [
  {
   "yaw": 114.29,
   "backwardYaw": 76.22,
   "panorama": "this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -9.35,
   "backwardYaw": -161.03,
   "panorama": "this.panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2441443_D95F_992B_41D8_3C1223342761_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -12.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C8B57C62_DD6F_F794_41DA_B8654F8115FE",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -110.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C86A1BA8_DD6F_F094_41E0_92C0F701DF15",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -25.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C9E40B33_DD6F_F1F4_41B0_F67FCFA7E6B6",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_104912_00_merged",
 "id": "panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D73DFF18_D9A5_AD01_41E6_18EA11A7F6FB",
  "this.overlay_D77BF730_D9A5_9D01_41DD_C70BCDBE4625",
  "this.overlay_EEC794E2_D9FB_F301_41DD_810C7E3018F8"
 ],
 "adjacentPanoramas": [
  {
   "yaw": -82.14,
   "backwardYaw": -80.99,
   "panorama": "this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -80.47,
   "backwardYaw": 96.29,
   "panorama": "this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 142.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CE8F5AD3_DD6F_F0BB_41EA_2489F45AEC90",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 162.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C91FDDF5_DD6F_F07F_41E5_99CA5AA2FC44",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -119.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CE82AD73_DD6F_F07B_41DD_32AB39212E47",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_104233_00_merged",
 "id": "panorama_D2749949_D95F_AB27_41E5_D00915CF7477",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D7A182C3_D9AC_9707_41D2_BF5DB8D66F78",
  "this.overlay_D7D0820E_D9AC_B701_41DA_0C0C0440FDAE",
  "this.overlay_D7059272_D9AC_9701_41C0_CA6D80C6B127",
  "this.overlay_D74E2E3F_D9AC_EF7F_41AC_6F74CF32AFF8",
  "this.overlay_D6CE016E_D9AC_9501_41E2_E5376BF39190"
 ],
 "adjacentPanoramas": [
  {
   "yaw": 154.31,
   "backwardYaw": -39.16,
   "panorama": "this.panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 125.11,
   "backwardYaw": -92.57,
   "panorama": "this.panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -60.99,
   "backwardYaw": -9.35,
   "panorama": "this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -171.37,
   "backwardYaw": -14.08,
   "panorama": "this.panorama_D2448E90_D95F_A925_41E8_B306937D2F35",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -17.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C80E6C1E_DD6F_F7AC_41E4_7E0EDCA06FB2",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -17.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C9AC9E22_DD6F_F395_41E2_240C39FE27A9",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_103559_00_merged",
 "id": "panorama_D275C425_D95F_F96F_41DB_79786819224B",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D660D206_D972_B92D_41E4_4CFD8D0736EB",
  "this.overlay_D364651D_DCF8_4878_41BB_DE8A29355436"
 ],
 "adjacentPanoramas": [
  {
   "yaw": 86.45,
   "backwardYaw": -138.41,
   "panorama": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -89.03,
   "backwardYaw": 82.71,
   "panorama": "this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 117.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C9A68B58_DD6F_F1B4_41DA_B6B589B66ED7",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -154.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEFE7D13_DD6F_F1BB_41D6_F260178FD28C",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 87.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C8221E67_DD6F_F39B_41DB_3BEFBD3A57D1",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -105.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CB5D1C96_DD6F_F0BC_41D1_D5FEB32A783D",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 111.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C9715DA9_DD6F_F097_41EA_70424145D765",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -100.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEBFED6A_DD6F_F195_41DB_58EE5C3D3832",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 90.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CECF9A88_DD6F_F095_41DF_9966C7BE6914",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_camera",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_102513_00_merged",
 "id": "panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D6668017_D956_992B_41A1_DF3FFFDCF50C",
  "this.overlay_D6F1AC0F_D956_A93B_41E0_64849DD7D4E1"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -8.86,
   "backwardYaw": -161.91,
   "panorama": "this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_105518_00_merged",
 "id": "panorama_D270695C_D95E_EBDD_41E6_6F31051946D3",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D7CC27B9_D9A7_FD03_41E8_10AADDC84561",
  "this.overlay_D71AB6F6_D9A7_9F01_41D5_29CA8A045D1F"
 ],
 "adjacentPanoramas": [
  {
   "yaw": 36.58,
   "backwardYaw": -171.37,
   "panorama": "this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 90.09,
   "backwardYaw": -94.14,
   "panorama": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -120.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C800FC0C_DD6F_F7AC_41DB_81761B4CA608",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_102434_00_merged",
 "id": "panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D683BA7A_D957_A9E5_41CB_54043F41C19D",
  "this.overlay_D7E0A16E_D957_FBFD_41C5_506B1B599A70",
  "this.overlay_D63E8956_D957_AB2D_41CA_B191E2115301",
  "this.overlay_D26AE543_DD09_C8C8_4167_43EA93E0D36A"
 ],
 "adjacentPanoramas": [
  {
   "yaw": -165.45,
   "backwardYaw": 20.94,
   "panorama": "this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -92.67,
   "backwardYaw": 62.35,
   "panorama": "this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -68.56,
   "backwardYaw": 62.35,
   "panorama": "this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 15.43,
   "backwardYaw": 122.55,
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -176.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CECD8D22_DD6F_F195_41D6_492DF65A43DE",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 8.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C97AFDB0_DD6F_F0F5_41D0_05544DC2565F",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_104126_00_merged",
 "id": "panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D7F1E22E_D9AD_9701_41CB_0B6E77C54741"
 ],
 "adjacentPanoramas": [
  {
   "yaw": -17.91,
   "backwardYaw": 79.17,
   "panorama": "this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -16.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C8ED0C3C_DD6F_F7EC_41E9_161094777640",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_105021_00_merged",
 "id": "panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D72FB31D_D9A4_B502_41DD_F95CC9D963E7"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -12.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C986AE31_DD6F_F3F7_41C2_6B4138297E74",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -117.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEF07A62_DD6F_F395_41E4_80BEBE5F3A7C",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 147.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEDA3D3A_DD6F_F1F5_41DF_D9FEABADBEEC",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 126.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C81D7E85_DD6F_F09F_41EB_6047C4F9874E",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -36.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C925FB0E_DD6F_F1AC_41D9_A101EA4113C7",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 99.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C8543BDA_DD6F_F0B4_41D0_559C7F585D2F",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -65.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C9F2CB3A_DD6F_F1F4_41E2_A5982688212E",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_104946_00_merged",
 "id": "panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D7C790D0_D9A5_B301_41E5_6CDC8471F7A8",
  "this.overlay_D7064A6F_D9A5_B71F_41E0_3F3BD68A4C88",
  "this.overlay_D76CD573_D9A5_9D07_41E3_9ABF5406F7B7",
  "this.overlay_D7535325_D9A4_7503_41E5_690714D6AE13",
  "this.overlay_D6935DE8_D9A4_6D01_41E3_4C1058EC9A36",
  "this.overlay_E0EDE0BC_D9E7_9301_41E5_DC6B0F61BECF"
 ],
 "adjacentPanoramas": [
  {
   "yaw": -140.4,
   "backwardYaw": -32.86,
   "panorama": "this.panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -80.07,
   "backwardYaw": -94.63,
   "panorama": "this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -165.84,
   "backwardYaw": -73.12,
   "panorama": "this.panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -80.99,
   "backwardYaw": -82.14,
   "panorama": "this.panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 24.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C9EA7DFD_DD6F_F06F_41D7_B25F3489C96E",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -59.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEF0BCFB_DD6F_F06B_41C9_BF44C1070DD0",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 106.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEA72D4A_DD6F_F195_41DF_1B79C3A72A94",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 63.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C9D05E13_DD6F_F3BB_41DB_97559B7F99F5",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -164.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CB3BECA5_DD6F_F09C_41DC_4A0222AD7B44",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -65.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C94E3DBF_DD6F_F0EB_41E1_70F257057895",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_105307_00_merged",
 "id": "panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D7FC3418_D9A4_9301_41E9_4520FC82E8DE",
  "this.overlay_D70EEE5F_D9A4_6F3E_41CB_780294E06498"
 ],
 "adjacentPanoramas": [
  {
   "yaw": -88.44,
   "backwardYaw": 143.5,
   "panorama": "this.panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 77.7,
   "backwardYaw": 115.47,
   "panorama": "this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -86.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEC64A81_DD6F_F097_41E3_4342BA50FF7D",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 165.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C801AE76_DD6F_F07D_41DD_C58482B457D2",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 7.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C992DE39_DD6F_F3F7_41E1_572748896B09",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -117.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEED9A5A_DD6F_F3B5_41D7_CCEC2F36736B",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -143.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEDF8A9F_DD6F_F0AB_41B3_F3944EFA74A9",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_104836_00_merged",
 "id": "panorama_D2719E7B_D95E_69DB_41DA_B678F555831B",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D781FBA4_D9AB_9501_41E8_65D5A2FAA42E",
  "this.overlay_D70FD8CA_D9A4_9301_41C7_6AE0F427CBA8",
  "this.overlay_D6AC0B36_D9A4_9501_41E7_5010B104B5AC",
  "this.overlay_D69733B8_D9A4_F501_41D6_2BCCD46635E0",
  "this.overlay_D64CCE33_D9A4_AF07_41D4_4902293988A0"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -94.63,
   "backwardYaw": -80.07,
   "panorama": "this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 143.79,
   "backwardYaw": -53.91,
   "panorama": "this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 96.29,
   "backwardYaw": -80.47,
   "panorama": "this.panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 99.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C8ED8E8C_DD6F_F0AD_41DC_4466E3424AF3",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -108.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEFAED0B_DD6F_F1AB_41C1_7184B59FC1CE",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -102.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C9792AF1_DD6F_F074_41AD_F8762399314D",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_104159_00_merged",
 "id": "panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D7BD4D84_D9AD_ED01_41D4_9A00EE0F90FE",
  "this.overlay_F1598A38_D9EF_F701_41EA_5B8BD5EC1788"
 ],
 "adjacentPanoramas": [
  {
   "yaw": -9.35,
   "backwardYaw": -60.99,
   "panorama": "this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -39.45,
   "backwardYaw": -37.98,
   "panorama": "this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -31.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C95B5DC7_DD6F_F09B_41EA_87C1A998D129",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -151.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEEA5CF2_DD6F_F075_41DE_585F6A80C153",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_camera",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240413_105634_00_merged",
 "id": "panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D72C6C24_D9A4_B301_4192_8AFC474069BF",
  "this.overlay_D76B0E6C_D9A4_EF01_41BC_FC755ECE9235"
 ],
 "adjacentPanoramas": [
  {
   "yaw": 60.88,
   "backwardYaw": -152.87,
   "panorama": "this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 162.97,
   "backwardYaw": 93.92,
   "panorama": "this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "levels": [
  {
   "url": "media/popup_CCCA8663_DD53_D394_41A5_A0246618F3C8_0_0.jpg",
   "width": 4000,
   "height": 1868,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_CCCA8663_DD53_D394_41A5_A0246618F3C8_0_1.jpg",
   "width": 2048,
   "height": 956,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_CCCA8663_DD53_D394_41A5_A0246618F3C8_0_2.jpg",
   "width": 1024,
   "height": 478,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_CCCA8663_DD53_D394_41A5_A0246618F3C8_0_3.jpg",
   "width": 512,
   "height": 239,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_CCCA9663_DD53_D394_41EA_45EA13B9B60D",
 "class": "ImageResource"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -57.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CE882D7A_DD6F_F075_41E6_6DACC734915D",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -98.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C849BBC7_DD6F_F09C_41D8_709AE226BF00",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2449E7A_D95E_69E5_41E7_97426A243776_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 140.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C913BDEE_DD6F_F06D_41C1_6B5CD8995EF2",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 140.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C8541E5F_DD6F_F3AB_41CF_7463D041ECC8",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 14.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CED69D32_DD6F_F1F5_41E6_B8B441E89CBD",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 28.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C939DDDE_DD6F_F0AD_41C8_3CAE0C7F5A69",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -41.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CE848ACC_DD6F_F0AD_41D7_B53D813AD286",
 "class": "PanoramaCamera"
},
{
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "id": "MainViewer",
 "left": 0,
 "toolTipFontStyle": "normal",
 "width": "100%",
 "toolTipPaddingTop": 7,
 "transitionMode": "blending",
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "vrPointerSelectionTime": 2000,
 "firstTransitionDuration": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "toolTipBackgroundColor": "#000000",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarOpacity": 1,
 "toolTipShadowOpacity": 0,
 "height": "100%",
 "class": "ViewerArea",
 "borderSize": 0,
 "progressHeight": 6,
 "toolTipFontColor": "#FFFFFF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressBottom": 55,
 "toolTipOpacity": 0.5,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipPaddingLeft": 10,
 "progressLeft": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "playbackBarHeight": 10,
 "progressBorderRadius": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipFontSize": 13,
 "toolTipBorderColor": "#767676",
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderRadius": 3,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBarBorderSize": 6,
 "playbackBarHeadShadowColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "minHeight": 50,
 "top": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "toolTipFontFamily": "Georgia",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "shadow": false,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "minWidth": 100,
 "toolTipPaddingRight": 10,
 "borderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderSize": 1,
 "toolTipPaddingBottom": 7,
 "progressRight": 0,
 "progressBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBottom": 5,
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": true,
 "playbackBarBorderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeadBorderColor": "#000000",
 "progressOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadBorderSize": 0,
 "toolTipShadowColor": "#333333"
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "height": 641,
 "class": "Container",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "propagateClick": true,
 "data": {
  "name": "--SETTINGS"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "bottom": 0,
 "height": 118,
 "class": "Container",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0.64,
 "overflow": "visible",
 "propagateClick": true,
 "data": {
  "name": "--MENU"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "creationPolicy": "inAdvance",
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "overflow": "scroll",
 "propagateClick": true,
 "data": {
  "name": "--INFO photo"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "creationPolicy": "inAdvance",
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "overflow": "scroll",
 "propagateClick": true,
 "data": {
  "name": "--INFO photoalbum"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "creationPolicy": "inAdvance",
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "overflow": "scroll",
 "propagateClick": true,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "overflow": "scroll",
 "propagateClick": true,
 "data": {
  "name": "--LOCATION"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "creationPolicy": "inAdvance",
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "overflow": "scroll",
 "propagateClick": true,
 "data": {
  "name": "--FLOORPLAN"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "creationPolicy": "inAdvance",
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "overflow": "scroll",
 "propagateClick": true,
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "creationPolicy": "inAdvance",
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "overflow": "scroll",
 "propagateClick": true,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "creationPolicy": "inAdvance",
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "overflow": "scroll",
 "propagateClick": true,
 "data": {
  "name": "--REALTOR"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 10
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "maxWidth": 1258,
 "id": "Image_B44E6FBD_BAA2_0E15_41E1_F18F1E555CBE",
 "left": "0%",
 "maxHeight": 953,
 "verticalAlign": "middle",
 "width": "5.398%",
 "url": "skin/Image_B44E6FBD_BAA2_0E15_41E1_F18F1E555CBE.png",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "shadow": false,
 "height": "7.606%",
 "class": "Image",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "click": "this.openLink('http://NicholasC.JohnLScott.com', '_blank')",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image4523"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "visible": false
},
{
 "paddingBottom": 0,
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundColorDirection": "vertical",
 "right": 0,
 "minHeight": 0,
 "paddingLeft": 0,
 "top": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "class": "UIComponent",
 "shadow": false,
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 0,
 "borderRadius": 0,
 "backgroundOpacity": 0.55,
 "propagateClick": false,
 "data": {
  "name": "UIComponent8858"
 },
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "visible": false
},
{
 "paddingBottom": 0,
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundColorDirection": "vertical",
 "right": 0,
 "minHeight": 0,
 "paddingLeft": 0,
 "top": 0,
 "bottom": 0,
 "backgroundColor": [],
 "class": "ZoomImage",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 0,
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "propagateClick": false,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage8859"
 },
 "paddingRight": 0,
 "backgroundColorRatios": [],
 "visible": false
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 5,
 "iconWidth": 20,
 "id": "closeButtonPopupPanorama",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "fontFamily": "Arial",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "right": 10,
 "iconHeight": 20,
 "iconColor": "#000000",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "shadowBlurRadius": 6,
 "minHeight": 0,
 "paddingLeft": 5,
 "top": 10,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "class": "CloseButton",
 "shadow": false,
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "borderSize": 0,
 "pressedIconColor": "#888888",
 "paddingTop": 5,
 "minWidth": 0,
 "mode": "push",
 "layout": "horizontal",
 "rollOverIconColor": "#666666",
 "borderRadius": 0,
 "label": "",
 "fontSize": "1.29vmin",
 "backgroundOpacity": 0.3,
 "iconLineWidth": 5,
 "propagateClick": false,
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "paddingRight": 5,
 "fontWeight": "normal",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "visible": false,
 "data": {
  "name": "CloseButton8860"
 }
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "maxHeight": 58,
 "maxWidth": 58,
 "verticalAlign": "middle",
 "width": 58,
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "IconButton",
 "shadow": false,
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "toggle",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton MUTE"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png"
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "maxHeight": 58,
 "maxWidth": 58,
 "verticalAlign": "middle",
 "width": 58,
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "IconButton",
 "shadow": false,
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "toggle",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 14.86,
   "yaw": 20.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -5.99,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC, this.camera_CE957D8A_DD6F_F095_41B0_F5DED8878DF9); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B8AFA5_DD08_3848_41C6_A20CF4670C7A",
   "yaw": 20.94,
   "pitch": -5.99,
   "distance": 100,
   "hfov": 14.86,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7CDDAF8_D9A4_9701_41E6_CEF66AE7B19C",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 13.79,
   "yaw": 167.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -9.34,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84, this.camera_CE9ACD92_DD6F_F0B5_41C4_B44BC84D5C18); this.mainPlayList.set('selectedIndex', 39)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B87FA5_DD08_3848_41CF_E7A87638452A",
   "yaw": 167.76,
   "pitch": -9.34,
   "distance": 100,
   "hfov": 13.79,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D70A278A_D9A4_BD01_41C6_95ABBEE313C5",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 17.29,
   "yaw": 91.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0_HS_2_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -12.39,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884, this.camera_C9619D99_DD6F_F0B7_41E7_C1DDAB1A3A63); this.mainPlayList.set('selectedIndex', 40)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B85FA5_DD08_3848_41C7_C8704F5E1F9A",
   "yaw": 91.86,
   "pitch": -12.39,
   "distance": 100,
   "hfov": 17.29,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D76A440F_D9A4_931F_41EA_A1CBAAEB1D4A",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 21.14,
   "yaw": 143.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_1_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -5.8,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED, this.camera_C848CE57_DD6F_F3BB_41D4_1E2486A1CDA2); this.mainPlayList.set('selectedIndex', 33)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88F7758E_D9E4_FD01_41E3_BAE24C956C37",
   "yaw": 143.5,
   "pitch": -5.8,
   "distance": 100,
   "hfov": 21.14,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7F290E4_D9A7_B301_41D7_75FF0D79E89D",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 18.89,
   "yaw": -14.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 0.01,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B2AF9A_DD08_3878_41DF_430F55155118",
   "yaw": -14.96,
   "pitch": 0.01,
   "distance": 100,
   "hfov": 18.89,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D657D805_D973_E92F_41C0_3A6BD0763878",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 15.46,
   "yaw": -62.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_1_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -16.52,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_C86C0E48_DD6F_F395_41EB_179437DF6DB5); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88C8857C_D9E4_FD01_41DB_5F4625AA9E32",
   "yaw": -62.67,
   "pitch": -16.52,
   "distance": 100,
   "hfov": 15.46,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D6115758_D973_A725_41E2_2E3BC7716E7C",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 19.39,
   "yaw": -37.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_1_HS_2_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -24.09,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2446447_D95F_992B_41CD_4D904B227F99, this.camera_C87AEE50_DD6F_F3B5_41DA_BCC7033F7D10); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88C8257C_D9E4_FD01_41DA_632EC5D3732E",
   "yaw": -37.98,
   "pitch": -24.09,
   "distance": 100,
   "hfov": 19.39,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D6D5F4E2_D973_9AE5_41E7_AEB5F99CA11E",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 13.76,
   "yaw": -114.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_1_HS_3_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -0.79,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88C8657C_D9E4_FD01_41DC_972AEFD19B09",
   "yaw": -114.31,
   "pitch": -0.79,
   "distance": 100,
   "hfov": 13.76,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C94DC638_D972_9965_41E0_D698ABED5444",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 17.99,
   "yaw": 8.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0_HS_4_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -17.7,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B24F9B_DD08_3878_41E4_51C35086B945",
   "yaw": 8.06,
   "pitch": -17.7,
   "distance": 100,
   "hfov": 17.99,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FD829770_D9E7_BD01_41D2_654699B58F88",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 16.3,
   "yaw": -43.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0_HS_5_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -2.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B22F9B_DD08_3878_41BC_D11CEE4A61A5",
   "yaw": -43.19,
   "pitch": -2.55,
   "distance": 100,
   "hfov": 16.3,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CC423298_DCF9_C878_41E1_AEF103FB8825",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 21.21,
   "yaw": -158.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 3.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2449E7A_D95E_69E5_41E7_97426A243776, this.camera_C9590B07_DD6F_F19C_41D8_CACAE3006AE5); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8D7407FD_DA6C_BD03_41D6_6A9A48FD3B04",
   "yaw": -158.37,
   "pitch": 3.35,
   "distance": 100,
   "hfov": 21.21,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7E97B5C_D9AC_B501_41E4_21E2611AEEDE",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 16.27,
   "yaw": -53.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -40.03,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B, this.camera_C925FB0E_DD6F_F1AC_41D9_A101EA4113C7); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8D7587FD_DA6C_BD03_41D9_32A0B3227006",
   "yaw": -53.91,
   "pitch": -40.03,
   "distance": 100,
   "hfov": 16.27,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7207717_D9AC_9D0F_41E7_577B241C7E02",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 18.45,
   "yaw": 115.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_1_HS_2_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -29.7,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED, this.camera_C94D6AFF_DD6F_F06C_41E9_04831E295B27); this.mainPlayList.set('selectedIndex', 33)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88FE7586_D9E4_FD01_41E4_CA48AF6F7FC6",
   "yaw": 115.47,
   "pitch": -29.7,
   "distance": 100,
   "hfov": 18.45,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D71AA6F3_D9AC_7F07_41DB_BBC92204CDA4",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 16.92,
   "yaw": -55.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0_HS_3_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -1.47,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8D7547FD_DA6C_BD03_41E0_B196685C698C",
   "yaw": -55.48,
   "pitch": -1.47,
   "distance": 100,
   "hfov": 16.92,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_9359013A_DA64_9501_41E1_413334E81E17",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 17.32,
   "yaw": 115.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0_HS_4_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -8.26,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 34)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8D8AD7FD_DA6C_BD03_41E9_7C3CAEE0807B",
   "yaw": 115.07,
   "pitch": -8.26,
   "distance": 100,
   "hfov": 17.32,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_901AD77A_DA64_9D01_41D8_909D144D58C4",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 18.26,
   "yaw": -8.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -14.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000, this.camera_C8ED0C3C_DD6F_F7EC_41E9_161094777640); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_CB3FBBF6_DD18_3FC8_41E4_2C74F45E0213",
   "yaw": -8.19,
   "pitch": -14.75,
   "distance": 100,
   "hfov": 18.26,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D643BF74_D94F_A7ED_419F_7869859FA013",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 16.87,
   "yaw": 25.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -9.74,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB, this.camera_C8A44C5A_DD6F_F7B4_41DB_F663D095C594); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_CB3C7BF6_DD18_3FC8_41E2_4BEC1B545780",
   "yaw": 25.45,
   "pitch": -9.74,
   "distance": 100,
   "hfov": 16.87,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D63A9932_D94E_6B65_41E1_7DB32FC00B7E",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 15.53,
   "yaw": 81.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_2_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -18.09,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_C81C0C2A_DD6F_F795_41D0_445C322348AF); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_CB3C0BF6_DD18_3FC8_41CB_35FA86767EBA",
   "yaw": 81.33,
   "pitch": -18.09,
   "distance": 100,
   "hfov": 15.53,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D6D50646_D94E_792D_41D9_28EC467B6D37",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 16.7,
   "yaw": 161.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_3_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -15.34,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A, this.camera_C8C8BC4B_DD6F_F794_41E0_E30B40DC8528); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_CB3CBBF6_DD18_3FC8_41DC_340065152334",
   "yaw": 161.99,
   "pitch": -15.34,
   "distance": 100,
   "hfov": 16.7,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D69A35D6_D94E_9B2D_41C6_0F131874907B",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 17.73,
   "yaw": -48.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_4_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -11.7,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4, this.camera_C80E6C1E_DD6F_F7AC_41E4_7E0EDCA06FB2); this.mainPlayList.set('selectedIndex', 36)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_CB3D5BF6_DD18_3FC8_41E9_CFF7FC4F4E22",
   "yaw": -48.11,
   "pitch": -11.7,
   "distance": 100,
   "hfov": 17.73,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C91B68D3_D94E_A92B_41E1_0DC9408B8294",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 13.96,
   "yaw": 120.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_5_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -2.46,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7, this.camera_C8FBBC43_DD6F_F794_41C2_6FCFF04068D9); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_CB3DABF6_DD18_3FC8_419A_30F4A9964CDD",
   "yaw": 120.86,
   "pitch": -2.46,
   "distance": 100,
   "hfov": 13.96,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D781005E_D94E_99DD_41D0_D21E5C32CA59",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 16.85,
   "yaw": -94.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_6_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -24.29,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3, this.camera_C8D9DC53_DD6F_F7B4_41E1_9E8EB8DB7132); this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_CB3A7BF6_DD18_3FC8_41E8_3BC949C24A5F",
   "yaw": -94.14,
   "pitch": -24.29,
   "distance": 100,
   "hfov": 16.85,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7AA6808_D971_A925_41DF_BF8A37505E59",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 14.98,
   "yaw": 111.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_1_HS_7_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -17.9,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E, this.camera_C8359BF9_DD6F_F077_41DA_AB7A96D735E3); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88CF8575_D9E4_FD03_41D6_AA03DE7F8CF2",
   "yaw": 111.11,
   "pitch": -17.9,
   "distance": 100,
   "hfov": 14.98,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C68680AE_D9DF_9301_41AC_3E2B30B5606D",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotationX": 7.18,
 "class": "VideoPanoramaOverlay",
 "autoplay": true,
 "id": "overlay_CE092FE4_DD08_57C8_41C7_8C3263621DD7",
 "roll": -0.57,
 "loop": true,
 "vfov": 4.1,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_CE092FE4_DD08_57C8_41C7_8C3263621DD7_t.jpg",
    "width": 960,
    "height": 540,
    "class": "ImageResourceLevel"
   }
  ]
 },
 "pitch": -4.05,
 "useHandCursor": true,
 "videoVisibleOnStop": false,
 "rotationY": 15.97,
 "yaw": 28.37,
 "video": {
  "width": 960,
  "height": 540,
  "class": "VideoResource",
  "mp4Url": "media/video_CCB0F197_DD08_C848_41CF_88F56BB718E1.mp4"
 },
 "enabledInCardboard": true,
 "blending": 0,
 "distance": 50,
 "hfov": 8.78,
 "data": {
  "label": "Video"
 }
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 13.78,
   "yaw": 79.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_8_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -9.63,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2446447_D95F_992B_41CD_4D904B227F99, this.camera_C800FC0C_DD6F_F7AC_41DB_81761B4CA608); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_CB3A9BF6_DD18_3FC8_41EA_29EAE51E0BD2",
   "yaw": 79.37,
   "pitch": -9.63,
   "distance": 100,
   "hfov": 13.78,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CFFE1BF6_DD18_3FC8_41E9_94CC8785A6D7",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 18.67,
   "yaw": -116.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -28.52,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000, this.camera_C93F9B1D_DD6F_F1AC_41B1_7A4159CB22D4); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8D62E7DD_DA6C_BD03_41E0_8B39DD9F8850",
   "yaw": -116.17,
   "pitch": -28.52,
   "distance": 100,
   "hfov": 18.67,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D67A4AF4_D951_AEED_41E0_825659DD4E20",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 12.18,
   "yaw": 153.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_1_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -1.67,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88D2E56E_D9E4_FD01_41E6_1FA2DC2CB285",
   "yaw": 153.53,
   "pitch": -1.67,
   "distance": 100,
   "hfov": 12.18,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D6070947_D951_AB2B_41E0_301ABE354E28",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 12.09,
   "yaw": 137.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0_HS_2_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -19.08,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_C933BB16_DD6F_F1BC_41D2_2727B37038B0); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_CE33E398_DD6C_D0B4_41EA_98F5A522372C",
   "yaw": 137.99,
   "pitch": -19.08,
   "distance": 100,
   "hfov": 12.09,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D787763F_D94E_795C_41D1_F6347CE78809",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 15.71,
   "yaw": -152.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0_HS_3_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -24.88,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_C9166B2C_DD6F_F1EC_41D3_51334E0C5DBA); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8D63C7DD_DA6C_BD03_41D8_F8239B99E580",
   "yaw": -152.09,
   "pitch": -24.88,
   "distance": 100,
   "hfov": 15.71,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D6C826FA_D94E_A6E5_41EA_2D59EAF60750",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 12.41,
   "yaw": 124.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0_HS_4_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 0.4,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_CE325398_DD6C_D0B4_41E2_16051BD5798E",
   "yaw": 124.22,
   "pitch": 0.4,
   "distance": 100,
   "hfov": 12.41,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C005AB93_D9AF_B507_41D2_FEB12D8B104B",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 17.23,
   "yaw": -172.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0_HS_5_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -6,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A, this.camera_C90A4B24_DD6F_F19C_41E5_0C5EA2AC0055); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8D6367DD_DA6C_BD03_41E7_2C681BF39EF9",
   "yaw": -172.45,
   "pitch": -6,
   "distance": 100,
   "hfov": 17.23,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_91077E97_DA6C_AF0F_41B9_2616010A8C1A",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotationX": 32.63,
 "class": "VideoPanoramaOverlay",
 "autoplay": true,
 "id": "overlay_CCCBB3B6_DD08_4848_41E0_2A537118A343",
 "roll": 10.36,
 "loop": true,
 "vfov": 18.25,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_CCCBB3B6_DD08_4848_41E0_2A537118A343_t.jpg",
    "width": 960,
    "height": 540,
    "class": "ImageResourceLevel"
   }
  ]
 },
 "pitch": -27.67,
 "useHandCursor": true,
 "videoVisibleOnStop": false,
 "rotationY": 15.6,
 "yaw": 46.09,
 "video": {
  "width": 960,
  "height": 540,
  "class": "VideoResource",
  "mp4Url": "media/video_CCB0F197_DD08_C848_41CF_88F56BB718E1.mp4"
 },
 "enabledInCardboard": true,
 "blending": 0,
 "distance": 50,
 "hfov": 35.04,
 "data": {
  "label": "Video"
 }
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 9.63,
   "yaw": 149.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0_HS_6_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -11.6,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_CE35D398_DD6C_D0B4_41C1_BDFA17E2AD18",
   "yaw": 149.08,
   "pitch": -11.6,
   "distance": 100,
   "hfov": 9.63,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CE846789_DD6D_3094_41E7_5E4FA3E0917C",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 15.39,
   "yaw": 83.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_1_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -43.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB, this.camera_C969BDA1_DD6F_F097_41E6_1B84AC47EB9F); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88FE1585_D9E4_FD03_41D6_B16191028AD6",
   "yaw": 83.89,
   "pitch": -43.57,
   "distance": 100,
   "hfov": 15.39,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7245DE8_D9AC_AD02_41C7_B85FB2A695B3",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 21.05,
   "yaw": 111.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_1_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 7.78,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7, this.camera_C9715DA9_DD6F_F097_41EA_70424145D765); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88C12585_D9E4_FD03_41E9_60943BB40C46",
   "yaw": 111.63,
   "pitch": 7.78,
   "distance": 100,
   "hfov": 21.05,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D749B9E7_D9AC_950F_41CE_6FF45EC85C10",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 21.19,
   "yaw": 169.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_1_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -4.32,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C, this.camera_C9F2CB3A_DD6F_F1F4_41E2_A5982688212E); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88C05585_D9E4_FD03_41D4_34DE3F16BE55",
   "yaw": 169.76,
   "pitch": -4.32,
   "distance": 100,
   "hfov": 21.19,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D795B981_D9AC_F503_41E9_A8232F68E34E",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 19.39,
   "yaw": -161.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_1_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -24.09,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877, this.camera_C9FEDB42_DD6F_F194_41EB_A9BA136F8778); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88C1D585_D9E4_FD03_4182_633D5C7456DE",
   "yaw": -161.03,
   "pitch": -24.09,
   "distance": 100,
   "hfov": 19.39,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D72F4B83_D9AC_7506_41B6_B96ED2921098",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 20.15,
   "yaw": 77.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_1_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -18.49,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2446447_D95F_992B_41CD_4D904B227F99, this.camera_CED69D32_DD6F_F1F5_41E6_B8B441E89CBD); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88C9257C_D9E4_FD01_41CB_CE417E5864A1",
   "yaw": 77.1,
   "pitch": -18.49,
   "distance": 100,
   "hfov": 20.15,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D6513DF7_D972_EAEB_41B3_C4BDC4FC08BD",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 16.19,
   "yaw": 19.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -3.45,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D277598A_D95F_EB25_41E5_0800136A96D4, this.camera_C9A68B58_DD6F_F1B4_41DA_B6B589B66ED7); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_C94DE043_DD5D_4F94_41E6_5DA79E1C89B6",
   "yaw": 19.99,
   "pitch": -3.45,
   "distance": 100,
   "hfov": 16.19,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D65B94FB_D952_9ADB_41EB_0205D9A243A6",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 15.79,
   "yaw": -155.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -11.79,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000, this.camera_C9B2DB6B_DD6F_F194_41DA_EC07DE499E5E); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_CB82E82A_DD18_3858_41E4_548023BE2D4A",
   "yaw": -155.22,
   "pitch": -11.79,
   "distance": 100,
   "hfov": 15.79,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D663F4B7_D952_B96B_41E3_B6EED08594D2",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 15.34,
   "yaw": -107.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_2_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -22.45,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB, this.camera_C878CBBA_DD6F_F0F4_41E6_68522CCD8F9C); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2AF2F95_DD08_3848_41E5_6C3C6B1CA508",
   "yaw": -107.88,
   "pitch": -22.45,
   "distance": 100,
   "hfov": 15.34,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D6022F78_D952_A7E5_41E0_E5F6305AA0F2",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 11.39,
   "yaw": -12.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_3_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -1.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2AEFF95_DD08_3848_41E5_EA283FE32630",
   "yaw": -12.09,
   "pitch": -1.96,
   "distance": 100,
   "hfov": 11.39,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D6903940_D952_EB25_41C2_1F60FBF9EB10",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 16.42,
   "yaw": -71.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_4_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -2.87,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2AEDF95_DD08_3848_41D1_F7B2D98A7544",
   "yaw": -71.07,
   "pitch": -2.87,
   "distance": 100,
   "hfov": 16.42,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C9E6996C_D952_6BFD_41C9_9BCF5BB30E27",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 15.56,
   "yaw": 121.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_5_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -3.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A, this.camera_C98EDB89_DD6F_F094_41E4_252277552B47); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2AEAF95_DD08_3848_41C4_1A35CC69BBE7",
   "yaw": 121.26,
   "pitch": -3.61,
   "distance": 100,
   "hfov": 15.56,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7A6891B_D951_AB5B_41E2_6BC17E48EE4A",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 13.57,
   "yaw": 74.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_6_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -12.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7, this.camera_C9817B78_DD6F_F074_41AF_5630CA7ACCBC); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2AE8F95_DD08_3848_41E8_C56FB95CF7FA",
   "yaw": 74.48,
   "pitch": -12.2,
   "distance": 100,
   "hfov": 13.57,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D69F1082_D951_9925_41C8_D143118029FD",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 11.8,
   "yaw": 71.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_7_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -29.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E, this.camera_C99D2B9B_DD6F_F0B4_419F_743F6404D2DC); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2AE6F96_DD08_3848_41E9_EBDE8976C71B",
   "yaw": 71.95,
   "pitch": -29.59,
   "distance": 100,
   "hfov": 11.8,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F94107B3_D9DC_9D07_4174_6CD9E2EEE2F4",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 14.34,
   "yaw": 0.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_8_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -25.86,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2446447_D95F_992B_41CD_4D904B227F99, this.camera_C86A1BA8_DD6F_F094_41E0_92C0F701DF15); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_C9438049_DD5D_4F94_41BC_4DA5FC8E22C3",
   "yaw": 0.97,
   "pitch": -25.86,
   "distance": 100,
   "hfov": 14.34,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D3A81821_DCF8_3848_41E5_84D663271BA4",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotationX": 19.3,
 "class": "VideoPanoramaOverlay",
 "autoplay": true,
 "id": "overlay_CE12EBF8_DD0B_DFB8_41C2_69BD086094CF",
 "roll": -7.05,
 "loop": true,
 "vfov": 5.76,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_CE12EBF8_DD0B_DFB8_41C2_69BD086094CF_t.jpg",
    "width": 960,
    "height": 540,
    "class": "ImageResourceLevel"
   }
  ]
 },
 "pitch": -11.19,
 "useHandCursor": true,
 "videoVisibleOnStop": false,
 "rotationY": -48.86,
 "yaw": -105.05,
 "video": {
  "width": 960,
  "height": 540,
  "class": "VideoResource",
  "mp4Url": "media/video_CCB0F197_DD08_C848_41CF_88F56BB718E1.mp4"
 },
 "enabledInCardboard": true,
 "blending": 0,
 "distance": 50,
 "hfov": 12.07,
 "data": {
  "label": "Video"
 }
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 16.77,
   "yaw": 167.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_9_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -14.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_C849BBC7_DD6F_F09C_41D8_709AE226BF00); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_C9400049_DD5D_4F94_41D5_451BA1E3A9CD",
   "yaw": 167.19,
   "pitch": -14.55,
   "distance": 100,
   "hfov": 16.77,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D2487640_DD55_3395_41E1_04862222CBA9",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 11.24,
   "yaw": -151.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -17.13,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC, this.camera_CEEA5CF2_DD6F_F075_41DE_585F6A80C153); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_CEDDDCA0_DD55_3094_41C1_DEBE300F553C",
   "yaw": -151.24,
   "pitch": -17.13,
   "distance": 100,
   "hfov": 11.24,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7985B88_D956_6F25_41CF_7F0AA858E1AF",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 14.14,
   "yaw": -68.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -38.34,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2449E7A_D95E_69E5_41E7_97426A243776, this.camera_CB0BCCAD_DD6F_F0EC_41D5_91975717B3CC); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_CEDD0CA0_DD55_3094_41E8_768A3A0DDAE5",
   "yaw": -68.8,
   "pitch": -38.34,
   "distance": 100,
   "hfov": 14.14,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D64A0F8B_D951_A73B_41DC_62A8B050A941",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 13.93,
   "yaw": 25.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_2_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -37.24,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E, this.camera_CB4C9C8F_DD6F_F0AC_41EA_148A96DD8427); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_CEDAACA0_DD55_3094_41CC_7F310F156C5C",
   "yaw": 25.07,
   "pitch": -37.24,
   "distance": 100,
   "hfov": 13.93,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D663B013_D951_992B_41E4_481907942BA0",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 16.06,
   "yaw": 122.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_3_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -20.26,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC, this.camera_CB3BECA5_DD6F_F09C_41DC_4A0222AD7B44); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8D6857DD_DA6C_BD03_41D9_FECBE7A8F4EF",
   "yaw": 122.55,
   "pitch": -20.26,
   "distance": 100,
   "hfov": 16.06,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D6FABBAC_D951_EF7C_41C0_E94B5DE51B2B",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 9.97,
   "yaw": 28.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_4_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -15.42,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_CB5D1C96_DD6F_F0BC_41D1_D5FEB32A783D); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_CEDA1CA0_DD55_3094_41DF_632BA21F81A5",
   "yaw": 28.31,
   "pitch": -15.42,
   "distance": 100,
   "hfov": 9.97,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C91D87D1_D951_A727_41E8_54124820CB77",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotationX": 0.77,
 "class": "VideoPanoramaOverlay",
 "autoplay": true,
 "id": "overlay_CFA57A32_DD18_5848_41D1_6085ED5026E3",
 "roll": -1.07,
 "loop": true,
 "vfov": 2.23,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_CFA57A32_DD18_5848_41D1_6085ED5026E3_t.jpg",
    "width": 960,
    "height": 540,
    "class": "ImageResourceLevel"
   }
  ]
 },
 "pitch": -1.53,
 "useHandCursor": true,
 "videoVisibleOnStop": false,
 "rotationY": -53.1,
 "yaw": 27.96,
 "video": {
  "width": 960,
  "height": 540,
  "class": "VideoResource",
  "mp4Url": "media/video_CCB0F197_DD08_C848_41CF_88F56BB718E1.mp4"
 },
 "enabledInCardboard": true,
 "blending": 0,
 "distance": 50,
 "hfov": 5.18,
 "data": {
  "label": "Video"
 }
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 7.84,
   "yaw": 4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_5_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -1.76,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000, this.camera_CB2B6C9E_DD6F_F0AC_41C4_0ADD3EA1C9BF); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_CEDB2CA0_DD55_3094_41D1_A0450F65DBC2",
   "yaw": 4,
   "pitch": -1.76,
   "distance": 100,
   "hfov": 7.84,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CF8B6C61_DD54_D794_41A6_0356C0630851",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 6.5,
   "yaw": -1.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_6_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -6.17,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_CEF0BCFB_DD6F_F06B_41C9_BF44C1070DD0); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_CEDB4CA0_DD55_3094_41DA_31F4A4AB30D8",
   "yaw": -1.86,
   "pitch": -6.17,
   "distance": 100,
   "hfov": 6.5,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CE288898_DD57_30B5_41CF_8F6D5A71B226",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 17.21,
   "yaw": -39.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_1_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -35.9,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477, this.camera_C9E40B33_DD6F_F1F4_41B0_F67FCFA7E6B6); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88C2157F_D9E4_FDFF_41E9_D66E31D3E7C9",
   "yaw": -39.16,
   "pitch": -35.9,
   "distance": 100,
   "hfov": 17.21,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7F748D5_D9AF_9303_41D3_F96D0874DF84",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 16.61,
   "yaw": -32.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -11.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B55F9E_DD08_3878_41EB_19D71F1507AD",
   "yaw": -32.86,
   "pitch": -11.11,
   "distance": 100,
   "hfov": 16.61,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7371697_D9AF_FF0F_41E6_360EF1287467",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 19.82,
   "yaw": 90.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_1_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -21.14,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF, this.camera_C8B57C62_DD6F_F794_41DA_B8654F8115FE); this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88F3E595_D9E4_FD03_41CD_63F707AA871A",
   "yaw": 90.68,
   "pitch": -21.14,
   "distance": 100,
   "hfov": 19.82,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7DA0EB8_D9A4_6F01_418B_BE44CB9B7C08",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 20.28,
   "yaw": -104.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_1_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -17.31,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884, this.camera_C883AC6A_DD6F_F794_41E4_4918F6903308); this.mainPlayList.set('selectedIndex', 40)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88F36595_D9E4_FD03_41E2_BFC9B4CE66F7",
   "yaw": -104.08,
   "pitch": -17.31,
   "distance": 100,
   "hfov": 20.28,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D71DEC6C_D9A5_9301_41AE_3CACB52C2BD8",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 17.83,
   "yaw": -104.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_1_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -32.95,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC, this.camera_C95B5DC7_DD6F_F09B_41EA_87C1A998D129); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88C37584_D9E4_FD01_41DD_E3C57389CE87",
   "yaw": -104.96,
   "pitch": -32.95,
   "distance": 100,
   "hfov": 17.83,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7EBE7F6_D9AC_7D01_41D2_39F422A690F8",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 18.05,
   "yaw": 114.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -9.34,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC, this.camera_C9449DB8_DD6F_F0F5_41D6_7CA1FDD50F6F); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8D7697ED_DA6C_BD03_41E2_7ADBA9AA1EA4",
   "yaw": 114.88,
   "pitch": -9.34,
   "distance": 100,
   "hfov": 18.05,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D73A4E12_D9AC_AF01_41DD_38FAC2CD0AE2",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 18.06,
   "yaw": 76.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_1_HS_2_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -31.77,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877, this.camera_C94E3DBF_DD6F_F0EB_41E1_70F257057895); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88C02584_D9E4_FD01_41E1_7BB0FD574D1E",
   "yaw": 76.22,
   "pitch": -31.77,
   "distance": 100,
   "hfov": 18.06,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D70ADA04_D9AD_B701_41C5_73A874528543",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 15.21,
   "yaw": 16.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -7.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B43F9D_DD08_3878_41E4_5B524CC6D8DD",
   "yaw": 16.89,
   "pitch": -7.57,
   "distance": 100,
   "hfov": 15.21,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7FD4D76_D9AC_AD01_41E3_2FE554E21798",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 17.46,
   "yaw": -37.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -3.83,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B5AF9E_DD08_3878_41DB_231C6395F950",
   "yaw": -37.2,
   "pitch": -3.83,
   "distance": 100,
   "hfov": 17.46,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D73B79EE_D9AC_9501_41E0_6CBF92E2DC36",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 16.82,
   "yaw": -14.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_1_HS_2_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -37.67,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477, this.camera_C97AFDB0_DD6F_F0F5_41D0_05544DC2565F); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88C2957F_D9E4_FDFF_41E8_3765270E0A3A",
   "yaw": -14.08,
   "pitch": -37.67,
   "distance": 100,
   "hfov": 16.82,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F24ECCB8_D9E4_9301_41EA_94DA5388555B",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 20.98,
   "yaw": 167.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -9.04,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A, this.camera_C9C40E0C_DD6F_F3AD_41DB_2E45FE45177C); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88D31573_D9E4_FD07_41C1_B6A788EC695A",
   "yaw": 167.99,
   "pitch": -9.04,
   "distance": 100,
   "hfov": 20.98,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D64FD51E_D94E_9B5D_41E1_F7C14C7B25F9",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 21.11,
   "yaw": 79.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -6.39,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB, this.camera_C9D05E13_DD6F_F3BB_41DB_97559B7F99F5); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88D0B573_D9E4_FD07_41E7_C55837221F98",
   "yaw": 79.47,
   "pitch": -6.39,
   "distance": 100,
   "hfov": 21.11,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D62E9350_D94E_9F25_41E5_2FDB4C31578C",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 12.79,
   "yaw": 99.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_2_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -0.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88D0D574_D9E4_FD01_41E7_3ADB937442CE",
   "yaw": 99.14,
   "pitch": -0.59,
   "distance": 100,
   "hfov": 12.79,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D6C593F1_D94E_7EE7_41E4_662283B1403D",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 17.4,
   "yaw": 163.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_3_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -35.01,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_C9DECE1B_DD6F_F3AB_41D1_50C1B1344C1F); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88D01574_D9E4_FD01_41D1_C9C3DE5CF2D7",
   "yaw": 163.56,
   "pitch": -35.01,
   "distance": 100,
   "hfov": 17.4,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D6B54584_D94F_9B2D_41AA_E4C28002A036",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 19.21,
   "yaw": -147.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_4_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -25.27,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88D04574_D9E4_FD01_41D8_608ACB4D3754",
   "yaw": -147.45,
   "pitch": -25.27,
   "distance": 100,
   "hfov": 19.21,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C9E9798A_D94F_EB25_41DC_DF812478C79A",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 12.76,
   "yaw": 135.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_5_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -3.84,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7, this.camera_C9F67E04_DD6F_F39D_41E2_04E12C7DEFC2); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88D1C574_D9E4_FD01_41D0_C5FDF852B955",
   "yaw": 135.14,
   "pitch": -3.84,
   "distance": 100,
   "hfov": 12.76,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C34580D1_D9AB_F303_41E2_B8DCC210075C",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 12.68,
   "yaw": 110.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_6_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -7.67,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_C9EA7DFD_DD6F_F06F_41D7_B25F3489C96E); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88D10574_D9E4_FD01_41E7_7E9335F4113F",
   "yaw": 110.35,
   "pitch": -7.67,
   "distance": 100,
   "hfov": 12.68,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C5B58AFD_D9A4_B703_41E4_BB6AAE4BCEEB",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotationX": 15.77,
 "class": "VideoPanoramaOverlay",
 "autoplay": true,
 "id": "overlay_CFE79476_DD08_48C8_41E4_488F96CAC310",
 "roll": 3.88,
 "loop": true,
 "vfov": 7.91,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_CFE79476_DD08_48C8_41E4_488F96CAC310_t.jpg",
    "width": 960,
    "height": 540,
    "class": "ImageResourceLevel"
   }
  ]
 },
 "pitch": -6.73,
 "useHandCursor": true,
 "videoVisibleOnStop": false,
 "rotationY": 12.4,
 "yaw": 56.4,
 "video": {
  "width": 960,
  "height": 540,
  "class": "VideoResource",
  "mp4Url": "media/video_CCB0F197_DD08_C848_41CF_88F56BB718E1.mp4"
 },
 "enabledInCardboard": true,
 "blending": 0,
 "distance": 50,
 "hfov": 11.32,
 "data": {
  "label": "Video"
 }
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 18.06,
   "yaw": -92.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_1_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -31.77,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477, this.camera_CEBAAAC4_DD6F_F09D_41C3_E704DC7EEAFF); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88C3E584_D9E4_FD01_41DF_1E5D837589FA",
   "yaw": -92.57,
   "pitch": -31.77,
   "distance": 100,
   "hfov": 18.06,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D794B279_D9AF_B703_41DC_9EA09BCC4236",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 20.8,
   "yaw": 93.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_1_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -11.7,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2, this.camera_CEA5CAA6_DD6F_F09D_41D4_69D2D91DE9E1); this.mainPlayList.set('selectedIndex', 37)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88F7158F_D9E4_FD1F_41DA_7E9DA08D31BE",
   "yaw": 93.92,
   "pitch": -11.7,
   "distance": 100,
   "hfov": 20.8,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7F51DEF_D9A7_AD1F_41E6_C8B6A932CB2F",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 20.96,
   "yaw": -171.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_1_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -9.34,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3, this.camera_CEDF8A9F_DD6F_F0AB_41B3_F3944EFA74A9); this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88F4A58F_D9E4_FD1F_41C2_421607C84F54",
   "yaw": -171.37,
   "pitch": -9.34,
   "distance": 100,
   "hfov": 20.96,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D71E7356_D9A4_7501_41CA_A2BA3B99B99F",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 18.69,
   "yaw": 107.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_1_HS_2_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 0.3,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88F4258F_D9E4_FD1F_41D4_39ACBD81F633",
   "yaw": 107.89,
   "pitch": 0.3,
   "distance": 100,
   "hfov": 18.69,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7767F64_D9A4_6D01_41EB_2DB637C28DFB",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 18.37,
   "yaw": 162.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_1_HS_3_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -10.62,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_CEAB4AAE_DD6F_F0ED_41D4_757DAFFE9328); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88F4658F_D9E4_FD1F_41CB_A06EE8EDF8D2",
   "yaw": 162.77,
   "pitch": -10.62,
   "distance": 100,
   "hfov": 18.37,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_989C8B4B_D9EC_9506_41D8_67523E91CB46",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 6.93,
   "yaw": -122.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0_HS_4_0_0_map.gif",
      "width": 24,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -0.49,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_CCCA8663_DD53_D394_41A5_A0246618F3C8, {'rollOverIconColor':'#666666','paddingBottom':5,'borderSize':0,'iconWidth':20,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'rollOverIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','pressedIconLineWidth':5,'backgroundOpacity':0.3,'pressedIconColor':'#888888','iconColor':'#000000','paddingTop':5,'iconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0,'rollOverBorderSize':0,'paddingLeft':5,'paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'rollOverIconHeight':20}, this.ImageResource_CCCA9663_DD53_D394_41EA_45EA13B9B60D, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0_HS_4_0.png",
      "width": 114,
      "height": 74,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 6.93,
   "yaw": -122.24,
   "pitch": -0.49
  }
 ],
 "id": "overlay_CCFF467C_DD53_D06C_41DF_120FFFF6F085",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 15.18,
   "yaw": -32.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -19.76,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E, this.camera_CE8F2D82_DD6F_F095_41E4_CBE8D2B13C82); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B9BFA3_DD08_3848_41B3_5386B834D936",
   "yaw": -32.86,
   "pitch": -19.76,
   "distance": 100,
   "hfov": 15.18,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7F330D8_D9A4_B301_41CB_C3481DDDA511",
 "class": "HotspotPanoramaOverlay"
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "maxHeight": 58,
 "maxWidth": 58,
 "verticalAlign": "middle",
 "width": 58,
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "IconButton",
 "shadow": false,
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "toggle",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton HS "
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png"
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "maxHeight": 58,
 "maxWidth": 58,
 "verticalAlign": "middle",
 "width": 58,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "IconButton",
 "shadow": false,
 "height": 58,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton VR"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png"
},
{
 "paddingBottom": 0,
 "maxWidth": 49,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "maxHeight": 37,
 "verticalAlign": "middle",
 "cursor": "hand",
 "width": 100,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "right": 30,
 "minHeight": 1,
 "paddingLeft": 0,
 "bottom": 8,
 "height": 75,
 "class": "IconButton",
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton VR"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png"
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "maxHeight": 58,
 "maxWidth": 58,
 "verticalAlign": "middle",
 "width": 58,
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "IconButton",
 "shadow": false,
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "toggle",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton GYRO"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 20.89,
   "yaw": -161.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_1_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -10.52,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF, this.camera_CEB98D62_DD6F_F195_41BA_82737D80321D); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88D8356B_D9E4_FD07_41EA_A787A3401629",
   "yaw": -161.91,
   "pitch": -10.52,
   "distance": 100,
   "hfov": 20.89,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7E3FC3F_D956_A95B_41E6_E8D692A00205",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 17.95,
   "yaw": 62.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -32.36,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC, this.camera_CEB2FD5A_DD6F_F1B5_41EA_A89165EBC28A); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2ACDF93_DD08_3848_41E4_A9FAF3308A42",
   "yaw": 62.35,
   "pitch": -32.36,
   "distance": 100,
   "hfov": 17.95,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D641B5D1_D956_FB27_41EA_5D37729EF2B4",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 16.55,
   "yaw": -138.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -17.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D275C425_D95F_F96F_41DB_79786819224B, this.camera_C965FAE2_DD6F_F094_41C6_2141C7E0E1D0); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8D7A97ED_DA6C_BD03_41D8_093E3707AA25",
   "yaw": -138.41,
   "pitch": -17.11,
   "distance": 100,
   "hfov": 16.55,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7863C12_D972_A924_41E9_BDC17BCE853A",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 20.5,
   "yaw": -165.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_1_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -15.24,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E, this.camera_C9792AF1_DD6F_F074_41AD_F8762399314D); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88CAA576_D9E4_FD01_41D8_F67E792E8CA6",
   "yaw": -165.16,
   "pitch": -15.24,
   "distance": 100,
   "hfov": 20.5,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D62E2B48_D972_AF25_41C5_8E694E16873E",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 17.11,
   "yaw": 122.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_2_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -18.97,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F, this.camera_CE848ACC_DD6F_F0AD_41D7_B53D813AD286); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8D7A27ED_DA6C_BD03_41BD_826A73083B7B",
   "yaw": 122.95,
   "pitch": -18.97,
   "distance": 100,
   "hfov": 17.11,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D6169AE1_D972_6EE7_41BC_4CEBCDF72019",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 18.23,
   "yaw": 69.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_1_HS_3_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -30.88,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_CE983ADA_DD6F_F0B5_41D5_B262D69DC8E6); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88CA0576_D9E4_FD0A_41D5_1BF90BCB92CD",
   "yaw": 69.73,
   "pitch": -30.88,
   "distance": 100,
   "hfov": 18.23,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D6CB9842_D972_6924_41E4_C607C53C66B6",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 17.1,
   "yaw": -7.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_4_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -2.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8D7BA7ED_DA6C_BD03_41E3_8EB46009ACB2",
   "yaw": -7.6,
   "pitch": -2.35,
   "distance": 100,
   "hfov": 17.1,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D69F8569_D973_9BE7_41E9_43B356F8C6BF",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 13.64,
   "yaw": 59.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_1_HS_5_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -7.66,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_C943BAF8_DD6F_F074_41E4_0F651AA5B015); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88CBD57C_D9E4_FD01_41E6_A072E677F9F6",
   "yaw": 59.5,
   "pitch": -7.66,
   "distance": 100,
   "hfov": 13.64,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C9E6384D_D973_A93F_41D0_06FCD3415B1E",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 17.16,
   "yaw": -74.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_6_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -14.26,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D277598A_D95F_EB25_41E5_0800136A96D4, this.camera_CE8F5AD3_DD6F_F0BB_41EA_2489F45AEC90); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8D7B77ED_DA6C_BD03_41E9_C9D94AD9F56F",
   "yaw": -74.27,
   "pitch": -14.26,
   "distance": 100,
   "hfov": 17.16,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_9E37ABD3_D9A5_9507_41CB_9F91F7292BF1",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 12.39,
   "yaw": 26.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_7_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -0.49,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8D78B7ED_DA6C_BD03_41D3_C7BAB1AEAF0B",
   "yaw": 26.51,
   "pitch": -0.49,
   "distance": 100,
   "hfov": 12.39,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_9180916E_D9A7_951E_41DA_ABA076E8E234",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 16.97,
   "yaw": 3.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_8_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -7.37,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E, this.camera_C96C7AEA_DD6F_F094_41CA_74AE0C6C2F4B); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8D7967ED_DA6C_BD03_41A6_8C84A35E6991",
   "yaw": 3.61,
   "pitch": -7.37,
   "distance": 100,
   "hfov": 16.97,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_931D1E55_DA5B_EF03_41BC_50B163E20E9E",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 10.99,
   "yaw": 53.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -1.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000, this.camera_C986AE31_DD6F_F3F7_41C2_6B4138297E74); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B06F98_DD08_3878_41B7_4C051BEF2463",
   "yaw": 53.38,
   "pitch": -1.16,
   "distance": 100,
   "hfov": 10.99,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D67A10DF_D971_FADB_41E3_44C2E76529A2",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 18.66,
   "yaw": 46.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -15.42,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_C860BE40_DD6F_F395_41CD_B43C5785CD7F); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B04F98_DD08_3878_41C8_169D3761529C",
   "yaw": 46.36,
   "pitch": -15.42,
   "distance": 100,
   "hfov": 18.66,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D605BDC1_D971_AB27_41E6_178B052D8899",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 18.57,
   "yaw": 105.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_1_HS_2_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -17.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_C9B8BE2A_DD6F_F395_41C4_A72A8D37CE02); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88CCA575_D9E4_FD03_41C0_DCDA47AA4F31",
   "yaw": 105.14,
   "pitch": -17.51,
   "distance": 100,
   "hfov": 18.57,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D6EE1B6D_D971_AFFF_41E3_C8C608512DC2",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 15.46,
   "yaw": 162.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_1_HS_3_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -10.81,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88CCC576_D9E4_FD01_41D2_B343F354DCAD",
   "yaw": 162.75,
   "pitch": -10.81,
   "distance": 100,
   "hfov": 15.46,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D6AFDA0A_D972_6925_41C0_8F44E954973A",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 10.38,
   "yaw": 74.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0_HS_4_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -1.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB, this.camera_C992DE39_DD6F_F3F7_41E1_572748896B09); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_CA2ED7D2_DD08_57C8_41EA_96E1E3E8E528",
   "yaw": 74.01,
   "pitch": -1.51,
   "distance": 100,
   "hfov": 10.38,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C933F26D_D972_99FF_41E1_4DFC0390945E",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 14.98,
   "yaw": 135.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_1_HS_5_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -17.9,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E, this.camera_C9AC9E22_DD6F_F395_41E2_240C39FE27A9); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88CDB576_D9E4_FD01_41B5_2BC12D958171",
   "yaw": 135.01,
   "pitch": -17.9,
   "distance": 100,
   "hfov": 14.98,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F9CF8A01_D9DB_9703_41EB_075F114A2316",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotationX": -27.01,
 "class": "VideoPanoramaOverlay",
 "autoplay": true,
 "id": "overlay_CFA52CB6_DD08_784B_41E9_B6D48FF4C09A",
 "roll": -1.75,
 "loop": true,
 "vfov": 3.19,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_CFA52CB6_DD08_784B_41E9_B6D48FF4C09A_t.jpg",
    "width": 960,
    "height": 540,
    "class": "ImageResourceLevel"
   }
  ]
 },
 "pitch": -2.4,
 "useHandCursor": true,
 "videoVisibleOnStop": false,
 "rotationY": -14.8,
 "yaw": 79.3,
 "video": {
  "width": 960,
  "height": 540,
  "class": "VideoResource",
  "mp4Url": "media/video_CCB0F197_DD08_C848_41CF_88F56BB718E1.mp4"
 },
 "enabledInCardboard": true,
 "blending": 0,
 "distance": 50,
 "hfov": 5.04,
 "data": {
  "label": "Video"
 }
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 17.82,
   "yaw": -73.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -13.08,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E, this.camera_CEFD4A72_DD6F_F075_41DA_4F9D6B4E8A0A); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B9EFA3_DD08_3848_41A2_2A9C8649FE46",
   "yaw": -73.12,
   "pitch": -13.08,
   "distance": 100,
   "hfov": 17.82,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7EF886B_D9A4_F307_41C4_4C0F08E59D2F",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 14.39,
   "yaw": -125.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -18.09,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84, this.camera_CED8BA97_DD6F_F0BB_41D6_605C70E0D29E); this.mainPlayList.set('selectedIndex', 39)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2BBEFA6_DD08_3848_41E4_243BB5A314AD",
   "yaw": -125.51,
   "pitch": -18.09,
   "distance": 100,
   "hfov": 14.39,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7F37C3F_D9A5_B37F_41E9_FAC205C365C1",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 17.93,
   "yaw": 45.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -14.06,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF, this.camera_CED37A90_DD6F_F0B5_41E4_8FDD012F9FCA); this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2BBCFA6_DD08_3848_41D3_FDA420A6E964",
   "yaw": 45.02,
   "pitch": -14.06,
   "distance": 100,
   "hfov": 17.93,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7026F2F_D9A5_ED1F_41EA_B864AE1A82DC",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 12.89,
   "yaw": 82.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0_HS_2_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -18.3,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D275C425_D95F_F96F_41DB_79786819224B, this.camera_CECF9A88_DD6F_F095_41DF_9966C7BE6914); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2BBAFA6_DD08_3848_41C9_1F12EE9C1E66",
   "yaw": 82.71,
   "pitch": -18.3,
   "distance": 100,
   "hfov": 12.89,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_9BFAC175_D9EC_9503_41D6_7B5EA288EF43",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 20.78,
   "yaw": 138.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_1_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -12,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2446447_D95F_992B_41CD_4D904B227F99, this.camera_CE882D7A_DD6F_F075_41E6_6DACC734915D); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88CDE576_D9E4_FD01_4194_3BF2C41C0F31",
   "yaw": 138.48,
   "pitch": -12,
   "distance": 100,
   "hfov": 20.78,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D645508F_D972_993B_41C5_F18245B8B18F",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 15.62,
   "yaw": -152.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -14.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2, this.camera_CE82AD73_DD6F_F07B_41DD_32AB39212E47); this.mainPlayList.set('selectedIndex', 37)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B38F99_DD08_3878_41E4_2C84DE5BF00D",
   "yaw": -152.87,
   "pitch": -14.55,
   "distance": 100,
   "hfov": 15.62,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D3B5C5A3_DCF8_C849_41D6_FC2B7D94C937",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 20.91,
   "yaw": 28.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_1_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -10.22,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7, this.camera_C939DDDE_DD6F_F0AD_41C8_3CAE0C7F5A69); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88C6E57D_D9E4_FD03_41E1_FBD5673DB839",
   "yaw": 28.42,
   "pitch": -10.22,
   "distance": 100,
   "hfov": 20.91,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7E567C4_D9AC_FD01_41B3_3289B38546D0",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 19.39,
   "yaw": -37.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_1_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -24.09,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0, this.camera_C913BDEE_DD6F_F06D_41C1_6B5CD8995EF2); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88C6057D_D9E4_FD03_41E0_D489277B54B6",
   "yaw": -37.98,
   "pitch": -24.09,
   "distance": 100,
   "hfov": 19.39,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7137BC5_D9AC_9503_41D7_07C03F2F4CF4",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 19.07,
   "yaw": 79.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_1_HS_2_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -26.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627, this.camera_C91FDDF5_DD6F_F07F_41E5_99CA5AA2FC44); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88C7A57D_D9E4_FD03_41E9_F58F692F6E3D",
   "yaw": 79.17,
   "pitch": -26.16,
   "distance": 100,
   "hfov": 19.07,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7702493_D9AC_B307_41E9_0F9EBE291DD9",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 20.32,
   "yaw": 148.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_1_HS_3_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -17.01,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C, this.camera_C905FDE6_DD6F_F09D_41DE_0F90040D77E3); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88C7C57D_D9E4_FD03_4146_B1FACA8E5719",
   "yaw": 148.22,
   "pitch": -17.01,
   "distance": 100,
   "hfov": 20.32,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D68B67BC_D9AC_9D02_41EA_B56706116FD7",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 15.27,
   "yaw": 75.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -26.85,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7, this.camera_CEFE7D13_DD6F_F1BB_41D6_F260178FD28C); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_CE2D5388_DD6C_D094_41E9_CC0FAD24CB9B",
   "yaw": 75.04,
   "pitch": -26.85,
   "distance": 100,
   "hfov": 15.27,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D78A82F8_D952_FEE5_41D3_2B1112925EA4",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 9.15,
   "yaw": 76.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -8.45,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_CE2D9388_DD6C_D094_41EA_8E0290489309",
   "yaw": 76.4,
   "pitch": -8.45,
   "distance": 100,
   "hfov": 9.15,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D6630607_D952_B92B_41BF_FFE8ACDD740B",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 16.45,
   "yaw": 162.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_2_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -13.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A, this.camera_CEC46D1B_DD6F_F1AB_41BD_F949DC991544); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_CE2C0388_DD6C_D094_41D3_1C3D48464813",
   "yaw": 162.29,
   "pitch": -13.57,
   "distance": 100,
   "hfov": 16.45,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D6347564_D952_9BED_41E7_76B02ABBDD1A",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 14.7,
   "yaw": -98.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_3_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -31.87,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_CEFAED0B_DD6F_F1AB_41C1_7184B59FC1CE); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8D6EA7DD_DA6C_BD03_41DE_EB33B672075D",
   "yaw": -98.96,
   "pitch": -31.87,
   "distance": 100,
   "hfov": 14.7,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D6E8E5D5_D952_7B2F_41E5_AC21C7E9F5DF",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 13.08,
   "yaw": -131.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_4_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -6.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_CE2C9388_DD6C_D094_41DC_A8BCA1C2AF45",
   "yaw": -131.33,
   "pitch": -6.98,
   "distance": 100,
   "hfov": 13.08,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7A0E7F9_D953_E6E7_41DA_DD85D3811992",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 15.5,
   "yaw": -56.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_5_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -13.47,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2446447_D95F_992B_41CD_4D904B227F99, this.camera_CECD8D22_DD6F_F195_41D6_492DF65A43DE); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_CE2CC388_DD6C_D094_41E4_646BAA46246F",
   "yaw": -56.86,
   "pitch": -13.47,
   "distance": 100,
   "hfov": 15.5,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D79C1932_D953_AB65_41E9_A9827A2E69E4",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 11.98,
   "yaw": -39.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_6_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -2.93,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_CE2F4388_DD6C_D094_41E3_D0001CA5FE82",
   "yaw": -39.06,
   "pitch": -2.93,
   "distance": 100,
   "hfov": 11.98,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_9EA667E6_D9AC_BD01_41C8_FDA6B207CFA1",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 12.38,
   "yaw": -85.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_7_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -2.46,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_CE2F8388_DD6C_D094_41E4_E65C885A3A5F",
   "yaw": -85.78,
   "pitch": -2.46,
   "distance": 100,
   "hfov": 12.38,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_95CBF4E9_D9AB_9303_4155_131693CB42B5",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 12.01,
   "yaw": -15.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_8_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -10.13,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_CE2FF388_DD6C_D094_41E8_3A361833A60B",
   "yaw": -15.06,
   "pitch": -10.13,
   "distance": 100,
   "hfov": 12.01,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_92EE501E_DA64_B301_41E3_208B5D73B92D",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 15.62,
   "yaw": -150.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_9_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -20.85,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_CED12D2A_DD6F_F195_41E4_A93BA320B5E5); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8D6CD7DD_DA6C_BD03_41C4_F391D67DBD3C",
   "yaw": -150.81,
   "pitch": -20.85,
   "distance": 100,
   "hfov": 15.62,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_96EA5B16_DA65_9501_41D4_9EB1A50C1865",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotationX": 7.87,
 "class": "VideoPanoramaOverlay",
 "autoplay": true,
 "id": "overlay_CEA315C1_DD19_CBC8_41DD_0FD38931A23C",
 "roll": -3.69,
 "loop": true,
 "vfov": 2.48,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_CEA315C1_DD19_CBC8_41DD_0FD38931A23C_t.jpg",
    "width": 960,
    "height": 540,
    "class": "ImageResourceLevel"
   }
  ]
 },
 "pitch": -7.13,
 "useHandCursor": true,
 "videoVisibleOnStop": false,
 "rotationY": -20.19,
 "yaw": -101.58,
 "video": {
  "width": 960,
  "height": 540,
  "class": "VideoResource",
  "mp4Url": "media/video_CCB0F197_DD08_C848_41CF_88F56BB718E1.mp4"
 },
 "enabledInCardboard": true,
 "blending": 0,
 "distance": 50,
 "hfov": 4.8,
 "data": {
  "label": "Video"
 }
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 17.77,
   "yaw": 114.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_1_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -33.24,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C, this.camera_C9226DCF_DD6F_F0AB_41EB_7FAB68C4844B); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88C16585_D9E4_FD03_41C6_305690530B61",
   "yaw": 114.29,
   "pitch": -33.24,
   "distance": 100,
   "hfov": 17.77,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7C8DB83_D9AD_F507_41E4_E82AFF50F7D4",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 20.74,
   "yaw": -9.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_1_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -12.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC, this.camera_C92F6DD6_DD6F_F0BD_41E9_9134D414B43A); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88FE9585_D9E4_FD03_41E1_D0761BE30FA8",
   "yaw": -9.35,
   "pitch": -12.59,
   "distance": 100,
   "hfov": 20.74,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D735DB2F_D9AD_951F_419A_6A4E0F5375C5",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 15.24,
   "yaw": -82.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_1_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -24.29,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E, this.camera_C8543BDA_DD6F_F0B4_41D0_559C7F585D2F); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88FDC587_D9E4_FD0F_41EA_15DAD634B540",
   "yaw": -82.14,
   "pitch": -24.29,
   "distance": 100,
   "hfov": 15.24,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D73DFF18_D9A5_AD01_41E6_18EA11A7F6FB",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 16.64,
   "yaw": -70.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -5.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B76FA1_DD08_3848_41D2_BC52C481E60D",
   "yaw": -70.27,
   "pitch": -5.61,
   "distance": 100,
   "hfov": 16.64,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D77BF730_D9A5_9D01_41DD_C70BCDBE4625",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 15.84,
   "yaw": -80.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_1_HS_2_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -41.8,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B, this.camera_C8254BEC_DD6F_F06C_41E3_BF76B0770FEC); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88FAE587_D9E4_FD0F_41E0_FEE956FC10F0",
   "yaw": -80.47,
   "pitch": -41.8,
   "distance": 100,
   "hfov": 15.84,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EEC794E2_D9FB_F301_41DD_810C7E3018F8",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 19.24,
   "yaw": -171.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -16.52,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2448E90_D95F_A925_41E8_B306937D2F35, this.camera_C801AE76_DD6F_F07D_41DD_C58482B457D2); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B4EF9D_DD08_3878_41EA_06668542C858",
   "yaw": -171.37,
   "pitch": -16.52,
   "distance": 100,
   "hfov": 19.24,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7A182C3_D9AC_9707_41D2_BF5DB8D66F78",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 19.53,
   "yaw": -60.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_1_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -23.21,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0, this.camera_C830AE6E_DD6F_F06D_418A_C25D57B06E87); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88C7557E_D9E4_FD01_41C4_6E1983C9D05F",
   "yaw": -60.99,
   "pitch": -23.21,
   "distance": 100,
   "hfov": 19.53,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7D0820E_D9AC_B701_41DA_0C0C0440FDAE",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 17.55,
   "yaw": -4.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0_HS_2_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -20.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B4AF9D_DD08_3878_41DA_65B8B402266F",
   "yaw": -4.85,
   "pitch": -20.16,
   "distance": 100,
   "hfov": 17.55,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7059272_D9AC_9701_41C0_CA6D80C6B127",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 17.14,
   "yaw": 154.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0_HS_3_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -23.41,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A, this.camera_C8541E5F_DD6F_F3AB_41CF_7463D041ECC8); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B48F9D_DD08_3878_41D1_E393A511DF7E",
   "yaw": 154.31,
   "pitch": -23.41,
   "distance": 100,
   "hfov": 17.14,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D74E2E3F_D9AC_EF7F_41AC_6F74CF32AFF8",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 17.66,
   "yaw": 125.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0_HS_4_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -19.18,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5, this.camera_C8221E67_DD6F_F39B_41DB_3BEFBD3A57D1); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B46F9D_DD08_3878_41BC_602606787613",
   "yaw": 125.11,
   "pitch": -19.18,
   "distance": 100,
   "hfov": 17.66,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D6CE016E_D9AC_9501_41E2_E5376BF39190",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 18.89,
   "yaw": 86.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -18.1,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2446447_D95F_992B_41CD_4D904B227F99, this.camera_CEAE2AB5_DD6F_F0FF_41E7_6FD71C4E1054); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B5EF9B_DD08_3878_41DA_8DB4710AF462",
   "yaw": 86.45,
   "pitch": -18.1,
   "distance": 100,
   "hfov": 18.89,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D660D206_D972_B92D_41E4_4CFD8D0736EB",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 17.5,
   "yaw": -89.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -16.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884, this.camera_CEB79ABD_DD6F_F0EF_41E4_0D40EFA0D75A); this.mainPlayList.set('selectedIndex', 40)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B5BF9B_DD08_3878_41DA_DD99E4C1A435",
   "yaw": -89.03,
   "pitch": -16.92,
   "distance": 100,
   "hfov": 17.5,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D364651D_DCF8_4878_41BB_DE8A29355436",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 13.95,
   "yaw": 20.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -3.54,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2AD3F93_DD08_3848_41E8_5892374A1822",
   "yaw": 20.53,
   "pitch": -3.54,
   "distance": 100,
   "hfov": 13.95,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D6668017_D956_992B_41A1_DF3FFFDCF50C",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 18.95,
   "yaw": -8.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -10.62,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB, this.camera_CEF4CD03_DD6F_F19B_41E8_5F01084071FE); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2AD1F93_DD08_3848_41E7_5F2C1C221C3A",
   "yaw": -8.86,
   "pitch": -10.62,
   "distance": 100,
   "hfov": 18.95,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D6F1AC0F_D956_A93B_41E0_64849DD7D4E1",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 20.04,
   "yaw": 90.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_1_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -19.37,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_CB615C79_DD6F_F074_41D0_3244630899A6); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88F4F58E_D9E4_FD01_41C1_CC00A4AB699C",
   "yaw": 90.09,
   "pitch": -19.37,
   "distance": 100,
   "hfov": 20.04,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7CC27B9_D9A7_FD03_41E8_10AADDC84561",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 18,
   "yaw": 36.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -5.6,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4, this.camera_C8902C71_DD6F_F074_41C7_536A3521F603); this.mainPlayList.set('selectedIndex', 36)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B94FA4_DD08_3848_41D0_CD127239775C",
   "yaw": 36.58,
   "pitch": -5.6,
   "distance": 100,
   "hfov": 18,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D71AB6F6_D9A7_9F01_41D5_29CA8A045D1F",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 18.39,
   "yaw": -92.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -10.13,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB, this.camera_CEED9A5A_DD6F_F3B5_41D7_CCEC2F36736B); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2AA5F92_DD08_3848_41A3_270BF2E927DE",
   "yaw": -92.67,
   "pitch": -10.13,
   "distance": 100,
   "hfov": 18.39,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D683BA7A_D957_A9E5_41CB_54043F41C19D",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 13.88,
   "yaw": 15.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -11.4,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7, this.camera_CEF70A6A_DD6F_F395_41E4_F1E3DF88ED5A); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_CB2BABE6_DD18_3FC8_41EA_59C551AEF1AD",
   "yaw": 15.43,
   "pitch": -11.4,
   "distance": 100,
   "hfov": 13.88,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7E0A16E_D957_FBFD_41C5_506B1B599A70",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 20.08,
   "yaw": -165.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_1_HS_2_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -19.08,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF, this.camera_CEE6AA51_DD6F_F3B7_41D6_E1ADCF3A141B); this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88DBC56B_D9E4_FD07_41BB_3D42E019638D",
   "yaw": -165.45,
   "pitch": -19.08,
   "distance": 100,
   "hfov": 20.08,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D63E8956_D957_AB2D_41CA_B191E2115301",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 12.6,
   "yaw": -68.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0_HS_3_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -32.65,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB, this.camera_CEF07A62_DD6F_F395_41E4_80BEBE5F3A7C); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_CE565FA5_DD08_7848_41E5_03E0F5115BD1",
   "yaw": -68.56,
   "pitch": -32.65,
   "distance": 100,
   "hfov": 12.6,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D26AE543_DD09_C8C8_4167_43EA93E0D36A",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 17.08,
   "yaw": -17.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_1_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -36.49,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC, this.camera_CEBFED6A_DD6F_F195_41DB_58EE5C3D3832); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88C6E57D_D9E4_FD03_41E8_C368E7B7CA09",
   "yaw": -17.91,
   "pitch": -36.49,
   "distance": 100,
   "hfov": 17.08,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7F1E22E_D9AD_9701_41CB_0B6E77C54741",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 18.52,
   "yaw": -29.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -11.31,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B62FA3_DD08_3848_41D6_73063773BD87",
   "yaw": -29.42,
   "pitch": -11.31,
   "distance": 100,
   "hfov": 18.52,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D72FB31D_D9A4_B502_41DD_F95CC9D963E7",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 11,
   "yaw": -80.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -18.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25, this.camera_CEAD7D52_DD6F_F1B5_41C2_CB300B62C18A); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B72FA2_DD08_3848_41E6_6017C50137E3",
   "yaw": -80.99,
   "pitch": -18.69,
   "distance": 100,
   "hfov": 11,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7C790D0_D9A5_B301_41E5_6CDC8471F7A8",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 14.96,
   "yaw": -56.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -15.64,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B6FFA2_DD08_3848_41E3_70C68686B999",
   "yaw": -56.99,
   "pitch": -15.64,
   "distance": 100,
   "hfov": 14.96,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7064A6F_D9A5_B71F_41E0_3F3BD68A4C88",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 14.35,
   "yaw": 121.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0_HS_2_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -9.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B6DFA2_DD08_3848_41E5_CA611C77CCA6",
   "yaw": 121.77,
   "pitch": -9.44,
   "distance": 100,
   "hfov": 14.35,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D76CD573_D9A5_9D07_41E3_9ABF5406F7B7",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 16.34,
   "yaw": -165.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0_HS_3_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -15.05,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C, this.camera_CEA72D4A_DD6F_F195_41DF_1B79C3A72A94); this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B69FA2_DD08_3848_41CD_C180699BDB55",
   "yaw": -165.84,
   "pitch": -15.05,
   "distance": 100,
   "hfov": 16.34,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7535325_D9A4_7503_41E5_690714D6AE13",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 15.21,
   "yaw": -140.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0_HS_4_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -17.31,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33, this.camera_CEDA3D3A_DD6F_F1F5_41DF_D9FEABADBEEC); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B67FA2_DD08_3848_41A8_D69F93109DD1",
   "yaw": -140.4,
   "pitch": -17.31,
   "distance": 100,
   "hfov": 15.21,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D6935DE8_D9A4_6D01_41E3_4C1058EC9A36",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 14.42,
   "yaw": -80.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0_HS_5_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -34.52,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B, this.camera_CEA04D42_DD6F_F195_41D6_CED6F0025F36); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B65FA2_DD08_3848_41E6_A34A23876ECD",
   "yaw": -80.07,
   "pitch": -34.52,
   "distance": 100,
   "hfov": 14.42,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E0EDE0BC_D9E7_9301_41E5_DC6B0F61BECF",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 20.18,
   "yaw": -88.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_1_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -18.19,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860, this.camera_C9CC9B49_DD6F_F194_41A7_B1D60AD37059); this.mainPlayList.set('selectedIndex', 34)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88F6658E_D9E4_FD01_41B3_C759800854B7",
   "yaw": -88.44,
   "pitch": -18.19,
   "distance": 100,
   "hfov": 20.18,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7FC3418_D9A4_9301_41E9_4520FC82E8DE",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 19.61,
   "yaw": 77.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_1_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -22.62,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB, this.camera_C9D88B50_DD6F_F1B4_4178_AF92B1EE9CB8); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88F7E58E_D9E4_FD01_41D4_C678B2F95069",
   "yaw": 77.7,
   "pitch": -22.62,
   "distance": 100,
   "hfov": 19.61,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D70EEE5F_D9A4_6F3E_41CB_780294E06498",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 18.23,
   "yaw": 143.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_1_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -30.88,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB, this.camera_C81D7E85_DD6F_F09F_41EB_6047C4F9874E); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88FF8586_D9E4_FD01_41EA_9286D74FC88E",
   "yaw": 143.79,
   "pitch": -30.88,
   "distance": 100,
   "hfov": 18.23,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D781FBA4_D9AB_9501_41E8_65D5A2FAA42E",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 16.55,
   "yaw": -94.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_1_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -38.85,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E, this.camera_C80C6E7D_DD6F_F06F_41E4_A4C206FEB2C0); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88FF2586_D9E4_FD01_41C9_3C916EE91D07",
   "yaw": -94.63,
   "pitch": -38.85,
   "distance": 100,
   "hfov": 16.55,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D70FD8CA_D9A4_9301_41C7_6AE0F427CBA8",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 21.22,
   "yaw": -33.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_1_HS_2_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -2.85,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88FCB586_D9E4_FD01_41DF_BF0E02DA7D0F",
   "yaw": -33.85,
   "pitch": -2.85,
   "distance": 100,
   "hfov": 21.22,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D6AC0B36_D9A4_9501_41E7_5010B104B5AC",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 21.14,
   "yaw": -80.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_1_HS_3_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -5.8,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88FC3587_D9E4_FD0F_41D7_2E0691E9925D",
   "yaw": -80.47,
   "pitch": -5.8,
   "distance": 100,
   "hfov": 21.14,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D69733B8_D9A4_F501_41D6_2BCCD46635E0",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 18.23,
   "yaw": 96.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_1_HS_4_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -30.88,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25, this.camera_C8ED8E8C_DD6F_F0AD_41DC_4466E3424AF3); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88FC5587_D9E4_FD0F_41E7_079DF8774749",
   "yaw": 96.29,
   "pitch": -30.88,
   "distance": 100,
   "hfov": 18.23,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D64CCE33_D9A4_AF07_41D4_4902293988A0",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 20.78,
   "yaw": -39.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_1_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -12,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC, this.camera_CB7F2C87_DD6F_F09C_41E1_73B57C3C5BE1); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88C6057D_D9E4_FD03_41EA_33F05939B52D",
   "yaw": -39.45,
   "pitch": -12,
   "distance": 100,
   "hfov": 20.78,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7BD4D84_D9AD_ED01_41D4_9A00EE0F90FE",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 20.22,
   "yaw": -9.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -17.9,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477, this.camera_CB6E8C80_DD6F_F094_41EB_A67F6047A3AE); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8D7D77ED_DA6C_BD03_41D1_3390F5A29F66",
   "yaw": -9.35,
   "pitch": -17.9,
   "distance": 100,
   "hfov": 20.22,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F1598A38_D9EF_F701_41EA_5B8BD5EC1788",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 20.5,
   "yaw": 162.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_1_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -15.24,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4, this.camera_CEC64A81_DD6F_F097_41E3_4342BA50FF7D); this.mainPlayList.set('selectedIndex', 36)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88F5858F_D9E4_FD1F_41D8_4485D225FA65",
   "yaw": 162.97,
   "pitch": -15.24,
   "distance": 100,
   "hfov": 20.5,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D72C6C24_D9A4_B301_4192_8AFC474069BF",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 19.17,
   "yaw": 60.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_1_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -25.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F, this.camera_CEC28A79_DD6F_F077_41CD_E70DA2CAB223); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_88F5758F_D9E4_FD1F_41B1_377739968277",
   "yaw": 60.88,
   "pitch": -25.57,
   "distance": 100,
   "hfov": 19.17,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D76B0E6C_D9A4_EF01_41BC_FC755ECE9235",
 "class": "HotspotPanoramaOverlay"
},
{
 "paddingBottom": 0,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "height": 110,
 "class": "Container",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "propagateClick": true,
 "data": {
  "name": "button menu sup"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "width": "91.304%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "height": "85.959%",
 "shadow": false,
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "vertical",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "propagateClick": true,
 "data": {
  "name": "-button set"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "visible": false,
 "gap": 3
},
{
 "paddingBottom": 0,
 "maxWidth": 3000,
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "maxHeight": 2,
 "verticalAlign": "middle",
 "right": "0%",
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "minHeight": 1,
 "paddingLeft": 0,
 "bottom": 53,
 "height": 2,
 "class": "Image",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "scaleMode": "fit_outside",
 "data": {
  "name": "white line"
 },
 "horizontalAlign": "center",
 "paddingRight": 0
},
{
 "paddingBottom": 0,
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
  "this.Button_1B9A3D00_16C4_0505_41B2_6830155B7D52"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "width": 1199,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 30,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "height": 51,
 "class": "Container",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "propagateClick": true,
 "data": {
  "name": "-button set container"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 3
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "right": "10%",
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "shadowVerticalLength": 0,
 "layout": "horizontal",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "10%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "bottom": "80%",
 "class": "Container",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "layout": "vertical",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "propagateClick": false,
 "data": {
  "name": "Container X global"
 },
 "horizontalAlign": "right",
 "paddingRight": 20,
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "right": "10%",
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "shadowVerticalLength": 0,
 "layout": "horizontal",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "10%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "bottom": "80%",
 "class": "Container",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "layout": "vertical",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "propagateClick": false,
 "data": {
  "name": "Container X global"
 },
 "horizontalAlign": "right",
 "paddingRight": 20,
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "right": "15%",
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "scrollBarMargin": 2,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "shadowVerticalLength": 0,
 "layout": "vertical",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "right": "10%",
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "shadowVerticalLength": 0,
 "layout": "horizontal",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "10%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "bottom": "80%",
 "class": "Container",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "layout": "vertical",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "propagateClick": false,
 "data": {
  "name": "Container X global"
 },
 "horizontalAlign": "right",
 "paddingRight": 20,
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "right": "15%",
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "scrollBarMargin": 2,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "shadowVerticalLength": 0,
 "layout": "vertical",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "right": "15%",
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "scrollBarMargin": 2,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "shadowVerticalLength": 0,
 "layout": "vertical",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "right": "15%",
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "scrollBarMargin": 2,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "shadowVerticalLength": 0,
 "layout": "vertical",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "right": "10%",
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "shadowVerticalLength": 0,
 "layout": "horizontal",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "10%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "bottom": "80%",
 "class": "Container",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "layout": "vertical",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "propagateClick": false,
 "data": {
  "name": "Container X global"
 },
 "horizontalAlign": "right",
 "paddingRight": 20,
 "gap": 10
},
{
 "levels": [
  {
   "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2B8AFA5_DD08_3848_41C6_A20CF4670C7A",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2B87FA5_DD08_3848_41CF_E7A87638452A",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0_HS_2_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2B85FA5_DD08_3848_41C7_C8704F5E1F9A",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_1_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88F7758E_D9E4_FD01_41E3_BAE24C956C37",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2B2AF9A_DD08_3878_41DF_430F55155118",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_1_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88C8857C_D9E4_FD01_41DB_5F4625AA9E32",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_1_HS_2_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88C8257C_D9E4_FD01_41DA_632EC5D3732E",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_1_HS_3_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88C8657C_D9E4_FD01_41DC_972AEFD19B09",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0_HS_4_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2B24F9B_DD08_3878_41E4_51C35086B945",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0_HS_5_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2B22F9B_DD08_3878_41BC_D11CEE4A61A5",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_8D7407FD_DA6C_BD03_41D6_6A9A48FD3B04",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_8D7587FD_DA6C_BD03_41D9_32A0B3227006",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_1_HS_2_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88FE7586_D9E4_FD01_41E4_CA48AF6F7FC6",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0_HS_3_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_8D7547FD_DA6C_BD03_41E0_B196685C698C",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0_HS_4_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_8D8AD7FD_DA6C_BD03_41E9_7C3CAEE0807B",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_CB3FBBF6_DD18_3FC8_41E4_2C74F45E0213",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_CB3C7BF6_DD18_3FC8_41E2_4BEC1B545780",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_2_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_CB3C0BF6_DD18_3FC8_41CB_35FA86767EBA",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_3_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_CB3CBBF6_DD18_3FC8_41DC_340065152334",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_4_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_CB3D5BF6_DD18_3FC8_41E9_CFF7FC4F4E22",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_5_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_CB3DABF6_DD18_3FC8_419A_30F4A9964CDD",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_6_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_CB3A7BF6_DD18_3FC8_41E8_3BC949C24A5F",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_1_HS_7_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88CF8575_D9E4_FD03_41D6_AA03DE7F8CF2",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_8_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_CB3A9BF6_DD18_3FC8_41EA_29EAE51E0BD2",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_8D62E7DD_DA6C_BD03_41E0_8B39DD9F8850",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_1_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88D2E56E_D9E4_FD01_41E6_1FA2DC2CB285",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0_HS_2_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_CE33E398_DD6C_D0B4_41EA_98F5A522372C",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0_HS_3_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_8D63C7DD_DA6C_BD03_41D8_F8239B99E580",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0_HS_4_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_CE325398_DD6C_D0B4_41E2_16051BD5798E",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0_HS_5_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_8D6367DD_DA6C_BD03_41E7_2C681BF39EF9",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0_HS_6_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_CE35D398_DD6C_D0B4_41C1_BDFA17E2AD18",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_1_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88FE1585_D9E4_FD03_41D6_B16191028AD6",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_1_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88C12585_D9E4_FD03_41E9_60943BB40C46",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_1_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88C05585_D9E4_FD03_41D4_34DE3F16BE55",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_1_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88C1D585_D9E4_FD03_4182_633D5C7456DE",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_1_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88C9257C_D9E4_FD01_41CB_CE417E5864A1",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_C94DE043_DD5D_4F94_41E6_5DA79E1C89B6",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_CB82E82A_DD18_3858_41E4_548023BE2D4A",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_2_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2AF2F95_DD08_3848_41E5_6C3C6B1CA508",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_3_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2AEFF95_DD08_3848_41E5_EA283FE32630",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_4_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2AEDF95_DD08_3848_41D1_F7B2D98A7544",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_5_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2AEAF95_DD08_3848_41C4_1A35CC69BBE7",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_6_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2AE8F95_DD08_3848_41E8_C56FB95CF7FA",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_7_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2AE6F96_DD08_3848_41E9_EBDE8976C71B",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_8_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_C9438049_DD5D_4F94_41BC_4DA5FC8E22C3",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_9_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_C9400049_DD5D_4F94_41D5_451BA1E3A9CD",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_CEDDDCA0_DD55_3094_41C1_DEBE300F553C",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_CEDD0CA0_DD55_3094_41E8_768A3A0DDAE5",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_2_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_CEDAACA0_DD55_3094_41CC_7F310F156C5C",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_3_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_8D6857DD_DA6C_BD03_41D9_FECBE7A8F4EF",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_4_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_CEDA1CA0_DD55_3094_41DF_632BA21F81A5",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_5_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_CEDB2CA0_DD55_3094_41D1_A0450F65DBC2",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_6_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_CEDB4CA0_DD55_3094_41DA_31F4A4AB30D8",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_1_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88C2157F_D9E4_FDFF_41E9_D66E31D3E7C9",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2B55F9E_DD08_3878_41EB_19D71F1507AD",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_1_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88F3E595_D9E4_FD03_41CD_63F707AA871A",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_1_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88F36595_D9E4_FD03_41E2_BFC9B4CE66F7",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_1_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88C37584_D9E4_FD01_41DD_E3C57389CE87",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_8D7697ED_DA6C_BD03_41E2_7ADBA9AA1EA4",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_1_HS_2_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88C02584_D9E4_FD01_41E1_7BB0FD574D1E",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2B43F9D_DD08_3878_41E4_5B524CC6D8DD",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2B5AF9E_DD08_3878_41DB_231C6395F950",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_1_HS_2_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88C2957F_D9E4_FDFF_41E8_3765270E0A3A",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88D31573_D9E4_FD07_41C1_B6A788EC695A",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88D0B573_D9E4_FD07_41E7_C55837221F98",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_2_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88D0D574_D9E4_FD01_41E7_3ADB937442CE",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_3_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88D01574_D9E4_FD01_41D1_C9C3DE5CF2D7",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_4_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88D04574_D9E4_FD01_41D8_608ACB4D3754",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_5_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88D1C574_D9E4_FD01_41D0_C5FDF852B955",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_6_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88D10574_D9E4_FD01_41E7_7E9335F4113F",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_1_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88C3E584_D9E4_FD01_41DF_1E5D837589FA",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_1_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88F7158F_D9E4_FD1F_41DA_7E9DA08D31BE",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_1_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88F4A58F_D9E4_FD1F_41C2_421607C84F54",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_1_HS_2_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88F4258F_D9E4_FD1F_41D4_39ACBD81F633",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_1_HS_3_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88F4658F_D9E4_FD1F_41CB_A06EE8EDF8D2",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2B9BFA3_DD08_3848_41B3_5386B834D936",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_1_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88D8356B_D9E4_FD07_41EA_A787A3401629",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2ACDF93_DD08_3848_41E4_A9FAF3308A42",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_8D7A97ED_DA6C_BD03_41D8_093E3707AA25",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_1_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88CAA576_D9E4_FD01_41D8_F67E792E8CA6",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_2_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_8D7A27ED_DA6C_BD03_41BD_826A73083B7B",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_1_HS_3_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88CA0576_D9E4_FD0A_41D5_1BF90BCB92CD",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_4_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_8D7BA7ED_DA6C_BD03_41E3_8EB46009ACB2",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_1_HS_5_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88CBD57C_D9E4_FD01_41E6_A072E677F9F6",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_6_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_8D7B77ED_DA6C_BD03_41E9_C9D94AD9F56F",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_7_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_8D78B7ED_DA6C_BD03_41D3_C7BAB1AEAF0B",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_8_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_8D7967ED_DA6C_BD03_41A6_8C84A35E6991",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2B06F98_DD08_3878_41B7_4C051BEF2463",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2B04F98_DD08_3878_41C8_169D3761529C",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_1_HS_2_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88CCA575_D9E4_FD03_41C0_DCDA47AA4F31",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_1_HS_3_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88CCC576_D9E4_FD01_41D2_B343F354DCAD",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0_HS_4_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_CA2ED7D2_DD08_57C8_41EA_96E1E3E8E528",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_1_HS_5_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88CDB576_D9E4_FD01_41B5_2BC12D958171",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2B9EFA3_DD08_3848_41A2_2A9C8649FE46",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2BBEFA6_DD08_3848_41E4_243BB5A314AD",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2BBCFA6_DD08_3848_41D3_FDA420A6E964",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0_HS_2_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2BBAFA6_DD08_3848_41C9_1F12EE9C1E66",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_1_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88CDE576_D9E4_FD01_4194_3BF2C41C0F31",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2B38F99_DD08_3878_41E4_2C84DE5BF00D",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_1_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88C6E57D_D9E4_FD03_41E1_FBD5673DB839",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_1_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88C6057D_D9E4_FD03_41E0_D489277B54B6",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_1_HS_2_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88C7A57D_D9E4_FD03_41E9_F58F692F6E3D",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_1_HS_3_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88C7C57D_D9E4_FD03_4146_B1FACA8E5719",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_CE2D5388_DD6C_D094_41E9_CC0FAD24CB9B",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_CE2D9388_DD6C_D094_41EA_8E0290489309",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_2_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_CE2C0388_DD6C_D094_41D3_1C3D48464813",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_3_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_8D6EA7DD_DA6C_BD03_41DE_EB33B672075D",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_4_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_CE2C9388_DD6C_D094_41DC_A8BCA1C2AF45",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_5_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_CE2CC388_DD6C_D094_41E4_646BAA46246F",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_6_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_CE2F4388_DD6C_D094_41E3_D0001CA5FE82",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_7_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_CE2F8388_DD6C_D094_41E4_E65C885A3A5F",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_8_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_CE2FF388_DD6C_D094_41E8_3A361833A60B",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_9_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_8D6CD7DD_DA6C_BD03_41C4_F391D67DBD3C",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_1_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88C16585_D9E4_FD03_41C6_305690530B61",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_1_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88FE9585_D9E4_FD03_41E1_D0761BE30FA8",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_1_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88FDC587_D9E4_FD0F_41EA_15DAD634B540",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2B76FA1_DD08_3848_41D2_BC52C481E60D",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_1_HS_2_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88FAE587_D9E4_FD0F_41E0_FEE956FC10F0",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2B4EF9D_DD08_3878_41EA_06668542C858",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_1_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88C7557E_D9E4_FD01_41C4_6E1983C9D05F",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0_HS_2_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2B4AF9D_DD08_3878_41DA_65B8B402266F",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0_HS_3_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2B48F9D_DD08_3878_41D1_E393A511DF7E",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0_HS_4_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2B46F9D_DD08_3878_41BC_602606787613",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2B5EF9B_DD08_3878_41DA_8DB4710AF462",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2B5BF9B_DD08_3878_41DA_DD99E4C1A435",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2AD3F93_DD08_3848_41E8_5892374A1822",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2AD1F93_DD08_3848_41E7_5F2C1C221C3A",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_1_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88F4F58E_D9E4_FD01_41C1_CC00A4AB699C",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2B94FA4_DD08_3848_41D0_CD127239775C",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2AA5F92_DD08_3848_41A3_270BF2E927DE",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_CB2BABE6_DD18_3FC8_41EA_59C551AEF1AD",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_1_HS_2_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88DBC56B_D9E4_FD07_41BB_3D42E019638D",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0_HS_3_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_CE565FA5_DD08_7848_41E5_03E0F5115BD1",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_1_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88C6E57D_D9E4_FD03_41E8_C368E7B7CA09",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2B62FA3_DD08_3848_41D6_73063773BD87",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2B72FA2_DD08_3848_41E6_6017C50137E3",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2B6FFA2_DD08_3848_41E3_70C68686B999",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0_HS_2_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2B6DFA2_DD08_3848_41E5_CA611C77CCA6",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0_HS_3_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2B69FA2_DD08_3848_41CD_C180699BDB55",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0_HS_4_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2B67FA2_DD08_3848_41A8_D69F93109DD1",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0_HS_5_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D2B65FA2_DD08_3848_41E6_A34A23876ECD",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_1_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88F6658E_D9E4_FD01_41B3_C759800854B7",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_1_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88F7E58E_D9E4_FD01_41D4_C678B2F95069",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_1_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88FF8586_D9E4_FD01_41EA_9286D74FC88E",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_1_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88FF2586_D9E4_FD01_41C9_3C916EE91D07",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_1_HS_2_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88FCB586_D9E4_FD01_41DF_BF0E02DA7D0F",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_1_HS_3_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88FC3587_D9E4_FD0F_41D7_2E0691E9925D",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_1_HS_4_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88FC5587_D9E4_FD0F_41E7_079DF8774749",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_1_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88C6057D_D9E4_FD03_41EA_33F05939B52D",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_8D7D77ED_DA6C_BD03_41D1_3390F5A29F66",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_1_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88F5858F_D9E4_FD1F_41D8_4485D225FA65",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_1_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_88F5758F_D9E4_FD1F_41B1_377739968277",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "maxHeight": 60,
 "maxWidth": 60,
 "verticalAlign": "middle",
 "width": 60,
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "IconButton",
 "shadow": false,
 "height": 60,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "toggle",
 "borderRadius": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "data": {
  "name": "image button menu"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png"
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "maxHeight": 58,
 "maxWidth": 58,
 "verticalAlign": "middle",
 "width": 58,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "IconButton",
 "shadow": false,
 "height": 58,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "borderRadius": 0,
 "click": "this.shareTwitter(window.location.href)",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton TWITTER"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "visible": false
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "maxHeight": 58,
 "maxWidth": 58,
 "verticalAlign": "middle",
 "width": 58,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "IconButton",
 "shadow": false,
 "height": 58,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "borderRadius": 0,
 "click": "this.shareFacebook(window.location.href)",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton FB"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "visible": false
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "iconWidth": 0,
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "width": 120,
 "verticalAlign": "middle",
 "fontFamily": "Montserrat",
 "pressedBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 0,
 "rollOverShadow": false,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Button",
 "shadow": false,
 "height": 40,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "label": "HOUSE INFO",
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 12,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "bold",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "visible": false,
 "gap": 5,
 "data": {
  "name": "Button house info"
 }
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "iconWidth": 32,
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "width": 130,
 "verticalAlign": "middle",
 "fontFamily": "Montserrat",
 "pressedBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Button",
 "shadow": false,
 "height": 40,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "label": "PANORAMA LIST",
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 12,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "bold",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 5,
 "data": {
  "name": "Button panorama list"
 }
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "iconWidth": 32,
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "width": 90,
 "verticalAlign": "middle",
 "fontFamily": "Montserrat",
 "pressedBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Button",
 "shadow": false,
 "height": 40,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "label": "LOCATION",
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 12,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "bold",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 5,
 "data": {
  "name": "Button location"
 }
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "iconWidth": 32,
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "width": 103,
 "verticalAlign": "middle",
 "fontFamily": "Montserrat",
 "pressedBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Button",
 "shadow": false,
 "height": 40,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "label": "FLOORPLAN",
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 12,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "bold",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 5,
 "data": {
  "name": "Button floorplan"
 }
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "iconWidth": 32,
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "width": 112,
 "verticalAlign": "middle",
 "fontFamily": "Montserrat",
 "pressedBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Button",
 "shadow": false,
 "height": 40,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "label": "PHOTOALBUM",
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 12,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "bold",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 5,
 "data": {
  "name": "Button photoalbum"
 }
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "iconWidth": 32,
 "id": "Button_1B9A3D00_16C4_0505_41B2_6830155B7D52",
 "width": 90,
 "verticalAlign": "middle",
 "fontFamily": "Montserrat",
 "pressedBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Button",
 "shadow": false,
 "height": 40,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "label": "REALTOR",
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 12,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "bold",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 5,
 "data": {
  "name": "Button realtor"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "width": "85%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "-left"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "gap": 10
},
{
 "paddingBottom": 20,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "width": "50%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 50,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 460,
 "layout": "vertical",
 "borderRadius": 0,
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "overflow": "visible",
 "propagateClick": false,
 "data": {
  "name": "-right"
 },
 "horizontalAlign": "left",
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "maxHeight": 60,
 "maxWidth": 60,
 "verticalAlign": "middle",
 "width": "25%",
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "minHeight": 50,
 "paddingLeft": 0,
 "shadow": false,
 "height": "75%",
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "X"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg"
},
{
 "paddingBottom": 0,
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "width": "85%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "-left"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "gap": 10
},
{
 "paddingBottom": 20,
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "width": "50%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 50,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 460,
 "layout": "vertical",
 "borderRadius": 0,
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "overflow": "visible",
 "propagateClick": false,
 "data": {
  "name": "-right"
 },
 "horizontalAlign": "left",
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "maxHeight": 60,
 "maxWidth": 60,
 "verticalAlign": "middle",
 "width": "25%",
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "minHeight": 50,
 "paddingLeft": 0,
 "shadow": false,
 "height": "75%",
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "X"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg"
},
{
 "paddingBottom": 0,
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 140,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "header"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "itemVerticalAlign": "top",
 "paddingBottom": 70,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "itemThumbnailScaleMode": "fit_outside",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "itemPaddingLeft": 3,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "verticalAlign": "middle",
 "itemMaxWidth": 1000,
 "itemThumbnailWidth": 220,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "paddingLeft": 70,
 "scrollBarWidth": 10,
 "itemPaddingRight": 3,
 "itemBackgroundColor": [],
 "backgroundColor": [
  "#000000"
 ],
 "selectedItemLabelFontColor": "#04A3E1",
 "itemPaddingTop": 3,
 "itemThumbnailOpacity": 1,
 "class": "ThumbnailGrid",
 "borderSize": 0,
 "rollOverItemThumbnailShadow": true,
 "itemThumbnailShadow": false,
 "itemLabelPosition": "bottom",
 "itemLabelFontColor": "#666666",
 "scrollBarVisible": "rollOver",
 "itemLabelGap": 7,
 "scrollBarOpacity": 0.5,
 "selectedItemThumbnailShadow": true,
 "backgroundOpacity": 0.05,
 "itemBackgroundColorRatios": [],
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemOpacity": 1,
 "paddingRight": 70,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "height": "100%",
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailBorderRadius": 0,
 "itemMinHeight": 50,
 "itemMode": "normal",
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemLabelFontWeight": "normal",
 "itemHorizontalAlign": "center",
 "itemThumbnailHeight": 125,
 "selectedItemLabelFontWeight": "bold",
 "itemMaxHeight": 1000,
 "itemMinWidth": 50,
 "itemBackgroundOpacity": 0,
 "itemWidth": 220,
 "minHeight": 1,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemLabelFontSize": 14,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 10,
 "minWidth": 1,
 "itemPaddingBottom": 3,
 "itemLabelTextDecoration": "none",
 "borderRadius": 5,
 "itemLabelFontFamily": "Montserrat",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "scrollBarColor": "#04A3E1",
 "itemHeight": 156,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemLabelFontStyle": "normal",
 "propagateClick": false,
 "data": {
  "name": "ThumbnailList"
 },
 "horizontalAlign": "center",
 "itemBorderRadius": 0,
 "itemLabelHorizontalAlign": "center",
 "backgroundColorRatios": [
  0
 ],
 "gap": 26
},
{
 "paddingBottom": 0,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "width": "85%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "-left"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "gap": 10
},
{
 "paddingBottom": 20,
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "width": "15%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 50,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 400,
 "layout": "vertical",
 "borderRadius": 0,
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "overflow": "visible",
 "propagateClick": false,
 "data": {
  "name": "-right"
 },
 "horizontalAlign": "left",
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "maxHeight": 60,
 "maxWidth": 60,
 "verticalAlign": "middle",
 "width": "25%",
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "minHeight": 50,
 "paddingLeft": 0,
 "shadow": false,
 "height": "75%",
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "X"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg"
},
{
 "paddingBottom": 0,
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 140,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "header"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "id": "MapViewer",
 "transitionMode": "blending",
 "toolTipFontStyle": "normal",
 "width": "100%",
 "toolTipPaddingTop": 4,
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "vrPointerSelectionTime": 2000,
 "firstTransitionDuration": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarOpacity": 1,
 "toolTipShadowOpacity": 1,
 "height": "100%",
 "class": "ViewerArea",
 "borderSize": 0,
 "progressHeight": 6,
 "toolTipFontColor": "#606060",
 "toolTipShadowSpread": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressBottom": 2,
 "toolTipOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipPaddingLeft": 6,
 "progressLeft": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipTextShadowOpacity": 0,
 "paddingRight": 0,
 "playbackBarHeight": 10,
 "progressBorderRadius": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipDisplayTime": 600,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipFontSize": 12,
 "toolTipBorderColor": "#767676",
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderRadius": 3,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBarBorderSize": 6,
 "playbackBarHeadShadowColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadOpacity": 1,
 "minHeight": 1,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "shadow": false,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "minWidth": 1,
 "toolTipPaddingRight": 6,
 "borderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderSize": 1,
 "toolTipPaddingBottom": 4,
 "progressRight": 0,
 "progressBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBottom": 0,
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "playbackBarBorderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "data": {
  "name": "Floor Plan"
 },
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderColor": "#000000",
 "progressOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadBorderSize": 0,
 "toolTipShadowColor": "#333333"
},
{
 "paddingBottom": 0,
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 140,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "header"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "visible",
 "propagateClick": false,
 "data": {
  "name": "Container photo"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "visible",
 "propagateClick": false,
 "data": {
  "name": "Container photo"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "width": "55%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "-left"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "gap": 10
},
{
 "paddingBottom": 20,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "width": "45%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 60,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 460,
 "layout": "vertical",
 "borderRadius": 0,
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "overflow": "visible",
 "propagateClick": false,
 "data": {
  "name": "-right"
 },
 "horizontalAlign": "left",
 "paddingRight": 60,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "maxHeight": 60,
 "maxWidth": 60,
 "verticalAlign": "middle",
 "width": "25%",
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "minHeight": 50,
 "paddingLeft": 0,
 "shadow": false,
 "height": "75%",
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "X"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg"
},
{
 "paddingBottom": 0,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "maxHeight": 1000,
 "verticalAlign": "middle",
 "width": "100%",
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "height": "100%",
 "shadow": false,
 "class": "Image",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "horizontalAlign": "center",
 "paddingRight": 0
},
{
 "paddingBottom": 0,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 60,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "layout": "horizontal",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "horizontalAlign": "right",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0
},
{
 "paddingBottom": 30,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 520,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 100,
 "layout": "vertical",
 "borderRadius": 0,
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "Container text"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "width": 370,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 40,
 "class": "Container",
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "toolTipFontStyle": "normal",
 "toolTipPaddingTop": 4,
 "transitionMode": "blending",
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "right": 0,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "vrPointerSelectionTime": 2000,
 "firstTransitionDuration": 0,
 "paddingLeft": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "class": "ViewerArea",
 "toolTipShadowOpacity": 1,
 "progressBottom": 2,
 "borderSize": 0,
 "progressHeight": 6,
 "toolTipFontColor": "#606060",
 "toolTipShadowSpread": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipPaddingLeft": 6,
 "progressLeft": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "playbackBarHeight": 10,
 "progressBorderRadius": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipFontSize": 12,
 "toolTipBorderColor": "#767676",
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderRadius": 3,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBarBorderSize": 6,
 "playbackBarHeadShadowColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadOpacity": 1,
 "minHeight": 1,
 "top": 0,
 "toolTipFontWeight": "normal",
 "bottom": 0,
 "toolTipFontFamily": "Arial",
 "progressBarBorderRadius": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "shadow": false,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "minWidth": 1,
 "toolTipPaddingRight": 6,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderSize": 1,
 "toolTipPaddingBottom": 4,
 "progressRight": 0,
 "progressBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBottom": 0,
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "playbackBarBorderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "data": {
  "name": "Viewer info 1"
 },
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderColor": "#000000",
 "progressOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadBorderSize": 0,
 "toolTipShadowColor": "#333333"
},
{
 "paddingBottom": 0,
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "height": "100%",
 "shadow": false,
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "Container arrows"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10
},
{
 "paddingBottom": 0,
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 60,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "layout": "horizontal",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "horizontalAlign": "right",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0
},
{
 "paddingBottom": 30,
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 520,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 100,
 "layout": "vertical",
 "borderRadius": 0,
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "Container text"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "width": 370,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 40,
 "class": "Container",
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "width": "77.115%",
 "scrollBarWidth": 10,
 "minHeight": 100,
 "paddingLeft": 80,
 "top": "0%",
 "scrollBarMargin": 2,
 "height": "100%",
 "shadow": false,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.15vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.15vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "paddingRight": 0
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "maxHeight": 60,
 "verticalAlign": "top",
 "width": "100%",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "right": 20,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "shadow": false,
 "height": "36.14%",
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 },
 "horizontalAlign": "right",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg"
},
{
 "paddingBottom": 0,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d673.2763774025825!2d-122.5430829!3d47.54627519999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490478a6f72db75%3A0x145ffc32bb64b9f5!2s1310%20Colchester%20Dr%20E%2C%20Port%20Orchard%2C%20WA%2098366!5e0!3m2!1sen!2sus!4v1713057739566!5m2!1sen!2sus",
 "scrollEnabled": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "class": "WebFrame",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "insetBorder": false,
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "propagateClick": false,
 "data": {
  "name": "WebFrame48191"
 },
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "paddingBottom": 0,
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 60,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "layout": "horizontal",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "horizontalAlign": "right",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0
},
{
 "paddingBottom": 30,
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 520,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 100,
 "layout": "vertical",
 "borderRadius": 0,
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "Container text"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "width": 370,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 40,
 "class": "Container",
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "width": "77.115%",
 "scrollBarWidth": 10,
 "minHeight": 100,
 "paddingLeft": 80,
 "top": "0%",
 "scrollBarMargin": 2,
 "height": "100%",
 "shadow": false,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.15vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.15vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "paddingRight": 0
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "maxHeight": 60,
 "verticalAlign": "top",
 "width": "100%",
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "right": 20,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "shadow": false,
 "height": "36.14%",
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 },
 "horizontalAlign": "right",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg"
},
{
 "paddingBottom": 0,
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "width": "77.115%",
 "scrollBarWidth": 10,
 "minHeight": 100,
 "paddingLeft": 80,
 "top": "0%",
 "scrollBarMargin": 2,
 "height": "100%",
 "shadow": false,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.15vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.15vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "paddingRight": 0
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "maxHeight": 60,
 "verticalAlign": "top",
 "width": "100%",
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "right": 20,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "shadow": false,
 "height": "36.14%",
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 },
 "horizontalAlign": "right",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg"
},
{
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "toolTipFontStyle": "normal",
 "width": "100%",
 "toolTipPaddingTop": 4,
 "transitionMode": "blending",
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "vrPointerSelectionTime": 2000,
 "firstTransitionDuration": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarOpacity": 1,
 "toolTipShadowOpacity": 1,
 "height": "100%",
 "class": "ViewerArea",
 "borderSize": 0,
 "progressHeight": 6,
 "toolTipFontColor": "#606060",
 "toolTipShadowSpread": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressBottom": 2,
 "toolTipOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipPaddingLeft": 6,
 "progressLeft": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "playbackBarHeight": 10,
 "progressBorderRadius": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipFontSize": 12,
 "toolTipBorderColor": "#767676",
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderRadius": 3,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBarBorderSize": 6,
 "playbackBarHeadShadowColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadOpacity": 1,
 "minHeight": 1,
 "top": "0%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "shadow": false,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "minWidth": 1,
 "toolTipPaddingRight": 6,
 "borderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderSize": 1,
 "toolTipPaddingBottom": 4,
 "progressRight": 0,
 "progressBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBottom": 0,
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "playbackBarBorderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "data": {
  "name": "Viewer photoalbum + text 1"
 },
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderColor": "#000000",
 "progressOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadBorderSize": 0,
 "toolTipShadowColor": "#333333"
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "left": 10,
 "maxHeight": 60,
 "verticalAlign": "middle",
 "cursor": "hand",
 "width": "14.22%",
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "bottom": "20%",
 "shadow": false,
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "IconButton <"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png"
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "cursor": "hand",
 "width": "14.22%",
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "right": 10,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "bottom": "20%",
 "shadow": false,
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "IconButton >"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png"
},
{
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipFontStyle": "normal",
 "width": "100%",
 "toolTipPaddingTop": 4,
 "transitionMode": "blending",
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "vrPointerSelectionTime": 2000,
 "firstTransitionDuration": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarOpacity": 1,
 "toolTipShadowOpacity": 1,
 "height": "100%",
 "class": "ViewerArea",
 "borderSize": 0,
 "progressHeight": 6,
 "toolTipFontColor": "#606060",
 "toolTipShadowSpread": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressBottom": 2,
 "toolTipOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipPaddingLeft": 6,
 "progressLeft": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "playbackBarHeight": 10,
 "progressBorderRadius": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipFontSize": 12,
 "toolTipBorderColor": "#767676",
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderRadius": 3,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBarBorderSize": 6,
 "playbackBarHeadShadowColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadOpacity": 1,
 "minHeight": 1,
 "top": "0%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "shadow": false,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "minWidth": 1,
 "toolTipPaddingRight": 6,
 "borderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderSize": 1,
 "toolTipPaddingBottom": 4,
 "progressRight": 0,
 "progressBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBottom": 0,
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "playbackBarBorderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderColor": "#000000",
 "progressOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadBorderSize": 0,
 "toolTipShadowColor": "#333333"
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "maxHeight": 60,
 "verticalAlign": "middle",
 "cursor": "hand",
 "width": "14.22%",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "bottom": "20%",
 "shadow": false,
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "IconButton <"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png"
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "cursor": "hand",
 "width": "14.22%",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "right": 10,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "bottom": "20%",
 "shadow": false,
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "IconButton >"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png"
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "maxHeight": 60,
 "verticalAlign": "top",
 "width": "10%",
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "right": 20,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "shadow": false,
 "height": "10%",
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 },
 "horizontalAlign": "right",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg"
},
{
 "paddingBottom": 0,
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "maxHeight": 1000,
 "verticalAlign": "bottom",
 "width": "100%",
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "height": "100%",
 "shadow": false,
 "class": "Image",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "horizontalAlign": "center",
 "paddingRight": 0
},
{
 "paddingBottom": 0,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 60,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "layout": "horizontal",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "horizontalAlign": "right",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0
},
{
 "paddingBottom": 30,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 520,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 100,
 "layout": "vertical",
 "borderRadius": 0,
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "Container text"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "width": 370,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 40,
 "class": "Container",
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 20,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "width": "100%",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 10,
 "minHeight": 1,
 "height": "100%",
 "shadow": false,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.47vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.35vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.35vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.35vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.35vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.58vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "paddingRight": 10
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "iconWidth": 32,
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "width": "46%",
 "backgroundColorDirection": "vertical",
 "fontFamily": "Bebas Neue Bold",
 "pressedBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "iconHeight": 32,
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColor": [
  "#04A3E1"
 ],
 "shadow": false,
 "class": "Button",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "height": "9%",
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "label": "lorem ipsum",
 "rollOverBackgroundOpacity": 1,
 "fontSize": "3vh",
 "backgroundOpacity": 0.7,
 "propagateClick": false,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "normal",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "gap": 5,
 "data": {
  "name": "Button"
 }
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "maxHeight": 150,
 "maxWidth": 150,
 "verticalAlign": "middle",
 "width": "12%",
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "minHeight": 70,
 "paddingLeft": 0,
 "shadow": false,
 "height": "8%",
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "paddingTop": 0,
 "minWidth": 70,
 "mode": "push",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "IconButton <"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png"
},
{
 "paddingBottom": 0,
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "width": "80%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "minHeight": 1,
 "height": "30%",
 "shadow": false,
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "Container separator"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "maxHeight": 150,
 "maxWidth": 150,
 "verticalAlign": "middle",
 "width": "12%",
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "minHeight": 70,
 "paddingLeft": 0,
 "shadow": false,
 "height": "8%",
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "paddingTop": 0,
 "minWidth": 70,
 "mode": "push",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "IconButton >"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png"
},
{
 "paddingBottom": 20,
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "width": "100%",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 10,
 "minHeight": 1,
 "height": "100%",
 "shadow": false,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.47vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.35vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.35vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "paddingRight": 10
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "iconWidth": 32,
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "width": "46%",
 "backgroundColorDirection": "vertical",
 "fontFamily": "Bebas Neue Bold",
 "pressedBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "iconHeight": 32,
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColor": [
  "#04A3E1"
 ],
 "shadow": false,
 "class": "Button",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "height": "9%",
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "label": "lorem ipsum",
 "rollOverBackgroundOpacity": 1,
 "fontSize": "3vh",
 "backgroundOpacity": 0.7,
 "propagateClick": false,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "normal",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "gap": 5,
 "data": {
  "name": "Button"
 }
},
{
 "paddingBottom": 20,
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "width": "100%",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 10,
 "minHeight": 1,
 "height": "100%",
 "shadow": false,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.79vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.02vh;font-family:'Bebas Neue Bold';\">1310 Colchester Dr E, Port Orchard, WA 98366</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:5.15vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">VIEW! VIEW! VIEW! Custom built home with views of Seattle and the Sound. Vaulted ceilings and plenty of space including a fireplace to keep you warm and cozy. A chef's dream kitchen with all appliances included along with washer, dryer, &amp; walk-in pantry. Formal living room and primary w/en-suite bath. Wrap around deck accessible from many rooms to soak in the view with a drink of your choice. Meditation/study room for those quiet times. Restore and bring back to life the beautiful Koi pond with cascading fountain for your enjoyment. Daylight basement includes 2 bedrooms, bath &amp; full kitchen, fridge, washer &amp; dryer. Easy commute to Seattle ferry, HWY 16, medical, and shopping.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "paddingRight": 10
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "iconWidth": 32,
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "width": 207,
 "backgroundColorDirection": "vertical",
 "fontFamily": "Bebas Neue Bold",
 "pressedBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "iconHeight": 32,
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 59,
 "class": "Button",
 "shadow": false,
 "backgroundColor": [
  "#04A3E1"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "label": "lorem ipsum",
 "rollOverBackgroundOpacity": 1,
 "fontSize": 34,
 "backgroundOpacity": 0.7,
 "propagateClick": false,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "normal",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "visible": false,
 "gap": 5,
 "data": {
  "name": "Button"
 }
},
{
 "paddingBottom": 10,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "width": "100%",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "minHeight": 1,
 "height": "45%",
 "shadow": false,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.93vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingRight": 0
},
{
 "paddingBottom": 0,
 "children": [
  "this.Image_AAEAE258_BAF1_0DDD_41E6_FB144FCE6904",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "80%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "data": {
  "name": "- content"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "id": "Image_AAEAE258_BAF1_0DDD_41E6_FB144FCE6904",
 "maxHeight": 1219,
 "maxWidth": 983,
 "verticalAlign": "middle",
 "width": "25.177%",
 "url": "skin/Image_AAEAE258_BAF1_0DDD_41E6_FB144FCE6904.jpg",
 "minHeight": 1,
 "paddingLeft": 0,
 "height": "30.5%",
 "shadow": false,
 "class": "Image",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image4092"
 },
 "horizontalAlign": "center",
 "paddingRight": 0
},
{
 "paddingBottom": 10,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "width": "72.222%",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 10,
 "minHeight": 1,
 "height": "100%",
 "shadow": false,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#233142;font-size:2.35vh;font-family:'Bebas Neue Bold';\">NICHOLAS CUMMINGS</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;font-family:'Bebas Neue Bold';\">Licensed Realtor</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.79vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.79vh;font-family:'Bebas Neue Bold';\">Tlf.: +1 (253) 225-0548</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.79vh;font-family:'Bebas Neue Bold';\">NicholasC@JohnLScott.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.79vh;font-family:'Bebas Neue Bold';\">NicholasC.JohnLScott.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.12vh;font-family:'Bebas Neue Bold';\">Meet Nick Cummings, your trusted real estate advisor in Kitsap County, Washington. As a native of this beautiful region, I bring a deep understanding of its neighborhoods, communities, and market trends. While my experience in the real estate industry may be modest, my passion for helping clients achieve their homeownership dreams is boundless.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.12vh;font-family:'Bebas Neue Bold';\">With a genuine love for Kitsap County and its unique charm, I am committed to providing personalized service tailored to each client's needs and preferences. Whether you're buying, selling, or investing in real estate, I am here to guide you every step of the way. Holding a realtor license, I adhere to the highest standards of professionalism and ethics, ensuring a seamless and rewarding real estate experience for my clients.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.12vh;font-family:'Bebas Neue Bold';\">My approach is rooted in transparency, integrity, and open communication. I take the time to listen to my clients' goals and concerns, empowering them with the knowledge and resources they need to make informed decisions. From navigating the complexities of the local market to negotiating the best possible deals, I am dedicated to achieving exceptional results for my clients.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.12vh;font-family:'Bebas Neue Bold';\">As your local real estate expert, I am honored to serve the diverse communities of Kitsap County. Whether you're searching for your dream home, selling your property, or exploring investment opportunities, I am here to turn your real estate aspirations into reality. Contact me today, and let's embark on this exciting journey together</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "paddingRight": 10
}],
 "verticalAlign": "top",
 "desktopMipmappingEnabled": false,
 "scrollBarWidth": 10,
 "vrPolyfillScale": 0.5,
 "mobileMipmappingEnabled": false,
 "minHeight": 20,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "class": "Player",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 20,
 "height": "100%",
 "layout": "absolute",
 "backgroundPreloadEnabled": true,
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "overflow": "visible",
 "propagateClick": true,
 "scripts": {
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "unregisterKey": function(key){  delete window[key]; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "existsKey": function(key){  return key in window; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getKey": function(key){  return window[key]; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "registerKey": function(key, value){  window[key] = value; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } }
 },
 "data": {
  "name": "Player468"
 },
 "horizontalAlign": "left",
 "downloadEnabled": false,
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
