Sys.Timer=function(){var a=this;Sys.Timer.initializeBase(a);a._interval=1e3;a._enabled=false;a._timer=null};Sys.Timer.prototype={get_interval:function(){return this._interval},set_interval:function(b){var a=this;if(a._interval!==b){a._interval=b;a.raisePropertyChanged("interval");if(!a.get_isUpdating()&&a._timer!==null){a._stopTimer();a._startTimer()}}},get_enabled:function(){return this._enabled},set_enabled:function(b){var a=this;if(b!==a.get_enabled()){a._enabled=b;a.raisePropertyChanged("enabled");if(!a.get_isUpdating())if(b)a._startTimer();else a._stopTimer()}},add_tick:function(a){this.get_events().addHandler("tick",a)},remove_tick:function(a){this.get_events().removeHandler("tick",a)},dispose:function(){this.set_enabled(false);this._stopTimer();Sys.Timer.callBaseMethod(this,"dispose")},updated:function(){var a=this;Sys.Timer.callBaseMethod(a,"updated");if(a._enabled){a._stopTimer();a._startTimer()}},_timerCallback:function(){var a=this.get_events().getHandler("tick");a&&a(this,Sys.EventArgs.Empty)},_startTimer:function(){var a=this;a._timer=window.setInterval(Function.createDelegate(a,a._timerCallback),a._interval)},_stopTimer:function(){window.clearInterval(this._timer);this._timer=null}};Sys.Timer.descriptor={properties:[{name:"interval",type:Number},{name:"enabled",type:Boolean}],events:[{name:"tick"}]};Sys.Timer.registerClass("Sys.Timer",Sys.Component);