AFRAME.registerComponent('move-box', {
    schema: {
        moveX: {type: "number", default: 1}
    },
    tick: function(){
        this.data.moveX += 0.01;
        //gets the position of the attribute
        var position = this.el.getAttribute("position");
        position.x = this.data.moveX;
        //sets the position of the attribute
        this.el.setAttribute("position", {x:position.x, y: position.y, z: position.z});
    }
});
