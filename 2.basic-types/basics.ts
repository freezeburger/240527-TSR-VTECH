

const v1:number = 1;
const v2:string = '1';
const v3:Function = ()=>false;

const v4:string[] = [];
const v5:Array<string> = []; // Gerneric notation Array<T>


const v6:any = {} //Didn't took time to think about it
let v7:unknown = '';

const v8:'A' | 'B' | 'C' =  "A";
const v9:(a:unknown,b:unknown) => boolean =  (a,b)=>false;

// aliases (semantic)

/**
 * Unique int idetnifier within a collection of the same type.
 */
type UniqueID = number;

const v10 : UniqueID = 1;

type InitFunction = ()=>void;

/* interface Service{
    id:UniqueID;
    init():InitFunction;
} */

interface AppService{
    id:UniqueID;
}

interface InitableService{
    init():void;
}

const MainService:AppService & InitableService ={
    id:0,
    init(){
    }
}

interface ConcreteService extends AppService , InitableService{
}

interface A {
    v1:number;
}

interface A {
    // v1:string;
    v2:string;
}

const a:A={
    v1:0,
    v2:''
}

type ValtechEmail = `${string}@valtech.com` // tempalate string
const email:ValtechEmail = 'user@valtech.com'

type ClientColors = 'F00' | '0F0' | '00F'
type HexColors = `#${ ClientColors }`;


type Sample ={
    active:boolean;
    address:string;
}

/* type Inactive<T> = T extends {active:false} ? Exclude<T, 'address'> :T[keyof T]

type HasAddress<T extends {active:false} ? Omit<T, 'address'> : T > = {
    [Key in keyof T  ]:T[Key];
}

const S:HasAddress<Sample>={

} */

/* type ExcludeMatchingProperties<T, V> = Pick<
  T,
  { [K in keyof T]-?: T[K] extends V ? never : K }[keyof T]
>; */