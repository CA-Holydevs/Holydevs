export class Module {
    private _name: String;
    private _place: String;
    private _startDate: Date;
    private _endDate: Date;
    private _intervenantList: {}[];
    private _participantList: {}[];

    constructor(name = "", place = "", startDate = new Date(), endDate = new Date(), intervenantList = [{}], participantList = [{}]) {
        this._name = name;
        this._place = place;
        this._startDate = startDate;
        this._endDate = endDate;
        this._intervenantList = intervenantList;
        this._participantList = participantList;
    }

    public setModule = (module: Module) => {
        this._name = module.name;
        this._place = module.place;
        this._startDate = module.startDate;
        this._endDate = module.endDate;
        this._intervenantList = module.intervenantList;
        this._participantList = module.participantList;
    }

    get name(): String {
        return this._name;
    }

    set name(value: String) {
        this._name = value;
    }
    
    get place(): String {
        return this._place;
    }

    set place(value: String) {
        this._place = value;
    }

    get startDate(): Date {
        return this._startDate;
    }

    set startDate(value: Date) {
        this._startDate = value;
    }

    get endDate(): Date {
        return this._endDate;
    }

    set endDate(value: Date) {
        this._endDate = value;
    }

    get intervenantList(): {}[] {
        return this._intervenantList;
    }

    set intervenantList(value: {}[]) {
        this._intervenantList = value;
    }

    get participantList(): {}[] {
        return this._participantList;
    }

    set participantList(value: {}[]) {
        this._participantList = value;
    }

    toString(): string{
        let str = '{';
        if(this._name){
          str += `"name" : "${this._name}",`;
        }
        if(this._place){
          str += `"place" : "${this._place}",`;
        }
        if(this._startDate){
          str += `"startDate" : "${this._startDate.toISOString()}",`;
        }
        if(this._endDate){
            str += `"endDate" : "${this._endDate.toISOString()}",`;
        }
        if(this._intervenantList){
            str += `"intervenantList" : "${this._intervenantList}",`;
        }
        if(this._participantList){
            str += `"participantList" : "${this._participantList}",`;
        }
        str += '}';
    
        return str;
      }
}
