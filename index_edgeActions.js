
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","play",function(sym,e){sym.$("playglow").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_play}","click",function(sym,e){window.open("../home.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_skip}","click",function(sym,e){sym.play("skip");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_reset}","click",function(sym,e){sym.play("start");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
//Edge symbol end:'Preloader'
})(jQuery,AdobeEdge,"EDGE-707239309");