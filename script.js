(function(){
    var script = {
 "horizontalAlign": "left",
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
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
  "this.Image_B44E6FBD_BAA2_0E15_41E1_F18F1E555CBE"
 ],
 "id": "rootPlayer",
 "scripts": {
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "unregisterKey": function(key){  delete window[key]; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getKey": function(key){  return window[key]; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "start": "this.playAudioList([this.audio_97B8ABA2_D9DD_9501_41D7_2EB760D81D21]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "desktopMipmappingEnabled": false,
 "width": "100%",
 "contentOpaque": false,
 "class": "Player",
 "definitions": [{
 "initialPosition": {
  "yaw": -143.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C48EB978_DD08_58B8_4175_79B777AB163F",
 "automaticZoomSpeed": 10
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
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 140.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C861C9DB_DD08_5BF8_41E7_9CBCD80052D2",
 "automaticZoomSpeed": 10
},
{
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
   "backwardYaw": 71.95,
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
  "this.overlay_96EA5B16_DA65_9501_41D4_9EB1A50C1865",
  "this.overlay_CEA315C1_DD19_CBC8_41DD_0FD38931A23C"
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
 "initialPosition": {
  "yaw": -89.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CAAF2B68_DD08_58D8_41E0_B49B5387564E",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -10.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CAEAABAD_DD08_5858_41E5_6EC00FB2035E",
 "automaticZoomSpeed": 10
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
   "backwardYaw": 162.77,
   "yaw": -48.11,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4"
  },
  {
   "panorama": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 59.5,
   "yaw": 79.37,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99"
  },
  {
   "backwardYaw": 163.56,
   "yaw": -8.19,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000"
  },
  {
   "backwardYaw": 46.36,
   "yaw": 161.99,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A"
  },
  {
   "backwardYaw": 90.09,
   "yaw": -94.14,
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
   "yaw": 25.45,
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
  "this.overlay_C68680AE_D9DF_9301_41AC_3E2B30B5606D",
  "this.overlay_CE092FE4_DD08_57C8_41C7_8C3263621DD7",
  "this.overlay_CFFE1BF6_DD18_3FC8_41E9_94CC8785A6D7"
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
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D2441443_D95F_992B_41D8_3C1223342761_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 99.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C898B9F8_DD08_5BB8_41E3_A983B61A536B",
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
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D275C425_D95F_F96F_41DB_79786819224B_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 112.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C5C30C6F_DD08_58D8_41A4_E7DFA414F214",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -151.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C4439954_DD08_58CF_41E6_6C2A3FF09EE3",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20240413_102434_00_merged",
 "id": "panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 62.35,
   "yaw": -92.67,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB"
  },
  {
   "backwardYaw": 62.35,
   "yaw": -68.56,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB"
  },
  {
   "backwardYaw": 122.55,
   "yaw": 15.43,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7"
  },
  {
   "backwardYaw": 20.94,
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
  "this.overlay_D63E8956_D957_AB2D_41CA_B191E2115301",
  "this.overlay_D26AE543_DD09_C8C8_4167_43EA93E0D36A"
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
 "initialPosition": {
  "yaw": -117.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C8AF8A33_DD08_5848_41E6_5A6005B63354",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D2448E90_D95F_A925_41E8_B306937D2F35_camera",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20240413_105556_00_merged",
 "id": "panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -48.11,
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
   "backwardYaw": 36.58,
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
 "initialPosition": {
  "yaw": -134.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CAE9F870_DD08_58C8_41D5_71C296A9D7A6",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -89.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CAFEC862_DD08_58C8_41C0_F31604F9CB04",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 171.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C57C3C29_DD08_5858_41D9_510E38EEF912",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 29.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CB4B7AA1_DD08_5848_41DA_2C549F194BA5",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -103.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C581B8F6_DD08_59CB_41D1_1D43F37E3066",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 97.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C540DC0A_DD08_5858_41CF_23D9C2108387",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -153.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C5BE1904_DD08_5848_41D0_CB256EAC158B",
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
 "label": "IMG_20240413_104337_00_merged",
 "id": "panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 154.31,
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
  "yaw": 147.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C5234BEB_DD08_5FD8_41DF_06099D31AFC6",
 "automaticZoomSpeed": 10
},
{
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 131.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C480F971_DD08_58C9_41E8_73CF28B7E670",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20240413_102735_00_merged",
 "id": "panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 15.43,
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
   "backwardYaw": 74.48,
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
  "this.overlay_C91D87D1_D951_A727_41E8_54124820CB77",
  "this.overlay_CFA57A32_DD18_5848_41D1_6085ED5026E3"
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
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -54.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C88BDA0E_DD08_5858_41E4_364801EF40B8",
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
 "label": "IMG_20240413_105720_00_merged",
 "id": "panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -165.45,
   "yaw": 20.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC"
  },
  {
   "backwardYaw": 90.68,
   "yaw": 167.76,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84"
  },
  {
   "backwardYaw": 45.02,
   "yaw": 91.86,
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
   "backwardYaw": -80.99,
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
  "yaw": -58.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C55698CD_DD08_59D8_4191_B842D44E12F2",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_camera",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20240413_103559_00_merged",
 "id": "panorama_D275C425_D95F_F96F_41DB_79786819224B",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -138.41,
   "yaw": 86.45,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99"
  },
  {
   "backwardYaw": 82.71,
   "yaw": -89.03,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D660D206_D972_B92D_41E4_4CFD8D0736EB",
  "this.overlay_D364651D_DCF8_4878_41BB_DE8A29355436"
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
 "label": "IMG_20240413_102954_00_merged",
 "id": "panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 25.45,
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
   "backwardYaw": -107.88,
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
   "backwardYaw": 74.01,
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
  "this.overlay_91077E97_DA6C_AF0F_41B9_2616010A8C1A",
  "this.overlay_CCCBB3B6_DD08_4848_41E0_2A537118A343"
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
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 75.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C8E04A57_DD08_58C8_41C1_0EB019BC0003",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 162.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CB754AA9_DD08_5858_41D1_7796BAAA7751",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 7.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C56398E8_DD08_59C7_41E6_4865CEB45390",
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
 "label": "IMG_20240413_104408_00_merged",
 "id": "panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 125.11,
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
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_camera",
 "automaticZoomSpeed": 10
},
{
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
  },
  {
   "backwardYaw": 60.88,
   "yaw": -152.87,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D645508F_D972_993B_41C5_F18245B8B18F",
  "this.overlay_D3B5C5A3_DCF8_C849_41D6_FC2B7D94C937"
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
  "yaw": -97.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C8A9EA2B_DD08_5858_41E0_A9105C7D52FD",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20240413_105157_00_merged",
 "id": "panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -140.4,
   "yaw": -32.86,
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
  "yaw": -154.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C5FA9921_DD08_5848_41B3_D7D8D5D79F53",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 8.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CA031B10_DD08_5848_41E3_B252C76D3294",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -44.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C5DC3913_DD08_5848_41E2_5E1211ABDC62",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 27.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C8841A07_DD08_5848_41E1_ABD707E75B42",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -41.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CB1F6A6C_DD08_58D8_41E7_AF86368849FA",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 18.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C59168EF_DD08_59D9_41E0_1EA15D832E89",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 41.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C8A1FA24_DD08_5848_41E0_A54B09AB3FBE",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 14.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CAF18850_DD08_58C8_41CC_77291E3D1C8E",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D2749949_D95F_AB27_41E5_D00915CF7477_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D2449E7A_D95E_69E5_41E7_97426A243776_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -164.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C455894D_DD08_58D9_41D9_A21D12B7F511",
 "automaticZoomSpeed": 10
},
{
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
   "backwardYaw": -80.07,
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
 "initialPosition": {
  "yaw": -88.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C8F53A50_DD08_58C8_41C2_73B8C8BA6475",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -159.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C8CC6A48_DD08_58D8_41E6_9500F292DABD",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -12.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C54468D8_DD08_59F8_41D7_AD28A9CC0861",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 91.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C5155882_DD08_5848_41D9_523194B4DB2F",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.video_CCB0F197_DD08_C848_41CF_88F56BB718E1",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_CA4B87DD_DD08_57F8_41C6_9F2BD0DE7874, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_CA4B87DD_DD08_57F8_41C6_9F2BD0DE7874, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_CA4B87DD_DD08_57F8_41C6_9F2BD0DE7874",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -102.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CBC23AEC_DD08_59DF_41DF_5BDF01AE9EC5",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -16.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CAB3CB59_DD08_58F8_41D9_DC94FE60A530",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20240413_104946_00_merged",
 "id": "panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -73.12,
   "yaw": -165.84,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C"
  },
  {
   "backwardYaw": -32.86,
   "yaw": -140.4,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33"
  },
  {
   "backwardYaw": -94.63,
   "yaw": -80.07,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B"
  },
  {
   "backwardYaw": -82.14,
   "yaw": -80.99,
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
 "label": "IMG_20240413_102548_00_merged",
 "id": "panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -92.67,
   "yaw": 62.35,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC"
  },
  {
   "backwardYaw": -8.86,
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
 "initialPosition": {
  "yaw": -68.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C4600963_DD08_58C9_41D1_0371544F0266",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 105.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C50DD8A0_DD08_5848_41CF_75270E4F54B0",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -83.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C892D9F1_DD08_5BC8_41C7_B7CD547FB753",
 "automaticZoomSpeed": 10
},
{
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
  "yaw": 142.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CB083A74_DD08_58C8_4186_7AEA2C41EDBE",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 170.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C86B09EA_DD08_5BD8_41E9_B12C1ABA535F",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -120.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CA851B51_DD08_58C8_41E7_5848218A50E9",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -15.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C574F8E0_DD08_59C7_41E2_A55FD84F4402",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -105.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C4071937_DD08_5849_41E1_CA03E1706291",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -68.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C58F48FD_DD08_59B8_4198_5361D09583CC",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 90.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C8EB9A5E_DD08_58F8_41E2_5FFFE093DD4A",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -176.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C5CCA91A_DD08_5878_41DA_34AF77CAA3F1",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 167.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CB330A7B_DD08_58B8_41D3_5BF486062709",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 63.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CAC66843_DD08_58C8_41D9_5A9FCC756F62",
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
  "yaw": 85.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CA179B09_DD08_5858_41CA_50AEE8AC6F09",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -108.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C5AE590C_DD08_5858_41DB_823DB8609281",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 99.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CA5D9B2C_DD08_5858_41EB_684EF539B974",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 14.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C4255946_DD08_58CB_41E8_5F6A47D33640",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 165.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C87C09D3_DD08_5BC8_41EA_13DBA6F0D85C",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -105.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C490496A_DD08_58DB_41C5_BCFE908C8BC4",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D2719E7B_D95E_69DB_41DA_B678F555831B_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 170.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C8B3AA15_DD08_5848_41DC_CFC187CE3332",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -64.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CA795B3B_DD08_58B8_41E5_AADBE9A36F15",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -117.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C8D8EA39_DD08_58B8_41D3_0469BFB9B651",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 29.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CADE0B7C_DD08_58B8_41E8_E64A3577D81D",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -12.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C5994C49_DD08_58D8_41BE_80726FA749B0",
 "automaticZoomSpeed": 10
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
 "initialPosition": {
  "yaw": -86.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C89DAA00_DD08_5848_41D5_97FCC09EC78C",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -43.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CBD5FAE4_DD08_59CF_41B1_8F79A52C6DF8",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -96.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CBFDCAFA_DD08_59BB_41D0_69C18854E301",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -69.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CB83CAC7_DD08_59C9_41BE_29DB895249E6",
 "automaticZoomSpeed": 10
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
  "yaw": 75.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CB5F0A9A_DD08_5878_41EA_0E701A10749B",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -100.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C5D51C68_DD08_58D8_41CE_08E516C4E462",
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
 "initialPosition": {
  "yaw": 126.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CA4BCB34_DD08_5848_41EA_0C863C4C39E7",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 14.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C507ABCC_DD08_5FD8_41E3_2ADC98E0C23C",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -65.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C518FBBA_DD08_5FB8_41DF_B47F383B259E",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D277598A_D95F_EB25_41E5_0800136A96D4_camera",
 "automaticZoomSpeed": 10
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
 "initialPosition": {
  "yaw": 81.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CBA7DADD_DD08_59F9_41D9_FBFA470F8A0B",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 171.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CAA41817_DD08_5848_41E5_EA92403BDDFA",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 39.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C5A6CC61_DD08_58C8_41D2_8DC0E024C146",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D2446447_D95F_992B_41CD_4D904B227F99_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 85.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C5522BF8_DD08_5FB8_41CE_817B955BDAD5",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 72.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C5EAC928_DD08_5858_41BC_2ECC2144A8DA",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_camera",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20240413_103230_00_merged",
 "id": "panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 161.99,
   "yaw": 46.36,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425"
  },
  {
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 121.26,
   "yaw": 105.14,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761"
  },
  {
   "backwardYaw": 167.99,
   "yaw": 53.38,
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
   "yaw": 74.01,
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
  "this.overlay_F9CF8A01_D9DB_9703_41EB_075F114A2316",
  "this.overlay_CFA52CB6_DD08_784B_41E9_B6D48FF4C09A"
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
 "initialPosition": {
  "yaw": -104.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C473E95B_DD08_58F9_41EB_9E153DDD3CAC",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_camera",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20240413_103110_00_merged",
 "id": "panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -8.19,
   "yaw": 163.56,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425"
  },
  {
   "panorama": "this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -155.22,
   "yaw": 110.35,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761"
  },
  {
   "backwardYaw": 53.38,
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
  "this.overlay_C5B58AFD_D9A4_B703_41E4_BB6AAE4BCEEB",
  "this.overlay_CFE79476_DD08_48C8_41E4_488F96CAC310"
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
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_camera",
 "automaticZoomSpeed": 10
},
{
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
 "label": "IMG_20240413_105836_00_merged",
 "id": "panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 91.86,
   "yaw": 45.02,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF"
  },
  {
   "backwardYaw": -104.08,
   "yaw": -125.51,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84"
  },
  {
   "backwardYaw": -89.03,
   "yaw": 82.71,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D275C425_D95F_F96F_41DB_79786819224B"
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
 "initialPosition": {
  "yaw": -17.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C87729CB_DD08_5BD8_41B1_A29708719E04",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 24.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CAAF5824_DD08_5848_41E5_FE003D0FE66F",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 8.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C53938AE_DD08_5858_41D2_95EF5973A89F",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -126.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CADAE831_DD08_5848_41E6_A19AEB85E8C6",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 27.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CACD0B8E_DD08_5858_41EA_75A41FAF648F",
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
   "backwardYaw": 29.21,
   "yaw": 74.48,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7"
  },
  {
   "backwardYaw": -62.67,
   "yaw": 20,
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
   "yaw": -155.22,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000"
  },
  {
   "backwardYaw": 105.14,
   "yaw": 121.26,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A"
  },
  {
   "backwardYaw": 69.73,
   "yaw": -12.6,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99"
  },
  {
   "backwardYaw": -98.96,
   "yaw": 71.95,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E"
  },
  {
   "backwardYaw": 136.71,
   "yaw": -107.88,
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
  "this.overlay_F94107B3_D9DC_9D07_4174_6CD9E2EEE2F4",
  "this.overlay_D3A81821_DCF8_3848_41E5_84D663271BA4",
  "this.overlay_CE12EBF8_DD0B_DFB8_41C2_69BD086094CF"
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
 "label": "IMG_20240413_103450_00_merged",
 "id": "panorama_D277598A_D95F_EB25_41E5_0800136A96D4",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 20,
   "yaw": -62.67,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761"
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
   "backwardYaw": -74.27,
   "yaw": -37.98,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2446447_D95F_992B_41CD_4D904B227F99"
  },
  {
   "panorama": "this.panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_D657D805_D973_E92F_41C0_3A6BD0763878",
  "this.overlay_D6115758_D973_A725_41E2_2E3BC7716E7C",
  "this.overlay_D6D5F4E2_D973_9AE5_41E7_AEB5F99CA11E",
  "this.overlay_C94DC638_D972_9965_41E0_D698ABED5444",
  "this.overlay_FD829770_D9E7_BD01_41D2_654699B58F88",
  "this.overlay_CC423298_DCF9_C878_41E1_AEF103FB8825"
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
 "label": "IMG_20240413_105802_00_merged",
 "id": "panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -125.51,
   "yaw": -104.08,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884"
  },
  {
   "backwardYaw": 167.76,
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
  "yaw": 119.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CA21FB1F_DD08_5878_41E3_B442E25DE9C2",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20240413_104233_00_merged",
 "id": "panorama_D2749949_D95F_AB27_41E5_D00915CF7477",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -14.08,
   "yaw": -171.37,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2448E90_D95F_A925_41E8_B306937D2F35"
  },
  {
   "backwardYaw": -39.16,
   "yaw": 154.31,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A"
  },
  {
   "backwardYaw": -92.57,
   "yaw": 125.11,
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
 "initialPosition": {
  "yaw": -133.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CAA2AB61_DD08_58C8_41BB_49D2D8408799",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 18.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C437793E_DD08_58BB_41E2_0CAC7697E9D1",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 117.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CB977AC0_DD08_59C7_41D1_8270796AE802",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -110.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CBBA1AD6_DD08_59CB_41E3_675352FB727F",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20240413_103417_00_merged",
 "id": "panorama_D2446447_D95F_992B_41CD_4D904B227F99",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 79.37,
   "yaw": 59.5,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425"
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
   "backwardYaw": -12.6,
   "yaw": 69.73,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2441443_D95F_992B_41D8_3C1223342761"
  },
  {
   "backwardYaw": 86.45,
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
  "yaw": -93.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CB3F4A82_DD08_5848_41D1_6383114277B3",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 21.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C5F33C77_DD08_58C8_41C6_2C95FDFD06A9",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627_camera",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20240413_105054_00_merged",
 "id": "panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -165.84,
   "yaw": -73.12,
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
  "yaw": -102.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CB559A92_DD08_5848_41E5_27178AB6C856",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -36.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CBCFBAF3_DD08_59C9_41E9_9E4558DDF82C",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -65.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C8B96A1D_DD08_5878_41E3_3A727CE563F9",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 54.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C56B2C37_DD08_5848_41E1_6FD0EBE2F456",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 87.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C54F8C17_DD08_5848_41C2_F20204AE0A8D",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED_camera",
 "automaticZoomSpeed": 10
},
{
 "label": "140379-774881529_small",
 "id": "video_CCB0F197_DD08_C848_41CF_88F56BB718E1",
 "width": 960,
 "loop": false,
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_CCB0F197_DD08_C848_41CF_88F56BB718E1_t.jpg",
 "class": "Video",
 "height": 540,
 "video": {
  "width": 960,
  "class": "VideoResource",
  "height": 540,
  "mp4Url": "media/video_CCB0F197_DD08_C848_41CF_88F56BB718E1.mp4"
 }
},
{
 "initialPosition": {
  "yaw": -150.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CB6DCAB8_DD08_59B8_41D1_197333994F86",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -31.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CAFBBB9B_DD08_5878_41DF_F73D8D823D37",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 87.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C867B9E2_DD08_5BC8_41E2_6EC783F9D997",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4_camera",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20240413_105518_00_merged",
 "id": "panorama_D270695C_D95E_EBDD_41E6_6F31051946D3",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -94.14,
   "yaw": 90.09,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425"
  },
  {
   "backwardYaw": -171.37,
   "yaw": 36.58,
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
 "label": "IMG_20240413_102513_00_merged",
 "id": "panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -161.91,
   "yaw": -8.86,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB"
  },
  {
   "panorama": "this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC",
   "class": "AdjacentPanorama"
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
 "initialPosition": {
  "yaw": 106.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C5342BD9_DD08_5FF8_41D3_8A39294182B7",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D2713441_D95F_B927_41E1_6B8B0A550425_camera",
 "automaticZoomSpeed": 10
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
   "backwardYaw": -171.37,
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
  "yaw": -17.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CA962B4A_DD08_58D8_41E3_B19CB11FA58C",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -119.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C5B75C59_DD08_58F8_41C8_D4C9F34E9D2E",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_camera",
 "automaticZoomSpeed": 10
},
{
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
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -160,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C502A88E_DD08_5858_41D0_A77184E21D69",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 140.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CB618AB0_DD08_5848_41E7_400B27D05A81",
 "automaticZoomSpeed": 10
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
   "backwardYaw": -152.87,
   "yaw": 60.88,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F"
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
 "initialPosition": {
  "yaw": -18.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C527C8C0_DD08_59C8_41CB_15DAA98C20A0",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -57.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C8C16A41_DD08_58C8_41E8_31A9D1ABCEE4",
 "automaticZoomSpeed": 10
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
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -100.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C418A930_DD08_5847_41D5_A7BC0AC9C064",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -57.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C5887C52_DD08_58C8_41E2_435ADDA1182F",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 126.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CB293A8A_DD08_5858_41C6_A1260176AE2C",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -25.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CBE96B01_DD08_5848_41D0_98B57930E56B",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -36.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CA674B42_DD08_58C8_41E1_F0AC7F64BA14",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 142.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CA313B17_DD08_5848_41E9_9D6D5DCDF038",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 99.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CA2E8B25_DD08_5848_41D3_B61A31EC3CE4",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -100.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CB140A65_DD08_58C8_4180_CA1BC17EB04F",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -74.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CB8D8ACF_DD08_59D9_41AA_1F7B693E9FCE",
 "automaticZoomSpeed": 10
},
{
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "maxHeight": 58,
 "width": 58,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "class": "IconButton",
 "transparencyActive": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "borderRadius": 0,
 "height": 58,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "toggle",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton MUTE"
 },
 "paddingRight": 0,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "toolTipFontSize": 13,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingLeft": 10,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "progressRight": 0,
 "width": "100%",
 "class": "ViewerArea",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadBorderRadius": 0,
 "toolTipOpacity": 0.5,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "progressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "paddingLeft": 0,
 "transitionMode": "blending",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "borderSize": 0,
 "playbackBarHeadShadow": true,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarLeft": 0,
 "toolTipPaddingTop": 7,
 "height": "100%",
 "firstTransitionDuration": 0,
 "vrPointerSelectionTime": 2000,
 "progressBackgroundOpacity": 1,
 "toolTipBorderSize": 1,
 "playbackBarProgressBorderColor": "#000000",
 "progressHeight": 6,
 "progressBottom": 55,
 "playbackBarBottom": 5,
 "playbackBarOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "paddingRight": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "propagateClick": true,
 "toolTipBackgroundColor": "#000000",
 "vrPointerColor": "#FFFFFF",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressBarOpacity": 1,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressLeft": 0,
 "progressBorderSize": 0,
 "toolTipFontFamily": "Georgia",
 "playbackBarBorderSize": 0,
 "progressBorderRadius": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarBackgroundOpacity": 1,
 "minHeight": 50,
 "playbackBarProgressOpacity": 1,
 "top": 0,
 "playbackBarHeadWidth": 6,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderColor": "#767676",
 "playbackBarBorderColor": "#FFFFFF",
 "borderRadius": 0,
 "shadow": false,
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderColor": "#0066FF",
 "paddingTop": 0,
 "minWidth": 100,
 "displayTooltipInTouchScreens": true,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarRight": 0,
 "toolTipPaddingBottom": 7,
 "toolTipFontStyle": "normal",
 "toolTipBorderRadius": 3,
 "toolTipShadowSpread": 0,
 "progressBarBorderSize": 6,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderRadius": 0,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipDisplayTime": 600,
 "toolTipPaddingRight": 10
},
{
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "right": "0%",
 "contentOpaque": false,
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "height": 641,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--SETTINGS"
 },
 "paddingRight": 0,
 "gap": 10,
 "propagateClick": true
},
{
 "backgroundOpacity": 0.64,
 "paddingBottom": 0,
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "right": "0%",
 "contentOpaque": false,
 "class": "Container",
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "height": 118,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "bottom": 0,
 "verticalAlign": "top",
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--MENU"
 },
 "paddingRight": 0,
 "gap": 10,
 "propagateClick": true
},
{
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "borderRadius": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--INFO photo"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "paddingRight": 0,
 "gap": 10,
 "propagateClick": true,
 "backgroundOpacity": 0.6
},
{
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "borderRadius": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--INFO photoalbum"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "paddingRight": 0,
 "gap": 10,
 "propagateClick": true,
 "backgroundOpacity": 0.6
},
{
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "borderRadius": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "paddingRight": 0,
 "gap": 10,
 "propagateClick": true,
 "backgroundOpacity": 0.6
},
{
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "borderRadius": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--LOCATION"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "propagateClick": true,
 "backgroundOpacity": 0.6
},
{
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "borderRadius": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--FLOORPLAN"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "paddingRight": 0,
 "gap": 10,
 "propagateClick": true,
 "backgroundOpacity": 0.6
},
{
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "borderRadius": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "paddingRight": 0,
 "gap": 10,
 "propagateClick": true,
 "backgroundOpacity": 0.6
},
{
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "borderRadius": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "paddingRight": 0,
 "gap": 10,
 "propagateClick": true,
 "backgroundOpacity": 0.6
},
{
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "borderRadius": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--REALTOR"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "paddingRight": 0,
 "gap": 10,
 "propagateClick": true,
 "backgroundOpacity": 0.6
},
{
 "paddingBottom": 0,
 "maxWidth": 1258,
 "id": "Image_B44E6FBD_BAA2_0E15_41E1_F18F1E555CBE",
 "left": "0%",
 "maxHeight": 953,
 "width": "5.398%",
 "class": "Image",
 "url": "skin/Image_B44E6FBD_BAA2_0E15_41E1_F18F1E555CBE.png",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "verticalAlign": "middle",
 "shadow": false,
 "height": "7.606%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "click": "this.openLink('http://NicholasC.JohnLScott.com', '_blank')",
 "horizontalAlign": "center",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image4523"
 },
 "visible": false,
 "paddingRight": 0,
 "propagateClick": false,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "maxHeight": 58,
 "width": 58,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "class": "IconButton",
 "transparencyActive": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "borderRadius": 0,
 "height": 58,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "toggle",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "paddingRight": 0,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "maps": [
  {
   "hfov": 18.52,
   "yaw": -29.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2430E8B_D95E_A93B_41C7_0C1C99BA83ED_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B62FA3_DD08_3848_41D6_73063773BD87",
   "pitch": -11.31,
   "yaw": -29.42,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.52,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 29)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7, this.camera_C5BE1904_DD08_5848_41D0_CB256EAC158B); this.mainPlayList.set('selectedIndex', 3)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A, this.camera_C5DC3913_DD08_5848_41E2_5E1211ABDC62); this.mainPlayList.set('selectedIndex', 9)",
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_C5AE590C_DD08_5858_41DB_823DB8609281); this.mainPlayList.set('selectedIndex', 5)",
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
 "class": "HotspotPanoramaOverlay",
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2446447_D95F_992B_41CD_4D904B227F99, this.camera_C5CCA91A_DD08_5878_41DA_34AF77CAA3F1); this.mainPlayList.set('selectedIndex', 11)",
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
 "class": "HotspotPanoramaOverlay",
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
 "id": "overlay_9EA667E6_D9AC_BD01_41C8_FDA6B207CFA1",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "id": "overlay_95CBF4E9_D9AB_9303_4155_131693CB42B5",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_92EE501E_DA64_B301_41E3_208B5D73B92D",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_C58F48FD_DD08_59B8_4198_5361D09583CC); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_96EA5B16_DA65_9501_41D4_9EB1A50C1865",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "autoplay": true,
 "id": "overlay_CEA315C1_DD19_CBC8_41DD_0FD38931A23C",
 "videoVisibleOnStop": false,
 "loop": true,
 "vfov": 2.48,
 "image": {
  "levels": [
   {
    "url": "media/overlay_CEA315C1_DD19_CBC8_41DD_0FD38931A23C_t.jpg",
    "width": 960,
    "class": "ImageResourceLevel",
    "height": 540
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -7.13,
 "useHandCursor": true,
 "rotationX": 7.87,
 "data": {
  "label": "Video"
 },
 "rotationY": -20.19,
 "yaw": -101.58,
 "enabledInCardboard": true,
 "class": "VideoPanoramaOverlay",
 "hfov": 4.8,
 "distance": 50,
 "roll": -3.69,
 "blending": 0,
 "video": {
  "width": 960,
  "class": "VideoResource",
  "height": 540,
  "mp4Url": "media/video_CCB0F197_DD08_C848_41CF_88F56BB718E1.mp4"
 }
},
{
 "maps": [
  {
   "hfov": 18.26,
   "yaw": -8.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_CB3FBBF6_DD18_3FC8_41E4_2C74F45E0213",
   "pitch": -14.75,
   "yaw": -8.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.26,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000, this.camera_CAB3CB59_DD08_58F8_41D9_DC94FE60A530); this.mainPlayList.set('selectedIndex', 7)",
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
   "hfov": 16.87,
   "yaw": 25.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_CB3C7BF6_DD18_3FC8_41E2_4BEC1B545780",
   "pitch": -9.74,
   "yaw": 25.45,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.87,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB, this.camera_CACD0B8E_DD08_5858_41EA_75A41FAF648F); this.mainPlayList.set('selectedIndex', 6)",
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
   "hfov": 15.53,
   "yaw": 81.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_CB3C0BF6_DD18_3FC8_41CB_35FA86767EBA",
   "pitch": -18.09,
   "yaw": 81.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.53,
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
   "hfov": 16.7,
   "yaw": 161.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_CB3CBBF6_DD18_3FC8_41DC_340065152334",
   "pitch": -15.34,
   "yaw": 161.99,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.7,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A, this.camera_CAA2AB61_DD08_58C8_41BB_49D2D8408799); this.mainPlayList.set('selectedIndex', 9)",
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
   "hfov": 17.73,
   "yaw": -48.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_4_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_CB3D5BF6_DD18_3FC8_41E9_CFF7FC4F4E22",
   "pitch": -11.7,
   "yaw": -48.11,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.73,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4, this.camera_CA962B4A_DD08_58D8_41E3_B19CB11FA58C); this.mainPlayList.set('selectedIndex', 36)",
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
   "hfov": 13.96,
   "yaw": 120.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_5_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_CB3DABF6_DD18_3FC8_419A_30F4A9964CDD",
   "pitch": -2.46,
   "yaw": 120.86,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.96,
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
   "hfov": 16.85,
   "yaw": -94.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_6_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_CB3A7BF6_DD18_3FC8_41E8_3BC949C24A5F",
   "pitch": -24.29,
   "yaw": -94.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.85,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3, this.camera_CAAF2B68_DD08_58D8_41E0_B49B5387564E); this.mainPlayList.set('selectedIndex', 35)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E, this.camera_CADE0B7C_DD08_58B8_41E8_E64A3577D81D); this.mainPlayList.set('selectedIndex', 4)",
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
 "autoplay": true,
 "id": "overlay_CE092FE4_DD08_57C8_41C7_8C3263621DD7",
 "videoVisibleOnStop": false,
 "loop": true,
 "vfov": 4.1,
 "image": {
  "levels": [
   {
    "url": "media/overlay_CE092FE4_DD08_57C8_41C7_8C3263621DD7_t.jpg",
    "width": 960,
    "class": "ImageResourceLevel",
    "height": 540
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -4.05,
 "useHandCursor": true,
 "rotationX": 7.18,
 "data": {
  "label": "Video"
 },
 "rotationY": 15.97,
 "yaw": 28.37,
 "enabledInCardboard": true,
 "class": "VideoPanoramaOverlay",
 "hfov": 8.78,
 "distance": 50,
 "roll": -0.57,
 "blending": 0,
 "video": {
  "width": 960,
  "class": "VideoResource",
  "height": 540,
  "mp4Url": "media/video_CCB0F197_DD08_C848_41CF_88F56BB718E1.mp4"
 }
},
{
 "maps": [
  {
   "hfov": 13.78,
   "yaw": 79.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_8_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_CB3A9BF6_DD18_3FC8_41EA_29EAE51E0BD2",
   "pitch": -9.63,
   "yaw": 79.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.78,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2446447_D95F_992B_41CD_4D904B227F99, this.camera_CA851B51_DD08_58C8_41E7_5848218A50E9); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_CFFE1BF6_DD18_3FC8_41E9_94CC8785A6D7",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED, this.camera_C5155882_DD08_5848_41D9_523194B4DB2F); this.mainPlayList.set('selectedIndex', 33)",
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
 "maps": [
  {
   "hfov": 18.39,
   "yaw": -92.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2AA5F92_DD08_3848_41A3_270BF2E927DE",
   "pitch": -10.13,
   "yaw": -92.67,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.39,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB, this.camera_C8AF8A33_DD08_5848_41E6_5A6005B63354); this.mainPlayList.set('selectedIndex', 2)",
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
   "hfov": 13.88,
   "yaw": 15.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0_HS_1_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_CB2BABE6_DD18_3FC8_41EA_59C551AEF1AD",
   "pitch": -11.4,
   "yaw": 15.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.88,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7, this.camera_C8C16A41_DD08_58C8_41E8_31A9D1ABCEE4); this.mainPlayList.set('selectedIndex', 3)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF, this.camera_C8CC6A48_DD08_58D8_41E6_9500F292DABD); this.mainPlayList.set('selectedIndex', 38)",
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
   "hfov": 12.6,
   "yaw": -68.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_CE565FA5_DD08_7848_41E5_03E0F5115BD1",
   "pitch": -32.65,
   "yaw": -68.56,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.6,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB, this.camera_C8D8EA39_DD08_58B8_41D3_0469BFB9B651); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D26AE543_DD09_C8C8_4167_43EA93E0D36A",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2, this.camera_C87729CB_DD08_5BD8_41B1_A29708719E04); this.mainPlayList.set('selectedIndex', 37)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D270695C_D95E_EBDD_41E6_6F31051946D3, this.camera_C48EB978_DD08_58B8_4175_79B777AB163F); this.mainPlayList.set('selectedIndex', 35)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_C480F971_DD08_58C9_41E8_73CF28B7E670); this.mainPlayList.set('selectedIndex', 8)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D2446447_D95F_992B_41CD_4D904B227F99, this.camera_C507ABCC_DD08_5FD8_41E3_2ADC98E0C23C); this.mainPlayList.set('selectedIndex', 11)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477, this.camera_CBE96B01_DD08_5848_41D0_98B57930E56B); this.mainPlayList.set('selectedIndex', 18)",
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
   "hfov": 16.61,
   "yaw": -32.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0_HS_1_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_D2B55F9E_DD08_3878_41EB_19D71F1507AD",
   "pitch": -11.11,
   "yaw": -32.86,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.61,
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC, this.camera_C4439954_DD08_58CF_41E6_6C2A3FF09EE3); this.mainPlayList.set('selectedIndex', 15)",
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2449E7A_D95E_69E5_41E7_97426A243776, this.camera_C4600963_DD08_58C9_41D1_0371544F0266); this.mainPlayList.set('selectedIndex', 25)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E, this.camera_C473E95B_DD08_58F9_41EB_9E153DDD3CAC); this.mainPlayList.set('selectedIndex', 4)",
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC, this.camera_C455894D_DD08_58D9_41D9_A21D12B7F511); this.mainPlayList.set('selectedIndex', 0)",
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_C490496A_DD08_58DB_41C5_BCFE908C8BC4); this.mainPlayList.set('selectedIndex', 5)",
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
 "autoplay": true,
 "id": "overlay_CFA57A32_DD18_5848_41D1_6085ED5026E3",
 "videoVisibleOnStop": false,
 "loop": true,
 "vfov": 2.23,
 "image": {
  "levels": [
   {
    "url": "media/overlay_CFA57A32_DD18_5848_41D1_6085ED5026E3_t.jpg",
    "width": 960,
    "class": "ImageResourceLevel",
    "height": 540
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -1.53,
 "useHandCursor": true,
 "rotationX": 0.77,
 "data": {
  "label": "Video"
 },
 "rotationY": -53.1,
 "yaw": 27.96,
 "enabledInCardboard": true,
 "class": "VideoPanoramaOverlay",
 "hfov": 5.18,
 "distance": 50,
 "roll": -1.07,
 "blending": 0,
 "video": {
  "width": 960,
  "class": "VideoResource",
  "height": 540,
  "mp4Url": "media/video_CCB0F197_DD08_C848_41CF_88F56BB718E1.mp4"
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
   "click": "this.startPanoramaWithCamera(this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC, this.camera_C5D51C68_DD08_58D8_41CE_08E516C4E462); this.mainPlayList.set('selectedIndex', 15)",
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
   "hfov": 14.86,
   "yaw": 20.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B8AFA5_DD08_3848_41C6_A20CF4670C7A",
   "pitch": -5.99,
   "yaw": 20.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.86,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC, this.camera_CAF18850_DD08_58C8_41CC_77291E3D1C8E); this.mainPlayList.set('selectedIndex', 0)",
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
   "hfov": 13.79,
   "yaw": 167.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0_HS_1_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_D2B87FA5_DD08_3848_41CF_E7A87638452A",
   "pitch": -9.34,
   "yaw": 167.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.79,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84, this.camera_CAFEC862_DD08_58C8_41C0_F31604F9CB04); this.mainPlayList.set('selectedIndex', 39)",
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
   "hfov": 17.29,
   "yaw": 91.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B85FA5_DD08_3848_41C7_C8704F5E1F9A",
   "pitch": -12.39,
   "yaw": 91.86,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.29,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884, this.camera_CAE9F870_DD08_58C8_41D5_71C296A9D7A6); this.mainPlayList.set('selectedIndex', 40)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E, this.camera_C898B9F8_DD08_5BB8_41E3_A983B61A536B); this.mainPlayList.set('selectedIndex', 29)",
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
   "hfov": 16.64,
   "yaw": -70.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B76FA1_DD08_3848_41D2_BC52C481E60D",
   "pitch": -5.61,
   "yaw": -70.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.64,
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
   "click": "this.startPanoramaWithCamera(this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B, this.camera_C892D9F1_DD08_5BC8_41C7_B7CD547FB753); this.mainPlayList.set('selectedIndex', 27)",
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
   "hfov": 18.89,
   "yaw": 86.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B5EF9B_DD08_3878_41DA_8DB4710AF462",
   "pitch": -18.1,
   "yaw": 86.45,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.89,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2446447_D95F_992B_41CD_4D904B227F99, this.camera_C8A1FA24_DD08_5848_41E0_A54B09AB3FBE); this.mainPlayList.set('selectedIndex', 11)",
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
   "hfov": 17.5,
   "yaw": -89.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B5BF9B_DD08_3878_41DA_DD99E4C1A435",
   "pitch": -16.92,
   "yaw": -89.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.5,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884, this.camera_C8A9EA2B_DD08_5858_41E0_A9105C7D52FD); this.mainPlayList.set('selectedIndex', 40)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D364651D_DCF8_4878_41BB_DE8A29355436",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000, this.camera_C418A930_DD08_5847_41D5_A7BC0AC9C064); this.mainPlayList.set('selectedIndex', 7)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_C5EAC928_DD08_5858_41BC_2ECC2144A8DA); this.mainPlayList.set('selectedIndex', 5)",
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_C5FA9921_DD08_5848_41B3_D7D8D5D79F53); this.mainPlayList.set('selectedIndex', 8)",
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A, this.camera_C4071937_DD08_5849_41E1_CA03E1706291); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_91077E97_DA6C_AF0F_41B9_2616010A8C1A",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "autoplay": true,
 "id": "overlay_CCCBB3B6_DD08_4848_41E0_2A537118A343",
 "videoVisibleOnStop": false,
 "loop": true,
 "vfov": 18.25,
 "image": {
  "levels": [
   {
    "url": "media/overlay_CCCBB3B6_DD08_4848_41E0_2A537118A343_t.jpg",
    "width": 960,
    "class": "ImageResourceLevel",
    "height": 540
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -27.67,
 "useHandCursor": true,
 "rotationX": 32.63,
 "data": {
  "label": "Video"
 },
 "rotationY": 15.6,
 "yaw": 46.09,
 "enabledInCardboard": true,
 "class": "VideoPanoramaOverlay",
 "hfov": 35.04,
 "distance": 50,
 "roll": 10.36,
 "blending": 0,
 "video": {
  "width": 960,
  "class": "VideoResource",
  "height": 540,
  "mp4Url": "media/video_CCB0F197_DD08_C848_41CF_88F56BB718E1.mp4"
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
   "click": "this.startPanoramaWithCamera(this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC, this.camera_CAFBBB9B_DD08_5878_41DF_F73D8D823D37); this.mainPlayList.set('selectedIndex', 15)",
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC, this.camera_CAEAABAD_DD08_5858_41E5_6EC00FB2035E); this.mainPlayList.set('selectedIndex', 23)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877, this.camera_C518FBBA_DD08_5FB8_41DF_B47F383B259E); this.mainPlayList.set('selectedIndex', 24)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477, this.camera_C88BDA0E_DD08_5858_41E4_364801EF40B8); this.mainPlayList.set('selectedIndex', 18)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D2446447_D95F_992B_41CD_4D904B227F99, this.camera_C5887C52_DD08_58C8_41E2_435ADDA1182F); this.mainPlayList.set('selectedIndex', 11)",
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
   "hfov": 15.62,
   "yaw": -152.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B38F99_DD08_3878_41E4_2C84DE5BF00D",
   "pitch": -14.55,
   "yaw": -152.87,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.62,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D27C444E_D95E_F93D_41E8_21F52D95DBF2, this.camera_C5B75C59_DD08_58F8_41C8_D4C9F34E9D2E); this.mainPlayList.set('selectedIndex', 37)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D3B5C5A3_DCF8_C849_41D6_FC2B7D94C937",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "maps": [
  {
   "hfov": 15.18,
   "yaw": -32.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B9BFA3_DD08_3848_41B3_5386B834D936",
   "pitch": -19.76,
   "yaw": -32.86,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.18,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E, this.camera_C5A6CC61_DD08_58C8_41D2_8DC0E024C146); this.mainPlayList.set('selectedIndex', 29)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB, this.camera_CA4BCB34_DD08_5848_41EA_0C863C4C39E7); this.mainPlayList.set('selectedIndex', 26)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E, this.camera_CA5D9B2C_DD08_5858_41EB_684EF539B974); this.mainPlayList.set('selectedIndex', 29)",
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
   "click": "this.mainPlayList.set('selectedIndex', 31)",
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
   "click": "this.mainPlayList.set('selectedIndex', 30)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25, this.camera_CA2E8B25_DD08_5848_41D3_B61A31EC3CE4); this.mainPlayList.set('selectedIndex', 28)",
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
   "hfov": 11,
   "yaw": -80.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B72FA2_DD08_3848_41E6_6017C50137E3",
   "pitch": -18.69,
   "yaw": -80.99,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25, this.camera_C540DC0A_DD08_5858_41CF_23D9C2108387); this.mainPlayList.set('selectedIndex', 28)",
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
   "hfov": 14.96,
   "yaw": -56.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B6FFA2_DD08_3848_41E3_70C68686B999",
   "pitch": -15.64,
   "yaw": -56.99,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.96,
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
   "hfov": 14.35,
   "yaw": 121.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B6DFA2_DD08_3848_41E5_CA611C77CCA6",
   "pitch": -9.44,
   "yaw": 121.77,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.35,
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
   "hfov": 16.34,
   "yaw": -165.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B69FA2_DD08_3848_41CD_C180699BDB55",
   "pitch": -15.05,
   "yaw": -165.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.34,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C, this.camera_C5342BD9_DD08_5FF8_41D3_8A39294182B7); this.mainPlayList.set('selectedIndex', 31)",
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
   "hfov": 15.21,
   "yaw": -140.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0_HS_4_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_D2B67FA2_DD08_3848_41A8_D69F93109DD1",
   "pitch": -17.31,
   "yaw": -140.4,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.21,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D243393E_D95E_AB5D_41CA_FCAAAEEF6F33, this.camera_C5234BEB_DD08_5FD8_41DF_06099D31AFC6); this.mainPlayList.set('selectedIndex', 32)",
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
   "hfov": 14.42,
   "yaw": -80.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0_HS_5_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B65FA2_DD08_3848_41E6_A34A23876ECD",
   "pitch": -34.52,
   "yaw": -80.07,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.42,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B, this.camera_C5522BF8_DD08_5FB8_41CE_817B955BDAD5); this.mainPlayList.set('selectedIndex', 27)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF, this.camera_C57C3C29_DD08_5858_41D9_510E38EEF912); this.mainPlayList.set('selectedIndex', 1)",
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
   "hfov": 17.95,
   "yaw": 62.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2ACDF93_DD08_3848_41E4_A9FAF3308A42",
   "pitch": -32.36,
   "yaw": 62.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.95,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC, this.camera_C54F8C17_DD08_5848_41C2_F20204AE0A8D); this.mainPlayList.set('selectedIndex', 0)",
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2449E7A_D95E_69E5_41E7_97426A243776, this.camera_CBFDCAFA_DD08_59BB_41D0_69C18854E301); this.mainPlayList.set('selectedIndex', 25)",
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2719E7B_D95E_69DB_41DA_B678F555831B, this.camera_CBCFBAF3_DD08_59C9_41E9_9E4558DDF82C); this.mainPlayList.set('selectedIndex', 27)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D2485E7C_D95E_A9DD_41C0_4CCF7FE22DED, this.camera_CBC23AEC_DD08_59DF_41DF_5BDF01AE9EC5); this.mainPlayList.set('selectedIndex', 33)",
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
 "class": "HotspotPanoramaOverlay",
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
 "id": "overlay_9359013A_DA64_9501_41E1_413334E81E17",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 34)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_901AD77A_DA64_9D01_41D8_909D144D58C4",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C, this.camera_C581B8F6_DD08_59CB_41D1_1D43F37E3066); this.mainPlayList.set('selectedIndex', 22)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D24363FD_D95F_9EDF_415F_6D5DD69E7CCC, this.camera_C59168EF_DD08_59D9_41E0_1EA15D832E89); this.mainPlayList.set('selectedIndex', 23)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C, this.camera_C8B96A1D_DD08_5878_41E3_3A727CE563F9); this.mainPlayList.set('selectedIndex', 22)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D2486924_D95E_6B6D_4193_7AEA6D50F877, this.camera_C8B3AA15_DD08_5848_41DC_CFC187CE3332); this.mainPlayList.set('selectedIndex', 24)",
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
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "maxHeight": 58,
 "width": 58,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "class": "IconButton",
 "transparencyActive": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "borderRadius": 0,
 "height": 58,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "toggle",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton HS "
 },
 "paddingRight": 0,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "maxHeight": 58,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "width": 58,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "class": "IconButton",
 "transparencyActive": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "borderRadius": 0,
 "height": 58,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton VR"
 },
 "paddingRight": 0,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "maxWidth": 49,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "maxHeight": 37,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "right": 30,
 "width": 100,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "class": "IconButton",
 "transparencyActive": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 75,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "bottom": 8,
 "mode": "push",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton VR"
 },
 "paddingRight": 0,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "maxHeight": 58,
 "width": 58,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "class": "IconButton",
 "transparencyActive": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "borderRadius": 0,
 "height": 58,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "toggle",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton GYRO"
 },
 "paddingRight": 0,
 "propagateClick": true,
 "cursor": "hand"
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
   "click": "this.startPanoramaWithCamera(this.panorama_D244A966_D95F_EBED_41C1_74C2A29AF3DC, this.camera_CA313B17_DD08_5848_41E9_9D6D5DCDF038); this.mainPlayList.set('selectedIndex', 15)",
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477, this.camera_CA21FB1F_DD08_5878_41E3_B442E25DE9C2); this.mainPlayList.set('selectedIndex', 18)",
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
   "hfov": 10.99,
   "yaw": 53.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B06F98_DD08_3878_41B7_4C051BEF2463",
   "pitch": -1.16,
   "yaw": 53.38,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.99,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000, this.camera_C54468D8_DD08_59F8_41D7_AD28A9CC0861); this.mainPlayList.set('selectedIndex', 7)",
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
   "hfov": 18.66,
   "yaw": 46.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B04F98_DD08_3878_41C8_169D3761529C",
   "pitch": -15.42,
   "yaw": 46.36,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.66,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_C527C8C0_DD08_59C8_41CB_15DAA98C20A0); this.mainPlayList.set('selectedIndex', 8)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_C55698CD_DD08_59D8_4191_B842D44E12F2); this.mainPlayList.set('selectedIndex', 5)",
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
   "hfov": 10.38,
   "yaw": 74.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_CA2ED7D2_DD08_57C8_41EA_96E1E3E8E528",
   "pitch": -1.51,
   "yaw": 74.01,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.38,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB, this.camera_C56398E8_DD08_59C7_41E6_4865CEB45390); this.mainPlayList.set('selectedIndex', 6)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E, this.camera_C574F8E0_DD08_59C7_41E2_A55FD84F4402); this.mainPlayList.set('selectedIndex', 4)",
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
 "autoplay": true,
 "id": "overlay_CFA52CB6_DD08_784B_41E9_B6D48FF4C09A",
 "videoVisibleOnStop": false,
 "loop": true,
 "vfov": 3.19,
 "image": {
  "levels": [
   {
    "url": "media/overlay_CFA52CB6_DD08_784B_41E9_B6D48FF4C09A_t.jpg",
    "width": 960,
    "class": "ImageResourceLevel",
    "height": 540
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -2.4,
 "useHandCursor": true,
 "rotationX": -27.01,
 "data": {
  "label": "Video"
 },
 "rotationY": -14.8,
 "yaw": 79.3,
 "enabledInCardboard": true,
 "class": "VideoPanoramaOverlay",
 "hfov": 5.04,
 "distance": 50,
 "roll": -1.75,
 "blending": 0,
 "video": {
  "width": 960,
  "class": "VideoResource",
  "height": 540,
  "mp4Url": "media/video_CCB0F197_DD08_C848_41CF_88F56BB718E1.mp4"
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
   "click": "this.startPanoramaWithCamera(this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A, this.camera_CADAE831_DD08_5848_41E6_A19AEB85E8C6); this.mainPlayList.set('selectedIndex', 9)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB, this.camera_CAC66843_DD08_58C8_41D9_5A9FCC756F62); this.mainPlayList.set('selectedIndex', 6)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_CAA41817_DD08_5848_41E5_EA92403BDDFA); this.mainPlayList.set('selectedIndex', 8)",
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
   "click": "this.mainPlayList.set('selectedIndex', 35)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_CAAF5824_DD08_5848_41E5_FE003D0FE66F); this.mainPlayList.set('selectedIndex', 5)",
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
 "autoplay": true,
 "id": "overlay_CFE79476_DD08_48C8_41E4_488F96CAC310",
 "videoVisibleOnStop": false,
 "loop": true,
 "vfov": 7.91,
 "image": {
  "levels": [
   {
    "url": "media/overlay_CFE79476_DD08_48C8_41E4_488F96CAC310_t.jpg",
    "width": 960,
    "class": "ImageResourceLevel",
    "height": 540
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -6.73,
 "useHandCursor": true,
 "rotationX": 15.77,
 "data": {
  "label": "Video"
 },
 "rotationY": 12.4,
 "yaw": 56.4,
 "enabledInCardboard": true,
 "class": "VideoPanoramaOverlay",
 "hfov": 11.32,
 "distance": 50,
 "roll": 3.88,
 "blending": 0,
 "video": {
  "width": 960,
  "class": "VideoResource",
  "height": 540,
  "mp4Url": "media/video_CCB0F197_DD08_C848_41CF_88F56BB718E1.mp4"
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
   "click": "this.startPanoramaWithCamera(this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB, this.camera_C5F33C77_DD08_58C8_41C6_2C95FDFD06A9); this.mainPlayList.set('selectedIndex', 26)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7, this.camera_C5C30C6F_DD08_58D8_41A4_E7DFA414F214); this.mainPlayList.set('selectedIndex', 3)",
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
   "hfov": 14.39,
   "yaw": -125.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2BBEFA6_DD08_3848_41E4_243BB5A314AD",
   "pitch": -18.09,
   "yaw": -125.51,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.39,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2791F37_D95E_E76B_41B8_3CF0B1E0AD84, this.camera_C8E04A57_DD08_58C8_41C1_0EB019BC0003); this.mainPlayList.set('selectedIndex', 39)",
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
   "hfov": 17.93,
   "yaw": 45.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0_HS_1_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_D2BBCFA6_DD08_3848_41D3_FDA420A6E964",
   "pitch": -14.06,
   "yaw": 45.02,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.93,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF, this.camera_C8F53A50_DD08_58C8_41C2_73B8C8BA6475); this.mainPlayList.set('selectedIndex', 38)",
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
   "hfov": 12.89,
   "yaw": 82.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2BBAFA6_DD08_3848_41C9_1F12EE9C1E66",
   "pitch": -18.3,
   "yaw": 82.71,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.89,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D275C425_D95F_F96F_41DB_79786819224B, this.camera_C8EB9A5E_DD08_58F8_41E2_5FFFE093DD4A); this.mainPlayList.set('selectedIndex', 14)",
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
   "hfov": 17.99,
   "yaw": 20,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2AF6F95_DD08_3848_41C8_D74A3F89AD2D",
   "pitch": -0.41,
   "yaw": 20,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.99,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D277598A_D95F_EB25_41E5_0800136A96D4, this.camera_CB977AC0_DD08_59C7_41D1_8270796AE802); this.mainPlayList.set('selectedIndex', 12)",
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
   "hfov": 15.79,
   "yaw": -155.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_CB82E82A_DD18_3858_41E4_548023BE2D4A",
   "pitch": -11.79,
   "yaw": -155.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.79,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2442EE6_D95F_A6ED_41E5_CA114C381000, this.camera_CB83CAC7_DD08_59C9_41BE_29DB895249E6); this.mainPlayList.set('selectedIndex', 7)",
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
   "hfov": 15.34,
   "yaw": -107.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2AF2F95_DD08_3848_41E5_6C3C6B1CA508",
   "pitch": -22.45,
   "yaw": -107.88,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.34,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB, this.camera_CBD5FAE4_DD08_59CF_41B1_8F79A52C6DF8); this.mainPlayList.set('selectedIndex', 6)",
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
   "hfov": 11.39,
   "yaw": -12.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_3_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_D2AEFF95_DD08_3848_41E5_EA283FE32630",
   "pitch": -1.96,
   "yaw": -12.09,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.39,
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
   "hfov": 16.42,
   "yaw": -71.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2AEDF95_DD08_3848_41D1_F7B2D98A7544",
   "pitch": -2.87,
   "yaw": -71.07,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.42,
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
   "hfov": 15.56,
   "yaw": 121.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_5_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2AEAF95_DD08_3848_41C4_1A35CC69BBE7",
   "pitch": -3.61,
   "yaw": 121.26,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.56,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A, this.camera_CB8D8ACF_DD08_59D9_41AA_1F7B693E9FCE); this.mainPlayList.set('selectedIndex', 9)",
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
   "hfov": 13.57,
   "yaw": 74.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_6_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2AE8F95_DD08_3848_41E8_C56FB95CF7FA",
   "pitch": -12.2,
   "yaw": 74.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.57,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7, this.camera_CB6DCAB8_DD08_59B8_41D1_197333994F86); this.mainPlayList.set('selectedIndex', 3)",
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
   "hfov": 11.8,
   "yaw": 71.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_7_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2AE6F96_DD08_3848_41E9_EBDE8976C71B",
   "pitch": -29.59,
   "yaw": 71.95,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.8,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E, this.camera_CBA7DADD_DD08_59F9_41D9_FBFA470F8A0B); this.mainPlayList.set('selectedIndex', 4)",
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
   "hfov": 14.86,
   "yaw": -12.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2441443_D95F_992B_41D8_3C1223342761_0_HS_8_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_CD80166E_DCF8_48D8_41E9_D7E675A2C343",
   "pitch": -21.14,
   "yaw": -12.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.86,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2446447_D95F_992B_41CD_4D904B227F99, this.camera_CBBA1AD6_DD08_59CB_41E3_675352FB727F); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D3A81821_DCF8_3848_41E5_84D663271BA4",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "autoplay": true,
 "id": "overlay_CE12EBF8_DD0B_DFB8_41C2_69BD086094CF",
 "videoVisibleOnStop": false,
 "loop": true,
 "vfov": 5.76,
 "image": {
  "levels": [
   {
    "url": "media/overlay_CE12EBF8_DD0B_DFB8_41C2_69BD086094CF_t.jpg",
    "width": 960,
    "class": "ImageResourceLevel",
    "height": 540
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -11.19,
 "useHandCursor": true,
 "rotationX": 19.3,
 "data": {
  "label": "Video"
 },
 "rotationY": -48.86,
 "yaw": -105.05,
 "enabledInCardboard": true,
 "class": "VideoPanoramaOverlay",
 "hfov": 12.07,
 "distance": 50,
 "roll": -7.05,
 "blending": 0,
 "video": {
  "width": 960,
  "class": "VideoResource",
  "height": 540,
  "mp4Url": "media/video_CCB0F197_DD08_C848_41CF_88F56BB718E1.mp4"
 }
},
{
 "maps": [
  {
   "hfov": 18.89,
   "yaw": -14.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B2AF9A_DD08_3878_41DF_430F55155118",
   "pitch": 0.01,
   "yaw": -14.96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.89,
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
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_C502A88E_DD08_5858_41D0_A77184E21D69); this.mainPlayList.set('selectedIndex', 5)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D2446447_D95F_992B_41CD_4D904B227F99, this.camera_C50DD8A0_DD08_5848_41CF_75270E4F54B0); this.mainPlayList.set('selectedIndex', 11)",
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
   "hfov": 17.99,
   "yaw": 8.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0_HS_4_0_0_map.gif",
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
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B24F9B_DD08_3878_41E4_51C35086B945",
   "pitch": -17.7,
   "yaw": 8.06,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.99,
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
   "hfov": 16.3,
   "yaw": -43.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0_HS_5_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_D2B22F9B_DD08_3878_41BC_D11CEE4A61A5",
   "pitch": -2.55,
   "yaw": -43.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.3,
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
 "id": "overlay_CC423298_DCF9_C878_41E1_AEF103FB8825",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF, this.camera_C5994C49_DD08_58D8_41BE_80726FA749B0); this.mainPlayList.set('selectedIndex', 38)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884, this.camera_C56B2C37_DD08_5848_41E1_6FD0EBE2F456); this.mainPlayList.set('selectedIndex', 40)",
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
   "hfov": 19.24,
   "yaw": -171.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0_HS_0_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_D2B4EF9D_DD08_3878_41EA_06668542C858",
   "pitch": -16.52,
   "yaw": -171.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.24,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2448E90_D95F_A925_41E8_B306937D2F35, this.camera_C87C09D3_DD08_5BC8_41EA_13DBA6F0D85C); this.mainPlayList.set('selectedIndex', 19)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0, this.camera_C86B09EA_DD08_5BD8_41E9_B12C1ABA535F); this.mainPlayList.set('selectedIndex', 17)",
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
   "hfov": 17.55,
   "yaw": -4.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B4AF9D_DD08_3878_41DA_65B8B402266F",
   "pitch": -20.16,
   "yaw": -4.85,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.55,
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
   "hfov": 17.14,
   "yaw": 154.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B48F9D_DD08_3878_41D1_E393A511DF7E",
   "pitch": -23.41,
   "yaw": 154.31,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.14,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A, this.camera_C861C9DB_DD08_5BF8_41E7_9CBCD80052D2); this.mainPlayList.set('selectedIndex', 20)",
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
   "hfov": 17.66,
   "yaw": 125.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B46F9D_DD08_3878_41BC_602606787613",
   "pitch": -19.18,
   "yaw": 125.11,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.66,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D244A949_D95F_AB27_41AF_E0EE42A646B5, this.camera_C867B9E2_DD08_5BC8_41E2_6EC783F9D997); this.mainPlayList.set('selectedIndex', 21)",
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D275C425_D95F_F96F_41DB_79786819224B, this.camera_CB3F4A82_DD08_5848_41D1_6383114277B3); this.mainPlayList.set('selectedIndex', 14)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D2446ED5_D95F_E92F_41E2_F53C9CD3298E, this.camera_CB559A92_DD08_5848_41E5_27178AB6C856); this.mainPlayList.set('selectedIndex', 13)",
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F, this.camera_CB1F6A6C_DD08_58D8_41E7_AF86368849FA); this.mainPlayList.set('selectedIndex', 10)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D2441443_D95F_992B_41D8_3C1223342761, this.camera_CB330A7B_DD08_58B8_41D3_5BF486062709); this.mainPlayList.set('selectedIndex', 5)",
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
 "class": "HotspotPanoramaOverlay",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_CB140A65_DD08_58C8_4180_CA1BC17EB04F); this.mainPlayList.set('selectedIndex', 8)",
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D277598A_D95F_EB25_41E5_0800136A96D4, this.camera_CB083A74_DD08_58C8_4186_7AEA2C41EDBE); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9E37ABD3_D9A5_9507_41CB_9F91F7292BF1",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "id": "overlay_9180916E_D9A7_951E_41DA_ABA076E8E234",
 "data": {
  "label": "Arrow 04c"
 }
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
 "class": "HotspotPanoramaOverlay",
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
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E, this.camera_CB293A8A_DD08_5858_41C6_A1260176AE2C); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_931D1E55_DA5B_EF03_41BC_50B163E20E9E",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "maps": [
  {
   "hfov": 17.82,
   "yaw": -73.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D27083E3_D95E_BEEB_4196_BA8D856EE59C_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B9EFA3_DD08_3848_41A2_2A9C8649FE46",
   "pitch": -13.08,
   "yaw": -73.12,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.82,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E, this.camera_C4255946_DD08_58CB_41E8_5F6A47D33640); this.mainPlayList.set('selectedIndex', 29)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D2713441_D95F_B927_41E1_6B8B0A550425, this.camera_CA179B09_DD08_5858_41CA_50AEE8AC6F09); this.mainPlayList.set('selectedIndex', 8)",
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
   "hfov": 18,
   "yaw": 36.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.6
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B94FA4_DD08_3848_41D0_CD127239775C",
   "pitch": -5.6,
   "yaw": 36.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4, this.camera_CA031B10_DD08_5848_41E3_B252C76D3294); this.mainPlayList.set('selectedIndex', 36)",
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
   "hfov": 13.95,
   "yaw": 20.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2AD3F93_DD08_3848_41E8_5892374A1822",
   "pitch": -3.54,
   "yaw": 20.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.95,
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
   "hfov": 18.95,
   "yaw": -8.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2440F08_D95E_6725_41D0_4F7F9FC0DABF_0_HS_1_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_D2AD1F93_DD08_3848_41E7_5F2C1C221C3A",
   "pitch": -10.62,
   "yaw": -8.86,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.95,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB, this.camera_C437793E_DD08_58BB_41E2_0CAC7697E9D1); this.mainPlayList.set('selectedIndex', 2)",
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
   "hfov": 15.21,
   "yaw": 16.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B43F9D_DD08_3878_41E4_5B524CC6D8DD",
   "pitch": -7.57,
   "yaw": 16.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.21,
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
   "hfov": 17.46,
   "yaw": -37.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2448E90_D95F_A925_41E8_B306937D2F35_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D2B5AF9E_DD08_3878_41DB_231C6395F950",
   "pitch": -3.83,
   "yaw": -37.2,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.46,
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
   "click": "this.startPanoramaWithCamera(this.panorama_D2749949_D95F_AB27_41E5_D00915CF7477, this.camera_C53938AE_DD08_5858_41D2_95EF5973A89F); this.mainPlayList.set('selectedIndex', 18)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D24363EA_D95E_9EE5_41E6_1C731ACD4860, this.camera_CA674B42_DD08_58C8_41E1_F0AC7F64BA14); this.mainPlayList.set('selectedIndex', 34)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB, this.camera_CA795B3B_DD08_58B8_41E5_AADBE9A36F15); this.mainPlayList.set('selectedIndex', 26)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D2437EC6_D95E_E92D_41EA_EFFB70EC00F4, this.camera_C89DAA00_DD08_5848_41D5_97FCC09EC78C); this.mainPlayList.set('selectedIndex', 36)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F, this.camera_C8841A07_DD08_5848_41E1_ABD707E75B42); this.mainPlayList.set('selectedIndex', 10)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7, this.camera_CB4B7AA1_DD08_5848_41DA_2C549F194BA5); this.mainPlayList.set('selectedIndex', 3)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0, this.camera_CB618AB0_DD08_5848_41E7_400B27D05A81); this.mainPlayList.set('selectedIndex', 17)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D2774EB3_D95F_E96B_41E2_37D3C3847627, this.camera_CB754AA9_DD08_5858_41D1_7796BAAA7751); this.mainPlayList.set('selectedIndex', 16)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C, this.camera_CB5F0A9A_DD08_5878_41EA_0E701A10749B); this.mainPlayList.set('selectedIndex', 22)",
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
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "right": "0%",
 "contentOpaque": false,
 "class": "Container",
 "horizontalAlign": "center",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "height": 110,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "middle",
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "button menu sup"
 },
 "paddingRight": 0,
 "gap": 10,
 "propagateClick": true
},
{
 "horizontalAlign": "center",
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
 "right": "0%",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadow": false,
 "height": "85.959%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "bottom": "0%",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-button set"
 },
 "visible": false,
 "paddingRight": 0,
 "gap": 3,
 "propagateClick": true,
 "backgroundOpacity": 0
},
{
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "maxWidth": 3000,
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "maxHeight": 2,
 "right": "0%",
 "class": "Image",
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 2,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "bottom": 53,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "scaleMode": "fit_outside",
 "data": {
  "name": "white line"
 },
 "paddingRight": 0,
 "propagateClick": true
},
{
 "backgroundOpacity": 0,
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
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 30,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "height": 51,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "bottom": "0%",
 "verticalAlign": "middle",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-button set container"
 },
 "paddingRight": 0,
 "gap": 3,
 "propagateClick": true
},
{
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "backgroundColorDirection": "vertical",
 "right": "10%",
 "contentOpaque": false,
 "shadowSpread": 1,
 "class": "Container",
 "shadowColor": "#000000",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "bottom": "5%",
 "shadowBlurRadius": 25,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "shadowOpacity": 0.3,
 "propagateClick": false,
 "backgroundOpacity": 1
},
{
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "right": "10%",
 "contentOpaque": false,
 "class": "Container",
 "horizontalAlign": "right",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "layout": "vertical",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "bottom": "80%",
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container X global"
 },
 "paddingRight": 20,
 "gap": 10,
 "propagateClick": false
},
{
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "backgroundColorDirection": "vertical",
 "right": "10%",
 "contentOpaque": false,
 "shadowSpread": 1,
 "class": "Container",
 "shadowColor": "#000000",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "bottom": "5%",
 "shadowBlurRadius": 25,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "shadowOpacity": 0.3,
 "propagateClick": false,
 "backgroundOpacity": 1
},
{
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "right": "10%",
 "contentOpaque": false,
 "class": "Container",
 "horizontalAlign": "right",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "layout": "vertical",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "bottom": "80%",
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container X global"
 },
 "paddingRight": 20,
 "gap": 10,
 "propagateClick": false
},
{
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "right": "15%",
 "contentOpaque": false,
 "class": "Container",
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "bottom": "7%",
 "shadowBlurRadius": 25,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "shadowOpacity": 0.3,
 "propagateClick": false,
 "backgroundOpacity": 1
},
{
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "backgroundColorDirection": "vertical",
 "right": "10%",
 "contentOpaque": false,
 "class": "Container",
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "bottom": "5%",
 "shadowBlurRadius": 25,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "shadowOpacity": 0.3,
 "propagateClick": false,
 "backgroundOpacity": 1
},
{
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "right": "10%",
 "contentOpaque": false,
 "class": "Container",
 "horizontalAlign": "right",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "bottom": "80%",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container X global"
 },
 "paddingRight": 20,
 "gap": 10,
 "propagateClick": false
},
{
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "right": "15%",
 "contentOpaque": false,
 "shadowSpread": 1,
 "class": "Container",
 "shadowColor": "#000000",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "layout": "vertical",
 "scrollBarMargin": 2,
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "bottom": "7%",
 "shadowBlurRadius": 25,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "shadowOpacity": 0.3,
 "propagateClick": false,
 "backgroundOpacity": 1
},
{
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "right": "15%",
 "contentOpaque": false,
 "shadowSpread": 1,
 "class": "Container",
 "shadowColor": "#000000",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "layout": "vertical",
 "scrollBarMargin": 2,
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "bottom": "7%",
 "shadowBlurRadius": 25,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "shadowOpacity": 0.3,
 "propagateClick": false,
 "backgroundOpacity": 1
},
{
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "right": "15%",
 "contentOpaque": false,
 "shadowSpread": 1,
 "class": "Container",
 "shadowColor": "#000000",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "layout": "vertical",
 "scrollBarMargin": 2,
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "bottom": "7%",
 "shadowBlurRadius": 25,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "shadowOpacity": 0.3,
 "propagateClick": false,
 "backgroundOpacity": 1
},
{
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "backgroundColorDirection": "vertical",
 "right": "10%",
 "contentOpaque": false,
 "shadowSpread": 1,
 "class": "Container",
 "shadowColor": "#000000",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "bottom": "5%",
 "shadowBlurRadius": 25,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "shadowOpacity": 0.3,
 "propagateClick": false,
 "backgroundOpacity": 1
},
{
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "right": "10%",
 "contentOpaque": false,
 "class": "Container",
 "horizontalAlign": "right",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "layout": "vertical",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "bottom": "80%",
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container X global"
 },
 "paddingRight": 20,
 "gap": 10,
 "propagateClick": false
},
{
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
   "url": "media/panorama_D248CF04_D95E_672D_41E3_05E51EFAB30E_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D6EA7DD_DA6C_BD03_41DE_EB33B672075D",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "id": "AnimatedImageResource_8D6E07DD_DA6C_BD03_41C8_ED6055CA8693",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "id": "AnimatedImageResource_8BFF1B47_D9A4_B50F_41A0_7933F2121B6B",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "id": "AnimatedImageResource_8D6FD7DD_DA6C_BD03_41E5_B8E96A4A5ECF",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "id": "AnimatedImageResource_8BF8BB47_D9A4_B50F_41E8_D9B7AEF2FDF9",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "id": "AnimatedImageResource_8D6F47DD_DA6C_BD03_41E1_ADF30F8563D7",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
   "url": "media/panorama_D2713441_D95F_B927_41E1_6B8B0A550425_0_HS_8_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CB3A9BF6_DD18_3FC8_41EA_29EAE51E0BD2",
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
   "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2AA5F92_DD08_3848_41A3_270BF2E927DE",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
   "url": "media/panorama_D24C89CD_D95E_6B3F_41E4_47D90FB3B0AC_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CE565FA5_DD08_7848_41E5_03E0F5115BD1",
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
   "url": "media/panorama_D273B3E5_D95F_BEEF_41E5_1F89D9E1CF6A_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B55F9E_DD08_3878_41EB_19D71F1507AD",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "id": "AnimatedImageResource_8D6B27DD_DA6C_BD03_41DD_17EEF4E158C3",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "id": "AnimatedImageResource_8D6887DD_DA6C_BD03_41AB_095E61577CC3",
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
   "url": "media/panorama_D24419BF_D95E_6B5B_41D9_24F4AD803CF7_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D6857DD_DA6C_BD03_41D9_FECBE7A8F4EF",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "id": "AnimatedImageResource_8D69A7DD_DA6C_BD03_41E9_4C3CAE342213",
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
   "url": "media/panorama_D242A9C2_D95E_EB25_41E3_B28BD352E4FF_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B8AFA5_DD08_3848_41C6_A20CF4670C7A",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
   "url": "media/panorama_D243E3CD_D95E_9F3F_41E4_4B23C6843E25_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B76FA1_DD08_3848_41D2_BC52C481E60D",
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
   "url": "media/panorama_D275C425_D95F_F96F_41DB_79786819224B_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B5EF9B_DD08_3878_41DA_8DB4710AF462",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
   "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D63C7DD_DA6C_BD03_41D8_F8239B99E580",
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
   "url": "media/panorama_D276E98E_D95F_AB3D_41E9_253CC69F05FB_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D6367DD_DA6C_BD03_41E7_2C681BF39EF9",
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
   "url": "media/panorama_D2768EA5_D95F_A96F_41C5_3398822BCA7C_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D7697ED_DA6C_BD03_41E2_7ADBA9AA1EA4",
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
   "url": "media/panorama_D2746EEB_D95F_A6FB_41E0_6C0161991A6F_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B38F99_DD08_3878_41E4_2C84DE5BF00D",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
   "url": "media/panorama_D276291B_D95E_AB5B_41E7_B197F8A1984E_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B72FA2_DD08_3848_41E6_6017C50137E3",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
   "url": "media/panorama_D2748463_D95E_79EB_41A0_55BC0D1594CB_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2ACDF93_DD08_3848_41E4_A9FAF3308A42",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
   "url": "media/panorama_D27663AE_D95E_7F7D_41E1_940C312A08EB_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D7547FD_DA6C_BD03_41E0_B196685C698C",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
   "url": "media/panorama_D244D3FB_D95F_9EDB_41E4_93F8A59EE6B0_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D7D77ED_DA6C_BD03_41D1_3390F5A29F66",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
   "url": "media/panorama_D24429AE_D95F_AB7D_41DA_56C4A7270E9A_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CA2ED7D2_DD08_57C8_41EA_96E1E3E8E528",
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
   "url": "media/panorama_D242F506_D95E_9B2D_41E5_3DC0298B9884_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2BBEFA6_DD08_3848_41E4_243BB5A314AD",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "id": "AnimatedImageResource_D2AF6F95_DD08_3848_41C8_D74A3F89AD2D",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "id": "AnimatedImageResource_CD80166E_DCF8_48D8_41E9_D7E675A2C343",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
   "url": "media/panorama_D277598A_D95F_EB25_41E5_0800136A96D4_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B24F9B_DD08_3878_41E4_51C35086B945",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
   "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B4EF9D_DD08_3878_41EA_06668542C858",
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
   "url": "media/panorama_D2749949_D95F_AB27_41E5_D00915CF7477_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B4AF9D_DD08_3878_41DA_65B8B402266F",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
   "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D7A27ED_DA6C_BD03_41BD_826A73083B7B",
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
   "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D7BA7ED_DA6C_BD03_41E3_8EB46009ACB2",
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
   "url": "media/panorama_D2446447_D95F_992B_41CD_4D904B227F99_0_HS_6_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8D7B77ED_DA6C_BD03_41E9_C9D94AD9F56F",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
   "url": "media/panorama_D270695C_D95E_EBDD_41E6_6F31051946D3_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D2B94FA4_DD08_3848_41D0_CD127239775C",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "frameCount": 21,
 "frameDuration": 41
},
{
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
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "maxHeight": 60,
 "width": 60,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "class": "IconButton",
 "transparencyActive": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "borderRadius": 0,
 "height": 60,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "mode": "toggle",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "data": {
  "name": "image button menu"
 },
 "paddingRight": 0,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "maxHeight": 58,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "width": 58,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "class": "IconButton",
 "transparencyActive": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "borderRadius": 0,
 "height": 58,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "click": "this.shareTwitter(window.location.href)",
 "mode": "push",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton TWITTER"
 },
 "visible": false,
 "paddingRight": 0,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "maxHeight": 58,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "width": 58,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "class": "IconButton",
 "transparencyActive": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "borderRadius": 0,
 "height": 58,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "click": "this.shareFacebook(window.location.href)",
 "mode": "push",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton FB"
 },
 "visible": false,
 "paddingRight": 0,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "textDecoration": "none",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "width": 120,
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "iconHeight": 0,
 "class": "Button",
 "fontFamily": "Montserrat",
 "rollOverShadow": false,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "shadowSpread": 1,
 "iconBeforeLabel": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "borderColor": "#000000",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "height": 40,
 "shadow": false,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 12,
 "label": "HOUSE INFO",
 "pressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "fontStyle": "normal",
 "shadowBlurRadius": 15,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "center",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button house info"
 },
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "backgroundColorRatios": [
  0
 ],
 "visible": false,
 "paddingRight": 0,
 "fontWeight": "bold",
 "gap": 5,
 "iconWidth": 0,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "textDecoration": "none",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "width": 130,
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "class": "Button",
 "fontFamily": "Montserrat",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "iconBeforeLabel": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "borderColor": "#000000",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "height": 40,
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 12,
 "label": "PANORAMA LIST",
 "pressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "fontStyle": "normal",
 "shadowBlurRadius": 15,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "center",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button panorama list"
 },
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "fontWeight": "bold",
 "gap": 5,
 "iconWidth": 32,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "textDecoration": "none",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "width": 90,
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "class": "Button",
 "fontFamily": "Montserrat",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "iconBeforeLabel": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "borderColor": "#000000",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "height": 40,
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 12,
 "label": "LOCATION",
 "pressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "fontStyle": "normal",
 "shadowBlurRadius": 15,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "center",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button location"
 },
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "fontWeight": "bold",
 "gap": 5,
 "iconWidth": 32,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "textDecoration": "none",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "width": 103,
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "class": "Button",
 "fontFamily": "Montserrat",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "iconBeforeLabel": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "borderColor": "#000000",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "height": 40,
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 12,
 "label": "FLOORPLAN",
 "pressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "fontStyle": "normal",
 "shadowBlurRadius": 15,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "center",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button floorplan"
 },
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "paddingRight": 0,
 "fontWeight": "bold",
 "gap": 5,
 "iconWidth": 32,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "textDecoration": "none",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "width": 112,
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "class": "Button",
 "fontFamily": "Montserrat",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "iconBeforeLabel": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "borderColor": "#000000",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "height": 40,
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 12,
 "label": "PHOTOALBUM",
 "pressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "fontStyle": "normal",
 "shadowBlurRadius": 15,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "center",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button photoalbum"
 },
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "paddingRight": 0,
 "fontWeight": "bold",
 "gap": 5,
 "iconWidth": 32,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "textDecoration": "none",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "id": "Button_1B9A3D00_16C4_0505_41B2_6830155B7D52",
 "width": 90,
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "class": "Button",
 "fontFamily": "Montserrat",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "iconBeforeLabel": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "borderColor": "#000000",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "height": 40,
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 12,
 "label": "REALTOR",
 "pressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "fontStyle": "normal",
 "shadowBlurRadius": 15,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "center",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button realtor"
 },
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "paddingRight": 0,
 "fontWeight": "bold",
 "gap": 5,
 "iconWidth": 32,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "backgroundColorDirection": "vertical",
 "width": "85%",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "middle",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-left"
 },
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "gap": 10,
 "propagateClick": false,
 "backgroundOpacity": 1
},
{
 "horizontalAlign": "left",
 "paddingBottom": 20,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "backgroundColorDirection": "vertical",
 "width": "50%",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 50,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 460,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "overflow": "visible",
 "scrollBarColor": "#0069A3",
 "scrollBarOpacity": 0.51,
 "data": {
  "name": "-right"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 50,
 "gap": 0,
 "propagateClick": false,
 "backgroundOpacity": 1
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "maxHeight": 60,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "width": "25%",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "class": "IconButton",
 "transparencyActive": false,
 "minHeight": 50,
 "paddingLeft": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "height": "75%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "mode": "push",
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "paddingRight": 0,
 "propagateClick": false,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "backgroundColorDirection": "vertical",
 "width": "85%",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "middle",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-left"
 },
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "gap": 10,
 "propagateClick": false,
 "backgroundOpacity": 1
},
{
 "horizontalAlign": "left",
 "paddingBottom": 20,
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "backgroundColorDirection": "vertical",
 "width": "50%",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 50,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 460,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "overflow": "visible",
 "scrollBarColor": "#0069A3",
 "scrollBarOpacity": 0.51,
 "data": {
  "name": "-right"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 50,
 "gap": 0,
 "propagateClick": false,
 "backgroundOpacity": 1
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "maxHeight": 60,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "width": "25%",
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "class": "IconButton",
 "transparencyActive": false,
 "minHeight": 50,
 "paddingLeft": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "height": "75%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "mode": "push",
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "paddingRight": 0,
 "propagateClick": false,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "contentOpaque": false,
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "height": 140,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "header"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "propagateClick": false
},
{
 "paddingBottom": 70,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "width": "100%",
 "verticalAlign": "middle",
 "itemThumbnailScaleMode": "fit_outside",
 "itemThumbnailWidth": 220,
 "class": "ThumbnailGrid",
 "itemPaddingLeft": 3,
 "itemMaxWidth": 1000,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "paddingLeft": 70,
 "itemBackgroundColorRatios": [],
 "scrollBarWidth": 10,
 "itemPaddingRight": 3,
 "itemBackgroundColor": [],
 "backgroundColor": [
  "#000000"
 ],
 "selectedItemLabelFontColor": "#04A3E1",
 "itemPaddingTop": 3,
 "borderSize": 0,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemLabelPosition": "bottom",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "itemThumbnailShadow": false,
 "itemLabelFontColor": "#666666",
 "height": "100%",
 "itemThumbnailOpacity": 1,
 "rollOverItemThumbnailShadow": true,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "selectedItemThumbnailShadow": true,
 "itemLabelGap": 7,
 "backgroundColorRatios": [
  0
 ],
 "itemOpacity": 1,
 "paddingRight": 70,
 "itemBackgroundColorDirection": "vertical",
 "propagateClick": false,
 "itemThumbnailBorderRadius": 0,
 "itemMode": "normal",
 "rollOverItemLabelFontColor": "#04A3E1",
 "backgroundColorDirection": "vertical",
 "itemMinHeight": 50,
 "itemLabelFontWeight": "normal",
 "itemHorizontalAlign": "center",
 "itemMaxHeight": 1000,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "minHeight": 1,
 "selectedItemLabelFontWeight": "bold",
 "itemWidth": 220,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemMinWidth": 50,
 "scrollBarMargin": 2,
 "borderRadius": 5,
 "itemLabelFontSize": 14,
 "shadow": false,
 "paddingTop": 10,
 "minWidth": 1,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemBackgroundOpacity": 0,
 "itemLabelTextDecoration": "none",
 "itemLabelFontFamily": "Montserrat",
 "itemHeight": 156,
 "itemPaddingBottom": 3,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemThumbnailHeight": 125,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "scrollBarColor": "#04A3E1",
 "itemBorderRadius": 0,
 "horizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "data": {
  "name": "ThumbnailList"
 },
 "gap": 26,
 "itemLabelHorizontalAlign": "center",
 "backgroundOpacity": 0.05,
 "itemVerticalAlign": "top"
},
{
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "backgroundColorDirection": "vertical",
 "width": "85%",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "middle",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-left"
 },
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "gap": 10,
 "propagateClick": false,
 "backgroundOpacity": 1
},
{
 "horizontalAlign": "left",
 "paddingBottom": 20,
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "backgroundColorDirection": "vertical",
 "width": "15%",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 50,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 400,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "overflow": "visible",
 "scrollBarColor": "#0069A3",
 "scrollBarOpacity": 0.51,
 "data": {
  "name": "-right"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 50,
 "gap": 0,
 "propagateClick": false,
 "backgroundOpacity": 1
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "maxHeight": 60,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "width": "25%",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "class": "IconButton",
 "transparencyActive": false,
 "minHeight": 50,
 "paddingLeft": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "height": "75%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "mode": "push",
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "paddingRight": 0,
 "propagateClick": false,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "contentOpaque": false,
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "height": 140,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "header"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "propagateClick": false
},
{
 "paddingBottom": 0,
 "toolTipFontSize": 12,
 "id": "MapViewer",
 "toolTipPaddingLeft": 6,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressRight": 0,
 "width": "100%",
 "class": "ViewerArea",
 "playbackBarHeadBorderRadius": 0,
 "toolTipOpacity": 1,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "progressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "paddingLeft": 0,
 "transitionMode": "blending",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "borderSize": 0,
 "playbackBarHeadShadow": true,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarLeft": 0,
 "toolTipPaddingTop": 4,
 "height": "100%",
 "firstTransitionDuration": 0,
 "vrPointerSelectionTime": 2000,
 "progressBackgroundOpacity": 1,
 "toolTipBorderSize": 1,
 "playbackBarHeadHeight": 15,
 "progressHeight": 6,
 "progressBottom": 2,
 "playbackBarBottom": 0,
 "playbackBarOpacity": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "propagateClick": false,
 "vrPointerColor": "#FFFFFF",
 "toolTipFontColor": "#606060",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressBarOpacity": 1,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressLeft": 0,
 "progressBorderSize": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarBorderSize": 0,
 "progressBorderRadius": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarBackgroundOpacity": 1,
 "minHeight": 1,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadWidth": 6,
 "borderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderColor": "#767676",
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipShadowOpacity": 1,
 "shadow": false,
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderColor": "#0066FF",
 "paddingTop": 0,
 "minWidth": 1,
 "displayTooltipInTouchScreens": true,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarRight": 0,
 "toolTipPaddingBottom": 4,
 "toolTipFontStyle": "normal",
 "toolTipBorderRadius": 3,
 "toolTipShadowSpread": 0,
 "progressBarBorderSize": 6,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderRadius": 0,
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipShadowVerticalLength": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipPaddingRight": 6
},
{
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "contentOpaque": false,
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "height": 140,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "header"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "propagateClick": false
},
{
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container photo"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "propagateClick": false,
 "backgroundOpacity": 0.3
},
{
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container photo"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "propagateClick": false,
 "backgroundOpacity": 0.3
},
{
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "backgroundColorDirection": "vertical",
 "width": "55%",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "middle",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-left"
 },
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "gap": 10,
 "propagateClick": false,
 "backgroundOpacity": 1
},
{
 "horizontalAlign": "left",
 "paddingBottom": 20,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "backgroundColorDirection": "vertical",
 "width": "45%",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 60,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 460,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "overflow": "visible",
 "scrollBarColor": "#0069A3",
 "scrollBarOpacity": 0.51,
 "data": {
  "name": "-right"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 60,
 "gap": 0,
 "propagateClick": false,
 "backgroundOpacity": 1
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "maxHeight": 60,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "width": "25%",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "class": "IconButton",
 "transparencyActive": false,
 "minHeight": 50,
 "paddingLeft": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "height": "75%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "mode": "push",
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "paddingRight": 0,
 "propagateClick": false,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "paddingBottom": 0,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "maxHeight": 1000,
 "width": "100%",
 "class": "Image",
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "paddingRight": 0,
 "propagateClick": false,
 "backgroundOpacity": 0
},
{
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "contentOpaque": false,
 "class": "Container",
 "horizontalAlign": "right",
 "scrollBarWidth": 10,
 "minHeight": 0,
 "paddingLeft": 0,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "height": 60,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 0,
 "propagateClick": false
},
{
 "horizontalAlign": "left",
 "paddingBottom": 30,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 520,
 "paddingLeft": 0,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 100,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarColor": "#E73B2C",
 "scrollBarOpacity": 0.79,
 "data": {
  "name": "Container text"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "propagateClick": false,
 "backgroundOpacity": 0.3
},
{
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "backgroundColorDirection": "vertical",
 "width": 370,
 "contentOpaque": false,
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "height": 40,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "propagateClick": false
},
{
 "paddingBottom": 0,
 "toolTipFontSize": 12,
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "right": 0,
 "class": "ViewerArea",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressRight": 0,
 "toolTipOpacity": 1,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarHeadBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "progressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "paddingLeft": 0,
 "transitionMode": "blending",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "borderSize": 0,
 "playbackBarHeadShadow": true,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarLeft": 0,
 "toolTipPaddingTop": 4,
 "firstTransitionDuration": 0,
 "vrPointerSelectionTime": 2000,
 "progressBackgroundOpacity": 1,
 "toolTipBorderSize": 1,
 "playbackBarProgressBorderColor": "#000000",
 "progressHeight": 6,
 "progressBottom": 2,
 "playbackBarBottom": 0,
 "playbackBarOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "paddingRight": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "propagateClick": false,
 "toolTipBackgroundColor": "#F6F6F6",
 "vrPointerColor": "#FFFFFF",
 "toolTipFontColor": "#606060",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressBarOpacity": 1,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressLeft": 0,
 "progressBorderSize": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarBorderSize": 0,
 "progressBorderRadius": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarBackgroundOpacity": 1,
 "minHeight": 1,
 "playbackBarProgressOpacity": 1,
 "top": 0,
 "playbackBarHeadWidth": 6,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderColor": "#767676",
 "playbackBarBorderColor": "#FFFFFF",
 "bottom": 0,
 "shadow": false,
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderColor": "#0066FF",
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarRight": 0,
 "toolTipPaddingBottom": 4,
 "toolTipFontStyle": "normal",
 "toolTipBorderRadius": 3,
 "toolTipShadowSpread": 0,
 "progressBarBorderSize": 6,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderRadius": 0,
 "data": {
  "name": "Viewer info 1"
 },
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipDisplayTime": 600,
 "toolTipPaddingRight": 6
},
{
 "horizontalAlign": "left",
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
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container arrows"
 },
 "paddingRight": 0,
 "gap": 10,
 "propagateClick": false,
 "backgroundOpacity": 0
},
{
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "contentOpaque": false,
 "class": "Container",
 "horizontalAlign": "right",
 "scrollBarWidth": 10,
 "minHeight": 0,
 "paddingLeft": 0,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "height": 60,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 0,
 "propagateClick": false
},
{
 "horizontalAlign": "left",
 "paddingBottom": 30,
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 520,
 "paddingLeft": 0,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 100,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarColor": "#E73B2C",
 "scrollBarOpacity": 0.79,
 "data": {
  "name": "Container text"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "propagateClick": false,
 "backgroundOpacity": 0.3
},
{
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "backgroundColorDirection": "vertical",
 "width": 370,
 "contentOpaque": false,
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "height": 40,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "propagateClick": false
},
{
 "paddingBottom": 0,
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "width": "77.115%",
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "minHeight": 100,
 "paddingLeft": 80,
 "top": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.15vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.15vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText54192"
 },
 "paddingRight": 0,
 "propagateClick": false,
 "backgroundOpacity": 0
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "maxHeight": 60,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "right": 20,
 "width": "100%",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "class": "IconButton",
 "transparencyActive": false,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "verticalAlign": "top",
 "shadow": false,
 "height": "36.14%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "mode": "push",
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "paddingRight": 0,
 "propagateClick": false,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "paddingBottom": 0,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d673.2763774025825!2d-122.5430829!3d47.54627519999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490478a6f72db75%3A0x145ffc32bb64b9f5!2s1310%20Colchester%20Dr%20E%2C%20Port%20Orchard%2C%20WA%2098366!5e0!3m2!1sen!2sus!4v1713057739566!5m2!1sen!2sus",
 "class": "WebFrame",
 "scrollEnabled": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "bottom": "0%",
 "insetBorder": false,
 "borderRadius": 0,
 "data": {
  "name": "WebFrame48191"
 },
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "propagateClick": false,
 "backgroundOpacity": 1
},
{
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "contentOpaque": false,
 "class": "Container",
 "horizontalAlign": "right",
 "scrollBarWidth": 10,
 "minHeight": 0,
 "paddingLeft": 0,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "height": 60,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 0,
 "propagateClick": false
},
{
 "horizontalAlign": "left",
 "paddingBottom": 30,
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 520,
 "paddingLeft": 0,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 100,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarColor": "#E73B2C",
 "scrollBarOpacity": 0.79,
 "data": {
  "name": "Container text"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "propagateClick": false,
 "backgroundOpacity": 0.3
},
{
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "backgroundColorDirection": "vertical",
 "width": 370,
 "contentOpaque": false,
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "height": 40,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "propagateClick": false
},
{
 "paddingBottom": 0,
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "width": "77.115%",
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "minHeight": 100,
 "paddingLeft": 80,
 "top": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.15vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.15vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText54192"
 },
 "paddingRight": 0,
 "propagateClick": false,
 "backgroundOpacity": 0
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "maxHeight": 60,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "right": 20,
 "width": "100%",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "class": "IconButton",
 "transparencyActive": false,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "verticalAlign": "top",
 "shadow": false,
 "height": "36.14%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "mode": "push",
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "paddingRight": 0,
 "propagateClick": false,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "paddingBottom": 0,
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "width": "77.115%",
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "minHeight": 100,
 "paddingLeft": 80,
 "top": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.15vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.15vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText54192"
 },
 "paddingRight": 0,
 "propagateClick": false,
 "backgroundOpacity": 0
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "maxHeight": 60,
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "right": 20,
 "width": "100%",
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "class": "IconButton",
 "transparencyActive": false,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "verticalAlign": "top",
 "shadow": false,
 "height": "36.14%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "mode": "push",
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "paddingRight": 0,
 "propagateClick": false,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "paddingBottom": 0,
 "toolTipFontSize": 12,
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "toolTipPaddingLeft": 6,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "progressRight": 0,
 "width": "100%",
 "class": "ViewerArea",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadBorderRadius": 0,
 "toolTipOpacity": 1,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "progressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "paddingLeft": 0,
 "transitionMode": "blending",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "borderSize": 0,
 "playbackBarHeadShadow": true,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarLeft": 0,
 "toolTipPaddingTop": 4,
 "height": "100%",
 "firstTransitionDuration": 0,
 "vrPointerSelectionTime": 2000,
 "progressBackgroundOpacity": 1,
 "toolTipBorderSize": 1,
 "playbackBarProgressBorderColor": "#000000",
 "progressHeight": 6,
 "progressBottom": 2,
 "playbackBarBottom": 0,
 "playbackBarOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "paddingRight": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "propagateClick": false,
 "toolTipBackgroundColor": "#F6F6F6",
 "vrPointerColor": "#FFFFFF",
 "toolTipFontColor": "#606060",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressBarOpacity": 1,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressLeft": 0,
 "progressBorderSize": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarBorderSize": 0,
 "progressBorderRadius": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarBackgroundOpacity": 1,
 "minHeight": 1,
 "playbackBarProgressOpacity": 1,
 "top": "0%",
 "playbackBarHeadWidth": 6,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderColor": "#767676",
 "playbackBarBorderColor": "#FFFFFF",
 "borderRadius": 0,
 "shadow": false,
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderColor": "#0066FF",
 "paddingTop": 0,
 "minWidth": 1,
 "displayTooltipInTouchScreens": true,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarRight": 0,
 "toolTipPaddingBottom": 4,
 "toolTipFontStyle": "normal",
 "toolTipBorderRadius": 3,
 "toolTipShadowSpread": 0,
 "progressBarBorderSize": 6,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderRadius": 0,
 "data": {
  "name": "Viewer photoalbum + text 1"
 },
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipDisplayTime": 600,
 "toolTipPaddingRight": 6
},
{
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "left": 10,
 "maxHeight": 60,
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "width": "14.22%",
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "class": "IconButton",
 "transparencyActive": false,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "verticalAlign": "middle",
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "paddingTop": 0,
 "minWidth": 50,
 "bottom": "20%",
 "mode": "push",
 "borderRadius": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton <"
 },
 "paddingRight": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "maxHeight": 60,
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "right": 10,
 "width": "14.22%",
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "class": "IconButton",
 "transparencyActive": false,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "verticalAlign": "middle",
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "paddingTop": 0,
 "minWidth": 50,
 "bottom": "20%",
 "mode": "push",
 "borderRadius": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton >"
 },
 "paddingRight": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "toolTipFontSize": 12,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipPaddingLeft": 6,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "progressRight": 0,
 "width": "100%",
 "class": "ViewerArea",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadBorderRadius": 0,
 "toolTipOpacity": 1,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "progressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "paddingLeft": 0,
 "transitionMode": "blending",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "borderSize": 0,
 "playbackBarHeadShadow": true,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarLeft": 0,
 "toolTipPaddingTop": 4,
 "height": "100%",
 "firstTransitionDuration": 0,
 "vrPointerSelectionTime": 2000,
 "progressBackgroundOpacity": 1,
 "toolTipBorderSize": 1,
 "playbackBarProgressBorderColor": "#000000",
 "progressHeight": 6,
 "progressBottom": 2,
 "playbackBarBottom": 0,
 "playbackBarOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "paddingRight": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "propagateClick": false,
 "toolTipBackgroundColor": "#F6F6F6",
 "vrPointerColor": "#FFFFFF",
 "toolTipFontColor": "#606060",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressBarOpacity": 1,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressLeft": 0,
 "progressBorderSize": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarBorderSize": 0,
 "progressBorderRadius": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarBackgroundOpacity": 1,
 "minHeight": 1,
 "playbackBarProgressOpacity": 1,
 "top": "0%",
 "playbackBarHeadWidth": 6,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderColor": "#767676",
 "playbackBarBorderColor": "#FFFFFF",
 "borderRadius": 0,
 "shadow": false,
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderColor": "#0066FF",
 "paddingTop": 0,
 "minWidth": 1,
 "displayTooltipInTouchScreens": true,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarRight": 0,
 "toolTipPaddingBottom": 4,
 "toolTipFontStyle": "normal",
 "toolTipBorderRadius": 3,
 "toolTipShadowSpread": 0,
 "progressBarBorderSize": 6,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderRadius": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipDisplayTime": 600,
 "toolTipPaddingRight": 6
},
{
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "maxHeight": 60,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "width": "14.22%",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "class": "IconButton",
 "transparencyActive": false,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "verticalAlign": "middle",
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingTop": 0,
 "minWidth": 50,
 "bottom": "20%",
 "mode": "push",
 "borderRadius": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton <"
 },
 "paddingRight": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "maxHeight": 60,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "right": 10,
 "width": "14.22%",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "class": "IconButton",
 "transparencyActive": false,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "verticalAlign": "middle",
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingTop": 0,
 "minWidth": 50,
 "bottom": "20%",
 "mode": "push",
 "borderRadius": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton >"
 },
 "paddingRight": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "maxHeight": 60,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "right": 20,
 "width": "10%",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "class": "IconButton",
 "transparencyActive": false,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "verticalAlign": "top",
 "shadow": false,
 "height": "10%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "mode": "push",
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "paddingRight": 0,
 "propagateClick": false,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "paddingBottom": 0,
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "maxHeight": 1000,
 "width": "100%",
 "class": "Image",
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "borderRadius": 0,
 "verticalAlign": "bottom",
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "paddingRight": 0,
 "propagateClick": false,
 "backgroundOpacity": 0
},
{
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "contentOpaque": false,
 "class": "Container",
 "horizontalAlign": "right",
 "scrollBarWidth": 10,
 "minHeight": 0,
 "paddingLeft": 0,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "height": 60,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 0,
 "propagateClick": false
},
{
 "horizontalAlign": "left",
 "paddingBottom": 30,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 520,
 "paddingLeft": 0,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 100,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarColor": "#E73B2C",
 "scrollBarOpacity": 0.79,
 "data": {
  "name": "Container text"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "propagateClick": false,
 "backgroundOpacity": 0.3
},
{
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "backgroundColorDirection": "vertical",
 "width": 370,
 "contentOpaque": false,
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "height": 40,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "propagateClick": false
},
{
 "paddingBottom": 20,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "width": "100%",
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 10,
 "minHeight": 1,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.47vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.35vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.35vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.35vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.35vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.58vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText"
 },
 "paddingRight": 10,
 "propagateClick": false,
 "backgroundOpacity": 0
},
{
 "textDecoration": "none",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "backgroundColorDirection": "vertical",
 "width": "46%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Bebas Neue Bold",
 "iconHeight": 32,
 "class": "Button",
 "iconBeforeLabel": true,
 "shadowSpread": 1,
 "borderColor": "#000000",
 "minHeight": 1,
 "paddingLeft": 0,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColor": [
  "#04A3E1"
 ],
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "height": "9%",
 "fontSize": "3vh",
 "label": "lorem ipsum",
 "pressedBackgroundColorRatios": [
  0
 ],
 "mode": "push",
 "rollOverBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button"
 },
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "gap": 5,
 "iconWidth": 32,
 "propagateClick": false,
 "cursor": "hand",
 "backgroundOpacity": 0.7
},
{
 "paddingBottom": 0,
 "maxWidth": 150,
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "maxHeight": 150,
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "width": "12%",
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "class": "IconButton",
 "transparencyActive": true,
 "minHeight": 70,
 "paddingLeft": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "height": "8%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "paddingTop": 0,
 "minWidth": 70,
 "mode": "push",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton <"
 },
 "paddingRight": 0,
 "propagateClick": false,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "width": "80%",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "layout": "absolute",
 "minHeight": 1,
 "borderRadius": 0,
 "verticalAlign": "top",
 "shadow": false,
 "height": "30%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container separator"
 },
 "paddingRight": 0,
 "gap": 10,
 "propagateClick": false,
 "backgroundOpacity": 0
},
{
 "paddingBottom": 0,
 "maxWidth": 150,
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "maxHeight": 150,
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "width": "12%",
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "class": "IconButton",
 "transparencyActive": true,
 "minHeight": 70,
 "paddingLeft": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "height": "8%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "paddingTop": 0,
 "minWidth": 70,
 "mode": "push",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton >"
 },
 "paddingRight": 0,
 "propagateClick": false,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "paddingBottom": 20,
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "width": "100%",
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 10,
 "minHeight": 1,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.47vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.35vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.35vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText"
 },
 "paddingRight": 10,
 "propagateClick": false,
 "backgroundOpacity": 0
},
{
 "textDecoration": "none",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "backgroundColorDirection": "vertical",
 "width": "46%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Bebas Neue Bold",
 "iconHeight": 32,
 "class": "Button",
 "iconBeforeLabel": true,
 "shadowSpread": 1,
 "borderColor": "#000000",
 "minHeight": 1,
 "paddingLeft": 0,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColor": [
  "#04A3E1"
 ],
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "height": "9%",
 "fontSize": "3vh",
 "label": "lorem ipsum",
 "pressedBackgroundColorRatios": [
  0
 ],
 "mode": "push",
 "rollOverBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button"
 },
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "gap": 5,
 "iconWidth": 32,
 "propagateClick": false,
 "cursor": "hand",
 "backgroundOpacity": 0.7
},
{
 "paddingBottom": 20,
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "width": "100%",
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 10,
 "minHeight": 1,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.79vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.13vh;font-family:'Bebas Neue Bold';\">1310 Colchester Dr E, Port Orchard, WA 98366</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:5.15vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">VIEW! VIEW! VIEW! Custom built home with views of Seattle and the Sound. Vaulted ceilings and plenty of space including a fireplace to keep you warm and cozy. A chef's dream kitchen with all appliances included along with washer, dryer, &amp; walk-in pantry. Formal living room and primary w/en-suite bath. Wrap around deck accessible from many rooms to soak in the view with a drink of your choice. Meditation/study room for those quiet times. Restore and bring back to life the beautiful Koi pond with cascading fountain for your enjoyment. Daylight basement includes 2 bedrooms, bath &amp; full kitchen, fridge, washer &amp; dryer. Easy commute to Seattle ferry, HWY 16, medical, and shopping.</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText"
 },
 "paddingRight": 10,
 "propagateClick": false,
 "backgroundOpacity": 0
},
{
 "textDecoration": "none",
 "backgroundOpacity": 0.7,
 "paddingBottom": 0,
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "backgroundColorDirection": "vertical",
 "width": 207,
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "class": "Button",
 "fontFamily": "Bebas Neue Bold",
 "iconBeforeLabel": true,
 "shadowSpread": 1,
 "borderColor": "#000000",
 "minHeight": 1,
 "paddingLeft": 0,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "height": 59,
 "shadow": false,
 "backgroundColor": [
  "#04A3E1"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "fontSize": 34,
 "label": "lorem ipsum",
 "pressedBackgroundColorRatios": [
  0
 ],
 "mode": "push",
 "verticalAlign": "middle",
 "fontStyle": "normal",
 "rollOverBackgroundOpacity": 1,
 "horizontalAlign": "center",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button"
 },
 "backgroundColorRatios": [
  0
 ],
 "visible": false,
 "paddingRight": 0,
 "fontWeight": "normal",
 "gap": 5,
 "iconWidth": 32,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "paddingBottom": 10,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "width": "100%",
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "height": "45%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.93vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText18899"
 },
 "paddingRight": 0,
 "propagateClick": false,
 "backgroundOpacity": 0
},
{
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "children": [
  "this.Image_AAEAE258_BAF1_0DDD_41E6_FB144FCE6904",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "80%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "- content"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "gap": 10,
 "propagateClick": false,
 "backgroundOpacity": 0.3
},
{
 "paddingBottom": 0,
 "maxWidth": 983,
 "id": "Image_AAEAE258_BAF1_0DDD_41E6_FB144FCE6904",
 "maxHeight": 1219,
 "width": "25.177%",
 "class": "Image",
 "url": "skin/Image_AAEAE258_BAF1_0DDD_41E6_FB144FCE6904.jpg",
 "minHeight": 1,
 "paddingLeft": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "height": "30.5%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image4092"
 },
 "paddingRight": 0,
 "propagateClick": false,
 "backgroundOpacity": 0
},
{
 "paddingBottom": 10,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "width": "72.222%",
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 10,
 "minHeight": 1,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#233142;font-size:2.35vh;font-family:'Bebas Neue Bold';\">NICHOLAS CUMMINGS</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;font-family:'Bebas Neue Bold';\">Licensed Realtor</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.79vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.79vh;font-family:'Bebas Neue Bold';\">Tlf.: +1 (253) 225-0548</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.79vh;font-family:'Bebas Neue Bold';\">NicholasC@JohnLScott.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.79vh;font-family:'Bebas Neue Bold';\">NicholasC.JohnLScott.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.12vh;font-family:'Bebas Neue Bold';\">Meet Nick Cummings, your trusted real estate advisor in Kitsap County, Washington. As a native of this beautiful region, I bring a deep understanding of its neighborhoods, communities, and market trends. While my experience in the real estate industry may be modest, my passion for helping clients achieve their homeownership dreams is boundless.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.12vh;font-family:'Bebas Neue Bold';\">With a genuine love for Kitsap County and its unique charm, I am committed to providing personalized service tailored to each client's needs and preferences. Whether you're buying, selling, or investing in real estate, I am here to guide you every step of the way. Holding a realtor license, I adhere to the highest standards of professionalism and ethics, ensuring a seamless and rewarding real estate experience for my clients.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.12vh;font-family:'Bebas Neue Bold';\">My approach is rooted in transparency, integrity, and open communication. I take the time to listen to my clients' goals and concerns, empowering them with the knowledge and resources they need to make informed decisions. From navigating the complexities of the local market to negotiating the best possible deals, I am dedicated to achieving exceptional results for my clients.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.12vh;font-family:'Bebas Neue Bold';\">As your local real estate expert, I am honored to serve the diverse communities of Kitsap County. Whether you're searching for your dream home, selling your property, or exploring investment opportunities, I am here to turn your real estate aspirations into reality. Contact me today, and let's embark on this exciting journey together</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText19460"
 },
 "paddingRight": 10,
 "propagateClick": false,
 "backgroundOpacity": 0
}],
 "scrollBarWidth": 10,
 "vrPolyfillScale": 0.5,
 "mobileMipmappingEnabled": false,
 "minHeight": 20,
 "defaultVRPointer": "laser",
 "paddingLeft": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "backgroundPreloadEnabled": true,
 "verticalAlign": "top",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "downloadEnabled": false,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "paddingRight": 0,
 "gap": 10,
 "propagateClick": true
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
