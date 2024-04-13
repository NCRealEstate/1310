(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "scripts": {
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getKey": function(key){  return window[key]; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "existsKey": function(key){  return key in window; },
  "unregisterKey": function(key){  delete window[key]; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } }
 },
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "id": "rootPlayer",
 "contentOpaque": false,
 "verticalAlign": "top",
 "defaultVRPointer": "laser",
 "backgroundPreloadEnabled": true,
 "class": "Player",
 "desktopMipmappingEnabled": false,
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
 "definitions": [{
 "initialPosition": {
  "yaw": -151.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8FB9DA81_D9E4_F703_41C7_2BB1BA23D770",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D2713441_D95F_B927_41E1_6B8B0A550425_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -17.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8D1B499E_D9E4_F501_41D8_34745C5485C6",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -89.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8D79A97A_D9E4_F501_4199_1642F60C7EE3",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
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
 "thumbnailUrl": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
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
 "thumbnailUrl": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20240413_102954_00_merged",
 "id": "panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 79.47,
   "yaw": -98.17,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000"
  },
  {
   "backwardYaw": 27.53,
   "yaw": -151.3,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425"
  },
  {
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -105.55,
   "yaw": 136.71,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D67A4AF4_D951_AEED_41E0_825659DD4E20",
  "this.overlay_D6070947_D951_AB2B_41E0_301ABE354E28",
  "this.overlay_D787763F_D94E_795C_41D1_F6347CE78809",
  "this.overlay_D6C826FA_D94E_A6E5_41EA_2D59EAF60750",
  "this.overlay_C005AB93_D9AF_B507_41D2_FEB12D8B104B"
 ],
 "thumbnailUrl": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 96.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_88161644_D9E4_FF01_41E6_06CC6B333437",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -89.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8FD41A51_D9E4_F703_41E0_1D8B21A53D32",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 75.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8CFC99DC_D9E4_F501_41DC_EB555FB5F669",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -86.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_88384663_D9E4_FF07_41E2_01BAC8D4E585",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 108.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9CE8CC24_D9E4_F301_41E5_2B6A32CAC4AA",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 81.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8874561F_D9E4_FF3F_4193_2561E189B00C",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
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
 "thumbnailUrl": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": -100.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8A4FC840_D9E4_F302_41B1_F9C239926BD9",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 87.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8B348784_D9E4_FD01_41D0_AAC6A6310C53",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -15.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8B8E76DD_D9E4_FF03_41E3_EB122255AB2C",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 165.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8B157765_D9E4_FD03_41C9_AE615B105794",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -103.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8B531721_D9E4_FD03_41E3_FD0B1639D914",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -141.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8A2238BC_D9E4_F301_41D4_C12CC0E8C9A8",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -92.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8C63CA29_D9E4_F703_41CB_FC7DAA8784E1",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 28.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8D0AC9AD_D9E4_F503_41DA_06B300D4181C",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20240413_104727_00_merged",
 "id": "panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 77.7,
   "yaw": 115.47,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED"
  },
  {
   "backwardYaw": 143.79,
   "yaw": -66.9,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B"
  },
  {
   "backwardYaw": 83.89,
   "yaw": -148.34,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2449E7A_D95E_69E5_41E7_97426A243776"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D7E97B5C_D9AC_B501_41E4_21E2611AEEDE",
  "this.overlay_D7207717_D9AC_9D0F_41E7_577B241C7E02",
  "this.overlay_D71AA6F3_D9AC_7F07_41DB_BBC92204CDA4"
 ],
 "thumbnailUrl": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
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
   "panorama": "this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB",
   "class": "AdjacentPanorama"
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
 "thumbnailUrl": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D243391C_D95E_6B5D_41E1_EE016578AF38_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243391C_D95E_6B5D_41E1_EE016578AF38_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243391C_D95E_6B5D_41E1_EE016578AF38_0/f/2/{row}_{column}.jpg",
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
      "url": "media/panorama_D243391C_D95E_6B5D_41E1_EE016578AF38_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243391C_D95E_6B5D_41E1_EE016578AF38_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243391C_D95E_6B5D_41E1_EE016578AF38_0/u/2/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_D243391C_D95E_6B5D_41E1_EE016578AF38_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_D243391C_D95E_6B5D_41E1_EE016578AF38_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243391C_D95E_6B5D_41E1_EE016578AF38_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243391C_D95E_6B5D_41E1_EE016578AF38_0/b/2/{row}_{column}.jpg",
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
      "url": "media/panorama_D243391C_D95E_6B5D_41E1_EE016578AF38_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243391C_D95E_6B5D_41E1_EE016578AF38_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243391C_D95E_6B5D_41E1_EE016578AF38_0/d/2/{row}_{column}.jpg",
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
      "url": "media/panorama_D243391C_D95E_6B5D_41E1_EE016578AF38_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243391C_D95E_6B5D_41E1_EE016578AF38_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243391C_D95E_6B5D_41E1_EE016578AF38_0/l/2/{row}_{column}.jpg",
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
   "right": {
    "levels": [
     {
      "url": "media/panorama_D243391C_D95E_6B5D_41E1_EE016578AF38_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243391C_D95E_6B5D_41E1_EE016578AF38_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_D243391C_D95E_6B5D_41E1_EE016578AF38_0/r/2/{row}_{column}.jpg",
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
 "partial": false,
 "hfovMax": 130,
 "hfovMin": "150%",
 "label": "IMG_20240413_104802_00_merged",
 "id": "panorama_D243391C_D95E_6B5D_41E1_EE016578AF38",
 "vfov": 180,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_D243391C_D95E_6B5D_41E1_EE016578AF38_t.jpg",
 "class": "Panorama",
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": -102.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8C13CA31_D9E4_F703_41DC_921527301440",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D2446447_D95F_992B_41CD_4D904B227F99_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 85.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8D59B95A_D9E4_F501_41DD_41C5077590FB",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 133.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8A3358A8_D9E4_F303_41D9_0163C10A4A89",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
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
 "thumbnailUrl": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D243391C_D95E_6B5D_41E1_EE016578AF38_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -24.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8C402A1A_D9E4_F701_41E0_CB4BABA767D0",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -73.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8CCD39D3_D9E4_F507_41E4_B45562863A9B",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 113.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8A61C874_D9E4_F301_4198_FB605D2C8C2A",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -69.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8F5B5A91_D9E4_F703_41D7_8B4175201D57",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -58.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8BEC66B9_D9E4_FF03_41DC_3D7EE175FD68",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 39.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8D871923_D9E4_F507_41D0_D0A7FE4EA102",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20240413_104630_00_merged",
 "id": "panorama_D2449E7A_D95E_69E5_41E7_97426A243776",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -71.32,
   "yaw": 111.63,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7"
  },
  {
   "backwardYaw": -148.34,
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
 "thumbnailUrl": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D2449E7A_D95E_69E5_41E7_97426A243776_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -41.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8C739A22_D9E4_F701_41DC_5C7F440808FE",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -83.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8867B632_D9E4_FF01_41E2_A0027425F985",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 31.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9CE21C2C_D9E4_F301_41C0_98C2639E5124",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20240413_105802_00_merged",
 "id": "panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 166.22,
   "yaw": 90.68,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF"
  },
  {
   "backwardYaw": -126.21,
   "yaw": -104.08,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D7DA0EB8_D9A4_6F01_418B_BE44CB9B7C08",
  "this.overlay_D71DEC6C_D9A5_9301_41AE_3CACB52C2BD8"
 ],
 "thumbnailUrl": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": -117.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8DF5F8EF_D9E4_F31F_41B7_264C863BC3E4",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 168.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8B262797_D9E4_FD0F_41DF_E2A70F4427D2",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D2441443_D95F_992B_41D8_3C1223342761_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -36.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8CA11A0A_D9E4_F701_41E0_039D9B819E22",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 30.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_884D75FE_D9E4_FD01_41C8_CC25CFB5BC6B",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -10.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9CF93C0B_D9E4_F307_41E7_381E0FD97318",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 140.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8B04A777_D9E4_FD0F_41EB_2E9AB3A6210A",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -102.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8CB13A03_D9E4_F707_41E0_A168372172F2",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 53.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8D2DC9C4_D9E4_F501_41D8_A3F88F8CA858",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -132.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8D6B598D_D9E4_F503_41D8_2672D2B0D6DD",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
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
   "panorama": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99",
   "class": "AdjacentPanorama"
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
 "thumbnailUrl": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": -80.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8DC5C8DC_D9E4_F301_41E7_EF9139304BAB",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -96.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8C50FA12_D9E4_F701_41C1_C368A65B636E",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
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
   "backwardYaw": -11.42,
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
 "thumbnailUrl": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "label": "IMG_20240413_102842_00_merged",
 "id": "panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 26.06,
   "yaw": 75.33,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7"
  },
  {
   "backwardYaw": 73.04,
   "yaw": -97.29,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761"
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
   "panorama": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D78A82F8_D952_FEE5_41D3_2B1112925EA4",
  "this.overlay_D6630607_D952_B92B_41BF_FFE8ACDD740B",
  "this.overlay_D6347564_D952_9BED_41E7_76B02ABBDD1A",
  "this.overlay_D6E8E5D5_D952_7B2F_41E5_AC21C7E9F5DF",
  "this.overlay_D7A0E7F9_D953_E6E7_41DA_DD85D3811992",
  "this.overlay_D79C1932_D953_AB65_41E9_A9827A2E69E4"
 ],
 "thumbnailUrl": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "label": "IMG_20240413_105307_00_merged",
 "id": "panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 143.5,
   "yaw": -88.44,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860"
  },
  {
   "backwardYaw": 115.47,
   "yaw": 77.7,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D7FC3418_D9A4_9301_41E9_4520FC82E8DE",
  "this.overlay_D70EEE5F_D9A4_6F3E_41CB_780294E06498"
 ],
 "thumbnailUrl": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D2448E90_D95F_A925_41E8_B306937D2F35_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
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
   "yaw": 122.55,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F"
  },
  {
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 87.14,
   "yaw": -140.37,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D275C425_D95F_F96F_41DB_79786819224B"
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
  "this.overlay_C9E6384D_D973_A93F_41D0_06FCD3415B1E"
 ],
 "thumbnailUrl": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 18.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8BA1870F_D9E4_FD1F_41A1_39DEF2D24F09",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
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
   "yaw": 106.32,
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
 "thumbnailUrl": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 14.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8F862A7A_D9E4_F701_41D4_5AFC9E3DA96D",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 142.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8C054A3A_D9E4_F701_41C8_B4D9F7E1D779",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -151.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8AE8E7DA_D9E4_FD01_41E5_F6E206407349",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 172.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8AC6F7BB_D9E4_FD07_41DC_CB0EA838A783",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -13.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8D3A29BB_D9E4_F507_41E6_6195435696AB",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -158.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8D973915_D9E4_F503_41E2_6D2CF6CE4E7B",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20240413_103314_00_merged",
 "id": "panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 122.55,
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
 "thumbnailUrl": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": -133.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8FC73A59_D9E4_F703_41D6_B051F5A2F4EF",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 119.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8C32BA41_D9E4_F703_41CE_5A23C42E7491",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -17.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8DD2D8CE_D9E4_F301_41B0_243FFC65EF0F",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -165.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8ABC480B_D9E4_F307_41E2_FFBC2D32D5D0",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 149.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8DA63948_D9E4_F501_41D1_AFED767EBE08",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20240413_102914_00_merged",
 "id": "panorama_D2441443_D95F_992B_41D8_3C1223342761",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 28.71,
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
   "backwardYaw": -97.29,
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
 "thumbnailUrl": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -65.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9CF28C14_D9E4_F301_41D4_D8E96D218BA6",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20240413_103110_00_merged",
 "id": "panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3",
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
   "backwardYaw": -98.17,
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
 "thumbnailUrl": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 74.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8A710861_D9E4_F303_41C9_A3C815555DB2",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
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
 "thumbnailUrl": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "label": "IMG_20240413_103559_00_merged",
 "id": "panorama_D275C425_D95F_F96F_41DB_79786819224B",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -140.37,
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
 "thumbnailUrl": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
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
 "thumbnailUrl": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
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
   "media": "this.panorama_D243391C_D95E_6B5D_41E1_EE016578AF38",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D243391C_D95E_6B5D_41E1_EE016578AF38_camera"
  },
  {
   "media": "this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_camera"
  },
  {
   "media": "this.panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_camera"
  },
  {
   "media": "this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_camera"
  },
  {
   "media": "this.panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_camera"
  },
  {
   "media": "this.panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_camera"
  },
  {
   "media": "this.panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_camera"
  },
  {
   "media": "this.panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_camera"
  },
  {
   "media": "this.panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_camera"
  },
  {
   "media": "this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_camera"
  },
  {
   "media": "this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_camera"
  },
  {
   "media": "this.panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_camera"
  },
  {
   "media": "this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_camera"
  },
  {
   "media": "this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_camera"
  },
  {
   "media": "this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
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
 "thumbnailUrl": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
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
 "thumbnailUrl": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "label": "IMG_20240413_102434_00_merged",
 "id": "panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 62.94,
   "yaw": -81.06,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB"
  },
  {
   "backwardYaw": 121.66,
   "yaw": 14.55,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7"
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
 "thumbnailUrl": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
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
 "thumbnailUrl": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": -84.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8BBE36F0_D9E4_FF01_41E4_35E119DE1017",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
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
 "thumbnailUrl": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
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
 "thumbnailUrl": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": -125.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_88425611_D9E4_FF03_41CD_6662B7587081",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -68.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8A8A67FE_D9E4_FD01_41CD_B8F56F724319",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
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
 "thumbnailUrl": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
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
   "media": "this.panorama_D243391C_D95E_6B5D_41E1_EE016578AF38",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D243391C_D95E_6B5D_41E1_EE016578AF38_camera"
  },
  {
   "media": "this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_camera"
  },
  {
   "media": "this.panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_camera"
  },
  {
   "media": "this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_camera"
  },
  {
   "media": "this.panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_camera"
  },
  {
   "media": "this.panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_camera"
  },
  {
   "media": "this.panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_camera"
  },
  {
   "media": "this.panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_camera"
  },
  {
   "media": "this.panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_camera"
  },
  {
   "media": "this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_camera"
  },
  {
   "media": "this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_camera"
  },
  {
   "media": "this.panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_camera"
  },
  {
   "media": "this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_camera"
  },
  {
   "media": "this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_camera"
  },
  {
   "media": "this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 41, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
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
 "thumbnailUrl": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
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
   "yaw": -11.42,
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
 "thumbnailUrl": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
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
 "thumbnailUrl": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
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
   "backwardYaw": 106.32,
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
 "thumbnailUrl": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 82.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8F7B5AA0_D9E4_F701_41DF_703E52F4578D",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -106.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8B73D740_D9E4_FD01_41D4_07CF462938B8",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D2449E7A_D95E_69E5_41E7_97426A243776_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 13.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8FE76A6A_D9E4_F701_41D3_879F00488E24",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -74.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8F4B6A99_D9E4_F703_41E5_8F07F2A41B49",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -31.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8F0D9AB7_D9E4_F70F_41E3_87A8FD28A07B",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
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
 "thumbnailUrl": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": -100.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9CEE9C1C_D9E4_F301_41E4_F4330890958B",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -152.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8A7F884D_D9E4_F302_41E2_572BFA9E11E1",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 117.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8FA99A89_D9E4_F703_41E9_BCEFCE54D0B4",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -104.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8A9A47EC_D9E4_FD01_41D8_0746D3936419",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 9.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8F1A1AB0_D9E4_F701_41E2_826CEC6980CE",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 36.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8FF70A62_D9E4_F701_41B7_F4CE44B1F5F9",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D2749949_D95F_AB27_41E5_D00915CF7477_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -57.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8F96EA71_D9E4_F703_41E2_3329CF9EFFFA",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
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
   "backwardYaw": -151.88,
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
 "thumbnailUrl": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "label": "IMG_20240413_104836_00_merged",
 "id": "panorama_D2719E7B_D95E_69DB_41DA_B678F555831B",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -66.9,
   "yaw": 143.79,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB"
  },
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
 "thumbnailUrl": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "label": "IMG_20240413_103151_00_merged",
 "id": "panorama_D2713441_D95F_B927_41E1_6B8B0A550425",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 90.09,
   "yaw": -95.52,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3"
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
   "panorama": "this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E",
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
   "backwardYaw": -151.3,
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
 "thumbnailUrl": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D275C425_D95F_F96F_41DB_79786819224B_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
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
 "thumbnailUrl": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 98.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8A00B896_D9E4_F30E_41B7_D1AA28167A4C",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
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
 "thumbnailUrl": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 162.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8C9E59EB_D9E4_F507_41CA_FCA07FE1E859",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -158.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8BCA669A_D9E4_FF01_41D3_B9BD082E09F7",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 99.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8A110888_D9E4_F301_41C1_ED030FCB0562",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -58.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8DE5A901_D9E4_F503_41D7_225A6F407A94",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 18.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8CBFB9FB_D9E4_F507_41B9_4341184B416E",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
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
 "thumbnailUrl": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 14.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8C242A49_D9E4_F703_41E3_3ABCDD8632AE",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 98.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8AD6D7A9_D9E4_FD03_41AF_1EAA1878A5D1",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
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
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true
},
{
 "label": "IMG_20240413_104912_00_merged",
 "id": "panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED",
   "class": "AdjacentPanorama"
  },
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
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D73DFF18_D9A5_AD01_41E6_18EA11A7F6FB",
  "this.overlay_D77BF730_D9A5_9D01_41DD_C70BCDBE4625",
  "this.overlay_EEC794E2_D9FB_F301_41DD_810C7E3018F8"
 ],
 "thumbnailUrl": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": -105.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8AF837C8_D9E4_FD01_41E5_DCD5ED43B5BE",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20240413_102735_00_merged",
 "id": "panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 74.45,
   "yaw": 28.71,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761"
  },
  {
   "backwardYaw": 28.42,
   "yaw": -151.88,
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
   "yaw": -71.32,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2449E7A_D95E_69E5_41E7_97426A243776"
  },
  {
   "backwardYaw": 14.55,
   "yaw": 121.66,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC"
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
 "thumbnailUrl": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
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
   },
   "thumbnailUrl": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_t.jpg",
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
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 75.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8BB186FD_D9E4_FF03_41E1_FA5BB12D6506",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 84.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8AAC581D_D9E4_F303_41CA_9F773364DA55",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -153.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8B43C733_D9E4_FD07_41EA_29D52B32B36A",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 28.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8CECE9E3_D9E4_F507_41D3_3983A78B5336",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D277598A_D95F_EB25_41E5_0800136A96D4_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 170.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8CDDE9CB_D9E4_F507_41D4_9956ED7AA9AA",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 140.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8C8E49F3_D9E4_F507_41E8_C074331182B6",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 105.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8DB94935_D9E4_F503_41D4_32A14A4038E9",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 97.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8D49B967_D9E4_F50F_41DC_6FBFDB4060E8",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 8.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8A5DB82E_D9E4_F31E_41D3_CF62078C605A",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -64.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8BDBB687_D9E4_FF0F_41DF_4CA0E7C1FE11",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -36.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8828D675_D9E4_FF03_41E9_394C41E76CA7",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -19.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8BFC56AC_D9E4_FF01_41EB_2EBD4C23FC6E",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -43.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8F6A1AA8_D9E4_F701_41B0_F8C45C85A396",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 91.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8809A656_D9E4_FF01_41E7_039D2CA5FE0F",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -44.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8B651752_D9E4_FD01_41DC_AB3A9D3D09A2",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -12.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8B9CD6CB_D9E4_FF07_41E7_5959A099D4A7",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "paddingBottom": 0,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "verticalAlign": "middle",
 "transparencyActive": true,
 "maxHeight": 58,
 "class": "IconButton",
 "width": 58,
 "paddingLeft": 0,
 "minHeight": 1,
 "height": 58,
 "mode": "toggle",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "propagateClick": true,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "paddingRight": 0,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "transitionDuration": 500,
 "id": "MainViewer",
 "left": 0,
 "toolTipShadowOpacity": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "class": "ViewerArea",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "progressBarBorderRadius": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "width": "100%",
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipOpacity": 0.5,
 "progressBarBorderSize": 6,
 "toolTipFontSize": 13,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "transitionMode": "blending",
 "toolTipShadowSpread": 0,
 "playbackBarHeadBorderRadius": 0,
 "height": "100%",
 "borderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowColor": "#000000",
 "progressRight": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "propagateClick": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadBorderSize": 0,
 "toolTipTextShadowOpacity": 0,
 "progressOpacity": 1,
 "toolTipBorderColor": "#767676",
 "vrPointerSelectionColor": "#FF6600",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingRight": 0,
 "borderRadius": 0,
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "toolTipFontFamily": "Georgia",
 "progressBottom": 55,
 "playbackBarBottom": 5,
 "progressBackgroundColorDirection": "vertical",
 "progressHeight": 6,
 "progressBorderColor": "#FFFFFF",
 "progressBackgroundOpacity": 1,
 "toolTipBorderRadius": 3,
 "playbackBarLeft": 0,
 "playbackBarOpacity": 1,
 "toolTipBackgroundColor": "#000000",
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "minHeight": 50,
 "top": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingBottom": 7,
 "playbackBarHeadHeight": 15,
 "progressBarOpacity": 1,
 "shadow": false,
 "displayTooltipInTouchScreens": true,
 "paddingTop": 0,
 "minWidth": 100,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressLeft": 0,
 "playbackBarHeadWidth": 6,
 "toolTipBorderSize": 1,
 "playbackBarHeight": 10,
 "playbackBarBorderSize": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingTop": 7,
 "playbackBarProgressOpacity": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderSize": 0,
 "progressBorderRadius": 0,
 "playbackBarBackgroundOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarRight": 0,
 "toolTipPaddingLeft": 10,
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderColor": "#0066FF"
},
{
 "paddingBottom": 0,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "0%",
 "class": "Container",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "height": 641,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "data": {
  "name": "--SETTINGS"
 },
 "paddingRight": 0,
 "gap": 10,
 "borderRadius": 0
},
{
 "paddingBottom": 0,
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "0%",
 "class": "Container",
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "bottom": 0,
 "height": 118,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.64,
 "data": {
  "name": "--MENU"
 },
 "paddingRight": 0,
 "gap": 10,
 "borderRadius": 0
},
{
 "paddingBottom": 0,
 "borderRadius": 0,
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "0%",
 "class": "Container",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarWidth": 10,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "data": {
  "name": "--INFO photo"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "visible": false,
 "creationPolicy": "inAdvance"
},
{
 "paddingBottom": 0,
 "borderRadius": 0,
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "0%",
 "class": "Container",
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarWidth": 10,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "data": {
  "name": "--INFO photoalbum"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "visible": false,
 "creationPolicy": "inAdvance"
},
{
 "paddingBottom": 0,
 "borderRadius": 0,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "0%",
 "class": "Container",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarWidth": 10,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "visible": false,
 "creationPolicy": "inAdvance"
},
{
 "paddingBottom": 0,
 "borderRadius": 0,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "0%",
 "class": "Container",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarWidth": 10,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "data": {
  "name": "--LOCATION"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "visible": false,
 "creationPolicy": "inAdvance"
},
{
 "paddingBottom": 0,
 "borderRadius": 0,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "0%",
 "class": "Container",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarWidth": 10,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "data": {
  "name": "--FLOORPLAN"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "visible": false,
 "creationPolicy": "inAdvance"
},
{
 "paddingBottom": 0,
 "borderRadius": 0,
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "0%",
 "class": "Container",
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarWidth": 10,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "visible": false,
 "creationPolicy": "inAdvance"
},
{
 "paddingBottom": 0,
 "borderRadius": 0,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "0%",
 "class": "Container",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarWidth": 10,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "visible": false,
 "creationPolicy": "inAdvance"
},
{
 "paddingBottom": 0,
 "borderRadius": 0,
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "0%",
 "class": "Container",
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarWidth": 10,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "overflow": "scroll",
 "scrollBarColor": "#04A3E1",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "data": {
  "name": "--REALTOR"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "visible": false,
 "creationPolicy": "inAdvance"
},
{
 "paddingBottom": 0,
 "maxWidth": 1258,
 "id": "Image_B44E6FBD_BAA2_0E15_41E1_F18F1E555CBE",
 "left": "0%",
 "verticalAlign": "middle",
 "maxHeight": 953,
 "class": "Image",
 "url": "skin/Image_B44E6FBD_BAA2_0E15_41E1_F18F1E555CBE.png",
 "paddingLeft": 0,
 "top": "0%",
 "minHeight": 1,
 "height": "7.606%",
 "width": "5.398%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "click": "this.openLink('http://NicholasC.JohnLScott.com', '_blank')",
 "propagateClick": false,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image4523"
 },
 "visible": false,
 "paddingRight": 0,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "verticalAlign": "middle",
 "transparencyActive": true,
 "maxHeight": 58,
 "class": "IconButton",
 "width": 58,
 "paddingLeft": 0,
 "minHeight": 1,
 "height": 58,
 "mode": "toggle",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "propagateClick": true,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "paddingRight": 0,
 "borderRadius": 0,
 "cursor": "hand"
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2446447_D95F_992B_41CD_4D904B227F99, this.camera_8F862A7A_D9E4_F701_41D4_5AFC9E3DA96D); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D6513DF7_D972_EAEB_41B3_C4BDC4FC08BD",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E, this.camera_8FF70A62_D9E4_F701_41B7_F4CE44B1F5F9); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7F330D8_D9A4_B301_41CB_C3481DDDA511",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "maps": [
  {
   "hfov": 20.28,
   "yaw": -98.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_1_HS_0_0_0_map.gif",
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
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_88D2B56E_D9E4_FD01_41D1_47C367A178D5",
   "pitch": -17.31,
   "yaw": -98.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.28,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000, this.camera_8A4FC840_D9E4_F302_41B1_F9C239926BD9); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D67A4AF4_D951_AEED_41E0_825659DD4E20",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D6070947_D951_AB2B_41E0_301ABE354E28",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_8A710861_D9E4_F303_41C9_A3C815555DB2); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D787763F_D94E_795C_41D1_F6347CE78809",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "maps": [
  {
   "hfov": 20.64,
   "yaw": -151.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_1_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_88D2456E_D9E4_FD01_41C9_96475681C5C8",
   "pitch": -13.77,
   "yaw": -151.3,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.64,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_8A7F884D_D9E4_F302_41E2_572BFA9E11E1); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D6C826FA_D94E_A6E5_41EA_2D59EAF60750",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C005AB93_D9AF_B507_41D2_FEB12D8B104B",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C, this.camera_8B531721_D9E4_FD03_41E3_FD0B1639D914); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7C8DB83_D9AD_F507_41E4_E82AFF50F7D4",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC, this.camera_8BA1870F_D9E4_FD1F_41A1_39DEF2D24F09); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D735DB2F_D9AD_951F_419A_6A4E0F5375C5",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "maps": [
  {
   "hfov": 21.23,
   "yaw": -148.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_88C15586_D9E4_FD01_41C5_103CC35FFEB0",
   "pitch": 2.17,
   "yaw": -148.34,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.23,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2449E7A_D95E_69E5_41E7_97426A243776, this.camera_8C50FA12_D9E4_F701_41C1_C368A65B636E); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7E97B5C_D9AC_B501_41E4_21E2611AEEDE",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "maps": [
  {
   "hfov": 18.29,
   "yaw": -66.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_88FEE586_D9E4_FD01_41D5_D4012287AB7C",
   "pitch": -30.59,
   "yaw": -66.9,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.29,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B, this.camera_8CA11A0A_D9E4_F701_41E0_039D9B819E22); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7207717_D9AC_9D0F_41E7_577B241C7E02",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED, this.camera_8CB13A03_D9E4_F707_41E0_A168372172F2); this.mainPlayList.set('selectedIndex', 34)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D71AA6F3_D9AC_7F07_41DB_BBC92204CDA4",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000, this.camera_8B9CD6CB_D9E4_FF07_41E7_5959A099D4A7); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D67A10DF_D971_FADB_41E3_44C2E76529A2",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_8BFC56AC_D9E4_FF01_41EB_2EBD4C23FC6E); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D605BDC1_D971_AB27_41E6_178B052D8899",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_8BEC66B9_D9E4_FF03_41DC_3D7EE175FD68); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D6EE1B6D_D971_AFFF_41E3_C8C608512DC2",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D6AFDA0A_D972_6925_41C0_8F44E954973A",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C933F26D_D972_99FF_41E1_4DFC0390945E",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E, this.camera_8B8E76DD_D9E4_FF03_41E3_EB122255AB2C); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F9CF8A01_D9DB_9703_41EB_075F114A2316",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477, this.camera_8C402A1A_D9E4_F701_41E0_CB4BABA767D0); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7F748D5_D9AF_9303_41D3_F96D0874DF84",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7371697_D9AF_FF0F_41E6_360EF1287467",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB, this.camera_9CE21C2C_D9E4_F301_41C0_98C2639E5124); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7245DE8_D9AC_AD02_41C7_B85FB2A695B3",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7, this.camera_9CE8CC24_D9E4_F301_41E5_2B6A32CAC4AA); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D749B9E7_D9AC_950F_41CE_6FF45EC85C10",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF, this.camera_8D3A29BB_D9E4_F507_41E6_6195435696AB); this.mainPlayList.set('selectedIndex', 39)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7DA0EB8_D9A4_6F01_418B_BE44CB9B7C08",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884, this.camera_8D2DC9C4_D9E4_F501_41D8_A3F88F8CA858); this.mainPlayList.set('selectedIndex', 41)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D71DEC6C_D9A5_9301_41AE_3CACB52C2BD8",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D657D805_D973_E92F_41C0_3A6BD0763878",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_8BCA669A_D9E4_FF01_41D3_B9BD082E09F7); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D6115758_D973_A725_41E2_2E3BC7716E7C",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D6D5F4E2_D973_9AE5_41E7_AEB5F99CA11E",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C94DC638_D972_9965_41E0_D698ABED5444",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_FD829770_D9E7_BD01_41D2_654699B58F88",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2448E90_D95F_A925_41E8_B306937D2F35, this.camera_8B157765_D9E4_FD03_41C9_AE615B105794); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7A182C3_D9AC_9707_41D2_BF5DB8D66F78",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0, this.camera_8B262797_D9E4_FD0F_41DF_E2A70F4427D2); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7D0820E_D9AC_B701_41DA_0C0C0440FDAE",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7059272_D9AC_9701_41C0_CA6D80C6B127",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A, this.camera_8B04A777_D9E4_FD0F_41EB_2E9AB3A6210A); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D74E2E3F_D9AC_EF7F_41AC_6F74CF32AFF8",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5, this.camera_8B348784_D9E4_FD01_41D0_AAC6A6310C53); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D6CE016E_D9AC_9501_41E2_E5376BF39190",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7, this.camera_8B43C733_D9E4_FD07_41EA_29D52B32B36A); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D78A82F8_D952_FEE5_41D3_2B1112925EA4",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D6630607_D952_B92B_41BF_FFE8ACDD740B",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A, this.camera_8B651752_D9E4_FD01_41DC_AB3A9D3D09A2); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D6347564_D952_9BED_41E7_76B02ABBDD1A",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "maps": [
  {
   "hfov": 19.26,
   "yaw": -97.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_1_HS_3_0_0_map.gif",
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
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_88D7656D_D9E4_FD03_41B3_8CA85C3E0A0C",
   "pitch": -24.98,
   "yaw": -97.29,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.26,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_8B73D740_D9E4_FD01_41D4_07CF462938B8); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D6E8E5D5_D952_7B2F_41E5_AC21C7E9F5DF",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "maps": [
  {
   "hfov": 21.15,
   "yaw": -133.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_1_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_88D4A56D_D9E4_FD03_41B8_95A52EFB2E9E",
   "pitch": -5.5,
   "yaw": -133.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.15,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7A0E7F9_D953_E6E7_41DA_DD85D3811992",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "maps": [
  {
   "hfov": 21.19,
   "yaw": -41.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_1_HS_5_0_0_map.gif",
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
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_88D4D56D_D9E4_FD03_41C5_6FDB8EEC6B6E",
   "pitch": -4.32,
   "yaw": -41.81,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.19,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D79C1932_D953_AB65_41E9_A9827A2E69E4",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860, this.camera_8828D675_D9E4_FF03_41E9_394C41E76CA7); this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7FC3418_D9A4_9301_41E9_4520FC82E8DE",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB, this.camera_8BDBB687_D9E4_FF0F_41DF_4CA0E7C1FE11); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D70EEE5F_D9A4_6F3E_41CB_780294E06498",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "maps": [
  {
   "hfov": 20.11,
   "yaw": -140.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_88CD6576_D9E4_FD01_41E1_290AD51AD064",
   "pitch": -18.78,
   "yaw": -140.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.11,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D275C425_D95F_F96F_41DB_79786819224B, this.camera_8C63CA29_D9E4_F703_41CB_FC7DAA8784E1); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7863C12_D972_A924_41E9_BDC17BCE853A",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E, this.camera_8C13CA31_D9E4_F703_41DC_921527301440); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D62E2B48_D972_AF25_41C5_8E694E16873E",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "maps": [
  {
   "hfov": 21.1,
   "yaw": 122.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_88CAC576_D9E4_FD01_41E8_C31DEB633E1F",
   "pitch": -6.68,
   "yaw": 122.55,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.1,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F, this.camera_8C739A22_D9E4_F701_41DC_5C7F440808FE); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D6169AE1_D972_6EE7_41BC_4CEBCDF72019",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D6CB9842_D972_6924_41E4_C607C53C66B6",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "maps": [
  {
   "hfov": 21.24,
   "yaw": -5.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_1_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_88CB957B_D9E4_FD07_41D9_9D0C51FCFB88",
   "pitch": 0.69,
   "yaw": -5.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.24,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D69F8569_D973_9BE7_41E9_43B356F8C6BF",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C9E6384D_D973_A93F_41D0_06FCD3415B1E",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC, this.camera_8F0D9AB7_D9E4_F70F_41E3_87A8FD28A07B); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7EBE7F6_D9AC_7D01_41D2_39F422A690F8",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "maps": [
  {
   "hfov": 20.91,
   "yaw": 106.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_1_HS_1_0_0_map.gif",
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
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_88C08584_D9E4_FD01_41E5_9131A0E7D2C4",
   "pitch": -10.22,
   "yaw": 106.32,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.91,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC, this.camera_9CF93C0B_D9E4_F307_41E7_381E0FD97318); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D73A4E12_D9AC_AF01_41DD_38FAC2CD0AE2",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877, this.camera_9CF28C14_D9E4_F301_41D4_D8E96D218BA6); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D70ADA04_D9AD_B701_41C5_73A874528543",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2446447_D95F_992B_41CD_4D904B227F99, this.camera_8F96EA71_D9E4_F703_41E2_3329CF9EFFFA); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D645508F_D972_993B_41C5_F18245B8B18F",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D277598A_D95F_EB25_41E5_0800136A96D4, this.camera_8FA99A89_D9E4_F703_41E9_BCEFCE54D0B4); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D65B94FB_D952_9ADB_41EB_0205D9A243A6",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000, this.camera_8F5B5A91_D9E4_F703_41D7_8B4175201D57); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D663F4B7_D952_B96B_41E3_B6EED08594D2",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB, this.camera_8F6A1AA8_D9E4_F701_41B0_F8C45C85A396); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D6022F78_D952_A7E5_41E0_E5F6305AA0F2",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D6903940_D952_EB25_41C2_1F60FBF9EB10",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C9E6996C_D952_6BFD_41C9_9BCF5BB30E27",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A, this.camera_8F4B6A99_D9E4_F703_41E5_8F07F2A41B49); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7A6891B_D951_AB5B_41E2_6BC17E48EE4A",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7, this.camera_8FB9DA81_D9E4_F703_41C7_2BB1BA23D770); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D69F1082_D951_9925_41C8_D143118029FD",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E, this.camera_8F7B5AA0_D9E4_F701_41DF_703E52F4578D); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F94107B3_D9DC_9D07_4174_6CD9E2EEE2F4",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A, this.camera_88425611_D9E4_FF03_41CD_6662B7587081); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D64FD51E_D94E_9B5D_41E1_F7C14C7B25F9",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB, this.camera_8874561F_D9E4_FF3F_4193_2561E189B00C); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D62E9350_D94E_9F25_41E5_2FDB4C31578C",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D6C593F1_D94E_7EE7_41E4_662283B1403D",
 "data": {
  "label": "Arrow 04c"
 }
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
 "rollOverDisplay": false,
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 36)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C9E9798A_D94F_EB25_41DC_DF812478C79A",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C34580D1_D9AB_F303_41E2_B8DCC210075C",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_884D75FE_D9E4_FD01_41C8_CC25CFB5BC6B); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C5B58AFD_D9A4_B703_41E4_BB6AAE4BCEEB",
 "data": {
  "label": "Arrow 04c"
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D6668017_D956_992B_41A1_DF3FFFDCF50C",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB, this.camera_8CBFB9FB_D9E4_F507_41B9_4341184B416E); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D6F1AC0F_D956_A93B_41E0_64849DD7D4E1",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2446447_D95F_992B_41CD_4D904B227F99, this.camera_8D871923_D9E4_F507_41D0_D0A7FE4EA102); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D660D206_D972_B92D_41E4_4CFD8D0736EB",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84, this.camera_8BB186FD_D9E4_FF03_41E1_FA5BB12D6506); this.mainPlayList.set('selectedIndex', 40)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7F37C3F_D9A5_B37F_41E9_FAC205C365C1",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF, this.camera_8BBE36F0_D9E4_FF01_41E4_35E119DE1017); this.mainPlayList.set('selectedIndex', 39)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7026F2F_D9A5_ED1F_41EA_B864AE1A82DC",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9BFAC175_D9EC_9503_41D6_7B5EA288EF43",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477, this.camera_8DC5C8DC_D9E4_F301_41E7_EF9139304BAB); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D794B279_D9AF_B703_41DC_9EA09BCC4236",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2, this.camera_8DD2D8CE_D9E4_F301_41B0_243FFC65EF0F); this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7F51DEF_D9A7_AD1F_41E6_C8B6A932CB2F",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3, this.camera_8A2238BC_D9E4_F301_41D4_C12CC0E8C9A8); this.mainPlayList.set('selectedIndex', 36)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D71E7356_D9A4_7501_41CA_A2BA3B99B99F",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7767F64_D9A4_6D01_41EB_2DB637C28DFB",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_8A3358A8_D9E4_F303_41D9_0163C10A4A89); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_989C8B4B_D9EC_9506_41D8_67523E91CB46",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB, this.camera_8DF5F8EF_D9E4_F31F_41B7_264C863BC3E4); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D683BA7A_D957_A9E5_41CB_54043F41C19D",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7, this.camera_8DE5A901_D9E4_F503_41D7_225A6F407A94); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7E0A16E_D957_FBFD_41C5_506B1B599A70",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF, this.camera_8D973915_D9E4_F503_41E2_6D2CF6CE4E7B); this.mainPlayList.set('selectedIndex', 39)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D63E8956_D957_AB2D_41CA_B191E2115301",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7FD4D76_D9AC_AD01_41E3_2FE554E21798",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D73B79EE_D9AC_9501_41E0_6CBF92E2DC36",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477, this.camera_8F1A1AB0_D9E4_F701_41E2_826CEC6980CE); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F24ECCB8_D9E4_9301_41EA_94DA5388555B",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF, this.camera_8AC6F7BB_D9E4_FD07_41DC_CB0EA838A783); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7E3FC3F_D956_A95B_41E6_E8D692A00205",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC, this.camera_8AD6D7A9_D9E4_FD03_41AF_1EAA1878A5D1); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D641B5D1_D956_FB27_41EA_5D37729EF2B4",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D72FB31D_D9A4_B502_41DD_F95CC9D963E7",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25, this.camera_8D49B967_D9E4_F50F_41DC_6FBFDB4060E8); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7C790D0_D9A5_B301_41E5_6CDC8471F7A8",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7064A6F_D9A5_B71F_41E0_3F3BD68A4C88",
 "data": {
  "label": "Arrow 04c"
 }
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
 "rollOverDisplay": false,
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C, this.camera_8DB94935_D9E4_F503_41D4_32A14A4038E9); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7535325_D9A4_7503_41E5_690714D6AE13",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33, this.camera_8DA63948_D9E4_F501_41D1_AFED767EBE08); this.mainPlayList.set('selectedIndex', 33)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D6935DE8_D9A4_6D01_41E3_4C1058EC9A36",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B, this.camera_8D59B95A_D9E4_F501_41DD_41C5077590FB); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_E0EDE0BC_D9E7_9301_41E5_DC6B0F61BECF",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_8AAC581D_D9E4_F303_41CA_9F773364DA55); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7CC27B9_D9A7_FD03_41E8_10AADDC84561",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4, this.camera_8A5DB82E_D9E4_F31E_41D3_CF62078C605A); this.mainPlayList.set('selectedIndex', 37)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D71AB6F6_D9A7_9F01_41D5_29CA8A045D1F",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC, this.camera_8C054A3A_D9E4_F701_41C8_B4D9F7E1D779); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7BD4D84_D9AD_ED01_41D4_9A00EE0F90FE",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "maps": [
  {
   "hfov": 21.13,
   "yaw": -11.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_88C7B57D_D9E4_FD03_41E6_37C86CFAEE61",
   "pitch": -6.09,
   "yaw": -11.42,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.13,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477, this.camera_8C32BA41_D9E4_F703_41CE_5A23C42E7491); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F1598A38_D9EF_F701_41EA_5B8BD5EC1788",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4, this.camera_88384663_D9E4_FF07_41E2_01BAC8D4E585); this.mainPlayList.set('selectedIndex', 37)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D72C6C24_D9A4_B301_4192_8AFC474069BF",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D76B0E6C_D9A4_EF01_41BC_FC755ECE9235",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C, this.camera_8CCD39D3_D9E4_F507_41E4_B45562863A9B); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D795B981_D9AC_F503_41E9_A8232F68E34E",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877, this.camera_8CDDE9CB_D9E4_F507_41D4_9956ED7AA9AA); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D72F4B83_D9AC_7506_41B6_B96ED2921098",
 "data": {
  "label": "Arrow 04c"
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC, this.camera_8C242A49_D9E4_F703_41E3_3ABCDD8632AE); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7CDDAF8_D9A4_9701_41E6_CEF66AE7B19C",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84, this.camera_8FD41A51_D9E4_F703_41E0_1D8B21A53D32); this.mainPlayList.set('selectedIndex', 40)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D70A278A_D9A4_BD01_41C6_95ABBEE313C5",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884, this.camera_8FC73A59_D9E4_F703_41D6_B051F5A2F4EF); this.mainPlayList.set('selectedIndex', 41)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D76A440F_D9A4_931F_41EA_A1CBAAEB1D4A",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7, this.camera_8CECE9E3_D9E4_F507_41D3_3983A78B5336); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7E567C4_D9AC_FD01_41B3_3289B38546D0",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0, this.camera_8C8E49F3_D9E4_F507_41E8_C074331182B6); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7137BC5_D9AC_9503_41D7_07C03F2F4CF4",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627, this.camera_8C9E59EB_D9E4_F507_41CA_FCA07FE1E859); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7702493_D9AC_B307_41E9_0F9EBE291DD9",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C, this.camera_8CFC99DC_D9E4_F501_41DC_EB555FB5F669); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D68B67BC_D9AC_9D02_41EA_B56706116FD7",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB, this.camera_8A61C874_D9E4_F301_4198_FB605D2C8C2A); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D781FBA4_D9AB_9501_41E8_65D5A2FAA42E",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E, this.camera_8A00B896_D9E4_F30E_41B7_D1AA28167A4C); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D70FD8CA_D9A4_9301_41C7_6AE0F427CBA8",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D6AC0B36_D9A4_9501_41E7_5010B104B5AC",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D69733B8_D9A4_F501_41D6_2BCCD46635E0",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25, this.camera_8A110888_D9E4_F301_41C1_ED030FCB0562); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D64CCE33_D9A4_AF07_41D4_4902293988A0",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D643BF74_D94F_A7ED_419F_7869859FA013",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB, this.camera_8D0AC9AD_D9E4_F503_41DA_06B300D4181C); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D63A9932_D94E_6B65_41E1_7DB32FC00B7E",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D6D50646_D94E_792D_41D9_28EC467B6D37",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A, this.camera_8D6B598D_D9E4_F503_41D8_2672D2B0D6DD); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D69A35D6_D94E_9B2D_41C6_0F131874907B",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4, this.camera_8D1B499E_D9E4_F501_41D8_34745C5485C6); this.mainPlayList.set('selectedIndex', 37)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C91B68D3_D94E_A92B_41E1_0DC9408B8294",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D781005E_D94E_99DD_41D0_D21E5C32CA59",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3, this.camera_8D79A97A_D9E4_F501_4199_1642F60C7EE3); this.mainPlayList.set('selectedIndex', 36)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7AA6808_D971_A925_41DF_BF8A37505E59",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C68680AE_D9DF_9301_41AC_3E2B30B5606D",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC, this.camera_9CEE9C1C_D9E4_F301_41E4_F4330890958B); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7F1E22E_D9AD_9701_41CB_0B6E77C54741",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E, this.camera_8FE76A6A_D9E4_F701_41D3_879F00488E24); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7EF886B_D9A4_F307_41C4_4C0F08E59D2F",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED, this.camera_8809A656_D9E4_FF01_41E7_039D2CA5FE0F); this.mainPlayList.set('selectedIndex', 34)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7F290E4_D9A7_B301_41D7_75FF0D79E89D",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "paddingBottom": 0,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "verticalAlign": "middle",
 "transparencyActive": true,
 "maxHeight": 58,
 "class": "IconButton",
 "width": 58,
 "paddingLeft": 0,
 "minHeight": 1,
 "height": 58,
 "mode": "toggle",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "propagateClick": true,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "data": {
  "name": "IconButton HS "
 },
 "paddingRight": 0,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "verticalAlign": "middle",
 "transparencyActive": true,
 "maxHeight": 58,
 "class": "IconButton",
 "width": 58,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "height": 58,
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "propagateClick": true,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "data": {
  "name": "IconButton VR"
 },
 "paddingRight": 0,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "maxWidth": 49,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "verticalAlign": "middle",
 "right": 30,
 "transparencyActive": true,
 "maxHeight": 37,
 "class": "IconButton",
 "width": 100,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "bottom": 8,
 "height": 75,
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "propagateClick": true,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "data": {
  "name": "IconButton VR"
 },
 "paddingRight": 0,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "verticalAlign": "middle",
 "transparencyActive": true,
 "maxHeight": 58,
 "class": "IconButton",
 "width": 58,
 "paddingLeft": 0,
 "minHeight": 1,
 "height": 58,
 "mode": "toggle",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "propagateClick": true,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "paddingRight": 0,
 "borderRadius": 0,
 "cursor": "hand"
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E, this.camera_88161644_D9E4_FF01_41E6_06CC6B333437); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D73DFF18_D9A5_AD01_41E6_18EA11A7F6FB",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D77BF730_D9A5_9D01_41DD_C70BCDBE4625",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B, this.camera_8867B632_D9E4_FF01_41E2_A0027425F985); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EEC794E2_D9FB_F301_41DD_810C7E3018F8",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "maps": [
  {
   "hfov": 20.47,
   "yaw": -151.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_88D9A56C_D9E4_FD01_41DD_CA7D7B3B2D79",
   "pitch": -15.54,
   "yaw": -151.88,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.47,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC, this.camera_8AE8E7DA_D9E4_FD01_41E5_F6E206407349); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7985B88_D956_6F25_41CF_7F0AA858E1AF",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "maps": [
  {
   "hfov": 18.97,
   "yaw": -71.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_88D9356C_D9E4_FD01_41EB_0895E9B6093A",
   "pitch": -26.75,
   "yaw": -71.32,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.97,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2449E7A_D95E_69E5_41E7_97426A243776, this.camera_8A8A67FE_D9E4_FD01_41CD_B8F56F724319); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D64A0F8B_D951_A73B_41DC_62A8B050A941",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E, this.camera_8A9A47EC_D9E4_FD01_41D8_0746D3936419); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D663B013_D951_992B_41E4_481907942BA0",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "maps": [
  {
   "hfov": 19.17,
   "yaw": 121.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_1_HS_3_0_0_map.gif",
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
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_88D6956C_D9E4_FD01_41A2_8F2511FFF6E0",
   "pitch": -25.57,
   "yaw": 121.66,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.17,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC, this.camera_8ABC480B_D9E4_F307_41E2_FFBC2D32D5D0); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D6FABBAC_D951_EF7C_41C0_E94B5DE51B2B",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "maps": [
  {
   "hfov": 20.69,
   "yaw": 28.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_1_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_88D6D56C_D9E4_FD01_41D6_B09943A5E68A",
   "pitch": -13.18,
   "yaw": 28.71,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.69,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_8AF837C8_D9E4_FD01_41E5_DCD5ED43B5BE); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C91D87D1_D951_A727_41E8_54124820CB77",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "paddingBottom": 0,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "right": "0%",
 "class": "Container",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "height": 110,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "layout": "horizontal",
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "data": {
  "name": "button menu sup"
 },
 "paddingRight": 0,
 "gap": 10,
 "borderRadius": 0
},
{
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "0%",
 "class": "Container",
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
 "paddingLeft": 0,
 "minHeight": 1,
 "bottom": "0%",
 "height": "85.959%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "layout": "vertical",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "data": {
  "name": "-button set"
 },
 "visible": false,
 "paddingRight": 0,
 "gap": 3,
 "borderRadius": 0
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
 "paddingLeft": 0,
 "minHeight": 1,
 "bottom": 53,
 "height": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "propagateClick": true,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "white line"
 },
 "paddingRight": 0,
 "borderRadius": 0
},
{
 "paddingBottom": 0,
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "width": 1199,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "class": "Container",
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
  "this.Button_1B9A3D00_16C4_0505_41B2_6830155B7D52"
 ],
 "paddingLeft": 30,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "bottom": "0%",
 "height": 51,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "layout": "horizontal",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "data": {
  "name": "-button set container"
 },
 "paddingRight": 0,
 "gap": 3,
 "borderRadius": 0
},
{
 "shadowHorizontalLength": 0,
 "paddingBottom": 0,
 "shadowSpread": 1,
 "borderRadius": 0,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadowColor": "#000000",
 "right": "10%",
 "class": "Container",
 "verticalAlign": "top",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarWidth": 10,
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "layout": "horizontal",
 "shadowOpacity": 0.3,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10
},
{
 "paddingBottom": 0,
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "10%",
 "class": "Container",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "bottom": "80%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "layout": "vertical",
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "data": {
  "name": "Container X global"
 },
 "paddingRight": 20,
 "gap": 10,
 "borderRadius": 0
},
{
 "shadowHorizontalLength": 0,
 "paddingBottom": 0,
 "shadowSpread": 1,
 "borderRadius": 0,
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadowColor": "#000000",
 "right": "10%",
 "class": "Container",
 "verticalAlign": "top",
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarWidth": 10,
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "layout": "horizontal",
 "shadowOpacity": 0.3,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10
},
{
 "paddingBottom": 0,
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "10%",
 "class": "Container",
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "bottom": "80%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "layout": "vertical",
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "data": {
  "name": "Container X global"
 },
 "paddingRight": 20,
 "gap": 10,
 "borderRadius": 0
},
{
 "shadowHorizontalLength": 0,
 "paddingBottom": 0,
 "shadowSpread": 1,
 "borderRadius": 0,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadowColor": "#000000",
 "right": "15%",
 "class": "Container",
 "verticalAlign": "top",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "scrollBarWidth": 10,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "layout": "vertical",
 "shadowOpacity": 0.3,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10
},
{
 "shadowHorizontalLength": 0,
 "paddingBottom": 0,
 "shadowSpread": 1,
 "borderRadius": 0,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadowColor": "#000000",
 "right": "10%",
 "class": "Container",
 "verticalAlign": "top",
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarWidth": 10,
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "layout": "horizontal",
 "shadowOpacity": 0.3,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10
},
{
 "paddingBottom": 0,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "10%",
 "class": "Container",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "bottom": "80%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "layout": "vertical",
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "data": {
  "name": "Container X global"
 },
 "paddingRight": 20,
 "gap": 10,
 "borderRadius": 0
},
{
 "shadowHorizontalLength": 0,
 "paddingBottom": 0,
 "shadowSpread": 1,
 "borderRadius": 0,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadowColor": "#000000",
 "right": "15%",
 "class": "Container",
 "verticalAlign": "top",
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "scrollBarWidth": 10,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "layout": "vertical",
 "shadowOpacity": 0.3,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10
},
{
 "shadowHorizontalLength": 0,
 "paddingBottom": 0,
 "shadowSpread": 1,
 "borderRadius": 0,
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadowColor": "#000000",
 "right": "15%",
 "class": "Container",
 "verticalAlign": "top",
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "scrollBarWidth": 10,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "layout": "vertical",
 "shadowOpacity": 0.3,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10
},
{
 "shadowHorizontalLength": 0,
 "paddingBottom": 0,
 "shadowSpread": 1,
 "borderRadius": 0,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadowColor": "#000000",
 "right": "15%",
 "class": "Container",
 "verticalAlign": "top",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "scrollBarWidth": 10,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "layout": "vertical",
 "shadowOpacity": 0.3,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10
},
{
 "shadowHorizontalLength": 0,
 "paddingBottom": 0,
 "shadowSpread": 1,
 "borderRadius": 0,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadowColor": "#000000",
 "right": "10%",
 "class": "Container",
 "verticalAlign": "top",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarWidth": 10,
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "layout": "horizontal",
 "shadowOpacity": 0.3,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10
},
{
 "paddingBottom": 0,
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "10%",
 "class": "Container",
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "bottom": "80%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "layout": "vertical",
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "data": {
  "name": "Container X global"
 },
 "paddingRight": 20,
 "gap": 10,
 "borderRadius": 0
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F6D58E_D9E4_FD01_41C5_AFD70CA79EAF",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D2B56E_D9E4_FD01_41D1_47C367A178D5",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D2256E_D9E4_FD01_41E8_A6BE2F15EC49",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D2456E_D9E4_FD01_41C9_96475681C5C8",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_1_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D3856E_D9E4_FD1A_41E9_A239707DE4A2",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C15586_D9E4_FD01_41C5_103CC35FFEB0",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88FEE586_D9E4_FD01_41D5_D4012287AB7C",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CFC575_D9E4_FD03_41E9_6596023FB8BE",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CF6575_D9E4_FD03_41DD_F01C4E140137",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_1_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CC0576_D9E4_FD01_41A2_6C7ECFC8F5A1",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C3B57F_D9E4_FDFF_41C5_9532A48FA81A",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CB657C_D9E4_FD01_41BF_AB59A5BCDA8F",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_1_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C9857C_D9E4_FD01_41C7_B3E8FAB38926",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C7C57D_D9E4_FD03_41EA_0161199AC32A",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C4857E_D9E4_FD01_41B4_8E47B14FA85E",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C4357E_D9E4_FD01_41BF_F40283F99714",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_1_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C4557E_D9E4_FD01_41CA_2C6A9C0EEDC7",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D6756C_D9E4_FD01_41BE_D9813FB9282F",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D7A56C_D9E4_FD01_41C8_FF0F05778E96",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D7C56C_D9E4_FD01_41D8_0943BF4F3533",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D7656D_D9E4_FD03_41B3_8CA85C3E0A0C",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_1_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D4A56D_D9E4_FD03_41B8_95A52EFB2E9E",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_1_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D4D56D_D9E4_FD03_41C5_6FDB8EEC6B6E",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CD6576_D9E4_FD01_41E1_290AD51AD064",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CAC576_D9E4_FD01_41E8_C31DEB633E1F",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_1_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CB957B_D9E4_FD07_41D9_9D0C51FCFB88",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C08584_D9E4_FD01_41E5_9131A0E7D2C4",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D4756D_D9E4_FD03_41E5_E87EC5F73464",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D5A56D_D9E4_FD03_41D9_AF0CF268745E",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D5C56D_D9E4_FD03_41CE_F21D18EFC47B",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D4F56D_D9E4_FD03_41E9_5896E9884066",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_1_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D4756D_D9E4_FD03_41E3_B4E2530C3E95",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_1_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D5B56D_D9E4_FD03_41D6_8F1BB70236BA",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_1_HS_6_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D5D56E_D9E4_FD01_41B9_50E25B2CE59A",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_1_HS_7_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D5056E_D9E4_FD01_41E0_76F0E707D1D6",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88DB556B_D9E4_FD07_41E0_180769246820",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D8856B_D9E4_FD07_41E7_856D250C041B",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C9457C_D9E4_FD01_41E7_922995C00D45",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F0D596_D9E4_FD01_41E7_1FD2A1C54484",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F04596_D9E4_FD01_41DD_6661039A696D",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F1D596_D9E4_FD01_41E6_AAECDAFB2AFC",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88DA2565_D9E4_FD03_41E5_835FEC2D3BC6",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88DB9566_D9E4_FD01_41BD_001F7535A52A",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C5D57E_D9E4_FD01_4186_097CA2C95754",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C5757E_D9E4_FD01_41D7_AA9C134A0F7C",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D8756B_D9E4_FD07_41E5_AC3D31EC92E4",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F9C58D_D9E4_FD03_41E3_2DA241D09582",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88FA658C_D9E4_FD01_41EA_9F6ACFDE4149",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88FBD58D_D9E4_FD03_41E5_4848982341AC",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88FB558D_D9E4_FD03_41E5_D0DAA7FFF397",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F8958D_D9E4_FD03_41B0_953788F3589A",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_1_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F8358D_D9E4_FD03_41B3_0776E2A92E05",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_1_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F9B58D_D9E4_FD03_41D9_1D3E0193D8D3",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F7A58F_D9E4_FD1F_41E4_D26CCBB1A144",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88C7B57D_D9E4_FD03_41E6_37C86CFAEE61",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F2A590_D9E4_FD01_41E1_B233FF064BB8",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F2D590_D9E4_FD01_41E7_C8A2BE525DD4",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F24595_D9E4_FD03_41E1_5F76F8975E43",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CEA574_D9E4_FD01_41D1_E55BCDCED8C3",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CED574_D9E4_FD01_41D6_77C978756C93",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CE0574_D9E4_FD01_41EA_BC14F1B284B8",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CE4575_D9E4_FD03_41E0_9EA16633E4D4",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_1_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CFE575_D9E4_FD03_41E0_3035025F1414",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_1_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CF6575_D9E4_FD03_41D5_FBCCDE7FFE61",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_1_HS_6_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88CC8575_D9E4_FD03_41B1_9B1DCD5877A0",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88F9458D_D9E4_FD03_41E0_CD9BCA72D52D",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88FD5587_D9E4_FD0F_41E4_87387779DE15",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D9A56C_D9E4_FD01_41DD_CA7D7B3B2D79",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D9356C_D9E4_FD01_41EB_0895E9B6093A",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D9656C_D9E4_FD01_41E0_1B785D57E945",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D6956C_D9E4_FD01_41A2_8F2511FFF6E0",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_1_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_88D6D56C_D9E4_FD01_41D6_B09943A5E68A",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "verticalAlign": "middle",
 "transparencyActive": true,
 "maxHeight": 60,
 "class": "IconButton",
 "width": 60,
 "paddingLeft": 0,
 "minHeight": 1,
 "height": 60,
 "mode": "toggle",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "propagateClick": true,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "data": {
  "name": "image button menu"
 },
 "paddingRight": 0,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "verticalAlign": "middle",
 "transparencyActive": true,
 "maxHeight": 58,
 "class": "IconButton",
 "width": 58,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "height": 58,
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "click": "this.shareTwitter(window.location.href)",
 "propagateClick": true,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "data": {
  "name": "IconButton TWITTER"
 },
 "visible": false,
 "paddingRight": 0,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "verticalAlign": "middle",
 "transparencyActive": true,
 "maxHeight": 58,
 "class": "IconButton",
 "width": 58,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "height": 58,
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "click": "this.shareFacebook(window.location.href)",
 "propagateClick": true,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "data": {
  "name": "IconButton FB"
 },
 "visible": false,
 "paddingRight": 0,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "backgroundColorRatios": [
  0
 ],
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "backgroundColorDirection": "vertical",
 "width": 120,
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Montserrat",
 "iconHeight": 0,
 "class": "Button",
 "rollOverShadow": false,
 "shadowColor": "#000000",
 "paddingLeft": 0,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "minHeight": 1,
 "height": 40,
 "mode": "push",
 "shadow": false,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "fontSize": 12,
 "label": "HOUSE INFO",
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "layout": "horizontal",
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "data": {
  "name": "Button house info"
 },
 "textDecoration": "none",
 "visible": false,
 "paddingRight": 0,
 "gap": 5,
 "iconWidth": 0,
 "shadowBlurRadius": 15,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontWeight": "bold",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ]
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "backgroundColorDirection": "vertical",
 "width": 130,
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Montserrat",
 "iconHeight": 32,
 "class": "Button",
 "shadowColor": "#000000",
 "paddingLeft": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "minHeight": 1,
 "height": 40,
 "mode": "push",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "fontSize": 12,
 "label": "PANORAMA LIST",
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "layout": "horizontal",
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "data": {
  "name": "Button panorama list"
 },
 "textDecoration": "none",
 "paddingRight": 0,
 "gap": 5,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontWeight": "bold",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ]
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "backgroundColorDirection": "vertical",
 "width": 90,
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Montserrat",
 "iconHeight": 32,
 "class": "Button",
 "shadowColor": "#000000",
 "paddingLeft": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "minHeight": 1,
 "height": 40,
 "mode": "push",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "fontSize": 12,
 "label": "LOCATION",
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "layout": "horizontal",
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "data": {
  "name": "Button location"
 },
 "textDecoration": "none",
 "paddingRight": 0,
 "gap": 5,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontWeight": "bold",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ]
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "backgroundColorDirection": "vertical",
 "width": 103,
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Montserrat",
 "iconHeight": 32,
 "class": "Button",
 "shadowColor": "#000000",
 "paddingLeft": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "minHeight": 1,
 "height": 40,
 "mode": "push",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "fontSize": 12,
 "label": "FLOORPLAN",
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "layout": "horizontal",
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "data": {
  "name": "Button floorplan"
 },
 "textDecoration": "none",
 "visible": false,
 "paddingRight": 0,
 "gap": 5,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontWeight": "bold",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ]
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "backgroundColorDirection": "vertical",
 "width": 112,
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Montserrat",
 "iconHeight": 32,
 "class": "Button",
 "shadowColor": "#000000",
 "paddingLeft": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "minHeight": 1,
 "height": 40,
 "mode": "push",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "fontSize": 12,
 "label": "PHOTOALBUM",
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "layout": "horizontal",
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "data": {
  "name": "Button photoalbum"
 },
 "textDecoration": "none",
 "visible": false,
 "paddingRight": 0,
 "gap": 5,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontWeight": "bold",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ]
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "id": "Button_1B9A3D00_16C4_0505_41B2_6830155B7D52",
 "backgroundColorDirection": "vertical",
 "width": 90,
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Montserrat",
 "iconHeight": 32,
 "class": "Button",
 "shadowColor": "#000000",
 "paddingLeft": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "minHeight": 1,
 "height": 40,
 "mode": "push",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "fontSize": 12,
 "label": "REALTOR",
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "layout": "horizontal",
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "data": {
  "name": "Button realtor"
 },
 "textDecoration": "none",
 "visible": false,
 "paddingRight": 0,
 "gap": 5,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontWeight": "bold",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ]
},
{
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "class": "Container",
 "width": "85%",
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "data": {
  "name": "-left"
 },
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "gap": 10,
 "borderRadius": 0
},
{
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "width": "50%",
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "minHeight": 1,
 "paddingLeft": 50,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 460,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.51,
 "layout": "vertical",
 "overflow": "visible",
 "scrollBarColor": "#0069A3",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "data": {
  "name": "-right"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 50,
 "gap": 0,
 "borderRadius": 0
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "verticalAlign": "middle",
 "transparencyActive": false,
 "maxHeight": 60,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "paddingLeft": 0,
 "minHeight": 50,
 "height": "75%",
 "width": "25%",
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 50,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "propagateClick": false,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "data": {
  "name": "X"
 },
 "paddingRight": 0,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "class": "Container",
 "width": "85%",
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "data": {
  "name": "-left"
 },
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "gap": 10,
 "borderRadius": 0
},
{
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "width": "50%",
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "minHeight": 1,
 "paddingLeft": 50,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 460,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.51,
 "layout": "vertical",
 "overflow": "visible",
 "scrollBarColor": "#0069A3",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "data": {
  "name": "-right"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 50,
 "gap": 0,
 "borderRadius": 0
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "verticalAlign": "middle",
 "transparencyActive": false,
 "maxHeight": 60,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "paddingLeft": 0,
 "minHeight": 50,
 "height": "75%",
 "width": "25%",
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 50,
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "propagateClick": false,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "data": {
  "name": "X"
 },
 "paddingRight": 0,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "width": "100%",
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 140,
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "data": {
  "name": "header"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "borderRadius": 0
},
{
 "paddingBottom": 70,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "verticalAlign": "middle",
 "itemThumbnailScaleMode": "fit_outside",
 "itemThumbnailWidth": 220,
 "class": "ThumbnailGrid",
 "itemPaddingLeft": 3,
 "width": "100%",
 "itemMaxWidth": 1000,
 "scrollBarWidth": 10,
 "paddingLeft": 70,
 "itemPaddingRight": 3,
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "backgroundColor": [
  "#000000"
 ],
 "selectedItemLabelFontColor": "#04A3E1",
 "itemPaddingTop": 3,
 "rollOverItemThumbnailShadow": true,
 "itemLabelPosition": "bottom",
 "borderSize": 0,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "scrollBarOpacity": 0.5,
 "itemThumbnailShadow": false,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemLabelFontColor": "#666666",
 "itemLabelGap": 7,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "selectedItemThumbnailShadow": true,
 "itemBackgroundColorRatios": [],
 "itemOpacity": 1,
 "backgroundOpacity": 0.05,
 "paddingRight": 70,
 "itemBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "itemThumbnailBorderRadius": 0,
 "itemMinHeight": 50,
 "itemLabelFontWeight": "normal",
 "rollOverItemLabelFontColor": "#04A3E1",
 "backgroundColorDirection": "vertical",
 "itemHorizontalAlign": "center",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemMode": "normal",
 "selectedItemLabelFontWeight": "bold",
 "itemMaxHeight": 1000,
 "itemMinWidth": 50,
 "minHeight": 1,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemPaddingBottom": 3,
 "itemWidth": 220,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 10,
 "minWidth": 1,
 "itemLabelFontSize": 14,
 "itemLabelFontFamily": "Montserrat",
 "itemHeight": 156,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "itemThumbnailHeight": 125,
 "itemLabelFontStyle": "normal",
 "scrollBarColor": "#04A3E1",
 "itemBorderRadius": 0,
 "horizontalAlign": "center",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "data": {
  "name": "ThumbnailList"
 },
 "gap": 26,
 "backgroundColorRatios": [
  0
 ],
 "itemLabelHorizontalAlign": "center",
 "itemVerticalAlign": "top"
},
{
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "class": "Container",
 "width": "85%",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "data": {
  "name": "-left"
 },
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "gap": 10,
 "borderRadius": 0
},
{
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "width": "15%",
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "minHeight": 1,
 "paddingLeft": 50,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 400,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.51,
 "layout": "vertical",
 "overflow": "visible",
 "scrollBarColor": "#0069A3",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "data": {
  "name": "-right"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 50,
 "gap": 0,
 "borderRadius": 0
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "verticalAlign": "middle",
 "transparencyActive": false,
 "maxHeight": 60,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "paddingLeft": 0,
 "minHeight": 50,
 "height": "75%",
 "width": "25%",
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 50,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "propagateClick": false,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "data": {
  "name": "X"
 },
 "paddingRight": 0,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "width": "100%",
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 140,
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "data": {
  "name": "header"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "borderRadius": 0
},
{
 "paddingBottom": 0,
 "transitionDuration": 500,
 "id": "MapViewer",
 "toolTipDisplayTime": 600,
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "class": "ViewerArea",
 "progressBarBorderSize": 6,
 "playbackBarHeadOpacity": 1,
 "progressBarBorderRadius": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "width": "100%",
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "transitionMode": "blending",
 "toolTipShadowSpread": 0,
 "playbackBarHeadBorderRadius": 0,
 "height": "100%",
 "borderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowColor": "#000000",
 "progressRight": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "propagateClick": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadBorderSize": 0,
 "toolTipTextShadowOpacity": 0,
 "progressOpacity": 1,
 "toolTipBorderColor": "#767676",
 "vrPointerSelectionColor": "#FF6600",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingRight": 0,
 "borderRadius": 0,
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "toolTipFontFamily": "Arial",
 "progressBottom": 2,
 "playbackBarBottom": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressHeight": 6,
 "progressBorderColor": "#FFFFFF",
 "progressBackgroundOpacity": 1,
 "toolTipBorderRadius": 3,
 "playbackBarLeft": 0,
 "playbackBarOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontColor": "#606060",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "minHeight": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "playbackBarHeadHeight": 15,
 "progressBarOpacity": 1,
 "shadow": false,
 "displayTooltipInTouchScreens": true,
 "paddingTop": 0,
 "minWidth": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "playbackBarHeadWidth": 6,
 "toolTipBorderSize": 1,
 "playbackBarHeight": 10,
 "playbackBarBorderSize": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingTop": 4,
 "playbackBarProgressOpacity": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderSize": 0,
 "progressBorderRadius": 0,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipTextShadowColor": "#000000",
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderColor": "#0066FF"
},
{
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "width": "100%",
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 140,
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "data": {
  "name": "header"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "borderRadius": 0
},
{
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "width": "100%",
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "data": {
  "name": "Container photo"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "borderRadius": 0
},
{
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "width": "100%",
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "data": {
  "name": "Container photo"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "borderRadius": 0
},
{
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "class": "Container",
 "width": "55%",
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "data": {
  "name": "-left"
 },
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "gap": 10,
 "borderRadius": 0
},
{
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "width": "45%",
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "minHeight": 1,
 "paddingLeft": 60,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 460,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.51,
 "layout": "vertical",
 "overflow": "visible",
 "scrollBarColor": "#0069A3",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "data": {
  "name": "-right"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 60,
 "gap": 0,
 "borderRadius": 0
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "verticalAlign": "middle",
 "transparencyActive": false,
 "maxHeight": 60,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "paddingLeft": 0,
 "minHeight": 50,
 "height": "75%",
 "width": "25%",
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 50,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "propagateClick": false,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "data": {
  "name": "X"
 },
 "paddingRight": 0,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "verticalAlign": "middle",
 "maxHeight": 1000,
 "class": "Image",
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "paddingLeft": 0,
 "top": "0%",
 "minHeight": 1,
 "height": "100%",
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "propagateClick": false,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "paddingRight": 0,
 "borderRadius": 0
},
{
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "width": "100%",
 "minHeight": 0,
 "paddingLeft": 0,
 "height": 60,
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "layout": "horizontal",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "backgroundOpacity": 0.3,
 "data": {
  "name": "Container space"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 0,
 "borderRadius": 0
},
{
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "width": "100%",
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "minHeight": 520,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 100,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.79,
 "layout": "vertical",
 "overflow": "scroll",
 "scrollBarColor": "#E73B2C",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "data": {
  "name": "Container text"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "borderRadius": 0
},
{
 "paddingBottom": 0,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "backgroundColorDirection": "vertical",
 "width": 370,
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "height": 40,
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "layout": "horizontal",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "data": {
  "name": "Container space"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "borderRadius": 0
},
{
 "paddingBottom": 0,
 "transitionDuration": 500,
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "toolTipDisplayTime": 600,
 "toolTipFontWeight": "normal",
 "right": 0,
 "toolTipPaddingRight": 6,
 "class": "ViewerArea",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipOpacity": 1,
 "progressBarBorderSize": 6,
 "toolTipFontSize": 12,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "paddingLeft": 0,
 "transitionMode": "blending",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadBorderRadius": 0,
 "borderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowColor": "#000000",
 "progressRight": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "propagateClick": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadBorderSize": 0,
 "toolTipTextShadowOpacity": 0,
 "progressOpacity": 1,
 "toolTipBorderColor": "#767676",
 "vrPointerSelectionColor": "#FF6600",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingRight": 0,
 "borderRadius": 0,
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "toolTipFontFamily": "Arial",
 "progressBottom": 2,
 "playbackBarBottom": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressHeight": 6,
 "progressBorderColor": "#FFFFFF",
 "progressBackgroundOpacity": 1,
 "toolTipBorderRadius": 3,
 "playbackBarLeft": 0,
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontColor": "#606060",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "minHeight": 1,
 "top": 0,
 "vrPointerColor": "#FFFFFF",
 "bottom": 0,
 "progressBarOpacity": 1,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "shadow": false,
 "displayTooltipInTouchScreens": true,
 "paddingTop": 0,
 "minWidth": 1,
 "playbackBarHeadHeight": 15,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "playbackBarHeadWidth": 6,
 "toolTipBorderSize": 1,
 "playbackBarHeight": 10,
 "playbackBarBorderSize": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingTop": 4,
 "playbackBarProgressOpacity": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderSize": 0,
 "progressBorderRadius": 0,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "data": {
  "name": "Viewer info 1"
 },
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarRight": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderColor": "#0066FF"
},
{
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "class": "Container",
 "width": "100%",
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "paddingLeft": 0,
 "top": "0%",
 "minHeight": 1,
 "height": "100%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "layout": "horizontal",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "data": {
  "name": "Container arrows"
 },
 "paddingRight": 0,
 "gap": 10,
 "borderRadius": 0
},
{
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "width": "100%",
 "minHeight": 0,
 "paddingLeft": 0,
 "height": 60,
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "layout": "horizontal",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "backgroundOpacity": 0.3,
 "data": {
  "name": "Container space"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 0,
 "borderRadius": 0
},
{
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "width": "100%",
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "minHeight": 520,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 100,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.79,
 "layout": "vertical",
 "overflow": "scroll",
 "scrollBarColor": "#E73B2C",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "data": {
  "name": "Container text"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "borderRadius": 0
},
{
 "paddingBottom": 0,
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "backgroundColorDirection": "vertical",
 "width": 370,
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "height": 40,
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "layout": "horizontal",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "data": {
  "name": "Container space"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "borderRadius": 0
},
{
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "class": "HTMLText",
 "width": "77.115%",
 "paddingLeft": 80,
 "top": "0%",
 "minHeight": 100,
 "height": "100%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.15vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.15vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "backgroundOpacity": 0,
 "data": {
  "name": "HTMLText54192"
 },
 "paddingRight": 0,
 "borderRadius": 0
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "verticalAlign": "top",
 "right": 20,
 "transparencyActive": false,
 "maxHeight": 60,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingLeft": 0,
 "top": 20,
 "minHeight": 50,
 "height": "36.14%",
 "width": "100%",
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 50,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "propagateClick": false,
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "data": {
  "name": "IconButton X"
 },
 "paddingRight": 0,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "borderRadius": 0,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "class": "WebFrame",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "scrollEnabled": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "insetBorder": false,
 "propagateClick": false,
 "backgroundOpacity": 1,
 "data": {
  "name": "WebFrame48191"
 },
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0
},
{
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "width": "100%",
 "minHeight": 0,
 "paddingLeft": 0,
 "height": 60,
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "layout": "horizontal",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "backgroundOpacity": 0.3,
 "data": {
  "name": "Container space"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 0,
 "borderRadius": 0
},
{
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "width": "100%",
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "minHeight": 520,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 100,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.79,
 "layout": "vertical",
 "overflow": "scroll",
 "scrollBarColor": "#E73B2C",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "data": {
  "name": "Container text"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "borderRadius": 0
},
{
 "paddingBottom": 0,
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "backgroundColorDirection": "vertical",
 "width": 370,
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "height": 40,
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "layout": "horizontal",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "data": {
  "name": "Container space"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "borderRadius": 0
},
{
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "class": "HTMLText",
 "width": "77.115%",
 "paddingLeft": 80,
 "top": "0%",
 "minHeight": 100,
 "height": "100%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.15vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.15vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "backgroundOpacity": 0,
 "data": {
  "name": "HTMLText54192"
 },
 "paddingRight": 0,
 "borderRadius": 0
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "verticalAlign": "top",
 "right": 20,
 "transparencyActive": false,
 "maxHeight": 60,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "paddingLeft": 0,
 "top": 20,
 "minHeight": 50,
 "height": "36.14%",
 "width": "100%",
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 50,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "propagateClick": false,
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "data": {
  "name": "IconButton X"
 },
 "paddingRight": 0,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "class": "HTMLText",
 "width": "77.115%",
 "paddingLeft": 80,
 "top": "0%",
 "minHeight": 100,
 "height": "100%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.15vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.15vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "backgroundOpacity": 0,
 "data": {
  "name": "HTMLText54192"
 },
 "paddingRight": 0,
 "borderRadius": 0
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "verticalAlign": "top",
 "right": 20,
 "transparencyActive": false,
 "maxHeight": 60,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "paddingLeft": 0,
 "top": 20,
 "minHeight": 50,
 "height": "36.14%",
 "width": "100%",
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 50,
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "propagateClick": false,
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "data": {
  "name": "IconButton X"
 },
 "paddingRight": 0,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "transitionDuration": 500,
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "toolTipShadowOpacity": 1,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "class": "ViewerArea",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "progressBarBorderRadius": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "width": "100%",
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipOpacity": 1,
 "progressBarBorderSize": 6,
 "toolTipFontSize": 12,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "transitionMode": "blending",
 "toolTipShadowSpread": 0,
 "playbackBarHeadBorderRadius": 0,
 "height": "100%",
 "borderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowColor": "#000000",
 "progressRight": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "propagateClick": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadBorderSize": 0,
 "toolTipTextShadowOpacity": 0,
 "progressOpacity": 1,
 "toolTipBorderColor": "#767676",
 "vrPointerSelectionColor": "#FF6600",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingRight": 0,
 "borderRadius": 0,
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "toolTipFontFamily": "Arial",
 "progressBottom": 2,
 "playbackBarBottom": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressHeight": 6,
 "progressBorderColor": "#FFFFFF",
 "progressBackgroundOpacity": 1,
 "toolTipBorderRadius": 3,
 "playbackBarLeft": 0,
 "playbackBarOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontColor": "#606060",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "minHeight": 1,
 "top": "0%",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "playbackBarHeadHeight": 15,
 "progressBarOpacity": 1,
 "shadow": false,
 "displayTooltipInTouchScreens": true,
 "paddingTop": 0,
 "minWidth": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "playbackBarHeadWidth": 6,
 "toolTipBorderSize": 1,
 "playbackBarHeight": 10,
 "playbackBarBorderSize": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingTop": 4,
 "playbackBarProgressOpacity": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderSize": 0,
 "progressBorderRadius": 0,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "data": {
  "name": "Viewer photoalbum + text 1"
 },
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarRight": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderColor": "#0066FF"
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "left": 10,
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "verticalAlign": "middle",
 "transparencyActive": false,
 "maxHeight": 60,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "paddingLeft": 0,
 "top": "20%",
 "minHeight": 50,
 "bottom": "20%",
 "width": "14.22%",
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 50,
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "propagateClick": false,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "data": {
  "name": "IconButton <"
 },
 "paddingRight": 0,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "verticalAlign": "middle",
 "right": 10,
 "transparencyActive": false,
 "maxHeight": 60,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "paddingLeft": 0,
 "top": "20%",
 "minHeight": 50,
 "bottom": "20%",
 "width": "14.22%",
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 50,
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "propagateClick": false,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "data": {
  "name": "IconButton >"
 },
 "paddingRight": 0,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "transitionDuration": 500,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipShadowOpacity": 1,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "class": "ViewerArea",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "progressBarBorderRadius": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "width": "100%",
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipOpacity": 1,
 "progressBarBorderSize": 6,
 "toolTipFontSize": 12,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "transitionMode": "blending",
 "toolTipShadowSpread": 0,
 "playbackBarHeadBorderRadius": 0,
 "height": "100%",
 "borderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowColor": "#000000",
 "progressRight": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "propagateClick": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadBorderSize": 0,
 "toolTipTextShadowOpacity": 0,
 "progressOpacity": 1,
 "toolTipBorderColor": "#767676",
 "vrPointerSelectionColor": "#FF6600",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingRight": 0,
 "borderRadius": 0,
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "toolTipFontFamily": "Arial",
 "progressBottom": 2,
 "playbackBarBottom": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressHeight": 6,
 "progressBorderColor": "#FFFFFF",
 "progressBackgroundOpacity": 1,
 "toolTipBorderRadius": 3,
 "playbackBarLeft": 0,
 "playbackBarOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontColor": "#606060",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "minHeight": 1,
 "top": "0%",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "playbackBarHeadHeight": 15,
 "progressBarOpacity": 1,
 "shadow": false,
 "displayTooltipInTouchScreens": true,
 "paddingTop": 0,
 "minWidth": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "playbackBarHeadWidth": 6,
 "toolTipBorderSize": 1,
 "playbackBarHeight": 10,
 "playbackBarBorderSize": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingTop": 4,
 "playbackBarProgressOpacity": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderSize": 0,
 "progressBorderRadius": 0,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarRight": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderColor": "#0066FF"
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "verticalAlign": "middle",
 "transparencyActive": false,
 "maxHeight": 60,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "paddingLeft": 0,
 "top": "20%",
 "minHeight": 50,
 "bottom": "20%",
 "width": "14.22%",
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 50,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "propagateClick": false,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "data": {
  "name": "IconButton <"
 },
 "paddingRight": 0,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "verticalAlign": "middle",
 "right": 10,
 "transparencyActive": false,
 "maxHeight": 60,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "paddingLeft": 0,
 "top": "20%",
 "minHeight": 50,
 "bottom": "20%",
 "width": "14.22%",
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 50,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "propagateClick": false,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "data": {
  "name": "IconButton >"
 },
 "paddingRight": 0,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "verticalAlign": "top",
 "right": 20,
 "transparencyActive": false,
 "maxHeight": 60,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "paddingLeft": 0,
 "top": 20,
 "minHeight": 50,
 "height": "10%",
 "width": "10%",
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 50,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "propagateClick": false,
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "data": {
  "name": "IconButton X"
 },
 "paddingRight": 0,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "verticalAlign": "bottom",
 "maxHeight": 1000,
 "class": "Image",
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "paddingLeft": 0,
 "top": "0%",
 "minHeight": 1,
 "height": "100%",
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "propagateClick": false,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "paddingRight": 0,
 "borderRadius": 0
},
{
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "width": "100%",
 "minHeight": 0,
 "paddingLeft": 0,
 "height": 60,
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "layout": "horizontal",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "backgroundOpacity": 0.3,
 "data": {
  "name": "Container space"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 0,
 "borderRadius": 0
},
{
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "width": "100%",
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "minHeight": 520,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 100,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.79,
 "layout": "vertical",
 "overflow": "scroll",
 "scrollBarColor": "#E73B2C",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "data": {
  "name": "Container text"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "borderRadius": 0
},
{
 "paddingBottom": 0,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "backgroundColorDirection": "vertical",
 "width": 370,
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "height": 40,
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "layout": "horizontal",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "data": {
  "name": "Container space"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "borderRadius": 0
},
{
 "paddingBottom": 20,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "class": "HTMLText",
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "scrollBarMargin": 2,
 "height": "100%",
 "minHeight": 1,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.47vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.35vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.35vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.35vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.35vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.58vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "backgroundOpacity": 0,
 "data": {
  "name": "HTMLText"
 },
 "paddingRight": 10,
 "borderRadius": 0
},
{
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "borderRadius": 0,
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "backgroundColorDirection": "vertical",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Bebas Neue Bold",
 "borderColor": "#000000",
 "class": "Button",
 "width": "46%",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "height": "9%",
 "minHeight": 1,
 "paddingLeft": 0,
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#04A3E1"
 ],
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "fontSize": "3vh",
 "label": "lorem ipsum",
 "propagateClick": false,
 "rollOverBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "backgroundOpacity": 0.7,
 "data": {
  "name": "Button"
 },
 "textDecoration": "none",
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "gap": 5,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "cursor": "hand",
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal"
},
{
 "paddingBottom": 0,
 "maxWidth": 150,
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "verticalAlign": "middle",
 "transparencyActive": true,
 "maxHeight": 150,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "paddingLeft": 0,
 "minHeight": 70,
 "height": "8%",
 "width": "12%",
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 70,
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "propagateClick": false,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "data": {
  "name": "IconButton <"
 },
 "paddingRight": 0,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "width": "80%",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": "30%",
 "minHeight": 1,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "data": {
  "name": "Container separator"
 },
 "paddingRight": 0,
 "gap": 10,
 "borderRadius": 0
},
{
 "paddingBottom": 0,
 "maxWidth": 150,
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "verticalAlign": "middle",
 "transparencyActive": true,
 "maxHeight": 150,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "paddingLeft": 0,
 "minHeight": 70,
 "height": "8%",
 "width": "12%",
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 70,
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "propagateClick": false,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "data": {
  "name": "IconButton >"
 },
 "paddingRight": 0,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "paddingBottom": 20,
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "class": "HTMLText",
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "scrollBarMargin": 2,
 "height": "100%",
 "minHeight": 1,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.47vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.35vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.35vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV></div>",
 "backgroundOpacity": 0,
 "data": {
  "name": "HTMLText"
 },
 "paddingRight": 10,
 "borderRadius": 0
},
{
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "borderRadius": 0,
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "backgroundColorDirection": "vertical",
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Bebas Neue Bold",
 "borderColor": "#000000",
 "class": "Button",
 "width": "46%",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "height": "9%",
 "minHeight": 1,
 "paddingLeft": 0,
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#04A3E1"
 ],
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "fontSize": "3vh",
 "label": "lorem ipsum",
 "propagateClick": false,
 "rollOverBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "backgroundOpacity": 0.7,
 "data": {
  "name": "Button"
 },
 "textDecoration": "none",
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "gap": 5,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "cursor": "hand",
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal"
},
{
 "paddingBottom": 20,
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "class": "HTMLText",
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "scrollBarMargin": 2,
 "height": "100%",
 "minHeight": 1,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.79vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">address line 1</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">address line 2</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:5.15vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac.</SPAN></SPAN></DIV></div>",
 "backgroundOpacity": 0,
 "data": {
  "name": "HTMLText"
 },
 "paddingRight": 10,
 "borderRadius": 0
},
{
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "borderRadius": 0,
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "backgroundColorDirection": "vertical",
 "width": 207,
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontFamily": "Bebas Neue Bold",
 "iconHeight": 32,
 "class": "Button",
 "shadowColor": "#000000",
 "minHeight": 1,
 "paddingLeft": 0,
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "height": 59,
 "mode": "push",
 "shadow": false,
 "backgroundColor": [
  "#04A3E1"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "fontSize": 34,
 "label": "lorem ipsum",
 "propagateClick": false,
 "rollOverBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "backgroundOpacity": 0.7,
 "data": {
  "name": "Button"
 },
 "textDecoration": "none",
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "gap": 5,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "visible": false,
 "cursor": "hand",
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal"
},
{
 "paddingBottom": 10,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "class": "HTMLText",
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": "45%",
 "minHeight": 1,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.93vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "backgroundOpacity": 0,
 "data": {
  "name": "HTMLText18899"
 },
 "paddingRight": 0,
 "borderRadius": 0
},
{
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "width": "100%",
 "children": [
  "this.Image_AAEAE258_BAF1_0DDD_41E6_FB144FCE6904",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "height": "80%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "layout": "horizontal",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "data": {
  "name": "- content"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "borderRadius": 0
},
{
 "paddingBottom": 0,
 "maxWidth": 983,
 "id": "Image_AAEAE258_BAF1_0DDD_41E6_FB144FCE6904",
 "verticalAlign": "middle",
 "maxHeight": 1219,
 "class": "Image",
 "url": "skin/Image_AAEAE258_BAF1_0DDD_41E6_FB144FCE6904.jpg",
 "paddingLeft": 0,
 "minHeight": 1,
 "height": "30.5%",
 "width": "25.177%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "propagateClick": false,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image4092"
 },
 "paddingRight": 0,
 "borderRadius": 0
},
{
 "paddingBottom": 10,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "class": "HTMLText",
 "width": "72.222%",
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "scrollBarMargin": 2,
 "height": "100%",
 "minHeight": 1,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#233142;font-size:2.35vh;font-family:'Bebas Neue Bold';\">NICHOLAS CUMMINGS</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;font-family:'Bebas Neue Bold';\">Licensed Realtor</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.79vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.79vh;font-family:'Bebas Neue Bold';\">Tlf.: +1 (253) 225-0548</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.79vh;font-family:'Bebas Neue Bold';\">NicholasC@JohnLScott.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.79vh;font-family:'Bebas Neue Bold';\">NicholasC.JohnLScott.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.12vh;font-family:'Bebas Neue Bold';\">Meet Nick Cummings, your trusted real estate advisor in Kitsap County, Washington. As a native of this beautiful region, I bring a deep understanding of its neighborhoods, communities, and market trends. While my experience in the real estate industry may be modest, my passion for helping clients achieve their homeownership dreams is boundless.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.12vh;font-family:'Bebas Neue Bold';\">With a genuine love for Kitsap County and its unique charm, I am committed to providing personalized service tailored to each client's needs and preferences. Whether you're buying, selling, or investing in real estate, I am here to guide you every step of the way. Holding a realtor license, I adhere to the highest standards of professionalism and ethics, ensuring a seamless and rewarding real estate experience for my clients.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.12vh;font-family:'Bebas Neue Bold';\">My approach is rooted in transparency, integrity, and open communication. I take the time to listen to my clients' goals and concerns, empowering them with the knowledge and resources they need to make informed decisions. From navigating the complexities of the local market to negotiating the best possible deals, I am dedicated to achieving exceptional results for my clients.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.12vh;font-family:'Bebas Neue Bold';\">As your local real estate expert, I am honored to serve the diverse communities of Kitsap County. Whether you're searching for your dream home, selling your property, or exploring investment opportunities, I am here to turn your real estate aspirations into reality. Contact me today, and let's embark on this exciting journey together</SPAN></SPAN></DIV></div>",
 "backgroundOpacity": 0,
 "data": {
  "name": "HTMLText19460"
 },
 "paddingRight": 10,
 "borderRadius": 0
}],
 "mobileMipmappingEnabled": false,
 "minHeight": 20,
 "paddingLeft": 0,
 "vrPolyfillScale": 0.5,
 "scrollBarMargin": 2,
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "overflow": "visible",
 "downloadEnabled": false,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "Player468"
 },
 "paddingRight": 0,
 "gap": 10,
 "borderRadius": 0
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
