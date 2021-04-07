export default {
    name: "DamagePowerup",
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
                name: "DamageIcon",
                components: [
                    { name: "DrawGeometryComponent", args: ["red"] },
                    { name: "CircleGeometryComponent", args: [2] }
                ]
            }
        }
    ]
}