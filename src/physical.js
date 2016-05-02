
var PhysicalLayer = cc.Layer.extend({
    _time: 0,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        //world
        this.world = new cp.Space();
        this.world.gravity = cp.v(0, -800);

        //cuerpo
        //this.addBodyGame();

        var mainscene = ccs.load(res.PhysicalScene_json);
        this.addChild(mainscene.node);

        this.schedule(function(dt){
            this.worldUpdate(dt);
        });

        return true;
    },
    worldUpdate : function (dt) {
        this._time +=dt;
        this.world.step(dt);
        if(this._time >= 3){
            this._time = 0;
            this.addBodyGame();
        }

    },
    addBodyGame : function () {
        this._balon = new cc.PhysicsSprite(res.pelota_png);
        this._balon.setAnchorPoint(0.5,0.5);
        this.addChild(this._balon,1);
        var contentSize = this._balon.getContentSize();
        var body = new cp.Body(1.0, cp.momentForBox(1.0, 50, 50));
        body.setPos(cc.p(480,-50));
        var degrees = 85;
        var power = 950;
        body.applyImpulse(
            cp.v(Math.cos(degrees * (Math.PI / 180)) * power, Math.sin(degrees * (Math.PI / 180)) * power),
            cp.v(0, 0)
        );
        this.world.addBody(body);
        //boxShape
        var shape = new cp.BoxShape(body, contentSize.width - 14, contentSize.height);
        this.world.addShape(shape);
        this._balon.setBody(body);
    }
});

var PhysicalScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new PhysicalLayer();
        this.addChild(layer);
    }
});

