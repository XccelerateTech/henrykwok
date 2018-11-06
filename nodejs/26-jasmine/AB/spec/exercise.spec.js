describe("Block number", function(){
    it("I am the block number 1", function(){
        console.log("I am the block number 1!");
    });

    it("I am the block number 2", function(){
        console.log("I am the block number 2!");
    });

    it("I am the block number 3", function(){
        console.log("I am the block number 3!");
    });

    it("I am the block number 4", function(){
        console.log("I am the block number 4!");
    });

    it("I am the block number 5 but fail", function(){
        console.log("I am the block number 5 but I fail");
        throw new Error();
    });
})