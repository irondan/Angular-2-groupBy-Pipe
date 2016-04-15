System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var groupByPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            groupByPipe = (function () {
                function groupByPipe() {
                }
                groupByPipe.prototype.transform = function (collection, term) {
                    var newValue = [];
                    var _loop_1 = function(i) {
                        var keyVal = groupByPipe.deepFind(collection[i], term);
                        var index = newValue.findIndex(function (myObj) { return myObj.key == keyVal; });
                        if (index >= 0) {
                            newValue[index].value.push(collection[i]);
                        }
                        else {
                            newValue.push({ key: keyVal, value: [collection[i]] });
                        }
                    };
                    for (var i = 0; i < collection.length; i++) {
                        _loop_1(i);
                    }
                    return newValue;
                };
                groupByPipe.deepFind = function (obj, path) {
                    var paths = path.toString().split(/[\.\[\]]/);
                    var current = obj;
                    for (var i = 0; i < paths.length; ++i) {
                        if (paths[i] !== "") {
                            if (current[paths[i]] == undefined) {
                                return undefined;
                            }
                            else {
                                current = current[paths[i]];
                            }
                        }
                    }
                    return current;
                };
                groupByPipe = __decorate([
                    core_1.Pipe({
                        name: "groupBy"
                    }), 
                    __metadata('design:paramtypes', [])
                ], groupByPipe);
                return groupByPipe;
            }());
            exports_1("groupByPipe", groupByPipe);
        }
    }
});
//# sourceMappingURL=groupBy.pipe.js.map