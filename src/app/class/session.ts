export class Session {
    private _id: string;
    private _name: string;

    constructor(id = "", name = "") {
        this._id = id;
        this._name = name;
    }

    public setSession = (session: Session) => {
        this._id = session.id;
        this._name = session.name;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }
    
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    tostring(): string{
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
