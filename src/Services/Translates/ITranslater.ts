export interface ITranslate{
     Search(word:string):Promise<TranslateResult>;
}
export class TranslateResult{
    constructor(
        public content:string,
        public definition:string,
        public pronunciation:string,
        public audio:string,
        public has_audio:boolean){}
}