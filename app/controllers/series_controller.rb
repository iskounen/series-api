class SeriesController < ApplicationController
  def index
    @series = Series.all
  end

  def show
    @series = Series.find(params[:id])
  end

  def new
    @series = Series.new
  end

  def create
    @series = Series.new(series_params)
 
    if @series.save
      redirect_to @series
    else
      render 'new'
    end
  end

  private
    def series_params
      params.require(:series).permit(:title)
    end
end
