class Api::TasksController < ApplicationController
    before_action :set_task, only: [:show, :edit, :update, :destroy]

    def index
        @tasks = Task.all
        render json: @tasks
    end

    def show
        if @task
            render json: @task
        else
            render json: @task.errors
        end
    end

    def new
        @task = Task.new
    end
    
    def create
        @task = Task.new(task_param)

        if @task.save
            render json: @task
        else
            render json: @task.errors
        end
    end

    def edit
    end

    def update
        if @task.update(task_param)
            render json: @task
        else
            render json: @task.errors
        end
    end

    def destroy
        @task.destroy

        render json: { notice: 'Task was successfully removed.'}
    end

    private

    def set_task
        @task = Task.find(params[:id])
    end

    def task_param
        params.require(:task).permit(:title, :tag_id, :date, :time)
    end

    # before_action :get_task, only: [:edit, :update, :destroy]
    # def index
    #     @tasks = Task.all
    #     render json: @tasks
    #     # @tags = Tag.all
    #     # @tag = Tag.new
    # end

    # def new
    #     @task = Task.new
    # end

    # def create
    #     @task = Task.new(task_param)

    #     if @task.save
    #         flash[:notice] = "'#{@task.title}' task was created successfully."
    #         redirect_to action: "index"
    #     else
    #         render action: "new"
    #     end
    # end

    # def edit
    # end

    # def update
    #     if @task.update(task_param)
    #         flash[:notice] = "'#{@task.title}' task was updated successfully."
    #         redirect_to action: "index"
    #     else
    #         render action: "edit"
    #     end
    # end

    # def destroy
    #     @task.destroy
    #     flash[:notice] = "'#{@task.title}' task was deleted successfully."
    #     redirect_to action: "index"
    # end
    
    # def create_tag
    #     @tag = Tag.new(tag_param)

    #     if @tag.save
    #         flash[:notice] = "'#{@tag.name}' tag was created successfully."
    #     else
    #         flash[:error] = "ERROR : #{@tag.errors.full_messages}"
    #     end

    #     redirect_to action: "index" 
    # end

    # private

    # def get_task
    #     @task = Task.find(params[:id])
    # end

    # def task_param
    #     params.require(:task).permit(:title, :tag_id, :date, :time)
    # end

    # def tag_param
    #     params.require(:tag).permit(:name)
    # end
end
