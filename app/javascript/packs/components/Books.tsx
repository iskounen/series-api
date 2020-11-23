import React, { ReactNode } from "react"

interface BooksProps {
  callback: (seriesId: string, bookId: string) => void
  seriesId: string
}

interface BooksState {
  books: BooksType[]
}

interface BooksType {
  id: string
  number: number
}

export class Books extends React.Component<BooksProps, BooksState>{
  constructor(props: BooksProps) {
    super(props)
    this.state = { books: [] }
    this.handleClickBook = this.handleClickBook.bind(this)
    this.handleClickBack = this.handleClickBack.bind(this)
  }

  componentDidMount(): void {
    fetch(`/series/${this.props.seriesId}/books.json?filter=processed`).then(response => response.json()).then(data => this.setState({ books: data }))
  }

  handleClickBook(e: React.MouseEvent): void {
    this.props.callback(this.props.seriesId, (e.target as HTMLLIElement).dataset.bookId)
  }

  handleClickBack(): void {
    this.props.callback(null, null)
  }
  render(): ReactNode {
    const books = this.state.books.map((book, index) => <li key={index} data-book-id={book.id} onClick={this.handleClickBook}>{book.number}</li>)

    return (
      <div>
        <ol>{books}</ol>
        <button onClick={this.handleClickBack}>Back</button>
      </div>
    )
  }
}