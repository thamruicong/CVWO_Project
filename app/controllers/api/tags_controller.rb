class Api::TagsController < ApplicationController
    before_action :set_tag, only: [:show, :edit, :update, :destroy]

    def index
        @tags = Tag.all
        render json: @tags
    end

    def show
        render json: @tag
    end

    def new
        @tag = Tag.new
        render json: @tag
    end
    
    def create
        @tag = Tag.new(tag_param)

        if @tag.save
            render json: @tag
        else
            render json: @tag.errors.full_messages
        end
    end

    def edit
        render json: @tag
    end

    def update
        if @tag.update(tag_param)
            render json: @tag
        else
            render json: @tag.errors.full_messages
        end
    end

    def destroy
        @tag.destroy

        render json: @tag
    end

    private

    def set_tag
        @tag = Tag.find(params[:id])
    end

    def tag_param
        params.require(:tag).permit(:name)
    end
end
