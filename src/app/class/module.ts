export class Module {
    private _name: string;
    private _place: string;
    private _startDate: Date;
    private _endDate: Date;
    private _duration: string;
    private _intervenantList: {}[];
    private _participantList: {}[];
    private _session_id: string;

    constructor(name = "", place = "", startDate = new Date(), endDate = new Date(), duration = "", intervenantList = [{}], participantList = [{}], session_id = "") {
        this._name = name;
        this._place = place;
        this._startDate = startDate;
        this._endDate = endDate;
        this._duration = duration;
        this._intervenantList = intervenantList;
        this._participantList = participantList;
        this._session_id = session_id;
    }

    public setModule = (module: Module) => {
        this._name = module.name;
        this._place = module.place;
        this._startDate = module.startDate;
        this._endDate = module.endDate;
        this._duration = module.duration;
        this._intervenantList = module.intervenantList;
        this._participantList = module.participantList;
        this._session_id = module.session_id;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
    
    get place(): string {
        return this._place;
    }

    set place(value: string) {
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

    get duration(): string {
        return this._duration;
    }

    set duration(value: string) {
        this._duration = value;
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

    get session_id(): string {
        return this._session_id;
    }

    set session_id(value: string) {
        this._session_id = value;
    }

    tostring(): string{
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
        if(this._session_id){
            str += `"session_id" : "${this._session_id}",`;
        }
        str += '}';
    
        return str;
      }
}
