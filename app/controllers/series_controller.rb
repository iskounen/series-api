class SeriesController < ApplicationController
  def index
    @series = Series.all
  end

  def show
    @series = Series.find(params[:id])
  end

  def create
    @series = Series.new(series_params)
 
    @series.save
    redirect_to @series
  end

  private
    def series_params
      params.require(:series).permit(:name)
    end
end
