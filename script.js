(function(){
    var script = {
 "mobileMipmappingEnabled": false,
 "paddingBottom": 0,
 "class": "Player",
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
 "defaultVRPointer": "laser",
 "start": "this.playAudioList([this.audio_97B8ABA2_D9DD_9501_41D7_2EB760D81D21]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "overflow": "visible",
 "width": "100%",
 "verticalAlign": "top",
 "gap": 10,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "downloadEnabled": false,
 "minHeight": 20,
 "paddingLeft": 0,
 "propagateClick": true,
 "backgroundPreloadEnabled": true,
 "scripts": {
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "existsKey": function(key){  return key in window; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "registerKey": function(key, value){  window[key] = value; },
  "unregisterKey": function(key){  delete window[key]; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getKey": function(key){  return window[key]; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } }
 },
 "contentOpaque": false,
 "shadow": false,
 "minWidth": 20,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "height": "100%",
 "desktopMipmappingEnabled": false,
 "layout": "absolute",
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "definitions": [{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -74.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CE876123_DDF4_C822_41A8_E97F5B67A176"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 142.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C9D7F1E8_DDF4_C82E_41EA_D8021874811B"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 111.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C82AC2F3_DDF4_C822_41C0_07F219895BD4"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -57.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C89222C4_DDF4_C866_41E6_E891F0F91070"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 8.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C9F4A1C9_DDF4_C86E_41B8_A89057B1A4C4"
},
{
 "overlays": [
  "this.overlay_D7DA0EB8_D9A4_6F01_418B_BE44CB9B7C08",
  "this.overlay_D71DEC6C_D9A5_9301_41AE_3CACB52C2BD8"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_105802_00_merged",
 "id": "panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 167.76,
   "yaw": 90.68,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF",
   "distance": 1
  },
  {
   "backwardYaw": -125.51,
   "yaw": -104.08,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884",
   "distance": 1
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2441443_D95F_992B_41D8_3C1223342761_camera"
},
{
 "rotationY": 0,
 "showDuration": 500,
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationZ": 0,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "id": "popup_CFCFD342_DDEC_485D_41D8_ED60B3A2D729",
 "popupDistance": 100,
 "hideDuration": 500,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_CFCFD342_DDEC_485D_41D8_ED60B3A2D729_0_4.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 477
   }
  ]
 },
 "pitch": 8.34,
 "popupMaxHeight": "95%",
 "yaw": 0.96,
 "showEasing": "cubic_in",
 "hfov": 6.86
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 171.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CB5163CE_DDF4_C862_41C1_E26CC2C981D8"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 28.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CBA78351_DDF4_C87E_41D5_B6CD8ED53773"
},
{
 "overlays": [
  "this.overlay_D7F290E4_D9A7_B301_41D7_75FF0D79E89D"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_105352_00_merged",
 "id": "panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -88.44,
   "yaw": 143.5,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED",
   "distance": 1
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -105.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C588705F_DDF4_C863_41B0_95FC757785A6"
},
{
 "rotationY": 0,
 "showDuration": 500,
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationZ": 0,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "id": "popup_D2A2646B_DDD5_C822_41C9_3D92B65E26E4",
 "popupDistance": 100,
 "hideDuration": 500,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_D2A2646B_DDD5_C822_41C9_3D92B65E26E4_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 478
   }
  ]
 },
 "pitch": 3.37,
 "popupMaxHeight": "95%",
 "yaw": -62.74,
 "showEasing": "cubic_in",
 "hfov": 6.92
},
{
 "overlays": [
  "this.overlay_D657D805_D973_E92F_41C0_3A6BD0763878",
  "this.overlay_D6115758_D973_A725_41E2_2E3BC7716E7C",
  "this.overlay_D6D5F4E2_D973_9AE5_41E7_AEB5F99CA11E",
  "this.overlay_C94DC638_D972_9965_41E0_D698ABED5444",
  "this.overlay_FD829770_D9E7_BD01_41D2_654699B58F88",
  "this.overlay_CC423298_DCF9_C878_41E1_AEF103FB8825"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_103450_00_merged",
 "id": "panorama_D277598A_D95F_EB25_41E5_0800136A96D4",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F"
  },
  {
   "backwardYaw": 19.99,
   "yaw": -62.67,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D275C425_D95F_F96F_41DB_79786819224B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A"
  },
  {
   "backwardYaw": -74.27,
   "yaw": -37.98,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E"
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -58.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CB2133DE_DDF4_C865_41D2_220B1036463C"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -110.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CE89613D_DDF4_C827_41B0_8BD819B8C407"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 162.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CB8BB380_DDF4_C8DD_41C6_D8FDEF59E034"
},
{
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
 "class": "Panorama",
 "label": "IMG_20240413_102914_00_merged",
 "id": "panorama_D2441443_D95F_992B_41D8_3C1223342761",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F"
  },
  {
   "backwardYaw": -62.67,
   "yaw": 19.99,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D277598A_D95F_EB25_41E5_0800136A96D4",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D275C425_D95F_F96F_41DB_79786819224B"
  },
  {
   "backwardYaw": 110.35,
   "yaw": -155.22,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000",
   "distance": 1
  },
  {
   "backwardYaw": -98.96,
   "yaw": 71.95,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E",
   "distance": 1
  },
  {
   "backwardYaw": 105.14,
   "yaw": 121.26,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A",
   "distance": 1
  },
  {
   "backwardYaw": 28.31,
   "yaw": 74.48,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "distance": 1
  },
  {
   "backwardYaw": 69.73,
   "yaw": 0.97,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99",
   "distance": 1
  },
  {
   "backwardYaw": 137.99,
   "yaw": -107.88,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB",
   "distance": 1
  },
  {
   "backwardYaw": 81.33,
   "yaw": 167.19,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425",
   "distance": 1
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 106.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C8CA3295_DDF4_C8E6_41D7_81A5054C2537"
},
{
 "overlays": [
  "this.overlay_D645508F_D972_993B_41C5_F18245B8B18F",
  "this.overlay_D3B5C5A3_DCF8_C849_41D6_FC2B7D94C937"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_103314_00_merged",
 "id": "panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 60.88,
   "yaw": -152.87,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2",
   "distance": 1
  },
  {
   "backwardYaw": 122.95,
   "yaw": 138.48,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99",
   "distance": 1
  }
 ]
},
{
 "overlays": [
  "this.overlay_D7C790D0_D9A5_B301_41E5_6CDC8471F7A8",
  "this.overlay_D7064A6F_D9A5_B71F_41E0_3F3BD68A4C88",
  "this.overlay_D76CD573_D9A5_9D07_41E3_9ABF5406F7B7",
  "this.overlay_D7535325_D9A4_7503_41E5_690714D6AE13",
  "this.overlay_D6935DE8_D9A4_6D01_41E3_4C1058EC9A36",
  "this.overlay_E0EDE0BC_D9E7_9301_41E5_DC6B0F61BECF"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_104946_00_merged",
 "id": "panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -32.86,
   "yaw": -140.4,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33",
   "distance": 1
  },
  {
   "backwardYaw": -94.63,
   "yaw": -80.07,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB"
  },
  {
   "backwardYaw": -73.12,
   "yaw": -165.84,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C",
   "distance": 1
  },
  {
   "backwardYaw": -82.14,
   "yaw": -80.99,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25",
   "distance": 1
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 123.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CA115FDE_DDF4_D865_41E4_AEE5EC3D9056"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 75.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CAA25F66_DDF4_D825_41CB_2BD77DB43964"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D275C425_D95F_F96F_41DB_79786819224B_camera"
},
{
 "overlays": [
  "this.overlay_D795B981_D9AC_F503_41E9_A8232F68E34E",
  "this.overlay_D72F4B83_D9AC_7506_41B6_B96ED2921098"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_104515_00_merged",
 "id": "panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 114.88,
   "yaw": 169.76,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C",
   "distance": 1
  },
  {
   "backwardYaw": -9.35,
   "yaw": -161.03,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877",
   "distance": 1
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 85.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C9FB91D9_DDF4_C86F_41EA_984A27E534DB"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -164.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C911B276_DDF4_C825_41E4_9E1B3DF225C9"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -176.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C9BAA208_DDF4_CBEE_41C8_8E595F107F6E"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_camera"
},
{
 "rotationY": 0,
 "showDuration": 500,
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationZ": 0,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "id": "popup_CCCA8663_DD53_D394_41A5_A0246618F3C8",
 "popupDistance": 100,
 "hideDuration": 500,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_CCCA8663_DD53_D394_41A5_A0246618F3C8_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 478
   }
  ]
 },
 "pitch": -0.49,
 "popupMaxHeight": "95%",
 "yaw": -122.24,
 "showEasing": "cubic_in",
 "hfov": 6.93
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 140.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CAA6245B_DDF4_C862_41B8_B30261439035"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -117.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C9953218_DDF4_CBED_41DF_0652FBB1BE0B"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -36.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEA390ED_DDF4_C827_41B1_D0200966E85E"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 27.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CE1591AA_DDF4_C822_41EA_9A64A5F2B5FE"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 27.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CAE9AF28_DDF4_D82D_416E_B28D9C527274"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 75.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CBA94361_DDF4_C85F_41B1_B3900A902098"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -100.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C8BED2B4_DDF4_C826_41C9_B43C27F903CB"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 81.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEBCD10E_DDF4_C9E2_41C2_3B17A633429A"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -108.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C9A0B1F8_DDF4_C82E_41B4_1BB0E3A3FDA2"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 90.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CAC16F46_DDF4_D865_41E3_CFCB2BF1D26C"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -143.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CAB46F71_DDF4_D83F_41E8_37B58A28AD2F"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -134.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C84952E4_DDF4_C825_41CF_7C3ABA7CAAD0"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -54.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CA4BCFAD_DDF4_D827_41E1_F9DB84B44AA6"
},
{
 "overlays": [
  "this.overlay_D7E567C4_D9AC_FD01_41B3_3289B38546D0",
  "this.overlay_D7137BC5_D9AC_9503_41D7_07C03F2F4CF4",
  "this.overlay_D7702493_D9AC_B307_41E9_0F9EBE291DD9",
  "this.overlay_D68B67BC_D9AC_9D02_41EA_B56706116FD7"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_104050_00_merged",
 "id": "panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -151.24,
   "yaw": 28.42,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "distance": 1
  },
  {
   "backwardYaw": -104.96,
   "yaw": 148.22,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C",
   "distance": 1
  },
  {
   "backwardYaw": -39.45,
   "yaw": -37.98,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0",
   "distance": 1
  },
  {
   "backwardYaw": -17.91,
   "yaw": 79.17,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627",
   "distance": 1
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 99.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CE68915B_DDF4_C862_41E4_A124F0EAC16D"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_camera"
},
{
 "overlays": [
  "this.overlay_D7C8DB83_D9AD_F507_41E4_E82AFF50F7D4",
  "this.overlay_D735DB2F_D9AD_951F_419A_6A4E0F5375C5"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_104547_00_merged",
 "id": "panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 76.22,
   "yaw": 114.29,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C",
   "distance": 1
  },
  {
   "backwardYaw": -161.03,
   "yaw": -9.35,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC",
   "distance": 1
  }
 ]
},
{
 "overlays": [
  "this.overlay_D7245DE8_D9AC_AD02_41C7_B85FB2A695B3",
  "this.overlay_D749B9E7_D9AC_950F_41CE_6FF45EC85C10"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_104630_00_merged",
 "id": "panorama_D2449E7A_D95E_69E5_41E7_97426A243776",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -158.37,
   "yaw": 83.89,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB",
   "distance": 1
  },
  {
   "backwardYaw": -68.8,
   "yaw": 111.63,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "distance": 1
  }
 ]
},
{
 "overlays": [
  "this.overlay_D7A182C3_D9AC_9707_41D2_BF5DB8D66F78",
  "this.overlay_D7D0820E_D9AC_B701_41DA_0C0C0440FDAE",
  "this.overlay_D7059272_D9AC_9701_41C0_CA6D80C6B127",
  "this.overlay_D74E2E3F_D9AC_EF7F_41AC_6F74CF32AFF8",
  "this.overlay_D6CE016E_D9AC_9501_41E2_E5376BF39190"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_104233_00_merged",
 "id": "panorama_D2749949_D95F_AB27_41E5_D00915CF7477",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -39.16,
   "yaw": 154.31,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A",
   "distance": 1
  },
  {
   "backwardYaw": -92.57,
   "yaw": 125.11,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5",
   "distance": 1
  },
  {
   "backwardYaw": -9.35,
   "yaw": -60.99,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0",
   "distance": 1
  },
  {
   "backwardYaw": -14.08,
   "yaw": -171.37,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2448E90_D95F_A925_41E8_B306937D2F35",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC"
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -59.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C94E4248_DDF4_C86E_41E7_702466CAD74B"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 171.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CB099EF4_DDF4_D825_41E9_940E70A7372C"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 41.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CA693F9A_DDF4_D8ED_41D0_17987EDFB19C"
},
{
 "overlays": [
  "this.overlay_D7F51DEF_D9A7_AD1F_41E6_C8B6A932CB2F",
  "this.overlay_D71E7356_D9A4_7501_41CA_A2BA3B99B99F",
  "this.overlay_D7767F64_D9A4_6D01_41EB_2DB637C28DFB",
  "this.overlay_989C8B4B_D9EC_9506_41D8_67523E91CB46",
  "this.overlay_CCFF467C_DD53_D06C_41DF_120FFFF6F085",
  "this.popup_CCCA8663_DD53_D394_41A5_A0246618F3C8",
  "this.overlay_D27F2ADF_DDD4_3862_41DF_3CB0CAD51B2C",
  "this.popup_D2A2646B_DDD5_C822_41C9_3D92B65E26E4",
  "this.overlay_D2336A8F_DDD4_58E2_41E9_6136C8A08011",
  "this.popup_CD8FFC6C_DDDC_7825_41BA_D0E82C8E2F53"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_105556_00_merged",
 "id": "panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F"
  },
  {
   "backwardYaw": 36.58,
   "yaw": -171.37,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3",
   "distance": 1
  },
  {
   "backwardYaw": 162.97,
   "yaw": 93.92,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2",
   "distance": 1
  },
  {
   "backwardYaw": -48.11,
   "yaw": 162.77,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425",
   "distance": 1
  }
 ]
},
{
 "overlays": [
  "this.overlay_D6668017_D956_992B_41A1_DF3FFFDCF50C",
  "this.overlay_D6F1AC0F_D956_A93B_41E0_64849DD7D4E1"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_102513_00_merged",
 "id": "panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -161.91,
   "yaw": -8.86,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC"
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -12.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CB30D3ED_DDF4_C826_41C4_EC2D2CAC0D4B"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 170.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CAB9A46B_DDF4_C823_41E0_8EB5F6287CC5"
},
{
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
 "class": "Panorama",
 "label": "IMG_20240413_103110_00_merged",
 "id": "panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 4,
   "yaw": 135.14,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3"
  },
  {
   "backwardYaw": -155.22,
   "yaw": 110.35,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761",
   "distance": 1
  },
  {
   "backwardYaw": 53.38,
   "yaw": 167.99,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99"
  },
  {
   "backwardYaw": -116.17,
   "yaw": 79.47,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB",
   "distance": 1
  },
  {
   "backwardYaw": -8.19,
   "yaw": 163.56,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425",
   "distance": 1
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 21.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C85BE2F3_DDF4_C822_41DF_4ADFCFB8F562"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -64.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEAFE0ED_DDF4_C827_41AF_5F8297A04445"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 91.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CAD4F44B_DDF4_C862_41DA_ACD24691392F"
},
{
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
 "class": "Panorama",
 "label": "IMG_20240413_103151_00_merged",
 "id": "panorama_D2713441_D95F_B927_41E1_6B8B0A550425",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -1.86,
   "yaw": 120.86,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "distance": 1
  },
  {
   "backwardYaw": 59.5,
   "yaw": 79.37,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99",
   "distance": 1
  },
  {
   "backwardYaw": 162.77,
   "yaw": -48.11,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4",
   "distance": 1
  },
  {
   "backwardYaw": 167.19,
   "yaw": 81.33,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761",
   "distance": 1
  },
  {
   "backwardYaw": 163.56,
   "yaw": -8.19,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000",
   "distance": 1
  },
  {
   "backwardYaw": -150.81,
   "yaw": 111.11,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E",
   "distance": 1
  },
  {
   "backwardYaw": 46.36,
   "yaw": 161.99,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A",
   "distance": 1
  },
  {
   "backwardYaw": 90.09,
   "yaw": -94.14,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3",
   "distance": 1
  },
  {
   "backwardYaw": -152.09,
   "yaw": 25.45,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB",
   "distance": 1
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -103.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CBC48332_DDF4_C83D_41D5_43B95D39889B"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_camera"
},
{
 "id": "ImageResource_CE72B263_DDDD_C823_41D0_C7B3268FD91D",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_CD8FFC6C_DDDC_7825_41BA_D0E82C8E2F53_0_0.jpg",
   "width": 3880,
   "class": "ImageResourceLevel",
   "height": 1812
  },
  {
   "url": "media/popup_CD8FFC6C_DDDC_7825_41BA_D0E82C8E2F53_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 956
  },
  {
   "url": "media/popup_CD8FFC6C_DDDC_7825_41BA_D0E82C8E2F53_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 478
  },
  {
   "url": "media/popup_CD8FFC6C_DDDC_7825_41BA_D0E82C8E2F53_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 239
  }
 ]
},
{
 "overlays": [
  "this.overlay_D7F330D8_D9A4_B301_41CB_C3481DDDA511"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_105157_00_merged",
 "id": "panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -140.4,
   "yaw": -32.86,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E",
   "distance": 1
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -179.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CA3E5FC7_DDF4_D863_41DB_D9B2337FC36D"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -154.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C9DC71E8_DDF4_C82E_41B1_95A5A2A717F3"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -41.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CA5D2FB6_DDF4_D825_41E3_7CB5472D575E"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -17.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CE50C17B_DDF4_C822_41B6_1BF5A0BCB06E"
},
{
 "items": [
  {
   "media": "this.video_CCB0F197_DD08_C848_41CF_88F56BB718E1",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_CB769E93_DDF4_D8E2_41DF_E8B5E4DAF810, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_CB769E93_DDF4_D8E2_41DF_E8B5E4DAF810, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_CB769E93_DDF4_D8E2_41DF_E8B5E4DAF810",
 "class": "PlayList"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -154.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C598006B_DDF4_C823_41E9_6C820BFA23E2"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -151.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C90C7268_DDF4_C82D_41E9_F34E2748770D"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D277598A_D95F_EB25_41E5_0800136A96D4_camera"
},
{
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
 "class": "Panorama",
 "label": "IMG_20240413_103417_00_merged",
 "id": "panorama_D2446447_D95F_992B_41CD_4D904B227F99",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 138.48,
   "yaw": 122.95,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F",
   "distance": 1
  },
  {
   "backwardYaw": -37.98,
   "yaw": -74.27,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D277598A_D95F_EB25_41E5_0800136A96D4",
   "distance": 1
  },
  {
   "backwardYaw": 0.97,
   "yaw": 69.73,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761",
   "distance": 1
  },
  {
   "backwardYaw": 86.45,
   "yaw": -138.41,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D275C425_D95F_F96F_41DB_79786819224B",
   "distance": 1
  },
  {
   "backwardYaw": -56.86,
   "yaw": 3.61,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7"
  },
  {
   "backwardYaw": 77.1,
   "yaw": -165.16,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E",
   "distance": 1
  },
  {
   "backwardYaw": 79.37,
   "yaw": 59.5,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425",
   "distance": 1
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -126.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CB7F73AF_DDF4_C823_41CB_4C0AEE51F204"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 54.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C9EE31BA_DDF4_C82D_41E9_070D983D67E4"
},
{
 "overlays": [
  "this.overlay_D7EF886B_D9A4_F307_41C4_4C0F08E59D2F"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_105054_00_merged",
 "id": "panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -165.84,
   "yaw": -73.12,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E",
   "distance": 1
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 14.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CAE2FF14_DDF4_D9E5_41E5_F7EBAD52F2D9"
},
{
 "overlays": [
  "this.overlay_D7BD4D84_D9AD_ED01_41D4_9A00EE0F90FE",
  "this.overlay_F1598A38_D9EF_F701_41EA_5B8BD5EC1788"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_104159_00_merged",
 "id": "panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -60.99,
   "yaw": -9.35,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477",
   "distance": 1
  },
  {
   "backwardYaw": -37.98,
   "yaw": -39.45,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC",
   "distance": 1
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 105.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CAC4B43C_DDF4_C825_41E2_9A66EAE8B1F8"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -68.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C93A6268_DDF4_C82D_41CA_F1108D473D0B"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -96.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C5D5F037_DDF4_C823_41B2_5A1625817D87"
},
{
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
 "class": "Panorama",
 "label": "IMG_20240413_102735_00_merged",
 "id": "panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 120.86,
   "yaw": -1.86,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425",
   "distance": 1
  },
  {
   "backwardYaw": 74.48,
   "yaw": 28.31,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761",
   "distance": 1
  },
  {
   "backwardYaw": 135.14,
   "yaw": 4,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000",
   "distance": 1
  },
  {
   "backwardYaw": 75.04,
   "yaw": 25.07,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E",
   "distance": 1
  },
  {
   "backwardYaw": 111.63,
   "yaw": -68.8,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2449E7A_D95E_69E5_41E7_97426A243776",
   "distance": 1
  },
  {
   "backwardYaw": 28.42,
   "yaw": -151.24,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC",
   "distance": 1
  },
  {
   "backwardYaw": 15.43,
   "yaw": 122.55,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC",
   "distance": 1
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -133.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CE38219A_DDF4_C8E2_41C6_0435F8345AB1"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -25.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C56A306F_DDF4_C823_41C5_963870178432"
},
{
 "overlays": [
  "this.overlay_D660D206_D972_B92D_41E4_4CFD8D0736EB",
  "this.overlay_D364651D_DCF8_4878_41BB_DE8A29355436",
  "this.overlay_CECFC5EF_DDF5_C822_41D5_A220A2EA759B"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_103559_00_merged",
 "id": "panorama_D275C425_D95F_F96F_41DB_79786819224B",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 158.55,
   "yaw": -173.14,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CFE5876F_DDF4_C822_41DF_D8DCD147B791",
   "distance": 1
  },
  {
   "backwardYaw": -138.41,
   "yaw": 86.45,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99",
   "distance": 1
  },
  {
   "backwardYaw": 82.71,
   "yaw": -89.03,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884",
   "distance": 1
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 14.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C87742D4_DDF4_C866_41AA_ECDAC13B5DCB"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 29.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CE33E19A_DDF4_C8E2_41D7_755B52D9B47A"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 97.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C8DA82A5_DDF4_C827_41E4_7AAE5E7FD949"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -97.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CA7B1FA3_DDF4_D823_41EB_A9C99744A5FA"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -16.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CE2CE18B_DDF4_C8E3_41C6_BCBCC9535A45"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -86.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CAFDCF37_DDF4_D823_41E9_6BEAFC68DD86"
},
{
 "overlays": [
  "this.overlay_D7F1E22E_D9AD_9701_41CB_0B6E77C54741"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_104126_00_merged",
 "id": "panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 79.17,
   "yaw": -17.91,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC",
   "distance": 1
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 14.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C8E27285_DDF4_C8E6_4150_A429EFA12B1A"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2713441_D95F_B927_41E1_6B8B0A550425_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 99.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CA7B549A_DDF4_C8ED_41E0_564A24811925"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 72.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C5B7B04E_DDF4_C862_41DC_6FD0AEC2260F"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 18.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CBD5A341_DDF4_C85E_41C6_4006D930F70B"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2449E7A_D95E_69E5_41E7_97426A243776_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 39.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C862B2D4_DDF4_C866_41C6_481AA3FFBACB"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -159.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C97D823D_DDF4_C827_41D7_C2CD03DB07DC"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2749949_D95F_AB27_41E5_D00915CF7477_camera"
},
{
 "class": "Video",
 "label": "140379-774881529_small",
 "scaleMode": "fit_inside",
 "width": 960,
 "loop": false,
 "id": "video_CCB0F197_DD08_C848_41CF_88F56BB718E1",
 "thumbnailUrl": "media/video_CCB0F197_DD08_C848_41CF_88F56BB718E1_t.jpg",
 "height": 540,
 "video": {
  "width": 960,
  "class": "VideoResource",
  "mp4Url": "media/video_CCB0F197_DD08_C848_41CF_88F56BB718E1.mp4",
  "height": 540
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 165.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CA89D47A_DDF4_C822_41C8_9D9CF45DD6AE"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -176,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CB9AE38F_DDF4_C8E2_41E3_B3F0602683A3"
},
{
 "overlays": [
  "this.overlay_D781FBA4_D9AB_9501_41E8_65D5A2FAA42E",
  "this.overlay_D70FD8CA_D9A4_9301_41C7_6AE0F427CBA8",
  "this.overlay_D6AC0B36_D9A4_9501_41E7_5010B104B5AC",
  "this.overlay_D69733B8_D9A4_F501_41D6_2BCCD46635E0",
  "this.overlay_D64CCE33_D9A4_AF07_41D4_4902293988A0"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_104836_00_merged",
 "id": "panorama_D2719E7B_D95E_69DB_41DA_B678F555831B",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED"
  },
  {
   "backwardYaw": -80.07,
   "yaw": -94.63,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E",
   "distance": 1
  },
  {
   "backwardYaw": -53.91,
   "yaw": 143.79,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C"
  },
  {
   "backwardYaw": -80.47,
   "yaw": 96.29,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25",
   "distance": 1
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 18.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C8AD82A5_DDF4_C827_41E4_CFB2489CCE85"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -31.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CBF20322_DDF4_C822_41E7_F4155F4B6B4D"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 117.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEA9E100_DDF4_C9DE_41E8_8A1A8B3A4B05"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -17.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CA840F7B_DDF4_D823_418B_D5C8CAD3F087"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 147.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C8F7D285_DDF4_C8E6_41E1_8B91CB7EF167"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -100.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C5F3EFFE_DDF4_D825_41B3_D3560A754BDB"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2448E90_D95F_A925_41E8_B306937D2F35_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2446447_D95F_992B_41CD_4D904B227F99_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 6.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C80E2312_DDF4_C9E2_41DB_8D52D5D17D4B"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -18.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CAE2941C_DDF4_CFE6_41D8_72677C6E4C49"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -105.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C953A24F_DDF4_C862_41DA_BF4010D08C6D"
},
{
 "overlays": [
  "this.overlay_D7FC3418_D9A4_9301_41E9_4520FC82E8DE",
  "this.overlay_D70EEE5F_D9A4_6F3E_41CB_780294E06498"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_105307_00_merged",
 "id": "panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 143.5,
   "yaw": -88.44,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860",
   "distance": 1
  },
  {
   "backwardYaw": 115.47,
   "yaw": 77.7,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB",
   "distance": 1
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 87.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CAB6746B_DDF4_C823_41DD_25D73B3D558F"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -160.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CAF4042C_DDF4_C826_41BA_E0B2E3FD7166"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 87.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CB1E9F05_DDF4_D9E7_41E6_9907497AFE51"
},
{
 "items": [
  {
   "media": "this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC",
   "camera": "this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF",
   "camera": "this.panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB",
   "camera": "this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "camera": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E",
   "camera": "this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761",
   "camera": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB",
   "camera": "this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000",
   "camera": "this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425",
   "camera": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A",
   "camera": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F",
   "camera": "this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99",
   "camera": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D277598A_D95F_EB25_41E5_0800136A96D4",
   "camera": "this.panorama_D277598A_D95F_EB25_41E5_0800136A96D4_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E",
   "camera": "this.panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D275C425_D95F_F96F_41DB_79786819224B",
   "camera": "this.panorama_D275C425_D95F_F96F_41DB_79786819224B_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC",
   "camera": "this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627",
   "camera": "this.panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0",
   "camera": "this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477",
   "camera": "this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2448E90_D95F_A925_41E8_B306937D2F35",
   "camera": "this.panorama_D2448E90_D95F_A925_41E8_B306937D2F35_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A",
   "camera": "this.panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5",
   "camera": "this.panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C",
   "camera": "this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC",
   "camera": "this.panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877",
   "camera": "this.panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2449E7A_D95E_69E5_41E7_97426A243776",
   "camera": "this.panorama_D2449E7A_D95E_69E5_41E7_97426A243776_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB",
   "camera": "this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B",
   "camera": "this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25",
   "camera": "this.panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E",
   "camera": "this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED",
   "camera": "this.panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C",
   "camera": "this.panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33",
   "camera": "this.panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED",
   "camera": "this.panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860",
   "camera": "this.panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3",
   "camera": "this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4",
   "camera": "this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2",
   "camera": "this.panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF",
   "camera": "this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84",
   "camera": "this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884",
   "camera": "this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CFE5876F_DDF4_C822_41DF_D8DCD147B791",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_CFE5876F_DDF4_C822_41DF_D8DCD147B791_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "overlays": [
  "this.overlay_CFFA0CF1_DDF4_583E_4190_44D2E75B638A"
 ],
 "class": "Panorama",
 "label": "IMG_20240414_104333_00_merged",
 "id": "panorama_CFE5876F_DDF4_C822_41DF_D8DCD147B791",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFE5876F_DDF4_C822_41DF_D8DCD147B791_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CFE5876F_DDF4_C822_41DF_D8DCD147B791_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CFE5876F_DDF4_C822_41DF_D8DCD147B791_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_CFE5876F_DDF4_C822_41DF_D8DCD147B791_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFE5876F_DDF4_C822_41DF_D8DCD147B791_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CFE5876F_DDF4_C822_41DF_D8DCD147B791_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CFE5876F_DDF4_C822_41DF_D8DCD147B791_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFE5876F_DDF4_C822_41DF_D8DCD147B791_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CFE5876F_DDF4_C822_41DF_D8DCD147B791_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CFE5876F_DDF4_C822_41DF_D8DCD147B791_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFE5876F_DDF4_C822_41DF_D8DCD147B791_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CFE5876F_DDF4_C822_41DF_D8DCD147B791_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CFE5876F_DDF4_C822_41DF_D8DCD147B791_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFE5876F_DDF4_C822_41DF_D8DCD147B791_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CFE5876F_DDF4_C822_41DF_D8DCD147B791_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CFE5876F_DDF4_C822_41DF_D8DCD147B791_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFE5876F_DDF4_C822_41DF_D8DCD147B791_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CFE5876F_DDF4_C822_41DF_D8DCD147B791_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CFE5876F_DDF4_C822_41DF_D8DCD147B791_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_CFE5876F_DDF4_C822_41DF_D8DCD147B791_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -173.14,
   "yaw": 158.55,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D275C425_D95F_F96F_41DB_79786819224B",
   "distance": 1
  }
 ]
},
{
 "id": "ImageResource_CE73A263_DDDD_C823_41AE_9340D94768E2",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_D2A2646B_DDD5_C822_41C9_3D92B65E26E4_0_0.jpg",
   "width": 4000,
   "class": "ImageResourceLevel",
   "height": 1868
  },
  {
   "url": "media/popup_D2A2646B_DDD5_C822_41C9_3D92B65E26E4_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 956
  },
  {
   "url": "media/popup_D2A2646B_DDD5_C822_41C9_3D92B65E26E4_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 478
  },
  {
   "url": "media/popup_D2A2646B_DDD5_C822_41C9_3D92B65E26E4_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 239
  }
 ]
},
{
 "overlays": [
  "this.overlay_D73DFF18_D9A5_AD01_41E6_18EA11A7F6FB",
  "this.overlay_D77BF730_D9A5_9D01_41DD_C70BCDBE4625",
  "this.overlay_EEC794E2_D9FB_F301_41DD_810C7E3018F8"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_104912_00_merged",
 "id": "panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -80.99,
   "yaw": -82.14,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED"
  },
  {
   "backwardYaw": 96.29,
   "yaw": -80.47,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B",
   "distance": 1
  }
 ]
},
{
 "overlays": [
  "this.overlay_D7CC27B9_D9A7_FD03_41E8_10AADDC84561",
  "this.overlay_D71AB6F6_D9A7_9F01_41D5_29CA8A045D1F",
  "this.overlay_D2A6926C_DDDC_4826_41E4_D67F7DDED18B",
  "this.popup_CFCFD342_DDEC_485D_41D8_ED60B3A2D729"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_105518_00_merged",
 "id": "panorama_D270695C_D95E_EBDD_41E6_6F31051946D3",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -171.37,
   "yaw": 36.58,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4",
   "distance": 1
  },
  {
   "backwardYaw": -94.14,
   "yaw": 90.09,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425",
   "distance": 1
  }
 ]
},
{
 "overlays": [
  "this.overlay_D7F37C3F_D9A5_B37F_41E9_FAC205C365C1",
  "this.overlay_D7026F2F_D9A5_ED1F_41EA_B864AE1A82DC",
  "this.overlay_9BFAC175_D9EC_9503_41D6_7B5EA288EF43"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_105836_00_merged",
 "id": "panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -89.03,
   "yaw": 82.71,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D275C425_D95F_F96F_41DB_79786819224B",
   "distance": 1
  },
  {
   "backwardYaw": 91.86,
   "yaw": 45.02,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF",
   "distance": 1
  },
  {
   "backwardYaw": -104.08,
   "yaw": -125.51,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84",
   "distance": 1
  }
 ]
},
{
 "id": "ImageResource_CE98B35B_DDEC_C862_41C1_67BB59CEFD47",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_CC6B88B6_DDEC_7822_41D3_B4669F89B563_0_0.jpg",
   "width": 14499,
   "class": "ImageResourceLevel",
   "height": 6763
  },
  {
   "url": "media/popup_CC6B88B6_DDEC_7822_41D3_B4669F89B563_0_1.jpg",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 3821
  },
  {
   "url": "media/popup_CC6B88B6_DDEC_7822_41D3_B4669F89B563_0_2.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 1910
  },
  {
   "url": "media/popup_CC6B88B6_DDEC_7822_41D3_B4669F89B563_0_3.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 955
  },
  {
   "url": "media/popup_CC6B88B6_DDEC_7822_41D3_B4669F89B563_0_4.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 477
  },
  {
   "url": "media/popup_CC6B88B6_DDEC_7822_41D3_B4669F89B563_0_5.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 238
  }
 ]
},
{
 "overlays": [
  "this.overlay_D72C6C24_D9A4_B301_4192_8AFC474069BF",
  "this.overlay_D76B0E6C_D9A4_EF01_41BC_FC755ECE9235",
  "this.overlay_CD949262_DDD4_4822_41E6_797A4FA01864",
  "this.popup_CC6B88B6_DDEC_7822_41D3_B4669F89B563"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_105634_00_merged",
 "id": "panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -152.87,
   "yaw": 60.88,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F",
   "distance": 1
  },
  {
   "backwardYaw": 93.92,
   "yaw": 162.97,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4",
   "distance": 1
  }
 ]
},
{
 "overlays": [
  "this.overlay_D7EBE7F6_D9AC_7D01_41D2_39F422A690F8",
  "this.overlay_D73A4E12_D9AC_AF01_41DD_38FAC2CD0AE2",
  "this.overlay_D70ADA04_D9AD_B701_41C5_73A874528543"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_104440_00_merged",
 "id": "panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 169.76,
   "yaw": 114.88,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC",
   "distance": 1
  },
  {
   "backwardYaw": 114.29,
   "yaw": 76.22,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877",
   "distance": 1
  },
  {
   "backwardYaw": 148.22,
   "yaw": -104.96,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC",
   "distance": 1
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 170.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEA6B0DD_DDF4_C866_41C1_56CAD80561B7"
},
{
 "overlays": [
  "this.overlay_D7FD4D76_D9AC_AD01_41E3_2FE554E21798",
  "this.overlay_D73B79EE_D9AC_9501_41E0_6CBF92E2DC36",
  "this.overlay_F24ECCB8_D9E4_9301_41EA_94DA5388555B"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_104305_00_merged",
 "id": "panorama_D2448E90_D95F_A925_41E8_B306937D2F35",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0"
  },
  {
   "backwardYaw": -171.37,
   "yaw": -14.08,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477",
   "distance": 1
  }
 ]
},
{
 "overlays": [
  "this.overlay_D67A10DF_D971_FADB_41E3_44C2E76529A2",
  "this.overlay_D605BDC1_D971_AB27_41E6_178B052D8899",
  "this.overlay_D6EE1B6D_D971_AFFF_41E3_C8C608512DC2",
  "this.overlay_D6AFDA0A_D972_6925_41C0_8F44E954973A",
  "this.overlay_C933F26D_D972_99FF_41E1_4DFC0390945E",
  "this.overlay_F9CF8A01_D9DB_9703_41EB_075F114A2316",
  "this.overlay_CFA52CB6_DD08_784B_41E9_B6D48FF4C09A"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_103230_00_merged",
 "id": "panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7"
  },
  {
   "backwardYaw": 121.26,
   "yaw": 105.14,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761",
   "distance": 1
  },
  {
   "backwardYaw": 167.99,
   "yaw": 53.38,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000",
   "distance": 1
  },
  {
   "backwardYaw": 162.29,
   "yaw": 135.01,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E",
   "distance": 1
  },
  {
   "backwardYaw": -172.45,
   "yaw": 74.01,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB",
   "distance": 1
  },
  {
   "backwardYaw": 161.99,
   "yaw": 46.36,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425",
   "distance": 1
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_camera"
},
{
 "items": [
  {
   "media": "this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC",
   "camera": "this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF",
   "camera": "this.panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB",
   "camera": "this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "camera": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E",
   "camera": "this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761",
   "camera": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB",
   "camera": "this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000",
   "camera": "this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425",
   "camera": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A",
   "camera": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F",
   "camera": "this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99",
   "camera": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D277598A_D95F_EB25_41E5_0800136A96D4",
   "camera": "this.panorama_D277598A_D95F_EB25_41E5_0800136A96D4_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E",
   "camera": "this.panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D275C425_D95F_F96F_41DB_79786819224B",
   "camera": "this.panorama_D275C425_D95F_F96F_41DB_79786819224B_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC",
   "camera": "this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627",
   "camera": "this.panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0",
   "camera": "this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477",
   "camera": "this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2448E90_D95F_A925_41E8_B306937D2F35",
   "camera": "this.panorama_D2448E90_D95F_A925_41E8_B306937D2F35_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A",
   "camera": "this.panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5",
   "camera": "this.panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C",
   "camera": "this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC",
   "camera": "this.panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877",
   "camera": "this.panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2449E7A_D95E_69E5_41E7_97426A243776",
   "camera": "this.panorama_D2449E7A_D95E_69E5_41E7_97426A243776_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB",
   "camera": "this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B",
   "camera": "this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25",
   "camera": "this.panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E",
   "camera": "this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED",
   "camera": "this.panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C",
   "camera": "this.panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33",
   "camera": "this.panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED",
   "camera": "this.panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860",
   "camera": "this.panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3",
   "camera": "this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4",
   "camera": "this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2",
   "camera": "this.panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF",
   "camera": "this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84",
   "camera": "this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884",
   "camera": "this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CFE5876F_DDF4_C822_41DF_D8DCD147B791",
   "camera": "this.panorama_CFE5876F_DDF4_C822_41DF_D8DCD147B791_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 41, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -119.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C881C2C4_DDF4_C866_41DA_A651ECCD2D94"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 99.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CA9B447A_DDF4_C822_41E1_9CFF513E03FC"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -65.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEDB60D3_DDF4_C862_41EB_376543FE20C1"
},
{
 "overlays": [
  "this.overlay_D7CDDAF8_D9A4_9701_41E6_CEF66AE7B19C",
  "this.overlay_D70A278A_D9A4_BD01_41C6_95ABBEE313C5",
  "this.overlay_D76A440F_D9A4_931F_41EA_A1CBAAEB1D4A"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_105720_00_merged",
 "id": "panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -165.45,
   "yaw": 20.94,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC",
   "distance": 1
  },
  {
   "backwardYaw": 90.68,
   "yaw": 167.76,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84",
   "distance": 1
  },
  {
   "backwardYaw": 45.02,
   "yaw": 91.86,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884",
   "distance": 1
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -69.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEB3F100_DDF4_C9DE_41DB_AA17D64DCD9A"
},
{
 "overlays": [
  "this.overlay_D72FB31D_D9A4_B502_41DD_F95CC9D963E7"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_105021_00_merged",
 "id": "panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E"
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -98.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CE65A150_DDF4_C87E_41E0_0A845943CCEE"
},
{
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "mouseControlMode": "drag_acceleration",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 7.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CB12D40C_DDF4_CFE6_41C3_EF1CAF8A9824"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -89.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CE0F01AA_DDF4_C822_41D0_94F55A6B2ACE"
},
{
 "id": "ImageResource_CCCA9663_DD53_D394_41EA_45EA13B9B60D",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_CCCA8663_DD53_D394_41A5_A0246618F3C8_0_0.jpg",
   "width": 4000,
   "class": "ImageResourceLevel",
   "height": 1868
  },
  {
   "url": "media/popup_CCCA8663_DD53_D394_41A5_A0246618F3C8_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 956
  },
  {
   "url": "media/popup_CCCA8663_DD53_D394_41A5_A0246618F3C8_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 478
  },
  {
   "url": "media/popup_CCCA8663_DD53_D394_41A5_A0246618F3C8_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 239
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_CFE5876F_DDF4_C822_41DF_D8DCD147B791_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -88.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CAD3DF55_DDF4_D867_41D4_ADC3172DD71D"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -21.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CA669F8F_DDF4_D8E3_41CC_05D86ECB97C3"
},
{
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
 "class": "Panorama",
 "label": "IMG_20240413_102954_00_merged",
 "id": "panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7"
  },
  {
   "backwardYaw": -107.88,
   "yaw": 137.99,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761",
   "distance": 1
  },
  {
   "backwardYaw": 79.47,
   "yaw": -116.17,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E"
  },
  {
   "backwardYaw": 74.01,
   "yaw": -172.45,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99"
  },
  {
   "backwardYaw": 25.45,
   "yaw": -152.09,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425",
   "distance": 1
  }
 ]
},
{
 "overlays": [
  "this.overlay_D7F748D5_D9AF_9303_41D3_F96D0874DF84",
  "this.overlay_D7371697_D9AF_FF0F_41E6_360EF1287467"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_104337_00_merged",
 "id": "panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0"
  },
  {
   "backwardYaw": 154.31,
   "yaw": -39.16,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477",
   "distance": 1
  }
 ]
},
{
 "overlays": [
  "this.overlay_D683BA7A_D957_A9E5_41CB_54043F41C19D",
  "this.overlay_D7E0A16E_D957_FBFD_41C5_506B1B599A70",
  "this.overlay_D63E8956_D957_AB2D_41CA_B191E2115301",
  "this.overlay_D26AE543_DD09_C8C8_4167_43EA93E0D36A"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_102434_00_merged",
 "id": "panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 62.35,
   "yaw": -92.67,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB",
   "distance": 1
  },
  {
   "backwardYaw": 62.35,
   "yaw": -68.56,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB",
   "distance": 1
  },
  {
   "backwardYaw": 122.55,
   "yaw": 15.43,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "distance": 1
  },
  {
   "backwardYaw": 20.94,
   "yaw": -165.45,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF",
   "distance": 1
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -42.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CE9E0142_DDF4_C85D_41E7_1B28AB3ECC7E"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -44.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C9B76208_DDF4_CBEE_4193_78C57BD66F9A"
},
{
 "id": "ImageResource_CE91C353_DDEC_C862_41D0_494C68A039F0",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_CFCFD342_DDEC_485D_41D8_ED60B3A2D729_0_0.jpg",
   "width": 16320,
   "class": "ImageResourceLevel",
   "height": 7612
  },
  {
   "url": "media/popup_CFCFD342_DDEC_485D_41D8_ED60B3A2D729_0_1.jpg",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 3820
  },
  {
   "url": "media/popup_CFCFD342_DDEC_485D_41D8_ED60B3A2D729_0_2.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 1910
  },
  {
   "url": "media/popup_CFCFD342_DDEC_485D_41D8_ED60B3A2D729_0_3.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 955
  },
  {
   "url": "media/popup_CFCFD342_DDEC_485D_41D8_ED60B3A2D729_0_4.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 477
  },
  {
   "url": "media/popup_CFCFD342_DDEC_485D_41D8_ED60B3A2D729_0_5.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 238
  }
 ]
},
{
 "rotationY": 0,
 "showDuration": 500,
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationZ": 0,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "id": "popup_CD8FFC6C_DDDC_7825_41BA_D0E82C8E2F53",
 "popupDistance": 100,
 "hideDuration": 500,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_CD8FFC6C_DDDC_7825_41BA_D0E82C8E2F53_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 478
   }
  ]
 },
 "pitch": 6.56,
 "popupMaxHeight": "95%",
 "yaw": -34.15,
 "showEasing": "cubic_in",
 "hfov": 6.88
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -10.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C810D312_DDF4_C9E2_41E7_0A74DE98826F"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -89.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C84612E4_DDF4_C825_41E6_8B2A42F9E430"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -151.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CE8EB131_DDF4_C83E_41E9_6958139E234A"
},
{
 "rotationY": 0,
 "showDuration": 500,
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationZ": 0,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "id": "popup_CC6B88B6_DDEC_7822_41D3_B4669F89B563",
 "popupDistance": 100,
 "hideDuration": 500,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_CC6B88B6_DDEC_7822_41D3_B4669F89B563_0_4.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 477
   }
  ]
 },
 "pitch": 3.92,
 "popupMaxHeight": "95%",
 "yaw": -122.09,
 "showEasing": "cubic_in",
 "hfov": 6.91
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -100.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C5866051_DDF4_C87F_41D7_96B36F4D5CFF"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 140.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CBBB4370_DDF4_C83E_41CF_F8541A83A4B2"
},
{
 "overlays": [
  "this.overlay_D794B279_D9AF_B703_41DC_9EA09BCC4236"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_104408_00_merged",
 "id": "panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 125.11,
   "yaw": -92.57,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477",
   "distance": 1
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -57.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C96B1227_DDF4_C822_41E1_0C58608D3F2F"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -36.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C5A58043_DDF4_C862_41C7_E527F74FD623"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 178.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CE44816B_DDF4_C822_41E7_09D40C81FC0E"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -17.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CB0373FD_DDF4_C827_41CD_579EB560CF72"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 85.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C8F93295_DDF4_C8E6_417B_645D82B9A767"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -44.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C9246256_DDF4_C862_41DA_BDD147DEA045"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 24.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CB6CC39F_DDF4_C8E2_41E7_271FA0B15B06"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -12.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CE27A17B_DDF4_C822_41C3_264ED619A3A7"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 142.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CA2C6FBE_DDF4_D825_41E8_5756C5C9D95D"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -104.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C929B256_DDF4_C862_41E2_110E94148D78"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -102.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C5C51010_DDF4_C7FD_41E5_EAF8E9AEC47B"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 126.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CA6B748A_DDF4_C8E2_41BD_54CCF7ADC13D"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -117.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C967E227_DDF4_C822_41D5_A28BC6F5BF7F"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -83.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CE71F15D_DDF4_C867_419E_35B394A4FD93"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_97B8ABA2_D9DD_9501_41D7_2EB760D81D21",
 "audio": {
  "mp3Url": "media/audio_97B8ABA2_D9DD_9501_41D7_2EB760D81D21.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_97B8ABA2_D9DD_9501_41D7_2EB760D81D21.ogg"
 },
 "data": {
  "label": "today-is-the-day-mark-july-main-version-18477-02-21"
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -102.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C5E0BFEA_DDF4_D82D_41C8_F223F2D74639"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -68.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C98E8218_DDF4_CBED_41D7_A7328F8C18CE"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -93.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CA0EDFD3_DDF4_D863_41C1_7A69A939C169"
},
{
 "overlays": [
  "this.overlay_D6513DF7_D972_EAEB_41B3_C4BDC4FC08BD"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_103522_00_merged",
 "id": "panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -165.16,
   "yaw": 77.1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99",
   "distance": 1
  }
 ]
},
{
 "overlays": [
  "this.overlay_D7E97B5C_D9AC_B501_41E4_21E2611AEEDE",
  "this.overlay_D7207717_D9AC_9D0F_41E7_577B241C7E02",
  "this.overlay_D71AA6F3_D9AC_7F07_41DB_BBC92204CDA4",
  "this.overlay_9359013A_DA64_9501_41E1_413334E81E17",
  "this.overlay_901AD77A_DA64_9D01_41D8_909D144D58C4"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_104727_00_merged",
 "id": "panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 77.7,
   "yaw": 115.47,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860"
  },
  {
   "backwardYaw": 83.89,
   "yaw": -158.37,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2449E7A_D95E_69E5_41E7_97426A243776",
   "distance": 1
  },
  {
   "backwardYaw": 143.79,
   "yaw": -53.91,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C"
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -65.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CBE3E322_DDF4_C822_4189_1151CB39C86A"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_camera"
},
{
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
 "class": "Panorama",
 "label": "IMG_20240413_102842_00_merged",
 "id": "panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 25.07,
   "yaw": 75.04,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D277598A_D95F_EB25_41E5_0800136A96D4"
  },
  {
   "backwardYaw": 71.95,
   "yaw": -98.96,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D275C425_D95F_F96F_41DB_79786819224B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000"
  },
  {
   "backwardYaw": 135.01,
   "yaw": 162.29,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F"
  },
  {
   "backwardYaw": 3.61,
   "yaw": -56.86,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC"
  },
  {
   "backwardYaw": 111.11,
   "yaw": -150.81,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425",
   "distance": 1
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 131.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CA96FF85_DDF4_D8E7_41C5_8BD9B8C9A796"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -120.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CE4DE16B_DDF4_C822_41CF_075D90326E55"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -12.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CE1881BA_DDF4_C82D_41D0_96CFD20E230E"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 119.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C9C031D9_DDF4_C86F_41B6_838DA5077982"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 63.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CB4EB3BE_DDF4_C822_41CD_CE03271AC72C"
},
{
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "class": "VideoPlayer",
 "id": "MainViewerVideoPlayer"
},
{
 "overlays": [
  "this.overlay_D7E3FC3F_D956_A95B_41E6_E8D692A00205",
  "this.overlay_D641B5D1_D956_FB27_41EA_5D37729EF2B4"
 ],
 "class": "Panorama",
 "label": "IMG_20240413_102548_00_merged",
 "id": "panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -8.86,
   "yaw": -161.91,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF",
   "distance": 1
  },
  {
   "backwardYaw": -92.67,
   "yaw": 62.35,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC",
   "distance": 1
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 8.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C83F4303_DDF4_C9E3_41E1_FD15956867E9"
},
{
 "toolTipFontStyle": "normal",
 "progressBackgroundColorDirection": "vertical",
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingLeft": 10,
 "progressBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "toolTipFontFamily": "Georgia",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "width": "100%",
 "toolTipShadowOpacity": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "toolTipPaddingTop": 7,
 "toolTipBorderSize": 1,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "paddingLeft": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": 13,
 "progressBarBorderRadius": 0,
 "vrPointerColor": "#FFFFFF",
 "toolTipOpacity": 0.5,
 "playbackBarHeight": 10,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontWeight": "normal",
 "playbackBarHeadWidth": 6,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "transitionMode": "blending",
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderRadius": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBackgroundColor": "#000000",
 "progressBarOpacity": 1,
 "paddingBottom": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadShadow": true,
 "playbackBarBottom": 5,
 "playbackBarOpacity": 1,
 "playbackBarHeadBorderColor": "#000000",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "progressRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipShadowSpread": 0,
 "playbackBarHeadBorderRadius": 0,
 "vrPointerSelectionColor": "#FF6600",
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingBottom": 7,
 "propagateClick": true,
 "top": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipShadowBlurRadius": 3,
 "vrPointerSelectionTime": 2000,
 "minHeight": 50,
 "shadow": false,
 "firstTransitionDuration": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#FFFFFF",
 "progressBottom": 55,
 "toolTipBorderColor": "#767676",
 "playbackBarBorderSize": 0,
 "progressBorderSize": 0,
 "progressHeight": 6,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowColor": "#000000",
 "progressLeft": 0,
 "borderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressOpacity": 1,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipTextShadowOpacity": 0
},
{
 "paddingBottom": 0,
 "class": "Container",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "backgroundOpacity": 0,
 "right": "0%",
 "verticalAlign": "top",
 "gap": 10,
 "overflow": "scroll",
 "paddingLeft": 0,
 "propagateClick": true,
 "top": "0%",
 "height": 641,
 "minHeight": 1,
 "shadow": false,
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "--SETTINGS"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
},
{
 "paddingBottom": 0,
 "class": "Container",
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "backgroundOpacity": 0.64,
 "right": "0%",
 "verticalAlign": "top",
 "gap": 10,
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "overflow": "visible",
 "paddingLeft": 0,
 "propagateClick": true,
 "bottom": 0,
 "height": 118,
 "minHeight": 1,
 "shadow": false,
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "--MENU"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
},
{
 "scrollBarOpacity": 0.5,
 "visible": false,
 "paddingBottom": 0,
 "class": "Container",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "creationPolicy": "inAdvance",
 "backgroundOpacity": 0.6,
 "backgroundColorRatios": [
  0,
  1
 ],
 "right": "0%",
 "verticalAlign": "top",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "paddingLeft": 0,
 "propagateClick": true,
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minHeight": 1,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "data": {
  "name": "--INFO photo"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver"
},
{
 "scrollBarOpacity": 0.5,
 "visible": false,
 "paddingBottom": 0,
 "class": "Container",
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "creationPolicy": "inAdvance",
 "backgroundOpacity": 0.6,
 "backgroundColorRatios": [
  0,
  1
 ],
 "right": "0%",
 "verticalAlign": "top",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "paddingLeft": 0,
 "propagateClick": true,
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minHeight": 1,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "data": {
  "name": "--INFO photoalbum"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver"
},
{
 "scrollBarOpacity": 0.5,
 "visible": false,
 "paddingBottom": 0,
 "class": "Container",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "creationPolicy": "inAdvance",
 "backgroundOpacity": 0.6,
 "backgroundColorRatios": [
  0,
  1
 ],
 "right": "0%",
 "verticalAlign": "top",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "paddingLeft": 0,
 "propagateClick": true,
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minHeight": 1,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver"
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "class": "Container",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "backgroundColorRatios": [
  0,
  1
 ],
 "right": "0%",
 "verticalAlign": "top",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "paddingLeft": 0,
 "propagateClick": true,
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minHeight": 1,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "data": {
  "name": "--LOCATION"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver"
},
{
 "scrollBarOpacity": 0.5,
 "visible": false,
 "paddingBottom": 0,
 "class": "Container",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "creationPolicy": "inAdvance",
 "backgroundOpacity": 0.6,
 "backgroundColorRatios": [
  0,
  1
 ],
 "right": "0%",
 "verticalAlign": "top",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "paddingLeft": 0,
 "propagateClick": true,
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minHeight": 1,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "data": {
  "name": "--FLOORPLAN"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver"
},
{
 "scrollBarOpacity": 0.5,
 "visible": false,
 "paddingBottom": 0,
 "class": "Container",
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "creationPolicy": "inAdvance",
 "backgroundOpacity": 0.6,
 "backgroundColorRatios": [
  0,
  1
 ],
 "right": "0%",
 "verticalAlign": "top",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "paddingLeft": 0,
 "propagateClick": true,
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minHeight": 1,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver"
},
{
 "scrollBarOpacity": 0.5,
 "visible": false,
 "paddingBottom": 0,
 "class": "Container",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "creationPolicy": "inAdvance",
 "backgroundOpacity": 0.6,
 "backgroundColorRatios": [
  0,
  1
 ],
 "right": "0%",
 "verticalAlign": "top",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "paddingLeft": 0,
 "propagateClick": true,
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minHeight": 1,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver"
},
{
 "scrollBarOpacity": 0.5,
 "visible": false,
 "paddingBottom": 0,
 "class": "Container",
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "creationPolicy": "inAdvance",
 "backgroundOpacity": 0.6,
 "backgroundColorRatios": [
  0,
  1
 ],
 "right": "0%",
 "verticalAlign": "top",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "paddingLeft": 0,
 "propagateClick": true,
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minHeight": 1,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "data": {
  "name": "--REALTOR"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver"
},
{
 "visible": false,
 "paddingBottom": 0,
 "class": "Image",
 "verticalAlign": "middle",
 "id": "Image_B44E6FBD_BAA2_0E15_41E1_F18F1E555CBE",
 "left": "0%",
 "maxHeight": 953,
 "maxWidth": 1258,
 "backgroundOpacity": 0,
 "url": "skin/Image_B44E6FBD_BAA2_0E15_41E1_F18F1E555CBE.png",
 "width": "5.398%",
 "propagateClick": false,
 "paddingLeft": 0,
 "top": "0%",
 "height": "7.606%",
 "minHeight": 1,
 "shadow": false,
 "click": "this.openLink('http://NicholasC.JohnLScott.com', '_blank')",
 "minWidth": 1,
 "paddingTop": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Image4523"
 },
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "paddingRight": 0,
 "cursor": "hand"
},
{
 "visible": false,
 "paddingBottom": 0,
 "class": "UIComponent",
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "backgroundColorRatios": [
  0
 ],
 "right": 0,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "propagateClick": false,
 "top": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minHeight": 0,
 "shadow": false,
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "minWidth": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "data": {
  "name": "UIComponent10494"
 },
 "borderRadius": 0,
 "paddingRight": 0
},
{
 "visible": false,
 "paddingBottom": 0,
 "class": "ZoomImage",
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "backgroundColorRatios": [],
 "right": 0,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "propagateClick": false,
 "top": 0,
 "bottom": 0,
 "backgroundColor": [],
 "minHeight": 0,
 "shadow": false,
 "minWidth": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "data": {
  "name": "ZoomImage10495"
 },
 "borderRadius": 0,
 "scaleMode": "custom",
 "paddingRight": 0
},
{
 "rollOverIconColor": "#666666",
 "paddingBottom": 5,
 "class": "CloseButton",
 "verticalAlign": "middle",
 "id": "closeButtonPopupPanorama",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "backgroundOpacity": 0.3,
 "fontFamily": "Arial",
 "right": 10,
 "shadowColor": "#000000",
 "iconColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "paddingLeft": 5,
 "propagateClick": false,
 "top": 10,
 "iconHeight": 20,
 "borderColor": "#000000",
 "mode": "push",
 "shadow": false,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "label": "",
 "minWidth": 0,
 "fontSize": "1.29vmin",
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "paddingTop": 5,
 "pressedIconColor": "#888888",
 "borderSize": 0,
 "shadowBlurRadius": 6,
 "layout": "horizontal",
 "iconLineWidth": 5,
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "fontStyle": "normal",
 "borderRadius": 0,
 "paddingRight": 5,
 "fontWeight": "normal",
 "textDecoration": "none",
 "visible": false,
 "cursor": "hand",
 "iconWidth": 20,
 "data": {
  "name": "CloseButton10496"
 },
 "gap": 5
},
{
 "paddingBottom": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "maxHeight": 58,
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "width": 58,
 "paddingLeft": 0,
 "propagateClick": true,
 "height": 58,
 "minHeight": 1,
 "mode": "toggle",
 "shadow": false,
 "minWidth": 1,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "maxHeight": 58,
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "width": 58,
 "paddingLeft": 0,
 "propagateClick": true,
 "height": 58,
 "minHeight": 1,
 "mode": "toggle",
 "shadow": false,
 "minWidth": 1,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton MUTE"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "cursor": "hand"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF, this.camera_CE1881BA_DDF4_C82D_41D0_96CFD20E230E); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88F3E595_D9E4_FD03_41CD_63F707AA871A",
   "pitch": -21.14,
   "yaw": 90.68,
   "hfov": 19.82,
   "distance": 100
  }
 ],
 "id": "overlay_D7DA0EB8_D9A4_6F01_418B_BE44CB9B7C08",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 90.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.14,
   "hfov": 19.82
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884, this.camera_C9EE31BA_DDF4_C82D_41E9_070D983D67E4); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88F36595_D9E4_FD03_41E2_BFC9B4CE66F7",
   "pitch": -17.31,
   "yaw": -104.08,
   "hfov": 20.28,
   "distance": 100
  }
 ],
 "id": "overlay_D71DEC6C_D9A5_9301_41AE_3CACB52C2BD8",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -104.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.31,
   "hfov": 20.28
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED, this.camera_CAD4F44B_DDF4_C862_41DA_ACD24691392F); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88F7758E_D9E4_FD01_41E3_BAE24C956C37",
   "pitch": -5.8,
   "yaw": 143.5,
   "hfov": 21.14,
   "distance": 100
  }
 ],
 "id": "overlay_D7F290E4_D9A7_B301_41D7_75FF0D79E89D",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 143.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.8,
   "hfov": 21.14
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2B2AF9A_DD08_3878_41DF_430F55155118",
   "pitch": 0.01,
   "yaw": -14.96,
   "hfov": 18.89,
   "distance": 100
  }
 ],
 "id": "overlay_D657D805_D973_E92F_41C0_3A6BD0763878",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -14.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.01,
   "hfov": 18.89
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_CAF4042C_DDF4_C826_41BA_E0B2E3FD7166); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88C8857C_D9E4_FD01_41DB_5F4625AA9E32",
   "pitch": -16.52,
   "yaw": -62.67,
   "hfov": 15.46,
   "distance": 100
  }
 ],
 "id": "overlay_D6115758_D973_A725_41E2_2E3BC7716E7C",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -62.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.52,
   "hfov": 15.46
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2446447_D95F_992B_41CD_4D904B227F99, this.camera_CAC4B43C_DDF4_C825_41E2_9A66EAE8B1F8); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88C8257C_D9E4_FD01_41DA_632EC5D3732E",
   "pitch": -24.09,
   "yaw": -37.98,
   "hfov": 19.39,
   "distance": 100
  }
 ],
 "id": "overlay_D6D5F4E2_D973_9AE5_41E7_AEB5F99CA11E",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -37.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.09,
   "hfov": 19.39
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88C8657C_D9E4_FD01_41DC_972AEFD19B09",
   "pitch": -0.79,
   "yaw": -114.31,
   "hfov": 13.76,
   "distance": 100
  }
 ],
 "id": "overlay_C94DC638_D972_9965_41E0_D698ABED5444",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -114.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_1_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.79,
   "hfov": 13.76
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2B24F9B_DD08_3878_41E4_51C35086B945",
   "pitch": -17.7,
   "yaw": 8.06,
   "hfov": 17.99,
   "distance": 100
  }
 ],
 "id": "overlay_FD829770_D9E7_BD01_41D2_654699B58F88",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 8.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.7,
   "hfov": 17.99
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2B22F9B_DD08_3878_41BC_D11CEE4A61A5",
   "pitch": -2.55,
   "yaw": -43.19,
   "hfov": 16.3,
   "distance": 100
  }
 ],
 "id": "overlay_CC423298_DCF9_C878_41E1_AEF103FB8825",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -43.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0_HS_5_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.55,
   "hfov": 16.3
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D277598A_D95F_EB25_41E5_0800136A96D4, this.camera_CEA9E100_DDF4_C9DE_41E8_8A1A8B3A4B05); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C94DE043_DD5D_4F94_41E6_5DA79E1C89B6",
   "pitch": -3.45,
   "yaw": 19.99,
   "hfov": 16.19,
   "distance": 100
  }
 ],
 "id": "overlay_D65B94FB_D952_9ADB_41EB_0205D9A243A6",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 19.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.45,
   "hfov": 16.19
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000, this.camera_CEB3F100_DDF4_C9DE_41DB_AA17D64DCD9A); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CB82E82A_DD18_3858_41E4_548023BE2D4A",
   "pitch": -11.79,
   "yaw": -155.22,
   "hfov": 15.79,
   "distance": 100
  }
 ],
 "id": "overlay_D663F4B7_D952_B96B_41E3_B6EED08594D2",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -155.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.79,
   "hfov": 15.79
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB, this.camera_CE9E0142_DDF4_C85D_41E7_1B28AB3ECC7E); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2AF2F95_DD08_3848_41E5_6C3C6B1CA508",
   "pitch": -22.45,
   "yaw": -107.88,
   "hfov": 15.34,
   "distance": 100
  }
 ],
 "id": "overlay_D6022F78_D952_A7E5_41E0_E5F6305AA0F2",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -107.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.45,
   "hfov": 15.34
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2AEFF95_DD08_3848_41E5_EA283FE32630",
   "pitch": -1.96,
   "yaw": -12.09,
   "hfov": 11.39,
   "distance": 100
  }
 ],
 "id": "overlay_D6903940_D952_EB25_41C2_1F60FBF9EB10",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -12.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.96,
   "hfov": 11.39
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2AEDF95_DD08_3848_41D1_F7B2D98A7544",
   "pitch": -2.87,
   "yaw": -71.07,
   "hfov": 16.42,
   "distance": 100
  }
 ],
 "id": "overlay_C9E6996C_D952_6BFD_41C9_9BCF5BB30E27",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -71.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.87,
   "hfov": 16.42
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A, this.camera_CE876123_DDF4_C822_41A8_E97F5B67A176); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2AEAF95_DD08_3848_41C4_1A35CC69BBE7",
   "pitch": -3.61,
   "yaw": 121.26,
   "hfov": 15.56,
   "distance": 100
  }
 ],
 "id": "overlay_D7A6891B_D951_AB5B_41E2_6BC17E48EE4A",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 121.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_5_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.61,
   "hfov": 15.56
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7, this.camera_CE8EB131_DDF4_C83E_41E9_6958139E234A); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2AE8F95_DD08_3848_41E8_C56FB95CF7FA",
   "pitch": -12.2,
   "yaw": 74.48,
   "hfov": 13.57,
   "distance": 100
  }
 ],
 "id": "overlay_D69F1082_D951_9925_41C8_D143118029FD",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 74.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_6_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.2,
   "hfov": 13.57
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E, this.camera_CEBCD10E_DDF4_C9E2_41C2_3B17A633429A); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2AE6F96_DD08_3848_41E9_EBDE8976C71B",
   "pitch": -29.59,
   "yaw": 71.95,
   "hfov": 11.8,
   "distance": 100
  }
 ],
 "id": "overlay_F94107B3_D9DC_9D07_4174_6CD9E2EEE2F4",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 71.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_7_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.59,
   "hfov": 11.8
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2446447_D95F_992B_41CD_4D904B227F99, this.camera_CE89613D_DDF4_C827_41B0_8BD819B8C407); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C9438049_DD5D_4F94_41BC_4DA5FC8E22C3",
   "pitch": -25.86,
   "yaw": 0.97,
   "hfov": 14.34,
   "distance": 100
  }
 ],
 "id": "overlay_D3A81821_DCF8_3848_41E5_84D663271BA4",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 0.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_8_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.86,
   "hfov": 14.34
  }
 ]
},
{
 "videoVisibleOnStop": false,
 "class": "VideoPanoramaOverlay",
 "blending": 0,
 "id": "overlay_CE12EBF8_DD0B_DFB8_41C2_69BD086094CF",
 "roll": -7.05,
 "loop": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_CE12EBF8_DD0B_DFB8_41C2_69BD086094CF_t.jpg",
    "width": 960,
    "class": "ImageResourceLevel",
    "height": 540
   }
  ]
 },
 "pitch": -11.19,
 "rotationX": 19.3,
 "hfov": 12.07,
 "autoplay": true,
 "yaw": -105.05,
 "enabledInCardboard": true,
 "rotationY": -48.86,
 "useHandCursor": true,
 "vfov": 5.76,
 "distance": 50,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 960,
  "class": "VideoResource",
  "mp4Url": "media/video_CCB0F197_DD08_C848_41CF_88F56BB718E1.mp4",
  "height": 540
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_CE65A150_DDF4_C87E_41E0_0A845943CCEE); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C9400049_DD5D_4F94_41D5_451BA1E3A9CD",
   "pitch": -14.55,
   "yaw": 167.19,
   "hfov": 16.77,
   "distance": 100
  }
 ],
 "id": "overlay_D2487640_DD55_3395_41E1_04862222CBA9",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 167.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_9_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.55,
   "hfov": 16.77
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2446447_D95F_992B_41CD_4D904B227F99, this.camera_C89222C4_DDF4_C866_41E6_E891F0F91070); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88CDE576_D9E4_FD01_4194_3BF2C41C0F31",
   "pitch": -12,
   "yaw": 138.48,
   "hfov": 20.78,
   "distance": 100
  }
 ],
 "id": "overlay_D645508F_D972_993B_41C5_F18245B8B18F",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 138.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12,
   "hfov": 20.78
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2, this.camera_C881C2C4_DDF4_C866_41DA_A651ECCD2D94); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2B38F99_DD08_3878_41E4_2C84DE5BF00D",
   "pitch": -14.55,
   "yaw": -152.87,
   "hfov": 15.62,
   "distance": 100
  }
 ],
 "id": "overlay_D3B5C5A3_DCF8_C849_41D6_FC2B7D94C937",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -152.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.55,
   "hfov": 15.62
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25, this.camera_C8DA82A5_DDF4_C827_41E4_7AAE5E7FD949); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2B72FA2_DD08_3848_41E6_6017C50137E3",
   "pitch": -18.69,
   "yaw": -80.99,
   "hfov": 11,
   "distance": 100
  }
 ],
 "id": "overlay_D7C790D0_D9A5_B301_41E5_6CDC8471F7A8",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -80.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.69,
   "hfov": 11
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2B6FFA2_DD08_3848_41E3_70C68686B999",
   "pitch": -15.64,
   "yaw": -56.99,
   "hfov": 14.96,
   "distance": 100
  }
 ],
 "id": "overlay_D7064A6F_D9A5_B71F_41E0_3F3BD68A4C88",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -56.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.64,
   "hfov": 14.96
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2B6DFA2_DD08_3848_41E5_CA611C77CCA6",
   "pitch": -9.44,
   "yaw": 121.77,
   "hfov": 14.35,
   "distance": 100
  }
 ],
 "id": "overlay_D76CD573_D9A5_9D07_41E3_9ABF5406F7B7",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 121.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.44,
   "hfov": 14.35
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C, this.camera_C8CA3295_DDF4_C8E6_41D7_81A5054C2537); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2B69FA2_DD08_3848_41CD_C180699BDB55",
   "pitch": -15.05,
   "yaw": -165.84,
   "hfov": 16.34,
   "distance": 100
  }
 ],
 "id": "overlay_D7535325_D9A4_7503_41E5_690714D6AE13",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -165.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.05,
   "hfov": 16.34
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33, this.camera_C8F7D285_DDF4_C8E6_41E1_8B91CB7EF167); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2B67FA2_DD08_3848_41A8_D69F93109DD1",
   "pitch": -17.31,
   "yaw": -140.4,
   "hfov": 15.21,
   "distance": 100
  }
 ],
 "id": "overlay_D6935DE8_D9A4_6D01_41E3_4C1058EC9A36",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -140.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.31,
   "hfov": 15.21
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B, this.camera_C8F93295_DDF4_C8E6_417B_645D82B9A767); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2B65FA2_DD08_3848_41E6_A34A23876ECD",
   "pitch": -34.52,
   "yaw": -80.07,
   "hfov": 14.42,
   "distance": 100
  }
 ],
 "id": "overlay_E0EDE0BC_D9E7_9301_41E5_DC6B0F61BECF",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -80.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0_HS_5_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.52,
   "hfov": 14.42
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C, this.camera_CEDB60D3_DDF4_C862_41EB_376543FE20C1); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88C05585_D9E4_FD03_41D4_34DE3F16BE55",
   "pitch": -4.32,
   "yaw": 169.76,
   "hfov": 21.19,
   "distance": 100
  }
 ],
 "id": "overlay_D795B981_D9AC_F503_41E9_A8232F68E34E",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 169.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.32,
   "hfov": 21.19
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877, this.camera_CEA6B0DD_DDF4_C866_41C1_56CAD80561B7); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88C1D585_D9E4_FD03_4182_633D5C7456DE",
   "pitch": -24.09,
   "yaw": -161.03,
   "hfov": 19.39,
   "distance": 100
  }
 ],
 "id": "overlay_D72F4B83_D9AC_7506_41B6_B96ED2921098",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -161.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.09,
   "hfov": 19.39
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7, this.camera_CBA78351_DDF4_C87E_41D5_B6CD8ED53773); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88C6E57D_D9E4_FD03_41E1_FBD5673DB839",
   "pitch": -10.22,
   "yaw": 28.42,
   "hfov": 20.91,
   "distance": 100
  }
 ],
 "id": "overlay_D7E567C4_D9AC_FD01_41B3_3289B38546D0",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 28.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.22,
   "hfov": 20.91
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0, this.camera_CBBB4370_DDF4_C83E_41CF_F8541A83A4B2); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88C6057D_D9E4_FD03_41E0_D489277B54B6",
   "pitch": -24.09,
   "yaw": -37.98,
   "hfov": 19.39,
   "distance": 100
  }
 ],
 "id": "overlay_D7137BC5_D9AC_9503_41D7_07C03F2F4CF4",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -37.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.09,
   "hfov": 19.39
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627, this.camera_CB8BB380_DDF4_C8DD_41C6_D8FDEF59E034); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88C7A57D_D9E4_FD03_41E9_F58F692F6E3D",
   "pitch": -26.16,
   "yaw": 79.17,
   "hfov": 19.07,
   "distance": 100
  }
 ],
 "id": "overlay_D7702493_D9AC_B307_41E9_0F9EBE291DD9",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 79.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.16,
   "hfov": 19.07
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C, this.camera_CBA94361_DDF4_C85F_41B1_B3900A902098); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88C7C57D_D9E4_FD03_4146_B1FACA8E5719",
   "pitch": -17.01,
   "yaw": 148.22,
   "hfov": 20.32,
   "distance": 100
  }
 ],
 "id": "overlay_D68B67BC_D9AC_9D02_41EA_B56706116FD7",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 148.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_1_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.01,
   "hfov": 20.32
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C, this.camera_CBC48332_DDF4_C83D_41D5_43B95D39889B); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88C16585_D9E4_FD03_41C6_305690530B61",
   "pitch": -33.24,
   "yaw": 114.29,
   "hfov": 17.77,
   "distance": 100
  }
 ],
 "id": "overlay_D7C8DB83_D9AD_F507_41E4_E82AFF50F7D4",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 114.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.24,
   "hfov": 17.77
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC, this.camera_CBD5A341_DDF4_C85E_41C6_4006D930F70B); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88FE9585_D9E4_FD03_41E1_D0761BE30FA8",
   "pitch": -12.59,
   "yaw": -9.35,
   "hfov": 20.74,
   "distance": 100
  }
 ],
 "id": "overlay_D735DB2F_D9AD_951F_419A_6A4E0F5375C5",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -9.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.59,
   "hfov": 20.74
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB, this.camera_C85BE2F3_DDF4_C822_41DF_4ADFCFB8F562); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88FE1585_D9E4_FD03_41D6_B16191028AD6",
   "pitch": -43.57,
   "yaw": 83.89,
   "hfov": 15.39,
   "distance": 100
  }
 ],
 "id": "overlay_D7245DE8_D9AC_AD02_41C7_B85FB2A695B3",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 83.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -43.57,
   "hfov": 15.39
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7, this.camera_C82AC2F3_DDF4_C822_41C0_07F219895BD4); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88C12585_D9E4_FD03_41E9_60943BB40C46",
   "pitch": 7.78,
   "yaw": 111.63,
   "hfov": 21.05,
   "distance": 100
  }
 ],
 "id": "overlay_D749B9E7_D9AC_950F_41CE_6FF45EC85C10",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 111.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.78,
   "hfov": 21.05
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2448E90_D95F_A925_41E8_B306937D2F35, this.camera_CA89D47A_DDF4_C822_41C8_9D9CF45DD6AE); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2B4EF9D_DD08_3878_41EA_06668542C858",
   "pitch": -16.52,
   "yaw": -171.37,
   "hfov": 19.24,
   "distance": 100
  }
 ],
 "id": "overlay_D7A182C3_D9AC_9707_41D2_BF5DB8D66F78",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -171.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.52,
   "hfov": 19.24
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0, this.camera_CAB9A46B_DDF4_C823_41E0_8EB5F6287CC5); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88C7557E_D9E4_FD01_41C4_6E1983C9D05F",
   "pitch": -23.21,
   "yaw": -60.99,
   "hfov": 19.53,
   "distance": 100
  }
 ],
 "id": "overlay_D7D0820E_D9AC_B701_41DA_0C0C0440FDAE",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -60.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.21,
   "hfov": 19.53
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2B4AF9D_DD08_3878_41DA_65B8B402266F",
   "pitch": -20.16,
   "yaw": -4.85,
   "hfov": 17.55,
   "distance": 100
  }
 ],
 "id": "overlay_D7059272_D9AC_9701_41C0_CA6D80C6B127",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -4.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.16,
   "hfov": 17.55
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A, this.camera_CAA6245B_DDF4_C862_41B8_B30261439035); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2B48F9D_DD08_3878_41D1_E393A511DF7E",
   "pitch": -23.41,
   "yaw": 154.31,
   "hfov": 17.14,
   "distance": 100
  }
 ],
 "id": "overlay_D74E2E3F_D9AC_EF7F_41AC_6F74CF32AFF8",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 154.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.41,
   "hfov": 17.14
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5, this.camera_CAB6746B_DDF4_C823_41DD_25D73B3D558F); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2B46F9D_DD08_3878_41BC_602606787613",
   "pitch": -19.18,
   "yaw": 125.11,
   "hfov": 17.66,
   "distance": 100
  }
 ],
 "id": "overlay_D6CE016E_D9AC_9501_41E2_E5376BF39190",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 125.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.18,
   "hfov": 17.66
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2, this.camera_CA840F7B_DDF4_D823_418B_D5C8CAD3F087); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88F7158F_D9E4_FD1F_41DA_7E9DA08D31BE",
   "pitch": -11.7,
   "yaw": 93.92,
   "hfov": 20.8,
   "distance": 100
  }
 ],
 "id": "overlay_D7F51DEF_D9A7_AD1F_41E6_C8B6A932CB2F",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 93.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.7,
   "hfov": 20.8
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3, this.camera_CAB46F71_DDF4_D83F_41E8_37B58A28AD2F); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88F4A58F_D9E4_FD1F_41C2_421607C84F54",
   "pitch": -9.34,
   "yaw": -171.37,
   "hfov": 20.96,
   "distance": 100
  }
 ],
 "id": "overlay_D71E7356_D9A4_7501_41CA_A2BA3B99B99F",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -171.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.34,
   "hfov": 20.96
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88F4258F_D9E4_FD1F_41D4_39ACBD81F633",
   "pitch": 0.3,
   "yaw": 107.89,
   "hfov": 18.69,
   "distance": 100
  }
 ],
 "id": "overlay_D7767F64_D9A4_6D01_41EB_2DB637C28DFB",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 107.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.3,
   "hfov": 18.69
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_CA96FF85_DDF4_D8E7_41C5_8BD9B8C9A796); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88F4658F_D9E4_FD1F_41CB_A06EE8EDF8D2",
   "pitch": -10.62,
   "yaw": 162.77,
   "hfov": 18.37,
   "distance": 100
  }
 ],
 "id": "overlay_989C8B4B_D9EC_9506_41D8_67523E91CB46",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 162.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_1_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.62,
   "hfov": 18.37
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_CCCA8663_DD53_D394_41A5_A0246618F3C8, {'rollOverIconColor':'#666666','rollOverBorderSize':0,'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','pressedIconLineWidth':5,'pressedIconColor':'#888888','borderSize':0,'paddingTop':5,'iconColor':'#000000','rollOverIconWidth':20,'rollOverIconHeight':20,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'pressedIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','borderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'pressedBorderColor':'#000000','paddingRight':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5}, this.ImageResource_CCCA9663_DD53_D394_41EA_45EA13B9B60D, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
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
      "class": "ImageResourceLevel",
      "height": 74
     }
    ]
   },
   "pitch": -0.49,
   "yaw": -122.24,
   "hfov": 6.93
  }
 ],
 "id": "overlay_CCFF467C_DD53_D06C_41DF_120FFFF6F085",
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -122.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0_HS_4_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.49,
   "hfov": 6.93
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_D2A2646B_DDD5_C822_41C9_3D92B65E26E4, {'rollOverIconColor':'#666666','rollOverBorderSize':0,'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','pressedIconLineWidth':5,'pressedIconColor':'#888888','borderSize':0,'paddingTop':5,'iconColor':'#000000','rollOverIconWidth':20,'rollOverIconHeight':20,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'pressedIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','borderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'pressedBorderColor':'#000000','paddingRight':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5}, this.ImageResource_CE73A263_DDDD_C823_41AE_9340D94768E2, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0_HS_5_0.png",
      "width": 114,
      "class": "ImageResourceLevel",
      "height": 74
     }
    ]
   },
   "pitch": 3.37,
   "yaw": -62.74,
   "hfov": 6.92
  }
 ],
 "id": "overlay_D27F2ADF_DDD4_3862_41DF_3CB0CAD51B2C",
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -62.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0_HS_5_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.37,
   "hfov": 6.92
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_CD8FFC6C_DDDC_7825_41BA_D0E82C8E2F53, {'rollOverIconColor':'#666666','rollOverBorderSize':0,'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','pressedIconLineWidth':5,'pressedIconColor':'#888888','borderSize':0,'paddingTop':5,'iconColor':'#000000','rollOverIconWidth':20,'rollOverIconHeight':20,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'pressedIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','borderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'pressedBorderColor':'#000000','paddingRight':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5}, this.ImageResource_CE72B263_DDDD_C823_41D0_C7B3268FD91D, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0_HS_6_0.png",
      "width": 114,
      "class": "ImageResourceLevel",
      "height": 74
     }
    ]
   },
   "pitch": 6.56,
   "yaw": -34.15,
   "hfov": 6.88
  }
 ],
 "id": "overlay_D2336A8F_DDD4_58E2_41E9_6136C8A08011",
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -34.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_0_HS_6_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.56,
   "hfov": 6.88
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2AD3F93_DD08_3848_41E8_5892374A1822",
   "pitch": -3.54,
   "yaw": 20.53,
   "hfov": 13.95,
   "distance": 100
  }
 ],
 "id": "overlay_D6668017_D956_992B_41A1_DF3FFFDCF50C",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 20.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.54,
   "hfov": 13.95
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB, this.camera_C8AD82A5_DDF4_C827_41E4_CFB2489CCE85); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2AD1F93_DD08_3848_41E7_5F2C1C221C3A",
   "pitch": -10.62,
   "yaw": -8.86,
   "hfov": 18.95,
   "distance": 100
  }
 ],
 "id": "overlay_D6F1AC0F_D956_A93B_41E0_64849DD7D4E1",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -8.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.62,
   "hfov": 18.95
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A, this.camera_CB7F73AF_DDF4_C823_41CB_4C0AEE51F204); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88D31573_D9E4_FD07_41C1_B6A788EC695A",
   "pitch": -9.04,
   "yaw": 167.99,
   "hfov": 20.98,
   "distance": 100
  }
 ],
 "id": "overlay_D64FD51E_D94E_9B5D_41E1_F7C14C7B25F9",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 167.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.04,
   "hfov": 20.98
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB, this.camera_CB4EB3BE_DDF4_C822_41CD_CE03271AC72C); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88D0B573_D9E4_FD07_41E7_C55837221F98",
   "pitch": -6.39,
   "yaw": 79.47,
   "hfov": 21.11,
   "distance": 100
  }
 ],
 "id": "overlay_D62E9350_D94E_9F25_41E5_2FDB4C31578C",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 79.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.39,
   "hfov": 21.11
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88D0D574_D9E4_FD01_41E7_3ADB937442CE",
   "pitch": -0.59,
   "yaw": 99.14,
   "hfov": 12.79,
   "distance": 100
  }
 ],
 "id": "overlay_D6C593F1_D94E_7EE7_41E4_662283B1403D",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 99.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.59,
   "hfov": 12.79
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_CB5163CE_DDF4_C862_41C1_E26CC2C981D8); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88D01574_D9E4_FD01_41D1_C9C3DE5CF2D7",
   "pitch": -35.01,
   "yaw": 163.56,
   "hfov": 17.4,
   "distance": 100
  }
 ],
 "id": "overlay_D6B54584_D94F_9B2D_41AA_E4C28002A036",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 163.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.01,
   "hfov": 17.4
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88D04574_D9E4_FD01_41D8_608ACB4D3754",
   "pitch": -25.27,
   "yaw": -147.45,
   "hfov": 19.21,
   "distance": 100
  }
 ],
 "id": "overlay_C9E9798A_D94F_EB25_41DC_DF812478C79A",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -147.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.27,
   "hfov": 19.21
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7, this.camera_CB9AE38F_DDF4_C8E2_41E3_B3F0602683A3); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88D1C574_D9E4_FD01_41D0_C5FDF852B955",
   "pitch": -3.84,
   "yaw": 135.14,
   "hfov": 12.76,
   "distance": 100
  }
 ],
 "id": "overlay_C34580D1_D9AB_F303_41E2_B8DCC210075C",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 135.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_5_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.84,
   "hfov": 12.76
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_CB6CC39F_DDF4_C8E2_41E7_271FA0B15B06); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88D10574_D9E4_FD01_41E7_7E9335F4113F",
   "pitch": -7.67,
   "yaw": 110.35,
   "hfov": 12.68,
   "distance": 100
  }
 ],
 "id": "overlay_C5B58AFD_D9A4_B703_41E4_BB6AAE4BCEEB",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 110.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_6_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.67,
   "hfov": 12.68
  }
 ]
},
{
 "videoVisibleOnStop": false,
 "class": "VideoPanoramaOverlay",
 "blending": 0,
 "id": "overlay_CFE79476_DD08_48C8_41E4_488F96CAC310",
 "roll": 3.88,
 "loop": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_CFE79476_DD08_48C8_41E4_488F96CAC310_t.jpg",
    "width": 960,
    "class": "ImageResourceLevel",
    "height": 540
   }
  ]
 },
 "pitch": -6.73,
 "rotationX": 15.77,
 "hfov": 11.32,
 "autoplay": true,
 "yaw": 56.4,
 "enabledInCardboard": true,
 "rotationY": 12.4,
 "useHandCursor": true,
 "vfov": 7.91,
 "distance": 50,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 960,
  "class": "VideoResource",
  "mp4Url": "media/video_CCB0F197_DD08_C848_41CF_88F56BB718E1.mp4",
  "height": 540
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000, this.camera_CE2CE18B_DDF4_C8E3_41C6_BCBCC9535A45); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CB3FBBF6_DD18_3FC8_41E4_2C74F45E0213",
   "pitch": -14.75,
   "yaw": -8.19,
   "hfov": 18.26,
   "distance": 100
  }
 ],
 "id": "overlay_D643BF74_D94F_A7ED_419F_7869859FA013",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -8.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.75,
   "hfov": 18.26
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB, this.camera_CE1591AA_DDF4_C822_41EA_9A64A5F2B5FE); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CB3C7BF6_DD18_3FC8_41E2_4BEC1B545780",
   "pitch": -9.74,
   "yaw": 25.45,
   "hfov": 16.87,
   "distance": 100
  }
 ],
 "id": "overlay_D63A9932_D94E_6B65_41E1_7DB32FC00B7E",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 25.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.74,
   "hfov": 16.87
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_CE27A17B_DDF4_C822_41C3_264ED619A3A7); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CB3C0BF6_DD18_3FC8_41CB_35FA86767EBA",
   "pitch": -18.09,
   "yaw": 81.33,
   "hfov": 15.53,
   "distance": 100
  }
 ],
 "id": "overlay_D6D50646_D94E_792D_41D9_28EC467B6D37",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 81.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.09,
   "hfov": 15.53
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A, this.camera_CE38219A_DDF4_C8E2_41C6_0435F8345AB1); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CB3CBBF6_DD18_3FC8_41DC_340065152334",
   "pitch": -15.34,
   "yaw": 161.99,
   "hfov": 16.7,
   "distance": 100
  }
 ],
 "id": "overlay_D69A35D6_D94E_9B2D_41C6_0F131874907B",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 161.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.34,
   "hfov": 16.7
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4, this.camera_CE50C17B_DDF4_C822_41B6_1BF5A0BCB06E); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CB3D5BF6_DD18_3FC8_41E9_CFF7FC4F4E22",
   "pitch": -11.7,
   "yaw": -48.11,
   "hfov": 17.73,
   "distance": 100
  }
 ],
 "id": "overlay_C91B68D3_D94E_A92B_41E1_0DC9408B8294",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -48.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.7,
   "hfov": 17.73
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7, this.camera_CE44816B_DDF4_C822_41E7_09D40C81FC0E); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CB3DABF6_DD18_3FC8_419A_30F4A9964CDD",
   "pitch": -2.46,
   "yaw": 120.86,
   "hfov": 13.96,
   "distance": 100
  }
 ],
 "id": "overlay_D781005E_D94E_99DD_41D0_D21E5C32CA59",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 120.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_5_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.46,
   "hfov": 13.96
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3, this.camera_CE0F01AA_DDF4_C822_41D0_94F55A6B2ACE); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CB3A7BF6_DD18_3FC8_41E8_3BC949C24A5F",
   "pitch": -24.29,
   "yaw": -94.14,
   "hfov": 16.85,
   "distance": 100
  }
 ],
 "id": "overlay_D7AA6808_D971_A925_41DF_BF8A37505E59",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -94.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_6_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.29,
   "hfov": 16.85
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E, this.camera_CE33E19A_DDF4_C8E2_41D7_755B52D9B47A); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88CF8575_D9E4_FD03_41D6_AA03DE7F8CF2",
   "pitch": -17.9,
   "yaw": 111.11,
   "hfov": 14.98,
   "distance": 100
  }
 ],
 "id": "overlay_C68680AE_D9DF_9301_41AC_3E2B30B5606D",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 111.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_1_HS_7_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.9,
   "hfov": 14.98
  }
 ]
},
{
 "videoVisibleOnStop": false,
 "class": "VideoPanoramaOverlay",
 "blending": 0,
 "id": "overlay_CE092FE4_DD08_57C8_41C7_8C3263621DD7",
 "roll": -0.57,
 "loop": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_CE092FE4_DD08_57C8_41C7_8C3263621DD7_t.jpg",
    "width": 960,
    "class": "ImageResourceLevel",
    "height": 540
   }
  ]
 },
 "pitch": -4.05,
 "rotationX": 7.18,
 "hfov": 8.78,
 "autoplay": true,
 "yaw": 28.37,
 "enabledInCardboard": true,
 "rotationY": 15.97,
 "useHandCursor": true,
 "vfov": 4.1,
 "distance": 50,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 960,
  "class": "VideoResource",
  "mp4Url": "media/video_CCB0F197_DD08_C848_41CF_88F56BB718E1.mp4",
  "height": 540
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2446447_D95F_992B_41CD_4D904B227F99, this.camera_CE4DE16B_DDF4_C822_41CF_075D90326E55); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CB3A9BF6_DD18_3FC8_41EA_29EAE51E0BD2",
   "pitch": -9.63,
   "yaw": 79.37,
   "hfov": 13.78,
   "distance": 100
  }
 ],
 "id": "overlay_CFFE1BF6_DD18_3FC8_41E9_94CC8785A6D7",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 79.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_8_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.63,
   "hfov": 13.78
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E, this.camera_C862B2D4_DDF4_C866_41C6_481AA3FFBACB); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2B9BFA3_DD08_3848_41B3_5386B834D936",
   "pitch": -19.76,
   "yaw": -32.86,
   "hfov": 15.18,
   "distance": 100
  }
 ],
 "id": "overlay_D7F330D8_D9A4_B301_41CB_C3481DDDA511",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -32.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.76,
   "hfov": 15.18
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D275C425_D95F_F96F_41DB_79786819224B, this.camera_CA0EDFD3_DDF4_D863_41C1_7A69A939C169); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8D7A97ED_DA6C_BD03_41D8_093E3707AA25",
   "pitch": -17.11,
   "yaw": -138.41,
   "hfov": 16.55,
   "distance": 100
  }
 ],
 "id": "overlay_D7863C12_D972_A924_41E9_BDC17BCE853A",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -138.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.11,
   "hfov": 16.55
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E, this.camera_C5E0BFEA_DDF4_D82D_41C8_F223F2D74639); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88CAA576_D9E4_FD01_41D8_F67E792E8CA6",
   "pitch": -15.24,
   "yaw": -165.16,
   "hfov": 20.5,
   "distance": 100
  }
 ],
 "id": "overlay_D62E2B48_D972_AF25_41C5_8E694E16873E",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -165.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.24,
   "hfov": 20.5
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F, this.camera_CA5D2FB6_DDF4_D825_41E3_7CB5472D575E); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8D7A27ED_DA6C_BD03_41BD_826A73083B7B",
   "pitch": -18.97,
   "yaw": 122.95,
   "hfov": 17.11,
   "distance": 100
  }
 ],
 "id": "overlay_D6169AE1_D972_6EE7_41BC_4CEBCDF72019",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 122.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.97,
   "hfov": 17.11
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_CA3E5FC7_DDF4_D863_41DB_D9B2337FC36D); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88CA0576_D9E4_FD0A_41D5_1BF90BCB92CD",
   "pitch": -30.88,
   "yaw": 69.73,
   "hfov": 18.23,
   "distance": 100
  }
 ],
 "id": "overlay_D6CB9842_D972_6924_41E4_C607C53C66B6",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 69.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_1_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.88,
   "hfov": 18.23
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8D7BA7ED_DA6C_BD03_41E3_8EB46009ACB2",
   "pitch": -2.35,
   "yaw": -7.6,
   "hfov": 17.1,
   "distance": 100
  }
 ],
 "id": "overlay_D69F8569_D973_9BE7_41E9_43B356F8C6BF",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -7.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.35,
   "hfov": 17.1
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_C5F3EFFE_DDF4_D825_41B3_D3560A754BDB); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88CBD57C_D9E4_FD01_41E6_A072E677F9F6",
   "pitch": -7.66,
   "yaw": 59.5,
   "hfov": 13.64,
   "distance": 100
  }
 ],
 "id": "overlay_C9E6384D_D973_A93F_41D0_06FCD3415B1E",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 59.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_1_HS_5_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.66,
   "hfov": 13.64
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D277598A_D95F_EB25_41E5_0800136A96D4, this.camera_CA2C6FBE_DDF4_D825_41E8_5756C5C9D95D); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8D7B77ED_DA6C_BD03_41E9_C9D94AD9F56F",
   "pitch": -14.26,
   "yaw": -74.27,
   "hfov": 17.16,
   "distance": 100
  }
 ],
 "id": "overlay_9E37ABD3_D9A5_9507_41CB_9F91F7292BF1",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -74.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_6_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.26,
   "hfov": 17.16
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8D78B7ED_DA6C_BD03_41D3_C7BAB1AEAF0B",
   "pitch": -0.49,
   "yaw": 26.51,
   "hfov": 12.39,
   "distance": 100
  }
 ],
 "id": "overlay_9180916E_D9A7_951E_41DA_ABA076E8E234",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 26.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_7_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.49,
   "hfov": 12.39
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E, this.camera_CA115FDE_DDF4_D865_41E4_AEE5EC3D9056); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8D7967ED_DA6C_BD03_41A6_8C84A35E6991",
   "pitch": -7.37,
   "yaw": 3.61,
   "hfov": 16.97,
   "distance": 100
  }
 ],
 "id": "overlay_931D1E55_DA5B_EF03_41BC_50B163E20E9E",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 3.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_8_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.37,
   "hfov": 16.97
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E, this.camera_CAE2FF14_DDF4_D9E5_41E5_F7EBAD52F2D9); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2B9EFA3_DD08_3848_41A2_2A9C8649FE46",
   "pitch": -13.08,
   "yaw": -73.12,
   "hfov": 17.82,
   "distance": 100
  }
 ],
 "id": "overlay_D7EF886B_D9A4_F307_41C4_4C0F08E59D2F",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -73.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.08,
   "hfov": 17.82
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC, this.camera_C9D7F1E8_DDF4_C82E_41EA_D8021874811B); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88C6057D_D9E4_FD03_41EA_33F05939B52D",
   "pitch": -12,
   "yaw": -39.45,
   "hfov": 20.78,
   "distance": 100
  }
 ],
 "id": "overlay_D7BD4D84_D9AD_ED01_41D4_9A00EE0F90FE",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -39.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12,
   "hfov": 20.78
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477, this.camera_C9C031D9_DDF4_C86F_41B6_838DA5077982); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8D7D77ED_DA6C_BD03_41D1_3390F5A29F66",
   "pitch": -17.9,
   "yaw": -9.35,
   "hfov": 20.22,
   "distance": 100
  }
 ],
 "id": "overlay_F1598A38_D9EF_F701_41EA_5B8BD5EC1788",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -9.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.9,
   "hfov": 20.22
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC, this.camera_C90C7268_DDF4_C82D_41E9_F34E2748770D); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CEDDDCA0_DD55_3094_41C1_DEBE300F553C",
   "pitch": -17.13,
   "yaw": -151.24,
   "hfov": 11.24,
   "distance": 100
  }
 ],
 "id": "overlay_D7985B88_D956_6F25_41CF_7F0AA858E1AF",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -151.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.13,
   "hfov": 11.24
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2449E7A_D95E_69E5_41E7_97426A243776, this.camera_C93A6268_DDF4_C82D_41CA_F1108D473D0B); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CEDD0CA0_DD55_3094_41E8_768A3A0DDAE5",
   "pitch": -38.34,
   "yaw": -68.8,
   "hfov": 14.14,
   "distance": 100
  }
 ],
 "id": "overlay_D64A0F8B_D951_A73B_41DC_62A8B050A941",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -68.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -38.34,
   "hfov": 14.14
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E, this.camera_C929B256_DDF4_C862_41E2_110E94148D78); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CEDAACA0_DD55_3094_41CC_7F310F156C5C",
   "pitch": -37.24,
   "yaw": 25.07,
   "hfov": 13.93,
   "distance": 100
  }
 ],
 "id": "overlay_D663B013_D951_992B_41E4_481907942BA0",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 25.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -37.24,
   "hfov": 13.93
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC, this.camera_C911B276_DDF4_C825_41E4_9E1B3DF225C9); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8D6857DD_DA6C_BD03_41D9_FECBE7A8F4EF",
   "pitch": -20.26,
   "yaw": 122.55,
   "hfov": 16.06,
   "distance": 100
  }
 ],
 "id": "overlay_D6FABBAC_D951_EF7C_41C0_E94B5DE51B2B",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 122.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.26,
   "hfov": 16.06
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_C953A24F_DDF4_C862_41DA_BF4010D08C6D); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CEDA1CA0_DD55_3094_41DF_632BA21F81A5",
   "pitch": -15.42,
   "yaw": 28.31,
   "hfov": 9.97,
   "distance": 100
  }
 ],
 "id": "overlay_C91D87D1_D951_A727_41E8_54124820CB77",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 28.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.42,
   "hfov": 9.97
  }
 ]
},
{
 "videoVisibleOnStop": false,
 "class": "VideoPanoramaOverlay",
 "blending": 0,
 "id": "overlay_CFA57A32_DD18_5848_41D1_6085ED5026E3",
 "roll": -1.07,
 "loop": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_CFA57A32_DD18_5848_41D1_6085ED5026E3_t.jpg",
    "width": 960,
    "class": "ImageResourceLevel",
    "height": 540
   }
  ]
 },
 "pitch": -1.53,
 "rotationX": 0.77,
 "hfov": 5.18,
 "autoplay": true,
 "yaw": 27.96,
 "enabledInCardboard": true,
 "rotationY": -53.1,
 "useHandCursor": true,
 "vfov": 2.23,
 "distance": 50,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 960,
  "class": "VideoResource",
  "mp4Url": "media/video_CCB0F197_DD08_C848_41CF_88F56BB718E1.mp4",
  "height": 540
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000, this.camera_C9246256_DDF4_C862_41DA_BDD147DEA045); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CEDB2CA0_DD55_3094_41D1_A0450F65DBC2",
   "pitch": -1.76,
   "yaw": 4,
   "hfov": 7.84,
   "distance": 100
  }
 ],
 "id": "overlay_CF8B6C61_DD54_D794_41A6_0356C0630851",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_5_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.76,
   "hfov": 7.84
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_C94E4248_DDF4_C86E_41E7_702466CAD74B); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CEDB4CA0_DD55_3094_41DA_31F4A4AB30D8",
   "pitch": -6.17,
   "yaw": -1.86,
   "hfov": 6.5,
   "distance": 100
  }
 ],
 "id": "overlay_CE288898_DD57_30B5_41CF_8F6D5A71B226",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -1.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_6_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.17,
   "hfov": 6.5
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2446447_D95F_992B_41CD_4D904B227F99, this.camera_CA693F9A_DDF4_D8ED_41D0_17987EDFB19C); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2B5EF9B_DD08_3878_41DA_8DB4710AF462",
   "pitch": -18.1,
   "yaw": 86.45,
   "hfov": 18.89,
   "distance": 100
  }
 ],
 "id": "overlay_D660D206_D972_B92D_41E4_4CFD8D0736EB",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 86.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.1,
   "hfov": 18.89
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884, this.camera_CA7B1FA3_DDF4_D823_41EB_A9C99744A5FA); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2B5BF9B_DD08_3878_41DA_DD99E4C1A435",
   "pitch": -16.92,
   "yaw": -89.03,
   "hfov": 17.5,
   "distance": 100
  }
 ],
 "id": "overlay_D364651D_DCF8_4878_41BB_DE8A29355436",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -89.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.92,
   "hfov": 17.5
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CFE5876F_DDF4_C822_41DF_D8DCD147B791, this.camera_CA669F8F_DDF4_D8E3_41CC_05D86ECB97C3); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CB91AE7D_DDF4_D827_41E2_E5CBD4817CCF",
   "pitch": -13.96,
   "yaw": -173.14,
   "hfov": 17.75,
   "distance": 100
  }
 ],
 "id": "overlay_CECFC5EF_DDF5_C822_41D5_A220A2EA759B",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -173.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.96,
   "hfov": 17.75
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC, this.camera_C8BED2B4_DDF4_C826_41C9_B43C27F903CB); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88C6E57D_D9E4_FD03_41E8_C368E7B7CA09",
   "pitch": -36.49,
   "yaw": -17.91,
   "hfov": 17.08,
   "distance": 100
  }
 ],
 "id": "overlay_D7F1E22E_D9AD_9701_41CB_0B6E77C54741",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -17.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.49,
   "hfov": 17.08
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB, this.camera_CA6B748A_DDF4_C8E2_41BD_54CCF7ADC13D); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88FF8586_D9E4_FD01_41EA_9286D74FC88E",
   "pitch": -30.88,
   "yaw": 143.79,
   "hfov": 18.23,
   "distance": 100
  }
 ],
 "id": "overlay_D781FBA4_D9AB_9501_41E8_65D5A2FAA42E",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 143.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.88,
   "hfov": 18.23
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E, this.camera_CA9B447A_DDF4_C822_41E1_9CFF513E03FC); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88FF2586_D9E4_FD01_41C9_3C916EE91D07",
   "pitch": -38.85,
   "yaw": -94.63,
   "hfov": 16.55,
   "distance": 100
  }
 ],
 "id": "overlay_D70FD8CA_D9A4_9301_41C7_6AE0F427CBA8",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -94.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -38.85,
   "hfov": 16.55
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88FCB586_D9E4_FD01_41DF_BF0E02DA7D0F",
   "pitch": -2.85,
   "yaw": -33.85,
   "hfov": 21.22,
   "distance": 100
  }
 ],
 "id": "overlay_D6AC0B36_D9A4_9501_41E7_5010B104B5AC",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -33.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.85,
   "hfov": 21.22
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88FC3587_D9E4_FD0F_41D7_2E0691E9925D",
   "pitch": -5.8,
   "yaw": -80.47,
   "hfov": 21.14,
   "distance": 100
  }
 ],
 "id": "overlay_D69733B8_D9A4_F501_41D6_2BCCD46635E0",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -80.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_1_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.8,
   "hfov": 21.14
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25, this.camera_CA7B549A_DDF4_C8ED_41E0_564A24811925); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88FC5587_D9E4_FD0F_41E7_079DF8774749",
   "pitch": -30.88,
   "yaw": 96.29,
   "hfov": 18.23,
   "distance": 100
  }
 ],
 "id": "overlay_D64CCE33_D9A4_AF07_41D4_4902293988A0",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 96.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_1_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.88,
   "hfov": 18.23
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860, this.camera_CEA390ED_DDF4_C827_41B1_D0200966E85E); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88F6658E_D9E4_FD01_41B3_C759800854B7",
   "pitch": -18.19,
   "yaw": -88.44,
   "hfov": 20.18,
   "distance": 100
  }
 ],
 "id": "overlay_D7FC3418_D9A4_9301_41E9_4520FC82E8DE",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -88.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.19,
   "hfov": 20.18
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB, this.camera_CEAFE0ED_DDF4_C827_41AF_5F8297A04445); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88F7E58E_D9E4_FD01_41D4_C678B2F95069",
   "pitch": -22.62,
   "yaw": 77.7,
   "hfov": 19.61,
   "distance": 100
  }
 ],
 "id": "overlay_D70EEE5F_D9A4_6F3E_41CB_780294E06498",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 77.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.62,
   "hfov": 19.61
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D275C425_D95F_F96F_41DB_79786819224B, this.camera_C80E2312_DDF4_C9E2_41DB_8D52D5D17D4B); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CB69EE93_DDF4_D8E2_41E6_EBC066C77CE0",
   "pitch": -7.52,
   "yaw": 158.55,
   "hfov": 18.14,
   "distance": 100
  }
 ],
 "id": "overlay_CFFA0CF1_DDF4_583E_4190_44D2E75B638A",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 158.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFE5876F_DDF4_C822_41DF_D8DCD147B791_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.52,
   "hfov": 18.14
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E, this.camera_CE68915B_DDF4_C862_41E4_A124F0EAC16D); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88FDC587_D9E4_FD0F_41EA_15DAD634B540",
   "pitch": -24.29,
   "yaw": -82.14,
   "hfov": 15.24,
   "distance": 100
  }
 ],
 "id": "overlay_D73DFF18_D9A5_AD01_41E6_18EA11A7F6FB",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -82.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.29,
   "hfov": 15.24
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2B76FA1_DD08_3848_41D2_BC52C481E60D",
   "pitch": -5.61,
   "yaw": -70.27,
   "hfov": 16.64,
   "distance": 100
  }
 ],
 "id": "overlay_D77BF730_D9A5_9D01_41DD_C70BCDBE4625",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -70.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.61,
   "hfov": 16.64
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B, this.camera_CE71F15D_DDF4_C867_419E_35B394A4FD93); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88FAE587_D9E4_FD0F_41E0_FEE956FC10F0",
   "pitch": -41.8,
   "yaw": -80.47,
   "hfov": 15.84,
   "distance": 100
  }
 ],
 "id": "overlay_EEC794E2_D9FB_F301_41DD_810C7E3018F8",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -80.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -41.8,
   "hfov": 15.84
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_C9FB91D9_DDF4_C86F_41EA_984A27E534DB); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88F4F58E_D9E4_FD01_41C1_CC00A4AB699C",
   "pitch": -19.37,
   "yaw": 90.09,
   "hfov": 20.04,
   "distance": 100
  }
 ],
 "id": "overlay_D7CC27B9_D9A7_FD03_41E8_10AADDC84561",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 90.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.37,
   "hfov": 20.04
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4, this.camera_C9F4A1C9_DDF4_C86E_41B8_A89057B1A4C4); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2B94FA4_DD08_3848_41D0_CD127239775C",
   "pitch": -5.6,
   "yaw": 36.58,
   "hfov": 18,
   "distance": 100
  }
 ],
 "id": "overlay_D71AB6F6_D9A7_9F01_41D5_29CA8A045D1F",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 36.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.6,
   "hfov": 18
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_CFCFD342_DDEC_485D_41D8_ED60B3A2D729, {'rollOverIconColor':'#666666','rollOverBorderSize':0,'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','pressedIconLineWidth':5,'pressedIconColor':'#888888','borderSize':0,'paddingTop':5,'iconColor':'#000000','rollOverIconWidth':20,'rollOverIconHeight':20,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'pressedIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','borderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'pressedBorderColor':'#000000','paddingRight':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5}, this.ImageResource_CE91C353_DDEC_C862_41D0_494C68A039F0, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0_HS_3_0.png",
      "width": 114,
      "class": "ImageResourceLevel",
      "height": 74
     }
    ]
   },
   "pitch": 8.34,
   "yaw": 0.96,
   "hfov": 6.86
  }
 ],
 "id": "overlay_D2A6926C_DDDC_4826_41E4_D67F7DDED18B",
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 0.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0_HS_3_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 8.34,
   "hfov": 6.86
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84, this.camera_CAA25F66_DDF4_D825_41CB_2BD77DB43964); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2BBEFA6_DD08_3848_41E4_243BB5A314AD",
   "pitch": -18.09,
   "yaw": -125.51,
   "hfov": 14.39,
   "distance": 100
  }
 ],
 "id": "overlay_D7F37C3F_D9A5_B37F_41E9_FAC205C365C1",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -125.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.09,
   "hfov": 14.39
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF, this.camera_CAD3DF55_DDF4_D867_41D4_ADC3172DD71D); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2BBCFA6_DD08_3848_41D3_FDA420A6E964",
   "pitch": -14.06,
   "yaw": 45.02,
   "hfov": 17.93,
   "distance": 100
  }
 ],
 "id": "overlay_D7026F2F_D9A5_ED1F_41EA_B864AE1A82DC",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 45.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.06,
   "hfov": 17.93
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D275C425_D95F_F96F_41DB_79786819224B, this.camera_CAC16F46_DDF4_D865_41E3_CFCB2BF1D26C); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2BBAFA6_DD08_3848_41C9_1F12EE9C1E66",
   "pitch": -18.3,
   "yaw": 82.71,
   "hfov": 12.89,
   "distance": 100
  }
 ],
 "id": "overlay_9BFAC175_D9EC_9503_41D6_7B5EA288EF43",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 82.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.3,
   "hfov": 12.89
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4, this.camera_CAFDCF37_DDF4_D823_41E9_6BEAFC68DD86); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88F5858F_D9E4_FD1F_41D8_4485D225FA65",
   "pitch": -15.24,
   "yaw": 162.97,
   "hfov": 20.5,
   "distance": 100
  }
 ],
 "id": "overlay_D72C6C24_D9A4_B301_4192_8AFC474069BF",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 162.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.24,
   "hfov": 20.5
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F, this.camera_CAE9AF28_DDF4_D82D_416E_B28D9C527274); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88F5758F_D9E4_FD1F_41B1_377739968277",
   "pitch": -25.57,
   "yaw": 60.88,
   "hfov": 19.17,
   "distance": 100
  }
 ],
 "id": "overlay_D76B0E6C_D9A4_EF01_41BC_FC755ECE9235",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 60.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.57,
   "hfov": 19.17
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_CC6B88B6_DDEC_7822_41D3_B4669F89B563, {'rollOverIconColor':'#666666','rollOverBorderSize':0,'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','pressedIconLineWidth':5,'pressedIconColor':'#888888','borderSize':0,'paddingTop':5,'iconColor':'#000000','rollOverIconWidth':20,'rollOverIconHeight':20,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'pressedIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','borderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'pressedBorderColor':'#000000','paddingRight':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5}, this.ImageResource_CE98B35B_DDEC_C862_41C1_67BB59CEFD47, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0_HS_2_0.png",
      "width": 114,
      "class": "ImageResourceLevel",
      "height": 74
     }
    ]
   },
   "pitch": 3.92,
   "yaw": -122.09,
   "hfov": 6.91
  }
 ],
 "id": "overlay_CD949262_DDD4_4822_41E6_797A4FA01864",
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -122.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_0_HS_2_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.92,
   "hfov": 6.91
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC, this.camera_CBF20322_DDF4_C822_41E7_F4155F4B6B4D); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88C37584_D9E4_FD01_41DD_E3C57389CE87",
   "pitch": -32.95,
   "yaw": -104.96,
   "hfov": 17.83,
   "distance": 100
  }
 ],
 "id": "overlay_D7EBE7F6_D9AC_7D01_41D2_39F422A690F8",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -104.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.95,
   "hfov": 17.83
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC, this.camera_C810D312_DDF4_C9E2_41E7_0A74DE98826F); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8D7697ED_DA6C_BD03_41E2_7ADBA9AA1EA4",
   "pitch": -9.34,
   "yaw": 114.88,
   "hfov": 18.05,
   "distance": 100
  }
 ],
 "id": "overlay_D73A4E12_D9AC_AF01_41DD_38FAC2CD0AE2",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 114.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.34,
   "hfov": 18.05
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877, this.camera_CBE3E322_DDF4_C822_4189_1151CB39C86A); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88C02584_D9E4_FD01_41E1_7BB0FD574D1E",
   "pitch": -31.77,
   "yaw": 76.22,
   "hfov": 18.06,
   "distance": 100
  }
 ],
 "id": "overlay_D70ADA04_D9AD_B701_41C5_73A874528543",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 76.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.77,
   "hfov": 18.06
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2B43F9D_DD08_3878_41E4_5B524CC6D8DD",
   "pitch": -7.57,
   "yaw": 16.89,
   "hfov": 15.21,
   "distance": 100
  }
 ],
 "id": "overlay_D7FD4D76_D9AC_AD01_41E3_2FE554E21798",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 16.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.57,
   "hfov": 15.21
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2B5AF9E_DD08_3878_41DB_231C6395F950",
   "pitch": -3.83,
   "yaw": -37.2,
   "hfov": 17.46,
   "distance": 100
  }
 ],
 "id": "overlay_D73B79EE_D9AC_9501_41E0_6CBF92E2DC36",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -37.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.83,
   "hfov": 17.46
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477, this.camera_C83F4303_DDF4_C9E3_41E1_FD15956867E9); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88C2957F_D9E4_FDFF_41E8_3765270E0A3A",
   "pitch": -37.67,
   "yaw": -14.08,
   "hfov": 16.82,
   "distance": 100
  }
 ],
 "id": "overlay_F24ECCB8_D9E4_9301_41EA_94DA5388555B",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -14.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -37.67,
   "hfov": 16.82
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000, this.camera_CB30D3ED_DDF4_C826_41C4_EC2D2CAC0D4B); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2B06F98_DD08_3878_41B7_4C051BEF2463",
   "pitch": -1.16,
   "yaw": 53.38,
   "hfov": 10.99,
   "distance": 100
  }
 ],
 "id": "overlay_D67A10DF_D971_FADB_41E3_44C2E76529A2",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 53.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.16,
   "hfov": 10.99
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_CAE2941C_DDF4_CFE6_41D8_72677C6E4C49); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2B04F98_DD08_3878_41C8_169D3761529C",
   "pitch": -15.42,
   "yaw": 46.36,
   "hfov": 18.66,
   "distance": 100
  }
 ],
 "id": "overlay_D605BDC1_D971_AB27_41E6_178B052D8899",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 46.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.42,
   "hfov": 18.66
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_CB2133DE_DDF4_C865_41D2_220B1036463C); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88CCA575_D9E4_FD03_41C0_DCDA47AA4F31",
   "pitch": -17.51,
   "yaw": 105.14,
   "hfov": 18.57,
   "distance": 100
  }
 ],
 "id": "overlay_D6EE1B6D_D971_AFFF_41E3_C8C608512DC2",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 105.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.51,
   "hfov": 18.57
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88CCC576_D9E4_FD01_41D2_B343F354DCAD",
   "pitch": -10.81,
   "yaw": 162.75,
   "hfov": 15.46,
   "distance": 100
  }
 ],
 "id": "overlay_D6AFDA0A_D972_6925_41C0_8F44E954973A",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 162.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_1_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.81,
   "hfov": 15.46
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB, this.camera_CB12D40C_DDF4_CFE6_41C3_EF1CAF8A9824); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA2ED7D2_DD08_57C8_41EA_96E1E3E8E528",
   "pitch": -1.51,
   "yaw": 74.01,
   "hfov": 10.38,
   "distance": 100
  }
 ],
 "id": "overlay_C933F26D_D972_99FF_41E1_4DFC0390945E",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 74.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.51,
   "hfov": 10.38
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E, this.camera_CB0373FD_DDF4_C827_41CD_579EB560CF72); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88CDB576_D9E4_FD01_41B5_2BC12D958171",
   "pitch": -17.9,
   "yaw": 135.01,
   "hfov": 14.98,
   "distance": 100
  }
 ],
 "id": "overlay_F9CF8A01_D9DB_9703_41EB_075F114A2316",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 135.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_1_HS_5_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.9,
   "hfov": 14.98
  }
 ]
},
{
 "videoVisibleOnStop": false,
 "class": "VideoPanoramaOverlay",
 "blending": 0,
 "id": "overlay_CFA52CB6_DD08_784B_41E9_B6D48FF4C09A",
 "roll": -1.75,
 "loop": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_CFA52CB6_DD08_784B_41E9_B6D48FF4C09A_t.jpg",
    "width": 960,
    "class": "ImageResourceLevel",
    "height": 540
   }
  ]
 },
 "pitch": -2.4,
 "rotationX": -27.01,
 "hfov": 5.04,
 "autoplay": true,
 "yaw": 79.3,
 "enabledInCardboard": true,
 "rotationY": -14.8,
 "useHandCursor": true,
 "vfov": 3.19,
 "distance": 50,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 960,
  "class": "VideoResource",
  "mp4Url": "media/video_CCB0F197_DD08_C848_41CF_88F56BB718E1.mp4",
  "height": 540
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC, this.camera_C87742D4_DDF4_C866_41AA_ECDAC13B5DCB); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2B8AFA5_DD08_3848_41C6_A20CF4670C7A",
   "pitch": -5.99,
   "yaw": 20.94,
   "hfov": 14.86,
   "distance": 100
  }
 ],
 "id": "overlay_D7CDDAF8_D9A4_9701_41E6_CEF66AE7B19C",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 20.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.99,
   "hfov": 14.86
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84, this.camera_C84612E4_DDF4_C825_41E6_8B2A42F9E430); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2B87FA5_DD08_3848_41CF_E7A87638452A",
   "pitch": -9.34,
   "yaw": 167.76,
   "hfov": 13.79,
   "distance": 100
  }
 ],
 "id": "overlay_D70A278A_D9A4_BD01_41C6_95ABBEE313C5",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 167.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.34,
   "hfov": 13.79
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884, this.camera_C84952E4_DDF4_C825_41CF_7C3ABA7CAAD0); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2B85FA5_DD08_3848_41C7_C8704F5E1F9A",
   "pitch": -12.39,
   "yaw": 91.86,
   "hfov": 17.29,
   "distance": 100
  }
 ],
 "id": "overlay_D76A440F_D9A4_931F_41EA_A1CBAAEB1D4A",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 91.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.39,
   "hfov": 17.29
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2B62FA3_DD08_3848_41D6_73063773BD87",
   "pitch": -11.31,
   "yaw": -29.42,
   "hfov": 18.52,
   "distance": 100
  }
 ],
 "id": "overlay_D72FB31D_D9A4_B502_41DD_F95CC9D963E7",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -29.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.31,
   "hfov": 18.52
  }
 ]
},
{
 "paddingBottom": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "maxHeight": 58,
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "width": 58,
 "paddingLeft": 0,
 "propagateClick": true,
 "height": 58,
 "minHeight": 1,
 "mode": "toggle",
 "shadow": false,
 "minWidth": 1,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton GYRO"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "maxHeight": 58,
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "width": 58,
 "paddingLeft": 0,
 "propagateClick": true,
 "height": 58,
 "minHeight": 1,
 "mode": "push",
 "shadow": false,
 "minWidth": 1,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton VR"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "width": 100,
 "maxWidth": 49,
 "backgroundOpacity": 0,
 "right": 30,
 "maxHeight": 37,
 "paddingLeft": 0,
 "propagateClick": true,
 "bottom": 8,
 "height": 75,
 "minHeight": 1,
 "mode": "push",
 "shadow": false,
 "minWidth": 1,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton VR"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "maxHeight": 58,
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "width": 58,
 "paddingLeft": 0,
 "propagateClick": true,
 "height": 58,
 "minHeight": 1,
 "mode": "toggle",
 "shadow": false,
 "minWidth": 1,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton HS "
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "cursor": "hand"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000, this.camera_C5866051_DDF4_C87F_41D7_96B36F4D5CFF); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8D62E7DD_DA6C_BD03_41E0_8B39DD9F8850",
   "pitch": -28.52,
   "yaw": -116.17,
   "hfov": 18.67,
   "distance": 100
  }
 ],
 "id": "overlay_D67A4AF4_D951_AEED_41E0_825659DD4E20",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -116.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.52,
   "hfov": 18.67
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88D2E56E_D9E4_FD01_41E6_1FA2DC2CB285",
   "pitch": -1.67,
   "yaw": 153.53,
   "hfov": 12.18,
   "distance": 100
  }
 ],
 "id": "overlay_D6070947_D951_AB2B_41E0_301ABE354E28",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 153.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.67,
   "hfov": 12.18
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_C5B7B04E_DDF4_C862_41DC_6FD0AEC2260F); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CE33E398_DD6C_D0B4_41EA_98F5A522372C",
   "pitch": -19.08,
   "yaw": 137.99,
   "hfov": 12.09,
   "distance": 100
  }
 ],
 "id": "overlay_D787763F_D94E_795C_41D1_F6347CE78809",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 137.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.08,
   "hfov": 12.09
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_C598006B_DDF4_C823_41E9_6C820BFA23E2); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8D63C7DD_DA6C_BD03_41D8_F8239B99E580",
   "pitch": -24.88,
   "yaw": -152.09,
   "hfov": 15.71,
   "distance": 100
  }
 ],
 "id": "overlay_D6C826FA_D94E_A6E5_41EA_2D59EAF60750",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -152.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.88,
   "hfov": 15.71
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CE325398_DD6C_D0B4_41E2_16051BD5798E",
   "pitch": 0.4,
   "yaw": 124.22,
   "hfov": 12.41,
   "distance": 100
  }
 ],
 "id": "overlay_C005AB93_D9AF_B507_41D2_FEB12D8B104B",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 124.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.4,
   "hfov": 12.41
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A, this.camera_C588705F_DDF4_C863_41B0_95FC757785A6); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8D6367DD_DA6C_BD03_41E7_2C681BF39EF9",
   "pitch": -6,
   "yaw": -172.45,
   "hfov": 17.23,
   "distance": 100
  }
 ],
 "id": "overlay_91077E97_DA6C_AF0F_41B9_2616010A8C1A",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -172.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0_HS_5_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6,
   "hfov": 17.23
  }
 ]
},
{
 "videoVisibleOnStop": false,
 "class": "VideoPanoramaOverlay",
 "blending": 0,
 "id": "overlay_CCCBB3B6_DD08_4848_41E0_2A537118A343",
 "roll": 10.36,
 "loop": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_CCCBB3B6_DD08_4848_41E0_2A537118A343_t.jpg",
    "width": 960,
    "class": "ImageResourceLevel",
    "height": 540
   }
  ]
 },
 "pitch": -27.67,
 "rotationX": 32.63,
 "hfov": 35.04,
 "autoplay": true,
 "yaw": 46.09,
 "enabledInCardboard": true,
 "rotationY": 15.6,
 "useHandCursor": true,
 "vfov": 18.25,
 "distance": 50,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 960,
  "class": "VideoResource",
  "mp4Url": "media/video_CCB0F197_DD08_C848_41CF_88F56BB718E1.mp4",
  "height": 540
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CE35D398_DD6C_D0B4_41C1_BDFA17E2AD18",
   "pitch": -11.6,
   "yaw": 149.08,
   "hfov": 9.63,
   "distance": 100
  }
 ],
 "id": "overlay_CE846789_DD6D_3094_41E7_5E4FA3E0917C",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 149.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0_HS_6_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.6,
   "hfov": 9.63
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477, this.camera_C56A306F_DDF4_C823_41C5_963870178432); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88C2157F_D9E4_FDFF_41E9_D66E31D3E7C9",
   "pitch": -35.9,
   "yaw": -39.16,
   "hfov": 17.21,
   "distance": 100
  }
 ],
 "id": "overlay_D7F748D5_D9AF_9303_41D3_F96D0874DF84",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -39.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.9,
   "hfov": 17.21
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2B55F9E_DD08_3878_41EB_19D71F1507AD",
   "pitch": -11.11,
   "yaw": -32.86,
   "hfov": 16.61,
   "distance": 100
  }
 ],
 "id": "overlay_D7371697_D9AF_FF0F_41E6_360EF1287467",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -32.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.11,
   "hfov": 16.61
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB, this.camera_C9953218_DDF4_CBED_41DF_0652FBB1BE0B); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2AA5F92_DD08_3848_41A3_270BF2E927DE",
   "pitch": -10.13,
   "yaw": -92.67,
   "hfov": 18.39,
   "distance": 100
  }
 ],
 "id": "overlay_D683BA7A_D957_A9E5_41CB_54043F41C19D",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -92.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.13,
   "hfov": 18.39
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7, this.camera_C96B1227_DDF4_C822_41E1_0C58608D3F2F); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CB2BABE6_DD18_3FC8_41EA_59C551AEF1AD",
   "pitch": -11.4,
   "yaw": 15.43,
   "hfov": 13.88,
   "distance": 100
  }
 ],
 "id": "overlay_D7E0A16E_D957_FBFD_41C5_506B1B599A70",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 15.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.4,
   "hfov": 13.88
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF, this.camera_C97D823D_DDF4_C827_41D7_C2CD03DB07DC); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88DBC56B_D9E4_FD07_41BB_3D42E019638D",
   "pitch": -19.08,
   "yaw": -165.45,
   "hfov": 20.08,
   "distance": 100
  }
 ],
 "id": "overlay_D63E8956_D957_AB2D_41CA_B191E2115301",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -165.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.08,
   "hfov": 20.08
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB, this.camera_C967E227_DDF4_C822_41D5_A28BC6F5BF7F); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CE565FA5_DD08_7848_41E5_03E0F5115BD1",
   "pitch": -32.65,
   "yaw": -68.56,
   "hfov": 12.6,
   "distance": 100
  }
 ],
 "id": "overlay_D26AE543_DD09_C8C8_4167_43EA93E0D36A",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -68.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.65,
   "hfov": 12.6
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477, this.camera_CA4BCFAD_DDF4_D827_41E1_F9DB84B44AA6); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88C3E584_D9E4_FD01_41DF_1E5D837589FA",
   "pitch": -31.77,
   "yaw": -92.57,
   "hfov": 18.06,
   "distance": 100
  }
 ],
 "id": "overlay_D794B279_D9AF_B703_41DC_9EA09BCC4236",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -92.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.77,
   "hfov": 18.06
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2446447_D95F_992B_41CD_4D904B227F99, this.camera_C8E27285_DDF4_C8E6_4150_A429EFA12B1A); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88C9257C_D9E4_FD01_41CB_CE417E5864A1",
   "pitch": -18.49,
   "yaw": 77.1,
   "hfov": 20.15,
   "distance": 100
  }
 ],
 "id": "overlay_D6513DF7_D972_EAEB_41B3_C4BDC4FC08BD",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 77.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.49,
   "hfov": 20.15
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2449E7A_D95E_69E5_41E7_97426A243776, this.camera_C5D5F037_DDF4_C823_41B2_5A1625817D87); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8D7407FD_DA6C_BD03_41D6_6A9A48FD3B04",
   "pitch": 3.35,
   "yaw": -158.37,
   "hfov": 21.21,
   "distance": 100
  }
 ],
 "id": "overlay_D7E97B5C_D9AC_B501_41E4_21E2611AEEDE",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -158.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.35,
   "hfov": 21.21
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B, this.camera_C5A58043_DDF4_C862_41C7_E527F74FD623); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8D7587FD_DA6C_BD03_41D9_32A0B3227006",
   "pitch": -40.03,
   "yaw": -53.91,
   "hfov": 16.27,
   "distance": 100
  }
 ],
 "id": "overlay_D7207717_D9AC_9D0F_41E7_577B241C7E02",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -53.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.03,
   "hfov": 16.27
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED, this.camera_C5C51010_DDF4_C7FD_41E5_EAF8E9AEC47B); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88FE7586_D9E4_FD01_41E4_CA48AF6F7FC6",
   "pitch": -29.7,
   "yaw": 115.47,
   "hfov": 18.45,
   "distance": 100
  }
 ],
 "id": "overlay_D71AA6F3_D9AC_7F07_41DB_BBC92204CDA4",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 115.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.7,
   "hfov": 18.45
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8D7547FD_DA6C_BD03_41E0_B196685C698C",
   "pitch": -1.47,
   "yaw": -55.48,
   "hfov": 16.92,
   "distance": 100
  }
 ],
 "id": "overlay_9359013A_DA64_9501_41E1_413334E81E17",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -55.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.47,
   "hfov": 16.92
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8D8AD7FD_DA6C_BD03_41E9_7C3CAEE0807B",
   "pitch": -8.26,
   "yaw": 115.07,
   "hfov": 17.32,
   "distance": 100
  }
 ],
 "id": "overlay_901AD77A_DA64_9D01_41D8_909D144D58C4",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 115.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.26,
   "hfov": 17.32
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7, this.camera_C9DC71E8_DDF4_C82E_41B1_95A5A2A717F3); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CE2D5388_DD6C_D094_41E9_CC0FAD24CB9B",
   "pitch": -26.85,
   "yaw": 75.04,
   "hfov": 15.27,
   "distance": 100
  }
 ],
 "id": "overlay_D78A82F8_D952_FEE5_41D3_2B1112925EA4",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 75.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.85,
   "hfov": 15.27
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CE2D9388_DD6C_D094_41EA_8E0290489309",
   "pitch": -8.45,
   "yaw": 76.4,
   "hfov": 9.15,
   "distance": 100
  }
 ],
 "id": "overlay_D6630607_D952_B92B_41BF_FFE8ACDD740B",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 76.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.45,
   "hfov": 9.15
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A, this.camera_C9B76208_DDF4_CBEE_4193_78C57BD66F9A); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CE2C0388_DD6C_D094_41D3_1C3D48464813",
   "pitch": -13.57,
   "yaw": 162.29,
   "hfov": 16.45,
   "distance": 100
  }
 ],
 "id": "overlay_D6347564_D952_9BED_41E7_76B02ABBDD1A",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 162.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.57,
   "hfov": 16.45
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_C9A0B1F8_DDF4_C82E_41B4_1BB0E3A3FDA2); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8D6EA7DD_DA6C_BD03_41DE_EB33B672075D",
   "pitch": -31.87,
   "yaw": -98.96,
   "hfov": 14.7,
   "distance": 100
  }
 ],
 "id": "overlay_D6E8E5D5_D952_7B2F_41E5_AC21C7E9F5DF",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -98.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.87,
   "hfov": 14.7
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CE2C9388_DD6C_D094_41DC_A8BCA1C2AF45",
   "pitch": -6.98,
   "yaw": -131.33,
   "hfov": 13.08,
   "distance": 100
  }
 ],
 "id": "overlay_D7A0E7F9_D953_E6E7_41DA_DD85D3811992",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -131.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.98,
   "hfov": 13.08
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2446447_D95F_992B_41CD_4D904B227F99, this.camera_C9BAA208_DDF4_CBEE_41C8_8E595F107F6E); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CE2CC388_DD6C_D094_41E4_646BAA46246F",
   "pitch": -13.47,
   "yaw": -56.86,
   "hfov": 15.5,
   "distance": 100
  }
 ],
 "id": "overlay_D79C1932_D953_AB65_41E9_A9827A2E69E4",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -56.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_5_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.47,
   "hfov": 15.5
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CE2F4388_DD6C_D094_41E3_D0001CA5FE82",
   "pitch": -2.93,
   "yaw": -39.06,
   "hfov": 11.98,
   "distance": 100
  }
 ],
 "id": "overlay_9EA667E6_D9AC_BD01_41C8_FDA6B207CFA1",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -39.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_6_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.93,
   "hfov": 11.98
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CE2F8388_DD6C_D094_41E4_E65C885A3A5F",
   "pitch": -2.46,
   "yaw": -85.78,
   "hfov": 12.38,
   "distance": 100
  }
 ],
 "id": "overlay_95CBF4E9_D9AB_9303_4155_131693CB42B5",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -85.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_7_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.46,
   "hfov": 12.38
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CE2FF388_DD6C_D094_41E8_3A361833A60B",
   "pitch": -10.13,
   "yaw": -15.06,
   "hfov": 12.01,
   "distance": 100
  }
 ],
 "id": "overlay_92EE501E_DA64_B301_41E3_208B5D73B92D",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -15.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_8_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.13,
   "hfov": 12.01
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_C98E8218_DDF4_CBED_41D7_A7328F8C18CE); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8D6CD7DD_DA6C_BD03_41C4_F391D67DBD3C",
   "pitch": -20.85,
   "yaw": -150.81,
   "hfov": 15.62,
   "distance": 100
  }
 ],
 "id": "overlay_96EA5B16_DA65_9501_41D4_9EB1A50C1865",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -150.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_9_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.85,
   "hfov": 15.62
  }
 ]
},
{
 "videoVisibleOnStop": false,
 "class": "VideoPanoramaOverlay",
 "blending": 0,
 "id": "overlay_CEA315C1_DD19_CBC8_41DD_0FD38931A23C",
 "roll": -3.69,
 "loop": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_CEA315C1_DD19_CBC8_41DD_0FD38931A23C_t.jpg",
    "width": 960,
    "class": "ImageResourceLevel",
    "height": 540
   }
  ]
 },
 "pitch": -7.13,
 "rotationX": 7.87,
 "hfov": 4.8,
 "autoplay": true,
 "yaw": -101.58,
 "enabledInCardboard": true,
 "rotationY": -20.19,
 "useHandCursor": true,
 "vfov": 2.48,
 "distance": 50,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 960,
  "class": "VideoResource",
  "mp4Url": "media/video_CCB0F197_DD08_C848_41CF_88F56BB718E1.mp4",
  "height": 540
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF, this.camera_CB099EF4_DDF4_D825_41E9_940E70A7372C); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_88D8356B_D9E4_FD07_41EA_A787A3401629",
   "pitch": -10.52,
   "yaw": -161.91,
   "hfov": 20.89,
   "distance": 100
  }
 ],
 "id": "overlay_D7E3FC3F_D956_A95B_41E6_E8D692A00205",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -161.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.52,
   "hfov": 20.89
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC, this.camera_CB1E9F05_DDF4_D9E7_41E6_9907497AFE51); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D2ACDF93_DD08_3848_41E4_A9FAF3308A42",
   "pitch": -32.36,
   "yaw": 62.35,
   "hfov": 17.95,
   "distance": 100
  }
 ],
 "id": "overlay_D641B5D1_D956_FB27_41EA_5D37729EF2B4",
 "data": {
  "label": "Arrow 04c"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 62.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.36,
   "hfov": 17.95
  }
 ]
},
{
 "paddingBottom": 0,
 "class": "Container",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "backgroundOpacity": 0,
 "right": "0%",
 "verticalAlign": "middle",
 "gap": 10,
 "overflow": "visible",
 "paddingLeft": 0,
 "propagateClick": true,
 "top": "0%",
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "shadow": false,
 "height": 110,
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "center",
 "data": {
  "name": "button menu sup"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
},
{
 "visible": false,
 "paddingBottom": 0,
 "class": "Container",
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
 "backgroundOpacity": 0,
 "right": "0%",
 "width": "91.304%",
 "verticalAlign": "top",
 "gap": 3,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0,
 "bottom": "0%",
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "shadow": false,
 "height": "85.959%",
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 0,
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "center",
 "data": {
  "name": "-button set"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
},
{
 "paddingBottom": 0,
 "class": "Image",
 "verticalAlign": "middle",
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "maxHeight": 2,
 "maxWidth": 3000,
 "backgroundOpacity": 0,
 "right": "0%",
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "paddingLeft": 0,
 "propagateClick": true,
 "bottom": 53,
 "height": 2,
 "minHeight": 1,
 "shadow": false,
 "minWidth": 1,
 "paddingTop": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "white line"
 },
 "borderRadius": 0,
 "scaleMode": "fit_outside",
 "paddingRight": 0
},
{
 "paddingBottom": 0,
 "class": "Container",
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
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "gap": 3,
 "paddingLeft": 30,
 "propagateClick": true,
 "bottom": "0%",
 "height": 51,
 "minHeight": 1,
 "shadow": false,
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "-button set container"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "class": "Container",
 "scrollBarColor": "#000000",
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "backgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "right": "10%",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "overflow": "scroll",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "top": "5%",
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "shadow": true,
 "minWidth": 1,
 "layout": "horizontal",
 "shadowBlurRadius": 25,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadowSpread": 1,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "data": {
  "name": "Global"
 }
},
{
 "paddingBottom": 0,
 "class": "Container",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "backgroundOpacity": 0,
 "right": "10%",
 "verticalAlign": "top",
 "gap": 10,
 "propagateClick": false,
 "overflow": "visible",
 "paddingLeft": 0,
 "top": "5%",
 "bottom": "80%",
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "shadow": false,
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 20,
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "right",
 "data": {
  "name": "Container X global"
 },
 "borderRadius": 0,
 "paddingRight": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "class": "Container",
 "scrollBarColor": "#000000",
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "backgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "right": "10%",
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "overflow": "scroll",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "top": "5%",
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "shadow": true,
 "minWidth": 1,
 "layout": "horizontal",
 "shadowBlurRadius": 25,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadowSpread": 1,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "data": {
  "name": "Global"
 }
},
{
 "paddingBottom": 0,
 "class": "Container",
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "backgroundOpacity": 0,
 "right": "10%",
 "verticalAlign": "top",
 "gap": 10,
 "propagateClick": false,
 "overflow": "visible",
 "paddingLeft": 0,
 "top": "5%",
 "bottom": "80%",
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "shadow": false,
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 20,
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "right",
 "data": {
  "name": "Container X global"
 },
 "borderRadius": 0,
 "paddingRight": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "class": "Container",
 "scrollBarColor": "#000000",
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "backgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "right": "15%",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "overflow": "visible",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "top": "7%",
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "minHeight": 1,
 "shadow": true,
 "minWidth": 1,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "shadowBlurRadius": 25,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "shadowOpacity": 0.3,
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "data": {
  "name": "Global"
 }
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "class": "Container",
 "scrollBarColor": "#000000",
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "backgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "right": "10%",
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "overflow": "scroll",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "top": "5%",
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "minHeight": 1,
 "shadow": true,
 "minWidth": 1,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "shadowBlurRadius": 25,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "shadowOpacity": 0.3,
 "shadowSpread": 1,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "data": {
  "name": "Global"
 }
},
{
 "paddingBottom": 0,
 "class": "Container",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "backgroundOpacity": 0,
 "right": "10%",
 "verticalAlign": "top",
 "gap": 10,
 "propagateClick": false,
 "overflow": "visible",
 "paddingLeft": 0,
 "top": "5%",
 "bottom": "80%",
 "minHeight": 1,
 "shadow": false,
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 20,
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "data": {
  "name": "Container X global"
 },
 "borderRadius": 0,
 "paddingRight": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "class": "Container",
 "scrollBarColor": "#000000",
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "backgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "right": "15%",
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "overflow": "visible",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "top": "7%",
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "shadow": true,
 "minWidth": 1,
 "layout": "vertical",
 "shadowBlurRadius": 25,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "data": {
  "name": "Global"
 }
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "class": "Container",
 "scrollBarColor": "#000000",
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "backgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "right": "15%",
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "overflow": "visible",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "top": "7%",
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "shadow": true,
 "minWidth": 1,
 "layout": "vertical",
 "shadowBlurRadius": 25,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "data": {
  "name": "Global"
 }
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "class": "Container",
 "scrollBarColor": "#000000",
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "backgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "right": "15%",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "overflow": "visible",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "top": "7%",
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "shadow": true,
 "minWidth": 1,
 "layout": "vertical",
 "shadowBlurRadius": 25,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "data": {
  "name": "Global"
 }
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "class": "Container",
 "scrollBarColor": "#000000",
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "backgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "right": "10%",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "overflow": "scroll",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "top": "5%",
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "shadow": true,
 "minWidth": 1,
 "layout": "horizontal",
 "shadowBlurRadius": 25,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadowSpread": 1,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "data": {
  "name": "Global"
 }
},
{
 "paddingBottom": 0,
 "class": "Container",
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "backgroundOpacity": 0,
 "right": "10%",
 "verticalAlign": "top",
 "gap": 10,
 "propagateClick": false,
 "overflow": "visible",
 "paddingLeft": 0,
 "top": "5%",
 "bottom": "80%",
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "shadow": false,
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 20,
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "right",
 "data": {
  "name": "Container X global"
 },
 "borderRadius": 0,
 "paddingRight": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F3E595_D9E4_FD03_41CD_63F707AA871A",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F36595_D9E4_FD03_41E2_BFC9B4CE66F7",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F7758E_D9E4_FD01_41E3_BAE24C956C37",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B2AF9A_DD08_3878_41DF_430F55155118",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C8857C_D9E4_FD01_41DB_5F4625AA9E32",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C8257C_D9E4_FD01_41DA_632EC5D3732E",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C8657C_D9E4_FD01_41DC_972AEFD19B09",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B24F9B_DD08_3878_41E4_51C35086B945",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B22F9B_DD08_3878_41BC_D11CEE4A61A5",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_C94DE043_DD5D_4F94_41E6_5DA79E1C89B6",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CB82E82A_DD18_3858_41E4_548023BE2D4A",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2AF2F95_DD08_3848_41E5_6C3C6B1CA508",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2AEFF95_DD08_3848_41E5_EA283FE32630",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2AEDF95_DD08_3848_41D1_F7B2D98A7544",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2AEAF95_DD08_3848_41C4_1A35CC69BBE7",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_6_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2AE8F95_DD08_3848_41E8_C56FB95CF7FA",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_7_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2AE6F96_DD08_3848_41E9_EBDE8976C71B",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_8_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_C9438049_DD5D_4F94_41BC_4DA5FC8E22C3",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_9_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_C9400049_DD5D_4F94_41D5_451BA1E3A9CD",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CDE576_D9E4_FD01_4194_3BF2C41C0F31",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B38F99_DD08_3878_41E4_2C84DE5BF00D",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B72FA2_DD08_3848_41E6_6017C50137E3",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B6FFA2_DD08_3848_41E3_70C68686B999",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B6DFA2_DD08_3848_41E5_CA611C77CCA6",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B69FA2_DD08_3848_41CD_C180699BDB55",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B67FA2_DD08_3848_41A8_D69F93109DD1",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B65FA2_DD08_3848_41E6_A34A23876ECD",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C05585_D9E4_FD03_41D4_34DE3F16BE55",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C1D585_D9E4_FD03_4182_633D5C7456DE",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C6E57D_D9E4_FD03_41E1_FBD5673DB839",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C6057D_D9E4_FD03_41E0_D489277B54B6",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C7A57D_D9E4_FD03_41E9_F58F692F6E3D",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C7C57D_D9E4_FD03_4146_B1FACA8E5719",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C16585_D9E4_FD03_41C6_305690530B61",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88FE9585_D9E4_FD03_41E1_D0761BE30FA8",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88FE1585_D9E4_FD03_41D6_B16191028AD6",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C12585_D9E4_FD03_41E9_60943BB40C46",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B4EF9D_DD08_3878_41EA_06668542C858",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C7557E_D9E4_FD01_41C4_6E1983C9D05F",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B4AF9D_DD08_3878_41DA_65B8B402266F",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B48F9D_DD08_3878_41D1_E393A511DF7E",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B46F9D_DD08_3878_41BC_602606787613",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F7158F_D9E4_FD1F_41DA_7E9DA08D31BE",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F4A58F_D9E4_FD1F_41C2_421607C84F54",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F4258F_D9E4_FD1F_41D4_39ACBD81F633",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F4658F_D9E4_FD1F_41CB_A06EE8EDF8D2",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2AD3F93_DD08_3848_41E8_5892374A1822",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2AD1F93_DD08_3848_41E7_5F2C1C221C3A",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D31573_D9E4_FD07_41C1_B6A788EC695A",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D0B573_D9E4_FD07_41E7_C55837221F98",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D0D574_D9E4_FD01_41E7_3ADB937442CE",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D01574_D9E4_FD01_41D1_C9C3DE5CF2D7",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D04574_D9E4_FD01_41D8_608ACB4D3754",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D1C574_D9E4_FD01_41D0_C5FDF852B955",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_1_HS_6_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D10574_D9E4_FD01_41E7_7E9335F4113F",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CB3FBBF6_DD18_3FC8_41E4_2C74F45E0213",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CB3C7BF6_DD18_3FC8_41E2_4BEC1B545780",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CB3C0BF6_DD18_3FC8_41CB_35FA86767EBA",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CB3CBBF6_DD18_3FC8_41DC_340065152334",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CB3D5BF6_DD18_3FC8_41E9_CFF7FC4F4E22",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CB3DABF6_DD18_3FC8_419A_30F4A9964CDD",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_6_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CB3A7BF6_DD18_3FC8_41E8_3BC949C24A5F",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_1_HS_7_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CF8575_D9E4_FD03_41D6_AA03DE7F8CF2",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_8_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CB3A9BF6_DD18_3FC8_41EA_29EAE51E0BD2",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B9BFA3_DD08_3848_41B3_5386B834D936",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D7A97ED_DA6C_BD03_41D8_093E3707AA25",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CAA576_D9E4_FD01_41D8_F67E792E8CA6",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D7A27ED_DA6C_BD03_41BD_826A73083B7B",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CA0576_D9E4_FD0A_41D5_1BF90BCB92CD",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D7BA7ED_DA6C_BD03_41E3_8EB46009ACB2",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_1_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CBD57C_D9E4_FD01_41E6_A072E677F9F6",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_6_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D7B77ED_DA6C_BD03_41E9_C9D94AD9F56F",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_7_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D78B7ED_DA6C_BD03_41D3_C7BAB1AEAF0B",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_8_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D7967ED_DA6C_BD03_41A6_8C84A35E6991",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B9EFA3_DD08_3848_41A2_2A9C8649FE46",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C6057D_D9E4_FD03_41EA_33F05939B52D",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D7D77ED_DA6C_BD03_41D1_3390F5A29F66",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CEDDDCA0_DD55_3094_41C1_DEBE300F553C",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CEDD0CA0_DD55_3094_41E8_768A3A0DDAE5",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CEDAACA0_DD55_3094_41CC_7F310F156C5C",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D6857DD_DA6C_BD03_41D9_FECBE7A8F4EF",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CEDA1CA0_DD55_3094_41DF_632BA21F81A5",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CEDB2CA0_DD55_3094_41D1_A0450F65DBC2",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_6_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CEDB4CA0_DD55_3094_41DA_31F4A4AB30D8",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B5EF9B_DD08_3878_41DA_8DB4710AF462",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B5BF9B_DD08_3878_41DA_DD99E4C1A435",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CB91AE7D_DDF4_D827_41E2_E5CBD4817CCF",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C6E57D_D9E4_FD03_41E8_C368E7B7CA09",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88FF8586_D9E4_FD01_41EA_9286D74FC88E",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88FF2586_D9E4_FD01_41C9_3C916EE91D07",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88FCB586_D9E4_FD01_41DF_BF0E02DA7D0F",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88FC3587_D9E4_FD0F_41D7_2E0691E9925D",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_1_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88FC5587_D9E4_FD0F_41E7_079DF8774749",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F6658E_D9E4_FD01_41B3_C759800854B7",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F7E58E_D9E4_FD01_41D4_C678B2F95069",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_CFE5876F_DDF4_C822_41DF_D8DCD147B791_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CB69EE93_DDF4_D8E2_41E6_EBC066C77CE0",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88FDC587_D9E4_FD0F_41EA_15DAD634B540",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B76FA1_DD08_3848_41D2_BC52C481E60D",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88FAE587_D9E4_FD0F_41E0_FEE956FC10F0",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F4F58E_D9E4_FD01_41C1_CC00A4AB699C",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B94FA4_DD08_3848_41D0_CD127239775C",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2BBEFA6_DD08_3848_41E4_243BB5A314AD",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2BBCFA6_DD08_3848_41D3_FDA420A6E964",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2BBAFA6_DD08_3848_41C9_1F12EE9C1E66",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F5858F_D9E4_FD1F_41D8_4485D225FA65",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F5758F_D9E4_FD1F_41B1_377739968277",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C37584_D9E4_FD01_41DD_E3C57389CE87",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D7697ED_DA6C_BD03_41E2_7ADBA9AA1EA4",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C02584_D9E4_FD01_41E1_7BB0FD574D1E",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B43F9D_DD08_3878_41E4_5B524CC6D8DD",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B5AF9E_DD08_3878_41DB_231C6395F950",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C2957F_D9E4_FDFF_41E8_3765270E0A3A",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B06F98_DD08_3878_41B7_4C051BEF2463",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B04F98_DD08_3878_41C8_169D3761529C",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CCA575_D9E4_FD03_41C0_DCDA47AA4F31",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CCC576_D9E4_FD01_41D2_B343F354DCAD",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CA2ED7D2_DD08_57C8_41EA_96E1E3E8E528",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_1_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CDB576_D9E4_FD01_41B5_2BC12D958171",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B8AFA5_DD08_3848_41C6_A20CF4670C7A",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B87FA5_DD08_3848_41CF_E7A87638452A",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B85FA5_DD08_3848_41C7_C8704F5E1F9A",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B62FA3_DD08_3848_41D6_73063773BD87",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D62E7DD_DA6C_BD03_41E0_8B39DD9F8850",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D2E56E_D9E4_FD01_41E6_1FA2DC2CB285",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CE33E398_DD6C_D0B4_41EA_98F5A522372C",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D63C7DD_DA6C_BD03_41D8_F8239B99E580",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CE325398_DD6C_D0B4_41E2_16051BD5798E",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D6367DD_DA6C_BD03_41E7_2C681BF39EF9",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0_HS_6_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CE35D398_DD6C_D0B4_41C1_BDFA17E2AD18",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C2157F_D9E4_FDFF_41E9_D66E31D3E7C9",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B55F9E_DD08_3878_41EB_19D71F1507AD",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2AA5F92_DD08_3848_41A3_270BF2E927DE",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CB2BABE6_DD18_3FC8_41EA_59C551AEF1AD",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88DBC56B_D9E4_FD07_41BB_3D42E019638D",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CE565FA5_DD08_7848_41E5_03E0F5115BD1",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C3E584_D9E4_FD01_41DF_1E5D837589FA",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C9257C_D9E4_FD01_41CB_CE417E5864A1",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D7407FD_DA6C_BD03_41D6_6A9A48FD3B04",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D7587FD_DA6C_BD03_41D9_32A0B3227006",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88FE7586_D9E4_FD01_41E4_CA48AF6F7FC6",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D7547FD_DA6C_BD03_41E0_B196685C698C",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D8AD7FD_DA6C_BD03_41E9_7C3CAEE0807B",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CE2D5388_DD6C_D094_41E9_CC0FAD24CB9B",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CE2D9388_DD6C_D094_41EA_8E0290489309",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CE2C0388_DD6C_D094_41D3_1C3D48464813",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D6EA7DD_DA6C_BD03_41DE_EB33B672075D",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CE2C9388_DD6C_D094_41DC_A8BCA1C2AF45",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CE2CC388_DD6C_D094_41E4_646BAA46246F",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_6_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CE2F4388_DD6C_D094_41E3_D0001CA5FE82",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_7_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CE2F8388_DD6C_D094_41E4_E65C885A3A5F",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_8_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CE2FF388_DD6C_D094_41E8_3A361833A60B",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_9_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D6CD7DD_DA6C_BD03_41C4_F391D67DBD3C",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D8356B_D9E4_FD07_41EA_A787A3401629",
 "rowCount": 6,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2ACDF93_DD08_3848_41E4_A9FAF3308A42",
 "rowCount": 6,
 "frameCount": 21
},
{
 "paddingBottom": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "maxHeight": 60,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "width": 60,
 "paddingLeft": 0,
 "propagateClick": true,
 "height": 60,
 "minHeight": 1,
 "mode": "toggle",
 "shadow": false,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "minWidth": 1,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "horizontalAlign": "center",
 "data": {
  "name": "image button menu"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "cursor": "hand"
},
{
 "visible": false,
 "paddingBottom": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "maxHeight": 58,
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "width": 58,
 "paddingLeft": 0,
 "propagateClick": true,
 "height": 58,
 "minHeight": 1,
 "mode": "push",
 "shadow": false,
 "click": "this.shareTwitter(window.location.href)",
 "minWidth": 1,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton TWITTER"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "cursor": "hand"
},
{
 "visible": false,
 "paddingBottom": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "maxHeight": 58,
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "width": 58,
 "paddingLeft": 0,
 "propagateClick": true,
 "height": 58,
 "minHeight": 1,
 "mode": "push",
 "shadow": false,
 "click": "this.shareFacebook(window.location.href)",
 "minWidth": 1,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton FB"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "cursor": "hand"
},
{
 "visible": false,
 "paddingBottom": 0,
 "class": "Button",
 "rollOverBackgroundOpacity": 0.8,
 "verticalAlign": "middle",
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "width": 120,
 "backgroundOpacity": 0,
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "propagateClick": true,
 "fontColor": "#FFFFFF",
 "pressedBackgroundOpacity": 1,
 "iconHeight": 0,
 "height": 40,
 "borderColor": "#000000",
 "minHeight": 1,
 "mode": "push",
 "shadow": false,
 "backgroundColor": [
  "#000000"
 ],
 "label": "HOUSE INFO",
 "minWidth": 1,
 "fontSize": 12,
 "paddingTop": 0,
 "rollOverShadow": false,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "shadowBlurRadius": 15,
 "iconBeforeLabel": true,
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "fontStyle": "normal",
 "borderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "bold",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "iconWidth": 0,
 "data": {
  "name": "Button house info"
 },
 "rollOverBackgroundColor": [
  "#04A3E1"
 ]
},
{
 "paddingBottom": 0,
 "class": "Button",
 "rollOverBackgroundOpacity": 0.8,
 "verticalAlign": "middle",
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "width": 130,
 "backgroundOpacity": 0,
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "propagateClick": true,
 "fontColor": "#FFFFFF",
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "height": 40,
 "borderColor": "#000000",
 "minHeight": 1,
 "mode": "push",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "PANORAMA LIST",
 "minWidth": 1,
 "fontSize": 12,
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "shadowBlurRadius": 15,
 "iconBeforeLabel": true,
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "fontStyle": "normal",
 "borderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "bold",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "iconWidth": 32,
 "data": {
  "name": "Button panorama list"
 },
 "rollOverBackgroundColor": [
  "#04A3E1"
 ]
},
{
 "paddingBottom": 0,
 "class": "Button",
 "rollOverBackgroundOpacity": 0.8,
 "verticalAlign": "middle",
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "width": 90,
 "backgroundOpacity": 0,
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "propagateClick": true,
 "fontColor": "#FFFFFF",
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "height": 40,
 "borderColor": "#000000",
 "minHeight": 1,
 "mode": "push",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "LOCATION",
 "minWidth": 1,
 "fontSize": 12,
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "shadowBlurRadius": 15,
 "iconBeforeLabel": true,
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "fontStyle": "normal",
 "borderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "bold",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "iconWidth": 32,
 "data": {
  "name": "Button location"
 },
 "rollOverBackgroundColor": [
  "#04A3E1"
 ]
},
{
 "visible": false,
 "paddingBottom": 0,
 "class": "Button",
 "rollOverBackgroundOpacity": 0.8,
 "verticalAlign": "middle",
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "width": 103,
 "backgroundOpacity": 0,
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "propagateClick": true,
 "fontColor": "#FFFFFF",
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "height": 40,
 "borderColor": "#000000",
 "minHeight": 1,
 "mode": "push",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "FLOORPLAN",
 "minWidth": 1,
 "fontSize": 12,
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "shadowBlurRadius": 15,
 "iconBeforeLabel": true,
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "fontStyle": "normal",
 "borderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "bold",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "iconWidth": 32,
 "data": {
  "name": "Button floorplan"
 },
 "rollOverBackgroundColor": [
  "#04A3E1"
 ]
},
{
 "visible": false,
 "paddingBottom": 0,
 "class": "Button",
 "rollOverBackgroundOpacity": 0.8,
 "verticalAlign": "middle",
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "width": 112,
 "backgroundOpacity": 0,
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "propagateClick": true,
 "fontColor": "#FFFFFF",
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "height": 40,
 "borderColor": "#000000",
 "minHeight": 1,
 "mode": "push",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "PHOTOALBUM",
 "minWidth": 1,
 "fontSize": 12,
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "shadowBlurRadius": 15,
 "iconBeforeLabel": true,
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "fontStyle": "normal",
 "borderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "bold",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "iconWidth": 32,
 "data": {
  "name": "Button photoalbum"
 },
 "rollOverBackgroundColor": [
  "#04A3E1"
 ]
},
{
 "visible": false,
 "paddingBottom": 0,
 "class": "Button",
 "rollOverBackgroundOpacity": 0.8,
 "verticalAlign": "middle",
 "id": "Button_1B9A3D00_16C4_0505_41B2_6830155B7D52",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "width": 90,
 "backgroundOpacity": 0,
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "propagateClick": true,
 "fontColor": "#FFFFFF",
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "height": 40,
 "borderColor": "#000000",
 "minHeight": 1,
 "mode": "push",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "REALTOR",
 "minWidth": 1,
 "fontSize": 12,
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "shadowBlurRadius": 15,
 "iconBeforeLabel": true,
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "fontStyle": "normal",
 "borderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "bold",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "iconWidth": 32,
 "data": {
  "name": "Button realtor"
 },
 "rollOverBackgroundColor": [
  "#04A3E1"
 ]
},
{
 "paddingBottom": 0,
 "class": "Container",
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "backgroundColorRatios": [
  0
 ],
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "width": "85%",
 "verticalAlign": "middle",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": false,
 "contentOpaque": false,
 "shadow": false,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "layout": "absolute",
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
},
{
 "paddingBottom": 20,
 "class": "Container",
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundOpacity": 1,
 "overflow": "visible",
 "width": "50%",
 "verticalAlign": "top",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 50,
 "propagateClick": false,
 "contentOpaque": false,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "height": "100%",
 "layout": "vertical",
 "paddingTop": 20,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "scrollBarColor": "#0069A3",
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "borderRadius": 0,
 "paddingRight": 50,
 "scrollBarOpacity": 0.51,
 "scrollBarVisible": "rollOver"
},
{
 "paddingBottom": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "maxHeight": 60,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "width": "25%",
 "propagateClick": false,
 "paddingLeft": 0,
 "height": "75%",
 "minHeight": 50,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "minWidth": 50,
 "mode": "push",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "class": "Container",
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "backgroundColorRatios": [
  0
 ],
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "width": "85%",
 "verticalAlign": "middle",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": false,
 "contentOpaque": false,
 "shadow": false,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "layout": "absolute",
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
},
{
 "paddingBottom": 20,
 "class": "Container",
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundOpacity": 1,
 "overflow": "visible",
 "width": "50%",
 "verticalAlign": "top",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 50,
 "propagateClick": false,
 "contentOpaque": false,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "height": "100%",
 "layout": "vertical",
 "paddingTop": 20,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "scrollBarColor": "#0069A3",
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "borderRadius": 0,
 "paddingRight": 50,
 "scrollBarOpacity": 0.51,
 "scrollBarVisible": "rollOver"
},
{
 "paddingBottom": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "maxHeight": 60,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "width": "25%",
 "propagateClick": false,
 "paddingLeft": 0,
 "height": "75%",
 "minHeight": 50,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "minWidth": 50,
 "mode": "push",
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "class": "Container",
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "width": "100%",
 "verticalAlign": "top",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": false,
 "height": 140,
 "contentOpaque": false,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "data": {
  "name": "header"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver"
},
{
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "itemPaddingLeft": 3,
 "width": "100%",
 "itemVerticalAlign": "top",
 "itemThumbnailScaleMode": "fit_outside",
 "scrollBarColor": "#04A3E1",
 "paddingLeft": 70,
 "backgroundColor": [
  "#000000"
 ],
 "rollOverItemThumbnailShadow": true,
 "height": "100%",
 "itemBackgroundColorRatios": [],
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemLabelFontColor": "#666666",
 "itemPaddingTop": 3,
 "paddingTop": 10,
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "itemThumbnailWidth": 220,
 "scrollBarWidth": 10,
 "itemLabelGap": 7,
 "selectedItemLabelFontColor": "#04A3E1",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemPaddingRight": 3,
 "selectedItemThumbnailShadow": true,
 "horizontalAlign": "center",
 "itemThumbnailShadow": false,
 "itemBackgroundColorDirection": "vertical",
 "paddingRight": 70,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "itemOpacity": 1,
 "paddingBottom": 70,
 "class": "ThumbnailGrid",
 "verticalAlign": "middle",
 "itemMode": "normal",
 "backgroundColorRatios": [
  0
 ],
 "backgroundOpacity": 0.05,
 "itemThumbnailBorderRadius": 0,
 "itemMaxWidth": 1000,
 "itemLabelFontWeight": "normal",
 "gap": 26,
 "itemMinHeight": 50,
 "backgroundColorDirection": "vertical",
 "itemHorizontalAlign": "center",
 "itemLabelTextDecoration": "none",
 "minHeight": 1,
 "rollOverItemLabelFontColor": "#04A3E1",
 "propagateClick": false,
 "selectedItemLabelFontWeight": "bold",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemLabelFontFamily": "Montserrat",
 "itemLabelFontSize": 14,
 "shadow": false,
 "itemPaddingBottom": 3,
 "minWidth": 1,
 "itemBackgroundOpacity": 0,
 "itemMinWidth": 50,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "itemWidth": 220,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "itemHeight": 156,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemThumbnailHeight": 125,
 "itemLabelPosition": "bottom",
 "itemMaxHeight": 1000,
 "itemBorderRadius": 0,
 "borderRadius": 5,
 "itemLabelFontStyle": "normal",
 "data": {
  "name": "ThumbnailList"
 },
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemLabelHorizontalAlign": "center"
},
{
 "paddingBottom": 0,
 "class": "Container",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "backgroundColorRatios": [
  0
 ],
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "width": "85%",
 "verticalAlign": "middle",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": false,
 "contentOpaque": false,
 "shadow": false,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "layout": "absolute",
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
},
{
 "paddingBottom": 20,
 "class": "Container",
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundOpacity": 1,
 "overflow": "visible",
 "width": "15%",
 "verticalAlign": "top",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 50,
 "propagateClick": false,
 "contentOpaque": false,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 400,
 "height": "100%",
 "layout": "vertical",
 "paddingTop": 20,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "scrollBarColor": "#0069A3",
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "borderRadius": 0,
 "paddingRight": 50,
 "scrollBarOpacity": 0.51,
 "scrollBarVisible": "rollOver"
},
{
 "paddingBottom": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "maxHeight": 60,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "width": "25%",
 "propagateClick": false,
 "paddingLeft": 0,
 "height": "75%",
 "minHeight": 50,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "minWidth": 50,
 "mode": "push",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "class": "Container",
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "width": "100%",
 "verticalAlign": "top",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": false,
 "height": 140,
 "contentOpaque": false,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "data": {
  "name": "header"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver"
},
{
 "toolTipFontStyle": "normal",
 "progressBackgroundColorDirection": "vertical",
 "id": "MapViewer",
 "toolTipPaddingLeft": 6,
 "progressBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "toolTipFontFamily": "Arial",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "width": "100%",
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "toolTipPaddingTop": 4,
 "toolTipBorderSize": 1,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "paddingLeft": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": 12,
 "progressBarBorderRadius": 0,
 "vrPointerColor": "#FFFFFF",
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontWeight": "normal",
 "playbackBarHeadWidth": 6,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "paddingTop": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarRight": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "transitionMode": "blending",
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderRadius": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "playbackBarLeft": 0,
 "paddingRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBarOpacity": 1,
 "paddingBottom": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadShadow": true,
 "playbackBarBottom": 0,
 "playbackBarOpacity": 1,
 "playbackBarHeadBorderColor": "#000000",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "progressRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipShadowSpread": 0,
 "playbackBarHeadBorderRadius": 0,
 "vrPointerSelectionColor": "#FF6600",
 "displayTooltipInTouchScreens": true,
 "minHeight": 1,
 "propagateClick": false,
 "toolTipTextShadowColor": "#000000",
 "toolTipPaddingBottom": 4,
 "toolTipShadowBlurRadius": 3,
 "vrPointerSelectionTime": 2000,
 "shadow": false,
 "firstTransitionDuration": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "progressBottom": 2,
 "toolTipBorderColor": "#767676",
 "playbackBarBorderSize": 0,
 "progressBorderSize": 0,
 "progressHeight": 6,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowColor": "#000000",
 "progressLeft": 0,
 "borderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressOpacity": 1,
 "toolTipTextShadowOpacity": 0
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "class": "Container",
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "width": "100%",
 "verticalAlign": "top",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": false,
 "height": 140,
 "contentOpaque": false,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "data": {
  "name": "header"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver"
},
{
 "paddingBottom": 0,
 "class": "Container",
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundOpacity": 0.3,
 "overflow": "visible",
 "width": "100%",
 "verticalAlign": "top",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": false,
 "contentOpaque": false,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "layout": "absolute",
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "Container photo"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
},
{
 "paddingBottom": 0,
 "class": "Container",
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundOpacity": 0.3,
 "overflow": "visible",
 "width": "100%",
 "verticalAlign": "top",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": false,
 "contentOpaque": false,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "layout": "absolute",
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "Container photo"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
},
{
 "paddingBottom": 0,
 "class": "Container",
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "backgroundColorRatios": [
  0
 ],
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "width": "55%",
 "verticalAlign": "middle",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": false,
 "contentOpaque": false,
 "shadow": false,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "layout": "absolute",
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
},
{
 "paddingBottom": 20,
 "class": "Container",
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundOpacity": 1,
 "overflow": "visible",
 "width": "45%",
 "verticalAlign": "top",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 60,
 "propagateClick": false,
 "contentOpaque": false,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "height": "100%",
 "layout": "vertical",
 "paddingTop": 20,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "scrollBarColor": "#0069A3",
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "borderRadius": 0,
 "paddingRight": 60,
 "scrollBarOpacity": 0.51,
 "scrollBarVisible": "rollOver"
},
{
 "paddingBottom": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "maxHeight": 60,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "width": "25%",
 "propagateClick": false,
 "paddingLeft": 0,
 "height": "75%",
 "minHeight": 50,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "minWidth": 50,
 "mode": "push",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "class": "Image",
 "verticalAlign": "middle",
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "maxHeight": 1000,
 "maxWidth": 2000,
 "backgroundOpacity": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "width": "100%",
 "propagateClick": false,
 "paddingLeft": 0,
 "top": "0%",
 "height": "100%",
 "minHeight": 1,
 "shadow": false,
 "minWidth": 1,
 "paddingTop": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Image"
 },
 "borderRadius": 0,
 "scaleMode": "fit_outside",
 "paddingRight": 0
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "class": "Container",
 "verticalAlign": "top",
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "width": "100%",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "paddingLeft": 0,
 "propagateClick": false,
 "height": 60,
 "contentOpaque": false,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 20,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "right",
 "data": {
  "name": "Container space"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver"
},
{
 "paddingBottom": 30,
 "class": "Container",
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "width": "100%",
 "verticalAlign": "top",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 520,
 "paddingLeft": 0,
 "propagateClick": false,
 "contentOpaque": false,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "height": "100%",
 "layout": "vertical",
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "scrollBarColor": "#E73B2C",
 "horizontalAlign": "left",
 "data": {
  "name": "Container text"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarOpacity": 0.79,
 "scrollBarVisible": "rollOver"
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "class": "Container",
 "verticalAlign": "top",
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": 370,
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": false,
 "height": 40,
 "contentOpaque": false,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "data": {
  "name": "Container space"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver"
},
{
 "toolTipFontStyle": "normal",
 "progressBackgroundColorDirection": "vertical",
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "toolTipPaddingLeft": 6,
 "progressBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "toolTipFontFamily": "Arial",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "right": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "toolTipPaddingTop": 4,
 "toolTipBorderSize": 1,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "paddingLeft": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": 12,
 "progressBarBorderRadius": 0,
 "vrPointerColor": "#FFFFFF",
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontWeight": "normal",
 "playbackBarHeadWidth": 6,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarRight": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "transitionMode": "blending",
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderRadius": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBarOpacity": 1,
 "paddingBottom": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadShadow": true,
 "playbackBarBottom": 0,
 "playbackBarOpacity": 1,
 "playbackBarHeadBorderColor": "#000000",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "progressRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipShadowSpread": 0,
 "playbackBarHeadBorderRadius": 0,
 "vrPointerSelectionColor": "#FF6600",
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingBottom": 4,
 "propagateClick": false,
 "top": 0,
 "toolTipTextShadowColor": "#000000",
 "bottom": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "minHeight": 1,
 "shadow": false,
 "firstTransitionDuration": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "progressBottom": 2,
 "toolTipBorderColor": "#767676",
 "playbackBarBorderSize": 0,
 "progressBorderSize": 0,
 "progressHeight": 6,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowColor": "#000000",
 "progressLeft": 0,
 "borderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "data": {
  "name": "Viewer info 1"
 },
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressOpacity": 1,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipTextShadowOpacity": 0
},
{
 "paddingBottom": 0,
 "class": "Container",
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "verticalAlign": "middle",
 "gap": 10,
 "propagateClick": false,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "shadow": false,
 "height": "100%",
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "data": {
  "name": "Container arrows"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "class": "Container",
 "verticalAlign": "top",
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "width": "100%",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "paddingLeft": 0,
 "propagateClick": false,
 "height": 60,
 "contentOpaque": false,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 20,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "right",
 "data": {
  "name": "Container space"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver"
},
{
 "paddingBottom": 30,
 "class": "Container",
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "width": "100%",
 "verticalAlign": "top",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 520,
 "paddingLeft": 0,
 "propagateClick": false,
 "contentOpaque": false,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "height": "100%",
 "layout": "vertical",
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "scrollBarColor": "#E73B2C",
 "horizontalAlign": "left",
 "data": {
  "name": "Container text"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarOpacity": 0.79,
 "scrollBarVisible": "rollOver"
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "class": "Container",
 "verticalAlign": "top",
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": 370,
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": false,
 "height": 40,
 "contentOpaque": false,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "data": {
  "name": "Container space"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver"
},
{
 "paddingBottom": 0,
 "class": "HTMLText",
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "77.115%",
 "propagateClick": false,
 "paddingLeft": 80,
 "top": "0%",
 "scrollBarColor": "#000000",
 "minHeight": 100,
 "shadow": false,
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.15vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.15vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
},
{
 "paddingBottom": 0,
 "class": "IconButton",
 "verticalAlign": "top",
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "maxHeight": 60,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "right": 20,
 "width": "100%",
 "propagateClick": false,
 "paddingLeft": 0,
 "top": 20,
 "height": "36.14%",
 "minHeight": 50,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "minWidth": 50,
 "mode": "push",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "class": "WebFrame",
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "backgroundOpacity": 1,
 "backgroundColorRatios": [
  0
 ],
 "right": "0%",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d673.2763774025825!2d-122.5430829!3d47.54627519999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490478a6f72db75%3A0x145ffc32bb64b9f5!2s1310%20Colchester%20Dr%20E%2C%20Port%20Orchard%2C%20WA%2098366!5e0!3m2!1sen!2sus!4v1713057739566!5m2!1sen!2sus",
 "backgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "propagateClick": false,
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 1,
 "shadow": false,
 "scrollEnabled": true,
 "minWidth": 1,
 "paddingTop": 0,
 "borderSize": 0,
 "data": {
  "name": "WebFrame48191"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "insetBorder": false
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "class": "Container",
 "verticalAlign": "top",
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "width": "100%",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "paddingLeft": 0,
 "propagateClick": false,
 "height": 60,
 "contentOpaque": false,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 20,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "right",
 "data": {
  "name": "Container space"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver"
},
{
 "paddingBottom": 30,
 "class": "Container",
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "width": "100%",
 "verticalAlign": "top",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 520,
 "paddingLeft": 0,
 "propagateClick": false,
 "contentOpaque": false,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "height": "100%",
 "layout": "vertical",
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "scrollBarColor": "#E73B2C",
 "horizontalAlign": "left",
 "data": {
  "name": "Container text"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarOpacity": 0.79,
 "scrollBarVisible": "rollOver"
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "class": "Container",
 "verticalAlign": "top",
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": 370,
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": false,
 "height": 40,
 "contentOpaque": false,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "data": {
  "name": "Container space"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver"
},
{
 "paddingBottom": 0,
 "class": "HTMLText",
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "77.115%",
 "propagateClick": false,
 "paddingLeft": 80,
 "top": "0%",
 "scrollBarColor": "#000000",
 "minHeight": 100,
 "shadow": false,
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.15vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.15vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
},
{
 "paddingBottom": 0,
 "class": "IconButton",
 "verticalAlign": "top",
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "maxHeight": 60,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "right": 20,
 "width": "100%",
 "propagateClick": false,
 "paddingLeft": 0,
 "top": 20,
 "height": "36.14%",
 "minHeight": 50,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "minWidth": 50,
 "mode": "push",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "class": "HTMLText",
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "77.115%",
 "propagateClick": false,
 "paddingLeft": 80,
 "top": "0%",
 "scrollBarColor": "#000000",
 "minHeight": 100,
 "shadow": false,
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.15vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.15vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
},
{
 "paddingBottom": 0,
 "class": "IconButton",
 "verticalAlign": "top",
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "maxHeight": 60,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "right": 20,
 "width": "100%",
 "propagateClick": false,
 "paddingLeft": 0,
 "top": 20,
 "height": "36.14%",
 "minHeight": 50,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "minWidth": 50,
 "mode": "push",
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "cursor": "hand"
},
{
 "toolTipFontStyle": "normal",
 "progressBackgroundColorDirection": "vertical",
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "toolTipPaddingLeft": 6,
 "progressBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "toolTipFontFamily": "Arial",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "width": "100%",
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "toolTipPaddingTop": 4,
 "toolTipBorderSize": 1,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "paddingLeft": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": 12,
 "progressBarBorderRadius": 0,
 "vrPointerColor": "#FFFFFF",
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontWeight": "normal",
 "playbackBarHeadWidth": 6,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarRight": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "transitionMode": "blending",
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderRadius": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBarOpacity": 1,
 "paddingBottom": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadShadow": true,
 "playbackBarBottom": 0,
 "playbackBarOpacity": 1,
 "playbackBarHeadBorderColor": "#000000",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "progressRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipShadowSpread": 0,
 "playbackBarHeadBorderRadius": 0,
 "vrPointerSelectionColor": "#FF6600",
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingBottom": 4,
 "propagateClick": false,
 "top": "0%",
 "toolTipTextShadowColor": "#000000",
 "toolTipShadowBlurRadius": 3,
 "vrPointerSelectionTime": 2000,
 "minHeight": 1,
 "shadow": false,
 "firstTransitionDuration": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "progressBottom": 2,
 "toolTipBorderColor": "#767676",
 "playbackBarBorderSize": 0,
 "progressBorderSize": 0,
 "progressHeight": 6,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowColor": "#000000",
 "progressLeft": 0,
 "borderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "data": {
  "name": "Viewer photoalbum + text 1"
 },
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressOpacity": 1,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipTextShadowOpacity": 0
},
{
 "paddingBottom": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "left": 10,
 "maxHeight": 60,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "width": "14.22%",
 "paddingLeft": 0,
 "propagateClick": false,
 "top": "20%",
 "bottom": "20%",
 "minHeight": 50,
 "mode": "push",
 "shadow": false,
 "minWidth": 50,
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "transparencyActive": false,
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton <"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "maxHeight": 60,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "right": 10,
 "width": "14.22%",
 "paddingLeft": 0,
 "propagateClick": false,
 "top": "20%",
 "bottom": "20%",
 "minHeight": 50,
 "mode": "push",
 "shadow": false,
 "minWidth": 50,
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "transparencyActive": false,
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton >"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "cursor": "hand"
},
{
 "toolTipFontStyle": "normal",
 "progressBackgroundColorDirection": "vertical",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipPaddingLeft": 6,
 "progressBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "toolTipFontFamily": "Arial",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "width": "100%",
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "toolTipPaddingTop": 4,
 "toolTipBorderSize": 1,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "paddingLeft": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": 12,
 "progressBarBorderRadius": 0,
 "vrPointerColor": "#FFFFFF",
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontWeight": "normal",
 "playbackBarHeadWidth": 6,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarRight": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "transitionMode": "blending",
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderRadius": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBarOpacity": 1,
 "paddingBottom": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadShadow": true,
 "playbackBarBottom": 0,
 "playbackBarOpacity": 1,
 "playbackBarHeadBorderColor": "#000000",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "progressRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipShadowSpread": 0,
 "playbackBarHeadBorderRadius": 0,
 "vrPointerSelectionColor": "#FF6600",
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingBottom": 4,
 "propagateClick": false,
 "top": "0%",
 "toolTipTextShadowColor": "#000000",
 "toolTipShadowBlurRadius": 3,
 "vrPointerSelectionTime": 2000,
 "minHeight": 1,
 "shadow": false,
 "firstTransitionDuration": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "progressBottom": 2,
 "toolTipBorderColor": "#767676",
 "playbackBarBorderSize": 0,
 "progressBorderSize": 0,
 "progressHeight": 6,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowColor": "#000000",
 "progressLeft": 0,
 "borderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressOpacity": 1,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipTextShadowOpacity": 0
},
{
 "paddingBottom": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "maxHeight": 60,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "width": "14.22%",
 "paddingLeft": 0,
 "propagateClick": false,
 "top": "20%",
 "bottom": "20%",
 "minHeight": 50,
 "mode": "push",
 "shadow": false,
 "minWidth": 50,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "transparencyActive": false,
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton <"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "maxHeight": 60,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "right": 10,
 "width": "14.22%",
 "paddingLeft": 0,
 "propagateClick": false,
 "top": "20%",
 "bottom": "20%",
 "minHeight": 50,
 "mode": "push",
 "shadow": false,
 "minWidth": 50,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "transparencyActive": false,
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton >"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "class": "IconButton",
 "verticalAlign": "top",
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "maxHeight": 60,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "right": 20,
 "width": "10%",
 "propagateClick": false,
 "paddingLeft": 0,
 "top": 20,
 "height": "10%",
 "minHeight": 50,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "minWidth": 50,
 "mode": "push",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "class": "Image",
 "verticalAlign": "bottom",
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "maxHeight": 1000,
 "maxWidth": 2000,
 "backgroundOpacity": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "width": "100%",
 "propagateClick": false,
 "paddingLeft": 0,
 "top": "0%",
 "height": "100%",
 "minHeight": 1,
 "shadow": false,
 "minWidth": 1,
 "paddingTop": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Image"
 },
 "borderRadius": 0,
 "scaleMode": "fit_outside",
 "paddingRight": 0
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "class": "Container",
 "verticalAlign": "top",
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "width": "100%",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "paddingLeft": 0,
 "propagateClick": false,
 "height": 60,
 "contentOpaque": false,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 20,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "right",
 "data": {
  "name": "Container space"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver"
},
{
 "paddingBottom": 30,
 "class": "Container",
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "width": "100%",
 "verticalAlign": "top",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 520,
 "paddingLeft": 0,
 "propagateClick": false,
 "contentOpaque": false,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "height": "100%",
 "layout": "vertical",
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "scrollBarColor": "#E73B2C",
 "horizontalAlign": "left",
 "data": {
  "name": "Container text"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarOpacity": 0.79,
 "scrollBarVisible": "rollOver"
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "class": "Container",
 "verticalAlign": "top",
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": 370,
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": false,
 "height": 40,
 "contentOpaque": false,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "data": {
  "name": "Container space"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver"
},
{
 "paddingBottom": 20,
 "class": "HTMLText",
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "backgroundOpacity": 0,
 "width": "100%",
 "propagateClick": false,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "minHeight": 1,
 "shadow": false,
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.47vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.35vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.35vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.35vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.35vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.58vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "borderRadius": 0,
 "paddingRight": 10,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
},
{
 "paddingBottom": 0,
 "class": "Button",
 "rollOverBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "backgroundColorRatios": [
  0
 ],
 "backgroundOpacity": 0.7,
 "fontFamily": "Bebas Neue Bold",
 "width": "46%",
 "shadowColor": "#000000",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "pressedBackgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": false,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "borderColor": "#000000",
 "shadow": false,
 "backgroundColor": [
  "#04A3E1"
 ],
 "label": "lorem ipsum",
 "minWidth": 1,
 "mode": "push",
 "height": "9%",
 "fontSize": "3vh",
 "iconBeforeLabel": true,
 "paddingTop": 0,
 "borderSize": 0,
 "shadowBlurRadius": 6,
 "layout": "horizontal",
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "fontStyle": "normal",
 "borderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "iconWidth": 32,
 "data": {
  "name": "Button"
 }
},
{
 "paddingBottom": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "maxHeight": 150,
 "maxWidth": 150,
 "backgroundOpacity": 0,
 "width": "12%",
 "propagateClick": false,
 "paddingLeft": 0,
 "height": "8%",
 "minHeight": 70,
 "shadow": false,
 "minWidth": 70,
 "mode": "push",
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton <"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "class": "Container",
 "verticalAlign": "top",
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "80%",
 "gap": 10,
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "shadow": false,
 "height": "30%",
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "data": {
  "name": "Container separator"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
},
{
 "paddingBottom": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "maxHeight": 150,
 "maxWidth": 150,
 "backgroundOpacity": 0,
 "width": "12%",
 "propagateClick": false,
 "paddingLeft": 0,
 "height": "8%",
 "minHeight": 70,
 "shadow": false,
 "minWidth": 70,
 "mode": "push",
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton >"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "cursor": "hand"
},
{
 "paddingBottom": 20,
 "class": "HTMLText",
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "backgroundOpacity": 0,
 "width": "100%",
 "propagateClick": false,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "minHeight": 1,
 "shadow": false,
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.47vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.35vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.35vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "borderRadius": 0,
 "paddingRight": 10,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
},
{
 "paddingBottom": 0,
 "class": "Button",
 "rollOverBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "backgroundColorRatios": [
  0
 ],
 "backgroundOpacity": 0.7,
 "fontFamily": "Bebas Neue Bold",
 "width": "46%",
 "shadowColor": "#000000",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "pressedBackgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": false,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "borderColor": "#000000",
 "shadow": false,
 "backgroundColor": [
  "#04A3E1"
 ],
 "label": "lorem ipsum",
 "minWidth": 1,
 "mode": "push",
 "height": "9%",
 "fontSize": "3vh",
 "iconBeforeLabel": true,
 "paddingTop": 0,
 "borderSize": 0,
 "shadowBlurRadius": 6,
 "layout": "horizontal",
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "fontStyle": "normal",
 "borderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "iconWidth": 32,
 "data": {
  "name": "Button"
 }
},
{
 "paddingBottom": 20,
 "class": "HTMLText",
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "backgroundOpacity": 0,
 "width": "100%",
 "propagateClick": false,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "minHeight": 1,
 "shadow": false,
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.79vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.91vh;font-family:'Bebas Neue Bold';\">1310 Colchester Dr E, Port Orchard, WA 98366</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:5.15vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">VIEW! VIEW! VIEW! Custom built home with views of Seattle and the Sound. Vaulted ceilings and plenty of space including a fireplace to keep you warm and cozy. A chef's dream kitchen with all appliances included along with washer, dryer, &amp; walk-in pantry. Formal living room and primary w/en-suite bath. Wrap around deck accessible from many rooms to soak in the view with a drink of your choice. Meditation/study room for those quiet times. Restore and bring back to life the beautiful Koi pond with cascading fountain for your enjoyment. Daylight basement includes 2 bedrooms, bath &amp; full kitchen, fridge, washer &amp; dryer. Easy commute to Seattle ferry, HWY 16, medical, and shopping.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "borderRadius": 0,
 "paddingRight": 10,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
},
{
 "paddingBottom": 0,
 "class": "Button",
 "rollOverBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "backgroundColorRatios": [
  0
 ],
 "width": 207,
 "backgroundOpacity": 0.7,
 "fontFamily": "Bebas Neue Bold",
 "shadowColor": "#000000",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "pressedBackgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": false,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "height": 59,
 "borderColor": "#000000",
 "mode": "push",
 "shadow": false,
 "backgroundColor": [
  "#04A3E1"
 ],
 "label": "lorem ipsum",
 "minWidth": 1,
 "fontSize": 34,
 "iconBeforeLabel": true,
 "paddingTop": 0,
 "borderSize": 0,
 "shadowBlurRadius": 6,
 "layout": "horizontal",
 "horizontalAlign": "center",
 "fontStyle": "normal",
 "borderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "textDecoration": "none",
 "shadowSpread": 1,
 "visible": false,
 "cursor": "hand",
 "iconWidth": 32,
 "data": {
  "name": "Button"
 }
},
{
 "paddingBottom": 10,
 "class": "HTMLText",
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "backgroundOpacity": 0,
 "width": "100%",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#04A3E1",
 "minHeight": 1,
 "shadow": false,
 "height": "45%",
 "minWidth": 1,
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.93vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText18899"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
},
{
 "paddingBottom": 0,
 "class": "Container",
 "children": [
  "this.Image_AAEAE258_BAF1_0DDD_41E6_FB144FCE6904",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "width": "100%",
 "verticalAlign": "top",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": false,
 "contentOpaque": false,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "80%",
 "layout": "horizontal",
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "- content"
 },
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
},
{
 "paddingBottom": 0,
 "class": "Image",
 "verticalAlign": "middle",
 "id": "Image_AAEAE258_BAF1_0DDD_41E6_FB144FCE6904",
 "maxHeight": 1219,
 "maxWidth": 983,
 "backgroundOpacity": 0,
 "url": "skin/Image_AAEAE258_BAF1_0DDD_41E6_FB144FCE6904.jpg",
 "width": "25.177%",
 "propagateClick": false,
 "paddingLeft": 0,
 "minHeight": 1,
 "shadow": false,
 "height": "30.5%",
 "minWidth": 1,
 "paddingTop": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Image4092"
 },
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "paddingRight": 0
},
{
 "paddingBottom": 10,
 "class": "HTMLText",
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "backgroundOpacity": 0,
 "width": "72.222%",
 "propagateClick": false,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "minHeight": 1,
 "shadow": false,
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#233142;font-size:2.35vh;font-family:'Bebas Neue Bold';\">NICHOLAS CUMMINGS</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;font-family:'Bebas Neue Bold';\">Licensed Realtor</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.79vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.79vh;font-family:'Bebas Neue Bold';\">Tlf.: +1 (253) 225-0548</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.79vh;font-family:'Bebas Neue Bold';\">NicholasC@JohnLScott.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.79vh;font-family:'Bebas Neue Bold';\">NicholasC.JohnLScott.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.12vh;font-family:'Bebas Neue Bold';\">Meet Nick Cummings, your trusted real estate advisor in Kitsap County, Washington. As a native of this beautiful region, I bring a deep understanding of its neighborhoods, communities, and market trends. While my experience in the real estate industry may be modest, my passion for helping clients achieve their homeownership dreams is boundless.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.12vh;font-family:'Bebas Neue Bold';\">With a genuine love for Kitsap County and its unique charm, I am committed to providing personalized service tailored to each client's needs and preferences. Whether you're buying, selling, or investing in real estate, I am here to guide you every step of the way. Holding a realtor license, I adhere to the highest standards of professionalism and ethics, ensuring a seamless and rewarding real estate experience for my clients.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.12vh;font-family:'Bebas Neue Bold';\">My approach is rooted in transparency, integrity, and open communication. I take the time to listen to my clients' goals and concerns, empowering them with the knowledge and resources they need to make informed decisions. From navigating the complexities of the local market to negotiating the best possible deals, I am dedicated to achieving exceptional results for my clients.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.12vh;font-family:'Bebas Neue Bold';\">As your local real estate expert, I am honored to serve the diverse communities of Kitsap County. Whether you're searching for your dream home, selling your property, or exploring investment opportunities, I am here to turn your real estate aspirations into reality. Contact me today, and let's embark on this exciting journey together</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "borderRadius": 0,
 "paddingRight": 10,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
}],
 "scrollBarMargin": 2,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "Player468"
 },
 "borderRadius": 0,
 "vrPolyfillScale": 0.5,
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver"
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
