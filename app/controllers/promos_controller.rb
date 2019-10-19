class PromosController < ApplicationController

  def all

    render json: Promo.all

  end
end
