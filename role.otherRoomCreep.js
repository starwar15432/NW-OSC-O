var type1 = require ('role.type1'); //RCL upgrader
var type2 = require ('role.type2'); //builder
var type3 = require ('role.type3'); //repairer
var type4 = require ('role.type4'); //wallRepairer and tower replenisher

module.exports = {
    run: function (creep, spawn, roomInPath, roomToGoTo) {

        if (creep.room.name == spawn.room.name) {
            if (creep.pos.y == 49) {
                creep.move(BOTTOM);
                creep.move(BOTTOM);
                creep.move(BOTTOM);
                creep.move(BOTTOM);
            }
            else {
                creep.moveTo(creep.pos.findClosestByRange(creep.room.findExitTo(roomInPath)));
            }
        }
        if (creep.room.name == roomInPath) {
            if (creep.pos.x == 0) {
                creep.move(LEFT);
                creep.move(LEFT);
                creep.move(LEFT);
                creep.move(LEFT);
            }
            else {
                creep.moveTo(creep.pos.findClosestByRange(creep.room.findExitTo(roomToGoTo)));
            }
        }
        else if (creep.room.name == roomToGoTo) {
                if (creep.memory.type == undefined) {
                    creep.move(LEFT);
                    creep.move(LEFT);
                    creep.move(LEFT);
                    creep.move(LEFT);
                    /*if (_.sum(Game.creeps, (c) => c.memory.type == 'type1') < 2) {
                        creep.memory.type = 'type1';
                    }
                    else */if (_.sum(Game.creeps, (c) => c.memory.type == 'type2') < 1) {
                        creep.memory.type = 'type2';
                    }
                    if (_.sum(Game.creeps, (c) => c.memory.type == 'type3') < 2) {
                        creep.memory.type = 'type3';
                    }
                    if (_.sum(Game.creeps, (c) => c.memory.type == 'type4') < 2) {
                        creep.memory.type = 'type4';
                    }
                    else {creep.memory.type = 'type3';}
                }
                else {
                    /*if (creep.memory.type == 'type1') {
                        type1.run(creep);
                    }
                    else */if (creep.memory.type == 'type2') {
                        type2.run(creep);
                    }
                    else if (creep.memory.type == 'type3') {
                        type3.run(creep);
                    }
                    else if (creep.memory.type == 'type4') {
                        type4.run(creep);
                    }
                }


        }
    }
};