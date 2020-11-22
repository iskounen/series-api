import React, { ReactNode } from "react"
import { Series } from "./Series"
import { Books } from "./Books"
import { Book } from "./Book"

interface NavigatorState {
  seriesId: string
  bookId: string
}

export class Navigator extends React.Component<unknown, NavigatorState> {
  constructor(props: unknown) {
    super(props)
    this.state = { seriesId: null, bookId: null }
    this.handleCallback = this.handleCallback.bind(this)
  }

  handleCallback(seriesId: string, bookId: string): void {
    this.setState({ seriesId: seriesId, bookId: bookId })
  }

  render(): ReactNode {
    if (this.state.seriesId && this.state.bookId) {
      return <Book callback={this.handleCallback} seriesId={this.state.seriesId} bookId={this.state.bookId} />
    } else if (this.state.seriesId) {
      return <Books callback={this.handleCallback} seriesId={this.state.seriesId} />
    }
    return <Series callback={this.handleCallback} />
  }
}