export default {
    name: "StartRoomScene",
    children: [
        {
            gameObject: {
              name:"MainCamera",components:[
                {name:"WorldCameraComponent"}
              ]
            },sx:10,sy:10
          },
          {
            gameObject:{
              name:"ScreenCamera",components:[
                {name:"ScreenCameraComponent"}
              ]
            }
          },
        {
          prefabName: "Ground"
        },
        {
          prefabName: "SimpleEnemy",
          x: 40,
          y: -20
        },
        {
            prefabName: "Isaac",
        },
        {
          prefabName: "MainController"
        }
    ]
}