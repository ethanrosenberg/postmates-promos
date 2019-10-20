class PromosController < ApplicationController

  def newpromo

    byebug

  end

  def all

    render json: Promo.all

  end
end
