import Component from "../../../engine/component.js"

class MoveComponent extends Component{

    static name = "MoveComponent";

    constructor(gameObject){
        super(gameObject);
    }

    //uses a string input to decide direction for the object to move
    update(){
        for (let ch of this.gameObject.direction) {
            if (ch == 'N') {
                this.gameObject.transform.position.y--;
            }
            else if (ch == 'E') {
                this.gameObject.transform.position.x++;
            }
            else if (ch == 'S') {
                this.gameObject.transform.position.y++;
            }
            else if (ch == 'W') {
                this.gameObject.transform.position.x--;
            }
        }
    }
}

export default MoveComponent;