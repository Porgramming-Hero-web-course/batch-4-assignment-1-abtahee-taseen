{
    type Circle = {
        shape: "circle";
        radius: number;
    }

    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    }

    type CircleOrRectangle = Circle | Rectangle;

    function calculateShapeArea(params: CircleOrRectangle){
        if(params.shape === "circle"){
            const circleArea = 3.1416 * (params.radius * params.radius)
            return circleArea;
        } else if (params.shape === "rectangle"){
            const rectangleArea = params.width * params.height;
            return rectangleArea;
        }
    }

    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);

}