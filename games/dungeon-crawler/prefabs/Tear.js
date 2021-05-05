export default {
    name: "Tear",
    components: [
        {
            name: "DrawGeometryComponent",
            args: [
                "teal"
            ]
        },
        {
            name: "CircleGeometryComponent",
            args: [
                2
            ]
        },
        {
            name: "TearMoveComponent"//,
            // args: [
            //     0,
            //     1
            // ]
        },
        {
            name: "DestroyOnRoomWall"
        },
        {
            name: "TearCollideComponent"
        }
    ]
}