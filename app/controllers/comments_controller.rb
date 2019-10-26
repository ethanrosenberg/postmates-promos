class CommentsController < ApplicationController

  def add_comment
    #byebug

    promo = Promo.find(params[:promo_id])
    promo.comments.create(content: params[:content])
    promo.save

    if promo.save
      render json: { status: "success" }

    else
      render json: { status: "error" }
    end

  end
end
