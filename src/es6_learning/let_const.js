

class ChapterOne {
    
    testLetAndConst(){
        let RegExp = "hello !";
        console.log(RegExp);
        console.log(window.RegExp)
        console.log(window.RegExp === RegExp);

        const ncz = "Hi !";
        console.log(ncz);
        console.log("ncz" in window);
        window.RegExp = "test this is ?";
        console.log(window.RegExp)
    }
}

export default new ChapterOne();