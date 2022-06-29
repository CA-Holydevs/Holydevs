export class Session {
    private _id: String;
    private _name: String;

    constructor(id = "", name = "") {
        this._id = id;
        this._name = name;
    }

    public setSession = (session: Session) => {
        this._id = session.id;
        this._name = session.name;
    }

    get id(): String {
        return this._id;
    }

    set id(value: String) {
        this._id = value;
    }
    
    get name(): String {
        return this._name;
    }

    set name(value: String) {
        this._name = value;
    }

    toString(): string{
        let str = '{';
        if(this._id){
          str += `"id" : "${this._id}",`;
        }
        if(this._name){
          str += `"name" : "${this._name}",`;
        }
        str += '}';
    
        return str;
      }
}
