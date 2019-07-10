class ScapesController < ApplicationController
  def index
    @scapes = Scape.all 
    #render json: @scapes
  end

  def new 
    @scape = Scape.new 
    render json: @scape
  end 

  def show
    @scape = Scape.find(params[:id])
    render json: @scape
  end 

end
