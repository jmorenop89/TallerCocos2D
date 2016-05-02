
var SWIntroLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        var size = cc.winSize;
        //camera
        var x = 0;
        var y = 0;
        var z = 0;
        this.getCamera().setCenterXYZ(x,y+0.0000002,z);
        //scena
        var scene = ccs.load(res.StarWarsScene_json);
        this.addChild(scene.node);
        this._sprite = scene.node.getChildByName('intro');
        this._sprite.setAnchorPoint(0.5,0.5);
        this._sprite.setPosition(cc.p(480,-100));
        this._credit = new cc.Sprite(res.credit_png);
        this._credit.setAnchorPoint(0.5,0.5);
        this._credit.setPosition(cc.p(480,-1200));
        this.addChild(this._credit,1);
        //audio
        cc.audioEngine.playMusic(res.star_wars,true);
        //action
        var action = new cc.MoveBy(30,cc.p(0,this._sprite.getContentSize().height + size.height + 500));
        var action1 = new cc.MoveBy(50,cc.p(0,this._credit.getContentSize().height + size.height + 1200));
        this._sprite.runAction(action);
        this._credit.runAction(action1);
        return true;
    },
    onTouchesBegan : function (touch, event) {
        return true;
    },
    onTouchesMoved : function (touch, event) {
    },
    onTouchesEnded : function (touch, event) {

    }
});

var SWIntroScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new SWIntroLayer();
        this.addChild(layer);
    }
});

