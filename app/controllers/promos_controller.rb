class PromosController < ApplicationController

  def newpromo

#byebug

    promo = Promo.create(code: params[:code], description: params[:description], success: 0, failure: 0)

    if promo.save
      render json: { status: "success", data: promo}

    else
      render json: { status: "error" }
    end

  end

  def all

    #render json: Promo.all
    sleep 3
    render json: Promo.all


  end



  def update_rating

    @promo = Promo.find(params[:promo_id])

     params[:status] === "success" ? @promo.increment(:success) : @promo.increment(:failure)

    @promo.save

    render json: { status: "success" }
    #byebug

  end
end
