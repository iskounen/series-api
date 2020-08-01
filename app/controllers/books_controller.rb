class BooksController < ApplicationController
  def index
    @series = Series.find(params[:series_id])
    @books = @series.books

    respond_to do |format|
      format.html
      format.json { render json: @books }
    end
  end

  def show
    @series = Series.find(params[:series_id])
    @book = @series.books.find(params[:id])

    respond_to do |format|
      format.html
      format.json { redirect_to rails_blob_path(@book.archive, disposition: 'attachment') }
    end
  end

  def create
    @series = Series.find(params[:series_id])
    @book = @series.books.create(book_params)
    redirect_to series_path(@series)
  end

  def destroy
    @series = Series.find(params[:series_id])
    @book = @series.books.find(params[:id])
    @book.destroy
    redirect_to series_path(@series)
  end

  private

  def book_params
    params.require(:book).permit(:number, :archive)
  end
end
