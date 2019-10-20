class PromosController < ApplicationController

  def newpromo

  end
  
  def all

    render json: Promo.all

  end
end
