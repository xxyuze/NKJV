import { GetList } from "./TableHelper";

let pad = function (num:number, length:number) {
    return (Array(length).join('0') + num).slice(-length);
  }
export interface Bible {
    Book: number,
    Chapter: number,
    Verse: number,
    Scripture: string,
    Title: string
}
export interface BookVM {
    BookId: number;
    Name: string;
    Short: string;
    ChapterCount: number;
}
export interface ChapterVM {
    Chapter: number;
    VerseCount: number;
}
export interface BibleVM {
    Book:number;
    Chapter: number;
    Verse:number;
    ToVerse:number;
    Bibles:Bible[];
}
class TableService{
    Book = {
        GetBookVMs : async function () {
            return await GetList<BookVM>("Books", "Hans", "BookId,Name,Short,ChapterCount");
        },
        GetChapterVMs:async function (book: number) {
            console.log(pad(book, 2))
            return await GetList<ChapterVM>("Chapters", pad(book, 2), "Chapter,VerseCount");
        }
    };
    Bibles ={
        GetBibles:async function (book: number, chapter: number) {
            return await GetList<Bible>("NKJV", pad(book, 2) + pad(chapter, 3), "Book,Chapter,Verse,Scripture,Title");
        }
    }
}
let _tableService = new TableService();
export {_tableService}
