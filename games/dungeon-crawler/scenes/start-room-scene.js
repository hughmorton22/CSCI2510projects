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
            prefabName: "Isaac",
        },
        {
          prefabName: "MainController"
        }
    ]
}