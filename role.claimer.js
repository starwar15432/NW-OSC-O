module.exports = {
    run: function (creep, roomToClaim) {
        
        if (creep.room.name == Game.spawns.Spawn1.room.name) {
            if (creep.y == 49) {
                creep.move(BOTTOM);
                creep.move(BOTTOM);
                creep.move(BOTTOM);
                creep.move(BOTTOM);
            }
            else {
                creep.moveTo(creep.pos.findClosestByRange(creep.room.findExitTo(roomToClaim)));
            }
        }
        else if (creep.room.name == roomToClaim) {
            if (creep.y == 0) {
                creep.move(BOTTOM);
                creep.move(BOTTOM);
                creep.move(BOTTOM);
                creep.move(BOTTOM);
            }
            else if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
    }
};