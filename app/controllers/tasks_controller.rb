class TasksController < ApplicationController
    def index
        @tasks = Task.all
        @tags = Tag.all
        @tag = Tag.new
    end

    def new
        @task = Task.new
    end

    def create
        @task = Task.new(task_param)

        if @task.save
            flash[:notice] = "'#{@task.title}' task was created successfully."
            redirect_to action: "index"
        else
            render action: "new"
        end
    end

    def edit
        @task = Task.find(params[:id])
    end

    def update
        @task = Task.find(params[:id])

        if @task.update(task_param)
            flash[:notice] = "'#{@task.title}' task was updated successfully."
            redirect_to action: "index"
        else
            render action: "edit"
        end
    end

    def destroy
    
    end
    
    def create_tag
        @tag = Tag.new(tag_param)

        if @tag.save
            flash[:notice] = "'#{@tag.name}' tag was created successfully."
        end

        redirect_to action: "index" 
    end

    private

    def task_param
        params.require(:task).permit(:title, :tag_id, :date, :time)
    end

    def tag_param
        params.require(:tag).permit(:name)
    end
end
