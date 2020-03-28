var add = (x,y) =>{
    return x+y;
};

describe("Add functionality", () =>{
    it("calculates x + y = z",()=>{
        expect(add(10,5)).toEqual(15);
    });
});