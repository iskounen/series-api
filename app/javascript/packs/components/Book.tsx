import React, { ReactNode } from "react"

interface BookProps {
  callback: (seriesId: string, bookId: string) => void
  seriesId: string
  bookId: string
}

export class Book extends React.Component<BookProps> {
  constructor(props: BookProps) {
    super(props)
    this.handleClickBack = this.handleClickBack.bind(this)
  }

  handleClickBack(): void {
    this.props.callback(this.props.seriesId, null)
  }

  render(): ReactNode {
    return (
      <div>
        <h1>{this.props.seriesId}</h1>
        <h2>{this.props.bookId}</h2>
        <button onClick={this.handleClickBack}>Back</button>
      </div>
    )
  }
}
