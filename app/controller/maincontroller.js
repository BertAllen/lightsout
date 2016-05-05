angular.module('LightsOut', []).controller('MainController', function () {
    var mc = this;
    // $scope.test = "angular works";
    mc.grid = [];



    mc.makegrid = function (g) {
        for (var x = 0; x < g; x++) {
            mc.grid[x] = [];
            // var colum = i
            for (var y = 0; y < g; y++) {
                // var row = j
                mc.grid[x][y] = { row: x, col: y, lit: false, neighbors: [] };

            }
        }
        for (var a = 0; a < g; a++) {
            for (var b = 0; b < g; b++){
                for (var c = -1; c < 2; c += 2){
                    if (a + c >= 0 && a + c < g) {
                        mc.grid[a][b].neighbors.push(mc.grid[a+c][b])
                    }
                    if (b + c >= 0 && b + c < g) {
                        mc.grid[a][b].neighbors.push(mc.grid[a][b+c])
                    }
                }
            }
        }
    }
    mc.activate = function (cell) {
        cell.lit = !cell.lit;
        cell.neighbors.forEach(function (nab) {
            nab.lit = !nab.lit;
        })
}
    
});