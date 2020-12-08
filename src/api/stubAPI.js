class StubAPI {
    constructor() {
        this.favoriteMovies = [];
    }

    add(movie) {
        this.favoriteMovies.push(movie);
    }

    getAll() {
        return this.favoriteMovies;
    }

    peopleConstructor(){
        this.MarkPeoples = [];
    }
    
    addPeople(people) {
        this.MarkPeoples.push(people);
    }

    getAllPeople(){
        return this.MarkPeoples;
    }
}

export default new StubAPI();