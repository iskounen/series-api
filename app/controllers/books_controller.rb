class BooksController < ApplicationController
  def create
    @series = Series.find(params[:series_id])
    @book = @series.books.create(book_params)
    redirect_to series_path(@series)
  end
 
  private
    def book_params
      params.require(:book).permit(:number)
    end
end
