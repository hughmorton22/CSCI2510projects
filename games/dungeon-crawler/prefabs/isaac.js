export default {
    name: "Isaac",
    components: [
        {
            name: "DrawGeometryComponent",
            args: [
                "tan"
            ]
        },
        {
            name: "RectangleGeometryComponent",
            args: [
                10,
                10
            ]
        },
        {
            name: "KeyboardMoveComponent",
            args: [0.8]
        },
        {
            name: "ShootDirectionComponent"
        }
    ],
    children: [
        {
            gameObject: {
                name: "Eye",
                components: [
                    { name: "DrawGeometryComponent", args: ["white"] },
                    { name: "RectangleGeometryComponent", args: [4,4] },
                    { name: "ShootTearComponent" }
                ]
            }, x: 3, y: 0
        }
    ]
}