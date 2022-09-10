export default class GotService {
    constructor() {
        this._apiBase = 'http://www.omdbapi.com/?apikey=78584b3c&';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`);
        }
        return await res.json();
    }

    getFilmsMatrix = async () => {
        const res = await this.getResource(`s=matrix`);
        return res;
    }
    
    getFilm = async (id) => {
        const film = await this.getResource(`i=${id}/`);
        return film;
    };

    getFilmsMatrix();
    console.log(res);
    console.log(film)
   
    
   

   /*  
    _transformBook = (book) => {
        return {
            id: this._extractId(book),
            name: this.isSet(book.name),
            numberOfPages: this.isSet(book.numberOfPages),
            publisher: this.isSet(book.publisher),
            released: this.isSet(book.released)
        };
    }
} */