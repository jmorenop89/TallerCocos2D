
var AnimationLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        this.init();
        var scene = ccs.load(res.Animation_json);
        this.addChild(scene.node);
        
        this._ken = new cc.Sprite(res.ken_1_png);
        this._ken.setAnchorPoint(cc.p(0.5,0.5));
        this._ken.setPosition(cc.p(480,200));
        this._ken.setScale(2.8,2.8);
        this.addChild(this._ken,1);

        //events
        cc.eventManager.addListener({
            event : cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches : true,
            onTouchBegan : this.onTouchesBegan,
            onTouchMoved : this.onTouchesMoved,
            onTouchEnded : this.onTouchesEnded
        },this);
        
        
        //audio
        cc.audioEngine.playMusic(res.theme_ken,false);
        
        
        return true;
    },
    init : function () {
        cc.spriteFrameCache.addSpriteFrames(res.ken_plist, res.ken_png);
    },
    hadooken: function () {
        var animFrames = [];
        for(var i = 1; i <= 11; i++){
            var str = "Animation/Ken/ken_" + i + ".png";
            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            animFrames.push(frame);
        }
        var animation = new cc.Animation(animFrames, 0.08);
        this._ken.runAction(new cc.Animate(animation));
        cc.audioEngine.playEffect(res.voice_ken,false);
    },
    onTouchesBegan : function (touch, event) {
        //evento de touch
        var target = event.getCurrentTarget();
        this._point = target.convertTouchToNodeSpace(touch);
        target.hadooken();
        //cc.log(this._point);
        return true;
    },
    onTouchesMoved : function (touch, event) {
        //movimiento e intercepcion
        var target = event.getCurrentTarget();
        var loc = touch.getLocation();
        if(cc.rectContainsPoint(target._ken.getBoundingBox(),loc)){
            cc.log('interseccion');
        }
    },
    onTouchesEnded : function (touch, event) {

    }
});

var AnimationScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new AnimationLayer();
        this.addChild(layer);
    }
});

