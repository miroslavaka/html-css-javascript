class Book {
    constructor(
        name,
        author,
        pagesNumber,
        genre,
        currentlyReading,
        readingPage
    ) {
        this.name = name;
        this.author = author;
        this.pagesNumber = pagesNumber;
        this.genre = genre;
        this.currentlyReading = currentlyReading;
        this.readingPage = readingPage
    }
    togglePage(pageStatus) {
        this.readingPage = readingPage;
    }
}
export default Book;