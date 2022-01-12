class Api::TasksController < ApplicationController
    before_action :set_task, only: [:show, :edit, :update, :destroy]

    def index
        @tasks = Task.all
        render json: @tasks
    end

    def show
        render json: @task
    end

    def new
        @task = Task.new
        render json: @task
    end
    
    def create
        @task = Task.new(task_param)

        if @task.save
            render json: @task
        else
            render json: @task.errors.full_messages
        end
    end

    def edit
        render json: @task
    end

    def update
        if @task.update(task_param)
            render json: @task
        else
            render json: @task.errors.full_messages
        end
    end

    def destroy
        @task.destroy

        render json: @task
    end

    private

    def set_task
        @task = Task.find(params[:id])
    end

    def task_param
        params.require(:task).permit(:title, :tag_id, :date, :time)
    end
end
