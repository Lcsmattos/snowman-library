// import axios from "axios";
import { Book } from "../types/Book";
import { Books } from "../mocks/Books";
import { searchBook } from "../utils/utils";

class BookService {
  async getBooks(): Promise<Book[]> {
    try {
      // const response = await axios.post(`/books`);

      return Books;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getBookByTitle(title: string): Promise<Book[]> {
    try {
      const response = searchBook(title);

      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default new BookService();
