export default {
    name: "EllipsePowerup",
    components: [
        {
            name: "DrawGeometryComponent",
            args: [
                "yellow"
            ]
        },
        {
            name: "RectangleGeometryComponent",
            args: [
                6,
                6
            ]
        }
    ],
    children: [
        {
            gameObject: {
                name: "EllipseIcon",
                components: [
                    { name: "DrawGeometryComponent", args: ["teal"] },
                    { name: "EllipseGeometryComponent", args: [1,3] }
                ]
            }
        }
    ]
}