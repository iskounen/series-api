import React, { ReactNode } from "react"

interface SeriesProps {
  callback: (seriesId: string, bookId: string) => void
}

interface SeriesState {
  series: SeriesType[]
}

interface SeriesType {
  id: string
  title: string
}

export class Series extends React.Component<SeriesProps, SeriesState> {
  constructor(props: SeriesProps) {
    super(props)
    this.state = { series: [] }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(): void {
    fetch("/series.json").then(response => response.json()).then(data => this.setState({ series: data }))
  }

  handleClick(e: React.MouseEvent): void {
    this.props.callback((e.target as HTMLLIElement).dataset.seriesId, null)
  }

  render(): ReactNode {
    const series = this.state.series.map((series, index) => <li key={index} data-series-id={series.id} onClick={this.handleClick}>{series.title}</li>)

    return (
      <ol>{series}</ol>
    )
  }
}