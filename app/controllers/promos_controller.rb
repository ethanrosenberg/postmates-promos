class PromosController < ApplicationController

  def newpromo

#byebug

    promo = Promo.find_or_create_by(code: params[:code], description: params[:description])
byebug
    if promo.save
      render json: { status: "success", data: promo}
    else
      render json: { status: "error" }
    end

  end

  def all

    render json: Promo.all

  end

  def update_rating

    @promo = Promo.find(params[:promo_id])

    @promo.increment(:success)
    @promo.save

    render json: { status: "success" }
    #byebug

  end
end
