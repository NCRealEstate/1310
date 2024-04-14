(function(){
    var script = {
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingBottom": 0,
 "data": {
  "name": "Player468"
 },
 "backgroundPreloadEnabled": true,
 "id": "rootPlayer",
 "verticalAlign": "top",
 "layout": "absolute",
 "desktopMipmappingEnabled": false,
 "contentOpaque": false,
 "width": "100%",
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
  "this.Image_B44E6FBD_BAA2_0E15_41E1_F18F1E555CBE"
 ],
 "class": "Player",
 "start": "this.playAudioList([this.audio_97B8ABA2_D9DD_9501_41D7_2EB760D81D21]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "defaultVRPointer": "laser",
 "definitions": [{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -68.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C82871D9_DA30_BFB5_41B9_62BCBE69AD67"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 41.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C8C55288_DA30_BD93_41E7_635556F7E044"
},
{
 "items": [
  {
   "media": "this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_camera"
  },
  {
   "media": "this.panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_camera"
  },
  {
   "media": "this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_camera"
  },
  {
   "media": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_camera"
  },
  {
   "media": "this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_camera"
  },
  {
   "media": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761_camera"
  },
  {
   "media": "this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_camera"
  },
  {
   "media": "this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_camera"
  },
  {
   "media": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425_camera"
  },
  {
   "media": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_camera"
  },
  {
   "media": "this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_camera"
  },
  {
   "media": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99_camera"
  },
  {
   "media": "this.panorama_D277598A_D95F_EB25_41E5_0800136A96D4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D277598A_D95F_EB25_41E5_0800136A96D4_camera"
  },
  {
   "media": "this.panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_camera"
  },
  {
   "media": "this.panorama_D275C425_D95F_F96F_41DB_79786819224B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D275C425_D95F_F96F_41DB_79786819224B_camera"
  },
  {
   "media": "this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_camera"
  },
  {
   "media": "this.panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_camera"
  },
  {
   "media": "this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_camera"
  },
  {
   "media": "this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477_camera"
  },
  {
   "media": "this.panorama_D2448E90_D95F_A925_41E8_B306937D2F35",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2448E90_D95F_A925_41E8_B306937D2F35_camera"
  },
  {
   "media": "this.panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_camera"
  },
  {
   "media": "this.panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_camera"
  },
  {
   "media": "this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_camera"
  },
  {
   "media": "this.panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_camera"
  },
  {
   "media": "this.panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_camera"
  },
  {
   "media": "this.panorama_D2449E7A_D95E_69E5_41E7_97426A243776",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2449E7A_D95E_69E5_41E7_97426A243776_camera"
  },
  {
   "media": "this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_camera"
  },
  {
   "media": "this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_camera"
  },
  {
   "media": "this.panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_camera"
  },
  {
   "media": "this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_camera"
  },
  {
   "media": "this.panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_camera"
  },
  {
   "media": "this.panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_camera"
  },
  {
   "media": "this.panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_camera"
  },
  {
   "media": "this.panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_camera"
  },
  {
   "media": "this.panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_camera"
  },
  {
   "media": "this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_camera"
  },
  {
   "media": "this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_camera"
  },
  {
   "media": "this.panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_camera"
  },
  {
   "media": "this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_camera"
  },
  {
   "media": "this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_camera"
  },
  {
   "media": "this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 40, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 7.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CB5A1103_DA30_BC95_41C9_354D487A4DFC"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 75.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C9FE1316_DA30_BCBF_41B5_72C7F9F48143"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -65.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CF0CD453_DA30_A4B5_41C4_9F691387DFBF"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 117.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CE2AA356_DA30_BCBF_41C3_8F05720038FF"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 170.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C8E48275_DA30_BD7C_41EB_08CFB630202F"
},
{
 "thumbnailUrl": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_t.jpg",
 "label": "IMG_20240413_102513_00_merged",
 "id": "panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -161.91,
   "yaw": -7.88,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D6668017_D956_992B_41A1_DF3FFFDCF50C",
  "this.overlay_D6F1AC0F_D956_A93B_41E0_64849DD7D4E1"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -64.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C88B4260_DA30_BC94_41DB_A6FF01BB32CA"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 18.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C9372291_DA30_BDB4_41D1_95AF1D03BC02"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -24.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CEA713E3_DA30_A394_41E3_4E82EC836DD6"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 119.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CEE06412_DA30_A4B7_41C8_B2FD6E6E8AD9"
},
{
 "thumbnailUrl": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_t.jpg",
 "label": "IMG_20240413_103314_00_merged",
 "id": "panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 122.95,
   "yaw": 138.48,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D645508F_D972_993B_41C5_F18245B8B18F"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "thumbnailUrl": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_t.jpg",
 "label": "IMG_20240413_104727_00_merged",
 "id": "panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 77.7,
   "yaw": 115.47,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED"
  },
  {
   "panorama": "this.panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 143.79,
   "yaw": -53.91,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B"
  },
  {
   "backwardYaw": 83.89,
   "yaw": -158.37,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2449E7A_D95E_69E5_41E7_97426A243776"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D7E97B5C_D9AC_B501_41E4_21E2611AEEDE",
  "this.overlay_D7207717_D9AC_9D0F_41E7_577B241C7E02",
  "this.overlay_D71AA6F3_D9AC_7F07_41DB_BBC92204CDA4",
  "this.overlay_9359013A_DA64_9501_41E1_413334E81E17",
  "this.overlay_901AD77A_DA64_9D01_41D8_909D144D58C4"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -132.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C91182A8_DA30_BD93_41E8_D912A8D0B070"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -31.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CF2CE442_DA30_A497_41C3_C1654D626C3B"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 142.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C9BDF2E7_DA30_BD9D_41E5_954AFF7297D2"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 53.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CF98D49C_DA30_A5B3_41B8_3CD18054E992"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 84.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CE9703F3_DA30_A375_41D7_D95EDD305B65"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -57.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CFF904B2_DA30_A5F7_41D7_DAD3FF24E895"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -102.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CE55E3B7_DA30_A3FD_41B7_C74C91AC58C4"
},
{
 "thumbnailUrl": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_t.jpg",
 "label": "IMG_20240413_104159_00_merged",
 "id": "panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -37.98,
   "yaw": -39.45,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC"
  },
  {
   "backwardYaw": -60.99,
   "yaw": -9.35,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D7BD4D84_D9AD_ED01_41D4_9A00EE0F90FE",
  "this.overlay_F1598A38_D9EF_F701_41EA_5B8BD5EC1788"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "thumbnailUrl": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_t.jpg",
 "label": "IMG_20240413_105556_00_merged",
 "id": "panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -46.53,
   "yaw": 162.77,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425"
  },
  {
   "panorama": "this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 38.15,
   "yaw": -171.37,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3"
  },
  {
   "backwardYaw": 162.97,
   "yaw": 93.92,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D7F51DEF_D9A7_AD1F_41E6_C8B6A932CB2F",
  "this.overlay_D71E7356_D9A4_7501_41CA_A2BA3B99B99F",
  "this.overlay_D7767F64_D9A4_6D01_41EB_2DB637C28DFB",
  "this.overlay_989C8B4B_D9EC_9506_41D8_67523E91CB46"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 105.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CE922FC3_DA30_A395_41C4_48760512DEA7"
},
{
 "thumbnailUrl": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_t.jpg",
 "label": "IMG_20240413_103559_00_merged",
 "id": "panorama_D275C425_D95F_F96F_41DB_79786819224B",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -138.41,
   "yaw": 87.14,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D660D206_D972_B92D_41E4_4CFD8D0736EB"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "thumbnailUrl": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_t.jpg",
 "label": "IMG_20240413_102954_00_merged",
 "id": "panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 27.53,
   "yaw": -152.09,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425"
  },
  {
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -105.55,
   "yaw": 136.71,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761"
  },
  {
   "backwardYaw": 79.47,
   "yaw": -116.17,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000"
  },
  {
   "backwardYaw": 77.7,
   "yaw": -172.45,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A"
  },
  {
   "panorama": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D67A4AF4_D951_AEED_41E0_825659DD4E20",
  "this.overlay_D6070947_D951_AB2B_41E0_301ABE354E28",
  "this.overlay_D787763F_D94E_795C_41D1_F6347CE78809",
  "this.overlay_D6C826FA_D94E_A6E5_41EA_2D59EAF60750",
  "this.overlay_C005AB93_D9AF_B507_41D2_FEB12D8B104B",
  "this.overlay_91077E97_DA6C_AF0F_41B9_2616010A8C1A"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -41.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C94CA2D7_DA30_BDBD_41E0_D2F8718A3441"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -84.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C952C2C8_DA30_BD93_41D4_948A44B2CFAF"
},
{
 "thumbnailUrl": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_t.jpg",
 "label": "IMG_20240413_105802_00_merged",
 "id": "panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -126.21,
   "yaw": -104.08,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884"
  },
  {
   "backwardYaw": 166.22,
   "yaw": 90.68,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D7DA0EB8_D9A4_6F01_418B_BE44CB9B7C08",
  "this.overlay_D71DEC6C_D9A5_9301_41AE_3CACB52C2BD8"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_camera"
},
{
 "thumbnailUrl": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_t.jpg",
 "label": "IMG_20240413_104305_00_merged",
 "id": "panorama_D2448E90_D95F_A925_41E8_B306937D2F35",
 "vfov": 180,
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
   "backwardYaw": -170.78,
   "yaw": -14.08,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D7FD4D76_D9AC_AD01_41E3_2FE554E21798",
  "this.overlay_D73B79EE_D9AC_9501_41E0_6CBF92E2DC36",
  "this.overlay_F24ECCB8_D9E4_9301_41EA_94DA5388555B"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D277598A_D95F_EB25_41E5_0800136A96D4_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 126.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CF33D432_DA30_A4F7_41CE_CA0C2A3998FF"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -158.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CF193033_DA30_BCF5_41E1_BB5B5957E329"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -86.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C89A924A_DA30_BC94_41E4_7D6F62753F55"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -105.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C81451E9_DA30_BF95_41B4_AB660D24CB03"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 140.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C852121A_DA30_BCB7_41D7_CDA37439F0EE"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_camera"
},
{
 "thumbnailUrl": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_t.jpg",
 "label": "IMG_20240413_104440_00_merged",
 "id": "panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 148.22,
   "yaw": -104.96,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC"
  },
  {
   "backwardYaw": 169.76,
   "yaw": 114.88,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC"
  },
  {
   "backwardYaw": 114.29,
   "yaw": 76.22,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D7EBE7F6_D9AC_7D01_41D2_39F422A690F8",
  "this.overlay_D73A4E12_D9AC_AF01_41DD_38FAC2CD0AE2",
  "this.overlay_D70ADA04_D9AD_B701_41C5_73A874528543"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "thumbnailUrl": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_t.jpg",
 "label": "IMG_20240413_102434_00_merged",
 "id": "panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 122.55,
   "yaw": 14.55,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7"
  },
  {
   "backwardYaw": 62.94,
   "yaw": -81.06,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB"
  },
  {
   "backwardYaw": 21.63,
   "yaw": -165.45,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D683BA7A_D957_A9E5_41CB_54043F41C19D",
  "this.overlay_D7E0A16E_D957_FBFD_41C5_506B1B599A70",
  "this.overlay_D63E8956_D957_AB2D_41CA_B191E2115301"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -150.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CE394347_DA30_BC9D_41E6_4C7C3B60344A"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 142.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CEF06403_DA30_A495_41D1_E971CA65FEA0"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -141.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C80EF1F9_DA30_BF75_41E7_C9F87F1309DF"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 29.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C971A2B8_DA30_BDF3_41E4_3B9860A6A839"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 9.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CEA6EFAF_DA30_A3ED_41EA_96DEC0DEA556"
},
{
 "thumbnailUrl": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_t.jpg",
 "label": "IMG_20240413_104515_00_merged",
 "id": "panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -9.35,
   "yaw": -161.03,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877"
  },
  {
   "backwardYaw": 114.88,
   "yaw": 169.76,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D795B981_D9AC_F503_41E9_A8232F68E34E",
  "this.overlay_D72F4B83_D9AC_7506_41B6_B96ED2921098"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -15.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CB5110F3_DA30_BD74_41E1_3F80368CA79F"
},
{
 "thumbnailUrl": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_t.jpg",
 "label": "IMG_20240413_105634_00_merged",
 "id": "panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 93.92,
   "yaw": 162.97,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4"
  },
  {
   "panorama": "this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D72C6C24_D9A4_B301_4192_8AFC474069BF",
  "this.overlay_D76B0E6C_D9A4_EF01_41BC_FC755ECE9235"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 165.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C860A209_DA30_BC95_41E8_1F92AFDEAAB7"
},
{
 "thumbnailUrl": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_t.jpg",
 "label": "IMG_20240413_105157_00_merged",
 "id": "panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -143.03,
   "yaw": -30.3,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D7F330D8_D9A4_B301_41CB_C3481DDDA511"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -153.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CBA3F135_DA30_BCFD_41E1_B6C2B0F9315F"
},
{
 "thumbnailUrl": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_t.jpg",
 "label": "IMG_20240413_105352_00_merged",
 "id": "panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -88.44,
   "yaw": 143.5,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D7F290E4_D9A7_B301_41D7_75FF0D79E89D"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -133.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CEC8B010_DA30_BCB3_41E7_A52199CA100D"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 98.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CF6D0461_DA30_A494_41E2_8918B4DE23FC"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -17.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C87A2209_DA30_BC95_41EA_D3758F465CE5"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 27.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C96232B8_DA30_BDF3_41DB_629B3D0F2BB8"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -176.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CB9CD163_DA30_BC95_41E4_AAE7A8114A80"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -117.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CFB8F483_DA30_A595_41DA_BE24F86444CD"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -19.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CF544067_DA30_BC9D_41A3_8634738049E8"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 18.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CB42A10F_DA30_BCAC_41E9_4D70B9B1B387"
},
{
 "thumbnailUrl": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_t.jpg",
 "label": "IMG_20240413_102914_00_merged",
 "id": "panorama_D2441443_D95F_992B_41D8_3C1223342761",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 29.21,
   "yaw": 74.45,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7"
  },
  {
   "backwardYaw": -62.67,
   "yaw": 21.63,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D277598A_D95F_EB25_41E5_0800136A96D4"
  },
  {
   "panorama": "this.panorama_D275C425_D95F_F96F_41DB_79786819224B",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 110.35,
   "yaw": -149.81,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000"
  },
  {
   "backwardYaw": 105.14,
   "yaw": 121.07,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A"
  },
  {
   "backwardYaw": -98.96,
   "yaw": 73.04,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E"
  },
  {
   "backwardYaw": 136.71,
   "yaw": -105.55,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D65B94FB_D952_9ADB_41EB_0205D9A243A6",
  "this.overlay_D663F4B7_D952_B96B_41E3_B6EED08594D2",
  "this.overlay_D6022F78_D952_A7E5_41E0_E5F6305AA0F2",
  "this.overlay_D6903940_D952_EB25_41C2_1F60FBF9EB10",
  "this.overlay_C9E6996C_D952_6BFD_41C9_9BCF5BB30E27",
  "this.overlay_D7A6891B_D951_AB5B_41E2_6BC17E48EE4A",
  "this.overlay_D69F1082_D951_9925_41C8_D143118029FD",
  "this.overlay_F94107B3_D9DC_9D07_4174_6CD9E2EEE2F4"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D2449E7A_D95E_69E5_41E7_97426A243776_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -13.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CF8924A2_DA30_A597_41B5_940EF6ED14CD"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -151.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C83791BA_DA30_BFF7_41C1_4C8A216A8954"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 99.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CED15412_DA30_A4B7_41E1_B2927434FCCD"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 149.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CE83AFD0_DA30_A3B3_41D8_B5F072761C70"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -165.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CBC951BA_DA30_BFF7_41DD_13B4D8BC0D0E"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 29.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C9E82318_DA30_BCB3_41D3_ED24AF9073D1"
},
{
 "thumbnailUrl": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_t.jpg",
 "label": "IMG_20240413_105021_00_merged",
 "id": "panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D72FB31D_D9A4_B502_41DD_F95CC9D963E7"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "thumbnailUrl": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_t.jpg",
 "label": "IMG_20240413_105307_00_merged",
 "id": "panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 115.47,
   "yaw": 77.7,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB"
  },
  {
   "backwardYaw": 143.5,
   "yaw": -88.44,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D7FC3418_D9A4_9301_41E9_4520FC82E8DE",
  "this.overlay_D70EEE5F_D9A4_6F3E_41CB_780294E06498"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -152.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CB8A516C_DA30_BF6C_41D3_F94D646DB66E"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -100.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CBFE118A_DA30_BF94_41E6_8956AC0BA757"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -36.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C8FB4268_DA30_BC93_41B1_1C62BD652B01"
},
{
 "thumbnailUrl": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_t.jpg",
 "label": "IMG_20240413_102548_00_merged",
 "id": "panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -81.06,
   "yaw": 62.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC"
  },
  {
   "backwardYaw": -7.88,
   "yaw": -161.91,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D7E3FC3F_D956_A95B_41E6_E8D692A00205",
  "this.overlay_D641B5D1_D956_FB27_41EA_5D37729EF2B4"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 96.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C8AAB24A_DA30_BC94_41E3_25F6C75CAFBE"
},
{
 "thumbnailUrl": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_t.jpg",
 "label": "IMG_20240413_103230_00_merged",
 "id": "panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 160.02,
   "yaw": 47.3,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425"
  },
  {
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 121.07,
   "yaw": 105.14,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761"
  },
  {
   "backwardYaw": 167.99,
   "yaw": 54.68,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000"
  },
  {
   "backwardYaw": 164.45,
   "yaw": 135.01,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E"
  },
  {
   "backwardYaw": -172.45,
   "yaw": 77.7,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D67A10DF_D971_FADB_41E3_44C2E76529A2",
  "this.overlay_D605BDC1_D971_AB27_41E6_178B052D8899",
  "this.overlay_D6EE1B6D_D971_AFFF_41E3_C8C608512DC2",
  "this.overlay_D6AFDA0A_D972_6925_41C0_8F44E954973A",
  "this.overlay_C933F26D_D972_99FF_41E1_4DFC0390945E",
  "this.overlay_F9CF8A01_D9DB_9703_41EB_075F114A2316"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_camera"
},
{
 "thumbnailUrl": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_t.jpg",
 "label": "IMG_20240413_103110_00_merged",
 "id": "panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -149.81,
   "yaw": 110.35,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761"
  },
  {
   "backwardYaw": 54.68,
   "yaw": 167.99,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A"
  },
  {
   "panorama": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -116.17,
   "yaw": 79.47,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D64FD51E_D94E_9B5D_41E1_F7C14C7B25F9",
  "this.overlay_D62E9350_D94E_9F25_41E5_2FDB4C31578C",
  "this.overlay_D6C593F1_D94E_7EE7_41E4_662283B1403D",
  "this.overlay_D6B54584_D94F_9B2D_41AA_E4C28002A036",
  "this.overlay_C9E9798A_D94F_EB25_41DC_DF812478C79A",
  "this.overlay_C34580D1_D9AB_F303_41E2_B8DCC210075C",
  "this.overlay_C5B58AFD_D9A4_B703_41E4_BB6AAE4BCEEB"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 21.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CBADE529_DA30_A495_41D6_78815B5ED66F"
},
{
 "thumbnailUrl": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_t.jpg",
 "label": "IMG_20240413_105836_00_merged",
 "id": "panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 95.4,
   "yaw": 46.4,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF"
  },
  {
   "backwardYaw": -104.08,
   "yaw": -126.21,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84"
  },
  {
   "panorama": "this.panorama_D275C425_D95F_F96F_41DB_79786819224B",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D7F37C3F_D9A5_B37F_41E9_FAC205C365C1",
  "this.overlay_D7026F2F_D9A5_ED1F_41EA_B864AE1A82DC",
  "this.overlay_9BFAC175_D9EC_9503_41D6_7B5EA288EF43"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "thumbnailUrl": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_t.jpg",
 "label": "IMG_20240413_104233_00_merged",
 "id": "panorama_D2749949_D95F_AB27_41E5_D00915CF7477",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -14.08,
   "yaw": -170.78,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2448E90_D95F_A925_41E8_B306937D2F35"
  },
  {
   "backwardYaw": -39.16,
   "yaw": 155.6,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A"
  },
  {
   "backwardYaw": -92.57,
   "yaw": 99.83,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5"
  },
  {
   "panorama": "this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -9.35,
   "yaw": -60.99,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D7A182C3_D9AC_9707_41D2_BF5DB8D66F78",
  "this.overlay_D7D0820E_D9AC_B701_41DA_0C0C0440FDAE",
  "this.overlay_D7059272_D9AC_9701_41C0_CA6D80C6B127",
  "this.overlay_D74E2E3F_D9AC_EF7F_41AC_6F74CF32AFF8",
  "this.overlay_D6CE016E_D9AC_9501_41E2_E5376BF39190"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -104.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C823D1D2_DA30_BFB7_41C2_11E3AC626084"
},
{
 "thumbnailUrl": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_t.jpg",
 "label": "IMG_20240413_103450_00_merged",
 "id": "panorama_D277598A_D95F_EB25_41E5_0800136A96D4",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D275C425_D95F_F96F_41DB_79786819224B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -74.27,
   "yaw": -37.98,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99"
  },
  {
   "panorama": "this.panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 21.63,
   "yaw": -62.67,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D657D805_D973_E92F_41C0_3A6BD0763878",
  "this.overlay_D6115758_D973_A725_41E2_2E3BC7716E7C",
  "this.overlay_D6D5F4E2_D973_9AE5_41E7_AEB5F99CA11E",
  "this.overlay_C94DC638_D972_9965_41E0_D698ABED5444",
  "this.overlay_FD829770_D9E7_BD01_41D2_654699B58F88"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 74.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CBF0B180_DA30_BF93_41DD_60D9FE86C47D"
},
{
 "thumbnailUrl": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_t.jpg",
 "label": "IMG_20240413_104946_00_merged",
 "id": "panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -74.57,
   "yaw": -166.34,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C"
  },
  {
   "backwardYaw": -30.3,
   "yaw": -143.03,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33"
  },
  {
   "backwardYaw": -94.63,
   "yaw": -81.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B"
  },
  {
   "backwardYaw": -82.14,
   "yaw": -83.71,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25"
  },
  {
   "panorama": "this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D7C790D0_D9A5_B301_41E5_6CDC8471F7A8",
  "this.overlay_D7064A6F_D9A5_B71F_41E0_3F3BD68A4C88",
  "this.overlay_D76CD573_D9A5_9D07_41E3_9ABF5406F7B7",
  "this.overlay_D7535325_D9A4_7503_41E5_690714D6AE13",
  "this.overlay_D6935DE8_D9A4_6D01_41E3_4C1058EC9A36",
  "this.overlay_E0EDE0BC_D9E7_9301_41E5_DC6B0F61BECF"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 14.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CEED6FF0_DA30_A373_41BA_6547329DC3D1"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -103.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CB4FF11B_DA30_BCB4_418C_52C98E6E8C72"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -96.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CEB6C3D4_DA30_A3B3_41DA_F2BFA9EF2F6F"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -83.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C8B80238_DA30_BCF4_41E6_B1E9D2D7016C"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -12.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CB6EC0DD_DA30_BDAD_41DE_F540D4A2B8D7"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D2446447_D95F_992B_41CD_4D904B227F99_camera"
},
{
 "items": [
  {
   "media": "this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_camera"
  },
  {
   "media": "this.panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_camera"
  },
  {
   "media": "this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_camera"
  },
  {
   "media": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_camera"
  },
  {
   "media": "this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_camera"
  },
  {
   "media": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761_camera"
  },
  {
   "media": "this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_camera"
  },
  {
   "media": "this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_camera"
  },
  {
   "media": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425_camera"
  },
  {
   "media": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_camera"
  },
  {
   "media": "this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_camera"
  },
  {
   "media": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99_camera"
  },
  {
   "media": "this.panorama_D277598A_D95F_EB25_41E5_0800136A96D4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D277598A_D95F_EB25_41E5_0800136A96D4_camera"
  },
  {
   "media": "this.panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_camera"
  },
  {
   "media": "this.panorama_D275C425_D95F_F96F_41DB_79786819224B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D275C425_D95F_F96F_41DB_79786819224B_camera"
  },
  {
   "media": "this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_camera"
  },
  {
   "media": "this.panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_camera"
  },
  {
   "media": "this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_camera"
  },
  {
   "media": "this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477_camera"
  },
  {
   "media": "this.panorama_D2448E90_D95F_A925_41E8_B306937D2F35",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2448E90_D95F_A925_41E8_B306937D2F35_camera"
  },
  {
   "media": "this.panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_camera"
  },
  {
   "media": "this.panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_camera"
  },
  {
   "media": "this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_camera"
  },
  {
   "media": "this.panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_camera"
  },
  {
   "media": "this.panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_camera"
  },
  {
   "media": "this.panorama_D2449E7A_D95E_69E5_41E7_97426A243776",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2449E7A_D95E_69E5_41E7_97426A243776_camera"
  },
  {
   "media": "this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_camera"
  },
  {
   "media": "this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_camera"
  },
  {
   "media": "this.panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_camera"
  },
  {
   "media": "this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_camera"
  },
  {
   "media": "this.panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_camera"
  },
  {
   "media": "this.panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_camera"
  },
  {
   "media": "this.panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_camera"
  },
  {
   "media": "this.panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_camera"
  },
  {
   "media": "this.panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_camera"
  },
  {
   "media": "this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_camera"
  },
  {
   "media": "this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_camera"
  },
  {
   "media": "this.panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_camera"
  },
  {
   "media": "this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_camera"
  },
  {
   "media": "this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_camera"
  },
  {
   "media": "this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -36.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CE46C3C4_DA30_A393_41E5_29DAA9043DC1"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -10.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CF1CD442_DA30_A497_41CB_446A79BD6C22"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -65.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C8D57279_DA30_BD74_41E4_EDD75950E530"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -80.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CBD021A2_DA30_BF97_41CC_F3CA2C47EFB8"
},
{
 "thumbnailUrl": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_t.jpg",
 "label": "IMG_20240413_103151_00_merged",
 "id": "panorama_D2713441_D95F_B927_41E1_6B8B0A550425",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 162.77,
   "yaw": -46.53,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4"
  },
  {
   "panorama": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 47.3,
   "yaw": 160.02,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A"
  },
  {
   "backwardYaw": 90.09,
   "yaw": -95.52,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3"
  },
  {
   "backwardYaw": -150.81,
   "yaw": 111.11,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E"
  },
  {
   "backwardYaw": -152.09,
   "yaw": 27.53,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D643BF74_D94F_A7ED_419F_7869859FA013",
  "this.overlay_D63A9932_D94E_6B65_41E1_7DB32FC00B7E",
  "this.overlay_D6D50646_D94E_792D_41D9_28EC467B6D37",
  "this.overlay_D69A35D6_D94E_9B2D_41C6_0F131874907B",
  "this.overlay_C91B68D3_D94E_A92B_41E1_0DC9408B8294",
  "this.overlay_D781005E_D94E_99DD_41D0_D21E5C32CA59",
  "this.overlay_D7AA6808_D971_A925_41DF_BF8A37505E59",
  "this.overlay_C68680AE_D9DF_9301_41AC_3E2B30B5606D"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -102.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C98E52F8_DA30_BD73_4195_5B09A4469E29"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 126.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C99D92F8_DA30_BD73_41E0_FD9B25108B70"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -17.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C9271298_DA30_BDB3_41BE_D66B4FD77E3C"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_camera"
},
{
 "class": "MediaAudio",
 "audio": {
  "mp3Url": "media/audio_97B8ABA2_D9DD_9501_41D7_2EB760D81D21.mp3",
  "oggUrl": "media/audio_97B8ABA2_D9DD_9501_41D7_2EB760D81D21.ogg",
  "class": "AudioResource"
 },
 "autoplay": true,
 "id": "audio_97B8ABA2_D9DD_9501_41D7_2EB760D81D21",
 "data": {
  "label": "today-is-the-day-mark-july-main-version-18477-02-21"
 }
},
{
 "thumbnailUrl": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_t.jpg",
 "label": "IMG_20240413_105054_00_merged",
 "id": "panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -166.34,
   "yaw": -74.57,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D7EF886B_D9A4_F307_41C4_4C0F08E59D2F"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -100.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CBA5D516_DA30_A4BF_41D3_23AC4F50A862"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -43.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CE644395_DA30_A3BD_41DA_2225288BD9DD"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D275C425_D95F_F96F_41DB_79786819224B_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 63.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CF64105D_DA30_BCAD_41D0_68E3B5DDEA76"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D2441443_D95F_992B_41D8_3C1223342761_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -57.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CF4F9473_DA30_A575_41BD_E826AB9F5F50"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 172.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CF5F8473_DA30_A575_41D7_1912DD11D609"
},
{
 "thumbnailUrl": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_t.jpg",
 "label": "IMG_20240413_104126_00_merged",
 "id": "panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 79.17,
   "yaw": -17.91,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D7F1E22E_D9AD_9701_41CB_0B6E77C54741"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -89.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CEDF5000_DA30_BC93_41B5_DA087F597000"
},
{
 "thumbnailUrl": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_t.jpg",
 "label": "IMG_20240413_104337_00_merged",
 "id": "panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 155.6,
   "yaw": -39.16,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D7F748D5_D9AF_9303_41D3_F96D0874DF84",
  "this.overlay_D7371697_D9AF_FF0F_41E6_360EF1287467"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -44.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CB97F15B_DA30_BCB5_41E3_8DBF820061E1"
},
{
 "thumbnailUrl": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_t.jpg",
 "label": "IMG_20240413_104547_00_merged",
 "id": "panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -161.03,
   "yaw": -9.35,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC"
  },
  {
   "backwardYaw": 76.22,
   "yaw": 114.29,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D7C8DB83_D9AD_F507_41E4_E82AFF50F7D4",
  "this.overlay_D735DB2F_D9AD_951F_419A_6A4E0F5375C5"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -58.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CB64E0DD_DA30_BDAD_41E6_0B6692806A7A"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 98.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CEC2B424_DA30_A493_41E2_ADFEB6405F7A"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 133.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C801A1EB_DA30_BF95_41D2_079C81DE9181"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D2749949_D95F_AB27_41E5_D00915CF7477_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 97.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CEFDDFDF_DA30_A3AC_41EA_209D034E918E"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 112.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CBAAA521_DA30_A495_41E7_F956568C8BD8"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -158.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CFA82483_DA30_A595_41E9_868DF81389FC"
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "displayPlaybackBar": true,
 "mouseControlMode": "drag_acceleration",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "gyroscopeVerticalDraggingEnabled": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_camera"
},
{
 "thumbnailUrl": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_t.jpg",
 "label": "IMG_20240413_105720_00_merged",
 "id": "panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -165.45,
   "yaw": 21.63,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC"
  },
  {
   "backwardYaw": 90.68,
   "yaw": 166.22,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84"
  },
  {
   "backwardYaw": 46.4,
   "yaw": 95.4,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D7CDDAF8_D9A4_9701_41E6_CEF66AE7B19C",
  "this.overlay_D70A278A_D9A4_BD01_41C6_95ABBEE313C5",
  "this.overlay_D76A440F_D9A4_931F_41EA_A1CBAAEB1D4A"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_camera"
},
{
 "thumbnailUrl": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_t.jpg",
 "label": "IMG_20240413_103417_00_merged",
 "id": "panorama_D2446447_D95F_992B_41CD_4D904B227F99",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 138.48,
   "yaw": 122.95,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F"
  },
  {
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -37.98,
   "yaw": -74.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D277598A_D95F_EB25_41E5_0800136A96D4"
  },
  {
   "panorama": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 87.14,
   "yaw": -138.41,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D275C425_D95F_F96F_41DB_79786819224B"
  },
  {
   "panorama": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -53.03,
   "yaw": 3.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E"
  },
  {
   "backwardYaw": 77.1,
   "yaw": -165.16,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E"
  }
 ],
 "partial": false,
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
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 30.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CF0BE03F_DA30_BCEC_41DB_195B04989945"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -68.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CBB68123_DA30_BC94_41D7_3355F22C99F1"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D2448E90_D95F_A925_41E8_B306937D2F35_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D2713441_D95F_B927_41E1_6B8B0A550425_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 170.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C84F7235_DA30_BCFC_41CE_E3DDF7B8ED7A"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 85.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CEF36FD4_DA30_A3B3_41E6_CE00400310E0"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -92.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C9ADC2E7_DA30_BD9D_41E7_0AEBA625AF00"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -125.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CF7BE04F_DA30_BCAD_41E7_519D9CB7726F"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -89.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C901B2B2_DA30_BDF7_41E2_00F8348C65DB"
},
{
 "thumbnailUrl": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_t.jpg",
 "label": "IMG_20240413_102735_00_merged",
 "id": "panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 14.55,
   "yaw": 122.55,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC"
  },
  {
   "backwardYaw": 28.42,
   "yaw": -150.79,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC"
  },
  {
   "backwardYaw": 75.33,
   "yaw": 26.06,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E"
  },
  {
   "backwardYaw": 111.63,
   "yaw": -67.19,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2449E7A_D95E_69E5_41E7_97426A243776"
  },
  {
   "backwardYaw": 74.45,
   "yaw": 29.21,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D7985B88_D956_6F25_41CF_7F0AA858E1AF",
  "this.overlay_D64A0F8B_D951_A73B_41DC_62A8B050A941",
  "this.overlay_D663B013_D951_992B_41E4_481907942BA0",
  "this.overlay_D6FABBAC_D951_EF7C_41C0_E94B5DE51B2B",
  "this.overlay_C91D87D1_D951_A727_41E8_54124820CB77"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "thumbnailUrl": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_t.jpg",
 "label": "IMG_20240413_104836_00_merged",
 "id": "panorama_D2719E7B_D95E_69DB_41DA_B678F555831B",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -80.47,
   "yaw": 96.29,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25"
  },
  {
   "backwardYaw": -81.94,
   "yaw": -94.63,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E"
  },
  {
   "backwardYaw": -53.91,
   "yaw": 143.79,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D781FBA4_D9AB_9501_41E8_65D5A2FAA42E",
  "this.overlay_D70FD8CA_D9A4_9301_41C7_6AE0F427CBA8",
  "this.overlay_D6AC0B36_D9A4_9501_41E7_5010B104B5AC",
  "this.overlay_D69733B8_D9A4_F501_41D6_2BCCD46635E0",
  "this.overlay_D64CCE33_D9A4_AF07_41D4_4902293988A0"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -69.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CE1BD368_DA30_BC93_41E4_1A312E1E2561"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 75.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C94342D7_DA30_BDBD_41DE_6A4C5971F57D"
},
{
 "thumbnailUrl": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_t.jpg",
 "label": "IMG_20240413_104912_00_merged",
 "id": "panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 96.29,
   "yaw": -80.47,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B"
  },
  {
   "backwardYaw": -83.71,
   "yaw": -82.14,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E"
  },
  {
   "panorama": "this.panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D73DFF18_D9A5_AD01_41E6_18EA11A7F6FB",
  "this.overlay_D77BF730_D9A5_9D01_41DD_C70BCDBE4625",
  "this.overlay_EEC794E2_D9FB_F301_41DD_810C7E3018F8"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 140.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C9C83338_DA30_BCF3_41B7_82EE8FFB18EC"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -74.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CE0BD385_DA30_A39D_41D6_EE52B475B15C"
},
{
 "thumbnailUrl": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_t.jpg",
 "label": "IMG_20240413_105518_00_merged",
 "id": "panorama_D270695C_D95E_EBDD_41E6_6F31051946D3",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -95.52,
   "yaw": 90.09,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425"
  },
  {
   "backwardYaw": -171.37,
   "yaw": 38.15,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D7CC27B9_D9A7_FD03_41E8_10AADDC84561",
  "this.overlay_D71AB6F6_D9A7_9F01_41D5_29CA8A045D1F"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "thumbnailUrl": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_t.jpg",
 "label": "IMG_20240413_104408_00_merged",
 "id": "panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 99.83,
   "yaw": -92.57,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D794B279_D9AF_B703_41DC_9EA09BCC4236"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "thumbnailUrl": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_t.jpg",
 "label": "IMG_20240413_104050_00_merged",
 "id": "panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -104.96,
   "yaw": 148.22,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C"
  },
  {
   "backwardYaw": -150.79,
   "yaw": 28.42,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7"
  },
  {
   "backwardYaw": -17.91,
   "yaw": 79.17,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627"
  },
  {
   "backwardYaw": -39.45,
   "yaw": -37.98,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D7E567C4_D9AC_FD01_41B3_3289B38546D0",
  "this.overlay_D7137BC5_D9AC_9503_41D7_07C03F2F4CF4",
  "this.overlay_D7702493_D9AC_B307_41E9_0F9EBE291DD9",
  "this.overlay_D68B67BC_D9AC_9D02_41EA_B56706116FD7"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "thumbnailUrl": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_t.jpg",
 "label": "IMG_20240413_103522_00_merged",
 "id": "panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -165.16,
   "yaw": 77.1,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D6513DF7_D972_EAEB_41B3_C4BDC4FC08BD"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 87.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C85C722A_DA30_BC97_41E0_4E53FFFF4B9B"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_camera"
},
{
 "thumbnailUrl": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_t.jpg",
 "label": "IMG_20240413_102842_00_merged",
 "id": "panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 111.11,
   "yaw": -150.81,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425"
  },
  {
   "panorama": "this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 26.06,
   "yaw": 75.33,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7"
  },
  {
   "panorama": "this.panorama_D277598A_D95F_EB25_41E5_0800136A96D4",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 73.04,
   "yaw": -98.96,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761"
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
   "backwardYaw": 135.01,
   "yaw": 164.45,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A"
  },
  {
   "panorama": "this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 3.61,
   "yaw": -53.03,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99"
  }
 ],
 "partial": false,
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
  "this.overlay_96EA5B16_DA65_9501_41D4_9EB1A50C1865"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 8.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CE81E403_DA30_A495_41C3_BB995976147B"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -102.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CBEB7196_DA30_BFBF_41D2_8539E6C10090"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 162.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_C9D82328_DA30_BC93_41A9_24EBAE3C3BEB"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -106.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CBA8214C_DA30_BC93_41D4_0BA78B615A96"
},
{
 "thumbnailUrl": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_t.jpg",
 "label": "IMG_20240413_104630_00_merged",
 "id": "panorama_D2449E7A_D95E_69E5_41E7_97426A243776",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -67.19,
   "yaw": 111.63,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7"
  },
  {
   "backwardYaw": -158.37,
   "yaw": 83.89,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D7245DE8_D9AC_AD02_41C7_B85FB2A695B3",
  "this.overlay_D749B9E7_D9AC_950F_41CE_6FF45EC85C10"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 81.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CE747385_DA30_A39D_41E7_177FF4C07F48"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 91.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CF3F5013_DA30_BCB5_41E6_BCB102F642BA"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 105.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CF291023_DA30_BC94_41C3_1E2F6D416F48"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 36.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CF23E432_DA30_A4F7_41E0_92AF5A568FCF"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 13.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CBDD61AE_DA30_BFEF_41B1_AEDB637E98D0"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 14.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_CF7D5461_DA30_A494_41CC_E96C70755363"
},
{
 "paddingBottom": 0,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "transparencyActive": true,
 "maxHeight": 58,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "verticalAlign": "middle",
 "class": "IconButton",
 "width": 58,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "propagateClick": true,
 "cursor": "hand",
 "borderRadius": 0,
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "transitionDuration": 500,
 "id": "MainViewer",
 "left": 0,
 "toolTipBackgroundColor": "#000000",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowColor": "#000000",
 "width": "100%",
 "playbackBarBorderRadius": 0,
 "class": "ViewerArea",
 "progressRight": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadBorderSize": 0,
 "paddingLeft": 0,
 "toolTipFontWeight": "normal",
 "progressOpacity": 1,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "transitionMode": "blending",
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipShadowBlurRadius": 3,
 "toolTipPaddingRight": 10,
 "borderSize": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBorderColor": "#767676",
 "height": "100%",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadow": true,
 "toolTipPaddingBottom": 7,
 "firstTransitionDuration": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBorderRadius": 3,
 "progressBottom": 55,
 "toolTipOpacity": 0.5,
 "progressBackgroundColorDirection": "vertical",
 "progressHeight": 6,
 "playbackBarBottom": 5,
 "progressBackgroundOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBorderColor": "#FFFFFF",
 "playbackBarOpacity": 1,
 "playbackBarLeft": 0,
 "paddingRight": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingTop": 7,
 "playbackBarHeadHeight": 15,
 "progressBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressLeft": 0,
 "progressBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "minHeight": 50,
 "playbackBarHeadWidth": 6,
 "top": 0,
 "progressBorderRadius": 0,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderSize": 1,
 "toolTipTextShadowBlurRadius": 3,
 "shadow": false,
 "displayTooltipInTouchScreens": true,
 "paddingTop": 0,
 "minWidth": 100,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipFontFamily": "Georgia",
 "toolTipShadowColor": "#333333",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderSize": 6,
 "toolTipFontSize": 13,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 0,
 "toolTipDisplayTime": 600,
 "playbackBarBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBorderRadius": 0,
 "data": {
  "name": "Main Viewer"
 },
 "toolTipPaddingLeft": 10,
 "progressBarBorderRadius": 0,
 "propagateClick": true,
 "borderRadius": 0
},
{
 "paddingBottom": 0,
 "height": 641,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "verticalAlign": "top",
 "layout": "absolute",
 "right": "0%",
 "contentOpaque": false,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "top": "0%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "overflow": "scroll",
 "paddingRight": 0,
 "propagateClick": true,
 "borderRadius": 0,
 "data": {
  "name": "--SETTINGS"
 },
 "gap": 10
},
{
 "paddingBottom": 0,
 "layout": "absolute",
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "verticalAlign": "top",
 "right": "0%",
 "contentOpaque": false,
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "class": "Container",
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.64,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "bottom": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "height": 118,
 "horizontalAlign": "left",
 "overflow": "visible",
 "paddingRight": 0,
 "propagateClick": true,
 "borderRadius": 0,
 "data": {
  "name": "--MENU"
 },
 "gap": 10
},
{
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "verticalAlign": "top",
 "right": "0%",
 "contentOpaque": false,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.6,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "scrollBarColor": "#000000",
 "creationPolicy": "inAdvance",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "overflow": "scroll",
 "paddingRight": 0,
 "propagateClick": true,
 "visible": false,
 "data": {
  "name": "--INFO photo"
 },
 "gap": 10
},
{
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "verticalAlign": "top",
 "right": "0%",
 "contentOpaque": false,
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.6,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "scrollBarColor": "#000000",
 "creationPolicy": "inAdvance",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "overflow": "scroll",
 "paddingRight": 0,
 "propagateClick": true,
 "visible": false,
 "data": {
  "name": "--INFO photoalbum"
 },
 "gap": 10
},
{
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "verticalAlign": "top",
 "right": "0%",
 "contentOpaque": false,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.6,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "scrollBarColor": "#000000",
 "creationPolicy": "inAdvance",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "overflow": "scroll",
 "paddingRight": 0,
 "propagateClick": true,
 "visible": false,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "gap": 10
},
{
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "verticalAlign": "top",
 "right": "0%",
 "contentOpaque": false,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.6,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "overflow": "scroll",
 "paddingRight": 0,
 "propagateClick": true,
 "data": {
  "name": "--LOCATION"
 },
 "gap": 10
},
{
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "verticalAlign": "top",
 "right": "0%",
 "contentOpaque": false,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.6,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "scrollBarColor": "#000000",
 "creationPolicy": "inAdvance",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "overflow": "scroll",
 "paddingRight": 0,
 "propagateClick": true,
 "visible": false,
 "data": {
  "name": "--FLOORPLAN"
 },
 "gap": 10
},
{
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "verticalAlign": "top",
 "right": "0%",
 "contentOpaque": false,
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.6,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "scrollBarColor": "#000000",
 "creationPolicy": "inAdvance",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "overflow": "scroll",
 "paddingRight": 0,
 "propagateClick": true,
 "visible": false,
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "gap": 10
},
{
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "verticalAlign": "top",
 "right": "0%",
 "contentOpaque": false,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.6,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "scrollBarColor": "#000000",
 "creationPolicy": "inAdvance",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "overflow": "scroll",
 "paddingRight": 0,
 "propagateClick": true,
 "visible": false,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "gap": 10
},
{
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "verticalAlign": "top",
 "right": "0%",
 "contentOpaque": false,
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.6,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "scrollBarColor": "#04A3E1",
 "creationPolicy": "inAdvance",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "overflow": "scroll",
 "paddingRight": 0,
 "propagateClick": true,
 "visible": false,
 "data": {
  "name": "--REALTOR"
 },
 "gap": 10
},
{
 "paddingBottom": 0,
 "maxWidth": 1258,
 "id": "Image_B44E6FBD_BAA2_0E15_41E1_F18F1E555CBE",
 "left": "0%",
 "maxHeight": 953,
 "verticalAlign": "middle",
 "class": "Image",
 "url": "skin/Image_B44E6FBD_BAA2_0E15_41E1_F18F1E555CBE.png",
 "width": "5.398%",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "click": "this.openLink('http://NicholasC.JohnLScott.com', '_blank')",
 "scaleMode": "fit_inside",
 "height": "7.606%",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "propagateClick": false,
 "visible": false,
 "cursor": "hand",
 "borderRadius": 0,
 "data": {
  "name": "Image4523"
 }
},
{
 "paddingBottom": 0,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "transparencyActive": true,
 "maxHeight": 58,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "verticalAlign": "middle",
 "class": "IconButton",
 "width": 58,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "propagateClick": true,
 "cursor": "hand",
 "borderRadius": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "maps": [
  {
   "hfov": 21.16,
   "yaw": 16.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.21
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88DB556B_D9E4_FD07_41E0_180769246820",
   "pitch": -5.21,
   "yaw": 16.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.16,
   "distance": 100
  }
 ],
 "id": "overlay_D6668017_D956_992B_41A1_DF3FFFDCF50C",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.85,
   "yaw": -7.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.11
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88D8856B_D9E4_FD07_41E7_856D250C041B",
   "pitch": -11.11,
   "yaw": -7.88,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.85,
   "distance": 100
  }
 ],
 "id": "overlay_D6F1AC0F_D956_A93B_41E0_64849DD7D4E1",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB, this.camera_C9372291_DA30_BDB4_41D1_95AF1D03BC02); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.78,
   "yaw": 138.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88CDE576_D9E4_FD01_4194_3BF2C41C0F31",
   "pitch": -12,
   "yaw": 138.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.78,
   "distance": 100
  }
 ],
 "id": "overlay_D645508F_D972_993B_41C5_F18245B8B18F",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2446447_D95F_992B_41CD_4D904B227F99, this.camera_CFF904B2_DA30_A5F7_41D7_DAD3FF24E895); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 21.21,
   "yaw": -158.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.35
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8D7407FD_DA6C_BD03_41D6_6A9A48FD3B04",
   "pitch": 3.35,
   "yaw": -158.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.21,
   "distance": 100
  }
 ],
 "id": "overlay_D7E97B5C_D9AC_B501_41E4_21E2611AEEDE",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2449E7A_D95E_69E5_41E7_97426A243776, this.camera_CEB6C3D4_DA30_A3B3_41DA_F2BFA9EF2F6F); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 16.27,
   "yaw": -53.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.03
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8D7587FD_DA6C_BD03_41D9_32A0B3227006",
   "pitch": -40.03,
   "yaw": -53.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.27,
   "distance": 100
  }
 ],
 "id": "overlay_D7207717_D9AC_9D0F_41E7_577B241C7E02",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B, this.camera_CE46C3C4_DA30_A393_41E5_29DAA9043DC1); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 18.45,
   "yaw": 115.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.7
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88FE7586_D9E4_FD01_41E4_CA48AF6F7FC6",
   "pitch": -29.7,
   "yaw": 115.47,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.45,
   "distance": 100
  }
 ],
 "id": "overlay_D71AA6F3_D9AC_7F07_41DB_BBC92204CDA4",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED, this.camera_CE55E3B7_DA30_A3FD_41B7_C74C91AC58C4); this.mainPlayList.set('selectedIndex', 33)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 16.92,
   "yaw": -55.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.47
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8D7547FD_DA6C_BD03_41E0_B196685C698C",
   "pitch": -1.47,
   "yaw": -55.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.92,
   "distance": 100
  }
 ],
 "id": "overlay_9359013A_DA64_9501_41E1_413334E81E17",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 17.32,
   "yaw": 115.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.26
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8D8AD7FD_DA6C_BD03_41E9_7C3CAEE0807B",
   "pitch": -8.26,
   "yaw": 115.07,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.32,
   "distance": 100
  }
 ],
 "id": "overlay_901AD77A_DA64_9D01_41D8_909D144D58C4",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 34)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.78,
   "yaw": -39.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88C6057D_D9E4_FD03_41EA_33F05939B52D",
   "pitch": -12,
   "yaw": -39.45,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.78,
   "distance": 100
  }
 ],
 "id": "overlay_D7BD4D84_D9AD_ED01_41D4_9A00EE0F90FE",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC, this.camera_CEF06403_DA30_A495_41D1_E971CA65FEA0); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.22,
   "yaw": -9.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.9
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8D7D77ED_DA6C_BD03_41D1_3390F5A29F66",
   "pitch": -17.9,
   "yaw": -9.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.22,
   "distance": 100
  }
 ],
 "id": "overlay_F1598A38_D9EF_F701_41EA_5B8BD5EC1788",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477, this.camera_CEE06412_DA30_A4B7_41C8_B2FD6E6E8AD9); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.8,
   "yaw": 93.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.7
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88F7158F_D9E4_FD1F_41DA_7E9DA08D31BE",
   "pitch": -11.7,
   "yaw": 93.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.8,
   "distance": 100
  }
 ],
 "id": "overlay_D7F51DEF_D9A7_AD1F_41E6_C8B6A932CB2F",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2, this.camera_C87A2209_DA30_BC95_41EA_D3758F465CE5); this.mainPlayList.set('selectedIndex', 37)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.96,
   "yaw": -171.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.34
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88F4A58F_D9E4_FD1F_41C2_421607C84F54",
   "pitch": -9.34,
   "yaw": -171.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.96,
   "distance": 100
  }
 ],
 "id": "overlay_D71E7356_D9A4_7501_41CA_A2BA3B99B99F",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3, this.camera_C80EF1F9_DA30_BF75_41E7_C9F87F1309DF); this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 18.69,
   "yaw": 107.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.3
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88F4258F_D9E4_FD1F_41D4_39ACBD81F633",
   "pitch": 0.3,
   "yaw": 107.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.69,
   "distance": 100
  }
 ],
 "id": "overlay_D7767F64_D9A4_6D01_41EB_2DB637C28DFB",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 18.37,
   "yaw": 162.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_1_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.62
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88F4658F_D9E4_FD1F_41CB_A06EE8EDF8D2",
   "pitch": -10.62,
   "yaw": 162.77,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.37,
   "distance": 100
  }
 ],
 "id": "overlay_989C8B4B_D9EC_9506_41D8_67523E91CB46",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_C801A1EB_DA30_BF95_41D2_079C81DE9181); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.15,
   "yaw": 87.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.49
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88C9457C_D9E4_FD01_41E7_922995C00D45",
   "pitch": -18.49,
   "yaw": 87.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.15,
   "distance": 100
  }
 ],
 "id": "overlay_D660D206_D972_B92D_41E4_4CFD8D0736EB",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2446447_D95F_992B_41CD_4D904B227F99, this.camera_C8C55288_DA30_BD93_41E7_635556F7E044); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 18.67,
   "yaw": -116.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.52
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8D62E7DD_DA6C_BD03_41E0_8B39DD9F8850",
   "pitch": -28.52,
   "yaw": -116.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.67,
   "distance": 100
  }
 ],
 "id": "overlay_D67A4AF4_D951_AEED_41E0_825659DD4E20",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000, this.camera_CBFE118A_DA30_BF94_41E6_8956AC0BA757); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 12.18,
   "yaw": 153.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.67
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88D2E56E_D9E4_FD01_41E6_1FA2DC2CB285",
   "pitch": -1.67,
   "yaw": 153.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.18,
   "distance": 100
  }
 ],
 "id": "overlay_D6070947_D951_AB2B_41E0_301ABE354E28",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 19.97,
   "yaw": 136.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.96
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88D2256E_D9E4_FD01_41E8_A6BE2F15EC49",
   "pitch": -19.96,
   "yaw": 136.71,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.97,
   "distance": 100
  }
 ],
 "id": "overlay_D787763F_D94E_795C_41D1_F6347CE78809",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_CBF0B180_DA30_BF93_41DD_60D9FE86C47D); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 15.71,
   "yaw": -152.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.88
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8D63C7DD_DA6C_BD03_41D8_F8239B99E580",
   "pitch": -24.88,
   "yaw": -152.09,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.71,
   "distance": 100
  }
 ],
 "id": "overlay_D6C826FA_D94E_A6E5_41EA_2D59EAF60750",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_CB8A516C_DA30_BF6C_41D3_F94D646DB66E); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 21.23,
   "yaw": 123.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_1_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.26
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88D3856E_D9E4_FD1A_41E9_A239707DE4A2",
   "pitch": -2.26,
   "yaw": 123.73,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.23,
   "distance": 100
  }
 ],
 "id": "overlay_C005AB93_D9AF_B507_41D2_FEB12D8B104B",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 17.23,
   "yaw": -172.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0_HS_5_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8D6367DD_DA6C_BD03_41E7_2C681BF39EF9",
   "pitch": -6,
   "yaw": -172.45,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.23,
   "distance": 100
  }
 ],
 "id": "overlay_91077E97_DA6C_AF0F_41B9_2616010A8C1A",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A, this.camera_CBEB7196_DA30_BFBF_41D2_8539E6C10090); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 19.82,
   "yaw": 90.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.14
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88F3E595_D9E4_FD03_41CD_63F707AA871A",
   "pitch": -21.14,
   "yaw": 90.68,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.82,
   "distance": 100
  }
 ],
 "id": "overlay_D7DA0EB8_D9A4_6F01_418B_BE44CB9B7C08",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF, this.camera_CF8924A2_DA30_A597_41B5_940EF6ED14CD); this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.28,
   "yaw": -104.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.31
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88F36595_D9E4_FD03_41E2_BFC9B4CE66F7",
   "pitch": -17.31,
   "yaw": -104.08,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.28,
   "distance": 100
  }
 ],
 "id": "overlay_D71DEC6C_D9A5_9301_41AE_3CACB52C2BD8",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884, this.camera_CF98D49C_DA30_A5B3_41B8_3CD18054E992); this.mainPlayList.set('selectedIndex', 40)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.98,
   "yaw": 13.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.04
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88C5D57E_D9E4_FD01_4186_097CA2C95754",
   "pitch": -9.04,
   "yaw": 13.96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.98,
   "distance": 100
  }
 ],
 "id": "overlay_D7FD4D76_D9AC_AD01_41E3_2FE554E21798",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 21.16,
   "yaw": -35.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.21
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88C5757E_D9E4_FD01_41D7_AA9C134A0F7C",
   "pitch": -5.21,
   "yaw": -35.32,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.16,
   "distance": 100
  }
 ],
 "id": "overlay_D73B79EE_D9AC_9501_41E0_6CBF92E2DC36",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 16.82,
   "yaw": -14.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.67
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88C2957F_D9E4_FDFF_41E8_3765270E0A3A",
   "pitch": -37.67,
   "yaw": -14.08,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.82,
   "distance": 100
  }
 ],
 "id": "overlay_F24ECCB8_D9E4_9301_41EA_94DA5388555B",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477, this.camera_CEA6EFAF_DA30_A3ED_41EA_96DEC0DEA556); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 17.83,
   "yaw": -104.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.95
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88C37584_D9E4_FD01_41DD_E3C57389CE87",
   "pitch": -32.95,
   "yaw": -104.96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.83,
   "distance": 100
  }
 ],
 "id": "overlay_D7EBE7F6_D9AC_7D01_41D2_39F422A690F8",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC, this.camera_CF2CE442_DA30_A497_41C3_C1654D626C3B); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 18.05,
   "yaw": 114.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.34
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8D7697ED_DA6C_BD03_41E2_7ADBA9AA1EA4",
   "pitch": -9.34,
   "yaw": 114.88,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.05,
   "distance": 100
  }
 ],
 "id": "overlay_D73A4E12_D9AC_AF01_41DD_38FAC2CD0AE2",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC, this.camera_CF1CD442_DA30_A497_41CB_446A79BD6C22); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 18.06,
   "yaw": 76.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.77
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88C02584_D9E4_FD01_41E1_7BB0FD574D1E",
   "pitch": -31.77,
   "yaw": 76.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.06,
   "distance": 100
  }
 ],
 "id": "overlay_D70ADA04_D9AD_B701_41C5_73A874528543",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877, this.camera_CF0CD453_DA30_A4B5_41C4_9F691387DFBF); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 19.69,
   "yaw": -81.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.03
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88DA2565_D9E4_FD03_41E5_835FEC2D3BC6",
   "pitch": -22.03,
   "yaw": -81.06,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.69,
   "distance": 100
  }
 ],
 "id": "overlay_D683BA7A_D957_A9E5_41CB_54043F41C19D",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB, this.camera_CFB8F483_DA30_A595_41DA_BE24F86444CD); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.87,
   "yaw": 14.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.81
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88DB9566_D9E4_FD01_41BD_001F7535A52A",
   "pitch": -10.81,
   "yaw": 14.55,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.87,
   "distance": 100
  }
 ],
 "id": "overlay_D7E0A16E_D957_FBFD_41C5_506B1B599A70",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7, this.camera_CF4F9473_DA30_A575_41BD_E826AB9F5F50); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.08,
   "yaw": -165.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.08
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88DBC56B_D9E4_FD07_41BB_3D42E019638D",
   "pitch": -19.08,
   "yaw": -165.45,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.08,
   "distance": 100
  }
 ],
 "id": "overlay_D63E8956_D957_AB2D_41CA_B191E2115301",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF, this.camera_CFA82483_DA30_A595_41E9_868DF81389FC); this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 21.19,
   "yaw": 169.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.32
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88C05585_D9E4_FD03_41D4_34DE3F16BE55",
   "pitch": -4.32,
   "yaw": 169.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.19,
   "distance": 100
  }
 ],
 "id": "overlay_D795B981_D9AC_F503_41E9_A8232F68E34E",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C, this.camera_C8D57279_DA30_BD74_41E4_EDD75950E530); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 19.39,
   "yaw": -161.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.09
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88C1D585_D9E4_FD03_4182_633D5C7456DE",
   "pitch": -24.09,
   "yaw": -161.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.39,
   "distance": 100
  }
 ],
 "id": "overlay_D72F4B83_D9AC_7506_41B6_B96ED2921098",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877, this.camera_C8E48275_DA30_BD7C_41EB_08CFB630202F); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.5,
   "yaw": 162.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.24
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88F5858F_D9E4_FD1F_41D8_4485D225FA65",
   "pitch": -15.24,
   "yaw": 162.97,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.5,
   "distance": 100
  }
 ],
 "id": "overlay_D72C6C24_D9A4_B301_4192_8AFC474069BF",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4, this.camera_C89A924A_DA30_BC94_41E4_7D6F62753F55); this.mainPlayList.set('selectedIndex', 36)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 19.17,
   "yaw": 60.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.57
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88F5758F_D9E4_FD1F_41B1_377739968277",
   "pitch": -25.57,
   "yaw": 60.88,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.17,
   "distance": 100
  }
 ],
 "id": "overlay_D76B0E6C_D9A4_EF01_41BC_FC755ECE9235",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 19.97,
   "yaw": -30.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.96
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88F6D58E_D9E4_FD01_41C5_AFD70CA79EAF",
   "pitch": -19.96,
   "yaw": -30.3,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.97,
   "distance": 100
  }
 ],
 "id": "overlay_D7F330D8_D9A4_B301_41CB_C3481DDDA511",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E, this.camera_CF23E432_DA30_A4F7_41E0_92AF5A568FCF); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 21.14,
   "yaw": 143.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.8
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88F7758E_D9E4_FD01_41E3_BAE24C956C37",
   "pitch": -5.8,
   "yaw": 143.5,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.14,
   "distance": 100
  }
 ],
 "id": "overlay_D7F290E4_D9A7_B301_41D7_75FF0D79E89D",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED, this.camera_CF3F5013_DA30_BCB5_41E6_BCB102F642BA); this.mainPlayList.set('selectedIndex', 33)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 21.23,
   "yaw": 21.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.96
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88D4756D_D9E4_FD03_41E5_E87EC5F73464",
   "pitch": -1.96,
   "yaw": 21.63,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.23,
   "distance": 100
  }
 ],
 "id": "overlay_D65B94FB_D952_9ADB_41EB_0205D9A243A6",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D277598A_D95F_EB25_41E5_0800136A96D4, this.camera_CE2AA356_DA30_BCBF_41C3_8F05720038FF); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.98,
   "yaw": -149.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.04
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88D5A56D_D9E4_FD03_41D9_AF0CF268745E",
   "pitch": -9.04,
   "yaw": -149.81,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.98,
   "distance": 100
  }
 ],
 "id": "overlay_D663F4B7_D952_B96B_41E3_B6EED08594D2",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000, this.camera_CE1BD368_DA30_BC93_41E4_1A312E1E2561); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 19.35,
   "yaw": -105.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.39
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88D5C56D_D9E4_FD03_41CE_F21D18EFC47B",
   "pitch": -24.39,
   "yaw": -105.55,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.35,
   "distance": 100
  }
 ],
 "id": "overlay_D6022F78_D952_A7E5_41E0_E5F6305AA0F2",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB, this.camera_CE644395_DA30_A3BD_41DA_2225288BD9DD); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 21.14,
   "yaw": -12.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_1_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.8
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88D4F56D_D9E4_FD03_41E9_5896E9884066",
   "pitch": -5.8,
   "yaw": -12.9,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.14,
   "distance": 100
  }
 ],
 "id": "overlay_D6903940_D952_EB25_41C2_1F60FBF9EB10",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 21.18,
   "yaw": -68.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_1_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.62
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88D4756D_D9E4_FD03_41E3_B4E2530C3E95",
   "pitch": -4.62,
   "yaw": -68.67,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.18,
   "distance": 100
  }
 ],
 "id": "overlay_C9E6996C_D952_6BFD_41C9_9BCF5BB30E27",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 21.21,
   "yaw": 121.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_1_HS_5_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.14
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88D5B56D_D9E4_FD03_41D6_8F1BB70236BA",
   "pitch": -3.14,
   "yaw": 121.07,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.21,
   "distance": 100
  }
 ],
 "id": "overlay_D7A6891B_D951_AB5B_41E2_6BC17E48EE4A",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A, this.camera_CE0BD385_DA30_A39D_41D6_EE52B475B15C); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.91,
   "yaw": 74.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_1_HS_6_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.22
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88D5D56E_D9E4_FD01_41B9_50E25B2CE59A",
   "pitch": -10.22,
   "yaw": 74.45,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.91,
   "distance": 100
  }
 ],
 "id": "overlay_D69F1082_D951_9925_41C8_D143118029FD",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7, this.camera_CE394347_DA30_BC9D_41E6_4C7C3B60344A); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 13.59,
   "yaw": 73.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_1_HS_7_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.29
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88D5056E_D9E4_FD01_41E0_76F0E707D1D6",
   "pitch": -30.29,
   "yaw": 73.04,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.59,
   "distance": 100
  }
 ],
 "id": "overlay_F94107B3_D9DC_9D07_4174_6CD9E2EEE2F4",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E, this.camera_CE747385_DA30_A39D_41E7_177FF4C07F48); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.78,
   "yaw": -30.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88F9C58D_D9E4_FD03_41E3_2DA241D09582",
   "pitch": -12,
   "yaw": -30.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.78,
   "distance": 100
  }
 ],
 "id": "overlay_D72FB31D_D9A4_B502_41DD_F95CC9D963E7",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.18,
   "yaw": -88.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.19
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88F6658E_D9E4_FD01_41B3_C759800854B7",
   "pitch": -18.19,
   "yaw": -88.44,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.18,
   "distance": 100
  }
 ],
 "id": "overlay_D7FC3418_D9A4_9301_41E9_4520FC82E8DE",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860, this.camera_C8FB4268_DA30_BC93_41B1_1C62BD652B01); this.mainPlayList.set('selectedIndex', 34)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 19.61,
   "yaw": 77.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.62
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88F7E58E_D9E4_FD01_41D4_C678B2F95069",
   "pitch": -22.62,
   "yaw": 77.7,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.61,
   "distance": 100
  }
 ],
 "id": "overlay_D70EEE5F_D9A4_6F3E_41CB_780294E06498",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB, this.camera_C88B4260_DA30_BC94_41DB_A6FF01BB32CA); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.89,
   "yaw": -161.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.52
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88D8356B_D9E4_FD07_41EA_A787A3401629",
   "pitch": -10.52,
   "yaw": -161.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.89,
   "distance": 100
  }
 ],
 "id": "overlay_D7E3FC3F_D956_A95B_41E6_E8D692A00205",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF, this.camera_CF5F8473_DA30_A575_41D7_1912DD11D609); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 19.61,
   "yaw": 62.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.62
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88D8756B_D9E4_FD07_41E5_AC3D31EC92E4",
   "pitch": -22.62,
   "yaw": 62.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.61,
   "distance": 100
  }
 ],
 "id": "overlay_D641B5D1_D956_FB27_41EA_5D37729EF2B4",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC, this.camera_CF6D0461_DA30_A494_41E2_8918B4DE23FC); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 13.56,
   "yaw": 54.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.15
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88CFC575_D9E4_FD03_41E9_6596023FB8BE",
   "pitch": -2.15,
   "yaw": 54.68,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.56,
   "distance": 100
  }
 ],
 "id": "overlay_D67A10DF_D971_FADB_41E3_44C2E76529A2",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000, this.camera_CB6EC0DD_DA30_BDAD_41DE_F540D4A2B8D7); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.35,
   "yaw": 47.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.72
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88CF6575_D9E4_FD03_41DD_F01C4E140137",
   "pitch": -16.72,
   "yaw": 47.3,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.35,
   "distance": 100
  }
 ],
 "id": "overlay_D605BDC1_D971_AB27_41E6_178B052D8899",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_CF544067_DA30_BC9D_41A3_8634738049E8); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 18.57,
   "yaw": 105.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.51
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88CCA575_D9E4_FD03_41C0_DCDA47AA4F31",
   "pitch": -17.51,
   "yaw": 105.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.57,
   "distance": 100
  }
 ],
 "id": "overlay_D6EE1B6D_D971_AFFF_41E3_C8C608512DC2",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_CB64E0DD_DA30_BDAD_41E6_0B6692806A7A); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 15.46,
   "yaw": 162.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_1_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.81
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88CCC576_D9E4_FD01_41D2_B343F354DCAD",
   "pitch": -10.81,
   "yaw": 162.75,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.46,
   "distance": 100
  }
 ],
 "id": "overlay_D6AFDA0A_D972_6925_41C0_8F44E954973A",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 14.16,
   "yaw": 77.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_1_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.1
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88CC0576_D9E4_FD01_41A2_6C7ECFC8F5A1",
   "pitch": 0.1,
   "yaw": 77.7,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.16,
   "distance": 100
  }
 ],
 "id": "overlay_C933F26D_D972_99FF_41E1_4DFC0390945E",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB, this.camera_CB5A1103_DA30_BC95_41C9_354D487A4DFC); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 14.98,
   "yaw": 135.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_1_HS_5_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.9
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88CDB576_D9E4_FD01_41B5_2BC12D958171",
   "pitch": -17.9,
   "yaw": 135.01,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.98,
   "distance": 100
  }
 ],
 "id": "overlay_F9CF8A01_D9DB_9703_41EB_075F114A2316",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E, this.camera_CB5110F3_DA30_BD74_41E1_3F80368CA79F); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.98,
   "yaw": 167.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.04
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88D31573_D9E4_FD07_41C1_B6A788EC695A",
   "pitch": -9.04,
   "yaw": 167.99,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.98,
   "distance": 100
  }
 ],
 "id": "overlay_D64FD51E_D94E_9B5D_41E1_F7C14C7B25F9",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A, this.camera_CF7BE04F_DA30_BCAD_41E7_519D9CB7726F); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 21.11,
   "yaw": 79.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.39
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88D0B573_D9E4_FD07_41E7_C55837221F98",
   "pitch": -6.39,
   "yaw": 79.47,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.11,
   "distance": 100
  }
 ],
 "id": "overlay_D62E9350_D94E_9F25_41E5_2FDB4C31578C",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB, this.camera_CF64105D_DA30_BCAD_41D0_68E3B5DDEA76); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 12.79,
   "yaw": 99.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.59
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88D0D574_D9E4_FD01_41E7_3ADB937442CE",
   "pitch": -0.59,
   "yaw": 99.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.79,
   "distance": 100
  }
 ],
 "id": "overlay_D6C593F1_D94E_7EE7_41E4_662283B1403D",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 17.4,
   "yaw": 163.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_88D01574_D9E4_FD01_41D1_C9C3DE5CF2D7",
   "pitch": -35.01,
   "yaw": 163.56,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.4,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D6B54584_D94F_9B2D_41AA_E4C28002A036",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "maps": [
  {
   "hfov": 19.21,
   "yaw": -147.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.27
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88D04574_D9E4_FD01_41D8_608ACB4D3754",
   "pitch": -25.27,
   "yaw": -147.45,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.21,
   "distance": 100
  }
 ],
 "id": "overlay_C9E9798A_D94F_EB25_41DC_DF812478C79A",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 12.76,
   "yaw": 135.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_5_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.84
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88D1C574_D9E4_FD01_41D0_C5FDF852B955",
   "pitch": -3.84,
   "yaw": 135.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.76,
   "distance": 100
  }
 ],
 "id": "overlay_C34580D1_D9AB_F303_41E2_B8DCC210075C",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 12.68,
   "yaw": 110.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_6_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.67
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88D10574_D9E4_FD01_41E7_7E9335F4113F",
   "pitch": -7.67,
   "yaw": 110.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.68,
   "distance": 100
  }
 ],
 "id": "overlay_C5B58AFD_D9A4_B703_41E4_BB6AAE4BCEEB",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_CF0BE03F_DA30_BCEC_41DB_195B04989945); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 19.65,
   "yaw": -126.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.32
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88F0D596_D9E4_FD01_41E7_1FD2A1C54484",
   "pitch": -22.32,
   "yaw": -126.21,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.65,
   "distance": 100
  }
 ],
 "id": "overlay_D7F37C3F_D9A5_B37F_41E9_FAC205C365C1",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84, this.camera_C94342D7_DA30_BDBD_41DE_6A4C5971F57D); this.mainPlayList.set('selectedIndex', 39)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.5,
   "yaw": 46.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.24
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88F04596_D9E4_FD01_41DD_6661039A696D",
   "pitch": -15.24,
   "yaw": 46.4,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.5,
   "distance": 100
  }
 ],
 "id": "overlay_D7026F2F_D9A5_ED1F_41EA_B864AE1A82DC",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF, this.camera_C952C2C8_DA30_BD93_41D4_948A44B2CFAF); this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 21.16,
   "yaw": 87.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.21
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88F1D596_D9E4_FD01_41E6_AAECDAFB2AFC",
   "pitch": -5.21,
   "yaw": 87.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.16,
   "distance": 100
  }
 ],
 "id": "overlay_9BFAC175_D9EC_9503_41D6_7B5EA288EF43",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.32,
   "yaw": -170.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.01
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88C7C57D_D9E4_FD03_41EA_0161199AC32A",
   "pitch": -17.01,
   "yaw": -170.78,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.32,
   "distance": 100
  }
 ],
 "id": "overlay_D7A182C3_D9AC_9707_41D2_BF5DB8D66F78",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2448E90_D95F_A925_41E8_B306937D2F35, this.camera_C860A209_DA30_BC95_41E8_1F92AFDEAAB7); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 19.53,
   "yaw": -60.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.21
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88C7557E_D9E4_FD01_41C4_6E1983C9D05F",
   "pitch": -23.21,
   "yaw": -60.99,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.53,
   "distance": 100
  }
 ],
 "id": "overlay_D7D0820E_D9AC_B701_41DA_0C0C0440FDAE",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0, this.camera_C84F7235_DA30_BCFC_41CE_E3DDF7B8ED7A); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 19.85,
   "yaw": -6.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.85
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88C4857E_D9E4_FD01_41B4_8E47B14FA85E",
   "pitch": -20.85,
   "yaw": -6.11,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.85,
   "distance": 100
  }
 ],
 "id": "overlay_D7059272_D9AC_9701_41C0_CA6D80C6B127",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 19.39,
   "yaw": 155.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_1_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.09
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88C4357E_D9E4_FD01_41BF_F40283F99714",
   "pitch": -24.09,
   "yaw": 155.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.39,
   "distance": 100
  }
 ],
 "id": "overlay_D74E2E3F_D9AC_EF7F_41AC_6F74CF32AFF8",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A, this.camera_C852121A_DA30_BCB7_41D7_CDA37439F0EE); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.22,
   "yaw": 99.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_1_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.9
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88C4557E_D9E4_FD01_41CA_2C6A9C0EEDC7",
   "pitch": -17.9,
   "yaw": 99.83,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.22,
   "distance": 100
  }
 ],
 "id": "overlay_D6CE016E_D9AC_9501_41E2_E5376BF39190",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5, this.camera_C85C722A_DA30_BC97_41E0_4E53FFFF4B9B); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 21.24,
   "yaw": -13.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.37
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88CB657C_D9E4_FD01_41BF_AB59A5BCDA8F",
   "pitch": -1.37,
   "yaw": -13.78,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.24,
   "distance": 100
  }
 ],
 "id": "overlay_D657D805_D973_E92F_41C0_3A6BD0763878",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 15.46,
   "yaw": -62.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.52
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88C8857C_D9E4_FD01_41DB_5F4625AA9E32",
   "pitch": -16.52,
   "yaw": -62.67,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.46,
   "distance": 100
  }
 ],
 "id": "overlay_D6115758_D973_A725_41E2_2E3BC7716E7C",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_CF193033_DA30_BCF5_41E1_BB5B5957E329); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 19.39,
   "yaw": -37.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.09
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88C8257C_D9E4_FD01_41DA_632EC5D3732E",
   "pitch": -24.09,
   "yaw": -37.98,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.39,
   "distance": 100
  }
 ],
 "id": "overlay_D6D5F4E2_D973_9AE5_41E7_AEB5F99CA11E",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2446447_D95F_992B_41CD_4D904B227F99, this.camera_CF291023_DA30_BC94_41C3_1E2F6D416F48); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 13.76,
   "yaw": -114.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_1_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.79
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88C8657C_D9E4_FD01_41DC_972AEFD19B09",
   "pitch": -0.79,
   "yaw": -114.31,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.76,
   "distance": 100
  }
 ],
 "id": "overlay_C94DC638_D972_9965_41E0_D698ABED5444",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.04,
   "yaw": 4.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_1_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.37
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88C9857C_D9E4_FD01_41C7_B3E8FAB38926",
   "pitch": -19.37,
   "yaw": 4.51,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.04,
   "distance": 100
  }
 ],
 "id": "overlay_FD829770_D9E7_BD01_41D2_654699B58F88",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 16.06,
   "yaw": -83.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.26
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88FA658C_D9E4_FD01_41EA_9F6ACFDE4149",
   "pitch": -20.26,
   "yaw": -83.71,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.06,
   "distance": 100
  }
 ],
 "id": "overlay_D7C790D0_D9A5_B301_41E5_6CDC8471F7A8",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25, this.camera_CEFDDFDF_DA30_A3AC_41EA_209D034E918E); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 16.82,
   "yaw": -57.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.13
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88FBD58D_D9E4_FD03_41E5_4848982341AC",
   "pitch": -16.13,
   "yaw": -57.98,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.82,
   "distance": 100
  }
 ],
 "id": "overlay_D7064A6F_D9A5_B71F_41E0_3F3BD68A4C88",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.83,
   "yaw": 118.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_88FB558D_D9E4_FD03_41E5_D0DAA7FFF397",
   "pitch": -11.4,
   "yaw": 118.42,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.83,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D76CD573_D9A5_9D07_41E3_9ABF5406F7B7",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "maps": [
  {
   "hfov": 20.5,
   "yaw": -166.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_1_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.24
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88F8958D_D9E4_FD03_41B0_953788F3589A",
   "pitch": -15.24,
   "yaw": -166.34,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.5,
   "distance": 100
  }
 ],
 "id": "overlay_D7535325_D9A4_7503_41E5_690714D6AE13",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C, this.camera_CE922FC3_DA30_A395_41C4_48760512DEA7); this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.04,
   "yaw": -143.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_1_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.37
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88F8358D_D9E4_FD03_41B3_0776E2A92E05",
   "pitch": -19.37,
   "yaw": -143.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.04,
   "distance": 100
  }
 ],
 "id": "overlay_D6935DE8_D9A4_6D01_41E3_4C1058EC9A36",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33, this.camera_CE83AFD0_DA30_A3B3_41D8_B5F072761C70); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 17.21,
   "yaw": -81.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_1_HS_5_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.9
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88F9B58D_D9E4_FD03_41D9_1D3E0193D8D3",
   "pitch": -35.9,
   "yaw": -81.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.21,
   "distance": 100
  }
 ],
 "id": "overlay_E0EDE0BC_D9E7_9301_41E5_DC6B0F61BECF",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B, this.camera_CEF36FD4_DA30_A3B3_41E6_CE00400310E0); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.41,
   "yaw": -9.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.13
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88CEA574_D9E4_FD01_41D1_E55BCDCED8C3",
   "pitch": -16.13,
   "yaw": -9.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.41,
   "distance": 100
  }
 ],
 "id": "overlay_D643BF74_D94F_A7ED_419F_7869859FA013",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.87,
   "yaw": 27.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.81
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88CED574_D9E4_FD01_41D6_77C978756C93",
   "pitch": -10.81,
   "yaw": 27.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.87,
   "distance": 100
  }
 ],
 "id": "overlay_D63A9932_D94E_6B65_41E1_7DB32FC00B7E",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB, this.camera_C96232B8_DA30_BDF3_41DB_629B3D0F2BB8); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.08,
   "yaw": 78.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.08
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88CE0574_D9E4_FD01_41EA_BC14F1B284B8",
   "pitch": -19.08,
   "yaw": 78.88,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.08,
   "distance": 100
  }
 ],
 "id": "overlay_D6D50646_D94E_792D_41D9_28EC467B6D37",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.35,
   "yaw": 160.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_1_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.72
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88CE4575_D9E4_FD03_41E0_9EA16633E4D4",
   "pitch": -16.72,
   "yaw": 160.02,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.35,
   "distance": 100
  }
 ],
 "id": "overlay_D69A35D6_D94E_9B2D_41C6_0F131874907B",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A, this.camera_C91182A8_DA30_BD93_41E8_D912A8D0B070); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.74,
   "yaw": -46.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_1_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.59
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88CFE575_D9E4_FD03_41E0_3035025F1414",
   "pitch": -12.59,
   "yaw": -46.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.74,
   "distance": 100
  }
 ],
 "id": "overlay_C91B68D3_D94E_A92B_41E1_0DC9408B8294",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4, this.camera_C9271298_DA30_BDB3_41BE_D66B4FD77E3C); this.mainPlayList.set('selectedIndex', 36)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 21.22,
   "yaw": 123.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_1_HS_5_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.55
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88CF6575_D9E4_FD03_41D5_FBCCDE7FFE61",
   "pitch": -2.55,
   "yaw": 123.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.22,
   "distance": 100
  }
 ],
 "id": "overlay_D781005E_D94E_99DD_41D0_D21E5C32CA59",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 19.26,
   "yaw": -95.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_1_HS_6_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.98
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88CC8575_D9E4_FD03_41B1_9B1DCD5877A0",
   "pitch": -24.98,
   "yaw": -95.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.26,
   "distance": 100
  }
 ],
 "id": "overlay_D7AA6808_D971_A925_41DF_BF8A37505E59",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3, this.camera_C901B2B2_DA30_BDF7_41E2_00F8348C65DB); this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 14.98,
   "yaw": 111.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_1_HS_7_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.9
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88CF8575_D9E4_FD03_41D6_AA03DE7F8CF2",
   "pitch": -17.9,
   "yaw": 111.11,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.98,
   "distance": 100
  }
 ],
 "id": "overlay_C68680AE_D9DF_9301_41AC_3E2B30B5606D",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E, this.camera_C971A2B8_DA30_BDF3_41E4_3B9860A6A839); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.58,
   "yaw": -74.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.36
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88F9458D_D9E4_FD03_41E0_CD9BCA72D52D",
   "pitch": -14.36,
   "yaw": -74.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.58,
   "distance": 100
  }
 ],
 "id": "overlay_D7EF886B_D9A4_F307_41C4_4C0F08E59D2F",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E, this.camera_CBDD61AE_DA30_BFEF_41B1_AEDB637E98D0); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 17.08,
   "yaw": -17.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.49
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88C6E57D_D9E4_FD03_41E8_C368E7B7CA09",
   "pitch": -36.49,
   "yaw": -17.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.08,
   "distance": 100
  }
 ],
 "id": "overlay_D7F1E22E_D9AD_9701_41CB_0B6E77C54741",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC, this.camera_CBA5D516_DA30_A4BF_41D3_23AC4F50A862); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 17.21,
   "yaw": -39.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.9
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88C2157F_D9E4_FDFF_41E9_D66E31D3E7C9",
   "pitch": -35.9,
   "yaw": -39.16,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.21,
   "distance": 100
  }
 ],
 "id": "overlay_D7F748D5_D9AF_9303_41D3_F96D0874DF84",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477, this.camera_CEA713E3_DA30_A394_41E3_4E82EC836DD6); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.76,
   "yaw": -35.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.29
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88C3B57F_D9E4_FDFF_41C5_9532A48FA81A",
   "pitch": -12.29,
   "yaw": -35.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.76,
   "distance": 100
  }
 ],
 "id": "overlay_D7371697_D9AF_FF0F_41E6_360EF1287467",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 17.77,
   "yaw": 114.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.24
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88C16585_D9E4_FD03_41C6_305690530B61",
   "pitch": -33.24,
   "yaw": 114.29,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.77,
   "distance": 100
  }
 ],
 "id": "overlay_D7C8DB83_D9AD_F507_41E4_E82AFF50F7D4",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C, this.camera_CB4FF11B_DA30_BCB4_418C_52C98E6E8C72); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.74,
   "yaw": -9.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.59
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88FE9585_D9E4_FD03_41E1_D0761BE30FA8",
   "pitch": -12.59,
   "yaw": -9.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.74,
   "distance": 100
  }
 ],
 "id": "overlay_D735DB2F_D9AD_951F_419A_6A4E0F5375C5",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC, this.camera_CB42A10F_DA30_BCAC_41E9_4D70B9B1B387); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "paddingBottom": 0,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "transparencyActive": true,
 "maxHeight": 58,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "verticalAlign": "middle",
 "class": "IconButton",
 "width": 58,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "propagateClick": true,
 "cursor": "hand",
 "borderRadius": 0,
 "data": {
  "name": "IconButton HS "
 }
},
{
 "paddingBottom": 0,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "transparencyActive": true,
 "maxHeight": 58,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "class": "IconButton",
 "width": 58,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "propagateClick": true,
 "cursor": "hand",
 "borderRadius": 0,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "paddingBottom": 0,
 "maxWidth": 49,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "transparencyActive": true,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "right": 30,
 "maxHeight": 37,
 "class": "IconButton",
 "width": 100,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "bottom": 8,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "height": 75,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "propagateClick": true,
 "cursor": "hand",
 "borderRadius": 0,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "paddingBottom": 0,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "transparencyActive": true,
 "maxHeight": 58,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "verticalAlign": "middle",
 "class": "IconButton",
 "width": 58,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "propagateClick": true,
 "cursor": "hand",
 "borderRadius": 0,
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "maps": [
  {
   "hfov": 21.21,
   "yaw": 21.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.35
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88F2A590_D9E4_FD01_41E1_B233FF064BB8",
   "pitch": 3.35,
   "yaw": 21.63,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.21,
   "distance": 100
  }
 ],
 "id": "overlay_D7CDDAF8_D9A4_9701_41E6_CEF66AE7B19C",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC, this.camera_CEED6FF0_DA30_A373_41BA_6547329DC3D1); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 21.11,
   "yaw": 166.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.39
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88F2D590_D9E4_FD01_41E7_C8A2BE525DD4",
   "pitch": -6.39,
   "yaw": 166.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.11,
   "distance": 100
  }
 ],
 "id": "overlay_D70A278A_D9A4_BD01_41C6_95ABBEE313C5",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84, this.camera_CEDF5000_DA30_BC93_41B5_DA087F597000); this.mainPlayList.set('selectedIndex', 39)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 21.11,
   "yaw": 95.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.39
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88F24595_D9E4_FD03_41E1_5F76F8975E43",
   "pitch": -6.39,
   "yaw": 95.4,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.11,
   "distance": 100
  }
 ],
 "id": "overlay_D76A440F_D9A4_931F_41EA_A1CBAAEB1D4A",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884, this.camera_CEC8B010_DA30_BCB3_41E7_A52199CA100D); this.mainPlayList.set('selectedIndex', 40)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 16.55,
   "yaw": -138.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.11
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8D7A97ED_DA6C_BD03_41D8_093E3707AA25",
   "pitch": -17.11,
   "yaw": -138.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.55,
   "distance": 100
  }
 ],
 "id": "overlay_D7863C12_D972_A924_41E9_BDC17BCE853A",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D275C425_D95F_F96F_41DB_79786819224B, this.camera_C9ADC2E7_DA30_BD9D_41E7_0AEBA625AF00); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.5,
   "yaw": -165.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.24
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88CAA576_D9E4_FD01_41D8_F67E792E8CA6",
   "pitch": -15.24,
   "yaw": -165.16,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.5,
   "distance": 100
  }
 ],
 "id": "overlay_D62E2B48_D972_AF25_41C5_8E694E16873E",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E, this.camera_C98E52F8_DA30_BD73_4195_5B09A4469E29); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 17.11,
   "yaw": 122.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.97
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8D7A27ED_DA6C_BD03_41BD_826A73083B7B",
   "pitch": -18.97,
   "yaw": 122.95,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.11,
   "distance": 100
  }
 ],
 "id": "overlay_D6169AE1_D972_6EE7_41BC_4CEBCDF72019",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F, this.camera_C94CA2D7_DA30_BDBD_41E0_D2F8718A3441); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 18.23,
   "yaw": 69.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_1_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.88
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88CA0576_D9E4_FD0A_41D5_1BF90BCB92CD",
   "pitch": -30.88,
   "yaw": 69.73,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.23,
   "distance": 100
  }
 ],
 "id": "overlay_D6CB9842_D972_6924_41E4_C607C53C66B6",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 17.1,
   "yaw": -7.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.35
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8D7BA7ED_DA6C_BD03_41E3_8EB46009ACB2",
   "pitch": -2.35,
   "yaw": -7.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.1,
   "distance": 100
  }
 ],
 "id": "overlay_D69F8569_D973_9BE7_41E9_43B356F8C6BF",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 13.64,
   "yaw": 59.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_1_HS_5_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.66
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88CBD57C_D9E4_FD01_41E6_A072E677F9F6",
   "pitch": -7.66,
   "yaw": 59.5,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.64,
   "distance": 100
  }
 ],
 "id": "overlay_C9E6384D_D973_A93F_41D0_06FCD3415B1E",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 17.16,
   "yaw": -74.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_6_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.26
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8D7B77ED_DA6C_BD03_41E9_C9D94AD9F56F",
   "pitch": -14.26,
   "yaw": -74.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.16,
   "distance": 100
  }
 ],
 "id": "overlay_9E37ABD3_D9A5_9507_41CB_9F91F7292BF1",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D277598A_D95F_EB25_41E5_0800136A96D4, this.camera_C9BDF2E7_DA30_BD9D_41E5_954AFF7297D2); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 12.39,
   "yaw": 26.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_7_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.49
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8D78B7ED_DA6C_BD03_41D3_C7BAB1AEAF0B",
   "pitch": -0.49,
   "yaw": 26.51,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.39,
   "distance": 100
  }
 ],
 "id": "overlay_9180916E_D9A7_951E_41DA_ABA076E8E234",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 16.97,
   "yaw": 3.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_8_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.37
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8D7967ED_DA6C_BD03_41A6_8C84A35E6991",
   "pitch": -7.37,
   "yaw": 3.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.97,
   "distance": 100
  }
 ],
 "id": "overlay_931D1E55_DA5B_EF03_41BC_50B163E20E9E",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E, this.camera_C99D92F8_DA30_BD73_41E0_FD9B25108B70); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 14.44,
   "yaw": -150.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.7
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8D6B27DD_DA6C_BD03_41DD_17EEF4E158C3",
   "pitch": -17.7,
   "yaw": -150.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.44,
   "distance": 100
  }
 ],
 "id": "overlay_D7985B88_D956_6F25_41CF_7F0AA858E1AF",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC, this.camera_C83791BA_DA30_BFF7_41C1_4C8A216A8954); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 16.41,
   "yaw": -67.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.44
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8D6887DD_DA6C_BD03_41AB_095E61577CC3",
   "pitch": -39.44,
   "yaw": -67.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.41,
   "distance": 100
  }
 ],
 "id": "overlay_D64A0F8B_D951_A73B_41DC_62A8B050A941",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2449E7A_D95E_69E5_41E7_97426A243776, this.camera_C82871D9_DA30_BFB5_41B9_62BCBE69AD67); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 16.62,
   "yaw": 26.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.55
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88D9656C_D9E4_FD01_41E0_1B785D57E945",
   "pitch": -38.55,
   "yaw": 26.06,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.62,
   "distance": 100
  }
 ],
 "id": "overlay_D663B013_D951_992B_41E4_481907942BA0",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E, this.camera_C823D1D2_DA30_BFB7_41C2_11E3AC626084); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 16.06,
   "yaw": 122.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.26
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8D6857DD_DA6C_BD03_41D9_FECBE7A8F4EF",
   "pitch": -20.26,
   "yaw": 122.55,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.06,
   "distance": 100
  }
 ],
 "id": "overlay_D6FABBAC_D951_EF7C_41C0_E94B5DE51B2B",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC, this.camera_CBC951BA_DA30_BFF7_41DD_13B4D8BC0D0E); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 12.83,
   "yaw": 29.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.52
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8D69A7DD_DA6C_BD03_41E9_4C3CAE342213",
   "pitch": -16.52,
   "yaw": 29.21,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.83,
   "distance": 100
  }
 ],
 "id": "overlay_C91D87D1_D951_A727_41E8_54124820CB77",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_C81451E9_DA30_BF95_41B4_AB660D24CB03); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 18.23,
   "yaw": 143.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.88
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88FF8586_D9E4_FD01_41EA_9286D74FC88E",
   "pitch": -30.88,
   "yaw": 143.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.23,
   "distance": 100
  }
 ],
 "id": "overlay_D781FBA4_D9AB_9501_41E8_65D5A2FAA42E",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB, this.camera_CF33D432_DA30_A4F7_41CE_CA0C2A3998FF); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 16.55,
   "yaw": -94.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.85
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88FF2586_D9E4_FD01_41C9_3C916EE91D07",
   "pitch": -38.85,
   "yaw": -94.63,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.55,
   "distance": 100
  }
 ],
 "id": "overlay_D70FD8CA_D9A4_9301_41C7_6AE0F427CBA8",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E, this.camera_CEC2B424_DA30_A493_41E2_ADFEB6405F7A); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 21.22,
   "yaw": -33.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.85
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88FCB586_D9E4_FD01_41DF_BF0E02DA7D0F",
   "pitch": -2.85,
   "yaw": -33.85,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.22,
   "distance": 100
  }
 ],
 "id": "overlay_D6AC0B36_D9A4_9501_41E7_5010B104B5AC",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 21.14,
   "yaw": -80.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_1_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.8
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88FC3587_D9E4_FD0F_41D7_2E0691E9925D",
   "pitch": -5.8,
   "yaw": -80.47,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.14,
   "distance": 100
  }
 ],
 "id": "overlay_D69733B8_D9A4_F501_41D6_2BCCD46635E0",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 18.23,
   "yaw": 96.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_1_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.88
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88FC5587_D9E4_FD0F_41E7_079DF8774749",
   "pitch": -30.88,
   "yaw": 96.29,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.23,
   "distance": 100
  }
 ],
 "id": "overlay_D64CCE33_D9A4_AF07_41D4_4902293988A0",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25, this.camera_CED15412_DA30_A4B7_41E1_B2927434FCCD); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 15.24,
   "yaw": -82.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.29
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88FDC587_D9E4_FD0F_41EA_15DAD634B540",
   "pitch": -24.29,
   "yaw": -82.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.24,
   "distance": 100
  }
 ],
 "id": "overlay_D73DFF18_D9A5_AD01_41E6_18EA11A7F6FB",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E, this.camera_C8AAB24A_DA30_BC94_41E3_25F6C75CAFBE); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 21.17,
   "yaw": -70.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.91
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88FD5587_D9E4_FD0F_41E4_87387779DE15",
   "pitch": -4.91,
   "yaw": -70.44,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.17,
   "distance": 100
  }
 ],
 "id": "overlay_D77BF730_D9A5_9D01_41DD_C70BCDBE4625",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 15.84,
   "yaw": -80.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -41.8
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88FAE587_D9E4_FD0F_41E0_FEE956FC10F0",
   "pitch": -41.8,
   "yaw": -80.47,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.84,
   "distance": 100
  }
 ],
 "id": "overlay_EEC794E2_D9FB_F301_41DD_810C7E3018F8",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B, this.camera_C8B80238_DA30_BCF4_41E6_B1E9D2D7016C); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.04,
   "yaw": 90.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.37
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88F4F58E_D9E4_FD01_41C1_CC00A4AB699C",
   "pitch": -19.37,
   "yaw": 90.09,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.04,
   "distance": 100
  }
 ],
 "id": "overlay_D7CC27B9_D9A7_FD03_41E8_10AADDC84561",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_CE9703F3_DA30_A375_41D7_D95EDD305B65); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 21.09,
   "yaw": 38.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.98
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88F7A58F_D9E4_FD1F_41E4_D26CCBB1A144",
   "pitch": -6.98,
   "yaw": 38.15,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.09,
   "distance": 100
  }
 ],
 "id": "overlay_D71AB6F6_D9A7_9F01_41D5_29CA8A045D1F",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4, this.camera_CE81E403_DA30_A495_41C3_BB995976147B); this.mainPlayList.set('selectedIndex', 36)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 18.06,
   "yaw": -92.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.77
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88C3E584_D9E4_FD01_41DF_1E5D837589FA",
   "pitch": -31.77,
   "yaw": -92.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.06,
   "distance": 100
  }
 ],
 "id": "overlay_D794B279_D9AF_B703_41DC_9EA09BCC4236",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477, this.camera_CBD021A2_DA30_BF97_41CC_F3CA2C47EFB8); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.91,
   "yaw": 28.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.22
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88C6E57D_D9E4_FD03_41E1_FBD5673DB839",
   "pitch": -10.22,
   "yaw": 28.42,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.91,
   "distance": 100
  }
 ],
 "id": "overlay_D7E567C4_D9AC_FD01_41B3_3289B38546D0",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7, this.camera_C9E82318_DA30_BCB3_41D3_ED24AF9073D1); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 19.39,
   "yaw": -37.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.09
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88C6057D_D9E4_FD03_41E0_D489277B54B6",
   "pitch": -24.09,
   "yaw": -37.98,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.39,
   "distance": 100
  }
 ],
 "id": "overlay_D7137BC5_D9AC_9503_41D7_07C03F2F4CF4",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0, this.camera_C9C83338_DA30_BCF3_41B7_82EE8FFB18EC); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 19.07,
   "yaw": 79.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.16
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88C7A57D_D9E4_FD03_41E9_F58F692F6E3D",
   "pitch": -26.16,
   "yaw": 79.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.07,
   "distance": 100
  }
 ],
 "id": "overlay_D7702493_D9AC_B307_41E9_0F9EBE291DD9",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627, this.camera_C9D82328_DA30_BC93_41A9_24EBAE3C3BEB); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.32,
   "yaw": 148.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_1_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.01
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88C7C57D_D9E4_FD03_4146_B1FACA8E5719",
   "pitch": -17.01,
   "yaw": 148.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.32,
   "distance": 100
  }
 ],
 "id": "overlay_D68B67BC_D9AC_9D02_41EA_B56706116FD7",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C, this.camera_C9FE1316_DA30_BCBF_41B5_72C7F9F48143); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.15,
   "yaw": 77.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.49
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88C9257C_D9E4_FD01_41CB_CE417E5864A1",
   "pitch": -18.49,
   "yaw": 77.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.15,
   "distance": 100
  }
 ],
 "id": "overlay_D6513DF7_D972_EAEB_41B3_C4BDC4FC08BD",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2446447_D95F_992B_41CD_4D904B227F99, this.camera_CF7D5461_DA30_A494_41CC_E96C70755363); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 18.92,
   "yaw": 75.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.04
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88D6756C_D9E4_FD01_41BE_D9813FB9282F",
   "pitch": -27.04,
   "yaw": 75.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.92,
   "distance": 100
  }
 ],
 "id": "overlay_D78A82F8_D952_FEE5_41D3_2B1112925EA4",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7, this.camera_CBA3F135_DA30_BCFD_41E1_B6C2B0F9315F); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 21.19,
   "yaw": 75.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.32
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88D7A56C_D9E4_FD01_41C8_FF0F05778E96",
   "pitch": -4.32,
   "yaw": 75.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.19,
   "distance": 100
  }
 ],
 "id": "overlay_D6630607_D952_B92B_41BF_FFE8ACDD740B",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 20.61,
   "yaw": 164.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.06
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88D7C56C_D9E4_FD01_41D8_0943BF4F3533",
   "pitch": -14.06,
   "yaw": 164.45,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.61,
   "distance": 100
  }
 ],
 "id": "overlay_D6347564_D952_9BED_41E7_76B02ABBDD1A",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A, this.camera_CB97F15B_DA30_BCB5_41E3_8DBF820061E1); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 14.7,
   "yaw": -98.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.87
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8D6EA7DD_DA6C_BD03_41DE_EB33B672075D",
   "pitch": -31.87,
   "yaw": -98.96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.7,
   "distance": 100
  }
 ],
 "id": "overlay_D6E8E5D5_D952_7B2F_41E5_AC21C7E9F5DF",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_CBA8214C_DA30_BC93_41D4_0BA78B615A96); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 16.58,
   "yaw": -129.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.27
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8D6E07DD_DA6C_BD03_41C8_ED6055CA8693",
   "pitch": -7.27,
   "yaw": -129.56,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.58,
   "distance": 100
  }
 ],
 "id": "overlay_D7A0E7F9_D953_E6E7_41DA_DD85D3811992",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 15.46,
   "yaw": -53.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_5_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.06
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8BFF1B47_D9A4_B50F_41A0_7933F2121B6B",
   "pitch": -14.06,
   "yaw": -53.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.46,
   "distance": 100
  }
 ],
 "id": "overlay_D79C1932_D953_AB65_41E9_A9827A2E69E4",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2446447_D95F_992B_41CD_4D904B227F99, this.camera_CB9CD163_DA30_BC95_41E4_AAE7A8114A80); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 15.87,
   "yaw": -37.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_6_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.21
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8D6FD7DD_DA6C_BD03_41E5_B8E96A4A5ECF",
   "pitch": -5.21,
   "yaw": -37.09,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.87,
   "distance": 100
  }
 ],
 "id": "overlay_9EA667E6_D9AC_BD01_41C8_FDA6B207CFA1",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 15.91,
   "yaw": -84.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_7_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.14
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8BF8BB47_D9A4_B50F_41E8_D9B7AEF2FDF9",
   "pitch": -3.14,
   "yaw": -84.01,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.91,
   "distance": 100
  }
 ],
 "id": "overlay_95CBF4E9_D9AB_9303_4155_131693CB42B5",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 15.64,
   "yaw": -13.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_8_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.11
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8D6F47DD_DA6C_BD03_41E1_ADF30F8563D7",
   "pitch": -11.11,
   "yaw": -13.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.64,
   "distance": 100
  }
 ],
 "id": "overlay_92EE501E_DA64_B301_41E3_208B5D73B92D",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 15.62,
   "yaw": -150.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_9_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.85
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8D6CD7DD_DA6C_BD03_41C4_F391D67DBD3C",
   "pitch": -20.85,
   "yaw": -150.81,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.62,
   "distance": 100
  }
 ],
 "id": "overlay_96EA5B16_DA65_9501_41D4_9EB1A50C1865",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_CBB68123_DA30_BC94_41D7_3355F22C99F1); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 15.39,
   "yaw": 83.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43.57
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88FE1585_D9E4_FD03_41D6_B16191028AD6",
   "pitch": -43.57,
   "yaw": 83.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.39,
   "distance": 100
  }
 ],
 "id": "overlay_D7245DE8_D9AC_AD02_41C7_B85FB2A695B3",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB, this.camera_CBADE529_DA30_A495_41D6_78815B5ED66F); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "hfov": 21.05,
   "yaw": 111.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.78
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_88C12585_D9E4_FD03_41E9_60943BB40C46",
   "pitch": 7.78,
   "yaw": 111.63,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.05,
   "distance": 100
  }
 ],
 "id": "overlay_D749B9E7_D9AC_950F_41CE_6FF45EC85C10",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7, this.camera_CBAAA521_DA30_A495_41E7_F956568C8BD8); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "paddingBottom": 0,
 "layout": "horizontal",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "verticalAlign": "middle",
 "right": "0%",
 "contentOpaque": false,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "height": 110,
 "horizontalAlign": "center",
 "overflow": "visible",
 "paddingRight": 0,
 "propagateClick": true,
 "borderRadius": 0,
 "data": {
  "name": "button menu sup"
 },
 "gap": 10
},
{
 "paddingBottom": 0,
 "layout": "vertical",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "verticalAlign": "top",
 "right": "0%",
 "contentOpaque": false,
 "width": "91.304%",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "height": "85.959%",
 "horizontalAlign": "center",
 "overflow": "scroll",
 "paddingRight": 0,
 "propagateClick": true,
 "visible": false,
 "borderRadius": 0,
 "data": {
  "name": "-button set"
 },
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
 "class": "Image",
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "bottom": 53,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scaleMode": "fit_outside",
 "height": 2,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "propagateClick": true,
 "borderRadius": 0,
 "data": {
  "name": "white line"
 }
},
{
 "paddingBottom": 0,
 "layout": "horizontal",
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "width": 1199,
 "verticalAlign": "middle",
 "contentOpaque": false,
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
  "this.Button_1B9A3D00_16C4_0505_41B2_6830155B7D52"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 30,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "height": 51,
 "horizontalAlign": "left",
 "overflow": "scroll",
 "paddingRight": 0,
 "propagateClick": true,
 "borderRadius": 0,
 "data": {
  "name": "-button set container"
 },
 "gap": 3
},
{
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "right": "10%",
 "contentOpaque": false,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "class": "Container",
 "verticalAlign": "top",
 "shadowSpread": 1,
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 0,
 "shadow": true,
 "borderSize": 0,
 "shadowBlurRadius": 25,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "propagateClick": false,
 "overflow": "scroll",
 "gap": 10
},
{
 "paddingBottom": 0,
 "layout": "vertical",
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "verticalAlign": "top",
 "right": "10%",
 "contentOpaque": false,
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "bottom": "80%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "overflow": "visible",
 "paddingRight": 20,
 "propagateClick": false,
 "borderRadius": 0,
 "data": {
  "name": "Container X global"
 },
 "gap": 10
},
{
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "right": "10%",
 "contentOpaque": false,
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "class": "Container",
 "verticalAlign": "top",
 "shadowSpread": 1,
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 0,
 "shadow": true,
 "borderSize": 0,
 "shadowBlurRadius": 25,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "propagateClick": false,
 "overflow": "scroll",
 "gap": 10
},
{
 "paddingBottom": 0,
 "layout": "vertical",
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "verticalAlign": "top",
 "right": "10%",
 "contentOpaque": false,
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "bottom": "80%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "overflow": "visible",
 "paddingRight": 20,
 "propagateClick": false,
 "borderRadius": 0,
 "data": {
  "name": "Container X global"
 },
 "gap": 10
},
{
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "right": "15%",
 "contentOpaque": false,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "class": "Container",
 "verticalAlign": "top",
 "shadowSpread": 1,
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "scrollBarMargin": 2,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 0,
 "shadow": true,
 "borderSize": 0,
 "shadowBlurRadius": 25,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "propagateClick": false,
 "overflow": "visible",
 "gap": 10
},
{
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "right": "10%",
 "contentOpaque": false,
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "class": "Container",
 "verticalAlign": "top",
 "shadowSpread": 1,
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 0,
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowBlurRadius": 25,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "propagateClick": false,
 "overflow": "scroll",
 "gap": 10
},
{
 "paddingBottom": 0,
 "layout": "vertical",
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "verticalAlign": "top",
 "right": "10%",
 "contentOpaque": false,
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "bottom": "80%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "overflow": "visible",
 "paddingRight": 20,
 "propagateClick": false,
 "borderRadius": 0,
 "data": {
  "name": "Container X global"
 },
 "gap": 10
},
{
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "right": "15%",
 "contentOpaque": false,
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "class": "Container",
 "verticalAlign": "top",
 "shadowSpread": 1,
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "scrollBarMargin": 2,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 0,
 "shadow": true,
 "borderSize": 0,
 "shadowBlurRadius": 25,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "propagateClick": false,
 "overflow": "visible",
 "gap": 10
},
{
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "right": "15%",
 "contentOpaque": false,
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "class": "Container",
 "verticalAlign": "top",
 "shadowSpread": 1,
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "scrollBarMargin": 2,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 0,
 "shadow": true,
 "borderSize": 0,
 "shadowBlurRadius": 25,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "propagateClick": false,
 "overflow": "visible",
 "gap": 10
},
{
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "right": "15%",
 "contentOpaque": false,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "class": "Container",
 "verticalAlign": "top",
 "shadowSpread": 1,
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "scrollBarMargin": 2,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 0,
 "shadow": true,
 "borderSize": 0,
 "shadowBlurRadius": 25,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "propagateClick": false,
 "overflow": "visible",
 "gap": 10
},
{
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "right": "10%",
 "contentOpaque": false,
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "class": "Container",
 "verticalAlign": "top",
 "shadowSpread": 1,
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 0,
 "shadow": true,
 "borderSize": 0,
 "shadowBlurRadius": 25,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "propagateClick": false,
 "overflow": "scroll",
 "gap": 10
},
{
 "paddingBottom": 0,
 "layout": "vertical",
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "verticalAlign": "top",
 "right": "10%",
 "contentOpaque": false,
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "bottom": "80%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "overflow": "visible",
 "paddingRight": 20,
 "propagateClick": false,
 "borderRadius": 0,
 "data": {
  "name": "Container X global"
 },
 "gap": 10
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88DB556B_D9E4_FD07_41E0_180769246820",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D8856B_D9E4_FD07_41E7_856D250C041B",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CDE576_D9E4_FD01_4194_3BF2C41C0F31",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D7407FD_DA6C_BD03_41D6_6A9A48FD3B04",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D7587FD_DA6C_BD03_41D9_32A0B3227006",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88FE7586_D9E4_FD01_41E4_CA48AF6F7FC6",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D7547FD_DA6C_BD03_41E0_B196685C698C",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D8AD7FD_DA6C_BD03_41E9_7C3CAEE0807B",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C6057D_D9E4_FD03_41EA_33F05939B52D",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D7D77ED_DA6C_BD03_41D1_3390F5A29F66",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F7158F_D9E4_FD1F_41DA_7E9DA08D31BE",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F4A58F_D9E4_FD1F_41C2_421607C84F54",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F4258F_D9E4_FD1F_41D4_39ACBD81F633",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F4658F_D9E4_FD1F_41CB_A06EE8EDF8D2",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C9457C_D9E4_FD01_41E7_922995C00D45",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D62E7DD_DA6C_BD03_41E0_8B39DD9F8850",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D2E56E_D9E4_FD01_41E6_1FA2DC2CB285",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D2256E_D9E4_FD01_41E8_A6BE2F15EC49",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D63C7DD_DA6C_BD03_41D8_F8239B99E580",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_1_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D3856E_D9E4_FD1A_41E9_A239707DE4A2",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D6367DD_DA6C_BD03_41E7_2C681BF39EF9",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F3E595_D9E4_FD03_41CD_63F707AA871A",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F36595_D9E4_FD03_41E2_BFC9B4CE66F7",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C5D57E_D9E4_FD01_4186_097CA2C95754",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C5757E_D9E4_FD01_41D7_AA9C134A0F7C",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C2957F_D9E4_FDFF_41E8_3765270E0A3A",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C37584_D9E4_FD01_41DD_E3C57389CE87",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D7697ED_DA6C_BD03_41E2_7ADBA9AA1EA4",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C02584_D9E4_FD01_41E1_7BB0FD574D1E",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88DA2565_D9E4_FD03_41E5_835FEC2D3BC6",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88DB9566_D9E4_FD01_41BD_001F7535A52A",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88DBC56B_D9E4_FD07_41BB_3D42E019638D",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C05585_D9E4_FD03_41D4_34DE3F16BE55",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C1D585_D9E4_FD03_4182_633D5C7456DE",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F5858F_D9E4_FD1F_41D8_4485D225FA65",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F5758F_D9E4_FD1F_41B1_377739968277",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F6D58E_D9E4_FD01_41C5_AFD70CA79EAF",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F7758E_D9E4_FD01_41E3_BAE24C956C37",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D4756D_D9E4_FD03_41E5_E87EC5F73464",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D5A56D_D9E4_FD03_41D9_AF0CF268745E",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D5C56D_D9E4_FD03_41CE_F21D18EFC47B",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D4F56D_D9E4_FD03_41E9_5896E9884066",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_1_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D4756D_D9E4_FD03_41E3_B4E2530C3E95",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_1_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D5B56D_D9E4_FD03_41D6_8F1BB70236BA",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_1_HS_6_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D5D56E_D9E4_FD01_41B9_50E25B2CE59A",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_1_HS_7_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D5056E_D9E4_FD01_41E0_76F0E707D1D6",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F9C58D_D9E4_FD03_41E3_2DA241D09582",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F6658E_D9E4_FD01_41B3_C759800854B7",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F7E58E_D9E4_FD01_41D4_C678B2F95069",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D8356B_D9E4_FD07_41EA_A787A3401629",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D8756B_D9E4_FD07_41E5_AC3D31EC92E4",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CFC575_D9E4_FD03_41E9_6596023FB8BE",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CF6575_D9E4_FD03_41DD_F01C4E140137",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CCA575_D9E4_FD03_41C0_DCDA47AA4F31",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CCC576_D9E4_FD01_41D2_B343F354DCAD",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_1_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CC0576_D9E4_FD01_41A2_6C7ECFC8F5A1",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_1_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CDB576_D9E4_FD01_41B5_2BC12D958171",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D31573_D9E4_FD07_41C1_B6A788EC695A",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D0B573_D9E4_FD07_41E7_C55837221F98",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D0D574_D9E4_FD01_41E7_3ADB937442CE",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D01574_D9E4_FD01_41D1_C9C3DE5CF2D7",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D04574_D9E4_FD01_41D8_608ACB4D3754",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D1C574_D9E4_FD01_41D0_C5FDF852B955",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_6_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D10574_D9E4_FD01_41E7_7E9335F4113F",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F0D596_D9E4_FD01_41E7_1FD2A1C54484",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F04596_D9E4_FD01_41DD_6661039A696D",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F1D596_D9E4_FD01_41E6_AAECDAFB2AFC",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C7C57D_D9E4_FD03_41EA_0161199AC32A",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C7557E_D9E4_FD01_41C4_6E1983C9D05F",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C4857E_D9E4_FD01_41B4_8E47B14FA85E",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C4357E_D9E4_FD01_41BF_F40283F99714",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_1_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C4557E_D9E4_FD01_41CA_2C6A9C0EEDC7",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CB657C_D9E4_FD01_41BF_AB59A5BCDA8F",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C8857C_D9E4_FD01_41DB_5F4625AA9E32",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C8257C_D9E4_FD01_41DA_632EC5D3732E",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C8657C_D9E4_FD01_41DC_972AEFD19B09",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_1_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C9857C_D9E4_FD01_41C7_B3E8FAB38926",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88FA658C_D9E4_FD01_41EA_9F6ACFDE4149",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88FBD58D_D9E4_FD03_41E5_4848982341AC",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88FB558D_D9E4_FD03_41E5_D0DAA7FFF397",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F8958D_D9E4_FD03_41B0_953788F3589A",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_1_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F8358D_D9E4_FD03_41B3_0776E2A92E05",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_1_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F9B58D_D9E4_FD03_41D9_1D3E0193D8D3",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CEA574_D9E4_FD01_41D1_E55BCDCED8C3",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CED574_D9E4_FD01_41D6_77C978756C93",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CE0574_D9E4_FD01_41EA_BC14F1B284B8",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CE4575_D9E4_FD03_41E0_9EA16633E4D4",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_1_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CFE575_D9E4_FD03_41E0_3035025F1414",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_1_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CF6575_D9E4_FD03_41D5_FBCCDE7FFE61",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_1_HS_6_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CC8575_D9E4_FD03_41B1_9B1DCD5877A0",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_1_HS_7_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CF8575_D9E4_FD03_41D6_AA03DE7F8CF2",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F9458D_D9E4_FD03_41E0_CD9BCA72D52D",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C6E57D_D9E4_FD03_41E8_C368E7B7CA09",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C2157F_D9E4_FDFF_41E9_D66E31D3E7C9",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C3B57F_D9E4_FDFF_41C5_9532A48FA81A",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C16585_D9E4_FD03_41C6_305690530B61",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88FE9585_D9E4_FD03_41E1_D0761BE30FA8",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F2A590_D9E4_FD01_41E1_B233FF064BB8",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F2D590_D9E4_FD01_41E7_C8A2BE525DD4",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F24595_D9E4_FD03_41E1_5F76F8975E43",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D7A97ED_DA6C_BD03_41D8_093E3707AA25",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CAA576_D9E4_FD01_41D8_F67E792E8CA6",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D7A27ED_DA6C_BD03_41BD_826A73083B7B",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CA0576_D9E4_FD0A_41D5_1BF90BCB92CD",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D7BA7ED_DA6C_BD03_41E3_8EB46009ACB2",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_1_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CBD57C_D9E4_FD01_41E6_A072E677F9F6",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_6_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D7B77ED_DA6C_BD03_41E9_C9D94AD9F56F",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_7_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D78B7ED_DA6C_BD03_41D3_C7BAB1AEAF0B",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_8_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D7967ED_DA6C_BD03_41A6_8C84A35E6991",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D6B27DD_DA6C_BD03_41DD_17EEF4E158C3",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D6887DD_DA6C_BD03_41AB_095E61577CC3",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D9656C_D9E4_FD01_41E0_1B785D57E945",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D6857DD_DA6C_BD03_41D9_FECBE7A8F4EF",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D69A7DD_DA6C_BD03_41E9_4C3CAE342213",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88FF8586_D9E4_FD01_41EA_9286D74FC88E",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88FF2586_D9E4_FD01_41C9_3C916EE91D07",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88FCB586_D9E4_FD01_41DF_BF0E02DA7D0F",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88FC3587_D9E4_FD0F_41D7_2E0691E9925D",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_1_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88FC5587_D9E4_FD0F_41E7_079DF8774749",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88FDC587_D9E4_FD0F_41EA_15DAD634B540",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88FD5587_D9E4_FD0F_41E4_87387779DE15",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88FAE587_D9E4_FD0F_41E0_FEE956FC10F0",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F4F58E_D9E4_FD01_41C1_CC00A4AB699C",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F7A58F_D9E4_FD1F_41E4_D26CCBB1A144",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C3E584_D9E4_FD01_41DF_1E5D837589FA",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C6E57D_D9E4_FD03_41E1_FBD5673DB839",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C6057D_D9E4_FD03_41E0_D489277B54B6",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C7A57D_D9E4_FD03_41E9_F58F692F6E3D",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C7C57D_D9E4_FD03_4146_B1FACA8E5719",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C9257C_D9E4_FD01_41CB_CE417E5864A1",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D6756C_D9E4_FD01_41BE_D9813FB9282F",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D7A56C_D9E4_FD01_41C8_FF0F05778E96",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D7C56C_D9E4_FD01_41D8_0943BF4F3533",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D6EA7DD_DA6C_BD03_41DE_EB33B672075D",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D6E07DD_DA6C_BD03_41C8_ED6055CA8693",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8BFF1B47_D9A4_B50F_41A0_7933F2121B6B",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_6_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D6FD7DD_DA6C_BD03_41E5_B8E96A4A5ECF",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_7_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8BF8BB47_D9A4_B50F_41E8_D9B7AEF2FDF9",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_8_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D6F47DD_DA6C_BD03_41E1_ADF30F8563D7",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_9_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D6CD7DD_DA6C_BD03_41C4_F391D67DBD3C",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88FE1585_D9E4_FD03_41D6_B16191028AD6",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C12585_D9E4_FD03_41E9_60943BB40C46",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "transparencyActive": true,
 "maxHeight": 60,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "verticalAlign": "middle",
 "class": "IconButton",
 "width": 60,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "toggle",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "height": 60,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "propagateClick": true,
 "cursor": "hand",
 "borderRadius": 0,
 "data": {
  "name": "image button menu"
 }
},
{
 "paddingBottom": 0,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "transparencyActive": true,
 "maxHeight": 58,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "class": "IconButton",
 "width": 58,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "click": "this.shareTwitter(window.location.href)",
 "height": 58,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "propagateClick": true,
 "visible": false,
 "cursor": "hand",
 "borderRadius": 0,
 "data": {
  "name": "IconButton TWITTER"
 }
},
{
 "paddingBottom": 0,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "transparencyActive": true,
 "maxHeight": 58,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "class": "IconButton",
 "width": 58,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "click": "this.shareFacebook(window.location.href)",
 "height": 58,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "propagateClick": true,
 "visible": false,
 "cursor": "hand",
 "borderRadius": 0,
 "data": {
  "name": "IconButton FB"
 }
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000"
 ],
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "width": 120,
 "pressedBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconHeight": 0,
 "class": "Button",
 "shadowSpread": 1,
 "fontColor": "#FFFFFF",
 "rollOverShadow": false,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "iconWidth": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "shadowBlurRadius": 15,
 "pressedBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "label": "HOUSE INFO",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontSize": 12,
 "height": 40,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "bold",
 "visible": false,
 "cursor": "hand",
 "borderRadius": 0,
 "data": {
  "name": "Button house info"
 },
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "propagateClick": true
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "width": 130,
 "pressedBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconHeight": 32,
 "class": "Button",
 "shadowSpread": 1,
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "iconWidth": 32,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "shadowBlurRadius": 15,
 "pressedBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "label": "PANORAMA LIST",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontSize": 12,
 "height": 40,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "bold",
 "cursor": "hand",
 "borderRadius": 0,
 "data": {
  "name": "Button panorama list"
 },
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "propagateClick": true
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "width": 90,
 "pressedBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconHeight": 32,
 "class": "Button",
 "shadowSpread": 1,
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "iconWidth": 32,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "shadowBlurRadius": 15,
 "pressedBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "label": "LOCATION",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontSize": 12,
 "height": 40,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "bold",
 "cursor": "hand",
 "borderRadius": 0,
 "data": {
  "name": "Button location"
 },
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "propagateClick": true
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "width": 103,
 "pressedBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconHeight": 32,
 "class": "Button",
 "shadowSpread": 1,
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "iconWidth": 32,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "shadowBlurRadius": 15,
 "pressedBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "label": "FLOORPLAN",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontSize": 12,
 "height": 40,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "bold",
 "visible": false,
 "cursor": "hand",
 "borderRadius": 0,
 "data": {
  "name": "Button floorplan"
 },
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "propagateClick": true
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "width": 112,
 "pressedBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconHeight": 32,
 "class": "Button",
 "shadowSpread": 1,
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "iconWidth": 32,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "shadowBlurRadius": 15,
 "pressedBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "label": "PHOTOALBUM",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontSize": 12,
 "height": 40,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "bold",
 "visible": false,
 "cursor": "hand",
 "borderRadius": 0,
 "data": {
  "name": "Button photoalbum"
 },
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "propagateClick": true
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Button_1B9A3D00_16C4_0505_41B2_6830155B7D52",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "width": 90,
 "pressedBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconHeight": 32,
 "class": "Button",
 "shadowSpread": 1,
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "iconWidth": 32,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "shadowBlurRadius": 15,
 "pressedBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "label": "REALTOR",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontSize": 12,
 "height": 40,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "bold",
 "visible": false,
 "cursor": "hand",
 "borderRadius": 0,
 "data": {
  "name": "Button realtor"
 },
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "propagateClick": true
},
{
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0
 ],
 "height": "100%",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "verticalAlign": "middle",
 "layout": "absolute",
 "contentOpaque": false,
 "width": "85%",
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "overflow": "scroll",
 "paddingRight": 0,
 "propagateClick": false,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "-left"
 },
 "gap": 10
},
{
 "borderRadius": 0,
 "paddingBottom": 20,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": "100%",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "verticalAlign": "top",
 "layout": "vertical",
 "contentOpaque": false,
 "width": "50%",
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 50,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 460,
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "overflow": "visible",
 "paddingRight": 50,
 "propagateClick": false,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "-right"
 },
 "gap": 0
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "transparencyActive": false,
 "maxHeight": 60,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "class": "IconButton",
 "width": "25%",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "paddingLeft": 0,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "height": "75%",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "propagateClick": false,
 "cursor": "hand",
 "borderRadius": 0,
 "data": {
  "name": "X"
 }
},
{
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0
 ],
 "height": "100%",
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "verticalAlign": "middle",
 "layout": "absolute",
 "contentOpaque": false,
 "width": "85%",
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "overflow": "scroll",
 "paddingRight": 0,
 "propagateClick": false,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "-left"
 },
 "gap": 10
},
{
 "borderRadius": 0,
 "paddingBottom": 20,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": "100%",
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "verticalAlign": "top",
 "layout": "vertical",
 "contentOpaque": false,
 "width": "50%",
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 50,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 460,
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "overflow": "visible",
 "paddingRight": 50,
 "propagateClick": false,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "-right"
 },
 "gap": 0
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "transparencyActive": false,
 "maxHeight": 60,
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "class": "IconButton",
 "width": "25%",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "paddingLeft": 0,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "height": "75%",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "propagateClick": false,
 "cursor": "hand",
 "borderRadius": 0,
 "data": {
  "name": "X"
 }
},
{
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "verticalAlign": "top",
 "contentOpaque": false,
 "width": "100%",
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 140,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "overflow": "scroll",
 "paddingRight": 0,
 "propagateClick": false,
 "borderRadius": 0,
 "data": {
  "name": "header"
 },
 "gap": 10
},
{
 "paddingBottom": 70,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "itemThumbnailScaleMode": "fit_outside",
 "itemMaxWidth": 1000,
 "verticalAlign": "middle",
 "itemPaddingLeft": 3,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "width": "100%",
 "itemThumbnailWidth": 220,
 "class": "ThumbnailGrid",
 "itemPaddingTop": 3,
 "backgroundOpacity": 0.05,
 "paddingLeft": 70,
 "scrollBarWidth": 10,
 "itemPaddingRight": 3,
 "itemBackgroundColor": [],
 "itemLabelPosition": "bottom",
 "selectedItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "borderSize": 0,
 "itemThumbnailShadow": false,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "itemLabelFontColor": "#666666",
 "scrollBarVisible": "rollOver",
 "itemThumbnailOpacity": 1,
 "rollOverItemThumbnailShadow": true,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "selectedItemThumbnailShadow": true,
 "itemLabelGap": 7,
 "height": "100%",
 "backgroundColorDirection": "vertical",
 "itemOpacity": 1,
 "itemBackgroundColorRatios": [],
 "paddingRight": 70,
 "itemBackgroundColorDirection": "vertical",
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemMinHeight": 50,
 "backgroundColorRatios": [
  0
 ],
 "itemThumbnailBorderRadius": 0,
 "itemMode": "normal",
 "itemLabelFontWeight": "normal",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "itemHorizontalAlign": "center",
 "selectedItemLabelFontWeight": "bold",
 "itemMaxHeight": 1000,
 "itemMinWidth": 50,
 "itemBackgroundOpacity": 0,
 "itemWidth": 220,
 "minHeight": 1,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemPaddingBottom": 3,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 10,
 "minWidth": 1,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemHeight": 156,
 "itemLabelTextDecoration": "none",
 "itemThumbnailHeight": 125,
 "itemLabelFontFamily": "Montserrat",
 "scrollBarColor": "#04A3E1",
 "itemLabelFontStyle": "normal",
 "itemBorderRadius": 0,
 "horizontalAlign": "center",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "data": {
  "name": "ThumbnailList"
 },
 "itemLabelFontSize": 14,
 "itemLabelHorizontalAlign": "center",
 "gap": 26,
 "propagateClick": false,
 "borderRadius": 5,
 "itemVerticalAlign": "top"
},
{
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0
 ],
 "height": "100%",
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "verticalAlign": "middle",
 "layout": "absolute",
 "contentOpaque": false,
 "width": "85%",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "overflow": "scroll",
 "paddingRight": 0,
 "propagateClick": false,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "-left"
 },
 "gap": 10
},
{
 "borderRadius": 0,
 "paddingBottom": 20,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": "100%",
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "verticalAlign": "top",
 "layout": "vertical",
 "contentOpaque": false,
 "width": "15%",
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 50,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 400,
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "overflow": "visible",
 "paddingRight": 50,
 "propagateClick": false,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "-right"
 },
 "gap": 0
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "transparencyActive": false,
 "maxHeight": 60,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "class": "IconButton",
 "width": "25%",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "paddingLeft": 0,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "height": "75%",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "propagateClick": false,
 "cursor": "hand",
 "borderRadius": 0,
 "data": {
  "name": "X"
 }
},
{
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "verticalAlign": "top",
 "contentOpaque": false,
 "width": "100%",
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 140,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "overflow": "scroll",
 "paddingRight": 0,
 "propagateClick": false,
 "borderRadius": 0,
 "data": {
  "name": "header"
 },
 "gap": 10
},
{
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "transitionDuration": 500,
 "id": "MapViewer",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowColor": "#000000",
 "width": "100%",
 "playbackBarBorderRadius": 0,
 "class": "ViewerArea",
 "progressRight": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadBorderSize": 0,
 "paddingLeft": 0,
 "toolTipFontWeight": "normal",
 "progressOpacity": 1,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "transitionMode": "blending",
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipShadowBlurRadius": 3,
 "toolTipPaddingRight": 6,
 "borderSize": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBorderColor": "#767676",
 "height": "100%",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadow": true,
 "toolTipPaddingBottom": 4,
 "firstTransitionDuration": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBorderRadius": 3,
 "progressBottom": 2,
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressHeight": 6,
 "playbackBarBottom": 0,
 "progressBackgroundOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBorderColor": "#FFFFFF",
 "playbackBarOpacity": 1,
 "playbackBarProgressBorderColor": "#000000",
 "paddingRight": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarLeft": 0,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingTop": 4,
 "playbackBarHeadHeight": 15,
 "progressBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressLeft": 0,
 "progressBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "minHeight": 1,
 "playbackBarBorderSize": 0,
 "progressBorderRadius": 0,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderSize": 1,
 "toolTipTextShadowBlurRadius": 3,
 "shadow": false,
 "displayTooltipInTouchScreens": true,
 "paddingTop": 0,
 "minWidth": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipFontFamily": "Arial",
 "toolTipShadowColor": "#333333",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderSize": 6,
 "toolTipFontSize": 12,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "toolTipDisplayTime": 600,
 "playbackBarBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowVerticalLength": 0,
 "playbackBarProgressBorderRadius": 0,
 "data": {
  "name": "Floor Plan"
 },
 "toolTipPaddingLeft": 6,
 "progressBarBorderRadius": 0,
 "propagateClick": false,
 "borderRadius": 0
},
{
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "verticalAlign": "top",
 "contentOpaque": false,
 "width": "100%",
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 140,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "overflow": "scroll",
 "paddingRight": 0,
 "propagateClick": false,
 "borderRadius": 0,
 "data": {
  "name": "header"
 },
 "gap": 10
},
{
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": "100%",
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "verticalAlign": "top",
 "layout": "absolute",
 "contentOpaque": false,
 "width": "100%",
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "overflow": "visible",
 "paddingRight": 0,
 "propagateClick": false,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Container photo"
 },
 "gap": 10
},
{
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": "100%",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "verticalAlign": "top",
 "layout": "absolute",
 "contentOpaque": false,
 "width": "100%",
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "overflow": "visible",
 "paddingRight": 0,
 "propagateClick": false,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Container photo"
 },
 "gap": 10
},
{
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0
 ],
 "height": "100%",
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "verticalAlign": "middle",
 "layout": "absolute",
 "contentOpaque": false,
 "width": "55%",
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "overflow": "scroll",
 "paddingRight": 0,
 "propagateClick": false,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "-left"
 },
 "gap": 10
},
{
 "borderRadius": 0,
 "paddingBottom": 20,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": "100%",
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "verticalAlign": "top",
 "layout": "vertical",
 "contentOpaque": false,
 "width": "45%",
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 60,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 460,
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "overflow": "visible",
 "paddingRight": 60,
 "propagateClick": false,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "-right"
 },
 "gap": 0
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "transparencyActive": false,
 "maxHeight": 60,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "class": "IconButton",
 "width": "25%",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "paddingLeft": 0,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "height": "75%",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "propagateClick": false,
 "cursor": "hand",
 "borderRadius": 0,
 "data": {
  "name": "X"
 }
},
{
 "paddingBottom": 0,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "maxHeight": 1000,
 "verticalAlign": "middle",
 "class": "Image",
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "width": "100%",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scaleMode": "fit_outside",
 "height": "100%",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "propagateClick": false,
 "borderRadius": 0,
 "data": {
  "name": "Image"
 }
},
{
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "verticalAlign": "top",
 "contentOpaque": false,
 "width": "100%",
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "minHeight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 60,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "right",
 "overflow": "scroll",
 "paddingRight": 0,
 "propagateClick": false,
 "borderRadius": 0,
 "data": {
  "name": "Container space"
 },
 "gap": 0
},
{
 "borderRadius": 0,
 "paddingBottom": 30,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": "100%",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "verticalAlign": "top",
 "layout": "vertical",
 "contentOpaque": false,
 "width": "100%",
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "minHeight": 520,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 100,
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "overflow": "scroll",
 "paddingRight": 0,
 "propagateClick": false,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Container text"
 },
 "gap": 10
},
{
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "width": 370,
 "verticalAlign": "top",
 "layout": "horizontal",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 40,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "overflow": "scroll",
 "paddingRight": 0,
 "propagateClick": false,
 "borderRadius": 0,
 "data": {
  "name": "Container space"
 },
 "gap": 10
},
{
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "transitionDuration": 500,
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "right": 0,
 "playbackBarBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "progressRight": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadBorderSize": 0,
 "paddingLeft": 0,
 "toolTipFontWeight": "normal",
 "progressOpacity": 1,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "transitionMode": "blending",
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipShadowBlurRadius": 3,
 "toolTipPaddingRight": 6,
 "borderSize": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBorderColor": "#767676",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadow": true,
 "toolTipPaddingBottom": 4,
 "firstTransitionDuration": 0,
 "vrPointerSelectionColor": "#FF6600",
 "progressBottom": 2,
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressHeight": 6,
 "playbackBarBottom": 0,
 "progressBackgroundOpacity": 1,
 "toolTipFontStyle": "normal",
 "vrPointerSelectionTime": 2000,
 "progressBorderColor": "#FFFFFF",
 "playbackBarOpacity": 1,
 "toolTipBorderRadius": 3,
 "playbackBarProgressBorderColor": "#000000",
 "paddingRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarLeft": 0,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingTop": 4,
 "playbackBarHeadHeight": 15,
 "progressBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressLeft": 0,
 "progressBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "minHeight": 1,
 "playbackBarHeadWidth": 6,
 "top": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "bottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipBorderSize": 1,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundOpacity": 1,
 "shadow": false,
 "displayTooltipInTouchScreens": true,
 "paddingTop": 0,
 "minWidth": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipFontFamily": "Arial",
 "toolTipShadowColor": "#333333",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderSize": 6,
 "toolTipFontSize": 12,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "toolTipDisplayTime": 600,
 "playbackBarBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowVerticalLength": 0,
 "playbackBarProgressBorderRadius": 0,
 "data": {
  "name": "Viewer info 1"
 },
 "toolTipPaddingLeft": 6,
 "progressBarBorderRadius": 0,
 "propagateClick": false,
 "borderRadius": 0
},
{
 "paddingBottom": 0,
 "layout": "horizontal",
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "verticalAlign": "middle",
 "contentOpaque": false,
 "width": "100%",
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "horizontalAlign": "left",
 "overflow": "scroll",
 "paddingRight": 0,
 "propagateClick": false,
 "borderRadius": 0,
 "data": {
  "name": "Container arrows"
 },
 "gap": 10
},
{
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "verticalAlign": "top",
 "contentOpaque": false,
 "width": "100%",
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "minHeight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 60,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "right",
 "overflow": "scroll",
 "paddingRight": 0,
 "propagateClick": false,
 "borderRadius": 0,
 "data": {
  "name": "Container space"
 },
 "gap": 0
},
{
 "borderRadius": 0,
 "paddingBottom": 30,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": "100%",
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "verticalAlign": "top",
 "layout": "vertical",
 "contentOpaque": false,
 "width": "100%",
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "minHeight": 520,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 100,
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "overflow": "scroll",
 "paddingRight": 0,
 "propagateClick": false,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Container text"
 },
 "gap": 10
},
{
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "width": 370,
 "verticalAlign": "top",
 "layout": "horizontal",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 40,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "overflow": "scroll",
 "paddingRight": 0,
 "propagateClick": false,
 "borderRadius": 0,
 "data": {
  "name": "Container space"
 },
 "gap": 10
},
{
 "paddingBottom": 0,
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "width": "77.115%",
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "minHeight": 100,
 "paddingLeft": 80,
 "top": "0%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.15vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.15vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "paddingRight": 0,
 "propagateClick": false,
 "borderRadius": 0,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "transparencyActive": false,
 "maxHeight": 60,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "right": 20,
 "class": "IconButton",
 "width": "100%",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "height": "36.14%",
 "horizontalAlign": "right",
 "paddingRight": 0,
 "propagateClick": false,
 "cursor": "hand",
 "borderRadius": 0,
 "data": {
  "name": "IconButton X"
 }
},
{
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0
 ],
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "right": "0%",
 "class": "WebFrame",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d673.2763774025825!2d-122.5430829!3d47.54627519999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490478a6f72db75%3A0x145ffc32bb64b9f5!2s1310%20Colchester%20Dr%20E%2C%20Port%20Orchard%2C%20WA%2098366!5e0!3m2!1sen!2sus!4v1713057739566!5m2!1sen!2sus",
 "backgroundOpacity": 1,
 "scrollEnabled": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "bottom": "0%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorDirection": "vertical",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "propagateClick": false,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "verticalAlign": "top",
 "contentOpaque": false,
 "width": "100%",
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "minHeight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 60,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "right",
 "overflow": "scroll",
 "paddingRight": 0,
 "propagateClick": false,
 "borderRadius": 0,
 "data": {
  "name": "Container space"
 },
 "gap": 0
},
{
 "borderRadius": 0,
 "paddingBottom": 30,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": "100%",
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "verticalAlign": "top",
 "layout": "vertical",
 "contentOpaque": false,
 "width": "100%",
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "minHeight": 520,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 100,
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "overflow": "scroll",
 "paddingRight": 0,
 "propagateClick": false,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Container text"
 },
 "gap": 10
},
{
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "width": 370,
 "verticalAlign": "top",
 "layout": "horizontal",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 40,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "overflow": "scroll",
 "paddingRight": 0,
 "propagateClick": false,
 "borderRadius": 0,
 "data": {
  "name": "Container space"
 },
 "gap": 10
},
{
 "paddingBottom": 0,
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "width": "77.115%",
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "minHeight": 100,
 "paddingLeft": 80,
 "top": "0%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.15vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.15vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "paddingRight": 0,
 "propagateClick": false,
 "borderRadius": 0,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "transparencyActive": false,
 "maxHeight": 60,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "right": 20,
 "class": "IconButton",
 "width": "100%",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "height": "36.14%",
 "horizontalAlign": "right",
 "paddingRight": 0,
 "propagateClick": false,
 "cursor": "hand",
 "borderRadius": 0,
 "data": {
  "name": "IconButton X"
 }
},
{
 "paddingBottom": 0,
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "width": "77.115%",
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "minHeight": 100,
 "paddingLeft": 80,
 "top": "0%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.15vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.15vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "paddingRight": 0,
 "propagateClick": false,
 "borderRadius": 0,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "transparencyActive": false,
 "maxHeight": 60,
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "right": 20,
 "class": "IconButton",
 "width": "100%",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "height": "36.14%",
 "horizontalAlign": "right",
 "paddingRight": 0,
 "propagateClick": false,
 "cursor": "hand",
 "borderRadius": 0,
 "data": {
  "name": "IconButton X"
 }
},
{
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "transitionDuration": 500,
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowColor": "#000000",
 "width": "100%",
 "playbackBarBorderRadius": 0,
 "class": "ViewerArea",
 "progressRight": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadBorderSize": 0,
 "paddingLeft": 0,
 "toolTipFontWeight": "normal",
 "progressOpacity": 1,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "transitionMode": "blending",
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipShadowBlurRadius": 3,
 "toolTipPaddingRight": 6,
 "borderSize": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBorderColor": "#767676",
 "height": "100%",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadow": true,
 "toolTipPaddingBottom": 4,
 "firstTransitionDuration": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBorderRadius": 3,
 "progressBottom": 2,
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressHeight": 6,
 "playbackBarBottom": 0,
 "progressBackgroundOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBorderColor": "#FFFFFF",
 "playbackBarOpacity": 1,
 "playbackBarLeft": 0,
 "paddingRight": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingTop": 4,
 "playbackBarHeadHeight": 15,
 "progressBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressLeft": 0,
 "progressBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "minHeight": 1,
 "playbackBarHeadWidth": 6,
 "top": "0%",
 "progressBorderRadius": 0,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderSize": 1,
 "toolTipTextShadowBlurRadius": 3,
 "shadow": false,
 "displayTooltipInTouchScreens": true,
 "paddingTop": 0,
 "minWidth": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipFontFamily": "Arial",
 "toolTipShadowColor": "#333333",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderSize": 6,
 "toolTipFontSize": 12,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "toolTipDisplayTime": 600,
 "playbackBarBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowVerticalLength": 0,
 "playbackBarProgressBorderRadius": 0,
 "data": {
  "name": "Viewer photoalbum + text 1"
 },
 "toolTipPaddingLeft": 6,
 "progressBarBorderRadius": 0,
 "propagateClick": false,
 "borderRadius": 0
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "left": 10,
 "transparencyActive": false,
 "maxHeight": 60,
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "class": "IconButton",
 "width": "14.22%",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "bottom": "20%",
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "propagateClick": false,
 "cursor": "hand",
 "borderRadius": 0,
 "data": {
  "name": "IconButton <"
 }
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "transparencyActive": false,
 "maxHeight": 60,
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "right": 10,
 "class": "IconButton",
 "width": "14.22%",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "bottom": "20%",
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "propagateClick": false,
 "cursor": "hand",
 "borderRadius": 0,
 "data": {
  "name": "IconButton >"
 }
},
{
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "transitionDuration": 500,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowColor": "#000000",
 "width": "100%",
 "playbackBarBorderRadius": 0,
 "class": "ViewerArea",
 "progressRight": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadBorderSize": 0,
 "paddingLeft": 0,
 "toolTipFontWeight": "normal",
 "progressOpacity": 1,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "transitionMode": "blending",
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipShadowBlurRadius": 3,
 "toolTipPaddingRight": 6,
 "borderSize": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBorderColor": "#767676",
 "height": "100%",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadow": true,
 "toolTipPaddingBottom": 4,
 "firstTransitionDuration": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBorderRadius": 3,
 "progressBottom": 2,
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressHeight": 6,
 "playbackBarBottom": 0,
 "progressBackgroundOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBorderColor": "#FFFFFF",
 "playbackBarOpacity": 1,
 "playbackBarLeft": 0,
 "paddingRight": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingTop": 4,
 "playbackBarHeadHeight": 15,
 "progressBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressLeft": 0,
 "progressBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "minHeight": 1,
 "playbackBarHeadWidth": 6,
 "top": "0%",
 "progressBorderRadius": 0,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderSize": 1,
 "toolTipTextShadowBlurRadius": 3,
 "shadow": false,
 "displayTooltipInTouchScreens": true,
 "paddingTop": 0,
 "minWidth": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipFontFamily": "Arial",
 "toolTipShadowColor": "#333333",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderSize": 6,
 "toolTipFontSize": 12,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "toolTipDisplayTime": 600,
 "playbackBarBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowVerticalLength": 0,
 "playbackBarProgressBorderRadius": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "toolTipPaddingLeft": 6,
 "progressBarBorderRadius": 0,
 "propagateClick": false,
 "borderRadius": 0
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "transparencyActive": false,
 "maxHeight": 60,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "class": "IconButton",
 "width": "14.22%",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "bottom": "20%",
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "propagateClick": false,
 "cursor": "hand",
 "borderRadius": 0,
 "data": {
  "name": "IconButton <"
 }
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "transparencyActive": false,
 "maxHeight": 60,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "right": 10,
 "class": "IconButton",
 "width": "14.22%",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "bottom": "20%",
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "propagateClick": false,
 "cursor": "hand",
 "borderRadius": 0,
 "data": {
  "name": "IconButton >"
 }
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "transparencyActive": false,
 "maxHeight": 60,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "right": 20,
 "class": "IconButton",
 "width": "10%",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "height": "10%",
 "horizontalAlign": "right",
 "paddingRight": 0,
 "propagateClick": false,
 "cursor": "hand",
 "borderRadius": 0,
 "data": {
  "name": "IconButton X"
 }
},
{
 "paddingBottom": 0,
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "maxHeight": 1000,
 "verticalAlign": "bottom",
 "class": "Image",
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "width": "100%",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scaleMode": "fit_outside",
 "height": "100%",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "propagateClick": false,
 "borderRadius": 0,
 "data": {
  "name": "Image"
 }
},
{
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "verticalAlign": "top",
 "contentOpaque": false,
 "width": "100%",
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "minHeight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 60,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "right",
 "overflow": "scroll",
 "paddingRight": 0,
 "propagateClick": false,
 "borderRadius": 0,
 "data": {
  "name": "Container space"
 },
 "gap": 0
},
{
 "borderRadius": 0,
 "paddingBottom": 30,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": "100%",
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "verticalAlign": "top",
 "layout": "vertical",
 "contentOpaque": false,
 "width": "100%",
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "minHeight": 520,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 100,
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "overflow": "scroll",
 "paddingRight": 0,
 "propagateClick": false,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Container text"
 },
 "gap": 10
},
{
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "width": 370,
 "verticalAlign": "top",
 "layout": "horizontal",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 40,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "overflow": "scroll",
 "paddingRight": 0,
 "propagateClick": false,
 "borderRadius": 0,
 "data": {
  "name": "Container space"
 },
 "gap": 10
},
{
 "paddingBottom": 20,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "width": "100%",
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingLeft": 10,
 "minHeight": 1,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.47vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.35vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.35vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.35vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.35vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.58vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "paddingRight": 10,
 "borderRadius": 0,
 "data": {
  "name": "HTMLText"
 },
 "propagateClick": false
},
{
 "textDecoration": "none",
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0
 ],
 "height": "9%",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "fontStyle": "normal",
 "pressedBackgroundOpacity": 1,
 "iconWidth": 32,
 "verticalAlign": "middle",
 "fontFamily": "Bebas Neue Bold",
 "iconHeight": 32,
 "class": "Button",
 "shadowSpread": 1,
 "layout": "horizontal",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "width": "46%",
 "borderColor": "#000000",
 "backgroundOpacity": 0.7,
 "minHeight": 1,
 "paddingLeft": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "shadowBlurRadius": 6,
 "pressedBackgroundColorRatios": [
  0
 ],
 "label": "lorem ipsum",
 "rollOverBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontSize": "3vh",
 "backgroundColor": [
  "#04A3E1"
 ],
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "normal",
 "propagateClick": false,
 "cursor": "hand",
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button"
 },
 "gap": 5
},
{
 "paddingBottom": 0,
 "maxWidth": 150,
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "transparencyActive": true,
 "maxHeight": 150,
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "class": "IconButton",
 "width": "12%",
 "backgroundOpacity": 0,
 "minHeight": 70,
 "paddingLeft": 0,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "paddingTop": 0,
 "minWidth": 70,
 "mode": "push",
 "height": "8%",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "propagateClick": false,
 "cursor": "hand",
 "borderRadius": 0,
 "data": {
  "name": "IconButton <"
 }
},
{
 "paddingBottom": 0,
 "layout": "absolute",
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "verticalAlign": "top",
 "contentOpaque": false,
 "width": "80%",
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "minHeight": 1,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "height": "30%",
 "horizontalAlign": "left",
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "data": {
  "name": "Container separator"
 },
 "gap": 10,
 "propagateClick": false
},
{
 "paddingBottom": 0,
 "maxWidth": 150,
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "transparencyActive": true,
 "maxHeight": 150,
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "class": "IconButton",
 "width": "12%",
 "backgroundOpacity": 0,
 "minHeight": 70,
 "paddingLeft": 0,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "paddingTop": 0,
 "minWidth": 70,
 "mode": "push",
 "height": "8%",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "propagateClick": false,
 "cursor": "hand",
 "borderRadius": 0,
 "data": {
  "name": "IconButton >"
 }
},
{
 "paddingBottom": 20,
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "width": "100%",
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingLeft": 10,
 "minHeight": 1,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.47vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.35vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.35vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV></div>",
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "paddingRight": 10,
 "borderRadius": 0,
 "data": {
  "name": "HTMLText"
 },
 "propagateClick": false
},
{
 "textDecoration": "none",
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0
 ],
 "height": "9%",
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "fontStyle": "normal",
 "pressedBackgroundOpacity": 1,
 "iconWidth": 32,
 "verticalAlign": "middle",
 "fontFamily": "Bebas Neue Bold",
 "iconHeight": 32,
 "class": "Button",
 "shadowSpread": 1,
 "layout": "horizontal",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "width": "46%",
 "borderColor": "#000000",
 "backgroundOpacity": 0.7,
 "minHeight": 1,
 "paddingLeft": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "shadowBlurRadius": 6,
 "pressedBackgroundColorRatios": [
  0
 ],
 "label": "lorem ipsum",
 "rollOverBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontSize": "3vh",
 "backgroundColor": [
  "#04A3E1"
 ],
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "normal",
 "propagateClick": false,
 "cursor": "hand",
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button"
 },
 "gap": 5
},
{
 "paddingBottom": 20,
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "width": "100%",
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingLeft": 10,
 "minHeight": 1,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.79vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.24vh;font-family:'Bebas Neue Bold';\">1310 Colchester Dr E, Port Orchard, WA 98366</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:5.15vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">VIEW! VIEW! VIEW! Custom built home with views of Seattle and the Sound. Vaulted ceilings and plenty of space including a fireplace to keep you warm and cozy. A chef's dream kitchen with all appliances included along with washer, dryer, &amp; walk-in pantry. Formal living room and primary w/en-suite bath. Wrap around deck accessible from many rooms to soak in the view with a drink of your choice. Meditation/study room for those quiet times. Restore and bring back to life the beautiful Koi pond with cascading fountain for your enjoyment. Daylight basement includes 2 bedrooms, bath &amp; full kitchen, fridge, washer &amp; dryer. Easy commute to Seattle ferry, HWY 16, medical, and shopping.</SPAN></SPAN></DIV></div>",
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "paddingRight": 10,
 "borderRadius": 0,
 "data": {
  "name": "HTMLText"
 },
 "propagateClick": false
},
{
 "textDecoration": "none",
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#04A3E1"
 ],
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "fontStyle": "normal",
 "width": 207,
 "pressedBackgroundOpacity": 1,
 "iconWidth": 32,
 "verticalAlign": "middle",
 "fontFamily": "Bebas Neue Bold",
 "iconHeight": 32,
 "class": "Button",
 "shadowSpread": 1,
 "layout": "horizontal",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "backgroundOpacity": 0.7,
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 59,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "shadowBlurRadius": 6,
 "pressedBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 1,
 "label": "lorem ipsum",
 "backgroundColorDirection": "vertical",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontSize": 34,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "normal",
 "propagateClick": false,
 "visible": false,
 "cursor": "hand",
 "data": {
  "name": "Button"
 },
 "gap": 5
},
{
 "paddingBottom": 10,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "width": "100%",
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "minHeight": 1,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.93vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "scrollBarVisible": "rollOver",
 "height": "45%",
 "paddingRight": 0,
 "borderRadius": 0,
 "data": {
  "name": "HTMLText18899"
 },
 "propagateClick": false
},
{
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": "80%",
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "verticalAlign": "top",
 "layout": "horizontal",
 "contentOpaque": false,
 "width": "100%",
 "children": [
  "this.Image_AAEAE258_BAF1_0DDD_41E6_FB144FCE6904",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "overflow": "scroll",
 "paddingRight": 0,
 "propagateClick": false,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "- content"
 },
 "gap": 10
},
{
 "paddingBottom": 0,
 "maxWidth": 983,
 "id": "Image_AAEAE258_BAF1_0DDD_41E6_FB144FCE6904",
 "maxHeight": 1219,
 "verticalAlign": "middle",
 "class": "Image",
 "url": "skin/Image_AAEAE258_BAF1_0DDD_41E6_FB144FCE6904.jpg",
 "width": "25.177%",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scaleMode": "fit_inside",
 "height": "30.5%",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "propagateClick": false,
 "borderRadius": 0,
 "data": {
  "name": "Image4092"
 }
},
{
 "paddingBottom": 10,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "width": "72.222%",
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingLeft": 10,
 "minHeight": 1,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#233142;font-size:2.35vh;font-family:'Bebas Neue Bold';\">NICHOLAS CUMMINGS</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;font-family:'Bebas Neue Bold';\">Licensed Realtor</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.79vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.79vh;font-family:'Bebas Neue Bold';\">Tlf.: +1 (253) 225-0548</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.79vh;font-family:'Bebas Neue Bold';\">NicholasC@JohnLScott.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.79vh;font-family:'Bebas Neue Bold';\">NicholasC.JohnLScott.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.12vh;font-family:'Bebas Neue Bold';\">Meet Nick Cummings, your trusted real estate advisor in Kitsap County, Washington. As a native of this beautiful region, I bring a deep understanding of its neighborhoods, communities, and market trends. While my experience in the real estate industry may be modest, my passion for helping clients achieve their homeownership dreams is boundless.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.12vh;font-family:'Bebas Neue Bold';\">With a genuine love for Kitsap County and its unique charm, I am committed to providing personalized service tailored to each client's needs and preferences. Whether you're buying, selling, or investing in real estate, I am here to guide you every step of the way. Holding a realtor license, I adhere to the highest standards of professionalism and ethics, ensuring a seamless and rewarding real estate experience for my clients.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.12vh;font-family:'Bebas Neue Bold';\">My approach is rooted in transparency, integrity, and open communication. I take the time to listen to my clients' goals and concerns, empowering them with the knowledge and resources they need to make informed decisions. From navigating the complexities of the local market to negotiating the best possible deals, I am dedicated to achieving exceptional results for my clients.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.12vh;font-family:'Bebas Neue Bold';\">As your local real estate expert, I am honored to serve the diverse communities of Kitsap County. Whether you're searching for your dream home, selling your property, or exploring investment opportunities, I am here to turn your real estate aspirations into reality. Contact me today, and let's embark on this exciting journey together</SPAN></SPAN></DIV></div>",
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "paddingRight": 10,
 "borderRadius": 0,
 "data": {
  "name": "HTMLText19460"
 },
 "propagateClick": false
}],
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": false,
 "minHeight": 20,
 "paddingLeft": 0,
 "vrPolyfillScale": 0.5,
 "scrollBarMargin": 2,
 "height": "100%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "mouseWheelEnabled": true,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scripts": {
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getKey": function(key){  return window[key]; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "registerKey": function(key, value){  window[key] = value; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "existsKey": function(key){  return key in window; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "unregisterKey": function(key){  delete window[key]; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } }
 },
 "overflow": "visible",
 "paddingRight": 0,
 "propagateClick": true,
 "downloadEnabled": false,
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
