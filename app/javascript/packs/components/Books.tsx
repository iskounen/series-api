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
    this.handleClick = this.handleClick.bind(this)
    this.handleBackClick = this.handleBackClick.bind(this)
  }

  componentDidMount(): void {
    fetch(`/series/${this.props.seriesId}/books.json`).then(response => response.json()).then(data => this.setState({ books: data }))
  }

  handleClick(e: React.MouseEvent): void {
    this.props.callback(this.props.seriesId, (e.target as HTMLLIElement).dataset.bookId)
  }

  handleBackClick(): void {
    this.props.callback(null, null)
  }

  render(): ReactNode {
    const books = this.state.books.map((book, index) => <li key={index} data-book-id={book.id} onClick={this.handleClick}>{book.number}</li>)

    return (
      <div>
        <ol>{books}</ol>
        <button onClick={this.handleBackClick}>Back</button>
      </div>
    )
  }
}